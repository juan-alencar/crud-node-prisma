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
exports.updateProjectController = void 0;
const appError_1 = require("../../errors/appError");
const handleError_middleware_1 = require("../../middlewares/handleError.middleware");
const updateProject_service_1 = require("../../services/projects/updateProject.service");
const updateProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const project = yield (0, updateProject_service_1.updateProjectService)(id, req.body);
        return res.status(200).json(project);
    }
    catch (error) {
        if (error instanceof appError_1.AppError) {
            (0, handleError_middleware_1.handleErrorMiddleware)(error, res);
        }
    }
});
exports.updateProjectController = updateProjectController;
//# sourceMappingURL=updateProject.controller.js.map