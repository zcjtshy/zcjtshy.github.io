import html5ModeConfig from './configs/html5Mode.config';
import routerConfig from './configs/router.config';

import { requireComponent, requireDirective, requireService } from './webpack-require';

const app = angular.module('soulRelics', ['ui.router'])
  .config(html5ModeConfig)
  .config(routerConfig);

const services = {
  'storiesService': requireService('stories.service'),
  'otherStoriesService': requireService('otherStories.service'),
};

Object.keys(services).forEach(name => app.service(name, services[name]));

const components = {
  'srNav':                    requireComponent('nav/nav.component'),

  'srCard':                   requireComponent('card/card.component'),

  'srFacebookShare':          requireComponent('share-buttons/facebook-share.component'),
  'srTwitterShare':           requireComponent('share-buttons/twitter-share.component'),

  'srHome':                   requireComponent('home/home.component'),
  'srSection':                requireComponent('home/section.component'),
  'srDotnav':                 requireComponent('home/dotnav.component'),
  'srCover':                  requireComponent('home/cover.component'),
  'srAbout':                  requireComponent('home/about.component'),
  'srSupport':                requireComponent('home/support.component'),
  'srContactus':              requireComponent('home/contactus.component'),

  'srStoriesPresentational':  requireComponent('stories/stories.presentational.component'),
  'srStories':                requireComponent('stories/stories.component'),
  'srOtherStories':           requireComponent('stories/otherStories.component'),
  'srStorySubmission':        requireComponent('stories/storySubmission.component'),
  'srStory':                  requireComponent('stories/story.component'),
};

// register all components
Object.keys(components).forEach((name) => app.component(name, components[name]));

const directives = {
  'collapsedGrid': requireDirective('collapsed-grid.directive'),
}

Object.keys(directives).forEach((name) => app.directive(name, directives[name]));
