angular.module('ClubPortal', ['ngRoute', 'auth', 'LocalStorageModule','ngFileUpload']).config(function(localStorageServiceProvider, $locationProvider) {
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
        localStorageService.cookie.set("editBlogs",blogs);
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
}).run(function($rootScope,$route, $templateCache, $http) {
    console.log('test');
    $rootScope.d = function(elem) {
        elem = document.querySelector(elem);
        return (elem || document.querySelector(".null"));
    }
    $rootScope.dd = function(elem) {
        return document.querySelectorAll(elem);
    }
});