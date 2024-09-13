// Importando o módulo HTTP da biblioteca HTTP
const http = require("http");
const url = require("url");

// Criando localhost com ip do próprio computador
const hostname = '127.0.0.1'
// Criando porta para selecionar uma porta do computador
const port = 3000;

// Função anônima para criar servidor da biblioteca http
// Os parâmetros requisição (quando o usuário faz uma requisição) e
// resposta (quando o servidor está dando uma resposta ao) são padrâo
const server = http.createServer((require, response) => {
    // Instruções para o navegador (statusCode e setHeader)
    // Código de status tem que ser igual a 200 para estar tudo certo
    response.statusCode = 200;
    // Configurando o cabeçalho da página (tipo de conteúdo, texto do tipo plano e utf-8 para mapa de caracteres)
    response.setHeader('Content-Type', 'text/plan; charset=utf-8');

    // Criando uma variável para consultar a string da URL
    let q = url.parse(require.url, true).query;

    // criando uma operação de soma
    // Acesse: http://127.0.0.1:3000/?numeroUm=[...]&numeroDois=[...]
    let numero1 = Number(q.numero1);
    let numero2 = Number(q.numero2);
    let soma = `SOMA: ${numero1} + ${numero2} = ${numero1 + numero2}`;

    response.write(soma);

    // Terminando resposta do servidor
    response.end();
});

// Executar o servidor (criando uma escuta, uma espera para alguém que entrar no endereço 'localhost')
// com parâmetros porta de acesso do servidor, endereço IP do servidor e mensagem para o terminal
server.listen(port, hostname, console.log('O servidor está rodando...'));

// "npm run dev" para rodar
// "ctrl + c" para fechar, "y" para confirmar