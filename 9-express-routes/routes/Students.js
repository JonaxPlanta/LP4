// Importing express library
const express = require('express');

// Route manipulation
const routes = express.Router();


// GET Root route
routes.get("/", (require, respost) => {
    respost.send("[GET]:STUDENT GET ROUTE");
});

// PUT Root route
routes.put("/", (require, respost) => {
    respost.send("[PUT]:STUDENT PUT ROUTE");
});

// POST Root route
routes.post("/", (require, respost) => {
    respost.send("[POST]:STUDENT POST ROUTE");
});

// DELETE Root route
routes.delete("/", (require, respost) => {
    respost.send("[DELETE]:STUDENT DELETE ROUTE");
});

// Exporting routes
module.exports = routes;