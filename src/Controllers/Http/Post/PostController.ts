import {Request, Response} from 'express';
import Post from "../../../Models/Post";

import postValidator from "../../../Validators/PostValidator"

export default {
  async index(req:Request, res:Response) {
    const { id } = req.query;
  
    try {
        const post = await Post.findOne({ _id: id })
            .populate("category")
            .populate("author");

        if (post) return res.json(post);
    } catch (error) {
        return res.json({ message: "post not exists" });
    }
   
    return res.json({ message: "error find post" });
  },

  async store(req:Request, res:Response) {
    const { title, subTitle, content, visibility, imageNameUUID, imageNameReal, category, author } = req.body;

    const post = {
      title,
      subTitle,
        content, 
        visibility,
        imageNameUUID,
        imageNameReal,
        category, 
        author
    }

    postValidator(post, res)

    try {

      await Post.create({
        title: title,
        subTitle: subTitle,
        content: content,
        visibility: visibility,
        imageNameUUID: imageNameUUID,
        imageNameReal: imageNameReal,
        category: category,
        author: author,
      });

      const postsAll = await Post.find();

      return res.json({ error: false, message: "post created successfully", posts: postsAll });
    } catch (error) {
      return res
        .status(400)
        .json({ error: true, message: "post created failed" });
    }
  },
  async show(req:Request, res:Response) {

    const postAll = await Post.find()
    .populate("category")
    .populate("author")

    const headline = await Post.findOne({visibility: "headline"})
        .populate("category")
        .populate("author")
        .sort({_id: -1})
        // .limit(1);

    const featured = await Post.find({visibility: "featured"})
        .populate("category")
        .populate("author")
        .sort({_id: -1})
        .limit(3);

    const special = await Post.find({visibility: "special"})
        .populate("category")
        .populate("author")
        .sort({_id: -1})
        .limit(3);

    const several = await Post.find({visibility: "several"})
        .populate("category")
        .populate("author")
        .sort({_id: -1})
        .limit(5);

        return res.json({
          error: false,
          headline: [headline],
          featured: featured,
          special: special,
          several: several,
          postAll: postAll,
        });
  },

  async delete(req:Request, res:Response) {
    const { id, author_id } = req.query;

    try {
        const author = await Post.findOne({ author: author_id })
    if (!author) return res.json({msg: "você não pode excluir esse post!"})

        await Post.deleteMany({ _id: id });

      const posts = await Post.find();

      return res
        .status(200)
        .json({
          message: "post deleted successfully",
          error: false,
          info: posts,
        });
    } catch (error) {
        return res
        .status(200)
        .json({ error: true, message: "post not found" });    
    }
  },
}