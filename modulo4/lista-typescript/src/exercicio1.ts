type born = {
    day: number | string,
    month: number | string,
    year: number | string
}

function infoBorn () {
    const name: string = "yasmin"
    const birthDate: born = {
        day: 29,
        month: "novembro",
        year: 2002
    }
    console.log(`Olá me chamo ${name}, nasci no dia ${birthDate.day} do mês de ${birthDate.month}`)
}

infoBorn()