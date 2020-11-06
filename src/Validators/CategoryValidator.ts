import {Response} from "express"

interface category{
    name: string,
  }

const catergoryValidator = (category:category, res: Response)=>{
   
    if(category.name.length === 0) return res.json({name: "required"})

}

export default catergoryValidator;