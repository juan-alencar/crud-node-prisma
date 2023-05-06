import { Router } from "express";
import { createFeedbackController } from "../../controllers/feedbacks/createFeedback.controller";
import { getFeedbackController } from "../../controllers/feedbacks/getFeedback.controller";
import { deleteFeedbackController } from "../../controllers/feedbacks/deleteFeedback.controller";
import { updateFeedbackController } from "../../controllers/feedbacks/updateFeedback.controller";

export const feedbackRoutes = Router();

feedbackRoutes.post("", createFeedbackController);
feedbackRoutes.get("/", getFeedbackController);
feedbackRoutes.delete("/:id", deleteFeedbackController);
feedbackRoutes.patch("/:id", updateFeedbackController);
