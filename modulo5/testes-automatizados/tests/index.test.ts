import {User, performPurchase } from "../src"


//Exercício 2


describe("Testing performPurchase " ,() =>{
    const user: User = {
        name: "Yasmin",
        balance: 100
    }

    test("Teste com um usuário com o saldo maior do que o valor de compra", () => {
        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Yasmin",
            balance: 60
        })
    })

    test("Teste com um usuário com o saldo igual ao valor de compra", () => {
        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Yasmin",
            balance: 0
        })
    })

    test("Teste com um usuário com o saldo menor do que o valor de compra", () => {
        const result = performPurchase(user, 110)

        expect(result).toEqual(undefined)
    })
   
})