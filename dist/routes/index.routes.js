"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApp = void 0;
const express_1 = require("express");
const user_routes_1 = require("./users/user.routes");
const project_routes_1 = require("./projects/project.routes");
const competence_routes_1 = require("./competences/competence.routes");
const experience_routes_1 = require("./experiences/experience.routes");
const feedback_routes_1 = require("./feedbacks/feedback.routes");
exports.routerApp = (0, express_1.Router)();
exports.routerApp.use("/user", user_routes_1.userRoutes);
exports.routerApp.use("/project", project_routes_1.projectRoutes);
exports.routerApp.use("/competence", competence_routes_1.competenceRoutes);
exports.routerApp.use("/experience", experience_routes_1.experienceRoutes);
exports.routerApp.use("/feedback", feedback_routes_1.feedbackRoutes);
//# sourceMappingURL=index.routes.js.map