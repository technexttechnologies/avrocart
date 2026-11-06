/**
 * AVRO Database Server Connection & Migration Tool for Supabase / PostgreSQL
 * Usage: node scripts/connect-db.js "<DATABASE_URL>" [target] ["<DIRECT_URL>"]
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rawDbUrl = process.argv[2];
const target = process.argv[3] || "central"; // central, store, or both
const rawDirectUrl = process.argv[4] || "";

if (!rawDbUrl) {
  console.log("Usage: node scripts/connect-db.js <DATABASE_URL> [central|store|both] [DIRECT_URL]");
  process.exit(1);
}

function withSchema(url, schemaName) {
  if (!url || url.startsWith("file:")) return url;
  if (url.includes("schema=")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}schema=${schemaName}`;
}

function updateAppDb(appDir, isCentral) {
  const schemaName = isCentral ? "central" : "store";
  const appDbUrl = withSchema(rawDbUrl, schemaName);
  const appDirectUrl = withSchema(rawDirectUrl, schemaName);

  const envPath = path.join(appDir, ".env");
  const schemaPath = path.join(appDir, "prisma/schema.prisma");

  // 1. Update .env
  let envContent = "";
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, "utf8");
    if (envContent.includes("DATABASE_URL=")) {
      envContent = envContent.replace(/DATABASE_URL=.*/g, `DATABASE_URL="${appDbUrl}"`);
    } else {
      envContent += `\nDATABASE_URL="${appDbUrl}"\n`;
    }

    if (appDirectUrl) {
      if (envContent.includes("DIRECT_URL=")) {
        envContent = envContent.replace(/DIRECT_URL=.*/g, `DIRECT_URL="${appDirectUrl}"`);
      } else {
        envContent += `DIRECT_URL="${appDirectUrl}"\n`;
      }
    }
  } else {
    envContent = `DATABASE_URL="${appDbUrl}"\n`;
    if (appDirectUrl) envContent += `DIRECT_URL="${appDirectUrl}"\n`;
    envContent += `NODE_ENV="development"\n`;
  }
  fs.writeFileSync(envPath, envContent, "utf8");
  console.log(`[OK] Updated ${envPath} (schema: ${schemaName})`);

  // 2. Adjust schema.prisma provider
  let schema = fs.readFileSync(schemaPath, "utf8");
  if (appDbUrl.startsWith("postgres://") || appDbUrl.startsWith("postgresql://")) {
    schema = schema.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');
    if (appDirectUrl && !schema.includes("directUrl")) {
      schema = schema.replace(
        /url\s*=\s*env\("DATABASE_URL"\)/g,
        'url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")'
      );
    }
  } else if (appDbUrl.startsWith("file:")) {
    schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
    schema = schema.replace(/\s*directUrl\s*=\s*env\("[^"]+"\)/g, "");
  }
  fs.writeFileSync(schemaPath, schema, "utf8");
  console.log(`[OK] Updated ${schemaPath}`);

  // 3. Generate and Push Schema
  console.log(`[Connecting and syncing schema to Supabase for ${path.basename(appDir)} (schema: ${schemaName})...]`);
  try {
    const runEnv = {
      ...process.env,
      DATABASE_URL: appDirectUrl || appDbUrl,
      DIRECT_URL: appDirectUrl || appDbUrl,
    };
    execSync("npx prisma generate", { cwd: appDir, stdio: "inherit", env: runEnv });
    execSync("npx prisma db push --accept-data-loss", { cwd: appDir, stdio: "inherit", env: runEnv });
    console.log(`[OK] Tables created in Supabase (schema: ${schemaName}) successfully!`);

    // 4. Seed database
    console.log(`[Seeding initial master data for ${path.basename(appDir)}...]`);
    execSync("node prisma/seed.js", { cwd: appDir, stdio: "inherit", env: runEnv });
    console.log(`[OK] Seed complete for ${path.basename(appDir)}!`);
  } catch (err) {
    console.error(`[ERROR] Supabase sync/seed failed:`, err.message);
  }
}

if (target === "central" || target === "both") {
  const centralDir = path.join(__dirname, "../apps/central");
  updateAppDb(centralDir, true);
}

if (target === "store" || target === "both") {
  const storeDir = path.join(__dirname, "../apps/store");
  updateAppDb(storeDir, false);
}

console.log("-------------------------------------------------------------");
console.log("Supabase multi-schema setup completed!");
console.log("-------------------------------------------------------------");
