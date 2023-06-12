//tem o seu próprio this
function minhaFuncao() {
  this.name = 'vittor'
}

//this do contexto aonde ela foi criada

const minhaArrow = () => {}

//args

function soma(...argumentos) {
  console.log(argumentos)
}
soma(1, 2, 3, 4, 5, 5)
