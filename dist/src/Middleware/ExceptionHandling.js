"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Middleware recurso não encontrado
var notFound = function (req, res, next) {
    var error = new Error("Not found - " + req.originalUrl);
    res.status(404);
    next(error);
};
// Middleware de tratamento de erro
var errorHandling = function (error, req, res, next) {
    var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.statusCode = statusCode;
    res.json({
        message: error.message,
        trace: process.env.NODE_ENV === "production" ? "🤓" : error.trace
    });
};
exports.default = {
    notFound: notFound,
    errorHandling: errorHandling
};
