import { ProductData } from "../Data/ProductData";
import { IdGenerate } from "../Services/IdGenerate";

const idGenarate = new IdGenerate()
const productData = new ProductData()

export class ProductBusiness {
    
    insertProduct = async (name:string, tags:string) => {

        if(!name){
            throw new Error("Enter a name");
        }

        if(!tags){
            throw new Error("Enter a tag");
        }

        const id = idGenarate.generateId()

        await productData.insertProduct({
            id,
            name,
            tags
        })

    }


    getProduct = async (search:string) => {

       if(!search){
         const response = await productData.getAllProducts()

         return response
       }

       if(search){
        const response = await productData.getProduct(search)

        return response
       }

       
    }
}