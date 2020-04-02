import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame/frame";

export function onNavigatedTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = fromObject({

    });
}
export function show_video (args: EventData) {
    topmost().navigate({
        moduleName: "pages/VideoLessons/VideoLessons",
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}