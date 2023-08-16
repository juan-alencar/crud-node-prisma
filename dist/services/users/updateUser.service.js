"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const __1 = require("../..");
const runtime_1 = require("@prisma/client/runtime");
const appError_1 = require("../../errors/appError");
const bcryptjs_1 = require("bcryptjs");
const updateUserService = (id, { firstName, lastName, username, email, password, actualRole, actualRoleDescription, about, phone, birthday, linkedin, github, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield __1.prisma.user
        .findUniqueOrThrow({ where: { id } })
        .catch(() => {
        throw new appError_1.AppError("Usuário não encontrado", 404);
    });
    const updatedUser = yield __1.prisma.user
        .update({
        where: {
            id: user.id,
        },
        data: {
            firstName,
            lastName,
            username,
            email,
            password: password ? yield (0, bcryptjs_1.hash)(password, 10) : user.password,
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
        if (err instanceof runtime_1.PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
            }
        }
    });
    return updatedUser;
});
exports.updateUserService = updateUserService;
//# sourceMappingURL=updateUser.service.js.map