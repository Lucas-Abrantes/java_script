const nomes = ['joao', 'ana', 'juliana', 'lucas',
            'pedro', 'rodrigo', 'fernanda', 'bruna',
            'jorge', 'gui', 'flavio'];


// slice() --> tem um valor inicial e final. 
// Vamos cortar/ dividir nosso array. Intervalo [0, n - 1]
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Sala 1: ${sala1}`);
console.log('');
console.log(`Sala 2: ${sala2}`);


// ----------------------------

const nomes2 = ['joao', 'ana', 'juliana', 'lucas',
            'pedro', 'rodrigo', 'fernanda', 'bruna',
            'jorge', 'gui', 'flavio'];

// splice() --> remove elementos do array. Dessa forma, 
//recebe 3 argumentos:
// [inicio, fim, o que queremos inserir]  

//nomes2.splice(1, 5, 'vinicius');

// para não remover elementos
nomes2.splice(2,0, 'bob');
console.log(`Nova lista de nomes: ${nomes2}`);

