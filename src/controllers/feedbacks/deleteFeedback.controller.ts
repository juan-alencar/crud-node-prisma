import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { deleteFeedbackService } from "../../services/feedbacks/deleteFeedback.service";

export const deleteFeedbackController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const feedback = await deleteFeedbackService(id);
    return res.status(200).json(feedback);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
