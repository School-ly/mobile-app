import { Observable } from "tns-core-modules/data/observable";
import { Item } from "./shared/item";


export class FeedViewModel extends Observable {
    items: Array<Item>;

    constructor() {
        super();
    }
    
}
