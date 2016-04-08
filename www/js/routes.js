angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('start', {
      url: '/start',
      templateUrl: 'templates/start.html',
      controller: 'MainCtrl'
  })
  .state('jobs', {
    url: '/jobs',
    templateUrl: 'templates/jobs.html',
    controller: 'JobsCtrl'
  });

  $urlRouterProvider.otherwise('/start');
});
