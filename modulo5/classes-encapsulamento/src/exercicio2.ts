 export class Transaction {
   private description: string
   private value: number
   private  date: string

   constructor(description: string, value: number, date:string){
    this.description = description
    this.value = value
    this.date = date
   }

   getDescription(){
    return this.description
   }

   getValue(){
    return this.value
   }

   getDate(){
    return this.date
   }

  }

   let yasminBank: Transaction = new Transaction("comprou um tesla", 1000000, "2022-06-20")
   console.log(yasminBank)