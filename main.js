/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n__webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/npm.js\");\n__webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\n__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n__webpack_require__(/*! angular-moment */ \"./node_modules/angular-moment/angular-moment.js\");\n__webpack_require__(/*! angular-route */ \"./node_modules/angular-route/index.js\");\n\n/**\n * @ngdoc overview\n * @name auctionsApp\n * @description\n * # auctionsApp\n *\n * Main module of the application.\n */\nangular\n  .module(\"auctionsApp\", [\n    \"ngRoute\",\n    \"angularMoment\",\n    \"angular-raphael-gauge\"\n    //\"ds.clock\"\n  ])\n  .config(function($routeProvider) {\n    $routeProvider\n      .when(\"/\", {\n        templateUrl: \"views/main.html\",\n        controller: \"AuctionItemsController\"\n      })\n      .when(\"/about\", {\n        templateUrl: \"views/about.html\",\n        controller: \"AboutCtrl\"\n      })\n      .otherwise({\n        redirectTo: \"/\"\n      });\n  });\n\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/controllers/about.js":
/*!**************************************!*\
  !*** ./scripts/controllers/about.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * @ngdoc function\n * @name auctionsApp.controller:AboutCtrl\n * @description\n * # AboutCtrl\n * Controller of the auctionsApp\n */\nangular.module('auctionsApp')\n  .controller('AboutCtrl', function ($scope) {\n    $scope.awesomeThings = [\n      'HTML5 Boilerplate',\n      'AngularJS',\n      'Karma'\n    ];\n  });\n\n\n//# sourceURL=webpack:///./scripts/controllers/about.js?");

/***/ }),

/***/ "./scripts/controllers/main.js":
/*!*************************************!*\
  !*** ./scripts/controllers/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(moment) {\n\n/**\n * @ngdoc function\n * @name auctionsApp.controller:AuctionItemsController\n * @description\n * # AuctionItemsController\n * Controller of the auctionsApp\n */\nangular.module('auctionsApp').controller(\"AuctionItemsController\", \n ['$http', '$timeout', 'datetime', function ($http, $timeout, datetime) {\n    var self = this;\n     \n    self.apiController = '/api'; \n     \n    self.getAuctionItems = getAuctionItems;\n    self.tick = tick; \n    self.processAuctionItems = processAuctionItems; \n\n    self.currentTime = moment();\n    self.getAuctionItems();\n    $timeout(self.tick, 1000);\n    //$timeout(self.getAuctionItems, 10000);\n     \n     \n    /////////////////////\n     \n    function getAuctionItems() {\n        $http({ method: 'GET', url: self.apiController + '/GetAuctionItems.json.txt', params: { maxItems: 5 } }).\n        success(function (data, status, headers, config) {\n            // for testing\n            angular.forEach(data, function (item) {\n                item.AuctionBeginDateTime = moment();\n                item.AuctionEndDateTime = moment().add(Math.floor(Math.random() * 30) + 1 , 'minute');\n            });\n            //\n            self.processAuctionItems(data);\n            self.auctions = data;\n        }).\n        error(function (data, status, headers, config) {\n            //TODO: log this error\n            $timeout(self.getAuctionItems, 10000);\n        });\n    };\n    function tick() {\n        self.currentTime = moment();\n\t\tself.processAuctionItems(self.auctions);\n        $timeout(self.tick, 1000);\n    }\n    function processAuctionItems(data) {\n        var count = 0;\n        angular.forEach(data, function (item) {\n            count += 1;\n\t\t    var price = item.StartingPrice;\n\t\t\tif (item.currentPrice) price = item.currentPrice;\n\t\t\titem.remainingTime = datetime.getRemainingTime(item.AuctionEndDateTime);\n\t\t\titem.currentPrice = datetime.getRemainingPrice(item.remainingTime, price, item.MinimumPrice);\n\n            var percentage = Math.floor(100-(100*item.remainingTime/(item.AuctionEndDateTime-item.AuctionBeginDateTime)));\n                \n            item.gauge = {\n                element:'gauge' + count,\n                opacity: 0.55,\n                value: percentage,\n                startValue: percentage,\n                text: 'Bid before missing it!',\n                duration: 0,\n            };\n        });\n    } \n     \n     \n}]);\n\nangular.module('auctionsApp').factory('datetime', ['$timeout', function ($timeout) {\n    var duration = function (timeSpan) {\n        var days = Math.floor(timeSpan / 86400000);\n        var diff = timeSpan - days * 86400000;\n        var hours = Math.floor(diff / 3600000);\n        diff = diff - hours * 3600000;\n        var minutes = Math.floor(diff / 60000);\n        diff = diff - minutes * 60000;\n        var secs = Math.floor(diff / 1000);\n        return { 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': secs };\n    };\n    var getRemainingTime = function (referenceTime) {\n        var now = moment().utc();\n        return moment(referenceTime) - now;\n    };\n    var getRemainingPrice = function (remainingTime, currentPrice, minimumPrice) {\n        var moneyLeft = currentPrice - minimumPrice;\n\t\tvar reduceAmount = moneyLeft / Math.max(1, Math.floor(remainingTime/1000)-1);\n        return Math.max(currentPrice - reduceAmount, minimumPrice);\n    };\n    return {\n        duration: duration,\n        getRemainingTime: getRemainingTime,\n\t\tgetRemainingPrice: getRemainingPrice\n    };\n}]);\n\nangular.module('auctionsApp').filter('durationview', ['datetime', function (datetime) {\n    return function (input, css) {\n        var duration = datetime.duration(input);\n\t\tvar fmt = '';\n\t\tif (duration.days > 0 && duration.days < 10){\n\t\t  fmt += \"0\";\n\t\t}\n        fmt += duration.days + ':';\n        if (duration.hours > 0 && duration.hours < 10) {\n\t\t  fmt += '0';\n\t\t}\n        fmt += duration.hours + ':';\n        if (duration.minutes > 0 && duration.minutes < 10) {\n\t\t  fmt += '0';\n\t\t} \n        fmt += duration.minutes + ':';\n        if (duration.seconds > 0 && duration.seconds < 10) {\n\t\t  fmt += '0';\n\t\t} \n        fmt += duration.seconds;\n        if (fmt === '00:00:00:00') fmt = 'Finished.';\n        return fmt;\n    };\n}]);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\")))\n\n//# sourceURL=webpack:///./scripts/controllers/main.js?");

/***/ }),

/***/ "./scripts/misc/gauge.js":
/*!*******************************!*\
  !*** ./scripts/misc/gauge.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {// based on from https://github.com/wasilak/angular-raphael-gauge/blob/master/src/angular-raphael-gauge.js\n// using Raphael.js (be sure to include it earlier)\n(function(Raphael) {\n    'use strict';\n\n    // module definition, this has to be included in your app\n    angular.module('angular-raphael-gauge', [])\n    // directive definition, if you want to use itm you have to include it in controller\n    .directive('raphaelGauge', function() {\n        return {\n          // this directive can be used as an Element or an Attribute\n          restrict: 'EA',\n          scope: {\n            // setting config attribute to isolated scope\n            // config object is 1:1 configuration C3.js object, for avaiable options see: http://c3js.org/examples.html\n            config: '='\n          },\n          template: '<div></div>',\n          replace: true,\n          controller: function($scope, $element) {\n\n            var options = {\n              name: false,\n              image: false,\n              icon: false,\n              text: false,\n              textColor: '#000000',\n              arcColor: '#57E0EA',\n              bgArcColor: '#000',\n              opacity: false,\n              duration: 1600,\n              easing: 'bounce', // Raphael easing effect. Don't use backIn or Elastic, they mess up animation :/\n              startValue: 0, \n            };\n\n            // merging default options with user options\n            options = $.extend(options, $scope.config);\n            \n            // dynamic id for selectors\n            $element[0].id = options.element;\n              \n            $('#' + options.element).html('');\n\n            // radius is caluculated from element's width\n            var radius = $('#' + options.element).width();\n\n            // new Raphael canvas\n            var paper = new Raphael(options.element, radius, radius);\n\n            //  Make the SVG canvas fill its container - both initially and after resizing\n            $('#' + options.element + ' svg').css({ height: '100%', width: '100%'});\n\n            // setting canvas scaling on element resize\n            paper.setViewBox(0, 0, radius, radius, true );\n            paper.canvas.setAttribute('preserveAspectRatio', 'none');\n\n            // custom arc attribute for easy arc drawing :)\n            paper.customAttributes.arc = function (xloc, yloc, value, total, R) {\n                var alpha = 360 / total * value,\n                    a = (90 - alpha) * Math.PI / 180,\n                    x = xloc + R * Math.cos(a),\n                    y = yloc - R * Math.sin(a),\n                    path;\n                if (total === value) {\n                    path = [\n                        [\"M\", xloc, yloc - R],\n                        [\"A\", R, R, 0, 1, 1, xloc - 0.01, yloc - R]\n                    ];\n                } else {\n                    path = [\n                        [\"M\", xloc, yloc - R],\n                        [\"A\", R, R, 0, +(alpha > 180), 1, x, y]\n                    ];\n                }\n                return {\n                    path: path\n                };\n            };\n\n            // new image - gauge's background (if it is set)\n            if (options.image) {\n              var image = paper.image(options.image, 0, 0, radius, radius);\n            }\n\n            // adding text in the middle (if it is set)\n            if (options.text) {\n              var text = paper.text(radius / 2, radius / 2, options.text)\n                  .attr({\n                    'font-size': radius / 16,\n                    \"stroke\": options.textColor,\n                    \"fill\": options.textColor\n                });\n            }\n\n            var newArc = false,newArcBg = false;\n\n            $scope.$watch('config.value', function() {\n\n              options.value = $scope.config.value;\n\n              if (newArc) newArc.remove();\n              if (newArcBg) newArcBg.remove();\n\n              // background arc\n              newArcBg = paper.path().attr({\n                  \"stroke-opacity\": (options.opacity) ? options.opacity : \"1\",\n                  \"stroke\": options.bgArcColor,\n                  \"stroke-width\": radius * 0.1,\n                  arc: [radius / 2, radius / 2, 100, 100, radius * 0.425]\n              });\n\n              // new arc\n              newArc = paper.path().attr({\n                  \"stroke-opacity\": (options.opacity) ? options.opacity : \"1\",\n                  \"stroke\": options.arcColor,\n                  \"stroke-width\": radius * 0.15,\n                  arc: [radius / 2, radius / 2, 0, 100, radius * 0.425]\n              });\n\n              // hover effect (if it is enabled in options)\n              newArc.hover(\n                function(event) {\n                  if (options.opacity) {\n                    newArc.animate({ \"stroke-opacity\": \"1\" }, 200);\n                  }\n                },\n                function(event) {\n                  if (options.opacity) {\n                    newArc.animate({ \"stroke-opacity\": options.opacity }, 200);\n                  }\n                }\n              );\n\n              // rotating new arc\n              newArc.rotate(0, 100 ,100).animate({\n                  arc: [radius / 2, radius / 2, options.value, 100, radius * 0.425]\n              }, options.duration, options.easing);\n\n            });\n\n          }\n        };\n    });\n}(Raphael));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./scripts/misc/gauge.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************!*\
  !*** multi ./scripts/app.js ./scripts/misc/gauge.js ./scripts/controllers/about.js ./scripts/controllers/main.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./scripts/app.js */\"./scripts/app.js\");\n__webpack_require__(/*! ./scripts/misc/gauge.js */\"./scripts/misc/gauge.js\");\n__webpack_require__(/*! ./scripts/controllers/about.js */\"./scripts/controllers/about.js\");\nmodule.exports = __webpack_require__(/*! ./scripts/controllers/main.js */\"./scripts/controllers/main.js\");\n\n\n//# sourceURL=webpack:///multi_./scripts/app.js_./scripts/misc/gauge.js_./scripts/controllers/about.js_./scripts/controllers/main.js?");

/***/ })

/******/ });