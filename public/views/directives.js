angular.module('ClubPortal').directive('preLoader', function() {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<div class="preloaderPage bg-dk-purple"><div class="preloader-box"><img class="preloader" src="/assets/img/preloaderLg.svg" alt=""></div></div>'
    }
}).directive('baseWrap', function() {
    return {
        restrict: 'E',
        // replace: 'true',
        transclude: true,
        templateUrl: '/views/partials/blank.html',
        link: function(scope, el, attrs, ctrl, transclude) {
            el.find('.wrapper').append(transclude());
        },
        controller: function($scope, $rootScope, $attrs) {
            console.log('test3');
        }
    };
}).directive('navBar', function() {
    return {
        scope: {
            active: "@"
        },
        restrict: 'E',
        replace: 'true',
        templateUrl: '/views/partials/navbar.html',
        controller: function($scope, $rootScope, $attrs) {
            $rootScope.d("#" + $attrs.active).classList.add("active");
        }
    };
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
}).directive('footerBar', function() {
    return {
        replace: true,
        templateUrl: '/views/partials/footer.html',
        controller: function($scope, tagFactory, blogFactory, $timeout, tagsService) {
            $scope.subscribe = function() {
                console.log('test');
                blogFactory.subscribe($scope.emailId).then(function(message) {
                    console.log(message.data);
                });
            }
            $timeout(tagFactory.getTagList("design=category").then(function(categories) {
                $scope.categories = categories.data;
                tagsService.setTags(categories.data);
            }), 0);
        }
    };
}).directive('scroller', function() {
    return {
        restrict: 'A',
        controller: function($scope, $location, $anchorScroll, $element, $attrs) {
            var scroll = function() {
                var old = $location.hash();
                $location.hash($attrs.scrollTo);
                $anchorScroll();
                $location.hash(old);
            }
            $element.bind("click", function() {
                scroll();
            });
        }
    };
});