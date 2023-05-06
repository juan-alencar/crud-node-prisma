import { Feedback } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const createFeedbackService = async ({
  comment,
  name,
  role,
  userId,
}: Feedback) => {
  const user = await prisma.user
    .findFirstOrThrow({ where: { id: userId } })
    .catch(() => {
      throw new AppError("Usuário não encontrado", 404);
    });

  const feedback = await prisma.feedback
    .create({
      data: {
        comment,
        name,
        role,
        userId: user.id,
      },
    })
    .catch((err) => {
      if (err.code === "P2002") {
        throw new AppError(
          `Já existe um cadastro com esse ${err.meta!.target}`
        );
      }
    });

  return feedback;
};
