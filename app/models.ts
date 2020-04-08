import { Injectable } from "@angular/core";
import { getString } from "tns-core-modules/http/http";

export class University
{
    
}
export interface Event {
    _id: string;
    title: string;
    place: string;
    date: string;
    photo: string;
    description: string;
}

@Injectable()
export class EventProvider {
    _id: string;
    title: string;
    place: string;
    date: string;
    photo: string;
    description: string;
    constructor(id: String)
    {
		getString("https://schoolly.tk/events/" + id).then((r: string) => {
			console.log (r);
            let event: Event = JSON.parse(r);
            this._id = event._id;
            this.title = event.title;
            this.place = event.place;
            this.date = event.date;
            this.photo = event.photo;
            this.description = event.description;
		}, (e) => {
			console.log("Error: ");
			console.log(e);
		});
    }
}