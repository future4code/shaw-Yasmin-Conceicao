import {Transaction} from "../src/exercicio2"

//1) A)  Ele serve pra inicializar a classe, chamamos ele usando a sintaxe "constructor"

//B) 


export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf() {
        return this.cpf
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getBalance() {
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }



  
  }



  export const UserAccount1 =  new UserAccount("12345679764","yasmin", 19)
  console.log(UserAccount1)


  //C) usando o this

