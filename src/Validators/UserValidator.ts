import {Response} from "express"

interface user{
    fullName: string, 
    email: string, 
    password: string
    occupation: string,
  }

const UserValidator = (user:user, res: Response)=>{
   
    if(user.fullName.length === 0) return res.json({fullName: "required"})

    if(user.email.length === 0) return res.json({email: "required"})

    if(user.password.length === 0) return res.json({password: "required"})
    
    if(user.occupation.length === 0) return res.json({occupation: "required"})

}


export default UserValidator;