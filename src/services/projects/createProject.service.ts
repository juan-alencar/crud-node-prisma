import { Project } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";
import { hashSync } from "bcryptjs";

export const createProjectService = async ({
  title,
  description,
  repository,
  productionUrl,
  userId,
}: Project) => {
  const user = await prisma.user
    .findFirstOrThrow({ where: { id: userId } })
    .catch(() => {
      throw new AppError("Projeto não encontrado", 404);
    });

  const project = await prisma.project
    .create({
      data: {
        title,
        description,
        productionUrl,
        repository,
        userId: user.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        repository: true,
        productionUrl: true,
        createdAt: true,
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
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          throw new AppError(
            `Já existe um cadastro com esse ${err.meta!.target}`
          );
        }
      }
    });

  return project;
};
