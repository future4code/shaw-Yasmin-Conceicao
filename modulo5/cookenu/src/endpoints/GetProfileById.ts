import { Request, Response } from "express";
import connection from "../connection";


export const GetProfileById = async (req: Request, res: Response) => {
     let errorCode = 404

     try {

        const authorization = req.headers.authorization
        const id = req.params.id


        const result = await connection("Cookenu_users")
        .where({id: id})

        
        if(!result){
            throw new Error("User not found");
        }

        res.send(result[0])
        
     } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
     }
}