// Importing the HTTP module from HTTP library 
const http = require("http");
// Importing the fileSystem module from FS library 
const fileSystem = require('fs');

// Creating a 'localhost' with the IP address from self machine
const hostname = '127.0.0.1'
// Creating an access port to select which computer port the server will run on
const port = 3000;


// Settings of server
const server = http.createServer((require, response) => {
    // Settings of header
    response.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });

    // Using FS library to read a file from a local file 
    const htmlFile = fileSystem.readFileSync("./index.html") 

    // Response with the local file read by the FS
    response.end(htmlFile);
});

// Runs the server (creates a listen, a wait anyone who wants to enter the server address)
// with parameterss: server access port, server IP address and a message in terminal
server.listen(port, hostname, console.log('The server is running...'));

// "node --watch 'server.js'"