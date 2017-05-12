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

var _dotnav = __webpack_require__(10);

var _cover = __webpack_require__(8);

var _about = __webpack_require__(12);

var _nav = __webpack_require__(2);

var app = angular.module('soulRelics', ['ui.router']).config(_html5Mode.html5ModeConfig).config(_router.routerConfig);

var components = {
  'srNav': _nav.navComponent,
  'srHome': _home.homeComponent,
  'srCover': _cover.coverComponent,
  'srDotnav': _dotnav.dotnavComponent,
  'srAbout': _about.aboutComponent
};

// register all components
Object.keys(components).forEach(function (name) {
  return app.component(name, components[name]);
});

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

var homeComponentController = function homeComponentController() {};

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

module.exports = "<div class=\"uk-position-relative\">\n  <sr-cover></sr-cover>\n  <sr-about></sr-about>\n\n  <div class=\"uk-position-fixed uk-position-center-right uk-position-medium\">\n    <sr-dotnav></sr-dotnav>\n  </div>\n\n  <div class=\"uk-position-fixed uk-position-top\">\n    <sr-nav></sr-nav>\n  </div>\n</div>\n";

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coverComponent = undefined;

var _coverComponent = __webpack_require__(9);

var _coverComponent2 = _interopRequireDefault(_coverComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coverComponentController = ['$interval', function ($interval) {
  var _this = this;

  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map(function (f) {
    return 'http://soulrelicsmuseum.me/' + f;
  });
  this.active = 0;
  $interval(function () {
    _this.active = (_this.active + 1) % _this.images.length;
  }, 3500);
}];

var coverComponent = exports.coverComponent = {
  template: _coverComponent2.default,
  controller: coverComponentController
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div id=\"cover\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" ng-repeat=\"image in $ctrl.images\" ng-src=\"{{image}}\" uk-cover ng-class=\"{'uk-hidden': $ctrl.active != $index}\">\n  <div class=\"uk-overlay uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-light\"\n    style=\"background: rgba(205, 102, 0, .8)\">\n    <div class=\"uk-flex\">\n      <h1 class=\"title\">SOUL RELICS</h1>\n    </div>\n    <div class=\"uk-flex\">\n      Soul Relics is an online platform on storytelling, objects and mental health.\n    </div>\n    <div class=\"uk-flex uk-width-1-2 uk-text-center uk-margin-top\">\n      It is a gallery of photos of objects and personal stories that are related to a difficult time of your lives (A period of mental ill health); and/or something that helped you work towards recovery. That object can be anything of personal significance, or/and represent institutional barrier to mental health care, etc.\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotnavComponent = undefined;

var _dotnavComponent = __webpack_require__(11);

var _dotnavComponent2 = _interopRequireDefault(_dotnavComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotnavComponentController = ['$anchorScroll', function ($anchorScroll) {
  this.scroll = function () {
    $anchorScroll();
  };
}];

var dotnavComponent = exports.dotnavComponent = {
  template: _dotnavComponent2.default,
  controller: dotnavComponentController
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-light\">\n  <ul class=\"uk-dotnav uk-dotnav-vertical\">\n    <li class=\"uk-active\"><a href=\"#home\" ng-click=\"scroll()\">Item 1</a></li>\n    <li><a href=\"#about\" ng-click=\"scroll()\">Item 2</a></li>\n    <li><a href=\"#\">Item 3</a></li>\n    <li><a href=\"#\">Item 4</a></li>\n    <li><a href=\"#\">Item 5</a></li>\n  </ul>\n</div>\n";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutComponent = undefined;

var _aboutComponent = __webpack_require__(13);

var _aboutComponent2 = _interopRequireDefault(_aboutComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aboutComponentController = ['$interval', function ($interval) {
  var _this = this;

  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map(function (f) {
    return 'http://soulrelicsmuseum.me/' + f;
  });
  this.active = 0;
  $interval(function () {
    _this.active = (_this.active + 1) % _this.images.length;
  }, 3500);
}];

var aboutComponent = exports.aboutComponent = {
  template: _aboutComponent2.default,
  controller: aboutComponentController
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" src=\"http://soulrelicsmuseum.me/aboutus.jpg\" uk-cover>\n  <div class=\"uk-overlay uk-position-cover uk-flex uk-flex-column uk-flex-left uk-light\">\n    <div class=\"uk-flex\">\n      <h1 class=\"title\">About us</h1>\n    </div>\n    <div class=\"uk-flex\">\n      We believe everyone has a story to tell.\n    </div>\n    <div class=\"uk-flex uk-width-2-3 uk-margin-top\">\n      Yet, many stories are untold, hidden, or suppressed.\n    </div>\n    <div class=\"uk-flex uk-width-2-3 uk-margin-top\">\n      Soul Relics is an online platform on storytelling, objects and mental health. We are dedicated to respond to these issues using creative media and stories.\n    </div>\n    <div class=\"uk-flex uk-width-2-3 uk-margin-top\">\nWe anchor our memories with objects. By creating an open platform for connections to form between our individual stories, and letting each person use objects to express a fragment of past/ present personal account of mental ill health and recovery, we hope to create a collective message that transcends barriers between people, and challenges the stigma surrounding mental health.\n    </div>\n    <div class=\"uk-flex uk-width-2-3 uk-margin-top\">\nUltimately, we hope the platform will capture both unique experiences and common themes. We wish to provide a new way for people to tell and understand others’ stories.\n    </div>\n    <div class=\"uk-flex uk-width-2-3 uk-margin-top\">\nIf you agree with the cause, please read our stories, and/or send yours. You can also look at the vision statement on Medium .\n    </div>\n    <div class=\"uk-flex uk-width-2-3 uk-margin-top\">\n      It is a gallery of photos of objects and personal stories that are related to a difficult time of your lives (A period of mental ill health); and/or something that helped you work towards recovery. That object can be anything of personal significance, or/and represent institutional barrier to mental health care, etc.\n    </div>\n  </div>\n</div>\n";

/***/ })
/******/ ]);