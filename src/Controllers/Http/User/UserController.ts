import {Request, Response} from 'express';
import User from "../../../Models/User";

import bcrypt from "bcrypt";

import userValidator from "../../../Validators/UserValidator"

export default {
  async index(req:Request, res:Response) {
    const { email } = req.query;

    const user = await User.findOne({ email: email });

    if (user) return res.json(user);
    return res.json({ message: "User not exists" });
  },

  async store(req:Request, res:Response) {
    const { fullName, email, password, occupation } = req.body;

    const user = 
    {
      fullName: fullName, 
      email: email, 
      password: password,
      occupation: occupation
    }

    userValidator(user, res)

    try {

      if (await User.findOne({ email: email }))
        return res
          // .status(200)
          .json({ error: true, message: "User already exists" });

      let password_hash = "";
      
      if(password){
        password_hash = await bcrypt.hash(password, 10);
      }

      await User.create({
        fullName: fullName,
        email: email,
        password: password_hash,
        occupation: occupation
      });

      const usersAll = await User.find();

      return res.json({ error: false, message: "successfully registered", users: usersAll });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error, message: "Registration failed" });
    }
  },

  async show(req:Request, res:Response) {
    const users = await User.find();

    return res.json({ users: users, error: false });
  },

  // async update(req, res) {
  //   const { _id, name } = req.body;

  //   try {
  //     await User.updateOne(
  //       { _id: _id },
  //       {
  //         $set: {
  //           name: name,
  //         },
  //       }
  //     );
  //     return res.status(200).json({ message: "user updated successfully" });
  //   } catch (error) {
  //     return res.status(400).json({ error: "updated failed" });
  //   }
  // },

  async delete(req:Request, res:Response) {
    const _id = req.query["id"];

    try {
      await User.deleteMany({ _id: _id });

      const users = await User.find();

      return res
        .status(200)
        .json({
          message: "user deleted successfully",
          error: false,
          info: users,
        });
    } catch (error) {
      return res.status(400).json({ error: "deleted failed" });
    }
  },

  
};
