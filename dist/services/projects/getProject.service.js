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
exports.getProjectService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const getProjectService = ({ userId, projectId, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (userId) {
        const user = yield __1.prisma.user
            .findFirstOrThrow({
            where: { id: userId },
        })
            .catch(() => {
            throw new appError_1.AppError("Usuário não encontrado", 404);
        });
        if (projectId) {
            const project = yield __1.prisma.project
                .findUniqueOrThrow({
                where: {
                    id: projectId,
                },
            })
                .catch(() => {
                throw new appError_1.AppError("Projeto não encontrado", 404);
            });
            return project;
        }
        const projects = yield __1.prisma.project
            .findMany({
            where: { OR: [{ userId }, { AND: [{ userId }, { id: projectId }] }] },
            select: {
                id: true,
                description: true,
                title: true,
                imageUrl: true,
                createdAt: true,
                productionUrl: true,
                repository: true,
            },
        })
            .catch((err) => {
            console.log(err);
            throw new appError_1.AppError("Projeto não encontrado", 404);
        });
        return projects;
    }
});
exports.getProjectService = getProjectService;
//# sourceMappingURL=getProject.service.js.map