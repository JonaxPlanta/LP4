// Código por João Flores

// importando as bibliotecas Express e Body Parser para que o código funcione devidamente
const express = require('express');
const bodyParser = require('body-parser');

// Criando uma aplicação usando módulo express
const app = express();

// Aqui, determinamos os tipos de dados recebidos e enviados pelo corpo de requisição do servidor
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importando as rotas
const rotas = require('./routes/IMC');

// Indicando a raíz do servidor com uma mensagem do que ele faz
app.get('/', (req, res) => {
    res.status(200).send("Bem vindo à rota raíz do servidor. \nPara calcular o seu IMC, insira no corpo da requisição um arquivo JSON contendo seu 'peso' e sua 'altura'. ")
});

// Condigurando o servidor
const port = 8080;
const hostname = '127.0.0.1'

// Configurando o uso das rotas
app.use('/imc', rotas);

// Configuração de inicialização do servidor
app.listen(port, hostname, console.log(`O servidor está rodando! \nAcesse: http://${hostname}:${port}/`))

// Para rodar
// "node --watch 'server.js'"
// no método POST na URL
// "https://127.0.0.1:8080/imc"