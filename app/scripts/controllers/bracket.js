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
          var rndGames = _.filter(data, { 'region': region, 'round': round } );           
          bracket[region].push(rndGames); // JW: Just push an obj with team1 and team2, use lookup for advance instead of on the actual object
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
      var targetGameIndex = getGameIndex(gameInfo.nextGame);
      var targetSlot = gameInfo.nextSlot;
      games[targetGameIndex][targetSlot] = gameInfo[slotToAdvance];

      // Deal with future picks that are now impossible
      removeImpossiblePicks(slotToAdvance, gameInfo);

      // Save advancement to user's bracket


    };

    function removeImpossiblePicks(slotPicked, gameInfo) {

      var slotNotPicked;
      if (slotPicked === 'team1') {
        slotNotPicked = 'team2';
      } else {
        slotNotPicked = 'team1';
      }

      var nextGameId = gameInfo.nextGame;
      var nextSlot = gameInfo.nextSlot;
      var teamIdNotPicked = gameInfo[slotNotPicked];
      
      var nextGameIndex = getGameIndex(nextGameId);
      var nextNextGameId = games[nextGameIndex].nextGame;
      var nextNextGameIndex = getGameIndex(nextNextGameId);
      var nextNextTeam = games[nextNextGameIndex][nextSlot];
      
      console.log('nextNextTeam: ' + nextNextTeam + ' | teamIdNotPicked: ' + teamIdNotPicked);
      if (nextNextTeam === teamIdNotPicked) {
        games[nextNextGameIndex][nextSlot] = '';
        console.log('remove pick');
      }

      removeImpossiblePicks();

    }

    function getGameIndex(gameId) {
      var index = _.findKey(games, { '$id': gameId});
      return index;
    }

    // Wire up storing user picks
    // JW: Make total game list copy per user (of just teams and winner)
    // JW: Update the users game list on click of the UI

    // Wire up rendering user picks

    // Wire up scoring user picks
    // JW: If game list per user, just loop through and compare

    // Wire up agile picking
    // JW: When they click to adavnce a team, check to see if master list has a winner id, if so, the game has already been played

    // Wire up agile scoring
    // JW: Have 'Current Round' Firebase property to help lock down past picks.

  });
