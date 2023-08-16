"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const createUser_controller_1 = require("../../controllers/users/createUser.controller");
const getUser_controller_1 = require("../../controllers/users/getUser.controller");
const deleteUser_controller_1 = require("../../controllers/users/deleteUser.controller");
const updateUser_controller_1 = require("../../controllers/users/updateUser.controller");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("/", createUser_controller_1.createUserController);
exports.userRoutes.get("/:username", getUser_controller_1.getUserController);
exports.userRoutes.delete("/:id", deleteUser_controller_1.deleteUserController);
exports.userRoutes.patch("/:id", updateUser_controller_1.updateUserController);
//# sourceMappingURL=user.routes.js.map