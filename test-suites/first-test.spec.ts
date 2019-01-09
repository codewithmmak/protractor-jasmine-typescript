import { browser } from 'protractor'

describe('First Test: ', function () {

    it('Verify page title', function () {
        browser.get('https://angularjs.org/');
        browser.getTitle().then(function (title) {
            console.log("The page title is: " + title)
            browser.sleep(5000);
        })
    });

});