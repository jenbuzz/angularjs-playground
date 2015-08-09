'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsPlaygroundApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should include function isActive in scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
    expect(typeof scope.isActive).toBe("function")
  });
});
