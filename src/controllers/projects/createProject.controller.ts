import { Response, Request } from "express";
import { createProjectService } from "../../services/projects/createProject.service";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { AppError } from "../../errors/appError";

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const project = await createProjectService(req.body);
    return res.status(201).json(project);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
