const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//para cada elemento de notas, execute a nota
//percorre do inicio ao fim
// não é flexível, quanto ao for clássico

for (let nota of notas) {
  somaDasNotas += nota
}

const media = somaDasNotas / notas.length

console.log(media)
