import { Component, OnInit } from "@angular/core";
import { getString} from "tns-core-modules/http";
import { Event } from "./models";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { EventData } from 'tns-core-modules/data/observable';
import { topmost } from "tns-core-modules/ui/frame/frame";
import { RouterExtensions } from "nativescript-angular/router";

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
			this.items = JSON.parse(r);
		}, (e) => {
			console.log("Error: ");
			console.log(e);
		});
    }

    onItemTap(args: ItemEventData) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
    }
}