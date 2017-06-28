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
/******/ 	return __webpack_require__(__webpack_require__.s = 352);
/******/ })
/************************************************************************/
/******/ ({

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _html5Mode = __webpack_require__(131);

var _html5Mode2 = _interopRequireDefault(_html5Mode);

var _router = __webpack_require__(132);

var _router2 = _interopRequireDefault(_router);

var _stories = __webpack_require__(134);

var _stories2 = _interopRequireDefault(_stories);

var _webpackRequire = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = angular.module('soulRelics', ['ui.router']).config(_html5Mode2.default).config(_router2.default).service('storiesService', _stories2.default);

var components = {
  'srNav': (0, _webpackRequire.requireComponent)('nav/nav.component'),

  'srCard': (0, _webpackRequire.requireComponent)('card/card.component'),

  'srFacebookShare': (0, _webpackRequire.requireComponent)('share-buttons/facebook-share.component'),
  'srTwitterShare': (0, _webpackRequire.requireComponent)('share-buttons/twitter-share.component'),

  'srHome': (0, _webpackRequire.requireComponent)('home/home.component'),
  'srSection': (0, _webpackRequire.requireComponent)('home/section.component'),
  'srDotnav': (0, _webpackRequire.requireComponent)('home/dotnav.component'),
  'srCover': (0, _webpackRequire.requireComponent)('home/cover.component'),
  'srAbout': (0, _webpackRequire.requireComponent)('home/about.component'),
  'srSupport': (0, _webpackRequire.requireComponent)('home/support.component'),
  'srContactus': (0, _webpackRequire.requireComponent)('home/contactus.component'),

  'srStories': (0, _webpackRequire.requireComponent)('stories/stories.component'),
  'srStory': (0, _webpackRequire.requireComponent)('stories/story.component')
};

// register all components
Object.keys(components).forEach(function (name) {
  return app.component(name, components[name]);
});

var directives = {
  'collapsedGrid': (0, _webpackRequire.requireDirective)('collapsed-grid.directive')
};

Object.keys(directives).forEach(function (name) {
  return app.directive(name, directives[name]);
});

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/ycmjason/Developments/zcjtshy.github.io/node_modules/babel-polyfill/lib/index.js'");

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Whitepaint.jpg": 316,
	"./aboutblank.png": 317,
	"./aboutus.jpg": 318,
	"./backgroundgoogle.jpg": 319,
	"./book_loved_myself_enough.jpg": 320,
	"./compass.jpg": 321,
	"./contactus.jpg": 322,
	"./drum.jpg": 323,
	"./filippa.jpg": 324,
	"./flower.png": 325,
	"./glass.jpg": 326,
	"./infosupport.jpg": 327,
	"./paperclip.jpg": 328,
	"./pebble.jpg": 329,
	"./plato.jpg": 330,
	"./rainbowbackground.jpg": 331,
	"./remotecontrol.png": 332,
	"./ring.jpg": 333,
	"./rustic.jpg": 334,
	"./shareButton.png": 335,
	"./tennis.png": 336,
	"./win.jpeg": 337
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 117;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardComponent = __webpack_require__(338);

var _cardComponent2 = _interopRequireDefault(_cardComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  bindings: {
    image: '@',
    title: '@',
    meta: '@',
    hover: '@'
  },
  transclude: true,
  template: _cardComponent2.default,
  controller: function controller() {}
};

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aboutComponent = __webpack_require__(339);

var _aboutComponent2 = _interopRequireDefault(_aboutComponent);

var _webpackRequire = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _aboutComponent2.default,
  controller: function controller() {
    this.backgroundImg = (0, _webpackRequire.requireImage)('aboutus.jpg');
  }
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contactusComponent = __webpack_require__(340);

var _contactusComponent2 = _interopRequireDefault(_contactusComponent);

var _webpackRequire = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: _contactusComponent2.default,
  controller: function controller() {
    this.backgroundImg = (0, _webpackRequire.requireImage)('contactus.jpg');
  }
};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coverComponent = __webpack_require__(341);

var _coverComponent2 = _interopRequireDefault(_coverComponent);

var _webpackRequire = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coverComponentController = ['$interval', function ($interval) {
  var _this = this;

  this.images = ['pebble.jpg', 'filippa.jpg', 'remotecontrol.png', 'plato.jpg', 'aboutblank.png'].map(function (f) {
    return (0, _webpackRequire.requireImage)(f);
  });
  this.active = 0;
  $interval(function () {
    _this.active = (_this.active + 1) % _this.images.length;
  }, 3500);
}];

exports.default = {
  template: _coverComponent2.default,
  controller: coverComponentController
};

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotnavComponent = __webpack_require__(342);

var _dotnavComponent2 = _interopRequireDefault(_dotnavComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotnavComponentController = ['$anchorScroll', function ($anchorScroll) {}];

exports.default = {
  template: _dotnavComponent2.default,
  controller: dotnavComponentController
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _homeComponent = __webpack_require__(343);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeComponentController = function homeComponentController() {};

exports.default = {
  template: _homeComponent2.default,
  controller: homeComponentController
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sectionComponent = __webpack_require__(344);

var _sectionComponent2 = _interopRequireDefault(_sectionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sectionComponentController = function sectionComponentController() {};

exports.default = {
  bindings: {
    innerid: "@",
    backgroundImg: "@"
  },
  transclude: true,
  template: _sectionComponent2.default,
  controller: sectionComponentController
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _supportComponent = __webpack_require__(345);

var _supportComponent2 = _interopRequireDefault(_supportComponent);

var _webpackRequire = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supports = [{
  title: 'General Mental Health Support',
  meta: 'Organisations offering information and support on a wide range of mental health problems',
  links: {
    'Mind': 'http://www.mind.org.uk/information-support/',
    'Rethink': 'https://www.rethink.org/',
    'Big White Wall': 'https://www.bigwhitewall.com/landing-pages/landingV3.aspx?ReturnUrl=%2f',
    'Time to Change': 'http://www.time-to-change.org.uk/'
  }
}, {
  title: 'For those suffering from depression',
  links: {
    'Charlie Waller Memorial Trust': 'http://www.cwmt.org.uk/'
  }
}, {
  title: 'For those suffering from anxiety',
  links: {
    'Anxiety UK': 'https://www.anxietyuk.org.uk/'
  }
}, {
  title: 'For those suffering from Obsessive Compulsive Disorder',
  links: {
    'OCD Action': 'http://www.ocdaction.org.uk/'
  }
}, {
  title: 'For those suffering from Body Dysmorphic Disorder',
  links: {
    'Body Dysmorphic Disorder Foundation': 'http://bddfoundation.org/'
  }
}];

var supportComponentController = [function () {
  var $ctrl = this;
  $ctrl.supports = supports;
  $ctrl.backgroundImg = (0, _webpackRequire.requireImage)('infosupport.jpg');
}];

exports.default = {
  template: _supportComponent2.default,
  controller: supportComponentController
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navComponent = __webpack_require__(346);

var _navComponent2 = _interopRequireDefault(_navComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navController() {
  this.navs = {
    "Home": "home",
    "Stories": "stories"
  };
}

exports.default = {
  template: _navComponent2.default,
  controller: navController
};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _facebookShareComponent = __webpack_require__(347);

var _facebookShareComponent2 = _interopRequireDefault(_facebookShareComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var facebookShareComponentController = ['$sce', function ($sce) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.facebook_share_iframe_url = $sce.trustAsResourceUrl('https://www.facebook.com/plugins/share_button.php?href=' + encodeURIComponent($ctrl.link) + '&layout=button&size=small&mobile_iframe=true&width=59&height=20');
  };
}];

exports.default = {
  bindings: {
    link: '@'
  },
  template: _facebookShareComponent2.default,
  controller: facebookShareComponentController
};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twitterShareComponent = __webpack_require__(348);

var _twitterShareComponent2 = _interopRequireDefault(_twitterShareComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  bindings: {
    link: '@'
  },
  template: _twitterShareComponent2.default,
  controller: function controller() {}
};

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storiesComponent = __webpack_require__(349);

var _storiesComponent2 = _interopRequireDefault(_storiesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storiesComponentController = ['storiesService', function (storiesService) {
  var $ctrl = this;
  $ctrl.stories = [];
  storiesService.getStories().then(function (stories) {
    $ctrl.stories = stories;
  });
}];

exports.default = {
  template: _storiesComponent2.default,
  controller: storiesComponentController
};

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storyComponent = __webpack_require__(350);

var _storyComponent2 = _interopRequireDefault(_storyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_WORD_COUNT = 50;

var storyComponentController = ['$location', function ($location) {
  var modal_id;
  var $ctrl = this;
  $ctrl.zoomed = false;

  $ctrl.$onInit = function () {
    modal_id = 'story' + $ctrl.story.id;
    $ctrl.componentURL = window.location.href + '#' + modal_id;
    $ctrl.story.short = $ctrl.story.story.split(' ', MAX_WORD_COUNT).join(' ');
    $ctrl.story.name = $ctrl.story.name || '(Anonymous)';

    $ctrl.zoom = function () {
      $location.hash(modal_id);
      $ctrl.zoomed = true;
    };
  };

  // set timeout with 0 so that the listening is registered when all the DOM are rendered
  setTimeout(function () {
    $('#' + modal_id).on('hidden', function () {
      window.location.hash = '_';
      $ctrl.zoomed = false;
    });
    if (modal_id === $location.hash()) $('a[href="#' + modal_id + '"]').trigger('click');
  }, 0);
}];

exports.default = {
  bindings: {
    story: '='
  },
  template: _storyComponent2.default,
  controller: storyComponentController
};

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true);
}];

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    component: 'srHome'
  };

  var storiesState = {
    name: 'stories',
    url: '/stories',
    component: 'srStories'
  };

  [homeState, storiesState].forEach(function (s) {
    return $stateProvider.state(s);
  });

  // by default go to home state
  $urlRouterProvider.otherwise('/home');
}];

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackRequire = __webpack_require__(45);

var stories = [{
  id: 0,
  title: 'A Remote Control',
  name: '',
  image: 'remotecontrol.png',
  filter: [],
  story: 'Because I used to steal them when I had OCD to save the people from mind poison and keep the trajectories of their life force. I don’t do it (much) anymore – but I own over 267 remote controls – sorry!'
}, {
  id: 1,
  title: '138',
  name: 'Sarah',
  image: 'flower.png',
  filter: ['stress'],
  story: 'I had left my job due to severe stress and did not have a job to go to. I was very low and lacking in self-confidence. I started to make myself go for little local walks from my home in the middle of the city. In places where there were lots of people I felt lost, they all seemed full of purpose and direction compared to me. I didn\'t belong. Then I started to notice small pockets of nature that were managing to thrive in harsh conditions. Noticing and then photographing this nature in the urban environment gave me a focus and, looking back, I suppose was a kind of metaphor for hope in bleak surroundings. It was a kind of mindfulness that enabled me to connect again. This photograph is one of those I took during this time of a beautiful lilac blossom growing in a parking bay on the estate where I live. '
}, {
  id: 2,
  title: 'Clothes Drier',
  name: '',
  image: '',
  filter: [],
  story: 'I would put in my clothes drier (clothers rack). It symbolises my escape from an abusive relationship and my new start in discouraging myself'
}, {
  id: 3,
  title: '',
  name: 'Sarah',
  image: 'glass.jpg',
  filter: [],
  story: 'A shard of glass, from the bathroom window I smashed when I was 20. The object says more than I can put into words, because I could never really explain satisfactorily to anyone else why I did it. I felt constantly trapped at the time. I was sure my skull was contracting, slowly crushing my brain, and I needed to do something drastic to break free. I often thought about smashing windows. I’ve always been quite attached to buildings, and it seemed quite natural to regard a window as an extension of myself. So one day I put my fist through one. It was a double-glazed pane, and I still remember the ‘boom’ when the inner glass broke as the sound of freedom. My flatmates, who had to clean up the mess while I trod all over the broken glass in bare feet, were of an entirely different opinion.'
}, {
  id: 4,
  title: 'Filippa',
  name: 'Kate',
  image: 'filippa.jpg',
  filter: ['anxiety', 'depression'],
  story: 'Whenever I have a breakdown and I\'m on the verge of despair and don\'t feel like talking to anyone I want to retreat in bed into my own world and just cry in my pillow and squeeze my strawberry Filippa. The idea of calling someone seems pointless or stressful on those moments, so in that sense Filippa has "seen" more sides and states of me than some of the closest people. Just hugging a soft and happy-looking is sometimes enough for me to come back to more manageable feelings.'
}, {
  id: 5,
  title: '',
  name: '',
  image: '',
  filter: [],
  story: 'A used toothbrush on a bathroom shelf. Inside a toothbrush holder next to the toothpaste as it always is. The only thing is that this toothbrush should not be there. It should be in someone\’s bag while travelling for work.When I saw it, at 10:15 pm that night the world ended and a new one started. You see, this is how the clueless me found out that my partner of 16 years was having an affair with (a most boring) friend. He chose her. They were together for a year by then. I died. The following months after were the most difficult and painful. The first month of being on my own and all that this meant I had all the physical symptoms of the broken heart. I thought seriously constantly of how I might die of how people do die of this. \\n\\n Friends were fabulous and picked me up. Then a beautiful man took my hand and led me out of the darkness, less than a month later, the 100 years later. One day at a time, one minute at a time, one second that the pain isn’t there anymore. Now I am someone who’s more beautiful.'
}, {
  id: 6,
  title: 'Crutches',
  name: '',
  image: '',
  filter: [],
  story: 'My crutches - recovery but also now permanent. They keep me mobile but have caused other problems for my body (arthritis etc). They are a mixed blessing but they are a visible symbol of how I manage my invisible condition. They represent my normal.'
}, {
  id: 7,
  title: 'Enlightening',
  name: 'Davidinio',
  image: 'plato.jpg',
  filter: [],
  story: 'In essence, I always followed the status quo, lived by the motions, and did what every good studious medical student/youthful party goer should - study medicine, go out and get drunk, and repeat. I never had any ambition or imagination, because there was no impetus to - the path for my life was largely carved out, and there was no need for me to do anything really, as I was rather content and didn\'t see the point of wasting time and energy. \\n\\n But then I went through a very tough few months of exams, where I experienced strong feelings of anxiety, guilt, self-loathing, and the lot, and it escalated into a full state of depression mixed with anxiety. I lacked self-awareness and mental health awareness to truly understand what was going on and to be able to see the root causes of my poor state of mind. I was also thrown into a state of existentialism - repeatedly thinking \'I hate this shit. Why on Earth am I doing it? Who decided my fate? Why can I not do something else? Is this really the best my life can be?\' I felt that such analysis was vacuous and out of place, and that I would be absconded by anyone were I to voice my nihilistic utterings, especially given my good situation and blessings in life. I simply did not have a tool, or the comprehension, to commence vivaciously re-analysing my life and re-structuring it for the better. \\n\\n A lack of understanding and self-awareness led to an apathy of action. If I had truly known that what I experienced was outside the realms of tolerability perhaps I would have been poised to act differently. But I didn’t.  There was no attempt at any level to bulwark myself against the return of this chaotic phenomenon. Of course, it transpired again, and again, and again. Year on year while at university, the episodes would be darker and unbearably longer, each one worse than the last. I would only blame myself for feeling so poorly, believing that my sadness was the inevitable consequence of my many failures and imperfections, each of which I simply had to work on harder. It was an ecosystem of destructiveness permeating through my everyday life: I would be incapable of simple work or simple social interactions, and this reliably made me feel like more of a failure and an alien – and so it went on. Though I picked up knowledge about mental health from the course, it was very hard to conjoin my subjective experience with the objective understanding of medical sciences, and to truly believe that perhaps my mind may be defective in some way. Indeed, this was the hardest part of the entire ordeal, and why it took so long and required for things to get so bad. Being honest with yourself and saying that you may have a mental health problem can be very difficult, especially if you come from a background of hushed whispers and destructive taboos surrounding mentality, a robust illusion of complete autonomy over your thoughts and mood, and little exposure to genuine understanding of the mind. These experiences were reduced to a simple interpretation of life – that the universe was unpleasant and interspersed with painful things, and amidst its evils there seems to be only the bitter reality of confusion and dejection; while the conscious experience is stable, pre-determined, and hollow. I felt like I was destined to spend most of my future life feeling rather unhappy. I would cry out to question and penetrate the bleak walls of such realities, but my pleas would not be answered. My mind would respond defensively, asserting that I ought to persist with what I had been taught, and leave the ostensible emptiness of my requests behind me.  If getting to the crux of the questions did not seem to be in the realms of possibility; changing the answers that they enshrined was a fantasy tale. The solutions are simple - find that brave face, smile, and push on. Life cannot be changed. You cannot be changed. \\n\\n There was a glimmer of disgruntlement at such a tenuous conclusion. It was to become my saviour. I began realising that there were scattered happy moments that fleeted by. Rather, there were moments free of pain, where I had slither of equanimity and true joy. Yet, I did not understand how these feelings came about – nor did I have any stimulus to. Since no one talked about the landscape of subjective states, of what constitutes the good life, of the roots of happiness, I did not stumble across these ideas readily. Besides, there were so many significant and imperative objectives to focus on – becoming a doctor, becoming successful, being a good person – who has time for this self-indulgent pursuit of centring one’s attention on personal happiness when there is so much to be thinking about? \\n\\n Yet, some part of me could not be satisfied with this answer. I yearned I and searched for meaning to existence, something to cling on to, an answer, a hope. The vacuous questions regarding the objective constitutions of happiness and meaning for which I searched for yielded the same vacuous answers of complicated empty words stringed together in sentences by highbrow academics that voiced anything but candid depictions of life. \\n\\n But one day, through a series of coincidences, I picked up my first ever intellectual and philosophical book - The Republic. The beauty of the analytical, honest and in depth scrutiny of Socrates demonstrated to me the limitless potential to create and shape our vlaues, to sculpt our lives, and to live fervently with the truth. It demonstrated that the status quo, and what all of my friends and family were doing, were not necessarily correct. This catalysed two things: one, a love of knowledge, reading and understanding of the world, which to this day adds incredible joy and stimulation to my days and embellishes my projects, and indeed my life, in a meaningful and fun context. The other, a confidence in my self, and a relentless pursuit of what is true and what is good. This has prevented relapses into depressive states, as I know myself better and am more aware of my mental landscape, nurturing it gently, and directing my awareness to things that deserve it. It has also made a more moral, more unique, and more connected person. Credit to Socrates!'
}, {
  id: 8,
  title: 'Pebble',
  name: 'Steph',
  image: 'pebble.jpg',
  filter: [],
  story: 'During my first two years as an undergraduate law student, I often sat down by a field that was in the centre of the campus, watching the sun fall on the grass and on the pebbles that bordered the field. The days were hot, muggy and often hazy, an atmosphere which seemed to be reflected in the inside of my mind. Coming into my early twenties and put into a state of unrest by the changes in my life, I was feeling mind crack under mounting internal tension and anxiety. I spent hours hammering the same questions in my head, wondering who I was, what I should feel and where I should situate my sense of meaning. I tried to avoid reading and writing, feeling like the words would suffocate me. If I put pen to paper I could never be satisfied. I wrote and cancelled and re-wrote, the end product being a mess of scratch marks and scribbles which did not in any way resemble what I wanted to project. I got lost and then got lost about being lost and was often a mess. \\n\\n One day a friend of mine picked this very round pebble from the pile. “Useless as a paperweight,” he said. “But that doesn’t make it of any less worth as a stone”. I carried it around in my bag for the next few months. The feel of it, small but solid and certain in my palm, gave me comfort. Small gifts like these made me feel like little parts of myself were being restored to me, and helped me on the way towards finding the sense of assurance, composure and hopefulness I needed to move forward.'
}, {
  id: 9,
  title: 'Blank',
  name: '',
  image: 'aboutblank.png',
  filter: [],
  story: 'The title bar from the internet when I was googling methods to commit suicide'
}, {
  id: 10,
  title: 'Escape',
  name: 'Reb',
  image: 'paperclip.jpg',
  filter: ['BPD'],
  story: 'I chose this object as it\'s where my addiction to self harm started. I remember being roughly 13 years old and hiding behind a sofa in my living room crying my eyes out as I had this overwhelming emotional pain sweep over me, my palms were sweaty and I was finding it hard to breathe as my heart pounded so fast and thoughts spun around uncontrollably in my mind! \\n\\n I had this paper clip in my hand at the time and one thought went through my head which changed everything, \'what if this emotional pain could be counteracted by physical pain?\' and with that thought I unraveled the paper clip took it to my wrist and for a moment I was free I had escaped! Little knowing that in reality a whole new battle had begun.'
}, {
  id: 11,
  title: 'New beginnings',
  name: 'Sophie',
  image: 'drum.jpg',
  filter: ['eating disorders'],
  story: 'I remember many years ago I was very ill and was in denial. My parents were absolutely mad at me and could not understand me. My dad even broke part of my drum set, something that I deeply treasured. I could vividly remember that scene when he was so infuriated, shouting and threatening to throw the instrument away. I just sat there, crying with angry tears, feeling helpless and not understood. \\n\\n Months later I agreed to be voluntarily sectioned and I met one of the most friendly people I have ever met in my life in the ward. The doctors and nurses understood that my music exam was coming up so they let me to take the drum set to a quiet room in the ward to practice. Everyone said I was talented. Being well enough to attend the exam became one of my biggest motivations in life then, and I ended up with high distinction. \\n\\n Memories (painful ones and joyful ones) came back to me every time I rehearse and practise, but it has now provided a new definition and narrative to my life.'
}, {
  id: 12,
  title: 'Words from Heaven',
  name: 'John',
  image: 'book_loved_myself_enough.jpg',
  filter: [],
  story: 'This book gave me the revelation; that maybe, just maybe, I should love myself. Be kind. Stop beating up... etc. A total revelation and revolution.'
}, {
  id: 13,
  title: 'Win',
  name: 'Jennifer',
  image: 'win.jpeg',
  filter: [],
  story: 'If like me you have been involved in a few tussles over the years, can you also say that some of the worse confrontations were with those you thought understood you or those you were close to? There are at least three things that can be done when being confronted or attacked. One can stand there and be insulted, move away from the situation, or defend oneself. \\n\\n In the book of Timothy we are told, “Fight the good fight of faith, lay hold on eternal life.” What are you or I to do then? “Fight the good fight of faith.” That sounds great but, what exactly is the “fight of faith” especially when there is a sense of feeling so alone. Hence, I add YOU ARE NOT alone. Others are also fighting too, and within that there is the awareness that I or you are not the sad deceived soul who needs to get a life. Our enemy wants us to think we are the odd one out. The more this thought pattern is eliminated from our minds, the stronger we will grow. This is why the enemy has tries to keep us isolated. I am told that solitary confinement is the worst place to be in prison. In order to or us to fight we need to be strong and to attempt fighting whilst in confinement will place you only two steps backwards from where you are now. \\n\\n For most people a good fight is a fight that you win. That is why therefore we must never give up. The stakes are too high. Quitting is not an option. To quit is to admit defeat. Any soldier or those in the middle of a battle have to go through a course of training before they receive an assignment. During this time they go through a very rigorous physical and mental time of training. \\n\\n The sole purpose of this training is to get us ready and prepared to do the job, and be properly equipped to do whatever it takes to get the job done even under the harshest environments. However we are not doing physical battle such as what military soldiers do, we are doing spiritual battle and the training we do is in the spiritual realm. We have been given God’s amour to do battle, to defend ourselves from the onslaught of the enemy, and to take back what has been rightfully purchased for us. This doesn’t mean there won’t be a fight; it means we just keep on fighting with God’s spiritual weapons. This means that with our eyes of understanding, we have an answer. Be aware that the enemy will work overtime to keep us from seeing the key issue of the battle. Any fighter without endurance is a fighter who will eventually give up especially during the time of mental battle.'
}, {
  id: 14,
  title: 'A White Wall',
  name: 'Jon',
  image: 'Whitepaint.jpg',
  filter: ['paranoia'],
  story: 'Staring off into space, facing a wall, many years ago, I messed up my meditation practice on a long solitary retreat. It gave me paranoia. \\n\\n  I came away from the retreat with a nagging sense of dread. I became frightened of the prospect of anthrax attacks in London, then of sarin attacks on the underground. I was frightened of a then little known disease in Uganda, called Ebola. I was frightened about outbreaks of smallpox. Of heart attacks. Of skin cancer. Of many things. I would have months of mental quiet, when life would normally be very sunny and then the paranoia would come back and typically it would be a little worse. \\n\\n I would ask my local meditation teachers. They would be concerned and have ideas but very quickly refer me onto a more senior teacher. I\'d speak to my senior teachers and they would make suggestions and those wouldn\'t work and time would go on and I\'d get worse. I developed a bigger and bigger meditation "toolkit" for dealing with my fear and the tools would all work for a bit then they would all break. \\n\\n I moved my job from central London to South West London because, when I looked at the prevalent wind directions I thought that I\'d be safe from any airbourne toxins. We went to war against Iraq, so I moved to Newcastle. I alternated between happy times and all-pervasive fear, which could manifest as terror on retreat. \\n\\n Before moving to Newcastle I went on another month\'s solitary retreat and my teacher saw me every day in the meditation hall, looking really uptight. I asked for an interview and he looked really quite nervous - he was wiping the sweat off his bald head. \\n\\n He said, "Listen, this is a new practice I\'m giving you. Do nothing. No space, no time. Just let your Buddha nature take care of it." I thought this was absolutely crazy - I sat there with my jaw hanging open. I was struggling with my sanity and he was giving me what sounded an impossibly advanced practice to deal with the problem. \\n\\n But I resolved to try it - feeling if this doesn\'t work, how\'s even the relationship with my teacher? Will I be I completely lost? So I sat and let go - I didn\'t even let go, I literally did nothing. After years of meditation I had the skills to do that, for an extended period. \\n\\n And it worked. Sitting staring at the wall, I felt the tension be replaced by a sense of - sensibleness, groundedness. I felt my good judgment fall naturally into place. I realized for the first time how far I had been making the whole whirl of frightened thoughts spin around in my mind.\\n\\n I broke the advanced practice up with some other practices as I knew my mind could get bored - but, I felt the tension break - properly, and real confidence come in. \\n\\n On the coach back to London, the city felt safe again. In the subsequent 13 years I have barely experienced paranoia again.'
}, {
  id: 15,
  title: 'compass *trigger warning*',
  name: 'Cindy',
  image: 'compass.jpg',
  filter: ['depression', 'self-harm'],
  story: 'When I was little I\'d always run into my closet and hide away, crying about how my parents never wanted me nor liked me. There were a few times where they actually searched high and low for me. Even up to now in relationships I never feel like I\'m enough, like the reason why bad things would happen is because of something about me. Maybe cutting myself and giving physical pain would make it stop; something I always pondered. It was only a temporary fix, one I was willing to do almost anything for. I kept telling myself lies, and twisting words of what was said in the past to get myself to relapse every night. But knowing that the compass would guide me into tomorrow, knowing that if I relapsed I\'d still make it through was reliving and comforting in a twisted sense. There was nothing better than feeling the sharp edge cutting into my skin and giving me something different to cry about. The compass was always waiting on my bedside every night for when I was feeling down, it was comforting to know that this object was the only one who knows about how I\'m feeling. It would stay with me through thick and thin. No matter when it was always willing to make things just a bit better. But now it\'s stuck to me and won\'t let go. It turned into a comfort but now an addiction, turning me into a masocist that makes it so hard to turn back. I can\'t find a way out besides looking for the end. In the beginning of high school I threw you away thinking I won\'t ever need you now that I have someone else, something else to use for a fix. \\n\\n I need to fight it on my own for me to be free from it. If I rely on someone else I\'ll only fall back down and start from the beginning.'
}, {
  id: 16,
  title: 'Regret',
  name: 'Alexis Nezali',
  image: 'ring.jpg',
  filter: ['Dissociative Disorder', 'Gender Identity Disorder'],
  story: 'I shared the worst period of my life with someone who was supposed to be a kindred spirit and my soul mate, only to have them throw me aside for someone else, shattering what was left of my already fragile mind, from a life time of abuse and neglect. I\'ve had this ring for a while, it\'s supposed to represent the unity of myself and my alternate personalities, as I have dissociative personality disorder. When I found someone who was willing to love me, since I\'m transgender and that\'s a difficult thing to find, I was ready to share the rest of my life with them. I was ready to give her all of myself, my ring. She turned out to be emotionally abusive and manipulative, making me hate myself more and more for things I couldn\'t control. I did eventually marry her, and even gave her the ring, which she never wore or took any interest in. When we inevitably broke up due to her finding someone else to love, I reclaimed my ring and now keep it as a reminder to never make that mistake again. Love freely, but not blindly. Live a life without regret.'
}, {
  id: 17,
  title: 'Tennis',
  name: 'Amy',
  image: 'tennis.png',
  filter: ['grief'],
  story: 'The day I lost my Pappa the world felt like too much to handle. I was overwhelmed by shock and grief but in that time a helpline volunteer explained to me about how a tennis ball would help me feel better. On the first day grief feels like a tennis ball in a jam jar. It takes over and fills every part. After some time it feels like the tennis ball has moved into a water jug. There is more room and the greif takes slightly less of your thoughts and life. The next time you notice that the tennis ball has moved to a drawer. It is still there but other things start to come into focus. Eventually the tennis ball is just in the same room or house as you. The hurt stays the same but it becomes a smaller part of life as you learn to manage it.'
}];

// append each image with the directory
stories.forEach(function (s) {
  if (s.image) s.image = (0, _webpackRequire.requireImage)(s.image);
});

exports.default = stories;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stories = __webpack_require__(133);

var _stories2 = _interopRequireDefault(_stories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [function () {
  // Promise is used so that later one could easily change this service to call asynchronously to a server to fetch stories
  this.getStories = function () {
    return Promise.resolve(JSON.parse(JSON.stringify(_stories2.default)));
  };
}];

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9530061e57bca21b784a29a8d78a8e48.jpg";

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8129b9962b67b196a5b74b6547b4535b.png";

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0672c44fa98bf770e5cd387a7a3dc126.jpg";

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "447801da3fb1248c821ae4aec15a566f.jpg";

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ce241cb2272c43ed75abc060c8fbe21.jpg";

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f68424c9029a959dd8dc8d3d45def86.jpg";

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fac84ed46feef5e53f34a78177ca1566.jpg";

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd1f5f78e15902712cf94b1a9c4184b7.jpg";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "143cdd1ab19c07c4ab51e78003ae0b01.jpg";

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ba5533a08bb11bed18a70497707f66f.png";

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3d8e90183c2eb6b2970965e9e18e8e6d.jpg";

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "58f59a1a83e3eaa02855c8cec00df815.jpg";

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d918496c49d04c8ec0bf3670ab335e2f.jpg";

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "363cc63c9356ced0d2daee70184a1c97.jpg";

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2fc0de250208c4a454d496b9b24bbc3.jpg";

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "32b7ac8f34d566a918e707f5136ab21c.jpg";

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5106f6a2ce75d26da18dd970448b4f6.png";

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "556cece71eb1e9e8cf70a2b89e9f9925.jpg";

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a45f662c8fb3a5024fd292b42d91e6c.jpg";

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "662075355e65329cce13be5828087a41.png";

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14235741a4171aa2eebd5f847d6875b6.png";

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "034f87f5b9255f57b823b35e613a60c7.jpeg";

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<div ng-class=\"{\n  'uk-card-hover': $ctrl.hover\n}\" class=\"uk-card uk-card-default uk-margin-medium-bottom\">\n  <div class=\"uk-card-media-top\" ng-if=\"$ctrl.image\">\n    <img style=\"transform: none\" ng-src=\"{{$ctrl.image}}\">\n  </div>\n  <div class=\"uk-card-body\">\n    <h3 ng-if=\"$ctrl.title\" class=\"uk-card-title\">{{ $ctrl.title }}</h3>\n    <div ng-transclude></div>\n    <span ng-if=\"$ctrl.meta\" class=\"uk-text-meta\">{{ $ctrl.meta }}</span>\n  </div>\n</div>\n";

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<sr-section innerid=\"about\" background-img=\"{{$ctrl.backgroundImg}}\" background-color=\"rgba(255, 255, 255, 0.8)\">\n  <div class=\"uk-flex uk-flex-center\">\n    <div class=\"uk-width-2-3@l\">\n      <sr-card title=\"About us\">\n        <div class=\"uk-flex\">\n          We believe everyone has a story to tell.\n        </div>\n        <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n          Yet, many stories are untold, hidden, or suppressed.\n        </div>\n        <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n          Soul Relics is an online platform on storytelling, objects and mental health. We are dedicated to respond to these issues using creative media and stories.\n        </div>\n        <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n          We anchor our memories with objects. By creating an open platform for connections to form between our individual stories, and letting each person use objects to express a fragment of past/ present personal account of mental ill health and recovery, we hope to create a collective message that transcends barriers between people, and challenges the stigma surrounding mental health.\n        </div>\n        <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n          Ultimately, we hope the platform will capture both unique experiences and common themes. We wish to provide a new way for people to tell and understand others’ stories.\n        </div>\n        <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n          If you agree with the cause, please read our stories, and/or send yours. You can also look at the vision statement on Medium .\n        </div>\n        <div class=\"uk-flex uk-width-2-3@m uk-margin-top\">\n          It is a gallery of photos of objects and personal stories that are related to a difficult time of your lives (A period of mental ill health); and/or something that helped you work towards recovery. That object can be anything of personal significance, or/and represent institutional barrier to mental health care, etc.\n        </div>\n      </sr-card>\n    </div>\n  </div>\n</sr-section>\n";

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<sr-section innerid=\"contactus\" background-img=\"{{$ctrl.backgroundImg}}\" background-color=\"rgba(255, 255, 255, 0.8)\">\n  <div class=\"uk-flex uk-flex-center\">\n    <div class=\"uk-width-1-3@l uk-width-1@xs\">\n      <sr-card title=\"Contact us\">\n        <form action=\"https://formspree.io/soulrelicsmuseum@outlook.com\" method=\"POST\">\n          <div class=\"uk-margin\">\n            <input name=\"name\" class=\"uk-input\" type=\"text\" placeholder=\"Name\">\n          </div>\n          <div class=\"uk-margin\">\n            <input name=\"_replyto\" class=\"uk-input\" type=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"uk-margin\">\n            <input name=\"subject\" class=\"uk-input\" type=\"text\" placeholder=\"Subject\">\n          </div>\n          <div class=\"uk-margin\">\n            <textarea name=\"comment\" class=\"uk-textarea\" placeholder=\"Comment\" style=\"resize: none;\" rows=\"5\"></textarea>\n          </div>\n          <input class=\"uk-button uk-button-default\" type=\"submit\" value=\"Send\">\n        </form>\n      </sr-card>\n    </div>\n  </div>\n\n</sr-section>\n";

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" ng-repeat=\"image in $ctrl.images\" ng-src=\"{{image}}\" uk-cover ng-class=\"{'transparent': $ctrl.active != $index}\"\n  style=\"transition:opacity 1s linear;\">\n  <div class=\"uk-overlay uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-light\"\n    style=\"background: rgba(205, 102, 0, .8); margin-top: 80px\">\n    <div class=\"uk-flex uk-text-center\">\n      <h1 class=\"title\">SOUL RELICS</h1>\n    </div>\n    <div class=\"uk-flex uk-text-center\">\n      Soul Relics is an online platform on storytelling, objects and mental health.\n    </div>\n    <div class=\"uk-flex uk-width-1-2@m uk-text-center uk-margin-top\">\n      It is a gallery of photos of objects and personal stories that are related to a difficult time of your lives (A period of mental ill health); and/or something that helped you work towards recovery. That object can be anything of personal significance, or/and represent institutional barrier to mental health care, etc.\n    </div>\n    <div class=\"uk-flex uk-margin-medium-top\">\n      <a href=\"#about\" uk-icon=\"icon: chevron-down; ratio: 2\" uk-scroll></a>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div style=\"background: rgba(255, 255, 255, 0.9); padding: 1em;\">\n  <ul class=\"uk-dotnav uk-dotnav-vertical\" uk-scrollspy-nav=\"cls: uk-active; closest: li; scroll: true;\">\n    <li><a href=\"#home\">Home</a></li>\n    <li><a href=\"#about\">About</a></li>\n    <li><a href=\"#support\">Support and Information</a></li>\n    <li><a href=\"#contactus\">Contact Us</a></li>\n  </ul>\n</div>\n";

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-position-relative\">\n  <sr-cover></sr-cover>\n  <sr-about></sr-about>\n  <sr-support></sr-support>\n  <sr-contactus></sr-contactus>\n\n  <div class=\"uk-position-fixed uk-position-center-right uk-position-medium uk-visible@m\">\n    <sr-dotnav></sr-dotnav>\n  </div>\n\n  <div class=\"uk-position-fixed uk-position-top\">\n    <sr-nav></sr-nav>\n  </div>\n</div>\n";

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div ng-attr-id=\"{{$ctrl.innerid}}\" class=\"uk-cover-container\" uk-height-viewport>\n  <img class=\"margin-large-top\" ng-src=\"{{$ctrl.backgroundImg}}\" uk-cover>\n  <div class=\"uk-overlay uk-position-cover uk-dark uk-flex uk-flex-column \"\n    uk-scrollspy=\"cls:uk-animation-fade; offset-top: -80; repeat: true; delay: 100\"\n    style=\"background: {{$ctrl.backgroundColor}}\">\n    <div class=\"uk-overflow-auto\" style=\"margin-top: 80px\">\n      <div ng-transclude></div>\n    </div>\n  </div>\n</div>\n\n";

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<sr-section innerid=\"support\" background-img=\"{{$ctrl.backgroundImg}}\" background-color=\"rgba(191, 255, 242, 0.8)\">\n  <div class=\"uk-flex uk-flex-center\">\n    <div class=\"uk-width-1-2@l\">\n      <sr-card\n        title=\"Support and Information\">\n        <p>Places to find mental health support online:</p>\n        <section ng-repeat=\"support in $ctrl.supports\">\n          {{support.title}}\n          <ul class=\"uk-list\">\n            <li ng-repeat=\"(title, link) in support.links\"><a href=\"{{link}}\">{{title}}</a></li>\n          </ul>\n        </section>\n      </sr-card>\n    </div>\n  </div>\n</sr-section>\n";

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-hidden@m\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <a class=\"uk-navbar-toggle\" uk-navbar-toggle-icon uk-toggle=\"target: #offcanvas-nav\"></a>\n    </div>\n    <div class=\"uk-navbar-center\">\n      <a class=\"uk-navbar-item uk-logo\" href=\"#\">Soul Relics</a>\n    </div>\n  </nav>\n\n\n  <div id=\"offcanvas-nav\" uk-offcanvas=\"mode: push; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n\n      <ul class=\"uk-nav uk-nav-primary\">\n        <li ng-repeat=\"(name, state) in $ctrl.navs\" ui-sref-active=\"uk-active\">\n          <a ui-sref=\"{{ state }}\" uk-toggle=\"target: #offcanvas-nav\">{{ name }}</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-visible@m\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <a class=\"uk-navbar-item uk-logo\" href=\"#\">Soul Relics</a>\n      <ul class=\"uk-navbar-nav\">\n        <li ng-repeat=\"(name, state) in $ctrl.navs\" ui-sref-active=\"uk-active\">\n          <a ui-sref=\"{{ state }}\">{{ name }}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n";

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<iframe\n  src=\"{{$ctrl.facebook_share_iframe_url}}\"\n  width=\"59\"\n  height=\"20\"\n  style=\"border:none;overflow:hidden\"\n  scrolling=\"no\"\n  frameborder=\"0\"\n  allowTransparency=\"true\">\n</iframe>\n";

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<a\n  href=\"https://twitter.com/share\"\n  class=\"twitter-share-button\"\n  data-url=\"{{$ctrl.componentURL}}\"\n  data-show-count=\"false\">\n  Tweet\n</a>\n";

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 100px\">\n  <div class=\"uk-container uk-container-large\">\n    <div collapsed-grid=\"$ctrl.stories\">\n      <sr-story class=\"uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl\" ng-repeat=\"story in $ctrl.stories\" style=\"display:block;\" story=\"story\" uk-scrollspy=\"cls: uk-animation-fade; delay: 200; repeat: true;\"></sr-story>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-position-fixed uk-position-top\">\n  <sr-nav></sr-nav>\n</div>\n";

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<sr-card\n  ng-click=\"$ctrl.zoom()\"\n  href=\"#story{{$ctrl.story.id}}\"\n  style=\"cursor: pointer\"\n  uk-toggle\n  hover=\"true\"\n  image=\"{{$ctrl.story.image}}\"\n  title=\"{{$ctrl.story.title}}\"\n  meta=\"— {{$ctrl.story.name}}\">\n  <p>{{$ctrl.story.short}}</p>\n</sr-card>\n\n<div id=\"story{{$ctrl.story.id}}\" ng-class=\"{'uk-modal-full': $ctrl.story.image}\" uk-modal>\n  <div ng-if=\"$ctrl.zoomed && $ctrl.story.image\" class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-full uk-close-large\" type=\"button\" uk-close></button>\n    <div class=\"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle\" uk-grid>\n      <div class=\"uk-background-cover\" style=\"background-image: url('{{$ctrl.story.image}}');\" uk-height-viewport></div>\n      <div class=\"uk-padding-large\">\n        <h1>{{$ctrl.story.title}}</h1>\n        <p>{{$ctrl.story.story}}</p>\n        <span class=\"uk-text-meta\">— {{$ctrl.story.name}}</span>\n        <p>\n          <sr-facebook-share link=\"{{$ctrl.componentURL}}\"></sr-facebook-share>\n          <sr-twitter-share link=\"{{$ctrl.componentURL}}\"></sr-twitter-share>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div ng-if=\"$ctrl.zoomed && !$ctrl.story.image\" class=\"uk-modal-dialog uk-modal-body\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <h2 class=\"uk-modal-title\">{{$ctrl.story.title}}</h2>\n    <p>{{$ctrl.story.story}}</p>\n    <span class=\"uk-text-meta\">— {{$ctrl.story.name}}</span>\n    <p>\n      <sr-facebook-share link=\"{{$ctrl.componentURL}}\"></sr-facebook-share>\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"{{$ctrl.componentURL}}\" data-show-count=\"false\">Tweet</a><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n    </p>\n  </div>\n</div>\n";

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(115);


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./card/card.component": 118,
	"./card/card.component.html": 338,
	"./card/card.component.js": 118,
	"./home/about.component": 119,
	"./home/about.component.html": 339,
	"./home/about.component.js": 119,
	"./home/contactus.component": 120,
	"./home/contactus.component.html": 340,
	"./home/contactus.component.js": 120,
	"./home/cover.component": 121,
	"./home/cover.component.html": 341,
	"./home/cover.component.js": 121,
	"./home/dotnav.component": 122,
	"./home/dotnav.component.html": 342,
	"./home/dotnav.component.js": 122,
	"./home/home.component": 123,
	"./home/home.component.html": 343,
	"./home/home.component.js": 123,
	"./home/section.component": 124,
	"./home/section.component.html": 344,
	"./home/section.component.js": 124,
	"./home/support.component": 125,
	"./home/support.component.html": 345,
	"./home/support.component.js": 125,
	"./nav/nav.component": 126,
	"./nav/nav.component.html": 346,
	"./nav/nav.component.js": 126,
	"./share-buttons/facebook-share.component": 127,
	"./share-buttons/facebook-share.component.html": 347,
	"./share-buttons/facebook-share.component.js": 127,
	"./share-buttons/twitter-share.component": 128,
	"./share-buttons/twitter-share.component.html": 348,
	"./share-buttons/twitter-share.component.js": 128,
	"./stories/stories.component": 129,
	"./stories/stories.component.html": 349,
	"./stories/stories.component.js": 129,
	"./stories/story.component": 130,
	"./stories/story.component.html": 350,
	"./stories/story.component.js": 130
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 353;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./collapsed-grid.directive": 370,
	"./collapsed-grid.directive.js": 370
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 355;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MARGIN = 30;

exports.default = [function () {
  function link(scope, element, attrs) {
    $(element).css('position', 'relative');
    window.addEventListener('resize', function () {
      return manipulateDOM(element);
    });
    scope.$watch('data', function (c) {
      setTimeout(function () {
        manipulateDOM(element);
      }, 0);
    });
  }

  function manipulateDOM(element) {
    var $container = $(element);
    var $cells = $(element).children();
    resetCells($cells);
    // subtract cell width by the margin
    $cells.outerWidth($cells.outerWidth(true) - MARGIN);

    putCellsIntoRows($cells, getColumnCount($container, $cells));
    putCellsIntoCols($cells, getColumnCount($container, $cells));
  }

  function resetCells($cells) {
    console.log('hi');
    $cells.css('position', 'absolute').css('top', '0').css('left', '0').css('width', '').css('height', '');
  }

  function getColumnCount($container, $cells) {
    var cellWidth = $cells.first().outerWidth(true);
    var containerWidth = $container.outerWidth(true);
    return Math.floor(containerWidth / cellWidth);
  }

  function putCellsIntoRows($cells, columnCount) {
    var cellWidth = $cells.first().outerWidth(true);
    $cells.each(function (i) {
      var col = i % columnCount;
      $(this).css('left', (cellWidth + MARGIN) * col + 'px');
    });
  }

  function putCellsIntoCols($cells, columnCount) {
    var columns = [];
    for (var i = 0; i < columnCount; i++) {
      columns.push(getCellsInCol(i, $cells, columnCount));
    }

    columns.forEach(putCellsIntoCol);
  }

  function putCellsIntoCol($cells) {
    var columnHeights = $cells.map(function () {
      return $(this).outerHeight(true);
    }).toArray();

    // this accumulates the heights to obtain the tops
    var columnTops = columnHeights.reduce(function (arr, x, i) {
      return arr.concat([arr[i] + x]);
    }, [0]);

    $cells.css('top', function (i) {
      return columnTops[i] + 'px';
    });
  }

  function getCellsInCol(x, $cells, columnCount) {
    return $cells.filter(function (i) {
      return i % columnCount === x;
    });
  }

  function getCellsLeftOffsets($cells) {
    return $.unique($cells.map(function () {
      return $(this).offset().left;
    })).toArray();
  }

  return {
    restrict: 'A',
    scope: {
      data: '=collapsedGrid'
    },
    link: link
  };
}];

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requireImage = exports.requireImage = function requireImage(f) {
  return '/dist/' + __webpack_require__(117)('./' + f);
};
var requireComponent = exports.requireComponent = function requireComponent(f) {
  return __webpack_require__(353)('./' + f).default;
};
var requireDirective = exports.requireDirective = function requireDirective(f) {
  return __webpack_require__(355)('./' + f).default;
};

/***/ })

/******/ });