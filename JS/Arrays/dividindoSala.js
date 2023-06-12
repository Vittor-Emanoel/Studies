const alunos = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camilo',
]

// não altera o array original
//do indice 0 ao 9
const sala1 = alunos.slice(0, alunos.length / 2)
//até o final
const sala2 = alunos.slice(0, alunos.length / 2)

console.log(sala1)
console.log(sala2)
