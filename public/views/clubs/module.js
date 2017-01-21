angular.module('club', []).config(function($routeProvider) {
    $routeProvider.when('/club/:name', {
        templateUrl: '/views/clubs/club.html',
        controller: 'clubCtrl'
    }).when('/club/:name/events', {
        template: ' ',
        controller: function($routeParams, $location) {
            $location.path('/events').search({
                club: $routeParams.name
            });
        }
    });
});