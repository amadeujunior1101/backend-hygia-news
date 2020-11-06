"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../Config/db"));
var categorySchema = new db_1.default.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
var Category = db_1.default.model("Category", categorySchema);
exports.default = Category;
