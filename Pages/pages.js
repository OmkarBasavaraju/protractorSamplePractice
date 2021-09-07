let pages = function(){

let firstNumberField =  element(by.model('first'));
let secondNumberField =  element(by.model('second'));
let goButton =  element(by.css('[ng-click="doAddition()"]'));


this.enterFirstNumber = function(number){
    firstNumberField.sendKeys(number);
}

this.enterSecondNumber = function(number){
   secondNumberField.sendKeys(number);
}

this.clickGoButton = function(){
    goButton.click();
 }

 this.urlNavigation = function(url){
     browser.get(url)
 }

 this.verifyResult = function(number){
    let verifyNumber =  element(by.cssContainingText('ng-binding'));
    console.log(verifyNumber.getText());
    expect(verifyNumber.getText()).toEqual(number);
 }

}
module.exports = new pages();