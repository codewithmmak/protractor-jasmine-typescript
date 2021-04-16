import * as path from 'path'
import { browser } from 'protractor'
import { Workbook, Worksheet, Row, Cell } from 'exceljs';

describe('Excel File Operations Test: ', function () {

    browser.ignoreSynchronization = true; // for non-angular websites

    it('As a user I can read a value from Excel', async function () {

        // set implicit time to 30 seconds
        await browser.manage().timeouts().implicitlyWait(30000);

        // create object for workbook
        const wb: Workbook = new Workbook();

        // read xlsx file type
        await wb.xlsx.readFile("./test-data/excel-worksheet.xlsx")

        //sheet object
        const sheet: Worksheet = wb.getWorksheet("Sheet1");

        //row objct
        const rowObject: Row = sheet.getRow(2);

        // cell object
        const cellObject: Cell = rowObject.getCell(2);

        //print
        console.log(cellObject.value);

        //use the cell value as url for navigation
        await browser.get(cellObject.toString())

    });

    it('As a user I can create Excel sheet with Headers', async function () {

        // set implicit time to 30 seconds
        await browser.manage().timeouts().implicitlyWait(30000);

        const wb = new Workbook()
        const worksheet = wb.addWorksheet('My Sheet');

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
        await wb.xlsx.writeFile(path.join(process.cwd(), 'download-data', 'excel-with-headers.xlsx'))
    });
});
