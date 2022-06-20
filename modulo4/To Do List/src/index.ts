import {Request, Response} from "express"
import app from "./app"
import connection from "./connection"
import moment from "moment"

//Exercício 1

app.post("/creatUser", async(req: Request, res: Response) : Promise<any> =>{
    let errorCode = 400

    try{
        if(!req.body.nickname){
            errorCode = 404
            throw new Error("The nickname input is empty")
        }else if(!req.body.email){
            errorCode = 404
            throw new Error("The email input is empty")
        }else if(!req.body.name){
            errorCode = 404
            throw new Error("The name input is empty")
        }

        await connection("User")
        .insert({
            id: Date.now(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })
        
        res.send("user created!")

    }catch(error: any){
    res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


//Exercício 2

app.get("/user/:id", async(req: Request, res: Response) : Promise<any> =>{
    let errorCode = 400
//    const {id} = req.params

    try {
        // if(!req.params.id || null || undefined || ""){
        //     errorCode = 404
        //     throw new Error("The id input is empty");
            
        // }
        
    
        const result = await connection("User")
        .select("*")
        .where({id: req.params.id})
       
        if(!result[0]){
            errorCode = 404
            throw new Error("Invalid ID. Try again");
            
        }

        res.send(result)
        
    } catch (error: any) {
     res.status(errorCode).send(error.sqlMessage || error.message)
    }

})


//Exercício 3

app.put("/user/edit/:id", async(req: Request, res: Response) : Promise<any> =>{
    let errorCode = 400

    try {
        if(! req.body.nickname){
            errorCode = 404
            throw new Error("The nickname input is empty");
            
        }else if(!req.body.name){
            errorCode = 404
            throw new Error("The name input is empty");
            
        }else if(!req.body.email){
            errorCode = 404
            throw new Error("the email input is empty");
            
        }else if(!req.params.id){
            errorCode = 404
            throw new Error("The id is invalid");
            
        }

        const result = await connection ("User")
        .update({
            nickname:req.body.nickname,
            name: req.body.name,
            email:req.body.email

        })
        .where({id: req.params.id})

        res.send("User succefully updated")

    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message) 
    }

})


//Exercício 4

app.post("/task",  async(req: Request, res: Response) : Promise<any> =>{
    let errorCode = 400

    const {title,description,limitdate,userId} = req.body

    try {
        if(!title) {
            errorCode = 404
            throw new Error("The input title is empty")
        } else if(!description) {
            errorCode = 404
            throw new Error("The input description is empty")
        } else if(!limitdate) {
            errorCode = 404
            throw new Error("The input limitDate is empty")
        }else if(!userId) {
            errorCode = 404
            throw new Error("The input userId is empty")
        }

        const dateDiff: number = moment(limitdate, 'DD/MM/YYYY').unix() - moment().unix()

        if (dateDiff <= 0) {
            throw new Error(`DeadLine deve ser uma data futura!`)
        }

        const result = await connection("Task")
        .insert({
            id: Date.now(),
            title: title,
            description: description,
            limitdate: moment(limitdate,"DD/MM/YYYY").format("YYYY-MM-DD"),
            user_id: userId

        })

        res.send("Task created success")
        
    } catch (error:any) {
     res.status(errorCode).send(error.sqlMessage || error.message) 
    }

})


//Exercicío 5


app.get("/task/:id",  async(req: Request, res: Response) : Promise<any> =>{
    let errorCode = 400
    // const id = req.params.id
    

    try {

        const result = await connection("Task")
        .select("*")
        .where({id: req.params.id})

        const newResult = {
            ...result[0],
            limitdate: moment(result[0].limitdate).format("DD-MM-YYYY")
        }
       
        if(!result[0]){
            errorCode = 404
            throw new Error("Task not found");
            
        }

        res.send(newResult)

    } catch (error:any) {
    res.status(errorCode).send(error.sqlMessage || error.message) 
    }


})





