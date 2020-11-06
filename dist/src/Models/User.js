"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../Config/db"));
var userSchema = new db_1.default.Schema({
    fullName: {
        type: String,
        required: true,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100,
    },
    password: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
var User = db_1.default.model("User", userSchema);
exports.default = User;
