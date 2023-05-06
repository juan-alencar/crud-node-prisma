import { Competence } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";
import { hashSync } from "bcryptjs";

export const createCompetenceService = async ({
  level,
  name,
  userId,
}: Competence) => {
  const user = await prisma.user
    .findFirstOrThrow({ where: { id: userId } })
    .catch(() => {
      throw new AppError("Usuário não encontrado", 404);
    });

  const competence = await prisma.competence
    .create({
      data: {
        level,
        name,
        recomendations: 0,
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

  return competence;
};
