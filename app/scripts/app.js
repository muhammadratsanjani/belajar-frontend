'use strict';

/**
 * @ngdoc overview
 * @name phonecatApp
 * @description
 * # phonecatApp
 *
 * Main module of the application.
 */
angular
  .module('phonecatApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'phonecatFilters',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/phone', {
        templateUrl: 'views/phone-list.html',
        controller: 'PhoneListCtrl',
        controllerAs: 'phoneList'
      })
      .when('/phone/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'phoneDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  }, function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angularUtils-pagination/dirPagination.tpl.html');
});
