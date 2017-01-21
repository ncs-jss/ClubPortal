angular.module('club').controller('eventCtrl', function($scope, $location, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log($routeParams);
    // $scope.event = {};
    $scope.users = [{
        name: "Aditya",
        time: "2 mins"
    }, {
        name: "Aditya",
        time: "2 Minutes"
    }];
    // $scope.event.title = "Errata";
    eventsFactory.get($routeParams.id).then(function(data) {
        console.log(data.data);
        $scope.event = data.data;
    });
});