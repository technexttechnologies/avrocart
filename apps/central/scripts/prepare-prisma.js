const fs = require("fs");
const path = require("path");

const schemaPath = path.join(__dirname, "../prisma/schema.prisma");
const envPath = path.join(__dirname, "../.env");

if (!fs.existsSync(schemaPath)) {
  console.log("[prepare-prisma] schema.prisma not found at", schemaPath);
  process.exit(0);
}

let schema = fs.readFileSync(schemaPath, "utf8");

// Dynamically discover any Supabase / PostgreSQL connection variable
const envKeys = Object.keys(process.env);

let urlEnvVar = "DATABASE_URL";
let dbUrl = process.env.DATABASE_URL || "";

if (!dbUrl) {
  // Check common Vercel / Supabase integration variables or any custom prefix
  const matchKey = envKeys.find(
    (k) =>
      k === "POSTGRES_PRISMA_URL" ||
      k.endsWith("_POSTGRES_PRISMA_URL") ||
      k === "POSTGRES_URL" ||
      k.endsWith("_POSTGRES_URL") ||
      (k.endsWith("_DATABASE_URL") && k !== "DATABASE_URL")
  );

  if (matchKey && process.env[matchKey]) {
    urlEnvVar = matchKey;
    dbUrl = process.env[matchKey];
    console.log(`[prepare-prisma] Discovered connection variable: ${urlEnvVar}`);
  }
}

let directEnvVar = "DIRECT_URL";
let directUrl = process.env.DIRECT_URL || "";

if (!directUrl) {
  const matchDirect = envKeys.find(
    (k) =>
      k === "POSTGRES_URL_NON_POOLING" ||
      k.endsWith("_POSTGRES_URL_NON_POOLING") ||
      k.endsWith("_DIRECT_URL")
  );

  if (matchDirect && process.env[matchDirect]) {
    directEnvVar = matchDirect;
    directUrl = process.env[matchDirect];
    console.log(`[prepare-prisma] Discovered non-pooling direct variable: ${directEnvVar}`);
  }
}

// Detect database provider based on connection string or Vercel environment
if (
  dbUrl.startsWith("postgres://") ||
  dbUrl.startsWith("postgresql://") ||
  dbUrl.startsWith("prisma://") ||
  process.env.VERCEL
) {
  console.log(`[prepare-prisma] Detected PostgreSQL (Supabase/Neon). Binding url = env("${urlEnvVar}")`);
  schema = schema.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');

  // Enforce schema=central
  if (dbUrl && !dbUrl.includes("schema=")) {
    dbUrl += (dbUrl.includes("?") ? "&" : "?") + "schema=central";
    process.env[urlEnvVar] = dbUrl;
    process.env.DATABASE_URL = dbUrl;
    console.log("[prepare-prisma] Appended schema=central to Central DB URL");
  }

  if (directUrl && !directUrl.includes("schema=")) {
    directUrl += (directUrl.includes("?") ? "&" : "?") + "schema=central";
    process.env[directEnvVar] = directUrl;
    process.env.DIRECT_URL = directUrl;
    console.log("[prepare-prisma] Appended schema=central to Central DIRECT_URL");
  }

  if (urlEnvVar !== "DATABASE_URL") {
    schema = schema.replace(/env\("DATABASE_URL"\)/g, `env("${urlEnvVar}")`);
  }

  if ((directUrl || process.env[directEnvVar]) && !schema.includes("directUrl")) {
    schema = schema.replace(
      new RegExp(`url\\s*=\\s*env\\("${urlEnvVar}"\\)`, "g"),
      `url       = env("${urlEnvVar}")\n  directUrl = env("${directEnvVar}")`
    );
  }

  // Update .env file if it exists so Next.js build workers inherit it
  try {
    let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
    if (dbUrl && !envContent.includes(dbUrl)) {
      if (/^DATABASE_URL=.*/m.test(envContent)) {
        envContent = envContent.replace(/^DATABASE_URL=.*/m, `DATABASE_URL="${dbUrl}"`);
      } else {
        envContent += `\nDATABASE_URL="${dbUrl}"\n`;
      }
      if (directUrl) {
        if (/^DIRECT_URL=.*/m.test(envContent)) {
          envContent = envContent.replace(/^DIRECT_URL=.*/m, `DIRECT_URL="${directUrl}"`);
        } else {
          envContent += `\nDIRECT_URL="${directUrl}"\n`;
        }
      }
      fs.writeFileSync(envPath, envContent.trim() + "\n");
    }
  } catch (e) {
    console.warn("[prepare-prisma] Could not write to .env:", e.message);
  }
} else if (dbUrl.startsWith("file:") || (!dbUrl && !process.env.VERCEL)) {
  console.log('[prepare-prisma] Detected SQLite/local DATABASE_URL. Ensuring provider = "sqlite" in schema.prisma');
  schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
  schema = schema.replace(/\s*directUrl\s*=\s*env\("[^"]+"\)/g, "");
}

fs.writeFileSync(schemaPath, schema);
console.log("[prepare-prisma] Central schema.prisma verified successfully.");
