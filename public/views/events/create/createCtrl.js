angular.module('club').controller('createCtrl', function($scope, $location, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log("r", $routeParams);
    $scope.event = {};
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
                var unique_id = $.gritter.add({
                    // (string | mandatory) the heading of the notification
                    title: 'Event Created!',
                    // (string | mandatory) the text inside the notification
                    text: '<a href="/events"></a>',
                    // (string | optional) the image to display on the left
                    image: 'assets/img/ui-sam.jpg',
                    // (bool | optional) if you want it to fade out on its own or just sit there
                    // sticky: true,
                    // (int | optional) the time you want it to be alive for before fading out
                    time: '',
                    // (string | optional) the class name you want to apply to that specific message
                    class_name: 'my-sticky-class'
                });
                if (data.data.status === "1") {} else {}
            });
            console.log($scope.event);
        }
    }
});