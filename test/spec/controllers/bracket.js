'use strict';

describe('Controller: BracketCtrl', function () {

  // load the controller's module
  beforeEach(module('agileBracketApp'));

  var BracketCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BracketCtrl = $controller('BracketCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
