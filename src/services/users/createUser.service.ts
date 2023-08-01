import { User } from "@prisma/client";
import { prisma } from "../..";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AppError } from "../../errors/appError";
import { hashSync } from "bcryptjs";

export const createUserService = async ({
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
}: User) => {
  const hashedPassword = hashSync(password, 10);

  const userAlreadyExists = await prisma.user.findFirst({ where: { email } });

  if (userAlreadyExists) {
    throw new AppError("Email already exists", 401);
  }

  const user = await prisma.user
    .create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        actualRole,
        actualRoleDescription,
        about,
        phone,
        birthday: new Date(birthday),
        linkedin,
        github,
        isActive: true,
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        username: true,
      },
    })
    .catch((err) => {
      console.log(err.code);
      if (err.code === "P2002") {
        throw new AppError(
          `Já existe um cadastro com esse ${err.meta!.target}`
        );
      } else {
        throw new AppError("Internal Server Error", 500);
      }
    });

  return user;
};
