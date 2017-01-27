angular.module('club').controller('viewCtrl', function($scope, $location, $rootScope, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log($routeParams);
    $scope.event = {};
    $scope.users = [{
        name: "Aditya",
        time: "2 mins"
    }, {
        name: "Aditya",
        time: "2 Minutes"
    }];
    // $scope.event.title = "Errata";
    function assignStatus() {
        var cur_time = new Date();
        var start_time = new Date($scope.event.start_time);
        var end_time = new Date($scope.event.end_time);
        if (cur_time >= start_time && cur_time <= end_time) {
            $scope.event.status = 2;
        } else if (cur_time > end_time) {
            $scope.event.status = 1;
        } else {
            $scope.event.status = 3;
            $scope.countdown = end_time;
        }
        // $scope.$broadcast('timer-set-countdown', 60);
    }
    eventsFactory.get($routeParams.id).then(function(res) {
        console.log(res.data);
        $scope.event = res.data;
        $rootScope.$broadcast('data.loaded');
        assignStatus();
        // $scope.countdown = new Date($scope.event.end_time);
        // console.log(new Date($scope.countdown));
    });
});
// 1485935911454