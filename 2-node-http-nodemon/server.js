// Importing the HTTP module from HTTP library 
const http = require("http");

// Creating a 'localhost' with the IP address from self machine
const hostname = '127.0.0.1'
// Creating an access port to select which computer port the server will run on
const port = 3000;

// Anonymous function to create a server from HTTP library
// The parameters require (when the user makes a require to the server) and
// response (when the server makes a response to the user) are default
const server = http.createServer((require, response) => {
    // Instructions to browser (statusCode and setHeader)
    // Status code must be equal 200 for everything to be fine
    response.statusCode = 200;
    // Setting the page header (content type: plan type text and utf-8 character types)
    response.setHeader('Content-Type', 'text/plan; charset=utf-8');

    // Write a message into the server, page
    response.write("Hi! This is my HTTP server.");
    // Ending the server response
    response.end();
});

// Runs the server (creates a listen, a wait anyone who wants to enter the server address)
// with parameterss: server access port, server IP address and a message in terminal
server.listen(port, hostname, console.log('The server is running...'));

// "npm run dev" to run the server
// "ctrl + c" to stop the server and "y" to confirm