'use strict';

/**
 * @ngdoc overview
 * @name romanNumeralConverterApp
 * @description
 * # romanNumeralConverterApp
 *
 * Main module of the application.
 */
angular
  .module('romanNumeralConverterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
