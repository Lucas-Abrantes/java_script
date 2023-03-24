const nomes = ['pedro', 'maria', 'mateus', 'ryan'];
const notas = [10, 8, 4.5, 9];
// filter() --> associa cada array ao seu respectivo indice
//  ['pedro', 'maria', 'mateus', 'ryan'];
//     0         1          2        3

//  [10, 8, 4.5, 9];
//    0  1   2   3
//logo, o filter mapeia cada elemento com os indices iguais. Retorna true ou false

const exibeAluno = nomes.filter((nome, indice) => {
    if(notas[indice] < 5){
        console.log(`${nome}, a sua nota foi: ${notas[indice]} / Reprovado`);
    }else{
        return
    }
})

