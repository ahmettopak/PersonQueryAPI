// Required modules
const express = require('express'); // Importing the Express framework
const mysql = require('mysql'); // Importing the MySQL module for database operations
const cors = require('cors'); // Importing CORS for handling cross-origin requests
require('dotenv').config(); // Loading environment variables from .env file

// Creating an Express application
const app = express();
app.use(express.json()); // Parsing JSON requests

// Allowing requests only from specific origins
const corsOptions = {
    origin: ['*'], // You can specify allowed origins here, or use '*' for any origin
};
app.use(cors()); // Applying CORS middleware with the specified options

// Establishing a MySQL database connection using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // Database server address from .env file
    user: process.env.DB_USER, // Database username from .env file
    password: process.env.DB_PASSWORD, // Database password from .env file
    database: process.env.DB_DATABASE // Database name from .env file
});

// Opening the database connection
connection.connect();

// Defining API endpoint for handling GET requests to '/person'
app.get('/person', (req, res) => {
    // Extracting query parameters from the request URL
    const { name, surname, tc, fathername, mothername, dob, province, provincedetail, mothertc, fathertc } = req.query;

    // Creating an object to hold non-empty parameters and their corresponding fields
    const queryParams = {};
    if (name) queryParams.ADI = name;
    if (surname) queryParams.SOYADI = surname;
    if (tc) queryParams.TC = tc;
    if (fathername) queryParams.BABAADI = fathername;
    if (mothername) queryParams.ANNEADI = mothername;
    if (dob) queryParams.DOGUMTARIHI = dob;
    if (province) queryParams.NUFUSIL = province;
    if (provincedetail) queryParams.NUFUSILCE = provincedetail;
    if (mothertc) queryParams.ANNETC = mothertc;
    if (fathertc) queryParams.BABATC = fathertc;

    // Constructing the SQL query based on non-empty parameters
    const tableName = process.env.TABLE_NAME; // Extracting table name from .env file

    sql = `SELECT * FROM ${tableName} WHERE ` + Object.keys(queryParams).map(key => `${key} = ?`).join(' AND ');

    // Executing the query with the corresponding values
    const values = Object.values(queryParams);
    try {
        connection.query(sql, values, (error, results, fields) => {
            if (error) {
                res.json({ "id": 0, "TC": "", "ADI": "", "SOYADI": "", "DOGUMTARIHI": "", "NUFUSIL": "", "NUFUSILCE": "", "ANNEADI": "", "ANNETC": "", "BABAADI": "", "BABATC": "", "UYRUK": null }); // Handling database errors
            } else {
                res.json(results); // Sending query results as JSON response
            }
        });
    }
    catch (error) {

        res.json(''); // Handling database errors

    }
});

app.get('/gsm', (req, res) => {
    // Extracting query parameters from the request URL
    const { tc, phone } = req.query;

    // Creating an object to hold non-empty parameters and their corresponding fields
    const queryParams = {};

    if (tc) queryParams.TC = tc;
    if (phone) queryParams.GSM = phone;
    var sql = "";
    const tableName = process.env.GSM_TABLE_NAME; // Extracting table name from .env file

    sql = `SELECT * FROM ${tableName} WHERE ` + Object.keys(queryParams).map(key => `${key} = ?`).join(' AND ');


    // Constructing the SQL query based on non-empty parameters
    // Executing the query with the corresponding values
    const values = Object.values(queryParams);
    try {
        connection.query(sql, values, (error, results, fields) => {
            if (error) {
                res.json({ TC: "", GSM: "" }); // Handling database errors
            } else {
                res.json(results); // Sending query results as JSON response
            }
        });
    }
    catch (error) {

        res.json(''); // Handling database errors

    }
});

// Starting the application on the specified port
const port = 3000; // Port number for the server to listen on
app.listen(port, () => {
    console.log(`Application started on port ${port}`); // Logging a message when the server starts
});
