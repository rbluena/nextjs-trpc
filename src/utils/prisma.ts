import { PrismaClient } from "@prisma/client";
import { isProduction } from "~/constants";

declare global {
  var prisma: PrismaClient | undefined;
}

if (!isProduction) {
  global.prisma = global.prisma || new PrismaClient();
}

export const prisma = global.prisma || new PrismaClient();
