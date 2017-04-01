/**
 * Created by zzl81cn_pre on 2017/1/22.
 * http://owenchen.net/angularjs-directives-directives-a-practical-guide/
 */
angular.module('helloWolrdDirectiveModule', [])
	.directive('helloWorld', function () {
		return {
			scope: {
				// color: '@colorAttr'
				// color: '@'
				color: '=',
				sayHelloIsolated: '&?'
			},
			restrict: 'EA',
			replace: false,
			// template: '<h5>Hello Directive!</h5>'
			templateUrl: 'scripts/directives/helloworld.tpl',
			link: function (scope, elem, attrs) {
				elem.bind('click', function () {
					elem.css('background-color', '#0ff');
					scope.$apply(function () {
						scope.color = 'white'
					})
				});
				elem.bind('mouseover', function () {
					elem.css('cursor', 'pointer');
				});
			}
		}
	})
	.directive('sayHello', function () {
		return {
			scope: {
				sayHelloIsolated: '&amp;'
			},
			restrict: 'EA',
			template: '<h5>xxx</h5>'
		}
	})
;