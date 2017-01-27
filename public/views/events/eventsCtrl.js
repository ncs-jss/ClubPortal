angular.module('events').controller('eventsCtrl', function($scope, $rootScope, $location, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log($routeParams);
    $scope.ongoing = [];
    $scope.events = [];
    eventsFactory.getList().then(function(data) {
        console.log(data.data);
        $scope.events = data.data;
        $scope.ongoing = $scope.events;
        $rootScope.$broadcast('data.loaded');
    });
});