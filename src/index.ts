import { PrismaClient } from ".prisma/client";
import app from "./app";

export const prisma = new PrismaClient();

app.listen(3333, () => console.log(`Server is running in port 3333`));
