//imagine que temos 1000 notas para fazer o calculo.
//Teremos que criar 1000 variáveis? para resolvermos isso iremos usar os array/listas

//Obs o índice dos arrays começando no 0

//Primeiro caso sem Array

// const nota1 = 10
// const nota2 = 6.5
// const nota3 = 8
// const nota4 = 7.5

// const media = (nota1 + nota2 + nota3 + nota4) / 4

//Segundo caso com Array
//             0    1   2   3
const notas = [10, 6.5, 8, 7.5]

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)
