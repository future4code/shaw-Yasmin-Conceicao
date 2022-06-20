import {application, Request, Response} from "express"
import axios from "axios"
import { baseURL } from "./baseURL"


type user = {
    id: string,
    name: string,
    email: string

}

// A) sim
// B) para que o código fique legivel e evitar futuros erros


//C)


const getSubs = async ():Promise <user[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

getSubs()



