import { Request, Response } from "express"
import connection from "./connection"


export const getPurchases = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400

    try {

        const userId = req.params.userId


        const result = await connection(" labecommerce_purchases")
        .where({user_Id: userId})

        res.send(result)

        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}