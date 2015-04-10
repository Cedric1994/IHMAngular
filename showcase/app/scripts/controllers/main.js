'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('mainBDD.json')
      .then(function(res){

        $scope.navObjectif = res.data['navbar']['objectif'];
        $scope.navProjet = res.data['navbar']['projet'];
        $scope.navParcours = res.data['navbar']['parcours'];

        $scope.pageTitle = res.data['pageTitle']
        $scope.welcome = res.data['home']['welcome'];
        $scope.welcomeMessage = res.data['home']['messageWelcolme'];
        $scope.continuer = res.data['home']['continue'];

        $scope.objectifTitle = res.data['objectifs']['title'];
        $scope.objectifCatchPhrase = res.data['objectifs']['catchPhrase'];
        $scope.objectifsItems = res.data['objectifs']['items'];

        $scope.parcoursTitle = res.data['parcours']['title'];
        $scope.parcoursCatchPhrase = res.data['parcours']['catchPhrase'];
        $scope.parcoursItems = res.data['parcours']['items'];

      });

  });
