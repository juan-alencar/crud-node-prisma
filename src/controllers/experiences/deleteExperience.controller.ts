import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { deleteExperienceService } from "../../services/experiences/deleteExperience.service";

export const deleteExperienceController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const experience = await deleteExperienceService(id);
    return res.status(200).json(experience);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
