// Importing Express library
const express = require('express');

// Creating a Express app receiving all modules
const app = express();

// Setting the port and the hostname
const hostname = "127.0.0.1";
const port = 3000;

// Root route
app.get('/', (require, response) => {
    response.send("Hello! You are in Main Route!");
});

// Get - get data
app.get('/client', (require, response) => {
    response.send("Hello! You are in Client Route.");
});

app.get('/admin', (require, response) => {
    response.send("Welcome! You are in Admin Route.");
});

app.get('/kernel', (require, response) => {
    response.send("Turn Back! You are in Kernel Route.");
});

// Other Methods
// Post - insert data
app.post('/post', (require, response) => {
    response.send("Data inserted!")
})
// Put - update data
app.put('/put', (require, response) => {
    response.send("Data updated!")
})
// Delete - delete data
app.delete('/delete', (require, response) => {
    response.send("Data deleted!")
})

app.listen(port, hostname, () => {
    console.log(`The server is running! \nAccess: http://${hostname}:${port}/`);
});