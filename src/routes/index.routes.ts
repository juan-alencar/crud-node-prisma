import { Router } from "express";
import { userRoutes } from "./users/user.routes";

export const routerApp = Router();

routerApp.use("/user", userRoutes);
