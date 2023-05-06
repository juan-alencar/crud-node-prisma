import { Project } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";
import { IQueryParamsSearch } from "../../interfaces/queryParams";

export const getProjectService = async ({
  userId,
  projectId,
}: IQueryParamsSearch) => {
  if (userId) {
    const user = await prisma.user
      .findFirstOrThrow({
        where: { id: userId },
      })
      .catch(() => {
        throw new AppError("Usuário não encontrado", 404);
      });

    if (projectId) {
      const project = await prisma.project
        .findUniqueOrThrow({
          where: {
            id: projectId,
          },
        })
        .catch(() => {
          throw new AppError("Projeto não encontrado", 404);
        });

      return project;
    }

    const projects = await prisma.project
      .findMany({
        where: { OR: [{ userId }, { AND: [{ userId }, { id: projectId }] }] },
        select: {
          id: true,
          description: true,
          title: true,
          imageUrl: true,
          createdAt: true,
          productionUrl: true,
          repository: true,
        },
      })
      .catch((err) => {
        console.log(err);
        throw new AppError("Projeto não encontrado", 404);
      });

    return projects;
  }
};
