import express from "express"
import cors from "cors"

const app = express()
 
app.use(express.json())
app.use(cors())

//-----------------------------------------------------

//Exercício1

app.get("/ping", (req, res) =>{
    res.send("pong")
})

//Exercício2

type Objects = {
    userId: string | number,
    id: string | number,
    title: string,
    completed: boolean
}

const tasks:Objects[] = [
    {
        
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
          },
          {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: true
               

    }

]

//Exercício3

app.get("/tasks", (req, res)=>{
    res.send(tasks)
})

//Exercício4

app.get("/completedTasks", (req, res)=>{
    const completedTasks = tasks.filter((task)=>{
        if(task.completed === true){
            return task.title
        }
    })
    res.send(completedTasks)
})

//Exercício5

app.post("/addTask/", (req, res) => {
   const {userId, id, title,completed} = req.body

    tasks.push({userId,id,title,completed});
    res.status(200).send(tasks)
});


//Exercício6

app.put("/editToDo/:id", (req, res)=>{
    const idToDo = req.params.id
    const {completed} = req.body
    const mapArray: any = tasks.find(item => item.id == idToDo)
    mapArray.completed = completed
    res.send(mapArray)
})

//Exercício7

app.delete("/deleteTask/:id", (req, res)=>{
    const toDoId = req.params.id
    const delet: number = tasks.findIndex(item => item.id == toDoId)
    tasks.splice(delet, 1)
    return res.status(200).json({sucess:"Afazer deletado com sucesso!" })

})

//Exercício8

app.get("/toDoUsers/:userId", (req, res)=>{
    const {userId} = req.params
    const newArray = tasks.filter((user)=>{
        if(user.userId == userId){
            return user
        }
    })
    res.send(newArray)
})



app.listen(3003, () => {
    console.log("Server is running in 3003");
   });