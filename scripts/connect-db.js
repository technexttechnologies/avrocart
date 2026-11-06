/**
 * AVRO Database Server Connection & Migration Tool
 * Usage: node scripts/connect-db.js "<DATABASE_URL>" [central|store|both]
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const dbUrl = process.argv[2];
const target = process.argv[3] || "both"; // central, store, or both

if (!dbUrl) {
  console.log(`
=============================================================
  AVRO DATABASE SERVER CONNECTION HELPER
=============================================================

Usage:
  node scripts/connect-db.js "<DATABASE_URL>" [target]

Examples:
  1) Connect Central Panel to Neon / Supabase / PostgreSQL:
     node scripts/connect-db.js "postgresql://user:password@ep-xyz.neon.tech/avro_db?sslmode=require" central

  2) Connect Customer Store to PostgreSQL:
     node scripts/connect-db.js "postgresql://user:password@ep-xyz.neon.tech/store_db?sslmode=require" store

  3) Connect both:
     node scripts/connect-db.js "postgresql://user:password@ep-xyz.neon.tech/avro_db?sslmode=require" both

Supported Providers:
  - PostgreSQL (Neon, Supabase, AWS RDS, Railway, Aiven, Docker, Local)
  - SQLite (file:./dev.db)
=============================================================
`);
  process.exit(1);
}

console.log("-------------------------------------------------------------");
console.log("Configuring Database Connection...");
console.log("Target:", target);
console.log("Database URL Protocol:", dbUrl.split("://")[0]);
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
  } else {
    envContent = `DATABASE_URL="${dbUrl}"\nNODE_ENV="development"\n`;
  }
  fs.writeFileSync(envPath, envContent, "utf8");
  console.log(`[OK] Updated ${envPath}`);

  // 2. Adjust schema.prisma provider
  let schema = fs.readFileSync(schemaPath, "utf8");
  if (dbUrl.startsWith("postgres://") || dbUrl.startsWith("postgresql://")) {
    schema = schema.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');
  } else if (dbUrl.startsWith("file:")) {
    schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
  }
  fs.writeFileSync(schemaPath, schema, "utf8");
  console.log(`[OK] Updated ${schemaPath}`);

  // 3. Generate and Push Schema
  console.log(`[Pushing schema to database for ${path.basename(appDir)}...]`);
  try {
    execSync("npx prisma generate", { cwd: appDir, stdio: "inherit" });
    execSync("npx prisma db push --accept-data-loss", { cwd: appDir, stdio: "inherit" });
    console.log(`[OK] Schema successfully pushed to database!`);

    // 4. Seed database
    console.log(`[Seeding initial records...]`);
    execSync("node prisma/seed.js", { cwd: appDir, stdio: "inherit" });
    console.log(`[OK] Database seeded successfully!`);
  } catch (err) {
    console.error(`[ERROR] Failed to push/seed database:`, err.message);
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
console.log("Database server connection completed successfully!");
console.log("-------------------------------------------------------------");
