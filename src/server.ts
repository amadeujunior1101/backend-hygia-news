import express from "express";
import routes from "./routes";
import cors from "cors";

import ExceptionHandling from "./Middleware/ExceptionHandling"

require("dotenv/config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Middleware recurso não encontrado
app.use(ExceptionHandling.notFound);
// Middleware de tratamento de erro
app.use(ExceptionHandling.errorHandling);

app.listen(process.env.PORT || 3333, () => {
  console.log("App listening on port 3333!");
});