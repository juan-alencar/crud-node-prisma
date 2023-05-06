import { Response, Request } from "express";
import { createCompetenceService } from "../../services/competences/createCompetence.service";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { AppError } from "../../errors/appError";

export const createCompetenceController = async (
  req: Request,
  res: Response
) => {
  try {
    const competence = await createCompetenceService(req.body);
    return res.status(201).json(competence);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
