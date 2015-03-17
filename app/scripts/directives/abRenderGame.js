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
      restrict: 'E',
      scope: {
        picks: '=',
        game: '=',
        games: '=',
        makePick: '='
      }
      // link: function postLink(scope, element, attrs) {
         
      // }
    };
  });
