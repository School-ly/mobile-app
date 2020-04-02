import { EventData, View } from "tns-core-modules/ui/core/view";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { Event } from "../../../models/event";

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    const item = args.context as Event;
    page.bindingContext = item;
}

export function onBackButtonTap(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;

    page.frame.goBack();
}
