'use strict';

/**
 * @ngdoc function
 * @name padFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the padFinderApp
 */
angular.module('padFinderApp',['ngResource']);
	var MainCtrl = function($scope,'neighborhood' ) {

	//This is the callback function
    setData = function(data) {
        $scope.dataSet = data;
	}
	neighborhood.get(setData);
}
