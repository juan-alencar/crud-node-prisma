import { Router } from "express";
import { createProjectController } from "../../controllers/projects/createProject.controller";
import { getProjectController } from "../../controllers/projects/getProject.controller";
import { deleteProjectController } from "../../controllers/projects/deleteProject.controller";
import { updateProjectController } from "../../controllers/projects/updateProject.controller";

export const projectRoutes = Router();

projectRoutes.post("", createProjectController);
projectRoutes.get("/", getProjectController);
projectRoutes.delete("/:id", deleteProjectController);
projectRoutes.patch("/:id", updateProjectController);
