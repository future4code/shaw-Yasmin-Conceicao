import { UserData } from "../Data/UserData";
import { Authenticator } from "../Services/Authenticator";
import { IdGenerate } from "../Services/IdGenerate";

 const idGenerate = new IdGenerate()
 const userData = new UserData()
 const authenticator = new Authenticator()

 export class UserBusiness {
    signup = async (name:string, email:string, password:string) => {

        if(!name){
            throw new Error("Enter a name"); 
        }

        if(!email){
            throw new Error("Enter a email"); 

        }else if(email.indexOf("@") === -1){
            throw new Error("The email must contain an @"); 
        }

        if(!password){
            throw new Error("Enter a password"); 

        }else if(password.length < 6){
            throw new Error("The password must be longer than 6 characteres")
        }

        
      const id = idGenerate.generateId()
      

      await userData.signup({
        id:id,
        name: name,
        email:email,
        password: password
      })

      const user = await userData.selectUserByEmail(email)

      const token = authenticator.generateToken({id:user.id})

      return token

    }


    login = async (email:string, password: string) => {
        if(!email){
            throw new Error("Enter a name");
        }

        if(!password){
            throw new Error("Enter a name");
        }

        const user = await userData.selectUserByEmail(email)
        
        const token = authenticator.generateToken({id:user.id})

        return token

    }

 }