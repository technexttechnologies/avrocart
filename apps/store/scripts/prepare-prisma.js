const fs = require("fs");
const path = require("path");

const schemaPath = path.join(__dirname, "../prisma/schema.prisma");

if (!fs.existsSync(schemaPath)) {
  console.log("[prepare-prisma] schema.prisma not found at", schemaPath);
  process.exit(0);
}

let schema = fs.readFileSync(schemaPath, "utf8");
const dbUrl = process.env.DATABASE_URL || "";
const directUrl = process.env.DIRECT_URL || "";

// Detect database provider based on connection string
if (
  dbUrl.startsWith("postgres://") ||
  dbUrl.startsWith("postgresql://") ||
  dbUrl.startsWith("prisma://")
) {
  console.log('[prepare-prisma] Detected PostgreSQL (Supabase/Neon). Ensuring provider = "postgresql" in schema.prisma');
  schema = schema.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');
  if (directUrl && !schema.includes("directUrl")) {
    schema = schema.replace(
      /url\s*=\s*env\("DATABASE_URL"\)/g,
      'url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")'
    );
  }
} else if (dbUrl.startsWith("file:") || (!dbUrl && !process.env.VERCEL)) {
  console.log('[prepare-prisma] Detected SQLite/local DATABASE_URL. Ensuring provider = "sqlite" in schema.prisma');
  schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
  schema = schema.replace(/\s*directUrl\s*=\s*env\("DIRECT_URL"\)/g, "");
} else if (process.env.VERCEL) {
  // If running on Vercel without file: protocol, use postgresql
  console.log('[prepare-prisma] Running in Vercel environment. Setting provider = "postgresql" in schema.prisma');
  schema = schema.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');
  if (directUrl && !schema.includes("directUrl")) {
    schema = schema.replace(
      /url\s*=\s*env\("DATABASE_URL"\)/g,
      'url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")'
    );
  }
}

fs.writeFileSync(schemaPath, schema);
console.log("[prepare-prisma] Store schema.prisma verified successfully.");
