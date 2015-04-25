'use strict';

describe('Service: RomanNumeralConverter', function() {

    // load the service's module
    beforeEach(module('romanNumeralConverterApp'));

    // instantiate service
    var RomanNumeralConverter;
    beforeEach(inject(function(_RomanNumeralConverter_) {
        RomanNumeralConverter = _RomanNumeralConverter_;
    }));

    it('should be defined', function() {
        expect(RomanNumeralConverter).toBeDefined;
    });

    it('should contain RomanNumeralPairs', function() {
        expect(RomanNumeralConverter.RomanNumeralPairs).toBeDefined();
        expect(RomanNumeralConverter.RomanNumeralPairs.length).toBeGreaterThan(0);
    });

    it('should have ConvertRomanNumeral function', function() {
        expect(RomanNumeralConverter.ConvertRomanNumeral).toBeDefined();
    });

    describe('Not a number', function(){
        it('should throw error not a number', function(){
            var returnError = RomanNumeralConverter.ConvertRomanNumeral('Not a number');

            expect(returnError).toEqual('Please enter numeric data');
        })
    })

    describe('Upper and Lower Bound', function() {

        it('should throw error on upper boundary', function() {
            var upperBoundary = RomanNumeralConverter.ConvertRomanNumeral(3001);

            expect(upperBoundary).toEqual('Number out of range');
        });

        it('should throw error on lower boundary', function() {
            var lowerBoundary = RomanNumeralConverter.ConvertRomanNumeral(-1);

            expect(lowerBoundary).toEqual('Number out of range');
        });
    });

    describe('Expected Roman Numeral Values', function() {

        it('should return I', function() {
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(1);
            expect(convertedValue).toEqual('I');
        });

        it('should return V', function() {
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(5);
            expect(convertedValue).toEqual('V');
        });

        it('should return C', function() {
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(100);
            expect(convertedValue).toEqual('C');
        });

        it('should return D', function() {
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(500);
            expect(convertedValue).toEqual('D');
        });

        it('should return VI', function(){
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(6);
            expect(convertedValue).toEqual('VI');
        });

        it('should return MMM', function(){
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(3000);
            expect(convertedValue).toEqual('MMM');
        });

        it('should return LV', function(){
            var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(55);
            expect(convertedValue).toEqual('LV');
        });

        it('should return DLXXXXVIIII', function(){
          var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(599);
            expect(convertedValue).toEqual('DLXXXXVIIII');

        });

        it('should return MMXV', function(){
          var convertedValue = RomanNumeralConverter.ConvertRomanNumeral(2015);
            expect(convertedValue).toEqual('MMXV');

        });
    });

});