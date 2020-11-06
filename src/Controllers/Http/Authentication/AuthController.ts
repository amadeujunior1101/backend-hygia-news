import {Request, Response } from 'express';
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import confEnv from "../../../../environment.config";

import User from "../../../Models/User"

export default {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        
      const user: any = await User.find({email: email});

      if (!user[0]) return res.json({ error: true, message: "user not found" });

      const pass = await bcrypt.compare(password, user[0].password);

      if (pass === false)
        return res.json({ error: true, message: "invalid password" });

      const id = user[0].id;
      const token = jwt.sign({ id }, confEnv.SECRET_APP, {
        expiresIn: "1d", // expires in 5min
      });

      return res.json({ error: false, user_id: id, auth: true, token: token });
    } catch (error) {
      return res.status(400).json({ error: true, message: error });
    }
  },
};
