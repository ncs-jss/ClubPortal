angular.module('ClubPortal').directive('preLoader', function() {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<div class="preloaderPage bg-dk-purple"><div class="preloader-box"><img class="preloader" src="/assets/img/preloader.gif" alt=""></div></div>'
    }
}).directive('baseWrap', function() {
    return {
        restrict: 'E',
        // replace: 'true',
        transclude: true,
        templateUrl: '/views/partials/blank.html',
        link: function(scope, el, attrs, ctrl, transclude) {
            // el.find('.wrapper').append(transclude());
        },
        controller: "blankCtrl"
    }
}).directive('navLink', function() {
    return {
        scope: {
            showifuser: "@",
            hideifuser: "@",
            text: "@"
        },
        replace: true,
        template: '<a ng-show="show">{{text}}</a>',
        controller: function($scope, $attrs, SessionService) {
            $scope.userIsAuthenticated = SessionService.getUserAuthenticated();
            if (typeof $attrs.showifuser == "string") {
                $scope.show = $scope.userIsAuthenticated;
            }
            if (typeof $attrs.hideifuser == "string") {
                $scope.show = !$scope.userIsAuthenticated;
            }
        }
    };
})