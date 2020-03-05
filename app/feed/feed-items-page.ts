import { View } from "tns-core-modules/ui/core/view";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { NavigatedData, Page, Observable, EventData, PropertyChangeData } from "tns-core-modules/ui/page";

import { FeedViewModel } from "./feed-view-model";
import { Item } from "./shared/item";
import { getString} from "tns-core-modules/http";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const vm = new FeedViewModel();
    
        const index = Math.round(Math.random() * 1000) % 2;
        var str = index.toString();
        if (index == 0) str = "";
        getString("https://raw.githubusercontent.com/School-ly/server/master/data" + str + ".json").then((r: string) => {
            vm.set('items', JSON.parse(r));
            console.log(r);
        }, (e) => {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });
    
        vm.on("propertyChange", (args: PropertyChangeData) => {
            vm.notify(args);
        });

    page.bindingContext = vm;
}

export function onItemTap(args: ItemEventData) {
    const view = <View>args.view;
    const page = <Page>view.page;
    const tappedItem = <Item>view.bindingContext;

    page.frame.navigate({
        moduleName: "feed/feed-item-detail/feed-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
