"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = require("express");
const createProject_controller_1 = require("../../controllers/projects/createProject.controller");
const getProject_controller_1 = require("../../controllers/projects/getProject.controller");
const deleteProject_controller_1 = require("../../controllers/projects/deleteProject.controller");
const updateProject_controller_1 = require("../../controllers/projects/updateProject.controller");
exports.projectRoutes = (0, express_1.Router)();
exports.projectRoutes.post("", createProject_controller_1.createProjectController);
exports.projectRoutes.get("/", getProject_controller_1.getProjectController);
exports.projectRoutes.delete("/:id", deleteProject_controller_1.deleteProjectController);
exports.projectRoutes.patch("/:id", updateProject_controller_1.updateProjectController);
//# sourceMappingURL=project.routes.js.map