import { Observable } from "tns-core-modules/data/observable";
import { Item } from "./shared/item";

import * as http from "http";

export class FeedViewModel extends Observable {
    items: Array<Item>;

    constructor() {
        super();
        const baseUrl = 'https://raw.githubusercontent.com/School-ly/server/master/data.json';
        http.getJSON(baseUrl)
    }
}
