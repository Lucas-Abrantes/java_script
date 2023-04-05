function Cadastro(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

// estou criando uma instância. Atribuindo à variável lucas
// new - refere-se que estamos criando um novo cliente a partir do
// construtor : function Cadastro()
//const lucas = new Cadastro('lucas', 'lucas@email.com', '1515155515', 200)

//console.log(lucas)


// criar um novo tipo de cliente

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    // call() -- chamar o construtor e pegar algumas de suas
    // propriedades
    Cadastro.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const lu = new ClientePoupanca('lucas', '15151515155', 'lucas@gmail.com', 400, 10)

console.log(lu)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

lu.depositarPoup(20)

console.log(lu)
console.log(lu.saldoPoup)
