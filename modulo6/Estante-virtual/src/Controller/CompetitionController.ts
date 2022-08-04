import { Request, Response } from "express";
import { CompetitionBusiness } from "../Business/CompetitionBusiness";

const competitionBusiness = new CompetitionBusiness()

export class CompetitionController {
    insertCompetition = async (req:Request, res:Response) => {
        try {

            const {competition, athlete, value, unity} = req.body
            
            const token = req.headers.authorization as string

            const response = await competitionBusiness.insertCompetition(competition, athlete,value, unity, token)

            res.send({message: "Competition created"})
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }


    getSwimminWiner = async (req:Request, res:Response)  => {
        try {

            const {Classified} = req.query as any
            const response = await competitionBusiness.getSimmingWinners(Classified)

            res.send(response)
            
        
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }


    getRunningWinner = async (req:Request, res:Response) => {
        try {

            const {Classified} = req.query as any
            const response = await competitionBusiness.getRunningWinners(Classified)

            res.send(response)
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }


    getDartWinner = async (req:Request, res:Response) => {
        try {

            const {Classified} = req.query as any
            const response = await competitionBusiness.getDartWinners(Classified)

            res.send(response)
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    

    getWinner = async (req:Request, res:Response) => {
        try {

            const {competition, Classified} = req.query as any
            const response = await competitionBusiness.getWinners(competition, Classified)

            res.send(response)
                 
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}