import { Response, Request } from "express";
import { getFeedbackService } from "../../services/feedbacks/getFeedback.service";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";

export const getFeedbackController = async (req: Request, res: Response) => {
  try {
    const feedback = await getFeedbackService(req.query);
    return res.status(200).json(feedback);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
