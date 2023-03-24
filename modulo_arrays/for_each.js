const notas = [10, 9, 8, 6.5];

let somaNotas = 0;

// callback - chamar uma função dentro da outra
// foreach() --> tem como parâmetro uma outra função para percorrer
// o vetor, isto é, é um método equivalente a v[i]. Dito isso,
// esse laço verre esse array internamente sem a necessidade de 
// declarar o indice. Somando os valores correspondete àquele indice.
notas.forEach(nota =>{
    somaNotas+= nota;
})

let media = somaNotas/notas.length;
console.log(media);


/*
outra forma

notas.foreach(function(nota){
    somaNotas+= nota;
})

*/ 