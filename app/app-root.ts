import { EventData } from "tns-core-modules/data/observable";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { AppRootViewModel } from "./app-root-view-model";

export function onLoaded(args: EventData) {
    let appRoot = <GridLayout>args.object;
    appRoot.bindingContext = new AppRootViewModel();
}
