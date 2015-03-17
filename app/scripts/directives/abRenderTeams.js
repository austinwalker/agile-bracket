'use strict';

/**
 * @ngdoc directive
 * @name agileBracketApp.directive:abRenderTeams
 * @description
 * # abRenderTeams
 */
angular.module('agileBracketApp')
  .directive('abRenderTeams', function (
    _
    ) {
    return {
      templateUrl: 'views/templates/teams.html',
      restrict: 'E',
      scope: {
        slot: '=',
        game: '=',
        picks: '=',
        games: '=',
        makePick: '='
      },
      link: function postLink(scope) {

        var masterCorrectTeam;
        var slot = scope.slot;
        
        // Determine which game we're in
        var gameId = scope.game.$id;

        // For this game, this slot, get the master winner
        var previousGame = _.filter(scope.games, { 
          'nextGame': gameId, 
          'nextSlot': slot
        });

        if(scope.game.round === 2) {
          // This is the first round
          masterCorrectTeam = scope.game[slot];
        } else {
          // The correct game for the master slot
          masterCorrectTeam = previousGame[0].winnerId;
        }
        
        scope.$watch('picks', function(picks) {
          
          var teamPicked = '';
          var previousUserGame = '';

          if (scope.game.round !== 2) {
            previousUserGame = _.filter(picks, {'$id': previousGame[0].$id });
          }

          if (previousUserGame[0]) {
            teamPicked = previousUserGame[0].winnerId;
          }

          if (masterCorrectTeam) {
            // The teams have been set
            scope.notWrongTeam = masterCorrectTeam;
          }

          if (teamPicked && !masterCorrectTeam) {
            // The team's haven't been set
            // so accept the users pick
            scope.notWrongTeam = teamPicked;
          }

          if (teamPicked && masterCorrectTeam) {
            
            // The teams have been set and we've made a pick
            // so check if it's correct
            if (teamPicked !== masterCorrectTeam) {
              scope.notWrongTeam = masterCorrectTeam;
              scope.wrongTeam = teamPicked;
              scope.correctPick = false;
            } else {
              scope.notWrongTeam = teamPicked;
              scope.correctPick = true;
            }
          }

        });
      }
    };
  });
