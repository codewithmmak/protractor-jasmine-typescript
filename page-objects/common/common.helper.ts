import * as path from 'path';

import { browser, by, element } from "protractor";
import { commonPageObjects } from "./common.po";
import { theInternetPageConstants } from "../pages/the-internet/the-internet.constants";

export class commonPageHelper {

    static async clickOnAnchorText(text: string) {
        await commonPageObjects.clickOnAnchorText(text).click();
        await console.log('Click on Text');
    }

    static async verifyTextOnPage(text: string) {
        const pageText = await commonPageObjects.getTextFromPage(text).getText();
        await console.log('Got text: ' + pageText);
        expect(pageText).toContain(text);
        await console.log('Verified text on page');
    }

    static async verifyTextInH3(text: string) {
        const pageText = await commonPageObjects.getTextFromH3(text).getText();
        await console.log('Got text: ' + pageText);
        expect(pageText).toEqual(text);
        await console.log('Verified text on page');
    }

    static async verifyTextInPara(text: string) {
        const pageText = await commonPageObjects.getTextFromPara(text).getText();
        await console.log('Got text: ' + pageText);
        expect(pageText).toEqual(text);
        await console.log('Verified text on page');
    }

    static async verifyPageTitle(pageTitle: string) {
        const title = await browser.getTitle();
        await console.log('Got page title: ' + title);
        expect(title).toEqual(pageTitle);
        await console.log('Verified Page Title');
    }

    static async verifyCurrentUrl(currentUrl: string) {
        const getURL = await browser.getCurrentUrl();
        await console.log('Got page url: ' + getURL);
        expect(getURL).toEqual(currentUrl);
        await console.log('Verified Current Url');
    }

    static async verifyTextInPageSource(textInPageSource: string) {
        const pageSource = await browser.getPageSource();
        expect(pageSource).toContain(textInPageSource);
        await console.log('Verified text in page source');
    }

    static async verifyCheckboxIsNotSelected() {
        const checkState = commonPageObjects.checkbox();
        expect(checkState.isSelected()).toBeFalsy();
        await console.log('Verified checkbox is not selected');
    }

    static async verifyCheckboxIsSelected() {
        const checkState = commonPageObjects.checkbox();
        expect(checkState.isSelected()).toBeTruthy();
        await console.log('Verified checkbox is selected');
    }

    static async clickOnCheckbox() {
        await commonPageObjects.checkbox().click();
        await console.log('Click on checkbox');
    }

    static async dragAndDrop() {
        await browser.actions().dragAndDrop(commonPageObjects.dragSource(), commonPageObjects.dropTarget()).perform();
        // await browser.actions().mouseMove(commonPageObjects.dragSource()).mouseDown().mouseMove(commonPageObjects.dropTarget()).mouseUp().perform();
        await console.log('Element is dragged from source and dropped to target');
        expect(commonPageObjects.droppedElement()).toBeTruthy();
        await console.log('Verified element is dropped to target');
    }

    static async selectDropDownOptionByValue(optionName: string) {
        await element(by.cssContainingText('option', optionName)).click();
        await console.log('Selected Value in Drop Down');
    }

    static async fileUpload(fileName: string) {
        const absolutePath = path.resolve(process.cwd(), theInternetPageConstants.pageContent.fileUploadPath);
        await commonPageObjects.chooseFile().sendKeys(absolutePath);
        await console.log('File is selected to upload');
        await commonPageObjects.uploadButton().click();
        await console.log('File Uploaded');
        await browser.sleep(5000);
        const text = await commonPageObjects.getTextFromPage(fileName).getText();
        expect(text).toContain(theInternetPageConstants.pageContent.fileName);
    }

}