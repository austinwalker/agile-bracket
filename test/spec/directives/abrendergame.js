'use strict';

describe('Directive: abRenderGame', function () {

  // load the directive's module
  beforeEach(module('agileBracketApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<abRenderGame></abRenderGame>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the abRenderGame directive');
  }));
});
