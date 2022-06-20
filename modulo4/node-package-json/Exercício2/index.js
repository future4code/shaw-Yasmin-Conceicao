// //Exercício 2

// Primeira lógica

// const primeiroNumero = process.argv[2]
// const segundoNumero = process.argv[3]

// const adicao = Number(primeiroNumero) + Number(segundoNumero)
// const subtracao = (primeiroNumero) - (segundoNumero)
// const multiplicacao = (primeiroNumero) * (segundoNumero)
// const divisao = (primeiroNumero) / (segundoNumero)

// console.log(`A soma dos numeros é ${adicao}. A subtração dos numeros é ${subtracao}. A multiplicação dos numeros ${multiplicacao} e a divisão dos números é ${divisao}`)


//Segunda Lógica

 const primeiroNumero = Number(process.argv[3])
 const segundoNumero = Number(process.argv[4])

 const operacao = process.argv[2]

switch(operacao){
	case "add":
		console.log (primeiroNumero + segundoNumero)
		break;
	case "sub":
		console.log (primeiroNumero - segundoNumero)
		break;
    case "mult":
        console.log (primeiroNumero * segundoNumero)
        break;
    case "div":
        console.log (primeiroNumero / segundoNumero)
        break;    

}
