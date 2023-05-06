import { Competence } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";

export const updateCompetenceService = async (
  id: string,
  { userId, level, name, recomendations }: Competence
) => {
  const competence = await prisma.competence
    .findUniqueOrThrow({ where: { id } })
    .catch(() => {
      throw new AppError("Competência não encontrado", 404);
    });

  const updatedCompetence = await prisma.competence
    .update({
      where: {
        id: competence.id,
      },
      data: {
        userId,
        level,
        name,
        recomendations,
      },
    })
    .catch((err) => {
      if (err.code === "P2002") {
        throw new AppError(
          `Já existe um cadastro com esse ${err.meta!.target}`
        );
      }
    });

  return updatedCompetence;
};
