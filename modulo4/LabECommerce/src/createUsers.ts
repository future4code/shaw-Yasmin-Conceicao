import { Request, Response } from "express"
import connection from "./connection"



export const  createUsers = async (req: Request , res: Response): Promise<any> =>{

   let errorCode = 404
   
   try {
        const {name, email, password} = req.body

        // const user = async (email:string):Promise<any> =>{
        //    const response = await connection("labecommerce_users")
        //     .select("*")
        //     .where({email: email})

        //     return response
        // }

        if(!name){
            errorCode = 404
            throw new Error("The input name is missing");
            
        }
        
         if(!email){
            errorCode = 404
            throw new Error("the input email is missing");
            
        }
        
         if(!password){
            errorCode = 404
            throw new Error("the input passawor is missing");
            
        }

        // if(email === user.email){

        // }


        const result = await connection("labecommerce_users")
        .insert({
            id: Date.now(),
            name: name,
            email: email,
            password: password
        })


        if(!result){
            errorCode = 500
            throw new Error("Error in connection");
            
        }

       res.send("User Created ")

    
   } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
   }
}