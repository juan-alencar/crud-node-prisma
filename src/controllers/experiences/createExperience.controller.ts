import { Response, Request } from "express";
import { createExperienceService } from "../../services/experiences/createExperience.service";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { AppError } from "../../errors/appError";

export const createExperienceController = async (
  req: Request,
  res: Response
) => {
  try {
    const experience = await createExperienceService(req.body);
    return res.status(201).json(experience);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
