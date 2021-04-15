import * as fs from 'fs'
import * as path from 'path'
import { browser, element, by, protractor } from "protractor";

describe('JSON File Operation Tests: ', () => {

    browser.ignoreSynchronization = true; // This is for non-angular websites

    it('As a user I can read data from JSON file', function () {

        // set implicit time to 30 seconds
        browser.manage().timeouts().implicitlyWait(30000);

        // navigate to the url
        browser.get("https://google.com");

        // read the file into raw data
        const rawdata = fs.readFileSync(path.join(process.cwd(), 'test-data', 'test-data.json'));

        // parse the raw data into meaningful JSON format
        const data = JSON.parse(rawdata.toString());

        const urlValue = data["url"];
        console.log("URL value from JSON file is: " + urlValue);

        // enter url value
        element(by.name("q")).sendKeys(urlValue);

        // hit enter key
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

    })

});