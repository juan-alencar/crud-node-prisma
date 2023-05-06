import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { deleteCompetenceService } from "../../services/competences/deleteCompetence.service";

export const deleteCompetenceController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const competence = await deleteCompetenceService(id);
    return res.status(200).json(competence);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
