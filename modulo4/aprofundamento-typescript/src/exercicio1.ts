//1) A = const minhaString: string = "Oi eu sou uma string"
// comentário = Ele dá um erro dizendo que não aceita nada que não seja string

//B) const meuNumero:Number | string = 30
//Comentário: Usando o UnionType, assim conseguimos atribuir mais tipos de variáveis ao nosso código

//C) 

    type person ={
        name:string,
        idade:number,
        corFavorita:string
    }

    enum corFavorita{
        ROSA = "rosa",
        AZUL = "azul",
        PRETO = "preto"
    }

    const yasmin:person = {
        name:"yasmin",
        idade:19,
        corFavorita: corFavorita.ROSA
    }

    const paulo:person = {
        name: "paulo",
        idade: 19,
        corFavorita: corFavorita.AZUL
    }

    const flavio:person ={
        name: "flavio",
        idade: 24,
        corFavorita: corFavorita.PRETO
    }

    type users = person[]

    const userList:users = []

    userList.push(yasmin)
    userList.push(paulo)
    userList.push(flavio)

    console.table(userList)

