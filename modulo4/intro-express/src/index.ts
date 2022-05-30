import express, {response} from "express"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

// ------------------------------------------------------------------------

//Exercício1

app.get("/", (req, res) =>{
    res.send("hello from express")
})

//Exercício2

type User = {
    id: string | number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercício3

const users : User[] = [
    {
        id: 1,
        name: "Yasmin",
        phone: 12345678,
        email: "yasmin@gmail.com",
        website: "yasmincss.com"

    },

    {
        id: 2,
        name: "Paulo",
        phone: 78594635,
        email: "paulo@gmail.com",
        website: "paulohtml.com"

    },

    {
        id: 3,
        name: "Maria",
        phone: 19863527,
        email: "maria@gmail.com",
        website: "mariajs.com"

    },

    {
        id: 4,
        name: "Flavio",
        phone: 28395327,
        email: "flavio@gmail.com",
        website: "flaviots.com"

    }

    
]

//Exercício4

app.get("/users", (req, res) =>{
    res.send(users)
})


//Exercício5

type Post = {
    id: string | number,
    title: string,
    body: string,
    userId: string | number
}

//Exercício6

const posts: Post[] = [
    {
        id: "l1",
        title: "Educação infantil",
        body: "Pesquisas apontam que bater para educar trás consequências negativas para a vida adulta da criança.",
        userId: Date.now()
    },

    {
        id: "l2",
        title: "Dívida externa",
        body: "Dívida Pública brasileira é equivalente a R$ 5,613 trilhões, veja como isso afeta nosso poder de compra no Brasil" ,
        userId: Date.now()
    },

    {
        id: "l3",
        title: "Tratamento de esgoto no Brasil",
        body: "Apenas 45% de todo esgoto do pais é tratado",
        userId: Date.now()
    },

]


//Exercício7

app.get("/posts" , (req, res) =>{
    res.send(posts)
})

//Exercício8

app.get("/posts/1", (req, res) =>{
    res.send(posts[0])
})


// ------------------------------------------------------------------------

//Exercício9

app.delete("/posts/", (req , res) =>{
    res.send(posts.pop())
    console.log("post deletado")
})


//Exercício10

app.delete("/posts/deleteUser", (req,res) =>{
    res.send(users.pop())
    console.log("Usuário deletado com sucesso")
})


app.listen(3003, () =>{
    console.log("Está rodando")
})