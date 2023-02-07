const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 8, 7.5, 9]

const listaDeALunoEmedias = [alunos, medias]

//includes retorna true ou false
// indexof - retorna a posição

// function exibeNomeENota(aluno) {
//   if (listaDeALunoEmedias[0].includes(aluno)) {
//     console.log(`${aluno} está cadastrado!`)

//     const indice = listaDeALunoEmedias[0].indexOf(aluno)

//     const mediaDoAluno = listaDeALunoEmedias[1][indice]

//     console.log(`${aluno} tem a média ${mediaDoAluno}`)
//   } else {
//     console.log(`${aluno} não está cadastrado!`)
//   }
// }

function adiciona(aluno) {
  //se retorna verdade ou seja tiver o aluno ele retornará isso.
  if (listaDeALunoEmedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado!`)

    const index = listaDeALunoEmedias[0].indexOf(aluno)
    //acessando o array de notas e usando a posição do aluno para retornar a nota
    const encontrarMedia = listaDeALunoEmedias[1][index]

    console.log(`o ${aluno} tem a media ${encontrarMedia}`)
  } else {
    console.log(`${aluno} não está cadastrado!`)
  }
}

adiciona('João')
