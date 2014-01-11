'use strict';

angular.module('theChatApp')
  .controller('MainCtrl', function ($scope, $resource) {

    var USERNAME = 'alonbt'
    var USER_TOKEN = 'm4LvVdJpXf';
    var API_BASE_URI = 'http://doobeinsite.com/test/frontend/';

    function ApiEndPoint(action) { return API_BASE_URI + action;}

    $scope.dataSuccessful = true;

    var Messages = $resource(null ,null, {
      'query':  {method:'GET', isArray:false, url: ApiEndPoint('listMessages.rest')},
      'add':  {method:'GET', url: ApiEndPoint('addMessage.rest'), params: {token: USER_TOKEN}},
    });

    $scope.messages = Messages.query();

    $scope.sendMsg = function() {
      Messages.add({username: USERNAME, message: $scope.myMessage}, function(data){
        $scope.dataSuccessful = data.successful;
        if (data.successful) {
          $scope.messages.messages.push({username: USERNAME, message: $scope.myMessage, sentat: new Date()});
        }
      });
    };


  });
