const user = {
    nome: 'lucas',
    email: 'lucas@email.com',
    idade: 25,
    exibirNome: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Jorge',
    idade: 30,
    email:'jorge@email.com'
}

// setPrototypeof() --> recebe como parâmetro a variável que vai herdar
// as caracteristicas daquele objeto
// admin herder as caracteristicas de user
Object.setPrototypeOf(admin, user)

admin.exibirNome()