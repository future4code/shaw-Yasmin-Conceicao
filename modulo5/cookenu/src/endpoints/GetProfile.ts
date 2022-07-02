import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()

export const GetProfile = async (req: Request, res: Response) => {
    let errorCode = 404


    try {
        const token = req.headers.authorization as string
        const userId = authenticator.getTokenData(token)

        const result = await connection("Cookenu_users")
        .where({id: userId.id})

        if(!result){
            throw new Error("User not found");   
        }

        res.send(result[0])
        
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}