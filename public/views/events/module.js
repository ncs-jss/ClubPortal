angular.module('events', []).config(function($routeProvider) {
    $routeProvider.when('/events', {
        templateUrl: '/views/events/events.html',
        controller: 'eventsCtrl'
    }).when('/events/create', {
        templateUrl: '/views/events/create/create.html',
        controller: 'createCtrl'
    }).when('/events/:id', {
        templateUrl: '/views/events/view/view.html',
        controller: 'viewCtrl'
    }).when('/events/edit/:id', {
        templateUrl: '/views/events/edit/edit.html',
        controller: 'editCtrl'
    })
});
// /views/events/event/event