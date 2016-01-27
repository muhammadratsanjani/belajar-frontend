'use strict';

/**
 * @ngdoc service
 * @name phonecatApp.PhoneServices
 * @description
 * # PhoneServices
 * Factory in the phonecatApp.
 */
angular.module('phonecatApp')
  .factory('PhoneServices', function ($resource) {

    return $resource('phone/:phoneId.json', {},{
      query: {
        method:'GET', params:{phoneId:'phones'}, isArray:true
      }
    });
  });
