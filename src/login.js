/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-22 14:11:34
 * @version $Id$
 */
/*var app = angular.moudule('testApp', []);

app.factory("authenticationSvc", function($http, $q, $window) {
  var userInfo;

  function login(userName, password) {
    var deferred = $q.defer();

    $http.post("/api/login", {
      userName: userName,
      password: password
    }).then(function(result) {
      userInfo = {
        accessToken: result.data.access_token,
        userName: result.data.userName
      };
      $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
      deferred.resolve(userInfo);
    }, function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  return {
    login: login
  };
});*/
