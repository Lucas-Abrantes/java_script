const dados = {
    nome: 'pedro',
    idade: 25,
    cpf: '59858484884',
    email:'lucas@email.com',
    telefones: ['828282828282', '5582000444'],
    dependentes: [{
        nome: 'lucas',
        parentesco: 'filho',
        nascimento: '25/05/2000'
    }],
    saldo: 10,
    depositar: function(valor){
        this.saldo += valor;
    }
}

function verifica(obj){
    const cliente = Object.keys(obj);
    if(cliente.includes('dependents')){
        console.log(`${obj.nome} consta no nosso banco de dados`);
    }
    else{
        console.log('Não encontrado')
    }
}

verifica(dados);
console.log(Object.values(dados));
//entries --> devolve um par chave e valor
console.log(Object.entries(dados));
