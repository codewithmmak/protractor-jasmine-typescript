import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { Workbook, Worksheet, Row, Cell } from 'exceljs';

describe('Excel File Operations Test: ', function () {

    browser.ignoreSynchronization = true; // for non-angular websites

    it('As a user I can read a value from Excel', function () {

        // set implicit time to 30 seconds
        browser.manage().timeouts().implicitlyWait(30000);

        // create object for workbook
        var wb: Workbook = new Workbook();

        // read xlsx file type
        wb.xlsx.readFile("./test-data/excel-worksheet.xlsx").then(function () {

            //sheet object
            let sheet: Worksheet = wb.getWorksheet("Sheet1");

            //row objct
            let rowObject: Row = sheet.getRow(2);

            // cell object
            let cellObject: Cell = rowObject.getCell(2);

            //print
            console.log(cellObject.value);

            //use the cell value as url for navigation
            browser.get(cellObject.toString())

        });
    });

    it('As a user I can create Excel sheet with Headers', function () {

        // set implicit time to 30 seconds
        browser.manage().timeouts().implicitlyWait(30000);

        var wb = new Workbook()
        var worksheet = wb.addWorksheet('My Sheet');

        // set the column headers
        worksheet.columns = [
            { header: 'Emp Id', key: 'id' },
            { header: 'Name', key: 'name' },
            { header: 'Designation', key: 'desig' },
            { header: 'Gender', key: 'gender' },
        ];

        // add rows
        worksheet.addRow({ id: 1, name: 'Sam', desig: 'QA Engineer', gender: 'Male' });
        worksheet.addRow({ id: 2, name: 'Robert', desig: 'Senior QA Engineer', gender: 'Male' });

        // write the file to local system
        wb.xlsx.writeFile('./download-data/excel-with-headers.xlsx')
    });
});
