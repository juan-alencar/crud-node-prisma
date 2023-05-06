import { Feedback } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";

export const updateFeedbackService = async (
  id: string,
  { userId, comment, name, role }: Feedback
) => {
  const feedback = await prisma.feedback
    .findUniqueOrThrow({ where: { id } })
    .catch(() => {
      throw new AppError("Feedback não encontrado", 404);
    });

  const updatedFeedback = await prisma.feedback
    .update({
      where: {
        id: feedback.id,
      },
      data: {
        userId,
        comment,
        name,
        role,
      },
    })
    .catch((err) => {
      if (err.code === "P2002") {
        throw new AppError(
          `Já existe um cadastro com esse ${err.meta!.target}`
        );
      }
    });

  return updatedFeedback;
};
