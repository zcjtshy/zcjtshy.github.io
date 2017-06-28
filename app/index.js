import html5ModeConfig from './configs/html5Mode.config';
import routerConfig from './configs/router.config';

import storiesService from './services/stories.service';

import { requireComponent } from './webpack-require';
import { requireDirective } from './webpack-require';

const app = angular.module('soulRelics', ['ui.router'])
  .config(html5ModeConfig)
  .config(routerConfig)
  .service('storiesService', storiesService);

const components = {
  'srNav'           : requireComponent('nav/nav.component'),

  'srCard'          : requireComponent('card/card.component'),

  'srFacebookShare' : requireComponent('share-buttons/facebook-share.component'),
  'srTwitterShare'  : requireComponent('share-buttons/twitter-share.component'),

  'srHome'          : requireComponent('home/home.component'),
  'srSection'       : requireComponent('home/section.component'),
  'srDotnav'        : requireComponent('home/dotnav.component'),
  'srCover'         : requireComponent('home/cover.component'),
  'srAbout'         : requireComponent('home/about.component'),
  'srSupport'       : requireComponent('home/support.component'),
  'srContactus'     : requireComponent('home/contactus.component'),

  'srStories'       : requireComponent('stories/stories.component'),
  'srStory'         : requireComponent('stories/story.component'),
};

// register all components
Object.keys(components).forEach((name) => app.component(name, components[name]));

const directives = {
  'isotope': requireDirective('isotope.directive'),
}

Object.keys(directives).forEach((name) => app.directive(name, directives[name]));
