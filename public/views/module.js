angular.module('ClubPortal', ['ngRoute', 'auth', 'events', 'club', 'LocalStorageModule', 'ngFileUpload', 'ui.bootstrap.datetimepicker', 'ngScrollTo']).config(function(localStorageServiceProvider, $locationProvider) {
    // 'ng-token-auth'
    $locationProvider.html5Mode(true);
    localStorageServiceProvider.setPrefix('ClubPortal').setStorageType('localStorage');
}).service('SessionService', function(localStorageService) {
    this.setUserAuthenticated = function(value, allowEdit) {
        localStorageService.cookie.set("userIsAuthenticated", value);
    };
    this.getUserAuthenticated = function() {
        return localStorageService.cookie.get("userIsAuthenticated");
    };
    this.setUserType = function(value) {
        localStorageService.cookie.set("userType", value);
    };
    this.getUserType = function() {
        return localStorageService.cookie.get("userType");
    };
    this.setEditableBlog = function(blogs) {
        localStorageService.cookie.set("editBlogs", blogs);
    };
    this.getEditableBlog = function() {
        return localStorageService.cookie.get("editBlogs");
    };
    this.getCanEditBlog = function(blogId) {
        var blogs = localStorageService.cookie.get("editBlogs");
        if (blogs && blogs.indexOf(blogId) != -1) {
            return true;
        }
        return false;
    };
}).config(function($routeProvider, ngScrollToOptionsProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/landing/landing.html',
        controller: 'landingCtrl'
    });
    ngScrollToOptionsProvider.extend({
        handler: function(el) {
            $(el).scrollintoview({
                duration: 25000,
                complete: function() {
                    // highlight the element so user's focus gets where it needs to be
                    console.log('t');
                }
            });
        }
    });
}).run(function($rootScope, $route, $templateCache, $http, $location) {
    $rootScope.baseUrl = "https://club-portal.herokuapp.com/api/v1/";
    $rootScope.d = function(elem) {
        elem = document.querySelector(elem);
        return (elem || document.querySelector(".null"));
    }
    $rootScope.dd = function(elem) {
        return document.querySelectorAll(elem);
    }
    $rootScope.$on("$routeChangeStart", function() {
        $(window).scrollTop(0);
    });
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
});