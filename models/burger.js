//where you setup a model for how to interface with the database
var orm = require('../config/orm.js');

var burger = {
	readAll: function (cb){
		orm.read('burgers', function(res){
				cb(res);
				console.log(res);
		});
	},

	insertOne: function(val, cb){
			orm.insert('burgers', 'burger_name', val, function (res){
			cb(res);
			console.log(res);
		});
	},
	// eat: function(col, cb){
	// 	orm.eatBurger('devoured', function(res){
	// 		cb(res);
	// 	});
	// }
	updateOne: function(objColVal, condition, cb){

		orm.update('burgers', objColVal, condition, function(res){
			cb(res);
		})
	}, 

	gone: function (condtion, cb){
		orm.delete('burgers',condtion, function (res){
			cb(res)
		});
	}
};

module.exports = burger;