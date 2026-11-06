import { PrismaClient } from "../generated/client";

declare global {
  // eslint-disable-next-line no-var
  var centralPrisma: PrismaClient | undefined;
}

export function getCentralDbUrl(): string | undefined {
  const candidates: (string | undefined)[] = [
    process.env.DATABASE_URL,
    process.env.SUPABASE_POSTGRES_PRISMA_URL,
    process.env.POSTGRES_PRISMA_URL,
    process.env.SUPABASE_POSTGRES_URL,
    process.env.POSTGRES_URL,
    process.env.SUPABASE_POSTGRES_URL_NON_POOLING,
    process.env.DIRECT_URL,
  ];

  // Also check any prefixed variables dynamically (e.g. from Vercel integrations)
  for (const [key, val] of Object.entries(process.env)) {
    if (
      val &&
      (key.endsWith("_POSTGRES_PRISMA_URL") ||
        key.endsWith("_DATABASE_URL") ||
        key.endsWith("_POSTGRES_URL"))
    ) {
      candidates.push(val);
    }
  }

  let dbUrl = candidates.find((c) => typeof c === "string" && c.trim().length > 0);
  if (!dbUrl) return undefined;

  // If connecting to PostgreSQL, enforce schema=central parameter
  if (
    dbUrl.startsWith("postgres://") ||
    dbUrl.startsWith("postgresql://") ||
    dbUrl.startsWith("prisma://")
  ) {
    try {
      const urlObj = new URL(dbUrl);
      if (!urlObj.searchParams.has("schema")) {
        urlObj.searchParams.set("schema", "central");
        dbUrl = urlObj.toString();
      }
    } catch {
      if (!dbUrl.includes("schema=")) {
        dbUrl += (dbUrl.includes("?") ? "&" : "?") + "schema=central";
      }
    }
  }

  // Ensure process.env.DATABASE_URL reflects the schema for Prisma internally
  if (!process.env.DATABASE_URL || !process.env.DATABASE_URL.includes("schema=central")) {
    process.env.DATABASE_URL = dbUrl;
  }

  return dbUrl;
}

const centralDbUrl = getCentralDbUrl();

export const prisma =
  global.centralPrisma ||
  new PrismaClient({
    ...(centralDbUrl ? { datasources: { db: { url: centralDbUrl } } } : {}),
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.centralPrisma = prisma;
}

export default prisma;
