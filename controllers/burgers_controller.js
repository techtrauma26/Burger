// *********************************************************************************
// CONTROLLER.JS - THIS FILE 
// *********************************************************************************
var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var burgerOb = {
          burger: data
        };
        console.log(burgerOb);
        res.render("index", burgerOb); 
      });
    });
    

    router.post("/api/burgers", function(req, res) {
      burger.insertOne([
        "burger_name", "devoured"
      ], 
      [
        req.body.burger_name, req.body.devoured
      ], 
      function(result) {
        res.json({ id: result.insertId });
      });
    });

    router.put('/api/burgers/:id', function(req, res) {
      burger.updateOne([
          "devoured"
        ], 
        [
          req.body.devoured
        ],
        req.params.id,
        function(result) {
          console.log(result);
          res.render("index");
      });
    });
    

    module.exports = router;
    