import { Request, Response } from "express"
import connection from "./connection"

export const purchase = async (req:Request, res: Response):Promise<any> => {
    let errorCode = 400

    try {
        const {userId, productId, quantity} = req.body

        if(!userId){
            errorCode = 404
            throw new Error("the input userId is missing");
            
        }

        if(!productId){
            errorCode = 404
            throw new Error("the input productId is missing");
            
        }

        if(!quantity){
            errorCode = 404
            throw new Error("the input quantity is missing");
            
        }

     
        const result = await connection("labecommerce_purchases")
        .insert({
            id: Date.now(),
            user_id: userId,
            product_id: productId,
            quantity: quantity,
        })

        if(!result){
            errorCode = 500
            throw new Error("Error in connection");
            
        }

        res.send("Product bought")
        
    } catch (error:any) {
        res.status(errorCode).send(error.msqlMessage || error.message)
    }
}