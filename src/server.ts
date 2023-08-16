import express, { urlencoded } from "express";
import { routerApp } from "./routes/index.routes";

const app = express();
const port = 3333;
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("", routerApp);
app.listen(port, () => console.log(`Server is running in port ${port}`));
export default app;
