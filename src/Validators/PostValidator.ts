import {Response} from "express"

interface post{
    title: string, 
    content: string, 
    visibility: string, 
    category: string, 
    author: string,
  }

const PostValidator = (post:post, res: Response)=>{
   
    if(post.title.length === 0) return res.json({title: "required"})

    if(post.content.length === 0) return res.json({content: "required"})

    if(post.visibility.length === 0) return res.json({visibility: "required"})

    if(post.category.length === 0) return res.json({category: "required"})
    
    if(post.author.length === 0) return res.json({author: "required"})

}


export default PostValidator;