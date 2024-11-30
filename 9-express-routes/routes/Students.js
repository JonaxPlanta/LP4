// Importing express library
const express = require('express');

// Route manipulation
const routes = express.Router();


// GET Root route
routes.get("/", (require, response) => {
    response.send("[GET]:STUDENT GET ROUTE");
});

// POST Root route
routes.post("/", (require, response) => {
    response.send("[POST]:STUDENT POST ROUTE");
});

// PUT Root route
routes.put("/", (require, response) => {
    response.send("[PUT]:STUDENT PUT ROUTE");
});

// DELETE Root route
routes.delete("/", (require, response) => {
    response.send("[DELETE]:STUDENT DELETE ROUTE");
});

// Exporting routes
module.exports = routes;