import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { createUsers } from "./createUsers"
import { getUsers } from "./types/getUsers"
import { createProducts } from "./createProducts"
import { getProducts } from "./getProducts"
import { purchase } from "./purchase"
import { getPurchases } from "./getPurchases"



dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())


app.listen(process.env.PORT || 3003 , () => {
    console.log("server is running on port", process.env.PORT || 3003)
})


// Endpoint de cadastrar usuários

app.post("/User", createUsers)


//Endpoint de buscar por todos usuários

app.get("/User",getUsers )


//Endpoint de Cadastrar produto 

app.post("/products", createProducts)


//Endpoint de buscar todos os produtos

app.get("/products", getProducts)


//Endpoint de registro de compra 

app.post("/purchases", purchase)

//Endpoint de pegar informações das compras

app.get("/purchases/:userId", getPurchases)