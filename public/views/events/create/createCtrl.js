angular.module('club').controller('createCtrl', function($scope, $location, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log("r", $routeParams);
    $scope.event = {};
    eventsFactory.getList().then(function(data) {
        console.log(data.data);
        if (data.data.status === "1") {} else {}
    });
    if ($routeParams.club) {
        $scope.event.club = $routeParams.club;
    }
    $scope.createEvent = function(form) {
        console.info($scope.event);
        if (form.$valid) {
            console.log($scope.event);
        }
    }
});