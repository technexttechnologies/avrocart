/**
 * AVRO Database Server Connection & Migration Tool for Supabase / PostgreSQL
 * Usage: node scripts/connect-db.js "<DATABASE_URL>" [target] ["<DIRECT_URL>"]
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const dbUrl = process.argv[2];
const target = process.argv[3] || "central"; // central, store, or both
const directUrl = process.argv[4] || "";

if (!dbUrl) {
  console.log(`
=============================================================
  AVRO SUPABASE / POSTGRESQL CONNECTION HELPER
=============================================================

Usage:
  node scripts/connect-db.js "<DATABASE_URL>" [target] ["<DIRECT_URL>"]

Supabase Connection Strings:
  1. Go to your Supabase Project Dashboard
  2. Navigate to: Project Settings -> Database -> Connection string
  3. Select "URI" tab:
     - Transaction Pooler (Recommended for Vercel/Serverless, Port 6543):
       postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true
     - Direct / Session Connection (Port 5432):
       postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres

Command Examples:
  A) Connect Central Panel with Supabase Direct Connection:
     node scripts/connect-db.js "postgresql://postgres.xxx:mypassword@aws-0-ap-south-1.pooler.supabase.com:5432/postgres" central

  B) Connect with Pooler and Direct URL:
     node scripts/connect-db.js "postgresql://postgres.xxx:mypassword@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true" central "postgresql://postgres.xxx:mypassword@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"
=============================================================
`);
  process.exit(1);
}

console.log("-------------------------------------------------------------");
console.log("Configuring Supabase Connection...");
console.log("Target:", target);
console.log("Database Host:", dbUrl.split("@")[1]?.split("/")[0] || "custom");
console.log("-------------------------------------------------------------");

function updateAppDb(appDir, isCentral) {
  const envPath = path.join(appDir, ".env");
  const schemaPath = path.join(appDir, "prisma/schema.prisma");

  // 1. Update .env
  let envContent = "";
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, "utf8");
    if (envContent.includes("DATABASE_URL=")) {
      envContent = envContent.replace(/DATABASE_URL=.*/g, `DATABASE_URL="${dbUrl}"`);
    } else {
      envContent += `\nDATABASE_URL="${dbUrl}"\n`;
    }

    if (directUrl) {
      if (envContent.includes("DIRECT_URL=")) {
        envContent = envContent.replace(/DIRECT_URL=.*/g, `DIRECT_URL="${directUrl}"`);
      } else {
        envContent += `DIRECT_URL="${directUrl}"\n`;
      }
    }
  } else {
    envContent = `DATABASE_URL="${dbUrl}"\n`;
    if (directUrl) envContent += `DIRECT_URL="${directUrl}"\n`;
    envContent += `NODE_ENV="development"\n`;
  }
  fs.writeFileSync(envPath, envContent, "utf8");
  console.log(`[OK] Updated ${envPath}`);

  // 2. Adjust schema.prisma provider
  let schema = fs.readFileSync(schemaPath, "utf8");
  if (dbUrl.startsWith("postgres://") || dbUrl.startsWith("postgresql://")) {
    schema = schema.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');
    if (directUrl && !schema.includes("directUrl")) {
      schema = schema.replace(
        /url\s*=\s*env\("DATABASE_URL"\)/g,
        'url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")'
      );
    }
  } else if (dbUrl.startsWith("file:")) {
    schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
    schema = schema.replace(/\s*directUrl\s*=\s*env\("DIRECT_URL"\)/g, "");
  }
  fs.writeFileSync(schemaPath, schema, "utf8");
  console.log(`[OK] Updated ${schemaPath}`);

  // 3. Generate and Push Schema
  console.log(`[Connecting and syncing schema to Supabase for ${path.basename(appDir)}...]`);
  try {
    execSync("npx prisma generate", { cwd: appDir, stdio: "inherit", env: { ...process.env, DATABASE_URL: directUrl || dbUrl, DIRECT_URL: directUrl } });
    execSync("npx prisma db push --accept-data-loss", { cwd: appDir, stdio: "inherit", env: { ...process.env, DATABASE_URL: directUrl || dbUrl, DIRECT_URL: directUrl } });
    console.log(`[OK] Tables created in Supabase successfully!`);

    // 4. Seed database
    console.log(`[Seeding initial master data...]`);
    execSync("node prisma/seed.js", { cwd: appDir, stdio: "inherit", env: { ...process.env, DATABASE_URL: directUrl || dbUrl, DIRECT_URL: directUrl } });
    console.log(`[OK] Master data seeded into Supabase!`);
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
console.log("Supabase connection and database setup finished!");
console.log("-------------------------------------------------------------");
