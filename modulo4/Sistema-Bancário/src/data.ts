export type Extract = {
   value:number,
   date:number | string,
   description: string
}



export type user = {
   name: string,
   cpf: number,
   birthDate:Date || string ,
   balance:Number,
   extract: []
}

export const users: user[] = [

   {
      name: "Yasmin conc",
      birthDate:"2002/11/29",
      cpf:34567898709,
      balance:30000000,
      extract:[]
   }

]
