/**
 * Created by zzl81cn_pre on 2017/1/20.
 */
angular.module('formModule', [
	'angularBsAppDirectiveModule',
	'helloWolrdDirectiveModule'
])
	.controller('formCtrl', ['$scope', function ($scope) {
		$scope.value = ['xx', 'cc'];

		$scope.ratingValue = 3;
		$scope.ratingFunc = function (rating) {
			$scope.ratingValue = rating;
		};

		$scope.color = 'cyan';

		$scope.sayHello = function () {
			console.log('Hello!')
		}
	}]);