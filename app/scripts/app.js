'use strict';

/**
 * @ngdoc overview
 * @name padFinderApp
 * @description
 * # padFinderApp
 *
 * Main module of the application.
 */
angular
  .module('padFinderApp', [
    'cb.x2js',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/My Neighborhoods', {
        templateUrl: 'views/neighborhoods.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Rentals', {
        templateUrl: 'views/renting.html',
        controller: 'Rentals',
        controllerAs: 'nei'
      })
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
