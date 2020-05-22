var burger = require("../models/burger.js");
var express = require("express"); 
var router = express.Router();



router.get("/", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){

    var addBurger = req.body.addBurger;

    burger.insertOne(addBurger, function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var burgNum = req.params.id;
    var nommed = 1;
    burger.updateOne(nommed, burgNum, function (result){
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;