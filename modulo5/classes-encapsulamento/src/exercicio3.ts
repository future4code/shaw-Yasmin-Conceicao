import { UserAccount } from "./exercicio1"
import {UserAccount1} from "./exercicio1"

 class Bank {
     account: UserAccount[]


    constructor(account: UserAccount[]){
        this.account = account
    }

    getAccount (){
        return this.account
    }

    setAccount (account: UserAccount[]) {
       this.account = account
    }
}

const result = new Bank ([UserAccount1])
console.log(result)
