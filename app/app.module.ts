import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeaturedComponent } from "./featured.component";
import { ItemComponent } from "./item.component";
import { BrowseComponent } from "./browse.component";
import { CategoryComponent } from "./category.component";
import { SearchComponent } from "./search.component";

import { UniversitiesComponent } from "./universities.component";
import { EventsComponent } from "./events.component";
import { EventComponent } from "./event.component";
import { HubComponent } from "./hub.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        FeaturedComponent,
        ItemComponent,
        BrowseComponent,
        CategoryComponent,
        SearchComponent,
        
        UniversitiesComponent,
        EventsComponent,
        EventComponent,
        HubComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
