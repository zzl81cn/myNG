/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-25 13:45:12
 * @version $Id$
 */

alertModule.factory('$alert', ['$window', function($window){
	return{
		alert: function(text){
			$window.alert(text);
		}
	};
}]);
