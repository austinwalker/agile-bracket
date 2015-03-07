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
    var bracket = {south: [], west: [], east: [], midwest: [], finals: []};
    var regionalRounds = [2, 3, 4, 5];
    var regions = ['south', 'west', 'east', 'midwest'];
    var finalRounds = [6, 7, 8];

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
      _.forEach(finalRounds, function(round) {
        var rndGames = _.filter(data, {'round': round });           
        bracket.finals.push(rndGames);
      });
      
      // console.log(games);
      console.log(bracket);
      
      $scope.bracket = bracket;
      $scope.finalsLeft = bracket.finals[0][0];
      $scope.finalsRight = bracket.finals[0][1];
      $scope.championship = bracket.finals[1][0];
    });



    // Used to abstract out classes for ng-repeat
    $scope.getRoundClass = function(i) {
      var roundClasses = ['round-64', 'round-32', 'round-16', 'round-8', 'round-4'];
      return roundClasses[i];  
    };

    // AWTODO: Refactor into directive and combine with animations
    $scope.advanceTeam = function(teamId, gameInfo) {
      var targetGameKey = _.findKey(games, { '$id': gameInfo.nextGame});
      var targetSlot = gameInfo.nextSlot;
      games[targetGameKey][targetSlot] = teamId;
    };

  });
