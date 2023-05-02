import { Response, Request } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { AppError } from "../../errors/appError";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
