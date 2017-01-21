angular.module('club').controller('eventCtrl', function($scope, $location, authFactory, localStorageService, $routeParams, SessionService) {
    console.log($routeParams);
    $scope.event = {};
    $scope.users = [{
        name: "Aditya",
        time: "2 mins"
    }, {
        name: "Aditya",
        time: "2 Minutes"
    }];
    $scope.event.title = "Errata";
});