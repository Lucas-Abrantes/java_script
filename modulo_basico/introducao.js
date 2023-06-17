/*JavaScript é uma linguagem de alto nível, dinâmica
interpretada e não tipada



EXPRESSÃO --> é uma frase que é utilizada para reproduzir um valor.
Uma expressão calcula um valor, mas não altera o estado do programa.

Já a instrução não calcula nada, mas altera o estaod do programa

VALOR --> . e [] refere-se ao valor de uma propriedade de array


Quando funções recebem as propriedades de um objeto, as chamamos de "métodos". 
Todos os objetos de JavaScript têm métodos



A palavra-chave "this" se refere ao objeto no qual o método é definido


*/

let a = [];
a.push(1, 2, 4);
console.log(a);


a.reverse();
console.log(a);

// pop altera o valor do array
a.pop();
console.log(a);


function calculaFat(x){
    let produto = 1;
    while(x > 1){
        produto *= x;
        x --;
    }
    return produto;
}


let valores = [1,2,3,6];
console.log(calculaFat(valores.length));



function fatorial2(valor){
    var produto = 1;
    for(let i = 1; i <= valor.length; i++){
        produto *= i;
    }
    return produto;
}

let dados = [1,2,5,4];
let exibe = fatorial2(dados);
console.log(exibe);

