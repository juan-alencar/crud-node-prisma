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

app.listen(3333, () => console.log(`Server is running in port 3333`));

export default app;
