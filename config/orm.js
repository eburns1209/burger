//where you write functions that takes inputs and conditions and turn them into database commands like SQL.
var connection = require("../config/connection.js");

//create, read, update, delete

var orm = {
    read: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result)

        });
    },
    insert: function(table, col, val, cb) {
        var queryString = 'INSERT INTO ' + table + ' ( ' + col + ' )' + ' VALUES ("' + val + '" )';


        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    // eatBurger: function(col, cb){
    //     var queryString = "UPDATE burgers SET devoured WHERE burger_name=?";
    //     connection.query(queryString, function(err, result){
    //         if(err) throw err;
    //         cb(result);
    //     });
    // }
    update: function(table, col, val, cb) {
        var queryString = 'UPDATE ' + table + ' ( ' + col + ' )' + ' SET ' + col  + ' WHERE ' + col;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // delete: function(table, col, cb) {
    //     var queryString = 'DELETE FROM ' + table + ' WHERE ' + col;
    //     connection.query(queryString, function(err, result) {
    //         cb(result);
    //     });
    // }


}; //end of object

module.exports = orm;
