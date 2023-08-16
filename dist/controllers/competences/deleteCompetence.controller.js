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
exports.deleteCompetenceController = void 0;
const appError_1 = require("../../errors/appError");
const handleError_middleware_1 = require("../../middlewares/handleError.middleware");
const deleteCompetence_service_1 = require("../../services/competences/deleteCompetence.service");
const deleteCompetenceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const competence = yield (0, deleteCompetence_service_1.deleteCompetenceService)(id);
        return res.status(200).json(competence);
    }
    catch (error) {
        if (error instanceof appError_1.AppError) {
            (0, handleError_middleware_1.handleErrorMiddleware)(error, res);
        }
    }
});
exports.deleteCompetenceController = deleteCompetenceController;
//# sourceMappingURL=deleteCompetence.controller.js.map