// Requerindo a biblioteca HTTP para construir servidores HTTP
const http = require('http')

// Criando uma constante que recebe o ip da própria máquina
const hostname = '127.0.0.1'
// Criando uma constante que recebe uma porta de acesso na máquina
const port = 3000;

// Criando servidor usando biblioteca HTTP
const server = http.createServer((requisicao, resposta) => {
    // Configurando uma Header para a página que utiliza HTML e deve receber o código de execução 200
    resposta.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });

    // Escreve respostas em HTML
    resposta.write("<h1>Node.js</h1><p>ode.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p><p>A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos. O runtime do Node.js é single-thread — uma única thread (chamada de Event Loop) é responsável por executar o código Javascript, sem a necessidade de criar novas threads, o que torna o código mais simples de manter. Chamadas que seriam bloqueantes, como entrada/saída, são realizadas de forma assíncrona usando a libuv.</p><p>Node.js é usado pela GoDaddy, Groupon, IBM, LinkedIn, Microsoft, Netflix, PayPal, Rakuten, SAP, Voxer, Walmart, e Yahoo!.</p><br><h1>Histórico</h1><p>Ryan Dahl se inspirou para criar Node.js depois de ver barra de progresso de carga de arquivos no Flickr, ele percebeu que o navegador não sabia o quanto do arquivo foi carregado e tinha que consultar o servidor web.</p><h1>Características</h1><p>A principal característica e diferença de outras tecnologias (como PHP, Java, C# e C) é a execução das requisições/eventos em single-thread, onde apenas uma thread (chamada de Event Loop) é responsável por executar o código Javascript, sem a necessidade de criar nova thread que utilizaria mais recursos computacionais (por exemplo memória RAM) e sem o uso da fila de espera.</p><h2>Gerenciamento de pacotes</h2><p>O gerenciamento dos pacotes é feito através do node package manager (npm), e npx (node package extractor), o npx foi introduzido na versão 5.2.0 do JavaScript, antes deveria ser instalado individualmente. O primeiro tem o propósito de instalar para uso posterior código armazenado num package de nodejs, instalando o software globalmente ou localmente, já o segundo tem o propósito de executar a nível local o código instalado globalmente. Um exemplo disso é o npx create-react-app que tem como propósito instalar em nível local um gabarito (template) vazio de um site de react, pronto a ser usado, através de uma fórmula instalada com npm.</p><br><h1>Vantagens de uso</h1><h2>Flexibilidade</h2><p>O Node.js possui o gerenciador com inúmeros pacotes e software reusável NPM (Node Package Manager), dando ao interpretador um potencial a ser utilizada em qualquer situação. O pacote mais conhecido é o Express.js, um arcabouço (framework) completo para desenvolvimento de aplicações web.</p><h2>Leveza</h2><p>Um ambiente Node.js não exige muitos recursos computacionais tradicionais. Se utilizado em conjunto com a ferramenta Docker, o ganho na velocidade de deployment e replicação de máquinas pode ser muito significativo e, em ambientes escaláveis, de microsserviços e serverless, representa menos custo e mais eficiência. Um exemplo de uso é uma aplicação de troca de mensagens (conversa, bate-papo ou webchat).</p><h2>Suporte</h2><p>Conta com suporte das principais empresas de serviços de armazenamento na nuvem, como a AWS, Google Cloud e, Microsoft Azure, com suporte nativo ao Node.JS.</p><h2>Produtividade</h2><p>O gerenciador NPM fornece pacotes reusáveis disponíveis gratuitamente para uso em grupo;</p><p>Mesma linguagem no front end e back end, que pode representar ganhos de reúso de código e criação de equipes multidisciplinares, reaproveitando recursos;</p><p>A possibilidade de deployments e iterações mais rápidas, e resolução de problemas on the fly, também permitem a criação de soluções próprias e inovadoras, como a Uber faz para resolver alguns problemas.</p><br><h1>João Flores; com Wikipedia</h1><h2>Desculpa se isso não foi o que o senhor pediu professor!</h2>");

    // Responde o usuário com a página HTML capturada pela biblioteca
    resposta.end();
});

// Criando uma escuta para o servidor que recebe a porta, o ip da máquina e diz que está rodando
server.listen(port, hostname, console.log('O servidor está rodando! \nAcesse: http://127.0.0.1:3000/'));

// Para rodar: "node --watch 'server.js'"

