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
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./browse.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./search.component.ts");
/* harmony import */ var _universities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./universities.component.ts");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./events.component.ts");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./event.component.ts");
/* harmony import */ var _hub_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./hub.component.ts");









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
var routes = [
    { path: "", redirectTo: "/hub", pathMatch: "full" },
    { path: "hub", component: _hub_component__WEBPACK_IMPORTED_MODULE_8__["HubComponent"] },
    { path: "universities", component: _universities_component__WEBPACK_IMPORTED_MODULE_5__["UniversitiesComponent"] },
    { path: "events", component: _events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"] },
    { path: "event", component: _event_component__WEBPACK_IMPORTED_MODULE_7__["EventComponent"] },
    { path: "search", component: _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: "featured", component: _featured_component__WEBPACK_IMPORTED_MODULE_2__["FeaturedComponent"] },
    { path: "browse", component: _browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"] },
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
/* harmony import */ var _hub_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./hub.component.ts");














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
                _hub_component__WEBPACK_IMPORTED_MODULE_12__["HubComponent"]
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

module.exports = "<ActionBar title=\"Item\" class=\"action-bar\"></ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var EventComponent = /** @class */ (function () {
    function EventComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    EventComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Event",
            template: __importDefault(__webpack_require__("./event.component.html")).default,
            styles: [__importDefault(__webpack_require__("./event.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
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

module.exports = "<ActionBar title=\"Events\" class=\"action-bar\"></ActionBar>\r\n\r\n<StackLayout class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <ListView height=\"2000\" [items]=\"items\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\r\n            <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n                <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\r\n\t\t\t\t<StackLayout [nsRouterLink]=\"['/event/']\">\r\n\t\t\t\t\t<StackLayout class=\"item\">\r\n\t\t\t\t\t\t<StackLayout class=\"spacer\" height=\"5\"></StackLayout>\r\n\t\t\t\t\t\t<Image src=\"{{ item.photo }}\" stretch=\"aspectFit\" height=\"100\" class=\"centered\"></Image>\r\n\t\t\t\t\t\t<StackLayout padding=\"10\">\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.title }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.date }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.place }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Button text=\"Bookmark\" class=\"right\" [nsRouterLink]=\"['/event/${item.id}']\"></Button>\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout class=\"spacer\" height=\"20\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n            </ng-template>\r\n        </ListView>\r\n    </StackLayout>\r\n</StackLayout>"

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
            _this.items = JSON.parse(r);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    };
    EventsComponent.prototype.onItemTap = function (args) {
        console.log("Index: " + args.index + "; View: " + args.view + " ; Item: " + this.items[args.index]);
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

/***/ "./hub.component.html":
/***/ (function(module, exports) {

module.exports = "<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Label class=\"h1 text-center text-uppercase\" text=\"hub\"></Label>\r\n        <Button class=\"btn btn-primary\" text=\"Featured\" [nsRouterLink]=\"['/featured']\"></Button>\r\n        <Button class=\"btn btn-primary\" text=\"Browse\" [nsRouterLink]=\"['/browse']\"></Button>\r\n        <Button class=\"btn btn-primary\" text=\"Search\" [nsRouterLink]=\"['/search']\"></Button>\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./hub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubComponent", function() { return HubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var HubComponent = /** @class */ (function () {
    function HubComponent() {
    }
    HubComponent.prototype.ngOnInit = function () {
    };
    HubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Hub",
            template: __importDefault(__webpack_require__("./hub.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], HubComponent);
    return HubComponent;
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

module.exports = "<ActionBar title=\"Universities\" class=\"action-bar\"></ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\r\n        <Button class=\"btn btn-primary\" text=\"Item\" [nsRouterLink]=\"['../item']\"></Button>\r\n        <ListView [items]=\"items\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\r\n            <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n                <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\r\n                <GridLayout>\r\n                </GridLayout>\r\n            </ng-template>\r\n        </ListView>\r\n    </StackLayout>\r\n</ScrollView>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Jyb3dzZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9icm93c2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2F0ZWdvcnkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2V2ZW50LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vZXZlbnQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZXZlbnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2V2ZW50cy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2V2ZW50cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ldmVudHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2ZlYXR1cmVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmVhdHVyZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2h1Yi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9odWIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2l0ZW0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2l0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3VuaXZlcnNpdGllcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1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O0FDWmxDLDBDOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlZENvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gXCIuL2NhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVW5pdmVyc2l0aWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXZlbnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vZXZlbnRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXZlbnRDb21wb25lbnQgfSBmcm9tIFwiLi9ldmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh1YkNvbXBvbmVudCB9IGZyb20gXCIuL2h1Yi5jb21wb25lbnRcIjtcbi8qXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiLyh1bml2ZXJzaXRpZXM6dW5pdmVyc2l0aWVzLy9ldmVudHM6ZXZlbnRzLy9mZWF0dXJlZDpmZWF0dXJlZC8vYnJvd3NlOmJyb3dzZS8vc2VhcmNoOnNlYXJjaClcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuXG4gICAgeyBwYXRoOiBcInVuaXZlcnNpdGllc1wiLCBjb21wb25lbnQ6IFVuaXZlcnNpdGllc0NvbXBvbmVudCwgb3V0bGV0OiBcInVuaXZlcnNpdGllc1wiIH0sXG4gICAgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IEV2ZW50c0NvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgeyBwYXRoOiBcImV2ZW50XCIsIGNvbXBvbmVudDogRXZlbnRDb21wb25lbnQsIG91dGxldDogXCJldmVudHNcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBjb21wb25lbnQ6IEZlYXR1cmVkQ29tcG9uZW50LCBvdXRsZXQ6IFwiZmVhdHVyZWRcIiB9LFxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuICAgIHsgcGF0aDogXCJzZWFyY2hcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQsIG91dGxldDogXCJzZWFyY2hcIiB9LFxuXTsqL1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2h1YlwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImh1YlwiLCBjb21wb25lbnQ6IEh1YkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJ1bml2ZXJzaXRpZXNcIiwgY29tcG9uZW50OiBVbml2ZXJzaXRpZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZXZlbnRzXCIsIGNvbXBvbmVudDogRXZlbnRzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImV2ZW50XCIsIGNvbXBvbmVudDogRXZlbnRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGNvbXBvbmVudDogRmVhdHVyZWRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYnJvd3NlXCIsIGNvbXBvbmVudDogQnJvd3NlQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCb3R0b21OYXZpZ2F0aW9uIHNlbGVjdGVkSW5kZXg9XFxcIjBcXFwiPlxcblxcbiAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxcbiAgICA8VGFiU3RyaXA+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJVbml2ZXJzaXRpZXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjAxNTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRXZlbnRzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cXFwic3BlY2lhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJsb2dcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjAwZTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGVzc29uc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8IS0tIDxJbWFnZSBzcmM9XFxcImZvbnQ6Ly8mI3hmMDBlO1xcXCIgY2xhc3M9XFxcImZhc1xcXCI+PC9JbWFnZT4gLS0+XFxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XFxcInNwZWNpYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKb2JzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMGU7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICA8L1RhYlN0cmlwPlxcblxcbiAgICA8IS0tIFRoZSBudW1iZXIgb2YgVGFiQ29udGVudEl0ZW0gY29tcG9uZW50cyBzaG91bGQgY29yZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgVGFiU3RyaXBJdGVtIGNvbXBvbmVudHMgLS0+XFxuICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwidW5pdmVyc2l0aWVzXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJldmVudHNcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImZlYXR1cmVkXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJicm93c2VcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInNlYXJjaFxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuPC9Cb3R0b21OYXZpZ2F0aW9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBpbmRleCBoYXMgY2hhbmdlZCAoIE9sZCBpbmRleDogJHthcmdzLm9sZEluZGV4fSBOZXcgaW5kZXg6ICR7YXJncy5uZXdJbmRleH0gKWApO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgZmEtcmVndWxhci00MDBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGZvbnQtd2VpZ2h0OiA0MDA7ICBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFiXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXFxcIiwgZmEtYnJhbmRzLTQwMFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgZm9udC13ZWlnaHQ6IDQwMDsgIFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgZmEtc29saWQtOTAwXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBmb250LXdlaWdodDogOTAwOyAgXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRpdmlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwibGlnaHRncmF5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLml0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjY2NjY2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXN0eWxlXCIsXCJ2YWx1ZVwiOlwic29saWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3BhY2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJpZ190ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI0OS41cHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiQGltcG9ydCAnfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzJztcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2F0ZWdvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVuaXZlcnNpdGllc0NvbXBvbmVudCB9IGZyb20gXCIuL3VuaXZlcnNpdGllcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gXCIuL2V2ZW50cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vZXZlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdWJDb21wb25lbnQgfSBmcm9tIFwiLi9odWIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEZlYXR1cmVkQ29tcG9uZW50LFxuICAgICAgICBJdGVtQ29tcG9uZW50LFxuICAgICAgICBCcm93c2VDb21wb25lbnQsXG4gICAgICAgIENhdGVnb3J5Q29tcG9uZW50LFxuICAgICAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgICAgIFxuICAgICAgICBVbml2ZXJzaXRpZXNDb21wb25lbnQsXG4gICAgICAgIEV2ZW50c0NvbXBvbmVudCxcbiAgICAgICAgRXZlbnRDb21wb25lbnQsXG4gICAgICAgIEh1YkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJyb3dzZVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiY2F0ZWdvcnlcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2NhdGVnb3J5J11cXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkJyb3dzZVwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9icm93c2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjA7XFxuXFx0bWFyZ2luOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQ2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIml0ZW1cXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2l0ZW0nXVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkNhdGVnb3J5XCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vY2F0ZWdvcnkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHR9XG5cblx0Z29CYWNrKCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcblxcdG1hcmdpbjogMTU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHR9XHJcblx0XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcblxcdG1hcmdpbjogMTU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50c1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8TGlzdFZpZXcgaGVpZ2h0PVxcXCIyMDAwXFxcIiBbaXRlbXNdPVxcXCJpdGVtc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpZExheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pLS0+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IFtuc1JvdXRlckxpbmtdPVxcXCJbJy9ldmVudC8nXVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCI1XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxJbWFnZSBzcmM9XFxcInt7IGl0ZW0ucGhvdG8gfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGNsYXNzPVxcXCJjZW50ZXJlZFxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLnRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS5kYXRlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS5wbGFjZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJCb29rbWFya1xcXCIgY2xhc3M9XFxcInJpZ2h0XFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvZXZlbnQvJHtpdGVtLmlkfSddXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiMjBcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgPC9MaXN0Vmlldz5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudHNcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZXZlbnRzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vZXZlbnRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRpdGVtczogQXJyYXk8RXZlbnQ+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cdH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcblx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbmRleDogJHthcmdzLmluZGV4fTsgVmlldzogJHthcmdzLnZpZXd9IDsgSXRlbTogJHt0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdfWApO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMDtcXG5cXHRtYXJnaW46IDE1O1xcbn1cXG4uY2VudGVyZWQge1xcblxcdGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJpZ2h0IHtcXG5cXHRob3Jpem9udGFsLWFsaWduOiByaWdodDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiRXZlbnRzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxuXFxuPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJJdGVtXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycuLi9pdGVtJ11cXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkZlYXR1cmVkXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vZmVhdHVyZWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHR9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2VcXFwiIHRleHQ9XFxcImh1YlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiRmVhdHVyZWRcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9mZWF0dXJlZCddXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiQnJvd3NlXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycvYnJvd3NlJ11cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJTZWFyY2hcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9zZWFyY2gnXVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIdWJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaHViLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEh1YkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkl0ZW1cIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9pdGVtLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cblxuXHRnb0JhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlYXJjaFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgIFxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxuXFx0bWFyZ2luOiAxNTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiVW5pdmVyc2l0aWVzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiAodGFwKT1cXFwiZ29CYWNrKClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJJdGVtXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycuLi9pdGVtJ11cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcIml0ZW1zXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIFRoZSBpdGVtIHRlbXBsYXRlIGNhbiBvbmx5IGhhdmUgYSBzaW5nbGUgcm9vdCB2aWV3IGNvbnRhaW5lciAoZS5nLiBHcmlkTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLiktLT5cXHJcXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgPC9MaXN0Vmlldz5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBCaW5kaW5nT3B0aW9ucyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2l0eSB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJVbml2ZXJzaXRpZXNcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2l0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBBcnJheTxVbml2ZXJzaXR5PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvdW5pdmVyc2l0eS9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbmRleDogJHthcmdzLmluZGV4fTsgVmlldzogJHthcmdzLnZpZXd9IDsgSXRlbTogJHt0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdfWApO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=