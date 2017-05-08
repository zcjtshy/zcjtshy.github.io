/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _html5Mode = __webpack_require__(7);

var _router = __webpack_require__(3);

var _home = __webpack_require__(1);

var _nav = __webpack_require__(2);

angular.module('soulRelics', ['ui.router']).config(_html5Mode.html5ModeConfig).config(_router.routerConfig).component('srNav', _nav.navComponent).component('srHome', _home.homeComponent);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeComponent = undefined;

var _homeComponent = __webpack_require__(4);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function homeComponentController() {
  this.activeImage = 'http://soulrelicsmuseum.me/pebble.jpg';
}

var homeComponent = exports.homeComponent = {
  template: _homeComponent2.default,
  controller: homeComponentController
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navComponent = undefined;

var _navComponent = __webpack_require__(5);

var _navComponent2 = _interopRequireDefault(_navComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navController() {
  this.navs = {
    "Home": "home",
    "Stories": "stories"
  };
}

var navComponent = exports.navComponent = {
  template: _navComponent2.default,
  controller: navController
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var routerConfig = exports.routerConfig = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    component: 'srHome'
  };

  [homeState].forEach(function (s) {
    return $stateProvider.state(s);
  });

  // by default go to home state
  $urlRouterProvider.otherwise('/home');
}];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container\">\n  <div class=\"uk-inline\">\n      <img ng-src=\"{{$ctrl.activeImage}}\">\n      <div class=\"uk-overlay uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light\"\n        style=\"background: rgba(205, 102, 0, 0.8)\">hello</div>\n  </div>\n</div>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-hidden@m\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <a class=\"uk-navbar-toggle\" uk-navbar-toggle-icon uk-toggle=\"target: #offcanvas-nav\"></a>\n    </div>\n    <div class=\"uk-navbar-center\">\n      <a class=\"uk-navbar-item uk-logo\" href=\"#\">Soul Relics</a>\n    </div>\n  </nav>\n\n\n  <div id=\"offcanvas-nav\" uk-offcanvas=\"mode: push; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n\n      <ul class=\"uk-nav uk-nav-primary\">\n        <li ng-repeat=\"(name, state) in $ctrl.navs\" ui-sref-active=\"uk-active\">\n          <a ui-sref=\"{{ state }}\" uk-toggle=\"target: #offcanvas-nav\">{{ name }}</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-visible@m\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <a class=\"uk-navbar-item uk-logo\" href=\"#\">Soul Relics</a>\n      <ul class=\"uk-navbar-nav\">\n        <li ng-repeat=\"(name, state) in $ctrl.navs\" ui-sref-active=\"uk-active\">\n          <a ui-sref=\"{{ state }}\">{{ name }}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var html5ModeConfig = exports.html5ModeConfig = ['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true);
}];

/***/ })
/******/ ]);