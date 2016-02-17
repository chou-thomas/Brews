// require mongoose, and backend controllers
var mongoose = require('mongoose');
var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
// backend routing
module.exports = function(app){
	app.post('/create_customer', function (req, res){
		customers.add(req, res);
	})
	app.get('/get_customers', function (req, res){
		customers.show(req, res);
	})
	app.post('/delete_customer', function (req, res){
		customers.remove(req, res);
	})
	app.post('/create_order', function (req, res){
		orders.add(req, res);
	})
	app.get('/get_orders', function (req, res){
		orders.show(req, res);
	})
	app.post('/delete_order', function (req, res){
		orders.remove(req,res);
	})
}