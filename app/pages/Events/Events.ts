import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { NavigationHandler } from "../../modules/navigation-handler";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { Event } from "../../models/Event";
import { View } from "tns-core-modules/ui/core/view";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

import { getString} from "tns-core-modules/http";

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    
    const index = Math.round(Math.random() * 1000) % 2;
    var str = index.toString();
    if (index == 0) str = "";
    var bindingObject = {'items': []};
    getString("https://schoolly.tk/events/compact").then((r: string) => {
        bindingObject ['items'] = JSON.parse(r);
        page.bindingContext = fromObject(bindingObject);
    }, (e) => {
        console.log("Error: ");
        console.log(e);
        page.bindingContext = fromObject(bindingObject);
    });
}

export function goToCustomPage() {
    // performing a secondary navigation
    topmost().navigate({
        moduleName: "custom-page/custom-page",
    });
    // once you called this method once, you don't need to call it further in the same stack
    new NavigationHandler().hideNavBar();
}

export function showItem(args:EventData) {
    const SL = <StackLayout>args.object;
    const item = <Event>SL.bindingContext;

    topmost().navigate({
        moduleName: "pages/Events/event/event",
        context: item,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}