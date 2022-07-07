import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";


 export class UserData extends BaseDatabase {
    signup = async (user:User) => {
        await this.connection ("Labook_users")
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }

    selectUserByEmail = async (email:string) => {

        try {

        const response = await this.connection("Labook_users")
        .where({email:email})

        return response[0]

        } catch (error:any) {
           throw new Error(error.message);
           
        }
        
    }

 } 