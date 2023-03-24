const notas = [10, 9, 8, 7, 6];
// map() --> tem como parâmetro uma função.Retorna um novo array
const notasAtualizadas = notas.map(nota =>{
    if (nota == 10){
        return nota;
    }
    else{
        return ++nota;
    }
})

console.log(notasAtualizadas);


//----------------------------


let nomes = ['pedro', 'ana Julia', 'Caio vinicius'];

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);