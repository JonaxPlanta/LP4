// Importing express and body parser library
const express = require('express');
const bodyParser = require('body-parser');

// Creating an express app
const app = express();

// Setting body parser
// Not encoded 
app.use(bodyParser.urlencoded({ extended : false }));
// Use JSON
app.use(bodyParser.json());

// Importing routes 
const studentRoutes = require('./routes/Students');
const teacherRoutes = require('./routes/Teachers');


// Creating params for server
const hostname = "127.0.0.1";
const port = 3000;

app.get("/", (require, response) => {
    response.send("[ROOT ROUTE]");
})

// Using the routes
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);

// Run server
app.listen(port, hostname, console.log(`The server is running! \nAccess: http://${hostname}:${port}/`));