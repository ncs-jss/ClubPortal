angular.module('events').controller('editCtrl', function($scope, $rootScope, $location, eventsFactory, localStorageService, $routeParams, SessionService) {
    console.log("r", $routeParams);
    eventsFactory.get($routeParams.id).then(function(data) {
        $scope.event = data.data;
        $rootScope.$broadcast('data.loaded');
    });
    $scope.createEvent = function(form) {
        console.info($scope.event);
        if (form.$valid) {
            var x = {
                design_event: $scope.event
            }
            eventsFactory.save($routeParams.id).then(function(data) {
                console.log(data.data);
                var unique_id = $.gritter.add({
                    title: 'Event Updated!',
                    text: '<a href="/events"></a>',
                    image: 'assets/img/ui-sam.jpg',
                    class_name: 'my-sticky-class'
                });
                if (data.data.status === "1") {} else {}
            });
        }
    }
});