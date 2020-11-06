"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../Config/db"));
var postSchema = new db_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    visibility: {
        type: String,
        required: true,
    },
    imageNameUUID: {
        type: String,
        required: false,
    },
    imageNameReal: {
        type: String,
        required: false,
    },
    category: {
        type: db_1.default.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    author: {
        type: db_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
var Post = db_1.default.model("Post", postSchema);
exports.default = Post;
