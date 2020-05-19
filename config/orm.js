var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function (err, results) {
            if (err) throw (err);
            cb(results);
        });
    },
    insertOne: function (daBurger, cb) {

        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"

        connection.query(queryString, [daBurger], function (err, result) {
            if (err) throw (err);

            cb(result);
        });
    },
    updateOne: function (nommed, burgNum, cb) {

        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"

        connection.query(queryString,[nommed, burgNum], function (err, result) {
            if (err) throw (err);

            cb(result);
        });
    }
};


module.exports = orm;