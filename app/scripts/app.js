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
    'infinite-scroll',
    'ui.bootstrap',
    'ngDialog'
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
      .when('/digitalclock', {
        templateUrl: 'views/digitalclock.html',
        controller: 'DigitalclockCtrl'
      })
      .when('/customvalidator', {
        templateUrl: 'views/customvalidator.html',
        controller: 'CustomvalidatorCtrl'
      })
      .when('/dialogs', {
        templateUrl: 'views/dialogs.html',
        controller: 'DialogsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function() {
    console.log("app is running!");
  });
