// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");
var connection;
// Setting up our connection information
 if (process.env.JAWSDB_URL){
     connection = mysql.createConnection(process.env,JAWSDB_URL);
 } else {
     connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1vaijayanthi",
        database: "burgers_db"
     });
 };


connection.connect();

// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;