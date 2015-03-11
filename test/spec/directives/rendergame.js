'use strict';

describe('Directive: renderGame', function () {

  // load the directive's module
  beforeEach(module('agileBracketApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<render-game></render-game>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the renderGame directive');
  }));
});
