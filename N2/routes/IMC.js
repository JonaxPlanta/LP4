// Código por João Flores
// Importando as bibliotecas necessárias
const express = require('express');
const { stringify } = require('querystring');

// Criando uma manipulação das rotas pelo método Router presente na biblioteca express
const rotas = express.Router();

// método post para adicionar os dados de peso e altura para realizar o cálculo do IMC
rotas.post('/', (req, res) => {
    // Recebendo os dados passados pelo corpo da requisição
    const peso = Number(req.body.peso);
    const altura = Number(req.body.altura);
    const imc = Number(peso / (altura * altura)).toFixed(2);

    const dados = {
        "peso" : Number(peso),
        "altura" : Number(altura),
        "IMC" : Number(imc)
    };

    res.status(201).send(dados);
});

// Exportando as rotas utilizadas rotas
module.exports = rotas;