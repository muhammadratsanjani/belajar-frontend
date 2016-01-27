'use strict';

describe('Controller: PhoneListCtrl', function () {

  // load the controller's module
  beforeEach(module('phonecatApp'));

  var PhoneListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneListCtrl = $controller('PhoneListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhoneListCtrl.awesomeThings.length).toBe(3);
  });
});
