'use strict';

/**
 * @ngdoc function
 * @name romanNumeralConverterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the romanNumeralConverterApp
 */
angular.module('romanNumeralConverterApp')
  .controller('MainCtrl', function ($scope, RomanNumeralConverter) {    

    function init() {
    	$scope.RomanNumeralPairs = angular.copy(RomanNumeralConverter.RomanNumeralPairs);
    	$scope.RomanNumeralPairs.reverse();
    }

    $scope.inputNumber = null;

    $scope.romanNumber = '';
    
    $scope.convertToRoman = function(number) {
    	if(!number)
    		return '';

    	$scope.romanNumber = RomanNumeralConverter.ConvertRomanNumeral(number);
    };

    init();

  });
