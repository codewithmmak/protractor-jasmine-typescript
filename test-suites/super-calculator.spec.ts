import { protractor, browser } from "protractor";
import { superCalculatorPageHelper } from "../page-objects/pages/super-calculator/super-calculator.helper";
import { superCalculatorPageConstants } from "../page-objects/pages/super-calculator/super-calculator.constants";
import { commonPageHelper } from "../page-objects/common/common.helper";
import { commonPageConstants } from "../page-objects/common/common.constants";

describe('Super Calculator Website Tests: ', () => {

    beforeEach(async () => {
        browser.waitForAngularEnabled(true);
        browser.manage().deleteAllCookies();
        await superCalculatorPageHelper.get();
    });

    it('As a user, I can verify Super Calculator page title', async function () {
        await commonPageHelper.verifyPageTitle(commonPageConstants.pageContent.pageTitle);
    });

    it('As a user, I can verify Super Calculator can do addition', async () => {
        await superCalculatorPageHelper.setFirstFieldValue(superCalculatorPageConstants.firstNumber.sumNumber1);
        await superCalculatorPageHelper.setSecondFieldValue(superCalculatorPageConstants.secondNumber.sumNumber2);
        await superCalculatorPageHelper.clickGoButton();
        await superCalculatorPageHelper.verifyText(superCalculatorPageConstants.result.sumResult);
    });

    it('As a user, I can verify Super Calculator can do division', async () => {
        await superCalculatorPageHelper.setFirstFieldValue(superCalculatorPageConstants.firstNumber.divisionNumber1);
        await superCalculatorPageHelper.setSecondFieldValue(superCalculatorPageConstants.secondNumber.divisionNumber2);
        await superCalculatorPageHelper.selectDropDownOptionByValue(superCalculatorPageConstants.locator.operator);
        // await superCalculatorPageHelper.selectDropDownOptionByValue(superCalculatorPageConstants.locator.operator, superCalculatorPageConstants.operator.DIVISION);
        await superCalculatorPageHelper.clickGoButton();
        await superCalculatorPageHelper.verifyText(superCalculatorPageConstants.result.divisionResult);
        await browser.sleep(5000);
    });

});