import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { updateCompetenceService } from "../../services/competences/updateCompetence.service";

export const updateCompetenceController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const competence = await updateCompetenceService(id, req.body);
    return res.status(200).json(competence);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
