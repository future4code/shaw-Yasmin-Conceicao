import { Competition } from "../Models/Competition";
import { BaseDatabase } from "./BaseDatabase";


export class CompetitionData extends BaseDatabase {
    insertCompetition = async (competition:Competition) => {
        await this.connection("competition_Estante_virtual")
        .insert({
            id:competition.id,
            competition: competition.competition,
            athlete: competition.athlete,
            value: competition.value,
            unity: competition.unity
        })
    }


   getSwimmingWinners = async (Classified:string) => {
        try {

            if(!Classified){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Natação"})

                return response
            }

            if(Classified === "quarterfinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition:"Natação"})
                .orderBy("value", "asc")
                .limit(8)

                return response
            }

            if(Classified === "semifinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition:"Natação"})
                .orderBy("value", "asc")
                .limit(4)

                return response
            }

            if(Classified === "final"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition:"Natação"})
                .orderBy("value", "asc")
                .limit(2)

                return response
            }

            if(Classified === "winner"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition:"Natação"})
                .orderBy("value", "asc")
                .limit(1)

                return response
            }
            
        } catch (error:any) {
            throw new Error(error.message);
        }
   }


   getRunningWiners = async (Classified:string) => {
        try {

            if(!Classified){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Corrida"})

                return response
            }

            if(Classified === "quarterfinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("value", "asc")
                .limit(8)

                return response
            }

            if(Classified === "semifinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("value", "asc")
                .limit(4)

                return response
            }

            if(Classified === "final"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("value", "asc")
                .limit(2)

                return response
            }

            if(Classified === "winner"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Corrida"})
                .orderBy("value", "asc")
                .limit(1)

                return response
            }

    
        } catch (error:any) {
            throw new Error(error.message);
        }
   }


   getDartWinners = async (Classified:string) => {
        try {

            if(!Classified){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Dardo"})

                return response
            }

            if(Classified === "quarterfinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("value", "asc")
                .limit(8)

                return response
            }

            if(Classified === "semifinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("value", "asc")
                .limit(4)

                return response
            }

            if(Classified === "final"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("value", "asc")
                .limit(2)

                return response
            }

            if(Classified === "winner"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: "Dardo"})
                .orderBy("value", "asc")
                .limit(1)

                return response
            }
            
        } catch (error:any) {
            throw new Error(error.message);
        }
                
   }
   

   getWinners = async (competition:string, Classified:string) => {
        try {

            if(!Classified){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: competition})

                return response
            }

            if(Classified === "quarterfinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: competition})
                .orderBy("value", "asc")
                .limit(8)

                return response
            }

            if(Classified === "semifinal"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: competition})
                .orderBy("value", "asc")
                .limit(4)

                return response
            }

            if(Classified === "final"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: competition})
                .orderBy("value", "asc")
                .limit(2)

                return response
            }

            if(Classified === "winner"){

                const response = await this.connection("competition_Estante_virtual")
                .select("*")
                .where({competition: competition})
                .orderBy("value", "asc")
                .limit(1)

                return response
            }

            
        } catch (error:any) {
            throw new Error(error.message);
        }
   }

    
}