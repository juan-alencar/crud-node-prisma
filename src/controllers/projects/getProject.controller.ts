import { Response, Request } from "express";
import { getProjectService } from "../../services/projects/getProject.service";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const project = await getProjectService(req.query);
    return res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
