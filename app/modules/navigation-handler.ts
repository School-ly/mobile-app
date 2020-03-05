import * as app from "tns-core-modules/application";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { AppRootViewModel } from "../app-root-view-model";
import { topmost } from "tns-core-modules/ui/frame";

/**
 * This class contains the helper functions needed for
 * view-to-view navigation. If you notice you'll see that there
 * are two types of navigation in Bottom Navigation. One is, using the
 * menus presented it navigation bar itself, and the other one is a secondary
 * navigation within one of the primary menus, e.g. contact list to send message. The
 * navigation bar should be hidden during this type of navigation.
 */
export class NavigationHandler {

	/**
	 * Hide the navigation bar during a view-to-view navigation
	 */
    public hideNavBar() {
        // if the navigation stack is not empty then the navigation bar is hidden already
        if (topmost().backStack.length >= 1) {
            return;
        }
        let rootView = <GridLayout>app.getRootView();
        let navBar = <GridLayout>rootView.getChildAt(1);
        navBar.set("visibility", "collapsed");
    }

	/**
	 * Show the navigation bar on back key press from view-to-view navigation
	 */
    public showNavBar() {
        // do not unhide the navigation bar until only one activity left in the stack
        if (topmost().backStack.length > 1) {
            return;
        }
        let rootView = <GridLayout>app.getRootView();
        let navBar = <GridLayout>rootView.getChildAt(1);
        navBar.set("visibility", "visible");
    }

	/**
	 * This method simulates a navigation to the specified menu using the core
	 * navigation method. Use this method for view-to-view navigation.
	 * @param string The menu to be navigated, expects an ID
	 */
    public simulateNavigation(menu: string) {
        let rootView = <GridLayout>app.getRootView();
        let navBar = <GridLayout>rootView.getChildAt(1);
        let tappedView = <StackLayout>navBar.getViewById(menu);
        // initiate a tap event 
        new AppRootViewModel().navigate({
            eventName: "tap",
            object: tappedView
        });
    }
}