import { UserData } from "../Data/UserData";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerate } from "../Services/IdGenerate";


const idGenerate = new IdGenerate()
const authenticator = new Authenticator()
const hashManager = new HashManager()
const userData = new UserData()

export class UserBusiness {
    signup = async (name:string, email:string, password:string) => {

        if(!name){
            throw new Error("Enter a name");   
        }

        if(!email){
            throw new Error("Enter an email");

        }else if(email.indexOf("@") === -1){
            throw new Error("The email must contain an @");
        }

        if(!password){
            throw new Error("Enter a password"); 

        }else if(password.length < 6){
            throw new Error("The password must be longer than 6 characteres");
        }

        const id = idGenerate.generateId()
        const hashPassword = await hashManager.hash(password)

        await userData.signup({
            id:id,
            name,
            email,
            password: hashPassword
        })

        const user = await userData.selectUserByEmail(email)
        const token = authenticator.generateToken({id:user.id})
         
        return token
    }

    login = async (email:string, password:string) => {

        if(!email){
            throw new Error("Enter a email");
        }

        if(!password){
            throw new Error("Enter a password");
        }


        const user = await userData.selectUserByEmail(email)

        const validatePassword = await hashManager.compare(password, user.password)

        if(!validatePassword){
            throw new Error("Incorrect password");
        }

        const token = authenticator.generateToken({id:user.id})


        return token

    }
}