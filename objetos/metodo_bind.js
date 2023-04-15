const user = {
    nome: 'lucas',
    email: 'lucas@email.com',
    idade: 25,
    exibirNome: function(){
        console.log(this.nome, this.email)
    }
}


const exibir = function(){
    console.log(this.nome, this.email)
}

// bind() --> usado para "prender" a execução de uma função em dado contexto
// momento

const exibirNome = exibir.bind(user)
exibirNome()