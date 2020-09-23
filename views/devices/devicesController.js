(function() {
    'use strict';

    const DeviceManager = require('./lib/DeviceManager');

    angular.module('AndroidFiletransfer')
        .controller('devicesController', ['deviceService', '$scope', DevicesController]);

    function DevicesController(deviceService, $scope) {
        DeviceManager.list(function(devices) {
            $scope.devices = devices;
            console.log('devices', devices);
        });
    }
})();
