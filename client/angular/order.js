// Angular Brew Factories
myApp.factory('OrdersFactory', function($http){
	var factory = {};

	factory.get_products = function(callback){
		var products = [
						{product: 'New Belgium Fat Tire'},
						{product: 'Blue Moon'},
						{product: 'Corona Light'},
						{product: 'Green Flash IPA'},
						{product: 'Lagunitas IPA'},
						{product: 'Anchor Steam'},
						{product: 'Allagash White'},
						{product: 'Stone IPA'},
						{product: 'Ballast Point Sculpin'},
						{product: 'Russian River Pliny The Elder'},
						{product: 'The Alchemist Heady Topper'},
						{product: 'Sierra Nevada Double IPA'},
						{product: 'Shocktop'}
					];
		callback(products);
	}

	factory.get_quantity = function(callback){
		var quantity = [];

		for (i=1; i<101; i++){
			quantity.push(i);
		};

		callback(quantity);
	}

	factory.add_order = function(info, callback){
		$http.post('/create_order', info).success(function(data){
			callback(data);
		})
	}

	factory.get_orders = function(callback){
		$http.get('/get_orders').success(function(data){
			callback(data);
		})
	}

	factory.delete_order = function(info, callback){
	$http.post('/delete_order', info).success(function(output){
			callback(output);
		})
	}

	return factory;
})

// Client side Controllers

myApp.controller('OrdersController', function($scope, CustomersFactory, OrdersFactory){
	
	CustomersFactory.get_all(function(data){
		$scope.customers = data;
	});

	OrdersFactory.get_products(function(data){
		$scope.products = data;
	});

	OrdersFactory.get_quantity(function(data){
		$scope.quantity = data;
	});

	OrdersFactory.get_orders(function(data){
		$scope.orders = data;
	})

	$scope.addOrder = function(){
		var order_repack = {
						  customer_name: $scope.new_order.customer_name,
						  product: $scope.new_order.product,
						  quantity: $scope.new_order.quantity,
						  created_at: new Date()
					   };
		OrdersFactory.add_order(order_repack, function(data){
			$scope.orders = data;
		})
	}

		$scope.deleteOrder = function(order){
		OrdersFactory.delete_order(order, function(data){
			$scope.orders = data;
		})
	}

		CustomersFactory.get_all(function(data){
		$scope.customers = data;
	});

})