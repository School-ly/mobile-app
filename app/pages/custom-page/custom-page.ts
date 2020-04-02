import { Page } from "tns-core-modules/ui/page";
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { NavigationHandler } from "../../modules/navigation-handler";


export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = fromObject({

    });
}

export function proceed() {
    topmost().navigate({
        moduleName: 'secondary-page/secondary-page',
        // backStackVisible must be enabled, you don't need to explicitly menthion it anyway, it is enabled by default
        backstackVisible: true
    });
    // though I am calling hideNavBar here, it won't affect at all.
    // so you need not to call it further, if you stay on the same stack.
    new NavigationHandler().hideNavBar();
}