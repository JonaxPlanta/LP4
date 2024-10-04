// Importing the HTTP module from HTTP library 
const http = require("http");

// Creating a 'localhost' with the IP address from self machine
const hostname = '127.0.0.1'
// Creating an access port to select which computer port the server will run on
const port = 3000;

// Settings of server
const server = http.createServer((require, response) => {
    // Settings of header
    response.writeHead(200, { "Content-type" : "text/json; charset=utf-8" });

    // Requires URL from user 
    const url = require.url;

    // Manipulating URL
    if (url === "/") {
        response.write("You are in the Website main root.") // Write a message
        response.end(); // End the response
    } 
    {
    response.write(`A URL é: "${url}".`); // Write a message
    response.end(); // End the response
    };
});

// Runs the server (creates a listen, a wait anyone who wants to enter the server address)
// with parameterss: server access port, server IP address and a message in terminal
server.listen(port, hostname, console.log('The server is running...'));

// "node --watch 'server.js'"