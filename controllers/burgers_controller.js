//create all the functions that will do the routing for app, and logic of each route
// var express = require('express');
// var router = express.Router();
/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.use(function(req, res, next){
	
	next();
})

router.get('/', function (req, res) {
	res.redirect('/burgers');
	
});

router.get('/burgers', function (req, res) {
	burger.readAll(function (data) {

		var hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

router.post('/burgers/add', function (req, res) {
	
	burger.insertOne(req.body.burger_name, function () {
		res.redirect('/burgers');
		
	});
});

router.post("/burgers/devoured/:id", function (req, res) {
	var condition = 'devoured = ' + req.params.devoured;
	burger.updateOne({devoured: req.body.devoured}, req.body.devoured, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;