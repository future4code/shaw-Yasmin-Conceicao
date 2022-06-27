import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { authentication } from "../types";

const expiresIn = "10min"
export const generateToken = (input: string) => {
    const token = jwt.sign(
        {
            id: input
        },
        "bananinha",
        {
            expiresIn
        }
    )
    return token
}



const getData = (token: string) => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  };