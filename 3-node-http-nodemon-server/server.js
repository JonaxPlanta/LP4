// Importing the HTTP module from HTTP library 
const http = require("http");

// Importing the URL module from URL library 
const url = require("url");

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

    // Creating a variable to query the URL string 
    let urlQuery = url.parse(require.url, true).query;
    // Creating the variables to executes a data processing
    let name = String(urlQuery.name);
    let surname = String(urlQuery.surname);
    // Writing in code the result of data processing
    response.write(`
        Name: ${name}
        Surname: ${surname}
        `);

    // Ending the server response
    response.end();
});

// Runs the server (creates a listen, a wait anyone who wants to enter the server address)
// with parameterss: server access port, server IP address and a message in terminal
server.listen(port, hostname, console.log('The server is running...'));

// "npm run dev" to run the server
// Access the following URL and change the "[...]" to a name: 
// http://127.0.0.1:3000/?name=[...]&surname=[...]

// "ctrl + c" to stop the server and "y" to confirm

// To change the code start and dev path, 
// change the "start" and "dev" paths in "package.json" file

// or

// "node --watch 'server.js'"