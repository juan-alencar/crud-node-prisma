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
exports.getUserService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const getUserService = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield __1.prisma.user
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
        throw new appError_1.AppError("Usuário não encontrado", 404);
    });
    if (!user.isActive) {
        throw new appError_1.AppError("Usuário inativo", 400);
    }
    return user;
});
exports.getUserService = getUserService;
//# sourceMappingURL=getUser.service.js.map