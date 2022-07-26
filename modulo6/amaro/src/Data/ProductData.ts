import { Product } from "../Models/Product";
import { BaseDatabase } from "./BaseDatabase";


export class ProductData extends BaseDatabase {
    insertProduct = async (product:Product) => {
        await this.connection("Product_amaro")
        .insert({
            id:product.id,
            name:product.name,
            tags:product.tags
        })
    }

    getProduct = async (search:string) => {
        try {

            const result = await this.connection("Product_amaro")
            .where("tags", "like", `%${search}%`)
            .or
            .where("name", "like", `%${search}%`)
            .or
            .where("id", "like", `%${search}%`)

            return result
           
            
        } catch (error:any) {
            throw new Error(error.message); 
        }
    }

    getAllProducts = async () => {
        try {

            const response = await this.connection("Product_amaro")
            
            return response

        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}