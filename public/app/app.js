/*
 * Main Angular module
 *
 * Style guide:
 * avoid polluting global namespace:
 *  var app = angular.module('app');
 */

angular.module('MainApplicationModule', ['ngRoute', 'ngAnimate']);

/*
 * Add SPA Routing using route provider
 *
 * Style guide:
 * avoid using a variable and instead use chaining with the getter syntax
 *
 */

angular
    .module('MainApplicationModule')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                controller: 'HomeController',
                templateUrl: '/app/partials/homePartial.html'
            })
            .otherwise({ redirectTo: '/home' });
    });
