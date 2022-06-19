import { Request, Response } from "express"
import connection from "./connection"

export const getProducts = async (req: Request, res: Response):Promise<any> => {
    let errorCode = 400

    try {
        
        const result = await connection("labecommerce_products")

        if(!result){
            errorCode = 500
            throw new Error("Unexpected error in server");
            
        }

        res.send(result)

    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}