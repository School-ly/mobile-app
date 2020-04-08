webpackHotUpdate("bundle",{

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _featured_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./featured.component.ts");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./item.component.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./browse.component.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./category.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./search.component.ts");
/* harmony import */ var _universities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./universities.component.ts");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./events.component.ts");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./event.component.ts");










var routes = [
    { path: "", redirectTo: "/(universities:universities//item:item//events:events//featured:featured//browse:browse//search:search)", pathMatch: "full" },
    { path: "universities", component: _universities_component__WEBPACK_IMPORTED_MODULE_7__["UniversitiesComponent"], outlet: "universities" },
    { path: "events", component: _events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"], outlet: "events" },
    { path: "event", component: _event_component__WEBPACK_IMPORTED_MODULE_9__["EventComponent"], outlet: "events" },
    { path: "featured", component: _featured_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedComponent"], outlet: "featured" },
    { path: "browse", component: _browse_component__WEBPACK_IMPORTED_MODULE_4__["BrowseComponent"], outlet: "browse" },
    { path: "search", component: _search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], outlet: "search" },
    { path: "item", component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], outlet: "item" },
    { path: "category", component: _category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"], outlet: "item" },
];
/*

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
*/
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVkO0FBQ1I7QUFDSTtBQUNJO0FBQ0o7QUFDWTtBQUNaO0FBQ0Y7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSx5R0FBeUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBRXRKLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsNkVBQXFCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRTtJQUNsRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlFQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLCtEQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUM5RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHFFQUFpQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDdEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpRUFBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpRUFBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDMUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxRUFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0NBQ3JFLENBQUM7QUFDRjs7Ozs7Ozs7Ozs7O0VBWUU7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6ImJ1bmRsZS44YTM0NWJhNTU2YWUwNWE4MzBkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gXCIuL2NhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVW5pdmVyc2l0aWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXZlbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vZXZlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXZlbnRDb21wb25lbnQgfSBmcm9tIFwiLi9ldmVudC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi8odW5pdmVyc2l0aWVzOnVuaXZlcnNpdGllcy8vaXRlbTppdGVtLy9ldmVudHM6ZXZlbnRzLy9mZWF0dXJlZDpmZWF0dXJlZC8vYnJvd3NlOmJyb3dzZS8vc2VhcmNoOnNlYXJjaClcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuXG4gICAgeyBwYXRoOiBcInVuaXZlcnNpdGllc1wiLCBjb21wb25lbnQ6IFVuaXZlcnNpdGllc0NvbXBvbmVudCwgb3V0bGV0OiBcInVuaXZlcnNpdGllc1wiIH0sXG4gICAgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IEV2ZW50c0NvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgeyBwYXRoOiBcImV2ZW50XCIsIGNvbXBvbmVudDogRXZlbnRDb21wb25lbnQsIG91dGxldDogXCJldmVudHNcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBjb21wb25lbnQ6IEZlYXR1cmVkQ29tcG9uZW50LCBvdXRsZXQ6IFwiZmVhdHVyZWRcIiB9LFxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQsIG91dGxldDogXCJzZWFyY2hcIiB9LFxuICAgIHsgcGF0aDogXCJpdGVtXCIsIGNvbXBvbmVudDogSXRlbUNvbXBvbmVudCwgb3V0bGV0OiBcIml0ZW1cIiB9LFxuICAgIHsgcGF0aDogXCJjYXRlZ29yeVwiLCBjb21wb25lbnQ6IENhdGVnb3J5Q29tcG9uZW50LCBvdXRsZXQ6IFwiaXRlbVwiIH0sXG5dO1xuLypcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9odWJcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJodWJcIiwgY29tcG9uZW50OiBIdWJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwidW5pdmVyc2l0aWVzXCIsIGNvbXBvbmVudDogVW5pdmVyc2l0aWVzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IEV2ZW50c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJldmVudFwiLCBjb21wb25lbnQ6IEV2ZW50Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBjb21wb25lbnQ6IEZlYXR1cmVkQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBjb21wb25lbnQ6IEJyb3dzZUNvbXBvbmVudCB9LFxuXTtcbiovXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9