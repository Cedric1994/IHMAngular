'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */


angular.module('showcaseApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('aboutBDD.json')
      .then(function (res) {
        $scope.infoAbout = res.data['infoAbout'];
        $scope.facebook = res.data['facebook'];
        $scope.twitter = res.data['twitter'];
        $scope.linkln = res.data['linkln'];
      });

  });
