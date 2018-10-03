'use strict';

/**
 * @ngdoc overview
 * @name auctionsApp
 * @description
 * # auctionsApp
 *
 * Main module of the application.
 */
angular
  .module('auctionsApp', [
    'ngRoute',
	  'angularMoment',
    'angular-raphael-gauge'
    //"ds.clock"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AuctionItemsController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
