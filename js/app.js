(function() {
    var app = angular.module('verticalTabs', ['ngMaterial', 'ngRoute']);

    app.controller('AppController', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location) {
        this.toggleSidenav = toggleSidenav;

        function toggleSidenav(name) {
            $mdSidenav(name).toggle();
        }

        $scope.isSelected = 1;
        $scope.setSelected = function(itemNumber) {
            $scope.isSelected = itemNumber;
        }
        $scope.disablePrevFunc = function() {
            var path = $location.path();
            if (path == '/') {
                return true;
            } else
                return false;
        }
        $scope.disableNextFunc = function() {
            var path = $location.path();
            if (path == '/message')
                return true;
            else
                return false;
        }
        $scope.nextPage = function() {
            var path = $location.path();
            console.log(path);
            if (path == '/') {
                $scope.isSelected = 2;
                $location.path('/account');
            } else if (path == '/account') {
                $scope.isSelected = 3;
                $location.path('/delete')
            } else if (path == '/delete') {
                $scope.isSelected = 4;
                $location.path('/email')
            } else if (path == '/email') {
                $scope.isSelected = 5;
                $location.path('/phone')
            } else if (path == '/phone') {
                $scope.isSelected = 6;
                $location.path('/message')
            }
        }
        $scope.prevPage = function() {
            var path = $location.path();
            console.log(path);
            if (path == '/account') {
                $scope.isSelected = 1;
                $location.path('/');
            } else if (path == '/delete') {
                $scope.isSelected = 2;
                $location.path('/account');
            } else if (path == '/email') {
                $scope.isSelected = 3;
                $location.path('/delete')
            } else if (path == '/phone') {
                $scope.isSelected = 4;
                $location.path('/email')
            } else if (path == '/message') {
                $scope.isSelected = 5;
                $location.path('/email')
            }
        }
    }]);

    app.controller('TabController', function() {
        this.selected = 1;
        this.isSet = function(number) {
            return this.selected === number ? true : false;
        }
        this.setTab = function(number) {
            this.selected = number;
        }
    });

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './views/android.html',
                controller: 'AndroidController'
            })
            .when('/account', {
                templateUrl: './views/account.html',
                controller: 'AccountController'
            })
            .when('/delete', {
                templateUrl: './views/delete.html',
                controller: 'DeleteController'
            })
            .when('/email', {
                templateUrl: './views/email.html',
                //controller: 'EmailController'
            })
            .when('/phone', {
                templateUrl: './views/phone.html',
                //controller: 'PhoneController'
            })
            .when('/message', {
                templateUrl: './views/message.html',
                // controller: 'MessageController'
            })
            .otherwise('/');;
    }]);
})();