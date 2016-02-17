// Angular Factories
myApp.factory('CustomersFactory', function($http){
	var factory = {};

	factory.create_customer = function(info, callback){
		$http.post('/create_customer', info).success(function(output){
			callback(output);
		})
	};

	factory.get_all = function(callback){
		$http.get('/get_customers').success(function(output){
			callback(output);
		})
	};

	factory.delete_customer = function(info, callback){
		$http.post('/delete_customer', info).success(function(output){
			callback(output);
		})
	}

	return factory;
});

myApp.controller('CustomersController', function($scope, CustomersFactory){
	$scope.addCustomer = function(){
		var customer_repack = { 
							name: $scope.new_customer.name,
							created_at: new Date() 
						  };
		CustomersFactory.create_customer(customer_repack, function(data){
			$scope.customers = data;
		})
	}

	$scope.deleteCustomer = function(customer){
		CustomersFactory.delete_customer(customer, function(data){
			$scope.customers = data;
		})
	}

	CustomersFactory.get_all(function(data){
		$scope.customers = data;
	})
});