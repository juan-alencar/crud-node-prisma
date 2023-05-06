import { Feedback } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";
import { IQueryParamsSearch } from "../../interfaces/queryParams";

export const getFeedbackService = async ({ userId }: IQueryParamsSearch) => {
  if (userId) {
    const user = await prisma.user
      .findFirstOrThrow({
        where: { id: userId },
      })
      .catch(() => {
        throw new AppError("Usuário não encontrado", 404);
      });

    const feedbacks = await prisma.feedback
      .findMany({
        where: {
          userId,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new AppError("Feedback não encontrado", 404);
      });

    return feedbacks;
  }
};
