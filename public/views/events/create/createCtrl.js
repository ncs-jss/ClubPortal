angular.module('events').controller('createCtrl', function($scope, $rootScope, $location, eventsFactory, localStorageService, $routeParams, SessionService, $timeout) {
    console.log("r", $routeParams);
    $scope.event = {};
    $scope.items = ["web", "technical", "programming", "design"];
    $scope.club = $routeParams.club || "web";
    $timeout(function() {
        $rootScope.$broadcast('data.loaded');
        console.log('test2');
    });
    $scope.startDateOnSetTime = function() {
        $scope.$broadcast('start-date-changed');
    }
    $scope.endDateOnSetTime = function() {
        $scope.$broadcast('end-date-changed');
    }
    $scope.startDateBeforeRender = function($dates) {
        if ($scope.event.end_time) {
            var activeDate = moment($scope.event.end_time);
            $dates.filter(function(date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }
    $scope.endDateBeforeRender = function($view, $dates) {
        if ($scope.event.start_time) {
            var activeDate = moment($scope.event.start_time).subtract(1, $view).add(1, 'minute');
            $dates.filter(function(date) {
                return date.localDateValue() <= activeDate.valueOf()
            }).forEach(function(date) {
                date.selectable = false;
            })
        }
    }
    $scope.createEvent = function(form) {
        $scope.event.club = $(".clubSelect").val();
        console.info($scope.event);
        if (form.$valid) {
            var x = {
                design_event: $scope.event
            }
            eventsFactory.create(x).then(function(res) {
                console.log(res.data);
                var event = res.data;
                var link = "/events/" + event.id;
                $.gritter.add({
                    title: 'Event Created!',
                    text: 'Check It Out <a href="' + link + '" style="color:#ffd777">Here</a>',
                    image: 'assets/img/ui-sam.jpg',
                    class_name: 'my-sticky-class'
                });
                if (res.data.status === "1") {} else {}
            });
        } else {
            $.gritter.add({
                title: 'Incorrect Data!',
                text: 'Please Fix The Errors',
                class_name: 'my-sticky-class'
            });
        }
    }
});