import { browser, by, element } from "protractor";

export class commonPageObjects {

    static getTextFromPage(text: string) {
        const loc = "//*[contains(text(),'" + text + "')]";
        return element(by.xpath(loc));
    }

    /**
     * Get text from H3 
     * @param h3 
     */
    static getTextFromH3(text: string) {
        const loc = "//h3[contains(text(),'" + text + "')]";
        return element(by.xpath(loc));
    }

    /**
     * Get text from paragraph
     * @param text 
     */
    static getTextFromPara(text: string) {
        const loc = "//p[contains(text(),'" + text + "')]";
        return element(by.xpath(loc));
    }

    static clickOnAnchorText(text: string) {
        const loc = "//a[contains(text(),'" + text + "')]";
        return element(by.xpath(loc));
    }

    static clickOnLinkText(text: string) {
        const loc = "//a[contains(text(),'" + text + "')]";
        return element(by.xpath(loc));
    }

    static checkbox() {
        const loc = "//input[@type='checkbox']";
        // const loc = "//input[@type='checkbox']/(text(),'" + optionText + "')]";
        return element(by.xpath(loc));
    }

    static dragSource() {
        const loc = "column-a";
        return element(by.id(loc));
    }

    static dropTarget() {
        const loc = "column-b";
        return element(by.id(loc));
    }

    static droppedElement() {
        const loc = "//div[@id='column-b']/header[contains(text(),'A')]";
        return element(by.xpath(loc));
    }

    static chooseFile() {
        const loc = "input[type='file']";
        return element(by.css(loc));
    }

    static uploadButton() {
        const loc = "file-submit";
        return element(by.id(loc));
    }

    static uploadedFile(fileName: string) {
        const loc = "//div[@id='uploaded-files' and contains(text(),'" + fileName + "')]";
        console.log('The loc is: ' + loc)
        return browser.driver.findElement(by.xpath(loc));
    }


}
