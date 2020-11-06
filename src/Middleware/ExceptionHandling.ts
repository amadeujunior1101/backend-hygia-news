import { Request, Response, NextFunction} from "express";

// Middleware recurso não encontrado
const notFound = (req: Request, res: Response, next: NextFunction) => {

    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Middleware de tratamento de erro
const errorHandling = (error: any, req: Request, res: Response, next: NextFunction) => {

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.statusCode = statusCode;
    res.json({
    message: error.message,
    trace: process.env.NODE_ENV === "production" ? "🤓" : error.trace
    });
};

export default {
    notFound,
    errorHandling
};