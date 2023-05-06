import { Router } from "express";
import { createCompetenceController } from "../../controllers/competences/createCompetence.controller";
import { getCompetenceController } from "../../controllers/competences/getCompetence.controller";
import { deleteCompetenceController } from "../../controllers/competences/deleteCompetence.controller";
import { updateCompetenceController } from "../../controllers/competences/updateCompetence.controller";

export const competenceRoutes = Router();

competenceRoutes.post("", createCompetenceController);
competenceRoutes.get("/", getCompetenceController);
competenceRoutes.delete("/:id", deleteCompetenceController);
competenceRoutes.patch("/:id", updateCompetenceController);
