import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";

export function onNavigatedTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = fromObject({

    });

}

export function onTextChange(args) {
    console.log("change");
}

export function onClear(args) {
    console.log("clear");
}

export function onSubmit(args) {
    console.log("submit");
}