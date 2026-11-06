const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const routes = [
  "apps/store/src/app/api/admin/categories/route.ts",
  "apps/store/src/app/api/admin/coupons/route.ts",
  "apps/store/src/app/api/admin/dashboard/route.ts",
  "apps/store/src/app/api/admin/inventory/route.ts",
  "apps/store/src/app/api/admin/license/sync/route.ts",
  "apps/store/src/app/api/admin/license/update/route.ts",
  "apps/store/src/app/api/admin/settings/payments/route.ts",
  "apps/store/src/app/api/admin/settings/shipping/route.ts",
  "apps/store/src/app/api/setup/route.ts",
  "apps/store/src/app/api/store/checkout/route.ts",
  "apps/store/src/app/api/store/track/route.ts",
];

for (const rel of routes) {
  const full = path.join(rootDir, rel);
  if (fs.existsSync(full)) {
    let content = fs.readFileSync(full, "utf8");
    if (!content.includes("force-dynamic")) {
      content = 'export const dynamic = "force-dynamic";\n\n' + content;
      fs.writeFileSync(full, content, "utf8");
      console.log("Added force-dynamic to:", rel);
    }
  }
}

console.log("All routes verified.");
