        //   0    1   2   3
let notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (var i = 0; i < notas.length; i++){
    console.log(notas[i]);
    soma += notas[i];
}

console.log(`${soma/notas.length}`);
