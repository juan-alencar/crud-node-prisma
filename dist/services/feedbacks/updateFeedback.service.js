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
exports.updateFeedbackService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const updateFeedbackService = (id, { userId, comment, name, role }) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield __1.prisma.feedback
        .findUniqueOrThrow({ where: { id } })
        .catch(() => {
        throw new appError_1.AppError("Feedback não encontrado", 404);
    });
    const updatedFeedback = yield __1.prisma.feedback
        .update({
        where: {
            id: feedback.id,
        },
        data: {
            userId,
            comment,
            name,
            role,
        },
    })
        .catch((err) => {
        if (err.code === "P2002") {
            throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
        }
    });
    return updatedFeedback;
});
exports.updateFeedbackService = updateFeedbackService;
//# sourceMappingURL=updateFeedback.service.js.map