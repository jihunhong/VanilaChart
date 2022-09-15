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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const variables_1 = require("../config/variables");
const models_1 = require("../models");
function signUpUser({ email, nickname, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashPassword = yield bcrypt_1.default.hash(password, 12);
            const newUser = yield models_1.User.create({
                email,
                nickname,
                password: hashPassword,
                picture: `${variables_1.IMGIX_URL}/static/example-user-avatar.png?w=256&ar=1:1&auto=format`
            });
            return Object.assign(Object.assign({}, newUser), { password: null });
        }
        catch (err) {
            throw err;
        }
    });
}
exports.signUpUser = signUpUser;
//# sourceMappingURL=userController.js.map