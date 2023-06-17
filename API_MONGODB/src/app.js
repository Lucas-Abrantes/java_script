import express from "express";
import db from "./config/DbConect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () =>{
    console.log("Conexão feita com sucesso!");
})

const app = express();

// utilizado para interpretar os dados
// convertendo-os para json
app.use(express.json());

// const livros = [
    // {id: 1, "titulo": "Senhor dos Aneis"},
    // {id: 2, "titulo": "Hobbit"}
// ]

app.get('/', (req, res) =>{
    res.status(200).send("Curso de Node");
})

app.get('/livros', (req, res) =>{
    livros.find((err, livros) =>{
        res.status(200).json(livros);
    })
    
}) 


app.get('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    // recebe o título do objeto para ser substituído
    res.json(livros[index]);
})


// Método CRUD - CREATE, READ, UPDATE, DELETE
// post --> aidcionar um novo arquivo
app.post('/livros', (req, res) =>{
    // adicionar um novo elemento no meu array
    // através da requisição do corpo(body)
    livros.push(req.body);
    // 201 - ok
    res.status(201).send("Livro cadastrado com sucesso!");
})

// atualizar livro
app.put('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    // recebe o título do objeto para ser substituído
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})


app.delete('/livros/:id', (req, res) =>{
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.send(`Livro ${id} apagado com sucesso.`)
})


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;