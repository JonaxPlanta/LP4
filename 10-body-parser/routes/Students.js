// Importing express library
const express = require('express');

// Route manipulation
const routes = express.Router();

// GET root route
routes.get("/", (require, response) => {
    response.send({
        ROUTE : "students",
        STATUS : "200",
        METHOD : "GET",
        MESSAGE : "Welcome to the root route. Replace in URL the 'IDCode' : 'http:127.0.0.1:3000/students/IDCode' "
    }).status(200);
});

// GET status code
routes.get("/:studentID", (require, response) => {
    // Get values send by the require params
    const studentID = require.params.studentID;

    // Showing the results
    response.send({
        STATUS : "SUCCESS",
        DATA : studentID
    }).status(200);
});

// POST status code
routes.post("/:studentID", (require, response) => {
    // Get values send by the require params
    const studentID = require.params.studentID;

    // Creating new data and implementing in DataBase
    const newStudent = {
        id : require.params.studentID,
        name : require.body.name,
        email : require.body.email,
        phone : require.body.phone
    };

    // Showing the results
    response.send({
        STATUS : "SUCCESS",
        DATA : newStudent
    }).statusCode(201);
});

// PUT status code
routes.put("/", (require, response) => {
    response.send({
        ROUTE : "students",
        STATUS : "201",
        METHOD : "PUT",
        MESSAGE : "The informations were uptaded.",
    }).status(201);
});

// DELETE status code
routes.delete("/:deleteID", (require, response) => {
    // Get values send by the require body
    const studentID = require.body.id;
    const deleteID = require.params.deleteID;

    // Implements a query to verification
    queryDataBase = deleteID; 

    // Verifying
        if (studentID == queryDataBase) {
            response.status(202).send({
                STATUS : "SUCCESS",
                MESSAGE : `${studentID} were deleted.`
            });
        } else {
            response.status(400).send({
                STATUS : "FAILED",
                MESSAGE : `${studentID} ID not found in DataBase.`
            });
        };
    });

// Exporting routes
module.exports = routes;