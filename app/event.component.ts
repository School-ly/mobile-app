import { Component, OnInit } from "@angular/core";
import { getString} from "tns-core-modules/http";
import { Event } from "./models";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { EventData } from 'tns-core-modules/data/observable';
import { topmost } from "tns-core-modules/ui/frame/frame";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "Event",
	moduleId: module.id,
	templateUrl: "./event.component.html",
	styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
    event: Event;

    constructor (private routerExtensions: RouterExtensions, private _activatedRoute: ActivatedRoute) { }

    async ngOnInit(): Promise<Event> {
		return new Promise<Event>((resolve, reject) => {
			let eventId: string;
			this._activatedRoute.params.subscribe(params => eventId = params['id']);
			getString("https://schoolly.tk/events/" + eventId).then((r: string) => {
				console.log (r);
				let obj = JSON.parse(r)[0];
				obj.description = "asdf";
				this.event = obj;
			}, (e) => {
				console.log("Error: ");
				console.log(e);
			})
			resolve(this.event);
		});
    }

    onNavBtnTap(): void {
        this.routerExtensions.back();
	}
}