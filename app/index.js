import { html5ModeConfig } from './configs/html5Mode.config';
import { routerConfig } from './configs/router.config';

import { storiesService } from './services/stories.service';

import { cardComponent } from './components/card/card.component';

import { facebookShareComponent } from './components/share-buttons/facebook-share.component';
import { twitterShareComponent } from './components/share-buttons/twitter-share.component';

import { homeComponent } from './components/home/home.component';
import { sectionComponent } from './components/home/section.component';
import { dotnavComponent } from './components/home/dotnav.component';
import { coverComponent } from './components/home/cover.component';
import { aboutComponent } from './components/home/about.component';
import { supportComponent } from './components/home/support.component';
import { contactusComponent } from './components/home/contactus.component';

import { storiesComponent } from './components/stories/stories.component';
import { storyComponent } from './components/stories/story.component';

import { navComponent } from './components/nav/nav.component';

var app = angular.module('soulRelics', ['ui.router'])
  .config(html5ModeConfig)
  .config(routerConfig)
  .service('storiesService', storiesService);

var components = {
  'srNav'           : navComponent,
  'srHome'          : homeComponent,
  'srSection'       : sectionComponent,
  'srCover'         : coverComponent,
  'srDotnav'        : dotnavComponent,
  'srAbout'         : aboutComponent,
  'srSupport'       : supportComponent,
  'srContactus'     : contactusComponent,
  'srStories'       : storiesComponent,
  'srStory'         : storyComponent,
  'srCard'          : cardComponent,
  'srFacebookShare' : facebookShareComponent,
  'srTwitterShare'  : twitterShareComponent,
}

// register all components
Object.keys(components).forEach((name) => app.component(name, components[name]));
