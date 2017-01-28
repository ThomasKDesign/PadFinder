'use strict';

/**
 * @ngdoc function
 * @name padFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the padFinderApp
 */
/*angular.module('padFinderApp',['ngResource']);
	var MainCtrl = function($scope,'neighborhood.name' ) {  */
angular.module('padFinderApp')
  .controller('MainCtrl', function ($scope, neighborhood) {
	   $scope.city = neighborhood.query();
  });
 		


