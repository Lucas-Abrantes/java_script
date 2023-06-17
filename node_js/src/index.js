import chalk from "chalk";
import fs from 'fs';




function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
  return resultados;
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro)
  }
}


/*
function trataError(erro){
  console.log(erro);
  // erro.code --> código associado ao erro
  throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}


async function pegaArquivo(arquivo){
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(arquivo, encoding);
    console.log(chalk.yellow(texto));
  } catch(erro){
    trataError(erro)
  }
}
*/


/*

function pegaArquivo(arquivo){
  const encoding = 'utf-8';
  fs.promises.readFile(arquivo, encoding)
  .then((texto)=> console.log(chalk.green(texto)))
  .catch(trataError);
}

*/


pegaArquivo('texto.md');

export default pegaArquivo;

/*


function lerArquivo(arquivo){
  const encoding = 'utf-8';
  fs.readFile(arquivo, encoding, (erro, texto) =>{
    if(erro){
      trataError(erro);
    }
    console.log(chalk.green(texto));

  })
}

lerArquivo('texto.m');*/


/*{
  "dependencies": {
    "chalk": "^5.2.0",
    "main": "index.js",
    "type": "module"
  }
}
*/ 