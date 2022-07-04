
//1) A) Não. A propriedade "password" está como private, então não é acessivel fora da classe.

import { extname } from "path";

//B) Só um vez

class User {
   private id: string;
   private email: string;
   private name: string;
   private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string{
        return `Óla, bom dia. Meu nome é ${this.name}`
      }

      
  }

  const yasmin:User = new User("1", "yasmin@gmail.com", "yasmin", "76543")
  console.log(yasmin)


//---------------------------------------Exercício 2-------------------------------------------------------------------



  //A) Uma vez
  //B) Duas vezes. Porque "Custumer" é uma classe herdeira de "User"


 class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const result: Customer = new Customer("3" , "yasmin@gamil.com", "yasmin", "65378", "817326387")
  console.log(result)


//-----------------------------------------Exercício 3-----------------------------------------------------------------


  //A)Não daria pra chamar password porque ele está privado em "User" e para chamar uma propriedade do elemento pai em um elemento filho é necessario
  //"tipar" a propriedade com protected

  console.log(result.getCreditCard())
  console.log(result.getEmail())
  console.log(result.getId())
  console.log(result.getName());
  

//------------------------------------------Exercício 4----------------------------------------------------------------


//1) Adicionado no exercício 1

//2) 

console.log(result.introduceYourself());



//------------------------------------------Exercício 5----------------------------------------------------------------



// public introduceYourself(): string{
//     return `Óla, sou. ${this.name}.Bom dia!`
// }


//console.log(result.introduceYourself());




//--------------------------------------Polimorfismo--------------------------------------------------------------------


//Exercício 1

//A)

export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number

    calculateBill():number
}

const client1: Client = {
    name: "yasmin",
    registrationNumber: 2,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2
    }
}


console.log(client1.calculateBill())
console.log(client1.consumedEnergy)
console.log(client1.name)
console.log(client1.registrationNumber);



//------------------------------------------Exercício 2----------------------------------------------------------------


//A)"cannot create an instance of an abstract class"

//B) talvez deixando ela publica e retirasse o abstract

export abstract class Place {
    constructor (protected cep: string) {}

    public getCep(): string  {
        return this.cep
    }
}


// const teste :Place = new Place



//------------------------------------------Exercício 3----------------------------------------------------------------


//A) talvez deixando ela publica e retirasse o abstract

//B)  Porque ela foi criada para estar representando um tipo de informacao que so abstrai e armazena as caracteristicas em comun de um conjunto de outras classes.

//C) 3.b


export class Residence extends Place {
    constructor(protected residentsQuantity: number, cep: string) {
        super(cep)
    }

    getResidentsQuantity (): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(protected floorsQuantity: number, cep:string) {
        super(cep)
    }

    getFloorsQuantity():number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(protected machinesQuantity: number, protected cep: string) {
        super(cep)
    }

    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

let Home: Residence = new Residence(4, "24715532")
let yasminCommerce: Commerce = new Commerce(2, "12309123098" )

console.log(yasminCommerce.getCep())



//------------------------------------------Exercício 4----------------------------------------------------------------



//A) Metodo para calcular o valor da energia, e de pegar o CPF


class ResidencialClient extends Residence implements Client {

    constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string  

    ){
        super(residentsQuantity, cep)
    }
  
    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

    public getCpf(): string {
        return this.cpf
    }
}


//------------------------------------------Exercício 5----------------------------------------------------------------


//A) é bem semelhante não muda muita coisa

//B) mudança de cpf para cnpj e quantidade paga de energia 



class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    getCnpj(): string {
        return this.cnpj
    }
}



//------------------------------------------Exercício 6----------------------------------------------------------------


//A) Industry, porque estamos referenciando um cliente industrial

//B) Client, porque ele tambem é um tipo de cliente

//C)  Porque são informações fixas, não queremos muda-las, apenas consultar



class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    getIndustryNumber (): string {
        return this.industryNumber
    }
    calculateBill(): number {
        return ( 
            (this.consumedEnergy * 0.45) + (this.machinesQuantity * 100) 
        )
    }
    

  
  
}