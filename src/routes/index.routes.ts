import { Router } from "express";
import { userRoutes } from "./users/user.routes";
import { projectRoutes } from "./projects/project.routes";
import { competenceRoutes } from "./competences/competence.routes";

export const routerApp = Router();

routerApp.use("/user", userRoutes);
routerApp.use("/project", projectRoutes);
routerApp.use("/competence", competenceRoutes);
