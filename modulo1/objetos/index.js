



//Exercícios de interpretação de código

//1)A) matheus  nachtergaele, viriginia cavendish, canal: 'globo, horario: '14h'


//2)A) juca, idade: 3, raca: srd

//  B) muda o nome de algo para outro nome.


//3)A) false e undefined

//B) porque foi chamado na função 2 nomes que não existem



//  exercício de escrita de código 

// Exercício 1)A)


// const pessoa = {

//     nome: "yasmin",
//     apelidos: ["mimi", "yas", "mimim"]

// }

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

//Exercício B

// function mudar(b) {
// console.log(`Eu sou ${b.nome}, mas pode me chamar de: ${b.apelidos}`)  
// }
// const pessoa = {

//     nome: "yasmin",
//     apelidos: ["jasmin", "ya", "pimpinha"],
// }

//     const pessoaNova ={
//     ...pessoa,
//     apelidos:["mimi", "yas","mimim"]

//     }   
// mudar(pessoaNova) 



// Exercício 2)A)B)

// const pessoa = {
//    nome: "yasmin",
//    idade: 19,
//    profissão: "estudante"

// }

// const pessoa2 = {
//    nome: "paulo",
//    idade: 20,
//    profissão: "medico"
// }

// function info() {
//    const arrayInfo = [
//      pessoa.nome,
//      pessoa.nome.length,
//      pessoa.idade,
//      pessoa.profissão,
//      pessoa.profissão.length
//    ]

//     const arrayInfo2 =[
//         pessoa2.nome,
//         pessoa2.nome.length,
//         pessoa.idade,
//         pessoa2.profissão,
//         pessoa2.profissão.length

//     ]

//    console.log(arrayInfo)
//    console.log(arrayInfo2)
// }

// info()

//Exercício 3

//A)B)C)D)

// const carrinhoDeCompras =[]

// const fruta1 ={
  
//  nome: "mamão",
//  disponibilidade: true
// }

// const fruta2 ={
//   ...fruta1,
//   nome: "melão",
//   disponibilidade: true
// }

// const fruta3 = {
//     ...fruta2,
//     nome: "uva",
//     disponibilidade: true
// }

// function adicionarNoArray(fruta) {
//     carrinhoDeCompras.push(fruta)
    
// }

// adicionarNoArray(fruta1)
// adicionarNoArray(fruta2)
// adicionarNoArray(fruta3)
// console.log(carrinhoDeCompras)