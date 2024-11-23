// Importing express library
const express = require('express');

// Route manipulation
const routes = express.Router();


// GET Root route
routes.get("/", (require, respost) => {
    respost.send("[GET]:TEACHER GET ROUTE");
});

// PUT Root route
routes.put("/", (require, respost) => {
    respost.send("[PUT]:TEACHER PUT ROUTE");
});

// POST Root route
routes.post("/", (require, respost) => {
    respost.send("[POST]:TEACHER POST ROUTE");
});

// DELETE Root route
routes.delete("/", (require, respost) => {
    respost.send("[DELETE]:TEACHER DELETE ROUTE");
});

// Exporting routes
module.exports = routes;