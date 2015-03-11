'use strict';

/**
 * @ngdoc directive
 * @name agileBracketApp.directive:abRenderTeams
 * @description
 * # abRenderTeams
 */
angular.module('agileBracketApp')
  .directive('abRenderTeams', function () {
    return {
      template: '<div></div>',
      restrict: 'E'
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the abRenderTeams directive');
      // }
    };
  });
