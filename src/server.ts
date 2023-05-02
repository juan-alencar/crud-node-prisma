import express, { urlencoded } from "express";
import { routerApp } from "./routes/index.routes";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("", routerApp);
app.listen(3000, () => console.log("Server is running in port 3000"));
