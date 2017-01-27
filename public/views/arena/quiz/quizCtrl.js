angular.module('arena').controller('quizCtrl', function ($scope, $location, $rootScope, eventsFactory, localStorageService, $routeParams, SessionService, $timeout) {
    console.log($routeParams);
    $scope.questions = [{
        name: "Aditya",
        time: "2 mins"
    }, {
        name: "Aditya",
        time: "2 Minutes"
    }];
    $scope.event = {};
    $scope.quiz = {
        start: false
    };
    $scope.selectQues = function (ques) {
        console.log(ques);
    }
    eventsFactory.get($routeParams.id).then(function (res) {
        console.log(res.data);
        $scope.event = res.data;
        $rootScope.$broadcast('data.loaded');
    });
});
