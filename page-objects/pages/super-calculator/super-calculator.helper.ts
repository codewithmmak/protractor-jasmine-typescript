import { browser, by, element } from "protractor";
import { superCalculatorPageObjects } from "./super-calculator.po";
import { superCalculatorPageConstants } from "./super-calculator.constants";

export class superCalculatorPageHelper {

    static async get() {
        await browser.get('https://juliemr.github.io/protractor-demo/');
        await console.log('User navigated to Super Calculator page');
    }

    static async setFirstFieldValue(firstValue: string) {
        await superCalculatorPageObjects.firstInputField.sendKeys(firstValue);
        await console.log('User entered first value: ' + firstValue);
    }

    static async setSecondFieldValue(secondValue: string) {
        await superCalculatorPageObjects.secondInputField.sendKeys(secondValue);
        await console.log('User entered second value: ' + secondValue);
    }

    static async clickGoButton() {
        await superCalculatorPageObjects.goButton.click();
        await console.log('User clicked on Go button');
    }

    static async verifyText(result: string) {
        const value = await superCalculatorPageObjects.result.getText();
        await console.log('Got Text: ' + value);
        expect(value).toEqual(result);
        await console.log('Verified Text');
    }

    static async selectDropDownOptionByValue(loc: string) {
        await element(by.model(loc)).$('[value="DIVISION"]').click();
        await console.log('Selected Value in Drop Down');
    }

}