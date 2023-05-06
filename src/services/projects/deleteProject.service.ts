import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const deleteProjectService = async (id: string) => {
  const project = await prisma.project
    .findUniqueOrThrow({
      where: { id },
    })
    .catch(() => {
      throw new AppError("Projeto não encontrado", 404);
    });

  await prisma.project.delete({
    where: { id: project.id },
  });
};
