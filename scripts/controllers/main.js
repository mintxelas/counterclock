'use strict';

/**
 * @ngdoc function
 * @name auctionsApp.controller:AuctionItemsController
 * @description
 * # AuctionItemsController
 * Controller of the auctionsApp
 */
angular.module('auctionsApp').controller("AuctionItemsController", 
 ['$http', '$timeout', 'datetime', function ($http, $timeout, datetime) {
    var self = this;
     
    self.apiController = '/api'; 
     
    self.getAuctionItems = getAuctionItems;
    self.tick = tick; 
    self.processAuctionItems = processAuctionItems; 

    self.currentTime = moment();
    self.getAuctionItems();
    $timeout(self.tick, 1000);
    //$timeout(self.getAuctionItems, 10000);
     
     
    /////////////////////
     
    function getAuctionItems() {
        $http({ method: 'GET', url: self.apiController + '/GetAuctionItems.json.txt', params: { maxItems: 5 } }).
        success(function (data, status, headers, config) {
            // for testing
            angular.forEach(data, function (item) {
                item.AuctionBeginDateTime = moment();
                item.AuctionEndDateTime = moment().add(Math.floor(Math.random() * 30) + 1 , 'minute');
            });
            //
            self.processAuctionItems(data);
            self.auctions = data;
        }).
        error(function (data, status, headers, config) {
            //TODO: log this error
            $timeout(self.getAuctionItems, 10000);
        });
    };
    function tick() {
        self.currentTime = moment();
		self.processAuctionItems(self.auctions);
        $timeout(self.tick, 1000);
    }
    function processAuctionItems(data) {
        var count = 0;
        angular.forEach(data, function (item) {
            count += 1;
		    var price = item.StartingPrice;
			if (item.currentPrice) price = item.currentPrice;
			item.remainingTime = datetime.getRemainingTime(item.AuctionEndDateTime);
			item.currentPrice = datetime.getRemainingPrice(item.remainingTime, price, item.MinimumPrice);

            var percentage = Math.floor(100-(100*item.remainingTime/(item.AuctionEndDateTime-item.AuctionBeginDateTime)));
                
            item.gauge = {
                element:'gauge' + count,
                opacity: 0.55,
                value: percentage,
                startValue: percentage,
                text: 'Bid before missing it!',
                duration: 0,
            };
        });
    } 
     
     
}]);

angular.module('auctionsApp').factory('datetime', ['$timeout', function ($timeout) {
    var duration = function (timeSpan) {
        var days = Math.floor(timeSpan / 86400000);
        var diff = timeSpan - days * 86400000;
        var hours = Math.floor(diff / 3600000);
        diff = diff - hours * 3600000;
        var minutes = Math.floor(diff / 60000);
        diff = diff - minutes * 60000;
        var secs = Math.floor(diff / 1000);
        return { 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': secs };
    };
    var getRemainingTime = function (referenceTime) {
        var now = moment().utc();
        return moment(referenceTime) - now;
    };
    var getRemainingPrice = function (remainingTime, currentPrice, minimumPrice) {
        var moneyLeft = currentPrice - minimumPrice;
		var reduceAmount = moneyLeft / Math.max(1, Math.floor(remainingTime/1000)-1);
        return Math.max(currentPrice - reduceAmount, minimumPrice);
    };
    return {
        duration: duration,
        getRemainingTime: getRemainingTime,
		getRemainingPrice: getRemainingPrice
    };
}]);

angular.module('auctionsApp').filter('durationview', ['datetime', function (datetime) {
    return function (input, css) {
        var duration = datetime.duration(input);
		var fmt = '';
		if (duration.days > 0 && duration.days < 10){
		  fmt += "0";
		}
        fmt += duration.days + ':';
        if (duration.hours > 0 && duration.hours < 10) {
		  fmt += '0';
		}
        fmt += duration.hours + ':';
        if (duration.minutes > 0 && duration.minutes < 10) {
		  fmt += '0';
		} 
        fmt += duration.minutes + ':';
        if (duration.seconds > 0 && duration.seconds < 10) {
		  fmt += '0';
		} 
        fmt += duration.seconds;
        if (fmt === '00:00:00:00') fmt = 'Finished.';
        return fmt;
    };
}]);