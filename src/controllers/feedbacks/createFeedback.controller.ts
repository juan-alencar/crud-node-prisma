import { Response, Request } from "express";
import { createFeedbackService } from "../../services/feedbacks/createFeedback.service";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { AppError } from "../../errors/appError";

export const createFeedbackController = async (req: Request, res: Response) => {
  try {
    const feedback = await createFeedbackService(req.body);
    return res.status(201).json(feedback);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
