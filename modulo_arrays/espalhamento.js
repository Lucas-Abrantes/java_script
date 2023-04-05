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
    },
    {
        nome:'lucas',
        idade: 25
    }]
}

const exibe = [...dados[0].dependentes, ...dados[1].dependentes]
console.log(ex)