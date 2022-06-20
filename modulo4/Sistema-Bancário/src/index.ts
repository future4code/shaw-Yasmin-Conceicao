import express,{Request,Response} from "express"
import cors from "cors"
import { user, users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

//----------------------------------------------------------

//Exercício 1, 2, 3, 4 concluidos no data.ts

//Exercício 5 e 7 Desafio 1

 app.post("/users/newUser" , (req, res) => {
    let currentTime = new Date()
    let year = currentTime.getFullYear()
    let month = currentTime.getMonth()
    let day = currentTime.getDay()
    let date = `${day}/${month}/${year}`
    let errorCode = 400
    let equal = false


    


    const newUser : user = {
        
        name:req.body.name,
        birthDate:req.body.birthDate,
        cpf: req.body.cpf,
        balance: 0,
        extract: []
    }

    for(let i = 0; i <users.length; i ++){
        if(users[i].cpf === req.body.cpf){
            equal = true
        }
    }

    try{
        if (!req.body.name){
            errorCode = 404
            throw new Error("Name input is missing")
        }else if (!req.body.birthDate){
            errorCode = 404
            throw new Error("Birth year input is missing")
        }else if (!req.body.cpf){
            errorCode = 404
            throw new Error("please fill in the cpf field")
        }

        if(year - newUser.birthDate < 18){
            errorCode = 406
            throw new Error("The age must be greater than 18")
        }

        if(equal === true){
            errorCode = 406
            throw new Error("this cpf already exists")
        }

    }catch(error:any) {
        res.status(errorCode).send(error.message)
    }

    users.push(newUser)
    res.send("User created succeffuly")
 })   


 //Exercício6

 app.get("/getAllUsers" , (req, res) =>{
    res.send(users)
 })




//----------------------------------------------------------
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
  });