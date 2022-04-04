// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}
retornaTamanhoArray(array)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido(array)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function aaa(a, b) {
    return a - b
  }
  return array.sort(aaa)
}
retornaArrayOrdenado(array)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i])
    }
  }
  return numerosPares

}


retornaNumerosPares(5)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let retornarPar = (array2) => {

    return array2 % 2 === 0

  }
  let retornarElevado = (array2) => {
    return array2 * array2
  }
  return array.filter(retornarPar).map(retornarElevado)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior = Math.max(num1, num2)
  let menor = Math.min(num1, num2)
  let objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: (maior % menor === 0),
    diferenca: maior - menor

  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = []
  for (let i = 0; i < n; i++) {
    array[i] = i * 2

  }
  return array
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoC === ladoA) {
    return ("Equilátero")

  } if (ladoA === ladoB || ladoC === ladoB || ladoA === ladoC) {
    return ("Isósceles")

  } else {
    return ("Escaleno")
  }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  array.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let array2 = [array[array.length - 2], array[1]]
  return array2
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

  let assistir =
  {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

  let novoObjeto = {
    ...pessoa,
    nome: "ANÔNIMO",
  }
  return novoObjeto

}
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoaAltorizadas = pessoas.filter((pessoas) => {
    return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60
  })
  return pessoaAltorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoAltotorizadas = pessoas.filter((pessoas) => {
    return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60

  })
  return naoAltotorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let i = 0; i < contas.length; i++) {
    soma = 0
    for (let j = 0; j < contas[i].compras.length; j++) {
      soma = soma + contas[i].compras[j]

    }
    contas[i].saldoTotal = contas[i].saldoTotal - soma
    contas[i].compras = []
  }
  return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  function compare(a,b) {
    if (a.nome < b.nome)
       return -1;
    if (a.nome > b.nome)
      return 1;
    return 0;
  }
  return consultas.sort(compare)

};

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}