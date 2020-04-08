import { Component, OnInit } from "@angular/core";
import { getString} from "tns-core-modules/http";
import { Event } from "./models";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { EventData } from 'tns-core-modules/data/observable';
import { topmost } from "tns-core-modules/ui/frame/frame";
import { RouterExtensions } from "nativescript-angular/router";
import { GestureEventData } from "tns-core-modules/ui/gestures";

@Component({
	selector: "Events",
	moduleId: module.id,
	templateUrl: "./events.component.html",
	styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	items: Array<Event>;
	
	constructor(private routerExtensions: RouterExtensions) {
	}

    ngOnInit(): void {
        this.items = [];
		getString("https://schoolly.tk/events/compact").then((r: string) => {
			console.log (r);
			this.items = JSON.parse(r);
		}, (e) => {
			console.log("Error: ");
			console.log(e);
		});
    }

    onTap(args: GestureEventData) {
        console.log("Tap!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
    }
}