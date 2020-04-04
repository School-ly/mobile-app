import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeaturedComponent } from "./featured.component";
import { ItemComponent } from "./item.component";
import { BrowseComponent } from "./browse.component";
import { CategoryComponent } from "./category.component";
import { SearchComponent } from "./search.component";
import { UniversitiesComponent } from "./universities.component";
import { EventsComponent } from "./events.component";
import { EventComponent } from "./event.component";
import { HubComponent } from "./hub.component";
/*
const routes: Routes = [
    { path: "", redirectTo: "/(universities:universities//events:events//featured:featured//browse:browse//search:search)", pathMatch: "full" },

    { path: "universities", component: UniversitiesComponent, outlet: "universities" },
    { path: "events", component: EventsComponent, outlet: "events" },
    { path: "event", component: EventComponent, outlet: "events" },
    { path: "featured", component: FeaturedComponent, outlet: "featured" },
    { path: "browse", component: BrowseComponent, outlet: "browse" },
    { path: "search", component: SearchComponent, outlet: "search" },
];*/

const routes: Routes = [
    { path: "", redirectTo: "/hub", pathMatch: "full" },
    { path: "hub", component: HubComponent },
    { path: "universities", component: UniversitiesComponent },
    { path: "events", component: EventsComponent },
    { path: "event", component: EventComponent },
    { path: "search", component: SearchComponent },
    { path: "featured", component: FeaturedComponent },
    { path: "browse", component: BrowseComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
