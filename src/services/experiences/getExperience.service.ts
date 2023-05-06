import { prisma } from "../..";
import { AppError } from "../../errors/appError";
import { IQueryParamsSearch } from "../../interfaces/queryParams";

export const getExperienceService = async ({
  userId,
  experienceId,
}: IQueryParamsSearch) => {
  if (userId) {
    const user = await prisma.user
      .findFirstOrThrow({
        where: { id: userId },
      })
      .catch(() => {
        throw new AppError("Usuário não encontrado", 404);
      });

    if (experienceId) {
      const experience = await prisma.experience
        .findUniqueOrThrow({
          where: {
            id: experienceId,
          },
        })
        .catch(() => {
          throw new AppError("Experiência não encontrada", 404);
        });

      return experience;
    }

    const experiences = await prisma.experience
      .findMany({
        where: {
          userId,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new AppError("Experiências não encontradas", 404);
      });

    return experiences;
  }
};
