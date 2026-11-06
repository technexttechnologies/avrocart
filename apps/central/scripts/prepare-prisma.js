const fs = require("fs");
const path = require("path");

const schemaPath = path.join(__dirname, "../prisma/schema.prisma");

if (!fs.existsSync(schemaPath)) {
  console.log("[prepare-prisma] schema.prisma not found at", schemaPath);
  process.exit(0);
}

let schema = fs.readFileSync(schemaPath, "utf8");

// Check all common Vercel / Supabase injected environment variables
const dbUrl =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL ||
  process.env.SUPABASE_POSTGRES_PRISMA_URL ||
  "";

const directUrl =
  process.env.DIRECT_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  "";

// If DATABASE_URL is not set but Vercel injected POSTGRES_PRISMA_URL, determine which env var name to bind
let urlEnvVar = "DATABASE_URL";
if (!process.env.DATABASE_URL) {
  if (process.env.POSTGRES_PRISMA_URL) urlEnvVar = "POSTGRES_PRISMA_URL";
  else if (process.env.POSTGRES_URL) urlEnvVar = "POSTGRES_URL";
}

let directEnvVar = "DIRECT_URL";
if (!process.env.DIRECT_URL && process.env.POSTGRES_URL_NON_POOLING) {
  directEnvVar = "POSTGRES_URL_NON_POOLING";
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
  
  if (urlEnvVar !== "DATABASE_URL") {
    schema = schema.replace(/env\("DATABASE_URL"\)/g, `env("${urlEnvVar}")`);
  }

  if ((directUrl || process.env[directEnvVar]) && !schema.includes("directUrl")) {
    schema = schema.replace(
      new RegExp(`url\\s*=\\s*env\\("${urlEnvVar}"\\)`, "g"),
      `url       = env("${urlEnvVar}")\n  directUrl = env("${directEnvVar}")`
    );
  }
} else if (dbUrl.startsWith("file:") || (!dbUrl && !process.env.VERCEL)) {
  console.log('[prepare-prisma] Detected SQLite/local DATABASE_URL. Ensuring provider = "sqlite" in schema.prisma');
  schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
  schema = schema.replace(/\s*directUrl\s*=\s*env\("[^"]+"\)/g, "");
}

fs.writeFileSync(schemaPath, schema);
console.log("[prepare-prisma] Central schema.prisma verified successfully.");
