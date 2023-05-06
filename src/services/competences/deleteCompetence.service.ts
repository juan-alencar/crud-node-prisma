import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const deleteCompetenceService = async (id: string) => {
  const competence = await prisma.competence
    .findUniqueOrThrow({
      where: { id },
    })
    .catch(() => {
      throw new AppError("Competência não encontrado", 404);
    });

  await prisma.competence.delete({
    where: { id: competence.id },
  });
};
