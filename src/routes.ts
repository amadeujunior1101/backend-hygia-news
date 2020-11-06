import { Router } from "express";
import UserController from "./Controllers/Http/User/UserController";
import CategoryController from "./Controllers/Http/Category/CategoryController";
import PostController from "./Controllers/Http/Post/PostController";
import AuthController from "./Controllers/Http/Authentication/AuthController";

// Midlleware de autenticação
import AuthMiddleware from "./Middleware/Auth"

var routes = Router();

//Busca 01(um) usuário pelo e-mail
routes.get("/find-user", UserController.index);

//Inseri 01(um) novo usuário
routes.post("/create-user", UserController.store);

//Inseri 01(uma) nova categoria
routes.post("/create-category", CategoryController.store);

//Busca 01(uma) categoria pelo id
routes.get("/find-category", CategoryController.index);

//Busca todas as categoria
routes.get("/category", AuthMiddleware,  CategoryController.show);

//Inseri 01(um) novo post
routes.post("/create-post", PostController.store);

//Inseri 01(um) novo post
routes.get("/find-post", PostController.index);

//Busca todos os post 
routes.get("/posts", PostController.show);

//Deleta 01(um) post pelo id
routes.delete("/delete-post", PostController.delete);

//Autenticação por jwt
routes.post("/authentication", AuthController.store);

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

export default routes;
