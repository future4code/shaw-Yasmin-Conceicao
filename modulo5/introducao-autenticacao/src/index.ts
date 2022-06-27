import app from "./app"
import { createUser } from "./endpoints/createUser"
import { Login } from "./endpoints/login"
import { signup } from "./endpoints/signup"
import { authentication } from "./types"


//----------------------------------Exercício 2------------------------------------------

app.post("/createUser", createUser)


//----------------------------------Exercício 3------------------------------------------


//A) reforça que a informação de senha a ser passada ela vem como uma string obrigatoriamente

//B) feito na página Authenricator



//----------------------------------Exercício 4------------------------------------------

app.post("/user/signup", signup)


//----------------------------------Exercício 5------------------------------------------

//getUserByEmail.ts


//----------------------------------Exercício 6------------------------------------------

app.post("/user/login", Login)