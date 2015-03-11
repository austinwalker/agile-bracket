'use strict';

/**
 * @ngdoc directive
 * @name agileBracketApp.directive:abRenderGame
 * @description
 * # abRenderGame
 */
angular.module('agileBracketApp')
  .directive('abRenderGame', function () {
    return {
      templateUrl: 'views/templates/game.html',
      restrict: 'E'
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the abRenderGame directive');
      // }
    };
  });
