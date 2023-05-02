import { Response, Request } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await updateUserService(id, req.body);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
