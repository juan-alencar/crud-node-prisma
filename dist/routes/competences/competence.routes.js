"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.competenceRoutes = void 0;
const express_1 = require("express");
const createCompetence_controller_1 = require("../../controllers/competences/createCompetence.controller");
const getCompetence_controller_1 = require("../../controllers/competences/getCompetence.controller");
const deleteCompetence_controller_1 = require("../../controllers/competences/deleteCompetence.controller");
const updateCompetence_controller_1 = require("../../controllers/competences/updateCompetence.controller");
exports.competenceRoutes = (0, express_1.Router)();
exports.competenceRoutes.post("", createCompetence_controller_1.createCompetenceController);
exports.competenceRoutes.get("/", getCompetence_controller_1.getCompetenceController);
exports.competenceRoutes.delete("/:id", deleteCompetence_controller_1.deleteCompetenceController);
exports.competenceRoutes.patch("/:id", updateCompetence_controller_1.updateCompetenceController);
//# sourceMappingURL=competence.routes.js.map