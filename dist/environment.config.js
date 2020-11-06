"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    URL_MONGO_LOCAL: (_a = process.env.URL_MONGO_LOCAL) !== null && _a !== void 0 ? _a : '',
    URL_MONGO: (_b = process.env.URL_MONGO) !== null && _b !== void 0 ? _b : '',
    SECRET_APP: (_c = process.env.SECRET_APP) !== null && _c !== void 0 ? _c : '',
    confPort: (_d = process.env.PORT) !== null && _d !== void 0 ? _d : ''
};
