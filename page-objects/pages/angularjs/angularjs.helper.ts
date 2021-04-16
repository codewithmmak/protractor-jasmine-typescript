import { browser } from "protractor";

export class angularjsPageHelper {

    static async get() {
        await browser.get('https://angularjs.org/');
        await console.log('User navigated to AngularJS Website');
    }

}