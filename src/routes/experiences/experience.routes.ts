import { Router } from "express";
import { createExperienceController } from "../../controllers/experiences/createExperience.controller";
import { getExperienceController } from "../../controllers/experiences/getExperience.controller";
import { deleteExperienceController } from "../../controllers/experiences/deleteExperience.controller";
import { updateExperienceController } from "../../controllers/experiences/updateExperience.controller";

export const experienceRoutes = Router();

experienceRoutes.post("", createExperienceController);
experienceRoutes.get("/", getExperienceController);
experienceRoutes.delete("/:id", deleteExperienceController);
experienceRoutes.patch("/:id", updateExperienceController);
