import { PrismaClient } from ".prisma/client";
import app from "./app";

const port = 3333;
export const prisma = new PrismaClient();

app.listen(port, () => console.log(`Server is running in port ${port}`));
