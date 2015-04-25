'use strict';

/**
 * @ngdoc service
 * @name romanNumeralConverterApp.RomanNumeralConverter
 * @description
 * # RomanNumeralConverter
 * Service in the romanNumeralConverterApp.
 */
angular.module('romanNumeralConverterApp')
    .service('RomanNumeralConverter', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.RomanNumeralPairs = [{
            NumericValue: 1,
            RomanNumeralRepresentation: 'I',
            RomanNumeralDefinition: 'The numeral one. II is two, III is three. You seldom see IIII as 4, since IV can also mean 4, plus its shorter to write.'
        }, {
            NumericValue: 5,
            RomanNumeralRepresentation: 'V',
            RomanNumeralDefinition: 'The numeral 5. IV is 4, VI is 6, VII is 7, VIII is 8.'
        }, {
            NumericValue: 10,
            RomanNumeralRepresentation: 'X',
            RomanNumeralDefinition: 'The numeral 10. IX is 9, XI is 11, etc.'
        }, {
            NumericValue: 50,
            RomanNumeralRepresentation: 'L',
            RomanNumeralDefinition: 'The numeral 50. XL would be 40.',
        }, {
            NumericValue: 100,
            RomanNumeralRepresentation: 'C',
            RomanNumeralDefinition: "The numeral 100. Think of Century having a hundred years. C is short for the Latin word Centum, but that's not very easy to remember.",
        }, {
            NumericValue: 500,
            RomanNumeralRepresentation: 'D',
            RomanNumeralDefinition: 'The numeral 500.'
        }, {
            NumericValue: 1000,
            RomanNumeralRepresentation: 'M',
            RomanNumeralDefinition: 'The numeral 1000.'
        }];


        this.ConvertRomanNumeral = function(number) {
        	try {

        		if(number > 3000 || number < 1)
        			throw 'Number out of range';

        		if(isNaN(number))
        			throw 'Please enter numeric data';

        		var romanNumeralPairs = this.RomanNumeralPairs;
        		var resultValue = '';

        		for(var i in romanNumeralPairs) {
        			while(number >= romanNumeralPairs[i].NumericValue) {
        				resultValue += romanNumeralPairs[i].RomanNumeralRepresentation;
        				number -= romanNumeralPairs[i].NumericValue;
        			}
        		}
        		return resultValue;

        	} catch (ex) {
        		return ex.toString();
        	}
            
        };

        this.RomanNumeralPairs.reverse();

    });