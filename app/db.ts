import { Injectable } from "@angular/core";
import { getString} from "tns-core-modules/http";

@Injectable()
export class Database {

    public constructor() {
    }

    public getEvent(id: String): Promise<any> {
        return new Promise((resolve, reject) => {
            getString("https://schoolly.tk/events/" + id).then((r: string) => {
                resolve(JSON.parse(r));
            }, (e) => {
                reject(e);
            });
        });
    }

}