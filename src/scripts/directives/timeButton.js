/**
 * Created by zhouzilong on 2017/5/19.
 * Use: <time-button show-timer="false" on-click="getNote();"></time-button>
 */
angular.module('angularBsAppDirectiveModule', [])
        .directive("timeButton", function() {
	        return {
		        restrict: 'AE',
		        replace: true,
		        transclude: true,
		        scope: {
			        showTimer: '=',
			        onClick: '&',
			        timeout: '='
		        },
		        link: function(scope, element, attrs){
			        // 禁用并显示时间
			        scope.timer = false;
			        // scope.showTimer = false;
			        var timeFlag = 60;
			        scope.text = "获取验证码";
			        scope.timerCount = timeFlag;
			        var countDownFun = function () {
				        // 执行倒计时
				        this.counter = $interval(function(){
					        if(scope.timerCount > 0 && scope.timerCount <= timeFlag ) {
						        scope.timer = true;
						        scope.showTimer = true;
						        scope.text = "后再次获取验证码";
						        scope.timerCount--;
					        } else {
						        // 清除倒计时
						        $interval.cancel(this.counter);
						        scope.timer = false;
						        scope.showTimer = false;
						        scope.text = "重新发送验证码";
						        scope.timerCount = timeFlag;
					        }
				        }, 1000);
			        };
			        scope.startCountDown = function () {
				        var canSend = scope.onClick();
				        // if(canSend) {
				        countDownFun();
				        // }
			        }
		        },
		        template: '<button type="button" class="btn" ng-click="startCountDown()" ng-disabled="timer"><span class="info" ng-transclude></span>&nbsp<span ng-if="showTimer">{{timerCount}}s</span><span>{{text}}</span></button>'
	        };
        });