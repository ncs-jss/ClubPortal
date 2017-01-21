angular.module('auth').controller('landingCtrl', function($scope, $location, authFactory, localStorageService, $routeParams, SessionService) {
    $scope.clubs = [{
        title: "web",
        desc: "Lorem"
    }, {
        title: "design",
        desc: "Ipsum"
    }, {
        title: "technical",
        desc: "Ipsum"
    }, {
        title: "programming",
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
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }, {
        title: "Event 1",
        desc: "Ipsum"
    }];
});