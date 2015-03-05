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
    
    var bracket = {
      south: [],
      west: [],
      east: [],
      midwest: []
    };
    
    var regionalRounds = [2, 3, 4, 5, 6];
    var regions = [ 'south', 'west', 'east', 'midwest' ];

    var ref = new Firebase(FBURL + '/games');
    var games = $firebase(ref).$asArray();
    
    // Create the bracket structure.
    games.$loaded().then(function(data) {
      _.forEach(regions, function(region) {
        _.forEach(regionalRounds, function(round) {
          var rndGames = _.pluck(_.filter(data, { 'region': region, 'round': round }), '$id');           
          bracket[region].push(rndGames);
        });
      });
      
      console.log(games);
      console.log(bracket);

    });
    
    $scope.bracket = bracket;

    $scope.getRoundClass = function(i) {
      var roundClasses = ['round-64', 'round-32', 'round-16', 'round-8', 'round-4'];
      return roundClasses[i];  
    };

  });
