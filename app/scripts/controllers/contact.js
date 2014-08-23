'use strict';

angular.module('angularjsPlaygroundApp')
  .controller('ContactCtrl', function($scope) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData;
    $scope.submitButtonDisabled = false;
    $scope.submitted = false;
    $scope.submit = function(contactform) {
      $scope.submitted = true;
      $scope.submitButtonDisabled = true;
      if (contactform.$valid) {
        $scope.submitButtonDisabled = true;
        $scope.resultMessage = "Your message was sent.";
        $scope.result='bg-success';
      }
    }
  });
