import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const deleteFeedbackService = async (id: string) => {
  const feedback = await prisma.feedback
    .findUniqueOrThrow({
      where: { id },
    })
    .catch(() => {
      throw new AppError("Feedback não encontrado", 404);
    });

  await prisma.feedback.delete({
    where: { id: feedback.id },
  });
};
