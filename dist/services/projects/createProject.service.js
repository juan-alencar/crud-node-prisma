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
exports.createProjectService = void 0;
const __1 = require("../..");
const runtime_1 = require("@prisma/client/runtime");
const appError_1 = require("../../errors/appError");
const createProjectService = ({ title, description, repository, productionUrl, userId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield __1.prisma.user
        .findFirstOrThrow({ where: { id: userId } })
        .catch(() => {
        throw new appError_1.AppError("Projeto não encontrado", 404);
    });
    const project = yield __1.prisma.project
        .create({
        data: {
            title,
            description,
            productionUrl,
            repository,
            userId: user.id,
        },
        select: {
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            repository: true,
            productionUrl: true,
            createdAt: true,
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
        if (err instanceof runtime_1.PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
            }
        }
    });
    return project;
});
exports.createProjectService = createProjectService;
//# sourceMappingURL=createProject.service.js.map