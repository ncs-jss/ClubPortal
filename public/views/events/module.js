angular.module('events', []).config(function($routeProvider) {
    $routeProvider.when('/events', {
        templateUrl: '/views/events/events.html',
        controller: 'eventsCtrl'
    }).when('/events/create', {
        templateUrl: '/views/events/create/create.html',
        controller: 'createCtrl'
    }).when('/events/:name', {
        templateUrl: '/views/events/event/event.html',
        controller: 'eventCtrl'
    })
});
// /views/events/event/event