import { Observable, EventData } from "tns-core-modules/data/observable";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout"
import * as app from "tns-core-modules/application";

export class AppRootViewModel extends Observable {

    private static previousMenu: StackLayout;

    constructor() {
        super();
    }

	/**
	 * Controls the primary navigation of the application
	 * @param args Tapped menu context
	 */
    public navigate(args: EventData) {
        let tappedMenu = <StackLayout>args.object;
        let rootView = <GridLayout>app.getRootView();
        let pageContainer = <GridLayout>rootView.getChildAt(1);

        // prevent consecutive navigation to the same page
        if (tappedMenu == AppRootViewModel.previousMenu) {
            return;
        } else {
            AppRootViewModel.previousMenu = tappedMenu;
        }

        // reset formatting
        pageContainer.eachChildView((view) => {
            view.set("class", "bottom-nav-btn");
            return true;
        });

        topmost().navigate({
            moduleName: `pages/${tappedMenu.id}/${tappedMenu.id}`,
            clearHistory: true,
        });
        tappedMenu.set("class", "bottom-nav-btn bottom-nav-btn-active");
    }
}