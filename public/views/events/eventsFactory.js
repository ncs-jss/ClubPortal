angular.module('events').factory('eventsFactory', function($http, $rootScope) {
    var base = $rootScope.baseUrl + "design_events/";
    return {
        create: function(data) {
            return $http.post(base, data);
        },
        getList: function(params) {
            return $http.get(base);
        }
    }
});