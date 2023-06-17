/*Crie um programa que receba notas de um aluno e verifique se aquele 
aluno já está cadastrado, se está aprovado ou não e quantos alunos
estão matriculados. Exiba os alunos em um menu*/

let id = [];
let alunos = []

function gerarId(quantidade){
    while(id.length <= quantidade){
        let valor = Math.floor(Math.random() * 100) + 1;
        if(!id.includes(valor)){
            id.push(valor);
        }

    }
}



function cadastrarAlunos(alunos_cadastro){
    if(!alunos.includes(alunos_cadastro)){
        alunos.push(alunos_cadastro);
    }
    console.log("Aluno já cadatrado!");
}


function exibeAlunos(alunos, id){
    console.log(`\t ${id} --> ${alunos}`);
}
