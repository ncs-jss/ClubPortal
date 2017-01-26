angular.module('auth').controller('landingCtrl', function($scope, $location, authFactory, eventsFactory, localStorageService, $routeParams, SessionService) {
    $scope.clubs = [{
        title: "technical",
        desc: "Ipsum"
    }, {
        title: "programming",
        desc: "Ipsum"
    }, {
        title: "web",
        desc: "Lorem"
    }, {
        title: "design",
        desc: "Ipsum"
    }];
    eventsFactory.getList().then(function(data) {
        console.log(data.data);
        $scope.events = data.data;
    });
});