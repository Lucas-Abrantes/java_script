const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const port = 3500;
app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'Boas_vindas à API!'}))


// listen() --> ouvir a aplicação
app.listen(port, () => console.log(`Servidor está funcionando na porta ${port}`));

module.express = app;