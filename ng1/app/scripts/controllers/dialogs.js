'use strict';

angular.module('angularjsPlaygroundApp')
  .controller('DialogsCtrl', function($scope, ngDialog) {
    $scope.openDefaultDialog = function () {
      ngDialog.open({ template: 'defaultDialog' });
    };
    $scope.openButtonsDialog = function () {
      ngDialog.open({ template: 'buttonsDialog' });
    };
  });
