//Exercício 3

const tarefa = ["lavar roupa" , "Limpar a casa"]
const novaTarefa = tarefa.push((process.argv[2]))

console.log(`A tarefa ${process.argv[2]} foi adicionada`)
console.log(tarefa)
