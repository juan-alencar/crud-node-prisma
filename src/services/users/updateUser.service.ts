import { User } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";
import { hash, hashSync } from "bcryptjs";

export const updateUserService = async (
  id: string,
  {
    firstName,
    lastName,
    username,
    email,
    password,
    actualRole,
    actualRoleDescription,
    about,
    phone,
    birthday,
    linkedin,
    github,
  }: User
) => {
  const user = await prisma.user
    .findUniqueOrThrow({ where: { id } })
    .catch(() => {
      throw new AppError("Usuário não encontrado", 404);
    });

  const updatedUser = await prisma.user
    .update({
      where: {
        id: user.id,
      },
      data: {
        firstName,
        lastName,
        username,
        email,
        password: password ? await hash(password, 10) : user.password,
        actualRole,
        actualRoleDescription,
        about,
        phone,
        birthday: birthday ? new Date(birthday) : user.birthday,
        linkedin,
        github,
        isActive: true,
      },
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

  return updatedUser;
};
