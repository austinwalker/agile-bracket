'use strict';

/**
 * @ngdoc function
 * @name agileBracketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agileBracketApp
 */
angular.module('agileBracketApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
