var mongoose = require('mongoose');

var fs = require('fs');

var path = require('path');

// mongoose.connect('mongodb://localhost/brews');

mongoose.connect('mongodb://brews:12345678@ds011268.mongolab.com:11268/brews');

var models_path = path.join(__dirname, './../models');

// reads through model for .js
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})