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
    // Requires URL from user 
    const url = require.url;

    /// JSon data
    const data = {
        name : {
            id1: "John",
            id2: "Bob",
            id3: "Mary",
            id4: "Jane",
            id5: "Alex"
        },
        phone: {
            id1: "111-111-1111",
            id2: "222-222-2222",
            id3: "333-333-3333",
            id4: "444-444-4444",
            id5: "555-555-5555"
        },
        email: {
            id1: "John@gmail.com",
            id2: "Bob@gmail.com",
            id3: "Mary@gamil.com",
            id4: "Jane@gmail.com",
            id5: "Alex@gmail.com"
        }
    }

    // Manipulating URL
    if (url === "/") {
        // Using FS library to read files from a local file 
        const htmlIndex = fileSystem.readFileSync("./index.html")

        // Settings of header
        response.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });

        // Response with the local file read by the FS
        response.end(htmlIndex);
    } else if (url === "/about") {
        // Using FS library to read files from a local file 
        const htmlAbout = fileSystem.readFileSync("./about.html")

        // Settings of header
        response.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });

        // Response with the local file read by the FS
        response.end(htmlAbout);
    } else if (url === "/contact") {
        // Using FS library to read files from a local file 
        const htmlContact = fileSystem.readFileSync("./contact.html")

        // Settings of header
        response.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });

        // Response with the local file read by the FS
        response.end(htmlContact);
    } else if (url === "/data") {
        // Settings of header
        response.writeHead(200, { "Content-type" : "text/json; charset=utf-8" });

        // Response with a JSON file type
        response.end(JSON.stringify(data));
    } else {
        // Settings of header
        response.writeHead(404, { "Content-type" : "text/plain; charset=utf-8" });

        response.write(`URL: "${url}". \nThis page doesn't exist!`); // Write a message
        response.end(); // End the response
    }
});

// Runs the server (creates a listen, a wait anyone who wants to enter the server address)
// with parameterss: server access port, server IP address and a message in terminal
server.listen(port, hostname, console.log('The server is running...'));

// "node --watch 'server.js'"