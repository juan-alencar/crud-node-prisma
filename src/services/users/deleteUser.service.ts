import { prisma } from "../..";
import { AppError } from "../../errors/appError";

export const deleteUserService = async (id: string) => {
  const user = await prisma.user
    .findUniqueOrThrow({
      where: { id },
    })
    .catch(() => {
      throw new AppError("Usuário não encontrado", 404);
    });

  const userUpdated = await prisma.user.update({
    where: { id: user.id },
    data: {
      isActive: !user.isActive,
    },
  });

  if (userUpdated.isActive) {
    return { message: "User activated successfully" };
  } else {
    return { message: "User deactivated successfully" };
  }
};
