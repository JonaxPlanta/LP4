// Importing express library
const express = require('express');

// Route manipulation
const routes = express.Router();


// GET Root route
routes.get("/", (require, response) => {
    response.send("[GET]:TEACHER GET ROUTE");
});

// PUT Root route
routes.put("/", (require, response) => {
    response.send("[PUT]:TEACHER PUT ROUTE");
});

// POST Root route
routes.post("/", (require, response) => {
    response.send("[POST]:TEACHER POST ROUTE");
});

// DELETE Root route
routes.delete("/", (require, response) => {
    response.send("[DELETE]:TEACHER DELETE ROUTE");
});

// Exporting routes
module.exports = routes;