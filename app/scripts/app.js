'use strict';

angular.module('reardenTestApp', [])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '404.html'
      });
    $locationProvider.html5Mode(true);
  }]);
