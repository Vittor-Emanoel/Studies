//não é possível fazer um for para matrizes

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const todasAsNotas = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < todasAsNotas.length; i++) {
  for (let j = 0; j < todasAsNotas[i].length; j++) {
    media += todasAsNotas[i][j] / todasAsNotas[i].length
  }
}

console.log(media)
