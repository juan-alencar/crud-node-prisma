import { Router } from "express";
import { createUserController } from "../../controllers/users/createUser.controller";
import { getUserController } from "../../controllers/users/getUser.controller";
import { deleteUserController } from "../../controllers/users/deleteUser.controller";
import { updateUserController } from "../../controllers/users/updateUser.controller";

export const userRoutes = Router();

userRoutes.post("/", createUserController);
userRoutes.get("/:username", getUserController);
userRoutes.delete("/:id", deleteUserController);
userRoutes.patch("/:id", updateUserController);
