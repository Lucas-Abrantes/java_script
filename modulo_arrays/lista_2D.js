const alunos = ['Pedro', 'Maria', 'Marcos'];
const notas = [10, 20, 30];


// [   ['Pedro', 'Maria', 'Marcos'], [10, 20, 30]  ]
//         [0]                            [1]
const registro = [alunos, notas];
console.log(registro[0][2]);


// procurando alunos


const exibeAluno = (nomeAluno)=>{
    //includes() --> faz um busca do valor, ou seja, verifica no vetor 
    // se aquele nome existe. Retorna um true ou false.
    if (registro[0].includes(nomeAluno)){
        //indexOf() --> passo o valor para a função. Dessa forma, ele vai pegar
        // o indice correspondente aquele valor.Retorna um número.
        let indice = registro[0].indexOf(nomeAluno);
        return registro[0][indice] + ',' + 'sua média é: ' + registro[1][indice];
    }
    else{
        return 'Nome não encontrado.'
    }
}

console.log(exibeAluno('Marcos'));