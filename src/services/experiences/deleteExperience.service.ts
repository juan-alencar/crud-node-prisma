import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const deleteExperienceService = async (id: string) => {
  const experience = await prisma.experience
    .findUniqueOrThrow({
      where: { id },
    })
    .catch(() => {
      throw new AppError("Experiência não encontrada", 404);
    });

  await prisma.experience.delete({
    where: { id: experience.id },
  });
};
