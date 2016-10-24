/**
 * @ngdoc function
 * @name angularBsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBsApp
 */
alertModule
    /*.run(['$anchorScroll', function ($anchorScroll) {
        // Always scroll by 50 pixels
        $anchorScroll.yOffset = 50;
    }])*/
    .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
        // Ng-mfb
        $scope.mfbButtons = [
            {label: 'news1', icon: 'ion-paper-airplane'},
            {label: 'old2', icon: 'ion-filing'}
        ];


        //Draggable
        $scope.draggableObjects = [
            {name: 'one'},
            {name: 'two'},
            {name: 'three'},
            {
                name: 'no-clone',
                allowClone: false
            }
        ];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2 = [];

        // $scope.onDragComplete=function(data,evt){
        //  	console.log("drag success, data:", data);
        //  };
        //  $scope.onDropComplete=function(data,evt){
        //  	console.log("drop success, data:", data);
        //  };
        $scope.onDropComplete1 = function (data, evt) {
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1)
                $scope.droppedObjects1.push(data);
        }
        $scope.onDragSuccess1 = function (data, evt) {
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }
        $scope.onDragSuccess2 = function (data, evt) {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        $scope.onDropComplete2 = function (data, evt) {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects2.push(data);
            }
        }
        var inArray = function (array, obj) {
            var index = array.indexOf(obj);
        }


        $scope.flipDemo = function (event) {
            // window.console.log($(event.target.parentElement.parentElement.parentElement).toggleClass('hover'));
            $(event.target.parentElement.parentElement.parentElement).toggleClass('hover');
        }
        $scope.flipperCard = function (event) {
            $(event.target.parentElement.parentElement.parentElement.parentElement).toggleClass('hover');
        }


        // $location & $anchorScroll
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

        $scope.bwesomeThings = [
            'HTML6 Bible',
            'EcmaScript 6 Bible'
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

