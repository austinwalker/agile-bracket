'use strict';

/**
 * @ngdoc service
 * @name agileBracketApp.lodash
 * @description
 * # lodash
 * Factory in the agileBracketApp.
 */
angular.module('agileBracketApp')
  .factory('_', function () {
    return window._;
  });
