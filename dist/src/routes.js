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
routes.post("/create-user", Auth_1.default, UserController_1.default.store);
//busca todos os usuário
routes.get("/users", Auth_1.default, UserController_1.default.show);
//Deleta 01(um) user pelo id
routes.delete("/delete-user", Auth_1.default, UserController_1.default.delete);
//Inseri 01(uma) nova categoria
routes.post("/create-category", CategoryController_1.default.store);
//Busca 01(uma) categoria pelo id
routes.get("/find-category", CategoryController_1.default.index);
//Busca todas as categoria
routes.get("/category", CategoryController_1.default.show);
//Inseri 01(um) novo post
routes.post("/create-post", Auth_1.default, PostController_1.default.store);
//Inseri 01(um) novo post
routes.get("/find-post", PostController_1.default.index);
//Busca todos os post 
routes.get("/posts", PostController_1.default.show);
//Deleta 01(um) post pelo id
routes.delete("/delete-post", Auth_1.default, PostController_1.default.delete);
//Autenticação por jwt
routes.post("/authentication", AuthController_1.default.store);
exports.default = routes;
