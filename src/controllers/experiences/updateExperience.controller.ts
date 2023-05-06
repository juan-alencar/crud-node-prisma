import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { updateExperienceService } from "../../services/experiences/updateExperience.service";

export const updateExperienceController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const experience = await updateExperienceService(id, req.body);
    return res.status(200).json(experience);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
