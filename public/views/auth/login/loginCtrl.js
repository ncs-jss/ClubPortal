angular.module('auth').controller('loginCtrl', function($scope, $location, authFactory, localStorageService, $routeParams, SessionService) {
    console.log('test2');
    $(document).ready(function() {
        $.backstretch("/assets/img/login-bg.jpg", {
            speed: 500
        });
    });
});