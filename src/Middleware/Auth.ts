import {Request, Response, NextFunction} from 'express';
import jwt from "jsonwebtoken";

import configEnv from "../../environment.config";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) return res.json({ message: "Token required" });
    const token = authHeader.split(" ")[1];

    const decodedToken: any = jwt.verify(token, configEnv.SECRET_APP);
   
    const userId = decodedToken.userId;
    if (req.body.userId !== userId) {
      // throw "Invalid user ID";
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};
