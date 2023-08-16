"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = require("express");
const createFeedback_controller_1 = require("../../controllers/feedbacks/createFeedback.controller");
const getFeedback_controller_1 = require("../../controllers/feedbacks/getFeedback.controller");
const deleteFeedback_controller_1 = require("../../controllers/feedbacks/deleteFeedback.controller");
const updateFeedback_controller_1 = require("../../controllers/feedbacks/updateFeedback.controller");
exports.feedbackRoutes = (0, express_1.Router)();
exports.feedbackRoutes.post("", createFeedback_controller_1.createFeedbackController);
exports.feedbackRoutes.get("/", getFeedback_controller_1.getFeedbackController);
exports.feedbackRoutes.delete("/:id", deleteFeedback_controller_1.deleteFeedbackController);
exports.feedbackRoutes.patch("/:id", updateFeedback_controller_1.updateFeedbackController);
//# sourceMappingURL=feedback.routes.js.map