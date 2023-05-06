import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { deleteProjectService } from "../../services/projects/deleteProject.service";

export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await deleteProjectService(id);
    return res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
