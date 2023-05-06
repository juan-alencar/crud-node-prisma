import { Competence } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";
import { IQueryParamsSearch } from "../../interfaces/queryParams";

export const getCompetenceService = async ({ userId }: IQueryParamsSearch) => {
  if (userId) {
    const user = await prisma.user
      .findFirstOrThrow({
        where: { id: userId },
      })
      .catch(() => {
        throw new AppError("Usuário não encontrado", 404);
      });

    const competences = await prisma.competence
      .findMany({
        where: {
          userId,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new AppError("Competência não encontrado", 404);
      });

    return competences;
  }
};
