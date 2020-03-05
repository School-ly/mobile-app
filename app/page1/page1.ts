import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { NavigationHandler } from "../modules/navigation-handler"
import * as app from "tns-core-modules/application";

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;

    if (app.ios) {
        alert("Sorry, it only works with Android currently!");
    }
    page.bindingContext = fromObject({
        'text': Math.round(Math.random()*100).toString()
    });
    console.log("done");
}

export function goToPage2() {
    // simulate a navigation to page2
    new NavigationHandler().simulateNavigation("page2");
    console.log("done");
}