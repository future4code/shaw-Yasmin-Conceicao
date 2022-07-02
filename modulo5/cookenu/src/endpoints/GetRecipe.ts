import { Request,Response } from "express";
import connection from "../connection";


export const GetRecipe = async (req:Request, res:Response) => {
    let errorCode = 404

    try {

        const authenticator = req.headers.authorization
        const id = req.params.id

        const result = await connection("Recipe")
        .where({id: id})

        if(!result){
          throw new Error("Recipe not found"); 
        }

        console.log(result)

        res.send(result[0])


    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}