import { PrismaClient } from "../generated/client";

declare global {
  // eslint-disable-next-line no-var
  var centralPrisma: PrismaClient | undefined;
}

export const prisma =
  global.centralPrisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.centralPrisma = prisma;
}

export default prisma;
