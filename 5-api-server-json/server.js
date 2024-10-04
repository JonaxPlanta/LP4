const http = require('http');

const localhost = "127.0.0.1";
const port = 3000;

// Settings of server
const server = http.createServer((require, response) => {
    // JSon objects
    const person = {
        name : "Jason",
        email: "jason@json.com",
        telephone: "1191-934-0394"
    }

    // Settings of header
    response.writeHead(200, { "Content-type" : "application/json; charset=utf-8" });

    response.end(JSON.stringify(person));
});

server.listen(port, localhost, console.log("Server running..."))