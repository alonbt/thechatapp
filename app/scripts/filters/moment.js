/*global moment: true */
'use strict';

angular.module('theChatApp').filter('moment', function() {
  return function(input, formatType) {
    if (moment(input)) {
      return moment(input).format(formatType);
    }
  };
});