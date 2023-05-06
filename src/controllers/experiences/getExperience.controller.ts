import { Response, Request } from "express";
import { getExperienceService } from "../../services/experiences/getExperience.service";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";

export const getExperienceController = async (req: Request, res: Response) => {
  try {
    const experience = await getExperienceService(req.query);
    return res.status(200).json(experience);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
