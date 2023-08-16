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
exports.deleteExperienceService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const deleteExperienceService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const experience = yield __1.prisma.experience
        .findUniqueOrThrow({
        where: { id },
    })
        .catch(() => {
        throw new appError_1.AppError("Experiência não encontrada", 404);
    });
    yield __1.prisma.experience.delete({
        where: { id: experience.id },
    });
});
exports.deleteExperienceService = deleteExperienceService;
//# sourceMappingURL=deleteExperience.service.js.map