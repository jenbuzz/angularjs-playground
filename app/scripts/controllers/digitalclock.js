'use strict';

angular.module('angularjsPlaygroundApp')
  .controller('DigitalclockCtrl', function() {})
  .directive('digitalclock', function($interval) {
    return {
      restrict: 'E',
      scope: {},
      template: '<div class="text-center clock" ng-bind="now | date:\'HH:mm:ss\'"></div>',
      link: function (scope) {
        scope.now = new Date();
        var clockTimer = $interval(function() {
          scope.now = new Date();
        }, 1000);
        scope.$on('$destroy', function(){
          $interval.cancel(clockTimer);
        });
      }
    };
  });
