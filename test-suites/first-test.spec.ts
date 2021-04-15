import { browser } from 'protractor'

describe('First Test: ', function () {

    it('Verify page title', async function () {
        browser.get('https://angularjs.org/');
        const title = await browser.getTitle()
        console.log("The page title is: " + title)
        browser.sleep(5000);
    });

});