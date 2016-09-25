/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-25 13:45:12
 * @version $Id$
 */

// var alertModule = angular.module('alertApp', []);


/*var AlertController = function($scope, $alert){
	$scope.message = function(msg){
		console.log(msg);
		$alert.alert(msg);
	};
};

AlertController.$inject = ['$scope', '$alert'];
alertModule.controller('AlertController', AlertController);*/

alertModule.controller('AlertController', ['$scope', '$alert', function($scope, $alert){
	$scope.message = function(msg){
		console.log(msg);
		$alert.alert(msg);
	}
}]);