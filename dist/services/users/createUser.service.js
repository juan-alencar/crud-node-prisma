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
exports.createUserService = void 0;
const __1 = require("../..");
const appError_1 = require("../../errors/appError");
const bcryptjs_1 = require("bcryptjs");
const createUserService = ({ firstName, lastName, username, email, password, actualRole, actualRoleDescription, about, phone, birthday, linkedin, github, }) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = (0, bcryptjs_1.hashSync)(password, 10);
    const userAlreadyExists = yield __1.prisma.user.findFirst({ where: { email } });
    if (userAlreadyExists) {
        throw new appError_1.AppError("Email already exists", 401);
    }
    const user = yield __1.prisma.user
        .create({
        data: {
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            actualRole,
            actualRoleDescription,
            about,
            phone,
            birthday: new Date(birthday),
            linkedin,
            github,
            isActive: true,
        },
        select: {
            firstName: true,
            lastName: true,
            email: true,
            username: true,
        },
    })
        .catch((err) => {
        console.log(err.code);
        if (err.code === "P2002") {
            throw new appError_1.AppError(`Já existe um cadastro com esse ${err.meta.target}`);
        }
        else {
            throw new appError_1.AppError("Internal Server Error", 500);
        }
    });
    return user;
});
exports.createUserService = createUserService;
//# sourceMappingURL=createUser.service.js.map