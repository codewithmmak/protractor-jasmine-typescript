import * as fs from 'fs'
import * as path from 'path'
import { browser, element, by, protractor } from "protractor";

fdescribe('CSV File Operation Tests: ', () => {

    browser.ignoreSynchronization = true; // This is for non-angular websites

    it('As a user I can read data from CSV file', function () {

        // set implicit time to 30 seconds
        browser.manage().timeouts().implicitlyWait(30000);

        // import the papaparse module
        const papa = require('papaparse');

        // import the fs module
        const fs = require('fs');

        // read the file into raw data
        const file = fs.readFileSync(path.join(process.cwd(), 'test-data', 'search-data.csv'), 'utf8');
        let results = papa.parse(file, {
            header: true
        })

        // get first row
        let firstRow = results.data[1];
        console.log("website is: " + firstRow["website"]);
        console.log("url is: " + firstRow["url"]);

        // navigate to the url
        browser.get(firstRow["url"]);

        // enter url value
        element(by.name("q")).sendKeys(firstRow["keyword"]);

        // hit enter key
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });

    it('As a user I can write data to CSV file', function () {

        // set implicit time to 30 seconds
        browser.manage().timeouts().implicitlyWait(30000);

        var myData = 'a,b,c';

        // import the fs module
        const fs = require('fs');

        fs.writeFileSync(path.join(process.cwd(), 'download-data', 'data.csv'), myData, 'utf8', function (err) {
            if (err) {
                console.log('Some error occured - file either not saved or corrupted file saved.');
            } else {
                console.log('Data is saved in file');
            }
        });

    });

    it('As a user I can read data from a website and write it to CSV file', async function () {

        // set implicit time to 30 seconds
        await browser.manage().timeouts().implicitlyWait(30000);

        // navigate to the url
        await browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');

        var row = element.all(by.repeater('dataRow in displayedCollection')).get(1);
        var cells = row.all(by.tagName('td'));

        var cellTexts = await cells.map(function (elm) {
            return elm.getText();
        });

        const expectedText = 'sale';
        await expect(cellTexts).toContain(expectedText);

        await fs.promises.writeFile(
            path.join(process.cwd(), 'download-data', 'data.csv'),
            JSON.stringify(cellTexts),
            'utf8'
        );
    })

});