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
exports.deleteFeedbackService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const deleteFeedbackService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield __1.prisma.feedback
        .findUniqueOrThrow({
        where: { id },
    })
        .catch(() => {
        throw new appError_1.AppError("Feedback não encontrado", 404);
    });
    yield __1.prisma.feedback.delete({
        where: { id: feedback.id },
    });
});
exports.deleteFeedbackService = deleteFeedbackService;
//# sourceMappingURL=deleteFeedback.service.js.map