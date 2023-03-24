// adicionando elemento na lista

const notas = [10, 6, 8];
notas.push(7);
// notas.push() --> caso esteja vazio, retorna um undefined, logo,
// o retorno do resultado é NaN.
console.log(notas);

let soma = 0;

for (var i = 0; i < notas.length; i++){
    console.log(notas[i]);
    soma += notas[i];
}

console.log(`A média é: ${soma/notas.length}`);


// removendo elemento da lista

const nota2 = [10, 6, 8, 9];
nota2.pop();
// nota2.pop() --> remove o último elemento. Posso passar o índide
// do elemento que eu quero remover
// EX:     notas2.pop(2);
console.log(nota2);



