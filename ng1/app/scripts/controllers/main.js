'use strict';

/**
 * @ngdoc function
 * @name angularjsPlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsPlaygroundApp
 */
angular.module('angularjsPlaygroundApp')
  .controller('MainCtrl', function ($scope, $location) {

    // Function to help set the active navigation item.
    $scope.isActive = function(route) {
      return route === $location.path();
    }

  });
