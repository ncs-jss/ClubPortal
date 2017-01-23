angular.module('events').controller('createCtrl', function($scope, $location, eventsFactory, localStorageService, $routeParams, SessionService, $timeout) {
    console.log("r", $routeParams);
    $scope.event = {};
    // $scope.event.club = 1;
    if ($routeParams.club) {
        $scope.event.club = $routeParams.club;
    }
    $scope.createEvent = function(form) {
        console.info($scope.event);
        if (form.$valid) {
            var x = {
                design_event: $scope.event
            }
            eventsFactory.create(x).then(function(data) {
                console.log(data.data);
                var event = data.data;
                var link = "/events/" + event.id;
                var unique_id = $.gritter.add({
                    title: 'Event Created!',
                    text: 'Check It Out <a href="' + link + '" style="color:#ffd777">Here</a>',
                    image: 'assets/img/ui-sam.jpg',
                    class_name: 'my-sticky-class'
                });
                if (data.data.status === "1") {} else {}
            });
        }
    }
});