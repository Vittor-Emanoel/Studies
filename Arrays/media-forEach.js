const notas = [10, 6.5, 8, 7.5]
//DIFERENÇA DO FOR E FOREACH.

//FOR EXECUTA O LOOP, ENQUANTO A CONDIÇÃO FOR VERDADEIRA, JÁ O FOREACH ELE PERCORRE O ARRAY INCONDICIONALMENTE

//parâmetro é uma função, é o que chamamos de callback  = chamada de retorno

let somaDasNotas = 0

notas.forEach(function (nota) {
  somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(media)
