import { protractor, browser } from "protractor";
import { angularjsPageHelper } from "../page-objects/pages/angularjs/angularjs.helper";
import { angularjsPageObjects } from "../page-objects/pages/angularjs/angularjs.po";
import { commonPageHelper } from "../page-objects/common/common.helper";
import { angularjsPageConstants } from "../page-objects/pages/angularjs/angularjs.constants";

describe('AngularJS Website Tests: ', () => {

    it('As a user I can navigate to AnglarJS Website', async function () {
        await browser.get('https://angularjs.org/');
        await console.log('User is navigated to AngularJS Website');
    });

    it('As a user I can Maximize Browser Window', async function () {
        await browser.get('https://angularjs.org/');
        await console.log('User is navigated to AngularJS Website');
        await browser.manage().window().maximize();
        await console.log('Browser window is miximized');
    });

    it('As a user I can get Browser Window size', async function () {
        await browser.get('https://angularjs.org/');
        await console.log('User is navigated to AngularJS Website');
        var browserSize = await browser.manage().window().getSize().then(function (windowSize) {
            // promise resolving block
            console.log('Browser window width: ' + windowSize.width);
            console.log('Browser window height: ' + windowSize.height);
        });
    });

    it('As a user I can Set Window Position', async function () {
        await browser.get('https://angularjs.org/');
        await console.log('User is navigated to AngularJS Website');
        await browser.manage().window().setPosition(100, 200);
        await console.log('Window Position is set');
        // reset the position
        await browser.manage().window().maximize();
        await console.log('Browser window is miximized');
    });

    it('As a user I can Get Window Position', async function () {
        await browser.get('https://angularjs.org/');
        await console.log('User is navigated to AngularJS Website');
        await browser.manage().window().getPosition().then(function (windowLocation) {
            console.log('Browser x postion: ' + windowLocation.x);
            console.log('Browser y postion: ' + windowLocation.y);
        });
    });

    it('As a user I can verify URL', async function () {
        await angularjsPageHelper.get();
        await commonPageHelper.verifyCurrentUrl(angularjsPageConstants.content.URL);
    });

    it('As a user I can verify Page Title', async function () {
        await angularjsPageHelper.get();
        await commonPageHelper.verifyPageTitle(angularjsPageConstants.content.pageTitle);
    });

    it('As a user I can verify text present in Page Source', async function () {
        await angularjsPageHelper.get();
        await commonPageHelper.verifyTextInPageSource(angularjsPageConstants.content.whyAngularJS);
    });

    it('As a user I can navigate AngularJS Website', async function () {
        await angularjsPageHelper.get();
        await browser.navigate().to(angularjsPageConstants.content.tutorialUrl);
        await console.log('User is navigated to Tutorial Url');
        await commonPageHelper.verifyPageTitle(angularjsPageConstants.content.tutorialPageTitle);
        await browser.navigate().back();
        await console.log('User is navigated back to AngularJS Url');
        await commonPageHelper.verifyPageTitle(angularjsPageConstants.content.pageTitle);
        await browser.navigate().forward();
        await console.log('User is navigated forward to Tutorial Url');
        await commonPageHelper.verifyPageTitle(angularjsPageConstants.content.tutorialPageTitle);
        await browser.navigate().refresh();
        await console.log('User refresh Tutorial page');
    });

})

