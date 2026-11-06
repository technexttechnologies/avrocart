/**
 * ==============================================================================
 * AVRO CUSTOMER STOREFRONT — STANDALONE PACKAGE EXPORTER
 * ==============================================================================
 * Bundles the Customer Storefront into an independent, self-contained directory
 * with zero monorepo dependencies, ready to be zipped and delivered to clients.
 *
 * Usage:
 *   node customer-storefront-deployment/scripts/package-standalone.js
 * ==============================================================================
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const rootDir = path.resolve(__dirname, "../../");
const storeDir = path.resolve(rootDir, "apps/store");
const licenseCoreDir = path.resolve(rootDir, "packages/license-core");
const deployDir = path.resolve(rootDir, "customer-storefront-deployment");
const outDir = path.resolve(rootDir, "dist/customer-storefront-standalone");

console.log("\n========================================================");
console.log("📦 PACKAGING STANDALONE CUSTOMER STOREFRONT");
console.log("========================================================\n");

// 1. Build license-core
console.log("1️⃣  Compiling license-core package...");
execSync("npm --workspace=packages/license-core run build", { cwd: rootDir, stdio: "inherit" });

// 2. Clean output dir
if (fs.existsSync(outDir)) {
  console.log("2️⃣  Cleaning existing distribution directory...");
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// 3. Helper to copy directories recursively excluding node_modules & .next
function copyRecursive(src, dest, ignore = []) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (ignore.includes(entry.name)) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath, ignore);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 4. Copy store files
console.log("3️⃣  Copying customer storefront application files...");
copyRecursive(storeDir, outDir, ["node_modules", ".next", ".env.local"]);

// 5. Copy license-core into local vendor package
console.log("4️⃣  Embedding @avro/license-core directly into vendor modules...");
const vendorLicenseDir = path.join(outDir, "packages/license-core");
copyRecursive(licenseCoreDir, vendorLicenseDir, ["node_modules"]);

// 6. Copy deployment files
console.log("5️⃣  Copying deployment scripts, docker-compose, and nginx templates...");
const deployDest = path.join(outDir, "deploy");
copyRecursive(deployDir, deployDest, ["scripts"]);

// Also place top-level convenience files
fs.copyFileSync(path.join(deployDir, ".env.example"), path.join(outDir, ".env.example"));
fs.copyFileSync(path.join(deployDir, "docker-compose.yml"), path.join(outDir, "docker-compose.yml"));
fs.copyFileSync(path.join(deployDir, "Dockerfile"), path.join(outDir, "Dockerfile"));
fs.copyFileSync(path.join(deployDir, "ecosystem.config.js"), path.join(outDir, "ecosystem.config.js"));
fs.copyFileSync(path.join(deployDir, "deploy.sh"), path.join(outDir, "deploy.sh"));
fs.copyFileSync(path.join(deployDir, "deploy.bat"), path.join(outDir, "deploy.bat"));
fs.copyFileSync(path.join(deployDir, "README.md"), path.join(outDir, "DEPLOY_README.md"));

console.log("\n========================================================");
console.log("🎉 STANDALONE CUSTOMER STOREFRONT BUNDLE CREATED!");
console.log(`📂 Output location: ${outDir}`);
console.log("========================================================\n");
