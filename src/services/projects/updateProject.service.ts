import { Project } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";

export const updateProjectService = async (
  id: string,
  { userId, title, description, productionUrl, repository, imageUrl }: Project
) => {
  const project = await prisma.project
    .findUniqueOrThrow({ where: { id } })
    .catch(() => {
      throw new AppError("Projeto não encontrado", 404);
    });

  const updatedProject = await prisma.project
    .update({
      where: {
        id: project.id,
      },
      data: {
        userId,
        title,
        description,
        productionUrl,
        repository,
        imageUrl,
      },
      select: {
        description: true,
        createdAt: true,
        imageUrl: true,
        productionUrl: true,
        repository: true,
        title: true,
        id: true,
        updatedAt: true,
        userId: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            username: true,
          },
        },
      },
    })
    .catch((err) => {
      if (err.code === "P2002") {
        throw new AppError(
          `Já existe um cadastro com esse ${err.meta!.target}`
        );
      }
    });

  return updatedProject;
};
