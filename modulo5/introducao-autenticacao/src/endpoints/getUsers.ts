import connection from "../connection";

export const getUsers = async (id: string)=>{

   
    const result = await connection("Users")
   .where({id: id})

    return result[0]
   
   }