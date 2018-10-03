'use strict';

/**
 * @ngdoc function
 * @name auctionsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the auctionsApp
 */
angular.module('auctionsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
