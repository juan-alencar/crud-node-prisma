import { Experience } from "@prisma/client";
import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const updateExperienceService = async (
  id: string,
  {
    userId,
    role,
    description,
    actualRole,
    company,
    initialDate,
    finalDate,
  }: Experience
) => {
  console.log(finalDate);

  const experience = await prisma.experience
    .findUniqueOrThrow({ where: { id } })
    .catch(() => {
      throw new AppError("Experiência não encontrada", 404);
    });

  const updatedExperience = await prisma.experience
    .update({
      where: {
        id: experience.id,
      },
      data: {
        userId,
        role,
        description,
        actualRole,
        company,
        initialDate: initialDate
          ? new Date(initialDate)
          : experience.initialDate,
        finalDate:
          finalDate === undefined
            ? experience.finalDate
            : finalDate === null
            ? null
            : new Date(finalDate),
      },
    })
    .catch((err) => {
      if (err.code === "P2002") {
        throw new AppError(
          `Já existe um cadastro com esse ${err.meta!.target}`
        );
      }
    });

  return updatedExperience;
};
