class Cliente{
    constructor(nome, idade, cpf, email, saldo){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}


class ClienteVip extends Cliente{
    constructor(nome, idade, saldoPoup){
        //super pega os atributos que queremos para a nova classe
        super(nome)
        this.idade = idade
        this.saldo = saldoPoup
    }

    depositarVip(valor){
        this.saldo += valor
    }
}

/*
const lucas = new Cliente('lucas', 23, '1515151515', 'lucas@email.com', 200)

lucas.depositar(500);
lucas.exibirSaldo();*/

const maria = new ClienteVip('maria', 35, 100)

console.log(maria)