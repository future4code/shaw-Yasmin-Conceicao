import { Request, Response } from "express";
import connection from "../connection";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { authentication } from "../types";



export const signup = async(req: Request, res: Response):Promise<any> =>{
    let errorCode = 400

    try {

        const {email, password} = req.body

        if(!email || email.indexOf("@") === -1){
            throw new Error(" email invalid");
            
        }

       if(!password){
        throw new Error("password is missing");
       }

       const id = generateId() 

       const user = await connection("Users")
       .insert({
        id: id,
        email: email,
        password: password
       })

      const token = generateToken( id)

        res.send(token)
        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
 
}