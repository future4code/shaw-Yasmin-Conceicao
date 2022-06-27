import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/generateId";


export const createUser = async(req: Request, res: Response):Promise<any> =>{
    let errorCode = 400
    try {

        const {email, password} = req.body

        const result = await connection("Users")
        .insert({
            id: generateId(),
            email: email,
            password: password
        })

        res.send("User successfuly created!")
        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}