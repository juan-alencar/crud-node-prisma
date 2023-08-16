"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceRoutes = void 0;
const express_1 = require("express");
const createExperience_controller_1 = require("../../controllers/experiences/createExperience.controller");
const getExperience_controller_1 = require("../../controllers/experiences/getExperience.controller");
const deleteExperience_controller_1 = require("../../controllers/experiences/deleteExperience.controller");
const updateExperience_controller_1 = require("../../controllers/experiences/updateExperience.controller");
exports.experienceRoutes = (0, express_1.Router)();
exports.experienceRoutes.post("", createExperience_controller_1.createExperienceController);
exports.experienceRoutes.get("/", getExperience_controller_1.getExperienceController);
exports.experienceRoutes.delete("/:id", deleteExperience_controller_1.deleteExperienceController);
exports.experienceRoutes.patch("/:id", updateExperience_controller_1.updateExperienceController);
//# sourceMappingURL=experience.routes.js.map