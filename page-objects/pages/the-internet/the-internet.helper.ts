import { browser } from "protractor";

export class theInternetPageHelper {

    static async get() {
        await browser.get('http://the-internet.herokuapp.com/');
        await console.log('User navigated to The Internet Website');
    }

}