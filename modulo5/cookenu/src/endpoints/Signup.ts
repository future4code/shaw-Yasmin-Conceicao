import { Request, Response } from "express";
import { v4 } from "uuid";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../types";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export const Signup = async (req: Request, res: Response) =>{
     let errorCode = 404

     try {

        const {name, email, password} = req.body

        if(!name){
            errorCode = 404
            throw new Error("Enter a name");
        }

        if(!email){
            errorCode = 404
            throw new Error("Enter an email");
            
        }

        if(!password){
            errorCode = 404
            throw new Error("Enter the Password");   
        }


        if(password.lenght < 6 ){
            errorCode = 404
            throw new Error("The password must be at least 6 characters");
            
        }

        const generateId = idGenerator.generateId()

        
        const result:User = await connection("Cookenu_users")
        .insert({
            id: generateId,
            name,
            email,
            password
        })


        const token = authenticator.generateToken({id: result.id})

        res.send(`User successfully created, this is your token ${token}`)
        
     } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
     }
}