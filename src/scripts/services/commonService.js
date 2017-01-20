/**
 * Created by zzl81cn_pre on 2016/11/27.
 */
/**
 * 基础模块公用的方法在这个service 里面
 *
 */
angular
	.module('commonServerModule', ['ngResource'])
	.factory("commonService", ["$http", "$filter", "$templateCache", "$modal", "$resource", "$alert", function($http, $filter, $templateCache, $modal, $resource, $alert) {
		Date.prototype.format = function(format) {
			format = $filter('date')(this, format);
			return format;
		}
		var commonService = {
			//基本调用后台的post Content-Type:为application/json
			getBacData: function(obj, url) {
				return $http.post(domain + url, obj);
			},
			//基本调用后台的post Content-Type:为application/x-www-form-urlencoded
			getBacDataForm: function(url, data) {
				var req = {
					method: 'POST',
					url: domain + url,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					data: data,
					transformRequest: function(data, headersGetter) {
						if (data) {
							return $.param(data);
						} else {
							return "";
						}
					}
				}
				return $http(req);
			},
			showAlert: function(title, connents) {
				$modal({
					title: title,
					content: connents,
					show: true,
					backdrop: "static",
					keyboard: false,
					template: 'scripts/services/alert.tpl.html'
				});
			},

			showInfo: function(title, connents,duration) {
				var myAlert = $alert({
					title: title,
					content: connents,
					placement: 'top',
					duration: duration,
					type: 'info',
					show: true
				});
			},
			showConfirm: function(title, connents) { //confirm
				var confirm = $modal({
					title: title,
					content: connents,
					show: true,
					backdrop: "static",
					keyboard: false,
					template: 'services/cnfirm.tpl.html'
				});
				confirm.$scope.success = function() {
					confirm.hide();
				};
				confirm.$scope.cancle = function() {
					confirm.hide();
				};
				return {
					success: function(successFun) {
						confirm.$scope.success = function() {
							confirm.hide();
							successFun();
						};
					},
					cancle: function(cancleFun) {
						confirm.$scope.cancle = function() {
							confirm.hide();
							cancleFun();
						};
					}
				}
			},
			loadingAlert: function() { //带进度条
				return {
					showLoading: function(title, connents, state) {
						var lodmodel = $modal({
							show: true,
							backdrop: "static",
							title: title,
							content: connents,
							template: 'services/loadingAlert.tpl.html'
						});

						lodmodel.$scope.state = state;
						return lodmodel;
					},
					loadSuccess: function(lodmodel, state, content) {
						lodmodel.$scope.state = state;
						lodmodel.$scope.content = content;
					}
				}
			}
		};
		return commonService;

	}])
