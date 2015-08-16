'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('angularjsPlaygroundApp'));

  var MainCtrl, scope, location;

  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  it('should add function isActive to scope', function () {
    expect(angular.isFunction(scope.isActive)).toBe(true);
  });
});
