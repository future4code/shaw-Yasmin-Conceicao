
import connection from "../connection";

export const getUserByEmail = async (email: string)=>{

   
    const result = await connection("Users")
   .where({email: email})

    return result[0]
   
   }