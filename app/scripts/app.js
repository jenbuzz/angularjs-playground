'use strict';

/**
 * @ngdoc overview
 * @name angularjsPlaygroundApp
 * @description
 * # angularjsPlaygroundApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsPlaygroundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/infinitescroll', {
        templateUrl: 'views/infinitescroll.html',
        controller: 'InfinitescrollCtrl'
      })
      .when('/carousel', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
