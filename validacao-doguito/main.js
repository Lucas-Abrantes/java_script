export function validacao(input){
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }
}

const validadores = {
    dataNascimento: input => validarNascimento(input)
}


function validarNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem = '';
    if(!maiorIdade(dataRecebida)){
        mensagem = 'Você é menor de idade.';
    }
    input.setCustomValidity(mensagem);
}


function maiorIdade(data){
    const dataAtual = new Date();
    const data18 = new Date(data.getUTCFullYear() + 18, data.getUTCFullMonth(), data.getUTCFullDate());

    return data18 <= dataAtual;
}