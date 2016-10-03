"use strict";
app.controller('appController', ['$scope', 'appFactory', function ($scope, appFactory) {

    appFactory.getData().then(function (res) {
        $scope.icon = res;
    });

}]);