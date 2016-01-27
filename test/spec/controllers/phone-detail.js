'use strict';

describe('Controller: PhoneDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('phonecatApp'));

  var PhoneDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneDetailCtrl = $controller('PhoneDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhoneDetailCtrl.awesomeThings.length).toBe(3);
  });
});
