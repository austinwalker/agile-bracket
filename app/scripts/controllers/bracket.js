'use strict';

/**
 * @ngdoc function
 * @name agileBracketApp.controller:BracketCtrl
 * @description
 * # BracketCtrl
 * Controller of the agileBracketApp
 */
angular.module('agileBracketApp')
  .controller('BracketCtrl', function ($scope, FBURL, $firebase, _) {
    
    // Set bracket structure
    var bracket = {south: [], west: [], east: [], midwest: []};
    var regionalRounds = [2, 3, 4, 5, 6];
    var regions = ['south', 'west', 'east', 'midwest'];

    // Get game data
    var gamesRef = new Firebase(FBURL + '/games');
    // var teamsRef = new Firebase(FBURL + '/teams');
    var games = $firebase(gamesRef).$asArray();
    // var teams = $firebase(ref + '/teams').$asArray();
    
    // Sort the games into regions and rounds
    games.$loaded().then(function(data) {
      _.forEach(regions, function(region) {
        _.forEach(regionalRounds, function(round) {
          var rndGames = _.filter(data, { 'region': region, 'round': round });           
          bracket[region].push(rndGames);
        });
      });
      
      console.log(games);
      // console.log(bracket);
    });
    
    $scope.bracket = bracket;

    // Used to abstract out classes for ng-repeat
    $scope.getRoundClass = function(i) {
      var roundClasses = ['round-64', 'round-32', 'round-16', 'round-8', 'round-4'];
      return roundClasses[i];  
    };

    $scope.advanceTeam = function(teamId, gameInfo) {
      var gameIndex = _.findKey(games, { '$id': gameInfo.nextGame});
      games[gameIndex][gameInfo.nextSlot] = teamId;
    };

  });
