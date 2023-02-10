const notas = [10, 9.5, 8, 7, 6]

//com ForEach - modifica o array original
notas.forEach(function (nota) {
  console.log(nota + 1)
})

//com Map -  apropriado para reescrever arrays:
//não modificar o array original
const notaAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1
})

console.log(notaAtualizadas)
