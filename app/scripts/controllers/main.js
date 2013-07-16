'use strict';

angular.module('reardenTestApp')
  .controller('MainCtrl', ['$scope', '$route',function ($scope, $route) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
