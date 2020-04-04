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









var routes = [
    { path: "", redirectTo: "/(universities:universities//events:events//featured:featured//browse:browse//search:search)", pathMatch: "full" },
    { path: "universities", component: _universities_component__WEBPACK_IMPORTED_MODULE_7__["UniversitiesComponent"], outlet: "universities" },
    //{ path: "university", component: UniversityComponent, outlet: "universities" },
    { path: "item", component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], outlet: "universities" },
    { path: "events", component: _events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"], outlet: "events" },
    //{ path: "event", component: EventComponent, outlet: "events" },
    { path: "item", component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], outlet: "events" },
    { path: "featured", component: _featured_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedComponent"], outlet: "featured" },
    { path: "item", component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], outlet: "featured" },
    { path: "browse", component: _browse_component__WEBPACK_IMPORTED_MODULE_4__["BrowseComponent"], outlet: "browse" },
    { path: "category", component: _category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"], outlet: "browse" },
    { path: "item", component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], outlet: "browse" },
    { path: "search", component: _search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], outlet: "search" },
];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFZDtBQUNSO0FBQ0k7QUFDSTtBQUNKO0FBQ1k7QUFDWjtBQUVyRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLDhGQUE4RixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFFM0ksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2RUFBcUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFO0lBQ2xGLGlGQUFpRjtJQUNqRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRTtJQUVsRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlFQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUNoRSxpRUFBaUU7SUFDakUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFFNUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxRUFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0lBRTlELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUscUVBQWlCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUNwRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUU1RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlFQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtDQUNuRSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiJidW5kbGUuYzYyMGJiYWZiMzhjYTIwM2Y2ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRmVhdHVyZWRDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJvd3NlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tIFwiLi9jYXRlZ29yeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVuaXZlcnNpdGllc0NvbXBvbmVudCB9IGZyb20gXCIuL3VuaXZlcnNpdGllcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gXCIuL2V2ZW50cy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi8odW5pdmVyc2l0aWVzOnVuaXZlcnNpdGllcy8vZXZlbnRzOmV2ZW50cy8vZmVhdHVyZWQ6ZmVhdHVyZWQvL2Jyb3dzZTpicm93c2UvL3NlYXJjaDpzZWFyY2gpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcblxuICAgIHsgcGF0aDogXCJ1bml2ZXJzaXRpZXNcIiwgY29tcG9uZW50OiBVbml2ZXJzaXRpZXNDb21wb25lbnQsIG91dGxldDogXCJ1bml2ZXJzaXRpZXNcIiB9LFxuICAgIC8veyBwYXRoOiBcInVuaXZlcnNpdHlcIiwgY29tcG9uZW50OiBVbml2ZXJzaXR5Q29tcG9uZW50LCBvdXRsZXQ6IFwidW5pdmVyc2l0aWVzXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbVwiLCBjb21wb25lbnQ6IEl0ZW1Db21wb25lbnQsIG91dGxldDogXCJ1bml2ZXJzaXRpZXNcIiB9LFxuXG4gICAgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IEV2ZW50c0NvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgLy97IHBhdGg6IFwiZXZlbnRcIiwgY29tcG9uZW50OiBFdmVudENvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgeyBwYXRoOiBcIml0ZW1cIiwgY29tcG9uZW50OiBJdGVtQ29tcG9uZW50LCBvdXRsZXQ6IFwiZXZlbnRzXCIgfSxcblxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBjb21wb25lbnQ6IEZlYXR1cmVkQ29tcG9uZW50LCBvdXRsZXQ6IFwiZmVhdHVyZWRcIiB9LFxuICAgIHsgcGF0aDogXCJpdGVtXCIsIGNvbXBvbmVudDogSXRlbUNvbXBvbmVudCwgb3V0bGV0OiBcImZlYXR1cmVkXCIgfSxcblxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuICAgIHsgcGF0aDogXCJjYXRlZ29yeVwiLCBjb21wb25lbnQ6IENhdGVnb3J5Q29tcG9uZW50LCBvdXRsZXQ6IFwiYnJvd3NlXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbVwiLCBjb21wb25lbnQ6IEl0ZW1Db21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCwgb3V0bGV0OiBcInNlYXJjaFwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==