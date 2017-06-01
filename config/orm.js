//where you write functions that takes inputs and conditions and turn them into database commands like SQL.
var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];

    for (var i = 0; i<num; i++){
        arr.push("?");
    }
    return arr.toString();
}

//helper function for sql syntax
function objToSql(ob){
    var arr = [];

    for (var key in ob){
        if(ob.hasOwnProperty(key)){
            return key + ' = ' + ob[key];
        }
    }
    return arr.toString();
}

//object for all our SQL statement functions
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
    
    update: function(table, objColVal, condition, cb) {
        var queryString = 'UPDATE ' + table + ' SET devoured = 1 WHERE ' + condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition;
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    }


}; //end of object

module.exports = orm;
