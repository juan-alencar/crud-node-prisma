import express, { urlencoded } from "express";
import cors from "cors";

import { routerApp } from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.get<{}, any>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use(urlencoded({ extended: true }));
app.use("", routerApp);

export default app;
