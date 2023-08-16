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
exports.getExperienceService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const getExperienceService = ({ userId, experienceId, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (userId) {
        const user = yield __1.prisma.user
            .findFirstOrThrow({
            where: { id: userId },
        })
            .catch(() => {
            throw new appError_1.AppError("Usuário não encontrado", 404);
        });
        if (experienceId) {
            const experience = yield __1.prisma.experience
                .findUniqueOrThrow({
                where: {
                    id: experienceId,
                },
            })
                .catch(() => {
                throw new appError_1.AppError("Experiência não encontrada", 404);
            });
            return experience;
        }
        const experiences = yield __1.prisma.experience
            .findMany({
            where: {
                userId,
            },
        })
            .catch((err) => {
            console.log(err);
            throw new appError_1.AppError("Experiências não encontradas", 404);
        });
        return experiences;
    }
});
exports.getExperienceService = getExperienceService;
//# sourceMappingURL=getExperience.service.js.map