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

alertModule.controller('AlertController', ['$scope', '$alert', '$modal', '$window', function($scope, $alert, $window, $modal){

    // angular-ui-bootstrap v2.1.4
	$scope.tabs = [
		{ title:'Dynamic Title 1', content:'Dynamic content 1' },
		{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
	];

	$scope.alertMe = function() {
		setTimeout(function() {
			$window.alert('You\'ve selected the alert tab!');
		});
	};

	$scope.model = {
		name: 'Tabs'
	};

    // myNG
	$scope.message = function(msg){
		console.log(msg);
		$alert.alert(msg);
	};

    // angular-strap modal
	// Button to trigger a default modal with a scope as an object {title:'', content:'', etc.}
	$scope.modal = {title: 'Title', content: 'Hello Modal oo<br />This is a multiline message!<br /> Ha.'};

	// angular-ui select2
	var vm = $scope.vm = {};
	vm.option1 = {
		allowClear:true
	};
	vm.option2 = {
		'multiple': true,
		'simple_tags': true,
		'tags': ['tag1', 'tag2', 'tag3', 'tag4']
	};
    vm.value2 = ['应用', '模型', '数据'];

}]);
