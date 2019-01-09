import { browser, by, element } from "protractor";
import { theInternetPageObjects } from "./the-internet.po";
import { theInternetPageConstants } from "./the-internet.constants";

export class theInternetPageHelper {

    static async get() {
        await browser.get('http://the-internet.herokuapp.com/');
        await console.log('User navigated to The Internet Website');
    }

}