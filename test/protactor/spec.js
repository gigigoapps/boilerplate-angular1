describe('slow angular', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('should contact', function() {
    //element(by.id('home')).click();
    element(by.id('gallery')).click();
    //element(by.id('gallery')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/app/gallery');
    browser.sleep(2000);
  });
  it('should gallery', function() {
    //element(by.id('home')).click();
    element(by.id('contact')).click();
    //element(by.id('gallery')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/app/contact');
    browser.sleep(2000);
  });

});
