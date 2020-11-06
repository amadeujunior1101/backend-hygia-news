"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./Controllers/Http/User/UserController"));
var CategoryController_1 = __importDefault(require("./Controllers/Http/Category/CategoryController"));
var PostController_1 = __importDefault(require("./Controllers/Http/Post/PostController"));
var AuthController_1 = __importDefault(require("./Controllers/Http/Authentication/AuthController"));
// Midlleware de autenticação
var Auth_1 = __importDefault(require("./Middleware/Auth"));
var routes = express_1.Router();
//Busca 01(um) usuário pelo e-mail
routes.get("/find-user", UserController_1.default.index);
//Inseri 01(um) novo usuário
routes.post("/create-user", UserController_1.default.store);
//Inseri 01(uma) nova categoria
routes.post("/create-category", CategoryController_1.default.store);
//Busca 01(uma) categoria pelo id
routes.get("/find-category", CategoryController_1.default.index);
//Busca todas as categoria
routes.get("/category", Auth_1.default, CategoryController_1.default.show);
//Inseri 01(um) novo post
routes.post("/create-post", PostController_1.default.store);
//Inseri 01(um) novo post
routes.get("/find-post", PostController_1.default.index);
//Busca todos os post 
routes.get("/posts", PostController_1.default.show);
//Deleta 01(um) post pelo id
routes.delete("/delete-post", PostController_1.default.delete);
//Autenticação por jwt
routes.post("/authentication", AuthController_1.default.store);
// //Autenticação por jwt
// routes.post("/authentication", AuthController.store);
//Lista todos os usuário
// routes.get("/list-users", UserController.show);
//Atualiza os dados do usuário
// routes.put("/update-user", UserController.update);
//Deleta um usuário
// routes.delete("/delete-user/:id?", UserController.delete);
//Envia email's
// routes.post("/send-mail", UserController.sendEmail);
exports.default = routes;
