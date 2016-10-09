/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-09-25 15:00:35
 * @version $Id$
 */

var alertModule = angular.module('alertApp', [
    'ui.router'
    ,'ngAnimate'
    ,'ngSanitize'
	,'mgcrea.ngStrap'
	,'ui.select2'
	// ,'ng.ueditor'
]);
alertModule.config(function($stateProvider, $urlRouterProvider){

	// 如果没有匹配的URL，就定向到此URL地址
	$urlRouterProvider.otherwise('/state1');

	$stateProvider
		.state('state1', {
			url: '/state1',
			templateUrl: 'partials/state1.html'
		})
		.state('state1.list', {
			url: '/list',
			templateUrl: 'partials/state1.list.html',
			controller: function($scope){
				$scope.items = ["A", "List", "Of", "Items"];
			}
		})
		.state('state2', {
			url: '/state2',
			templateUrl: 'partials/state2.html'
		})
		.state('state2.list', {
			url: '/list',
			templateUrl: 'partials/state2.list.html',
			controller: function($scope){
				$scope.things = ["A", "Set", "Of", "Things"];
			}
		})
		.state('index', {
			url: '',
			views: {
				"viewA": {template: "index.viewA"},
				"viewB": {template: "index.viewB"}
			}
		})
		.state('route1', {
			url: '/route1',
			views: {
				"viewA": {template: "route1.viewA"},
				"viewB": {template: "route1.viewB"}
			}
		})
		.state('route2', {
			url: '/route2',
			views: {
				"viewA": {template: "route2.viewA"},
				"viewB": {template: "route2.viewB"}
			}
		})
});