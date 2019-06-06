// *********************************************************************************
// ORM.JS - THIS FILE IMPORTS MYSQL CONNECTION
// *********************************************************************************
var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput],function(err, result) {
      if (err) 
        throw err;
            cb(result);
    });
  },
  insertOne: function (tableInput, cols, vals, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    
    connection.query(queryString, [tableInput, cols, vals], function(err, result) {
        if (err) throw err;
        cb(result);
    });
},

  updateOne: function(tableName, cols, vals, condition, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
    console.log(`UPDATE ${tableName} SET ${cols} = ${vals} WHERE id = ${condition};`)

    connection.query(queryString, [tableName, cols, vals, condition], function(err, result) {
        if (err) throw err;
        cb(result);
    });
}
};
module.exports = orm;
