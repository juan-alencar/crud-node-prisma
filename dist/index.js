"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require(".prisma/client");
const app_1 = __importDefault(require("./app"));
exports.prisma = new client_1.PrismaClient();
app_1.default.listen(3333, () => console.log(`Server is running in port 3333`));
//# sourceMappingURL=index.js.map