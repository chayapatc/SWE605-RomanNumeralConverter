'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('romanNumeralConverterApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of RomanNumeralPairs to the scope', function () {
    expect(scope.RomanNumeralPairs.length).toBeGreaterThan(0);
  });

  it('should define inputNumber', function(){
    expect(scope.inputNumber).toBeDefined();
  });

  it('should define romanNumber', function(){
    expect(scope.romanNumber).toBeDefined();
  });

  it('should define convertToRoman function', function () {
    expect(scope.convertToRoman).toBeDefined();
  });

  describe('Convert to Roman number', function(){
    it('should return false', function(){
      scope.convertToRoman(null);
      expect(scope.romanNumber).toEqual('');
    });

    it('should return I', function(){
      scope.convertToRoman(1);
      expect(scope.romanNumber).toBe('I');
    });

    it('should return MMXV', function(){
      scope.convertToRoman(2015);
      expect(scope.romanNumber).toBe('MMXV');
    });
  });
});
