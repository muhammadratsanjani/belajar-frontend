'use strict';

/**
 * @ngdoc function
 * @name phonecatApp.controller:PhoneDetailCtrl
 * @description
 * # PhoneDetailCtrl
 * Controller of the phonecatApp
 */
angular.module('phonecatApp')
  .controller('PhoneDetailCtrl', function ($scope, $routeParams, PhoneServices) {
  	
  	$scope.phone = PhoneServices.get({phoneId: $routeParams.phoneId}, function(phone){
  		$scope.mainImageUrl = phone.images[0];
  	});

  	$scope.setImage = function(imageUrl){
  		$scope.mainImageUrl = imageUrl;
  	};
  });


/*angular.module('phonecatApp')
  .controller('PhoneDetailCtrl', function ($scope, $routeParams,$http) {

  	$scope.phoneId = $routeParams.phoneId;
  	$http.get('phone/'+$routeParams.phoneId+'.json').success(function(data){
  		$scope.phone = data;
  		$scope.mainImageUrl = data.images[0];
  	});
  	$scope.
  	setImage = function(imageUrl){
  		$scope.mainImageUrl = imageUrl;
  	};
  });*/