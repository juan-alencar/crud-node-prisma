import { User } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const getUserService = async (username: string) => {
  const user = await prisma.user
    .findUniqueOrThrow({
      where: { username },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        about: true,
        actualRole: true,
        actualRoleDescription: true,
        photoUrl: true,
        birthday: true,
        email: true,
        username: true,
        linkedin: true,
        github: true,
        phone: true,
        isActive: true,
        projects: true,
        competences: true,
        experiences: true,
        feedbacks: true,
      },
    })
    .catch(() => {
      throw new AppError("Usuário não encontrado", 404);
    });
  if (!user.isActive) {
    throw new AppError("Usuário inativo", 400);
  }

  return user;
};
