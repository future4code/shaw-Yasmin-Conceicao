import { UserData } from "../Data/UserData";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerate } from "../Services/IdGenerate";


const idGenarate = new IdGenerate()
const hashManager = new HashManager()
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
            throw new Error("The password must be longer than 6 characteres");
        }

        const id = idGenarate.generateId()
        const hashPassword = await hashManager.hash(password)

        await userData.signup({
            id,
            name,
            email,
            password:hashPassword
        })

        const user = await userData.selectUserByEmail(email)
        const token = authenticator.generateToken({id:user.id})

        return token
    }


    login = async (email:string, password:string) =>{

        if(!email){
            throw new Error("Enter a name");

        }else if(email.indexOf("@") === -1){
            throw new Error("the email must contain an @");
        }

        if(!password){
            throw new Error("Enter a password");
        }

        const user = await userData.selectUserByEmail(email)
        const token = authenticator.generateToken({id:user.id})

        return token
    }
}