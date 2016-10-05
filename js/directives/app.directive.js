"use strict";
app.directive('appDirective', [function () {
    return {
        restrict: 'E',
        templateUrl: '/js/templates/app.directive.html',
        link: function ($scope) {

            $scope.title = 'MEAN-starter';

        }
    };
}]);