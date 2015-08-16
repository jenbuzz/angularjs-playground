'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsPlaygroundApp'));

  var MainCtrl, scope, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  it('should include function isActive in scope', function () {
    expect(angular.isFunction(scope.isActive)).toBe(true);
  });
});
