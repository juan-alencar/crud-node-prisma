import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { updateProjectService } from "../../services/projects/updateProject.service";

export const updateProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await updateProjectService(id, req.body);
    return res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
