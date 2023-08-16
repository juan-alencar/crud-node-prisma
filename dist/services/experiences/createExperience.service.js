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
exports.createExperienceService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const createExperienceService = ({ role, description, actualRole = false, company, initialDate, finalDate, userId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield __1.prisma.user
        .findFirstOrThrow({ where: { id: userId } })
        .catch(() => {
        throw new appError_1.AppError("Usuário não encontrado", 404);
    });
    const experience = yield __1.prisma.experience
        .create({
        data: {
            role,
            description,
            actualRole,
            company,
            initialDate: new Date(initialDate),
            finalDate: finalDate ? new Date(finalDate) : null,
            userId: user.id,
        },
    })
        .catch((err) => {
        if (err.code === "P2002") {
            throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
        }
    });
    return experience;
});
exports.createExperienceService = createExperienceService;
//# sourceMappingURL=createExperience.service.js.map