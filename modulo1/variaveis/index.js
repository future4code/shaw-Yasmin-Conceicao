//Resposta número 1  , 10 , 5

//resposta númerp 2   10, 10, 10 

/*quantasHorasVoceEstudaPorDia
quaisMateriasVoceEstuda
você estuda ${t/p} por dia*/

 let nome
 let idade
/*typeof nome
 typeof idade*/
     //console.log(typeof nome)
      // console.log(typeof idade)
       //Deu Undefined porque não tem nenhum valor atribuido
      nome = prompt("Qual seu nome?")
    idade = prompt("qual sua idade?")
   console.log(typeof nome, typeof idade,)
 /*Os dois retornaram como String, porque o prompt só retorna desse jeito*/
console.log("óla",nome, "Você tem", idade, "anos" )

//Exercício número 2
let perguntaRoupa = prompt("você tem uma blusa azul? RESPONDA APENAS COM SIM OU NÃO") 
let temBicicleta = prompt("você sabe andar de bicicleta?")
let costumaViajar = prompt ("você gosta de viajar")
let falaAlgumaLingua = prompt("você fala alguma lingua estrangeira?")
console.log("você tem uma blusa azul?", perguntaRoupa)
console.log("tem bicicleta?", temBicicleta)
console.log("costuma viajar?", costumaViajar)
console.log("você fala alguma lingua?", falaAlgumaLingua)
//Exercício 3
let a = 10
let b = 25
let c 
c = a
a = b
b = c
console.log(a,b)
//Explicação criei uma variavel c seguindo a logica dos copos//
