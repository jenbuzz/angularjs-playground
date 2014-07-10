'use strict';

/**
 * @ngdoc function
 * @name angularjsPlaygroundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsPlaygroundApp
 */
angular.module('angularjsPlaygroundApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
