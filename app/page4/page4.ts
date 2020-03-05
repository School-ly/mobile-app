import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";

export function onNavigatedTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = fromObject({

    });

}