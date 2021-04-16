import { browser } from "protractor";
import { theInternetPageHelper } from "../page-objects/pages/the-internet/the-internet.helper";
import { commonPageHelper } from "../page-objects/common/common.helper";
import { theInternetPageConstants } from "../page-objects/pages/the-internet/the-internet.constants";
import { theInternetPageObjects } from "../page-objects/pages/the-internet/the-internet.po";

describe('The Internet Website Tests: ', () => {

    beforeEach(async () => {
        browser.waitForAngularEnabled(false); // This is false becasue we are testing non-angular app.
        await browser.manage().deleteAllCookies();
        await theInternetPageHelper.get();
    });

    it('As a user I can verify text on the page', async function () {
        await commonPageHelper.clickOnAnchorText(theInternetPageConstants.link.aBTesting);
        await commonPageHelper.verifyTextOnPage(theInternetPageConstants.pageContent.paraText);
    });

    it('As a user I can bypass Basic Auth and verify test on the page', async function () {
        await browser.navigate().to(theInternetPageConstants.link.basicAuth);
        await console.log('User bypassed Basic Auth');
        await commonPageHelper.verifyTextOnPage(theInternetPageConstants.pageContent.basicAuthPageText);
    });

    it('As a user I can check box on the page', async function () {
        await commonPageHelper.clickOnAnchorText(theInternetPageConstants.link.checkboxes);
        await commonPageHelper.verifyTextOnPage(theInternetPageConstants.pageContent.checkboxesPageText);
        await commonPageHelper.verifyCheckboxIsNotSelected();
        await commonPageHelper.clickOnCheckbox();
        await commonPageHelper.verifyCheckboxIsSelected();
    });

    it('As a user I can drag and drop element on the page', async function () {
        await commonPageHelper.clickOnAnchorText(theInternetPageConstants.link.dragAndDrop);
        await commonPageHelper.verifyTextOnPage(theInternetPageConstants.pageContent.dragAndDrop);
        await commonPageHelper.dragAndDrop();
    });

    it('As a user I can select option from drop down field', async function () {
        await commonPageHelper.clickOnAnchorText(theInternetPageConstants.link.dropDown);
        await commonPageHelper.verifyTextOnPage(theInternetPageConstants.pageContent.dropDownText);
        await commonPageHelper.selectDropDownOptionByValue(theInternetPageConstants.pageContent.dropDownOptionName);
    });

    it('As a user I can upload file', async function () {
        await commonPageHelper.clickOnAnchorText(theInternetPageConstants.link.fileUpload);
        await commonPageHelper.verifyTextOnPage(theInternetPageConstants.pageContent.fileUpload);
        await commonPageHelper.fileUpload(theInternetPageConstants.pageContent.fileName);
    });

});