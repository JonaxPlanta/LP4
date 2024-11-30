// Importing express library
const express = require('express');

// Creating an express app
const app = express();

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
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

// Run server
app.listen(port, hostname, console.log(`The server is running! \nAccess: http://${hostname}:${port}/`));