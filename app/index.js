import { html5ModeConfig } from './configs/html5Mode.config';
import { routerConfig } from './configs/router.config';

import { homeComponent } from './components/home/home.component';
import { dotnavComponent } from './components/home/dotnav.component';
import { coverComponent } from './components/home/cover.component';
import { aboutComponent } from './components/home/about.component';
import { supportComponent } from './components/home/support.component';

import { navComponent } from './components/nav/nav.component';

var app = angular.module('soulRelics', ['ui.router'])
  .config(html5ModeConfig)
  .config(routerConfig);

var components = {
  'srNav'     : navComponent,
  'srHome'    : homeComponent,
  'srCover'   : coverComponent,
  'srDotnav'  : dotnavComponent,
  'srAbout'   : aboutComponent,
  'srSupport' : supportComponent,
}

// register all components
Object.keys(components).forEach((name) => app.component(name, components[name]));
