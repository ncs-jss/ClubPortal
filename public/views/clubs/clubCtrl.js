angular.module('club').controller('clubCtrl', function($scope, $location, authFactory, localStorageService, $routeParams, SessionService) {
    $scope.club = {};
    $scope.club.title = $routeParams.name;
    $scope.club.desc = "We are a bunch of creative headed geeks who love to create digital art and designs….. Photoshop, illustrator etc are the canvas for our imaginations!!!!!";
    $scope.club.members = [{
        name: "Aditya Agarwal",
        desc: "2nd Year"
    }, {
        name: "Shlok Gupta",
        desc: "2nd Year"
    }, {
        name: "Ms. Shushumna",
        desc: "H.O.C. Web,4th Year"
    }];
    $scope.club.events = [{
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
    console.log($routeParams.name);
});