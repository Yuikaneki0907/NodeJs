import { PrismaClient } from "src/generated/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    accelerateUrl:
      process.env.DATABASE_URL ??
      "mysql://root:123456@localhost:3306/nodejspro",
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
