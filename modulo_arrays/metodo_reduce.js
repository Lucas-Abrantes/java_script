const notas = [10, 8, 9, 1, 2, 50];

// reduce() --> recebe como parâmetro uma função e um valor inicial
// uma forma de somar valores dentro do vetor
function media(recebeNotas){
    const soma = recebeNotas.reduce((acum, atual) => atual + acum, 0);
    return soma/notas.length;
}

console.log(Math.round(media(notas)));

