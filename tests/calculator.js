
let homepage = require('../pages/homepage');

describe('Demo Calculator',function(){

it('Addition Test', function(){

  //  browser.get('http://juliemr.github.io/protractor-demo/');

     homepage.get('http://juliemr.github.io/protractor-demo/');

    //element(by.model('first')).sendKeys('2');

    homepage.enterFirstNumber('5');


// element(by.model('second')).sendKeys('4');

  homepage.enterSecondNumber('4');


  // element(by.css('[ng-click="doAddition()"]')).click();

   homepage.clickGo();

  // let result =  element(by.cssContainingText('.ng-binding', '6'));

   //expect(result.getText()).toEqual('6');

   homepage.verifyResult('9');

    browser.sleep(2000);
    


});

it('Subtraction Test', function(){

  //  browser.get('http://juliemr.github.io/protractor-demo/');

     homepage.get('http://juliemr.github.io/protractor-demo/');

    //element(by.model('first')).sendKeys('2');

    homepage.enterFirstNumber('5');


// element(by.model('second')).sendKeys('4');

  homepage.enterSecondNumber('4');


  // element(by.css('[ng-click="doAddition()"]')).click();

   homepage.clickGo1();

  // let result =  element(by.cssContainingText('.ng-binding', '6'));

   //expect(result.getText()).toEqual('6');

   homepage.verifyResult('9');

    browser.sleep(2000);
    


});





});