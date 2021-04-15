import * as fs from 'fs'
import * as path from 'path'
import { browser, element, by, protractor } from "protractor";

import * as papa from 'papaparse';

describe('CSV File Operation Tests: ', () => {

    browser.ignoreSynchronization = true; // This is for non-angular websites

    it('As a user I can read data from CSV file', async function () {

        // set implicit time to 30 seconds
        await browser.manage().timeouts().implicitlyWait(30000);

        // read the file into raw data
        const file = await fs.promises.readFile(
            path.join(process.cwd(), 'test-data', 'search-data.csv'),
            'utf8'
        );
        
        const results = papa.parse(file, {
            header: true
        })

        // get first row
        const firstRow = results.data[1];
        console.log("website is: " + firstRow["website"]);
        console.log("url is: " + firstRow["url"]);

        // navigate to the url
        await browser.get(firstRow["url"]);

        // enter url value
        await element(by.name("q")).sendKeys(firstRow["keyword"]);

        // hit enter key
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });

    it('As a user I can write data to CSV file', async function () {

        // set implicit time to 30 seconds
        await browser.manage().timeouts().implicitlyWait(30000);
        fs.writeFileSync(
            path.join(process.cwd(), 'download-data', 'data.csv'),
            'a,b,c',
            'utf8'
        );
    });

    it('As a user I can read data from a website and write it to CSV file', async function () {

        // set implicit time to 30 seconds
        await browser.manage().timeouts().implicitlyWait(30000);

        // navigate to the url
        await browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');

        const row = element.all(by.repeater('dataRow in displayedCollection')).get(1);
        const cells = row.all(by.tagName('td'));

        const cellTexts = await cells.map(function (elm) {
            return elm.getText();
        });

        await expect(cellTexts).toContain('sale');

        await fs.promises.writeFile(
            path.join(process.cwd(), 'download-data', 'data.csv'),
            JSON.stringify(cellTexts),
            'utf8'
        );
    })

});