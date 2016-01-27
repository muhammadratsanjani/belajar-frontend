'use strict';

/**
 * @ngdoc function
 * @name phonecatApp.controller:PhoneListCtrl
 * @description
 * # PhoneListCtrl
 * Controller of the phonecatApp
 */
angular.module('phonecatApp')
  .controller('PhoneListCtrl', function ($scope, PhoneServices) {

  	$scope.phones = PhoneServices.query();
  	$scope.orderProp = 'age';

    $scope.currentPage = 1;
    $scope.pageSize = 5;
    
    $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
    };
  });


 /* angular.module('phonecatApp')
  .controller('PhoneListCtrl', function ($scope, $http) {
  	
  	$http.get('phone/phones.json').success(function(data){
  		$scope.phones = data;
  	});

  	$scope.orderProp = 'age';
  });*/
