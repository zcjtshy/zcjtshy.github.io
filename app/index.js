import { html5ModeConfig } from './configs/html5Mode.config';
import { routerConfig } from './configs/router.config';

import { homeComponent } from './components/home/home.component';
import { navComponent } from './components/nav/nav.component';

angular.module('soulRelics', ['ui.router'])
  .config(html5ModeConfig)
  .config(routerConfig)
  .component('srNav', navComponent)
  .component('srHome', homeComponent);
