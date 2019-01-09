import { browser, by, element } from "protractor";
import { angularjsPageObjects } from "./angularjs.po";
import { angularjsPageConstants } from "./angularjs.constants";

export class angularjsPageHelper {

    static async get() {
        await browser.get('https://angularjs.org/');
        await console.log('User navigated to AngularJS Website');
    }

}