'use strict';

describe('Directive: renderTeams', function () {

  // load the directive's module
  beforeEach(module('agileBracketApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<render-teams></render-teams>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the renderTeams directive');
  }));
});
