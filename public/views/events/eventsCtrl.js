angular.module('events').controller('eventsCtrl', function($scope, $location, authFactory, localStorageService, $routeParams, SessionService) {
    console.log($routeParams);
    $scope.ongoing = [{
        title: "Event 1",
        desc: "Lorem"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }];
    $scope.events = [{
        title: "Event 1",
        desc: "Lorem"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }];
});