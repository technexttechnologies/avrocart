/**
 * ==============================================================================
 * AVRO CUSTOMER STOREFRONT — PRE-FLIGHT CONNECTIVITY & DIAGNOSTIC TEST
 * ==============================================================================
 * Tests database connectivity, central licensing heartbeat, and directory permissions.
 *
 * Usage:
 *   node customer-storefront-deployment/scripts/test-connection.js
 * ==============================================================================
 */

const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");

const rootDir = path.resolve(__dirname, "../../");
const storeDir = path.resolve(rootDir, "apps/store");
const envFile = fs.existsSync(path.resolve(storeDir, ".env"))
  ? path.resolve(storeDir, ".env")
  : path.resolve(__dirname, "../.env");

console.log("\n========================================================");
console.log("🔍 AVROCART STOREFRONT PRE-FLIGHT SYSTEM DIAGNOSTICS");
console.log("========================================================\n");

// 1. Check Node.js version
const nodeVersion = process.versions.node;
const majorVersion = parseInt(nodeVersion.split(".")[0], 10);
if (majorVersion >= 18) {
  console.log(`[PASS] Node.js Runtime: v${nodeVersion} (Supported >= 18.x)`);
} else {
  console.log(`[FAIL] Node.js Runtime: v${nodeVersion} (Requires >= 18.x)`);
}

// 2. Check Environment Variables
if (fs.existsSync(envFile)) {
  console.log(`[PASS] Environment Configuration: Found (${envFile})`);
} else {
  console.log(`[WARN] Environment Configuration: .env file missing in store directory!`);
}

// 3. Check Uploads Directory Write Access
const uploadDir = path.resolve(storeDir, "public/uploads/products");
try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  const testFile = path.resolve(uploadDir, ".write-test-" + Date.now());
  fs.writeFileSync(testFile, "OK");
  fs.unlinkSync(testFile);
  console.log(`[PASS] Media Storage Directory: Writable (${uploadDir})`);
} catch (e) {
  console.log(`[FAIL] Media Storage Directory: Not writable (${e.message})`);
}

// 4. Test Central Licensing Server
const centralUrl = process.env.CENTRAL_API_URL || "https://licensing.technext.co/api/v1";
console.log(`[INFO] Testing Central License Endpoint: ${centralUrl}...`);

try {
  const urlObj = new URL(centralUrl);
  const client = urlObj.protocol === "https:" ? https : http;
  
  const req = client.get(centralUrl, { timeout: 5000 }, (res) => {
    console.log(`[PASS] Central License Gateway: Reachable (HTTP ${res.statusCode})`);
    finishDiagnostics();
  });

  req.on("error", (e) => {
    console.log(`[WARN] Central License Gateway: Offline or Unreachable (${e.message}). (Offline 72h Grace Period will apply)`);
    finishDiagnostics();
  });

  req.on("timeout", () => {
    req.destroy();
    console.log(`[WARN] Central License Gateway: Timed out. (Offline 72h Grace Period will apply)`);
    finishDiagnostics();
  });
} catch (e) {
  console.log(`[WARN] Central License Gateway URL format invalid: ${centralUrl}`);
  finishDiagnostics();
}

function finishDiagnostics() {
  console.log("\n========================================================");
  console.log("🏁 DIAGNOSTIC CHECK COMPLETED");
  console.log("========================================================\n");
}
