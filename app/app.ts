/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from 'tns-core-modules/application';
import { NavigationHandler } from "./modules/navigation-handler"

/**
 * If a view-to-view navigation is performed on the application somewhere,
 * unhide the navigation bar on back key press.
 */
if (app.android) {
    app.android.on(app.AndroidApplication.activityBackPressedEvent, (args) => {
        new NavigationHandler().showNavBar();
    });
}

app.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
