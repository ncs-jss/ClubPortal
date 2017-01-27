angular.module('arena', []).config(function ($routeProvider) {
    $routeProvider.when('/arena/quiz/:id', {
        templateUrl: '/views/arena/quiz/quiz.html',
        controller: 'quizCtrl'
    });
});
