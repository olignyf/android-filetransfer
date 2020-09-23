(function() {
    'use strict';

    const path = require('path');
    const templateUrl = path.join(__dirname, 'views');

    angular.module('AndroidFiletransfer', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/', {
                templateUrl: templateUrl + '/devices/devices.html',
                controller: 'devicesController'
            });

            $routeProvider.when('/devices/:index', {
                templateUrl: templateUrl + '/devices/device.html',
                controller: 'deviceController'
            });

            $routeProvider.when('/sync', {
                templateUrl: templateUrl + '/sync/sync.html',
                controller: 'syncController'
            });

            $routeProvider.when('/devices', {
                templateUrl: templateUrl + '/devices/devices.html',
                controller: 'devicesController'
            });

            $routeProvider.when('/settings', {
                templateUrl: templateUrl + '/settings/settings.html',
                controller: 'settingsController'
            });

            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();
