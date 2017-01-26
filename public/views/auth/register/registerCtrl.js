angular.module('auth').controller('registerCtrl', function($scope, $location, authFactory) {
    $(document).ready(function() {
        $.backstretch("/assets/img/login-bg.jpg", {
            speed: 500
        });
        $scope.user = {}
    });
});