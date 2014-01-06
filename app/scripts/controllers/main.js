'use strict';

angular.module('theChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.sendMsg = function() {
      console.log($scope.myMessage);
    };
  });
