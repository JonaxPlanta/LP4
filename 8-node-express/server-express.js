// Importing Express library
const express = require('express');

// Creating a Express app receiving all modules
const app = express();

// Setting the port and the hostname
const hostname = "127.0.0.1";
const port = 3000;

// Root route
app.get('/', (request, response) => {
    response.send("Hello, Welcome to Main Route!");
});

app.get('/client', (request, response) => {
    response.send("Hello, Welcome to Client Route!");
});

app.get('/admin', (request, response) => {
    response.send("Hello, Welcome to Admin Route!");
});

app.listen(port, hostname, () => {
    console.log(`The server is running! \nAccess: http://${hostname}:${port}/`);
});