# myNG

> 使用Gulp构建工具，没有使用bower，纯手动添加组件。

#### The AngularJS way of calling $http would look like:
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

