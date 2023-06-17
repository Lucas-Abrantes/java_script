

/*function mandaMensagem(){
    console.log('Seja bem-vindo');
}

// callback - a função é executada depois de um certo tempo
setTimeout(mandaMensagem, 5000);

console.log('tudo certo!');
*/
/*
O Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. 
O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. 
A call stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: 
qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. 
Por fim, a task queue é a fila de tarefas assíncronas.
 Se algo precisa ocorrer em segundo plano ou mais tarde, 
 é nessa fila que ele será adicionado e executado mais tarde.*/
 
 
// throw() --> lance

var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
/*
.then(resposta => resposta.json())
.then(exibe => {
    if (exibe.erro){
        throw Error('Esse cep não existe');
    }
    else{
        console.log(exibe);
    }
    console.log(exibe)})
.catch(erro => console.log(erro))
.finally(msg => console.log('processamento concluído'));*/
// then() -- então
// catch() -- pegue. Devolve uma mensagem de erro durante a requisição ao servidor

async function buscaEndereco(){
    let consultaCep2 = await fetch('https://viacep.com.br/ws/01001000/json/');
    let cepConvertido = await consultaCep2.json();
    console.log(cepConvertido);

    console.log(consultaCep2);
}

buscaEndereco();
