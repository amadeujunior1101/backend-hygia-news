"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var environment_config_1 = __importDefault(require("../../environment.config"));
exports.default = (function (req, res, next) {
    try {
        var authHeader = req.headers.authorization;
        if (!authHeader)
            return res.json({ message: "Token required" });
        var token = authHeader.split(" ")[1];
        var decodedToken = jsonwebtoken_1.default.verify(token, environment_config_1.default.SECRET_APP);
        var userId = decodedToken.userId;
        if (req.body.userId !== userId) {
            // throw "Invalid user ID";
            return res.sendStatus(403);
        }
        else {
            next();
        }
    }
    catch (error) {
        return res.status(401).send(error);
    }
});
