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

let buscar = '';

for( let info in dados){
    if(typeof dados[info] === 'object' || typeof dados[info] === 'function'){
        continue
    }
    else{
        buscar += `\t ${info} --> ${dados[info]}\n`
    }
}
console.log(buscar);