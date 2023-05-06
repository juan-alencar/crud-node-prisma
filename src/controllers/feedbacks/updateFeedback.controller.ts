import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { updateFeedbackService } from "../../services/feedbacks/updateFeedback.service";

export const updateFeedbackController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const feedback = await updateFeedbackService(id, req.body);
    return res.status(200).json(feedback);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
