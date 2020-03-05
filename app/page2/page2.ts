import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { NavigationHandler } from "../modules/navigation-handler";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { Item } from "./shared/item";
import { View } from "tns-core-modules/ui/core/view";
import { ItemEventData } from "tns-core-modules/ui/list-view";


import { getString} from "tns-core-modules/http";

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    
    const index = Math.round(Math.random() * 1000) % 2;
    var str = index.toString();
    if (index == 0) str = "";
    var bindingObject = {'items': []};
    getString("https://raw.githubusercontent.com/School-ly/server/master/data" + str + ".json").then((r: string) => {
        bindingObject ['items'] = JSON.parse(r);
        //console.log(r);
        page.bindingContext = fromObject(bindingObject);
    }, (e) => {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
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

export function onItemTap(args: ItemEventData) {
    const view = <View>args.view;
    const page = <Page>view.page;
    const tappedItem = <Item>view.bindingContext;

    page.frame.navigate({
        moduleName: "page2/feed-item-detail/feed-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}