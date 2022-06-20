import {Request, Response} from "express"
import app from "./app"
import connection from "./connection"

//Exercício 1

//B)

app.get("/actor/:name" , async (req: Request, res: Response):Promise<any> =>{
    try {

        const result = await connection.raw(`
            SELECT * FROM Actor 
            WHERE name LIKE "%${req.params.name}%"
        `)
        
        res.send(result[0])

    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
})


//C)

app.get("/actors/:gender/count", async(req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection("Actor")
        .count("* as genderCount")
        .where({gender: req.params.gender})
        res.send(result)
    } catch (error:any) {
        res.send(error.message)
    }
}

)


//Exercício 2


//A) 

app.put("/actor/salary/:id", async (req: Request, res: Response): Promise <any> => {
  try {
    const result = await connection("Actor")
    .update({salary: req.body.salary})
    .where({id: req.params.id})

    res.send(`o salario foi atualizado`)
      
  } catch (error:any) {
    res.send(error.message)
  }

}
)

//B)

app.delete("/actor/:id" , async (req: Request, res: Response): Promise <any> => {

    try {

        const result = await connection("Actor")
        .delete()
        .where({id: req.params.id})

        res.send(`ator deletado com sucesso`)
        
    } catch (error:any) {
        res.send(error.message)
    }
} )


//C) 



app.get("/actors/:gender/avgSalary", async(req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection("Actor")
        .avg(`salary as ${req.params.gender} salary AVG`)
        .where({gender: req.params.gender})
        res.send(result[0])
    } catch {
        res.status(500).send("Error")
    }
})


//Exercício 3

//A)

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const actor = await connection("Actor")
      .where({id: req.params.id})

      res.status(200).send(actor)

    } catch (err) {
        res.status(500).send("Error")
    }
  });


// B)


app.get("/actor", async (req: Request, res: Response) => {
    try {
        const {gender} = req.query
        const result = await connection("Actor")
        .count("* as genderCount")
        .where({gender: gender })

        res.send(result[0])

    } catch (error:any) {
        res.status(500).send("Error")
    }
})


//Exercício 4

//A)

app.put("/actor", async (req: Request, res: Response) => {
try {

    const result = await connection("Actor")
    .update({salary: req.body.salary})
    .where({id: req.body.id })

    res.send(`salario atualizado`)
    
} catch (error:any) {
    res.status(500).send("Error")
}
})


//B)

app.delete("/actor/:id", async (req: Request, res: Response) => {
 try {
     const result = await connection("Actor")
     .delete()
     .where({id: req.params.id})

     res.send(`deletado com sucesso`)
     
 } catch (error:any) {
    res.status(500).send("Error")
 }

})






