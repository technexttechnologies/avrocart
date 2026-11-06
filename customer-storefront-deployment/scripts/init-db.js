/**
 * ==============================================================================
 * AVRO CUSTOMER STOREFRONT — DATABASE INITIALIZER & HEALTH CHECK
 * ==============================================================================
 * Connects to the configured database, validates connection, pushes Prisma schema,
 * and ensures essential administrator account & settings are initialized.
 *
 * Usage:
 *   node customer-storefront-deployment/scripts/init-db.js
 * ==============================================================================
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

// Resolve paths
const rootDir = path.resolve(__dirname, "../../");
const storeDir = path.resolve(rootDir, "apps/store");
const storeEnvPath = path.resolve(storeDir, ".env");
const deployEnvPath = path.resolve(__dirname, "../.env");

// Load .env if present
if (fs.existsSync(deployEnvPath) && !fs.existsSync(storeEnvPath)) {
  console.log("📋 Copying deployment .env to apps/store/.env...");
  fs.copyFileSync(deployEnvPath, storeEnvPath);
}

// Ensure Prisma client is prepared & generated
console.log("\n========================================================");
console.log("🚀 AVROCART STOREFRONT DATABASE INITIALIZATION");
console.log("========================================================\n");

try {
  console.log("1️⃣  Preparing Prisma Schema & Detecting Database Engine...");
  execSync("node scripts/prepare-prisma.js", { cwd: storeDir, stdio: "inherit" });

  console.log("\n2️⃣  Generating Prisma Client for Customer Store...");
  execSync("npx prisma generate", { cwd: storeDir, stdio: "inherit" });

  console.log("\n3️⃣  Pushing Schema Migrations to Database...");
  execSync("npx prisma db push --accept-data-loss", { cwd: storeDir, stdio: "inherit" });

  console.log("\n4️⃣  Verifying Admin Account & Default Seed Data...");
  // Require Prisma Client from generated path
  const prismaClientPath = path.resolve(storeDir, "src/generated/client");
  const { PrismaClient } = require(prismaClientPath);
  const prisma = new PrismaClient();

  async function checkAndSeed() {
    try {
      // Check admin users
      const adminCount = await prisma.adminUser.count();
      if (adminCount === 0) {
        console.log("   Creating initial store administrator...");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("storeadmin123", salt);

        await prisma.adminUser.create({
          data: {
            email: "storeadmin@example.com",
            username: "storeadmin",
            passwordHash: hashedPassword,
            name: "Store Administrator",
            role: "OWNER",
            isActive: true,
          },
        });
        console.log("   ✅ Created default administrator:");
        console.log("      Email:    storeadmin@example.com");
        console.log("      Username: storeadmin");
        console.log("      Password: storeadmin123 (Change in /admin/profile)");
      } else {
        console.log(`   ✅ Administrator accounts verified (${adminCount} user(s) found).`);
      }

      // Check categories
      const categoryCount = await prisma.category.count();
      if (categoryCount === 0) {
        console.log("   Creating default product categories...");
        await prisma.category.createMany({
          data: [
            { name: "Electronics & Tech", slug: "electronics" },
            { name: "Apparel & Fashion", slug: "apparel" },
            { name: "Home & Lifestyle", slug: "lifestyle" },
          ],
        });
        console.log("   ✅ Seeded 3 default product categories.");
      } else {
        console.log(`   ✅ Categories verified (${categoryCount} categories found).`);
      }

      console.log("\n========================================================");
      console.log("🎉 DATABASE INITIALIZATION COMPLETE & VERIFIED!");
      console.log("========================================================\n");
    } finally {
      await prisma.$disconnect();
    }
  }

  checkAndSeed().catch((err) => {
    console.error("❌ Seeding verification error:", err.message);
    process.exit(1);
  });

} catch (err) {
  console.error("\n❌ Database initialization failed:", err.message);
  process.exit(1);
}
