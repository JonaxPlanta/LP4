const http = require('http');
const fileSystem = require('fs');

const localhost = "127.0.0.1";
const port = 3000;

// Settings of server
const server = http.createServer((require, response) => {
    // Settings of header
    response.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });

    const htmlFile = fileSystem.readFileSync("./index.html") 

    response.end(htmlFile);
});

server.listen(port, localhost, console.log("Server running..."))