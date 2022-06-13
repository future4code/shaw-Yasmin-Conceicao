import {Request, Response} from "express"
import axios from "axios"
import { baseURL } from "./baseURL"


// A) A função nomeada é executada sequencialmente, ou seja,
// se tiver uma função A e B respectivamente, a função B só será executada após a função A ser executada.
// já na função assíncrona caso a função A não dê respostas a função B vai ser executada


// B) 

const getAllSubscribers = async (): Promise<any> =>{
    const result = await axios.get(`${baseURL}/subscribers`)
    console.log(result.data)
}

getAllSubscribers()