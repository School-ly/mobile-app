import { Component, OnInit } from "@angular/core";
import { getString} from "tns-core-modules/http";
import { BindingOptions } from "tns-core-modules/ui/core/bindable";
import { University } from "./models";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
	selector: "Universities",
	moduleId: module.id,
	templateUrl: "./universities.component.html",
	styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
    items: Array<University>;

    constructor() { }

    ngOnInit(): void {
        this.items = [];
		getString("https://schoolly.tk/university/compact").then((r: string) => {
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