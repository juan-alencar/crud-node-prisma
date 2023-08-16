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
exports.updateCompetenceService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const updateCompetenceService = (id, { userId, level, name, recomendations }) => __awaiter(void 0, void 0, void 0, function* () {
    const competence = yield __1.prisma.competence
        .findUniqueOrThrow({ where: { id } })
        .catch(() => {
        throw new appError_1.AppError("Competência não encontrado", 404);
    });
    const updatedCompetence = yield __1.prisma.competence
        .update({
        where: {
            id: competence.id,
        },
        data: {
            userId,
            level,
            name,
            recomendations,
        },
    })
        .catch((err) => {
        if (err.code === "P2002") {
            throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
        }
    });
    return updatedCompetence;
});
exports.updateCompetenceService = updateCompetenceService;
//# sourceMappingURL=updateCompetence.service.js.map