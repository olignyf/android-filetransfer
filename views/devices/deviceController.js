(function() {
    'use strict';

    const DeviceManager = require('./lib/DeviceManager');

    angular.module('AndroidFiletransfer')
        .controller('deviceController', ['deviceService', '$scope', DevicesController]);

    function DevicesController(deviceService, $scope) {
        $scope.device = DeviceManager.getDevice(3034,281);
        console.log('devices', $scope.device);
    }
})();
