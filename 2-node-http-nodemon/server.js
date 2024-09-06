// Importando o módulo HTTP da biblioteca HTTP
const http = require("http");

// Criando localhost com ip do próprio computador
const hostname = '127.0.0.1'
// Criando porta para selecionar uma porta do computador
const port = 3000;

// função anônima para criar servidor da biblioteca http
// parâmetros requisição e resposta são padrâo
const server = http.createServer((require, respost) => {
    // código de status tem que ser igual a 200 para estar 200
    respost.statusCode = 200;
    // configurando o cabeçalho (tipos de conteúdos, etc...)
    respost.setHeader('Content-Type', 'text/plan; charset=utf-8');
    // escreve uma frase no servidor
    respost.write('Olá! Este é um servidor HTTP.');
    // terminando resposta
    respost.end();
});

// executar o servidor (criando uma escuta, uma espera para alguém que digitar o endereço 'localhost')
server.listen(port, hostname, console.log('O servidor está rodando...'));