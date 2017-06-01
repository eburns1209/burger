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
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
	
});

router.post('/burgers/add', function (req, res) {
	
	burger.insertOne(req.body.burger_name, function () {
		res.redirect('/burgers');
		
	});
});

router.post("/devoured/:id", function (req, res) {
	var condition = 'id = ' + req.params.id;
	console.log("condition", condition)
	burger.updateOne(req.body.burger_id, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.gone(condition, function (){
		res.redirect("/");
	});
});

module.exports = router;