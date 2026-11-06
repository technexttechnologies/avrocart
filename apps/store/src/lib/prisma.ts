import { PrismaClient } from "../generated/client";

declare global {
  // eslint-disable-next-line no-var
  var storePrisma: PrismaClient | undefined;
}

export const prisma =
  global.storePrisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.storePrisma = prisma;
}

export default prisma;
