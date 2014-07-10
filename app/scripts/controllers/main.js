'use strict';

/**
 * @ngdoc function
 * @name angularjsPlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPlaygroundApp
 */
angular.module('angularjsPlaygroundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
