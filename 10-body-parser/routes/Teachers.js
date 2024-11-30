// Importing express library
const express = require('express');

// Route manipulation
const routes = express.Router();

// GET root route
routes.get("/", (require, response) => {
    response.send({
        ROUTE : "teachers",
        STATUS : "200",
        METHOD : "GET",
        MESSAGE : "Welcome to the root route. Replace in URL the 'IDCode' : 'http:127.0.0.1:3000/teachers/IDCode' "
    }).status(200);
});

// GET status code
routes.get("/:teacherID", (require, response) => {
    // Get values send by the require params
    const teacherID = require.params.teacherID;

    // Showing the results
    response.send({
        STATUS : "SUCCESS",
        DATA : teacherID
    }).status(200);
});

// POST status code
routes.post("/:teacherID", (require, response) => {
    // Get values send by the require params
    const teacherID = require.params.teacherID;

    // Creating new data and implementing in DataBase
    const newTeacher = {
        id : require.params.teacherID,
        name : require.body.name,
        email : require.body.email,
        phone : require.body.phone
    };

    // Showing the results
    response.send({
        STATUS : "SUCCESS",
        DATA : newTeacher
    }).statusCode(201);
});

// PUT status code
routes.put("/", (require, response) => {
    response.send({
        ROUTE : "teachers",
        STATUS : "201",
        METHOD : "PUT",
        MESSAGE : "The informations were uptaded.",
    }).status(201);
});

// DELETE status code
routes.delete("/:deleteID", (require, response) => {
    // Get values send by the require body
    const teacherID = require.body.id;
    const deleteID = require.params.deleteID;

    // Implements a query to verification
    queryDataBase = deleteID; 

    // Verifying
        if (teacherID == queryDataBase) {
            response.status(202).send({
                STATUS : "SUCCESS",
                MESSAGE : `${teacherID} were deleted.`
            });
        } else {
            response.status(400).send({
                STATUS : "FAILED",
                MESSAGE : `${teacherID} ID not found in DataBase.`
            });
        };
});

// Exporting routes
module.exports = routes;