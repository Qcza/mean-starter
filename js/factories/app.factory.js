"use strict";
app.factory('appFactory', ['$http', '$q', function ($http, $q) {
    return {
        getData: function () {
            var deferred = $q.defer();
            $http.get('/data').then(function (res) {
                deferred.resolve(res.data);
            }, function () {
                deferred.reject({});
            });
            return deferred.promise;
        }
    }
}]);