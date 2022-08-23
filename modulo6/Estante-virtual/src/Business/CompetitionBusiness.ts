import { CompetitionData } from "../Data/CompetitionData";
import { Authenticator } from "../Services/Authenticator";
import { IdGenerate } from "../Services/IdGenerate";

const idGenerate = new IdGenerate()
const competitiondata = new CompetitionData()
const autheticator = new Authenticator()

export class CompetitionBusiness {
    insertCompetition = async (competition:string, athlete:string, value:number, unity:string, token:string) => {

        if(!competition){
            throw new Error("Enter a competition");  
        }

        if(!athlete){
            throw new Error("Enter an athlete");
        }

        if(!value){
            throw new Error("Enter a value");  

        }else if(value < 0){
            throw new Error("The value must be longer than 0");
        }

        if(!unity){
            throw new Error("Enter an unity");  

        }else if(unity != "s" && unity != "m"){
            throw new Error("The unity must be s or m");
        }

        if(!token){
            throw new Error("Verify your authorization");
        }

        const id = idGenerate.generateId()

        await competitiondata.insertCompetition({
            id:id,
            competition,
            athlete,
            value,
            unity
        })

        const authorization = autheticator.getTokenData(token)

        return authorization

    }


    getSimmingWinners = async (Classified:string) => {

        if(!Classified){
            throw new Error("Enter a Classified. try: quarterfinal, semifinal, final, winner");    
        }

        const result = await competitiondata.getSwimmingWinners(Classified)

        return result
    }


    getRunningWinners = async (Classified:string) => {

        if(!Classified){
            throw new Error("Enter a Classified. try: quarterfinal, semifinal, final, winner"); 
        }

        const result = await competitiondata.getRunningWiners(Classified)

        return result
    }



    getDartWinners = async (Classified:string) => {

        if(!Classified){
            throw new Error("Enter a Classified. try: quarterfinal, semifinal, final, winner");    
        }

        const result = await competitiondata.getDartWinners(Classified)

        return result
    }



    getWinners = async (competition:string, Classified:string) => {

        if(!Classified){
            throw new Error("Enter a Classified. try: quarterfinal, semifinal, final, winner");    
        }

        if(!competition){
            throw new Error("Enter a competition");
        }

        const result = await competitiondata.getWinners(competition, Classified)

        return result
    }
   
}