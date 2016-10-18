'use strict';

/**
 * @ngdoc function
 * @name angularBsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBsApp
 */
angular.module('angularBsApp')
    // .run(['$anchorScroll', function($anchorScroll) {
    // 	// Always scroll by 50 pixels
    // 	$anchorScroll.yOffset = 50;
    // }])
    .controller('skynetCtrl', function ($scope, $location, $anchorScroll) {

        $scope.flipDemo = function (event) {
            window.console.log($(event.target.parentElement.parentElement.parentElement).toggleClass('hover'));
        }
        $scope.flipperCard = function (event) {
            $(event.target.parentElement.parentElement.parentElement.parentElement).toggleClass('hover');
        }

        $scope.goToTop = function () {
            $location.hash('header');
            $anchorScroll();
        };

        $scope.gotoAnchor = function (x) {
            var newHash = 'anchor' + x;
            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash('anchor' + x);
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        // AngularStrap Datepicker
        $scope.selectedDate = new Date();
        $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
        // $scope.fromDate = new Date();
        // $scope.untilDate = new Date();
        $scope.getType = function (key) {
            return Object.prototype.toString.call($scope[key]);
        };

        $scope.clearDates = function () {
            $scope.selectedDate = null;
        };

        // ui.bootstrap Carousel components.
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function () {
            var newWidth = 600 + slides.length + 1;
            var uriLength = slides.length + 1;
            slides.push({
                // image: 'http://placekitten.com/' + newWidth + '/300',
                image: '../../images/carousel-' + uriLength + '.jpg',
                text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 2]
            });
        };
        for (var i = 0; i < 2; i++) {
            $scope.addSlide();
        }

        // ui.bootstrap Alert components.
        $scope.alerts = [{
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        }, {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.'
        }];

        $scope.addAlert = function () {
            $scope.alerts.push({
                msg: 'Another alert!'
            });
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

        // ui.bootstrap Tabs components.
        $scope.tabs = [
            {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
            {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true}
        ];
        $scope.rankContent = [
            {name: 'Tom', acount: '100'},
            {name: 'Jery', acount: '200'}
        ];
        $scope.alertMe = function () {
            setTimeout(function () {
                $window.alert('You\'ve selected the alert tab!');
            });
        };

    });

