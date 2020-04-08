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
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./browse.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./search.component.ts");
/* harmony import */ var _universities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./universities.component.ts");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./events.component.ts");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./event.component.ts");








var routes = [
    { path: "", redirectTo: "/(universities:universities//events:events//featured:featured//browse:browse//search:search)", pathMatch: "full" },
    { path: "universities", component: _universities_component__WEBPACK_IMPORTED_MODULE_5__["UniversitiesComponent"], outlet: "universities" },
    { path: "events", component: _events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"], outlet: "events" },
    { path: "event", component: _event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"], outlet: "events" },
    { path: "featured", component: _featured_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedComponent"], outlet: "featured" },
    { path: "browse", component: _browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"], outlet: "browse" },
    { path: "search", component: _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], outlet: "search" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRWQ7QUFFSjtBQUVBO0FBQ1k7QUFDWjtBQUNGO0FBR25ELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsOEZBQThGLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUUzSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDZFQUFxQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUU7SUFDbEYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpRUFBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrREFBYyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDOUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxRUFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0NBQ25FLENBQUM7QUFDRjs7Ozs7Ozs7Ozs7O0VBWUU7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6ImJ1bmRsZS41ZjJmZTFkMDliNzg0MzViZDZiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gXCIuL2NhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVW5pdmVyc2l0aWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXZlbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vZXZlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXZlbnRDb21wb25lbnQgfSBmcm9tIFwiLi9ldmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh1YkNvbXBvbmVudCB9IGZyb20gXCIuL2h1Yi5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi8odW5pdmVyc2l0aWVzOnVuaXZlcnNpdGllcy8vZXZlbnRzOmV2ZW50cy8vZmVhdHVyZWQ6ZmVhdHVyZWQvL2Jyb3dzZTpicm93c2UvL3NlYXJjaDpzZWFyY2gpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcblxuICAgIHsgcGF0aDogXCJ1bml2ZXJzaXRpZXNcIiwgY29tcG9uZW50OiBVbml2ZXJzaXRpZXNDb21wb25lbnQsIG91dGxldDogXCJ1bml2ZXJzaXRpZXNcIiB9LFxuICAgIHsgcGF0aDogXCJldmVudHNcIiwgY29tcG9uZW50OiBFdmVudHNDb21wb25lbnQsIG91dGxldDogXCJldmVudHNcIiB9LFxuICAgIHsgcGF0aDogXCJldmVudFwiLCBjb21wb25lbnQ6IEV2ZW50Q29tcG9uZW50LCBvdXRsZXQ6IFwiZXZlbnRzXCIgfSxcbiAgICB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgY29tcG9uZW50OiBGZWF0dXJlZENvbXBvbmVudCwgb3V0bGV0OiBcImZlYXR1cmVkXCIgfSxcbiAgICB7IHBhdGg6IFwiYnJvd3NlXCIsIGNvbXBvbmVudDogQnJvd3NlQ29tcG9uZW50LCBvdXRsZXQ6IFwiYnJvd3NlXCIgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50LCBvdXRsZXQ6IFwic2VhcmNoXCIgfSxcbl07XG4vKlxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2h1YlwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImh1YlwiLCBjb21wb25lbnQ6IEh1YkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ1bml2ZXJzaXRpZXNcIiwgY29tcG9uZW50OiBVbml2ZXJzaXRpZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZXZlbnRzXCIsIGNvbXBvbmVudDogRXZlbnRzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImV2ZW50XCIsIGNvbXBvbmVudDogRXZlbnRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGNvbXBvbmVudDogRmVhdHVyZWRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYnJvd3NlXCIsIGNvbXBvbmVudDogQnJvd3NlQ29tcG9uZW50IH0sXG5dO1xuKi9cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=