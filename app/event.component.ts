import { Component, OnInit } from "@angular/core";
import { getString} from "tns-core-modules/http";
import { Event } from "./models";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { EventData } from 'tns-core-modules/data/observable';
import { topmost } from "tns-core-modules/ui/frame/frame";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "Event",
	moduleId: module.id,
	templateUrl: "./event.component.html",
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) {
	}
	
    ngOnInit(): void {
    }

    goBack(): void {
        this.routerExtensions.back();
	}
}