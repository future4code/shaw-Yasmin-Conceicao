import { Request, Response } from "express"
import connection from "./connection"


export const createProducts = async (req:Request, res: Response):Promise<any> => {
    let errorCode = 400

    try {
        const {name, price, imageUrl} = req.body

        if(!name){
            errorCode = 404
            throw new Error("the input name is missing");
            
        }

        if(!price){
            errorCode = 404
            throw new Error("the input price is missing");
        }
            
        if(!imageUrl){
            errorCode = 404
            throw new Error("the input imageUrl is missing");
            
        }

        const result = await connection("labecommerce_products")
        .insert({
            id: Date.now(),
            name: name,
            price: price,
            image_url: imageUrl
        })

        if(!result){
            errorCode = 500
            throw new Error("Error in connection");
            
        }

        res.send("product registered successfully")
        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }

}