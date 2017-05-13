export var routerConfig = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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

  [homeState, storiesState].forEach((s) => $stateProvider.state(s));

  // by default go to home state
  $urlRouterProvider.otherwise('/home');
}];
