
console.log("Boas-vindas ao jogo de blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	const carta1 = comprarCarta(); 
   const carta2 = comprarCarta(); 
   const soma = carta1.valor + carta2.valor
   console.log(`Usuário - cartas: ${carta1.texto}, ${carta2.texto}  - pontuação ${soma}` )

   const pc1 = comprarCarta(); 
   const pc2 = comprarCarta(); 
   const somaPc = pc1.valor + pc2.valor
   console.log(`computador - cartas: ${pc1.texto}, ${pc2.texto}  - pontuação ${somaPc}`)
   
if(soma > somaPc && soma <= 21){ 
  console.log("O usuário ganhou!")
}else if ( somaPc > soma && somaPc <=21){
console.log("O computador ganhou!")

}else{

   console.log("Empate!")
}

} else {
	console.log("O jogo acabou.")
}
 
