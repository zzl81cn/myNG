# myNG

> 使用Gulp构建工具，没有使用bower，纯手动添加组件。

#### <a href="http://stackoverflow.com/questions/12131659/from-jquery-ajax-to-angular-http">The AngularJS way of calling $http would look like</a>:
``` javascript
$http({
    url: "http://example.appspot.com/rest/app",
    method: "POST",
    data: {"foo":"bar"}
}).success(function(data, status, headers, config) {
    $scope.data = data;
}).error(function(data, status, headers, config) {
    $scope.status = status;
});
```
or could be written even simpler using shortcut methods:
``` javascript
$http.post("http://example.appspot.com/rest/app", {"foo":"bar"})
.success(function(data, status, headers, config) {
    $scope.data = data;
}).error(function(data, status, headers, config) {
    $scope.status = status;
});
```
There are number of things to notice:

* AngularJS version is more concise (especially using .post() method)
* AngularJS will take care of converting JS objects into JSON string and setting headers (those are customizable)
* Callback functions are named success and error respectively (also please note parameters of each callback)
* The above is just a quick example and some pointers, be sure to check AngularJS documentation for more: http://docs.angularjs.org/api/ng.$http
