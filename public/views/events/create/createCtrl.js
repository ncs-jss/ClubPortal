angular.module('club').controller('createCtrl', function($scope, $location, authFactory, localStorageService, $routeParams, SessionService) {
    console.log("r", $routeParams);
    $scope.event = {};
    if ($routeParams.club) {
        $scope.event.club = $routeParams.club;
    }
});