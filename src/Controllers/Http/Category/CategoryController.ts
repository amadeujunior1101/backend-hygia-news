import {Request, Response} from 'express';
import Category from "../../../Models/Category";

import categoryValidator from "../../../Validators/CategoryValidator"

export default {
  async index(req:Request, res:Response) {
    const { id } = req.query;

    try {
      const category = await Category.findOne({ _id: id });
      
      if (category) return res.json(category);
     
    } catch (error) {
      return res.json({ message: "Category not exists" });
    }

    res.status(400)
        .json({ error: true, message: "find category failed" })

  },

  async store(req:Request, res:Response) {
    const { name } = req.body;

    const category = 
    {
      name: name,
    }

    categoryValidator(category, res)
 
    try {
      if (await Category.findOne({ name: name }))
        return res
          .status(200)
          .json({ error: true, message: "Category already exists" });

      await Category.create({
        name: name
      });

      const categoriesAll = await Category.find();

      return res.json({ error: false, message: "successfully created category", categories: categoriesAll });
    } catch (error) {
      return res
        .status(400)
        .json({ error: true, message: "successfully created failed" });
    }
  },

  async show(req:Request, res:Response) {
    const categories = await Category.find();

    return res.json({ categories: categories, error: false });
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
      await Category.deleteMany({ _id: _id });

      const categories = await Category.find();

      return res
        .status(200)
        .json({
          message: "category deleted successfully",
          error: false,
          info: categories,
        });
    } catch (error) {
      return res.status(400).json({ error: "deleted failed" });
    }
  },
};
