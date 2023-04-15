function User(nome, email){
    this.nome = nome
    this.email = email
    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role){
    User.call(this, 'lucas', 'lucas@')
    this.role = role || 'estudante'
}

// Admin recebe o protótipo de user
// a partir disso, pode-se criar um novo objeto
// dado o protótipo raiz
//Admin.prototype = Object.create(User.prototype)
//const novoUser = new Admin('estudante')
//console.log(novoUser.exibirInfos())

/*
const user = {
    exibirInfo: function(nome){
        return nome
    }
}
*/

/*
const novouser = Object.create(user)
console.log(novouser.exibirInfo('mateus'))
console.log(user.isPrototypeOf(novouser))
*/



const dados = {
    // construtor
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirDados: function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoDado = Object.create(dados)
novoDado.init('lucas', 'lucas@.com')
console.log(novoDado.exibirDados())

