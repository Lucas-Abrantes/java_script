// iniciar um projeto npm init -y
// verificar se o servidor está funcionando node server.json

import app from "./src/app.js";
// process.end.PORT --> porta que está em produção ou a portal local
const port = process.env.PORT || 3000;

//process.end.PORT || 
//criando rotas
/*
const rotas = {
    '/': 'Pagina inicial do curso NodeJs',
    '/livros': 'Acessando a pagina livros',
    '/autor': 'Acessando a pagina autor',
    '/documentacao': 'Acessando a pagina de documentacao'
}


// criar um servidor
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})*/

// fazer o servidor "ouvir" as requisições
app.listen(port, ()=>{
    console.log(`Servidor escutando. http://localhost:${port}...`);
})