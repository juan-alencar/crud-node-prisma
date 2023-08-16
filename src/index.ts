import { PrismaClient } from ".prisma/client";
import app from "./app";

export const prisma = new PrismaClient();
