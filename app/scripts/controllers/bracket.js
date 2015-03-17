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

    // Bracket UI structure and variables
    var bracket = {south: [], west: [], east: [], midwest: [], finals: []};
    var regionalRounds = [2, 3, 4, 5];
    var regions = ['south', 'west', 'east', 'midwest'];
    var finalRounds = [6, 7, 8];
    var championshipIndex = 62;

    // Firebase references and data
    var ref = new Firebase(FBURL);
    var games = $firebase(ref.child('games')).$asArray();
    var usersRef = ref.child('users');
    var picksRef = usersRef.child(user.uid).child('picks');
    var picks = $firebase(picksRef).$asArray();

    $scope.user = user;

    // Load the users personal picks
    picks.$loaded(function(data) {
      $scope.picks = data;
    });

    // Sort the games into data usable for the bracket UI
    games.$loaded(function(data) {
      
      // Assign to scope for use in RenderTeams directive
      $scope.games = data;

      // Slice the games up for UI
      _.forEach(regions, function(region) {
        _.forEach(regionalRounds, function(round) {
          var rndGames = _.filter(data, { 'region': region, 'round': round } );
          // JW: Just push an obj with team1 and team2, 
          // use lookup for advance instead of on the actual object?
          bracket[region].push(rndGames); 
        });
      });
      _.forEach(finalRounds, function(round) {
        var rndGames = _.filter(data, {'round': round });           
        bracket.finals.push(rndGames);
      });

      // Set up data for UI rendering
      $scope.bracket = bracket;
      $scope.finalsLeft = bracket.finals[0][0];
      $scope.finalsRight = bracket.finals[0][1];
      $scope.championship = bracket.finals[1][0];
    });

    // Abstracts out UI classes for ng-repeat
    $scope.getRoundClass = function(i) {
      var roundClasses = ['round-64', 'round-32', 'round-16', 'round-8', 'round-4'];
      return roundClasses[i];  
    };

    // Handles logic once a pick as been made
    $scope.makePick = function(slotToAdvance, gameInfo) {

      // Set the winner of the game on the current game
      var gameIndex = getGameIndex(gameInfo.$id);
      games[gameIndex].winnerId = gameInfo[slotToAdvance];

      // UI
      advanceTeam(slotToAdvance, gameInfo);

      // Firebase
      picksRef.child(gameInfo.$id).set({
        winnerId: gameInfo[slotToAdvance]
      });

      // Deal with future picks that are now impossible
      var slotNotPicked = getSlotNotPicked(slotToAdvance);
      var teamIdNotPicked = gameInfo[slotNotPicked];
      removeImpossiblePicks(teamIdNotPicked, gameInfo);
    };

    function removeImpossiblePicks(teamNotPicked, gameInfo) {
      var teamIdNotPicked = teamNotPicked;

      // One game out
      var nextGameId = gameInfo.nextGame;
      var nextGameIndex = getGameIndex(nextGameId);
      
      // Two games out      
      var nextNextGameId = games[nextGameIndex].nextGame;
      var nextNextSlot = games[nextGameIndex].nextSlot;
      var nextNextGameIndex = getGameIndex(nextNextGameId);

      // Logic for resetting the champion
      if (games[championshipIndex].winnerId === teamIdNotPicked) {
        
        // UI
        games[championshipIndex].winnerId = '';
        
        // Firebase
        picksRef.child(games[championshipIndex].$id).set({
          winnerId: ''
        });
      }

      // Logic for removing a team two games out (if that game exists)
      if (nextNextGameIndex) {
        var nextNextTeam = games[nextNextGameIndex][nextNextSlot];  
        if (nextNextTeam && nextNextTeam === teamIdNotPicked) {
          
          // UI
          games[nextNextGameIndex][nextNextSlot] = '';
          
          // Firebase
          picksRef.child(nextGameId).set({
            winnerId: ''
          });
        }

        // Check all future games on this teams path
        removeImpossiblePicks(teamIdNotPicked, games[nextGameIndex]);
      }
    }

    // Utility to determine where the game is located 
    // in the original Firebase data, for easier setting
    function getGameIndex(gameId) {
      var index = _.findKey(games, { '$id': gameId});
      return index;
    }

    // Utility to determine which slot was not picked
    function getSlotNotPicked(slotPicked) {
      var slotNotPicked;
      if (slotPicked === 'team1') {
        slotNotPicked = 'team2';
      } else {
        slotNotPicked = 'team1';
      }
      return slotNotPicked;
    }

    // Moves a picked team forward in the UI
    function advanceTeam(slotToAdvance, gameInfo) {
      var targetGameIndex = getGameIndex(gameInfo.nextGame);
      var targetSlot = gameInfo.nextSlot;
      
      // Don't advance if it's the championship since there's not a next game
      if (gameInfo.$id !== 'game63') { 
        console.log('slotToAdvance: ', slotToAdvance);
        console.log('gameInfo: ', gameInfo);
        
        console.log('team: ', gameInfo[slotToAdvance]);
        console.log('before: ', games[targetGameIndex]);
        games[targetGameIndex][targetSlot] = gameInfo[slotToAdvance];  
        console.log('after: ', games[targetGameIndex]);
      }
    }

    // Wire up scoring user picks
    // JW: If game list per user, just loop through and compare

    // Wire up agile scoring
    // JW: Have 'Current Round' Firebase property to help lock down past picks.

  });
