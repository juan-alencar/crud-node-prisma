import { Experience } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const createExperienceService = async ({
  role,
  description,
  actualRole = false,
  company,
  initialDate,
  finalDate,
  userId,
}: Experience) => {
  const user = await prisma.user
    .findFirstOrThrow({ where: { id: userId } })
    .catch(() => {
      throw new AppError("Usuário não encontrado", 404);
    });

  const experience = await prisma.experience
    .create({
      data: {
        role,
        description,
        actualRole,
        company,
        initialDate: new Date(initialDate),
        finalDate: finalDate ? new Date(finalDate) : null,
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

  return experience;
};
