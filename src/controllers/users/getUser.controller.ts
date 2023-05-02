import { Response, Request } from "express";
import { getUserService } from "../../services/users/getUser.service";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";

export const getUserController = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const user = await getUserService(username);
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, res);
    }
  }
};
