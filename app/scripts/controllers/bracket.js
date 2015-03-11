'use strict';

/**
 * @ngdoc function
 * @name agileBracketApp.controller:BracketCtrl
 * @description
 * # BracketCtrl
 * Controller of the agileBracketApp
 */
angular.module('agileBracketApp')
  .controller('BracketCtrl', function (
    $scope, 
    user,
    FBURL, 
    $firebase, 
    _
  ) {

    // Bracket structure
    var bracket = {south: [], west: [], east: [], midwest: [], finals: []};
    var regionalRounds = [2, 3, 4, 5];
    var regions = ['south', 'west', 'east', 'midwest'];
    var finalRounds = [6, 7, 8];

    // Firebase references and data
    var ref = new Firebase(FBURL);
    var games = $firebase(ref.child('games')).$asArray();
    
    // User
    $scope.user = user;

    // Create the bracket
    games.$loaded(function(data) {
      
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

    $scope.advanceTeam = function(slotToAdvance, gameInfo) {
      
      // Move the team forward
      var targetGameId = _.findKey(games, { '$id': gameInfo.nextGame});
      var targetSlot = gameInfo.nextSlot;
      games[targetGameId][targetSlot] = gameInfo[slotToAdvance];

      // Deal with future picks that are now impossible
      // This is not refreshing the view
      removeImpossiblePicks(slotToAdvance, gameInfo, games[targetGameId]);

    };

    function removeImpossiblePicks(teamPicked, gameInfo, nextGameInfo) {
      
      console.log(gameInfo);
      console.log(nextGameInfo);

      // Determine which team needs to be removed from future picks
      var teamNotPicked;
      if (teamPicked === 'team1') {
        teamNotPicked = 'team2';
      } else {
        teamNotPicked = 'team1';
      }

      var teamInNextSlot = nextGameInfo[gameInfo.nextSlot];
      console.log(teamInNextSlot);
      if (teamInNextSlot === teamNotPicked) {
        teamInNextSlot = '';
        // teamInNextSlot = games[nextGameInfo.nextSlot]
      }
    }

  });
