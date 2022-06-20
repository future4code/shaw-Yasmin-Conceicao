import {Request, Response} from "express"
import axios from "axios"
import { baseURL } from "./baseURL"



// A) Endpoint Get

// B) Promise<any[]>

// C)

async function getAllSubscribers(): Promise<any> {
    const result = await axios.get(`${baseURL}/subscribers`)
       console.log(result.data)
       
}

getAllSubscribers()










