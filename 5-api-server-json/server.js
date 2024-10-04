// Importing the HTTP module from HTTP library 
const http = require("http");

// Creating a 'localhost' with the IP address from self machine
const hostname = '127.0.0.1'
// Creating an access port to select which computer port the server will run on
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

    // do a response with a JSON file type
    response.end(JSON.stringify(person));
});

// Runs the server (creates a listen, a wait anyone who wants to enter the server address)
// with parameterss: server access port, server IP address and a message in terminal
server.listen(port, hostname, console.log('The server is running...'));

// "node --watch 'server.js'"