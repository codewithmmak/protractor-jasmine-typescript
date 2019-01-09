import { browser, by, element, ElementFinder } from "protractor";

export class superCalculatorPageObjects {

    static get firstInputField() {
        return element(by.model('first'));
    }

    static get secondInputField() {
        return element(by.model('second'));
    }

    static selectOptionByVal(locator: ElementFinder, optionVal: string) {
        return locator.element(by.css(this.getCssForOptionValue(optionVal))).click();
    }

    static getCssForOptionValue(optionVal: string) {
        return `option[value="${optionVal}"]`;
    }

    static get goButton() {
        return element(by.id('gobutton'));
    }

    static get result() {
        return element(by.binding('latest'));
    }


}
