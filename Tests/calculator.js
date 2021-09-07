
let pages = require('../Pages/pages');
let homepage = require('../Pages/pages');

describe('Verifying the functionality of calculator',function(){

    it('addition functionality',function(){

       console.log(typeof urlNavigation);
       console.log("abc");
       pages.urlNavigation("http://www.way2automation.com/angularjs-protractor/calc/");
        homepage.enterFirstNumber(3);
        pages.enterSecondNumber(4);
        pages.clickGoButton();
        pages.verifyResult(7);
        // element(by.model('first')).sendKeys("3");
        // element(by.model('second')).sendKeys("4");
        // element(by.css('[ng-click="doAddition()"]')).click();
        // element(by.cssContainingText('ng-binding', 7));
        browser.sleep(3000);
    });
});