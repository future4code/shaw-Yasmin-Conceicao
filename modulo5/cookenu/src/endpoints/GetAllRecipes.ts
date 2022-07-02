import { Request,Response } from "express";
import connection from "../connection";


export const GetAllRecipe = async (req:Request, res: Response) => {

    try {

        const result = await connection("Recipe")

        res.send(result)
        
    } catch (error:any) {
        res.status(error).send(error.sqlMessage || error.message)
    }
}