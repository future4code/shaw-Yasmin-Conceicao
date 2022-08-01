import { Request, Response } from "express";
import { ProductBusiness } from "../Business/ProductBusiness";

const productBusiness = new ProductBusiness()

export class ProductController {

    insertProduct = async (req:Request, res:Response) => {
        try {

            const {name, tags} = req.body

            const response = await productBusiness.insertProduct(name,tags)

            res.send({message: "Product successfully created"})
            
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

    
    getProduct = async (req:Request, res:Response) => {
        try {

            const {search} = req.query  

            const response = await productBusiness.getProduct(search as string) 
            
            res.send(response)

        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}