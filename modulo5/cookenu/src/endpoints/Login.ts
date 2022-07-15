import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";


const authenticator = new Authenticator()

export const Login = async (req: Request, res: Response) =>{
 let errorCode = 404

 try {

    const {email, password} = req.body

    if(!email){
        errorCode = 404
        throw new Error("Enter an email");
        
    }

    if(!password){
        errorCode = 404
        throw new Error("Enter a password");
        
    }

    const user = await connection("Cookenu_users")
    .where({email: email})


    if(!user){
        errorCode = 404
        throw new Error("this account does not exist");
    }

    if(password != user[0].password){
        errorCode = 404
        throw new Error("Invalid password");
        
    }

    const token = authenticator.generateToken({id: user[0].id})

    res.send(token)

    
 } catch (error:any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
 }
}