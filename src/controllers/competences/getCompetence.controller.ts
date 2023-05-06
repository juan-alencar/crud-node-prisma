import { Response, Request } from "express";
import { getCompetenceService } from "../../services/competences/getCompetence.service";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";

export const getCompetenceController = async (req: Request, res: Response) => {
  try {
    const competence = await getCompetenceService(req.query);
    return res.status(200).json(competence);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
