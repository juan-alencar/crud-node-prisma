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
exports.updateProjectService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const updateProjectService = (id, { userId, title, description, productionUrl, repository, imageUrl }) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield __1.prisma.project
        .findUniqueOrThrow({ where: { id } })
        .catch(() => {
        throw new appError_1.AppError("Projeto não encontrado", 404);
    });
    const updatedProject = yield __1.prisma.project
        .update({
        where: {
            id: project.id,
        },
        data: {
            userId,
            title,
            description,
            productionUrl,
            repository,
            imageUrl,
        },
        select: {
            description: true,
            createdAt: true,
            imageUrl: true,
            productionUrl: true,
            repository: true,
            title: true,
            id: true,
            updatedAt: true,
            userId: true,
            user: {
                select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                    username: true,
                },
            },
        },
    })
        .catch((err) => {
        if (err.code === "P2002") {
            throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
        }
    });
    return updatedProject;
});
exports.updateProjectService = updateProjectService;
//# sourceMappingURL=updateProject.service.js.map