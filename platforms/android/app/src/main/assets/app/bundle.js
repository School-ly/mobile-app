require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

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
    { path: "", redirectTo: "/(universities:universities//events:events//featured:featured//browse:browse//search:search)", pathMatch: "full" },
    { path: "universities", component: _universities_component__WEBPACK_IMPORTED_MODULE_7__["UniversitiesComponent"], outlet: "universities" },
    { path: "events", component: _events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"], outlet: "events" },
    { path: "event/:id", component: _event_component__WEBPACK_IMPORTED_MODULE_9__["EventComponent"], outlet: "events" },
    { path: "featured", component: _featured_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedComponent"], outlet: "featured" },
    { path: "item", component: _item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], outlet: "featured" },
    { path: "browse", component: _browse_component__WEBPACK_IMPORTED_MODULE_4__["BrowseComponent"], outlet: "browse" },
    { path: "category", component: _category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"], outlet: "browse" },
    { path: "search", component: _search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], outlet: "search" },
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



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<BottomNavigation selectedIndex=\"0\">\n\n    <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->\n    <TabStrip>\n        <TabStripItem>\n            <Label text=\"Universities\"></Label>\n            <!-- <Image src=\"font://&#xf015;\" class=\"fas\"></Image> -->\n        </TabStripItem>\n        <TabStripItem class=\"special\">\n            <Label text=\"Events\"></Label>\n            <!-- <Image src=\"font://&#xf007;\" class=\"fas\"></Image> -->\n        </TabStripItem>\n        <TabStripItem class=\"special\">\n            <Label text=\"Blog\"></Label>\n            <!-- <Image src=\"font://&#xf00e;\" class=\"fas\"></Image> -->\n        </TabStripItem>\n        <TabStripItem class=\"special\">\n            <Label text=\"Lessons\"></Label>\n            <!-- <Image src=\"font://&#xf00e;\" class=\"fas\"></Image> -->\n        </TabStripItem>\n        <TabStripItem class=\"special\">\n            <Label text=\"Jobs\"></Label>\n            <!-- <Image src=\"font://&#xf00e;\" class=\"fas\"></Image> -->\n        </TabStripItem>\n    </TabStrip>\n\n    <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->\n    <TabContentItem>\n        <page-router-outlet name=\"universities\"></page-router-outlet>\n    </TabContentItem>\n    <TabContentItem>\n        <page-router-outlet name=\"events\"></page-router-outlet>\n    </TabContentItem>\n    <TabContentItem>\n        <page-router-outlet name=\"featured\"></page-router-outlet>\n    </TabContentItem>\n    <TabContentItem>\n        <page-router-outlet name=\"browse\"></page-router-outlet>\n    </TabContentItem>\n    <TabContentItem>\n        <page-router-outlet name=\"search\"></page-router-outlet>\n    </TabContentItem>\n\n</BottomNavigation>"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSelectedIndexChanged = function (args) {
        console.log("Selected index has changed ( Old index: " + args.oldIndex + " New index: " + args.newIndex + " )");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", fa-regular-400"},{"type":"comment","comment":" font-weight: 400;  "}]},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Brands\", fa-brands-400"},{"type":"comment","comment":" font-weight: 400;  "}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", fa-solid-900"},{"type":"comment","comment":" font-weight: 900;  "}]},{"type":"rule","selectors":[".divider"],"declarations":[{"type":"declaration","property":"background-color","value":"lightgray"}]},{"type":"rule","selectors":[".item"],"declarations":[{"type":"declaration","property":"border-radius","value":"30"},{"type":"declaration","property":"border-color","value":"#666666"},{"type":"declaration","property":"border-width","value":"1px"},{"type":"declaration","property":"border-style","value":"solid"}]},{"type":"rule","selectors":[".spacer"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".big_text"],"declarations":[{"type":"declaration","property":"height","value":"400px"},{"type":"declaration","property":"font-size","value":"49.5pt"},{"type":"declaration","property":"border-radius","value":"400"}]},{"type":"comment","comment":"@import '~nativescript-theme-core/css/core.dark.css';"}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _featured_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./featured.component.ts");
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./item.component.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./browse.component.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./category.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./search.component.ts");
/* harmony import */ var _universities_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./universities.component.ts");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./events.component.ts");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./event.component.ts");













var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _featured_component__WEBPACK_IMPORTED_MODULE_4__["FeaturedComponent"],
                _item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"],
                _browse_component__WEBPACK_IMPORTED_MODULE_6__["BrowseComponent"],
                _category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
                _search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _universities_component__WEBPACK_IMPORTED_MODULE_9__["UniversitiesComponent"],
                _events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"],
                _event_component__WEBPACK_IMPORTED_MODULE_11__["EventComponent"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./browse.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}"

/***/ }),

/***/ "./browse.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Browse\" class=\"action-bar\"></ActionBar>\n\n<ScrollView class=\"page\">\n    <StackLayout class=\"home-panel\">\n        <Button class=\"btn btn-primary\" text=\"category\" [nsRouterLink]=\"['../category']\"></Button>\n    </StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
    }
    BrowseComponent.prototype.ngOnInit = function () {
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Browse",
            template: __importDefault(__webpack_require__("./browse.component.html")).default,
            styles: [__importDefault(__webpack_require__("./browse.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./category.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}"

/***/ }),

/***/ "./category.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Category\" class=\"action-bar\"></ActionBar>\n\n<ScrollView class=\"page\">\n    <StackLayout class=\"home-panel\">\n        <Button class=\"btn btn-primary\" text=\"item\" [nsRouterLink]=\"['../item']\"></Button>\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\n    </StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Category",
            template: __importDefault(__webpack_require__("./category.component.html")).default,
            styles: [__importDefault(__webpack_require__("./category.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./event.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n\tvertical-align: center;\r\n\tfont-size: 20;\r\n\tmargin: 15;\r\n}"

/***/ }),

/***/ "./event.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<ActionBar title=\"Item\" class=\"action-bar\"></ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\r\n    </StackLayout>\r\n</ScrollView>\r\n<ActionBar title=\"Event\" class=\"action-bar\">\r\n    <NavigationButton text=\"Go Back\" android.systemIcon=\"home\" tap=\"onNavBtnTap\"></NavigationButton>\r\n</ActionBar>\r\n<ActionBar title=\" Event\" class=\"action-bar\">\r\n    <Button text=\"Back\" (tap)=\"onNavBtnTap()\">\r\n    </Button>\r\n</ActionBar>\r\n    <ActionItem icon=\"font://&#xf013;\" class=\"fas\" ios.position=\"right\" (tap)=\"openSettings()\"></ActionItem>\r\n-->\r\n<ActionBar title=\"Event\">\r\n    <NavigationButton icon=\"res://home\" (tap)=\"onNavBtnTap()\"></NavigationButton>\r\n</ActionBar> \r\n\r\n<StackLayout class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <StackLayout>\r\n            <StackLayout class=\"item\">\r\n                <Image src=\"{{ event.photo }}\" stretch=\"aspectFit\" height=\"100\" class=\"centered\"></Image>\r\n                <StackLayout padding=\"10\">\r\n                    <Label text=\"{{ event.title }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.date }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.place }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.description }}\" textWrap=\"true\"></Label>\r\n                    \r\n    <Button text=\"Back\" onTap=\"onNavBtnTap()\">\r\n    </Button>\r\n                </StackLayout>\r\n            </StackLayout>\r\n        </StackLayout>\r\n    </StackLayout>\r\n</StackLayout> "

/***/ }),

/***/ "./event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var EventComponent = /** @class */ (function () {
    function EventComponent(routerExtensions, _activatedRoute) {
        this.routerExtensions = routerExtensions;
        this._activatedRoute = _activatedRoute;
    }
    EventComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var eventId;
                        _this._activatedRoute.params.subscribe(function (params) { return eventId = params['id']; });
                        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + eventId).then(function (r) {
                            console.log(r);
                            var obj = JSON.parse(r)[0];
                            obj.description = "asdf";
                            _this.event = obj;
                        }, function (e) {
                            console.log("Error: ");
                            console.log(e);
                        });
                        resolve(_this.event);
                    })];
            });
        });
    };
    EventComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    EventComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Event",
            template: __importDefault(__webpack_require__("./event.component.html")).default,
            styles: [__importDefault(__webpack_require__("./event.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./events.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n\tvertical-align: center;\r\n\tfont-size: 20;\r\n\tmargin: 15;\r\n}"

/***/ }),

/***/ "./events.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Events\" class=\"action-bar\"></ActionBar>\r\n\r\n<StackLayout class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <ListView height=\"2000\" [items]=\"items\" class=\"list-group\">\r\n            <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n                <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\r\n\t\t\t\t<StackLayout [nsRouterLink]=\"['../event', item._id]\">\r\n\t\t\t\t\t<StackLayout class=\"item\">\r\n\t\t\t\t\t\t<StackLayout class=\"spacer\" height=\"5\"></StackLayout>\r\n\t\t\t\t\t\t<Image src=\"{{ item.photo }}\" stretch=\"aspectFit\" height=\"100\" class=\"centered\"></Image>\r\n\t\t\t\t\t\t<StackLayout padding=\"10\">\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.title }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.date }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.place }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Button text=\"Bookmark\" class=\"right\" [nsRouterLink]=\"['../event']\"></Button>\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout class=\"spacer\" height=\"20\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n            </ng-template>\r\n        </ListView>\r\n    </StackLayout>\r\n</StackLayout> "

/***/ }),

/***/ "./events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);



var EventsComponent = /** @class */ (function () {
    function EventsComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [];
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/compact").then(function (r) {
            console.log(r);
            _this.items = JSON.parse(r);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    };
    EventsComponent.prototype.onTap = function (args) {
        console.log("Tap!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
    };
    EventsComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Events",
            template: __importDefault(__webpack_require__("./events.component.html")).default,
            styles: [__importDefault(__webpack_require__("./events.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./featured.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}\n.centered {\n\thorizontal-align: center;\n}\n.right {\n\thorizontal-align: right;\n}"

/***/ }),

/***/ "./featured.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Events\" class=\"action-bar\"></ActionBar>\n\n<ScrollView class=\"page\">\n    <StackLayout class=\"home-panel\">\n        <Button class=\"btn btn-primary\" text=\"Item\" [nsRouterLink]=\"['../item']\"></Button>\n    </StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./featured.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
    }
    FeaturedComponent.prototype.ngOnInit = function () {
    };
    FeaturedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Featured",
            template: __importDefault(__webpack_require__("./featured.component.html")).default,
            styles: [__importDefault(__webpack_require__("./featured.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./item.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}"

/***/ }),

/***/ "./item.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Item\" class=\"action-bar\"></ActionBar>\n\n<ScrollView class=\"page\">\n    <StackLayout class=\"home-panel\">\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\n    </StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var ItemComponent = /** @class */ (function () {
    function ItemComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    ItemComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Item",
            template: __importDefault(__webpack_require__("./item.component.html")).default,
            styles: [__importDefault(__webpack_require__("./item.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./search.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n\tvertical-align: center;\n\tfont-size: 20;\n\tmargin: 15;\n}"

/***/ }),

/***/ "./search.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Search\" class=\"action-bar\"></ActionBar>\n\n<ScrollView class=\"page\">\n    <StackLayout class=\"home-panel\">\n        \n    </StackLayout>\n</ScrollView>"

/***/ }),

/***/ "./search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __importDefault(__webpack_require__("./search.component.html")).default,
            styles: [__importDefault(__webpack_require__("./search.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./universities.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n\tvertical-align: center;\r\n\tfont-size: 20;\r\n\tmargin: 15;\r\n}"

/***/ }),

/***/ "./universities.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Universities\" class=\"action-bar\"></ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\r\n        <Button class=\"btn btn-primary\" text=\"Item\" [nsRouterLink]=\"['../category']\"></Button>\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./universities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversitiesComponent", function() { return UniversitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);


var UniversitiesComponent = /** @class */ (function () {
    function UniversitiesComponent() {
    }
    UniversitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [];
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/university/compact").then(function (r) {
            _this.items = JSON.parse(r);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    };
    UniversitiesComponent.prototype.onItemTap = function (args) {
        console.log("Index: " + args.index + "; View: " + args.view + " ; Item: " + this.items[args.index]);
    };
    UniversitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Universities",
            template: __importDefault(__webpack_require__("./universities.component.html")).default,
            styles: [__importDefault(__webpack_require__("./universities.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UniversitiesComponent);
    return UniversitiesComponent;
}());



/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/http":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/http");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Jyb3dzZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9icm93c2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2F0ZWdvcnkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2V2ZW50LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vZXZlbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZXZlbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2V2ZW50cy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2V2ZW50cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ldmVudHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2ZlYXR1cmVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmVhdHVyZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2l0ZW0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2l0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3VuaXZlcnNpdGllcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2Nv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Ozs7O0FDWmxDLDBDOzs7Ozs7O0FDQUEsNEM7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxrRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2F0ZWdvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVbml2ZXJzaXRpZXNDb21wb25lbnQgfSBmcm9tIFwiLi91bml2ZXJzaXRpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFdmVudHNDb21wb25lbnQgfSBmcm9tIFwiLi9ldmVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFdmVudENvbXBvbmVudCB9IGZyb20gXCIuL2V2ZW50LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiLyh1bml2ZXJzaXRpZXM6dW5pdmVyc2l0aWVzLy9ldmVudHM6ZXZlbnRzLy9mZWF0dXJlZDpmZWF0dXJlZC8vYnJvd3NlOmJyb3dzZS8vc2VhcmNoOnNlYXJjaClcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuXG4gICAgeyBwYXRoOiBcInVuaXZlcnNpdGllc1wiLCBjb21wb25lbnQ6IFVuaXZlcnNpdGllc0NvbXBvbmVudCwgb3V0bGV0OiBcInVuaXZlcnNpdGllc1wiIH0sXG4gICAgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IEV2ZW50c0NvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgeyBwYXRoOiBcImV2ZW50LzppZFwiLCBjb21wb25lbnQ6IEV2ZW50Q29tcG9uZW50LCBvdXRsZXQ6IFwiZXZlbnRzXCIgfSxcbiAgICB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgY29tcG9uZW50OiBGZWF0dXJlZENvbXBvbmVudCwgb3V0bGV0OiBcImZlYXR1cmVkXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbVwiLCBjb21wb25lbnQ6IEl0ZW1Db21wb25lbnQsIG91dGxldDogXCJmZWF0dXJlZFwiIH0sXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBjb21wb25lbnQ6IEJyb3dzZUNvbXBvbmVudCwgb3V0bGV0OiBcImJyb3dzZVwiIH0sXG4gICAgeyBwYXRoOiBcImNhdGVnb3J5XCIsIGNvbXBvbmVudDogQ2F0ZWdvcnlDb21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQsIG91dGxldDogXCJzZWFyY2hcIiB9LFxuXTtcbi8qXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaHViXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaHViXCIsIGNvbXBvbmVudDogSHViQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInVuaXZlcnNpdGllc1wiLCBjb21wb25lbnQ6IFVuaXZlcnNpdGllc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJldmVudHNcIiwgY29tcG9uZW50OiBFdmVudHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZXZlbnRcIiwgY29tcG9uZW50OiBFdmVudENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgY29tcG9uZW50OiBGZWF0dXJlZENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQgfSxcbl07XG4qL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCb3R0b21OYXZpZ2F0aW9uIHNlbGVjdGVkSW5kZXg9XFxcIjBcXFwiPlxcblxcbiAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxcbiAgICA8VGFiU3RyaXA+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJVbml2ZXJzaXRpZXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjAxNTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRXZlbnRzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cXFwic3BlY2lhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJsb2dcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjAwZTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGVzc29uc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8IS0tIDxJbWFnZSBzcmM9XFxcImZvbnQ6Ly8mI3hmMDBlO1xcXCIgY2xhc3M9XFxcImZhc1xcXCI+PC9JbWFnZT4gLS0+XFxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XFxcInNwZWNpYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKb2JzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMGU7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICA8L1RhYlN0cmlwPlxcblxcbiAgICA8IS0tIFRoZSBudW1iZXIgb2YgVGFiQ29udGVudEl0ZW0gY29tcG9uZW50cyBzaG91bGQgY29yZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgVGFiU3RyaXBJdGVtIGNvbXBvbmVudHMgLS0+XFxuICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwidW5pdmVyc2l0aWVzXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJldmVudHNcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImZlYXR1cmVkXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJicm93c2VcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInNlYXJjaFxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuPC9Cb3R0b21OYXZpZ2F0aW9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBpbmRleCBoYXMgY2hhbmdlZCAoIE9sZCBpbmRleDogJHthcmdzLm9sZEluZGV4fSBOZXcgaW5kZXg6ICR7YXJncy5uZXdJbmRleH0gKWApO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgZmEtcmVndWxhci00MDBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGZvbnQtd2VpZ2h0OiA0MDA7ICBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFiXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXFxcIiwgZmEtYnJhbmRzLTQwMFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgZm9udC13ZWlnaHQ6IDQwMDsgIFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgZmEtc29saWQtOTAwXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBmb250LXdlaWdodDogOTAwOyAgXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRpdmlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwibGlnaHRncmF5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLml0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjY2NjY2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXN0eWxlXCIsXCJ2YWx1ZVwiOlwic29saWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3BhY2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJpZ190ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI0OS41cHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiQGltcG9ydCAnfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzJztcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2F0ZWdvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVuaXZlcnNpdGllc0NvbXBvbmVudCB9IGZyb20gXCIuL3VuaXZlcnNpdGllcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gXCIuL2V2ZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vZXZlbnQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEZlYXR1cmVkQ29tcG9uZW50LFxuICAgICAgICBJdGVtQ29tcG9uZW50LFxuICAgICAgICBCcm93c2VDb21wb25lbnQsXG4gICAgICAgIENhdGVnb3J5Q29tcG9uZW50LFxuICAgICAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgICAgIFxuICAgICAgICBVbml2ZXJzaXRpZXNDb21wb25lbnQsXG4gICAgICAgIEV2ZW50c0NvbXBvbmVudCxcbiAgICAgICAgRXZlbnRDb21wb25lbnQsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjA7XFxuXFx0bWFyZ2luOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQnJvd3NlXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxuXFxuPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJjYXRlZ29yeVxcXCIgW25zUm91dGVyTGlua109XFxcIlsnLi4vY2F0ZWdvcnknXVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQnJvd3NlXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYnJvd3NlLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2Jyb3dzZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHR9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW46IDE1O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJDYXRlZ29yeVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiaXRlbVxcXCIgW25zUm91dGVyTGlua109XFxcIlsnLi4vaXRlbSddXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiQmFja1xcXCIgKHRhcCk9XFxcImdvQmFjaygpXFxcIj48L0J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQ2F0ZWdvcnlcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9jYXRlZ29yeS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9jYXRlZ29yeS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cblxuXHRnb0JhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxuXFx0bWFyZ2luOiAxNTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPCEtLTxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50XFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaG9tZVxcXCIgdGFwPVxcXCJvbk5hdkJ0blRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIiBFdmVudFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj5cXHJcXG4gICAgPC9CdXR0b24+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcImZvbnQ6Ly8mI3hmMDEzO1xcXCIgY2xhc3M9XFxcImZhc1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgKHRhcCk9XFxcIm9wZW5TZXR0aW5ncygpXFxcIj48L0FjdGlvbkl0ZW0+XFxyXFxuLS0+XFxyXFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiRXZlbnRcXFwiPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVxcXCJyZXM6Ly9ob21lXFxcIiAodGFwKT1cXFwib25OYXZCdG5UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbjwvQWN0aW9uQmFyPiBcXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IGV2ZW50LnBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBjbGFzcz1cXFwiY2VudGVyZWRcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZXZlbnQudGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGV2ZW50LmRhdGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGV2ZW50LnBsYWNlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBldmVudC5kZXNjcmlwdGlvbiB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBvblRhcD1cXFwib25OYXZCdG5UYXAoKVxcXCI+XFxyXFxuICAgIDwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+IFwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiRXZlbnRcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZXZlbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ldmVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBldmVudDogRXZlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPEV2ZW50PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8RXZlbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bGV0IGV2ZW50SWQ6IHN0cmluZztcclxuXHRcdFx0dGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gZXZlbnRJZCA9IHBhcmFtc1snaWQnXSk7XHJcblx0XHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvZXZlbnRzL1wiICsgZXZlbnRJZCkudGhlbigocjogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cgKHIpO1xyXG5cdFx0XHRcdGxldCBvYmogPSBKU09OLnBhcnNlKHIpWzBdO1xyXG5cdFx0XHRcdG9iai5kZXNjcmlwdGlvbiA9IFwiYXNkZlwiO1xyXG5cdFx0XHRcdHRoaXMuZXZlbnQgPSBvYmo7XHJcblx0XHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXNvbHZlKHRoaXMuZXZlbnQpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcblxcdG1hcmdpbjogMTU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50c1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8TGlzdFZpZXcgaGVpZ2h0PVxcXCIyMDAwXFxcIiBbaXRlbXNdPVxcXCJpdGVtc1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpZExheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pLS0+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2V2ZW50JywgaXRlbS5faWRdXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic3BhY2VyXFxcIiBoZWlnaHQ9XFxcIjVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwie3sgaXRlbS5waG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgY2xhc3M9XFxcImNlbnRlcmVkXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGl0ZW0udGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmRhdGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnBsYWNlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiBjbGFzcz1cXFwicmlnaHRcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2V2ZW50J11cXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCIyMFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L0xpc3RWaWV3PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+IFwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiRXZlbnRzXCIsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2V2ZW50cy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50cy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0aXRlbXM6IEFycmF5PEV2ZW50PjtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHR9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG5cdFx0Z2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvY29tcGFjdFwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cgKHIpO1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUYXAhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudDogXCIgKyBhcmdzLm9iamVjdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWaWV3IHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudDogXCIgKyBhcmdzLnZpZXcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQgbmFtZTogXCIgKyBhcmdzLmV2ZW50TmFtZSk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVxcbi5jZW50ZXJlZCB7XFxuXFx0aG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucmlnaHQge1xcblxcdGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJFdmVudHNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkl0ZW1cXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2l0ZW0nXVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiRmVhdHVyZWRcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9mZWF0dXJlZC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9mZWF0dXJlZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkl0ZW1cIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9pdGVtLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cblxuXHRnb0JhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlYXJjaFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgIFxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxuXFx0bWFyZ2luOiAxNTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiVW5pdmVyc2l0aWVzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiAodGFwKT1cXFwiZ29CYWNrKClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJJdGVtXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycuLi9jYXRlZ29yeSddXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBCaW5kaW5nT3B0aW9ucyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2l0eSB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJVbml2ZXJzaXRpZXNcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2l0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBBcnJheTxVbml2ZXJzaXR5PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvdW5pdmVyc2l0eS9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbmRleDogJHthcmdzLmluZGV4fTsgVmlldzogJHthcmdzLnZpZXd9IDsgSXRlbTogJHt0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdfWApO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9