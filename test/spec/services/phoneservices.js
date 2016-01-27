'use strict';

describe('Service: PhoneServices', function () {

  // load the service's module
  beforeEach(module('phonecatApp'));

  // instantiate service
  var PhoneServices;
  beforeEach(inject(function (_PhoneServices_) {
    PhoneServices = _PhoneServices_;
  }));

  it('should do something', function () {
    expect(!!PhoneServices).toBe(true);
  });

});
