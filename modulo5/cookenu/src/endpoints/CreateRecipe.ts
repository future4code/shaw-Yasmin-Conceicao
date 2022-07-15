import { Request,Response } from "express";
import connection from "../connection";
import { v4 } from "uuid";
import {IdGenerator} from "../services/IdGenerator"
import moment from "moment"

const idGenerator = new IdGenerator()

export const CreateRecipe = async (req:Request, res:Response) => {
    let errorCode = 404

    try {

        const authenticator = req.headers.authorization
        const {title, createDate, description} = req.body

        const id = idGenerator.generateId()

        // const dateDiff: number = moment(createDate, 'YYY/MM/DD').unix() - moment().unix()

        let databrasil = moment(createDate).format("YY/MM/DD")

        const result = await connection("Recipe")
        .insert({
            id: id,
            title,
            create_date: databrasil,
            description
        })


        if(!title){
            errorCode = 404
            throw new Error("Enter the title");
        }

        if(!description){
            errorCode = 404
            throw new Error("Enter the description");
        }


        res.send("Recipe successfuly created")

        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}