var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },
    insertOne: function (daBurger, cb) {
        orm.insertOne(daBurger, function (result) {
            cb(result);
        });
    },
    updateOne: function (nommed, burgNum, cb) {
        orm.updateOne(nommed, burgNum, function (result) {
            cb(result);
        });
    }
};

module.exports = burger;