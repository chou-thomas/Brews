var mongoose = require('mongoose');

var fs = require('fs');

var path = require('path');

mongoose.connect('mongodb://localhost/orders_and_customers_1');

var models_path = path.join(__dirname, './../models');

// reads through model for .js
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})