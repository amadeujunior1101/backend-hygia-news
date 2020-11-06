"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var ExceptionHandling_1 = __importDefault(require("./Middleware/ExceptionHandling"));
require("dotenv/config");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
// Middleware recurso não encontrado
app.use(ExceptionHandling_1.default.notFound);
// Middleware de tratamento de erro
app.use(ExceptionHandling_1.default.errorHandling);
app.listen(process.env.PORT || 3333, function () {
    console.log("App listening on port 3333!");
});
