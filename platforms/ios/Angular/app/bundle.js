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

/***/ "./events.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n\tvertical-align: center;\r\n\tfont-size: 20;\r\n\tmargin: 15;\r\n}"

/***/ }),

/***/ "./events.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Events\" class=\"action-bar\"></ActionBar>\r\n\r\n<StackLayout class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <ListView height=\"2000\" [items]=\"items\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\r\n            <ng-template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\r\n                <!-- The item template can only have a single root view container (e.g. GridLayout, StackLayout, etc.)-->\r\n\t\t\t\t<StackLayout tap=\"showItem\">\r\n\t\t\t\t\t<StackLayout class=\"item\">\r\n\t\t\t\t\t\t<StackLayout class=\"spacer\" height=\"5\"></StackLayout>\r\n\t\t\t\t\t\t<Image src=\"{{ item.photo }}\" stretch=\"aspectFit\" height=\"100\" class=\"centered\"></Image>\r\n\t\t\t\t\t\t<StackLayout padding=\"10\">\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.title }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.date }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ item.place }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Button text=\"Bookmark\" class=\"right\"></Button>\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout class=\"spacer\" height=\"20\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n            </ng-template>\r\n        </ListView>\r\n    </StackLayout>\r\n</StackLayout>"

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


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
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
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Events",
            template: __importDefault(__webpack_require__("./events.component.html")).default,
            styles: [__importDefault(__webpack_require__("./events.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Jyb3dzZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2Jyb3dzZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9icm93c2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY2F0ZWdvcnkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2V2ZW50cy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2V2ZW50cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ldmVudHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2ZlYXR1cmVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmVhdHVyZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2l0ZW0uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9pdGVtLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2l0ZW0uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3VuaXZlcnNpdGllcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFZDtBQUNSO0FBQ0k7QUFDSTtBQUNKO0FBQ1k7QUFDWjtBQUVyRCxJQUFNLE1BQU0sR0FB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QyxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBakJRLHFCQUFxQjtRQU5qQywrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFFeEIsdUZBQTRDOztTQUU1QyxDQUFDOztPQUNXLHFCQUFxQixDQWtCakM7SUFBRCw0QkFBQztDQUFBO0FBbEJpQzs7Ozs7Ozs7QUNabEMsMEM7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxrRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRmVhdHVyZWRDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJvd3NlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tIFwiLi9jYXRlZ29yeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVuaXZlcnNpdGllc0NvbXBvbmVudCB9IGZyb20gXCIuL3VuaXZlcnNpdGllcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gXCIuL2V2ZW50cy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi8odW5pdmVyc2l0aWVzOnVuaXZlcnNpdGllcy8vZXZlbnRzOmV2ZW50cy8vZmVhdHVyZWQ6ZmVhdHVyZWQvL2Jyb3dzZTpicm93c2UvL3NlYXJjaDpzZWFyY2gpXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcblxuICAgIHsgcGF0aDogXCJ1bml2ZXJzaXRpZXNcIiwgY29tcG9uZW50OiBVbml2ZXJzaXRpZXNDb21wb25lbnQsIG91dGxldDogXCJ1bml2ZXJzaXRpZXNcIiB9LFxuICAgIC8veyBwYXRoOiBcInVuaXZlcnNpdHlcIiwgY29tcG9uZW50OiBVbml2ZXJzaXR5Q29tcG9uZW50LCBvdXRsZXQ6IFwidW5pdmVyc2l0aWVzXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbVwiLCBjb21wb25lbnQ6IEl0ZW1Db21wb25lbnQsIG91dGxldDogXCJ1bml2ZXJzaXRpZXNcIiB9LFxuXG4gICAgeyBwYXRoOiBcImV2ZW50c1wiLCBjb21wb25lbnQ6IEV2ZW50c0NvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgLy97IHBhdGg6IFwiZXZlbnRcIiwgY29tcG9uZW50OiBFdmVudENvbXBvbmVudCwgb3V0bGV0OiBcImV2ZW50c1wiIH0sXG4gICAgeyBwYXRoOiBcIml0ZW1cIiwgY29tcG9uZW50OiBJdGVtQ29tcG9uZW50LCBvdXRsZXQ6IFwiZXZlbnRzXCIgfSxcblxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBjb21wb25lbnQ6IEZlYXR1cmVkQ29tcG9uZW50LCBvdXRsZXQ6IFwiZmVhdHVyZWRcIiB9LFxuICAgIHsgcGF0aDogXCJpdGVtXCIsIGNvbXBvbmVudDogSXRlbUNvbXBvbmVudCwgb3V0bGV0OiBcImZlYXR1cmVkXCIgfSxcblxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBCcm93c2VDb21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuICAgIHsgcGF0aDogXCJjYXRlZ29yeVwiLCBjb21wb25lbnQ6IENhdGVnb3J5Q29tcG9uZW50LCBvdXRsZXQ6IFwiYnJvd3NlXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbVwiLCBjb21wb25lbnQ6IEl0ZW1Db21wb25lbnQsIG91dGxldDogXCJicm93c2VcIiB9LFxuXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCwgb3V0bGV0OiBcInNlYXJjaFwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCb3R0b21OYXZpZ2F0aW9uIHNlbGVjdGVkSW5kZXg9XFxcIjBcXFwiPlxcblxcbiAgICA8IS0tIFRoZSBib3R0b20gdGFiIFVJIGlzIGNyZWF0ZWQgdmlhIFRhYlN0cmlwICh0aGUgY29udGFpbmllcikgYW5kIFRhYlN0cmlwSXRlbSAoZm9yIGVhY2ggdGFiKS0tPlxcbiAgICA8VGFiU3RyaXA+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJVbml2ZXJzaXRpZXNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjAxNTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRXZlbnRzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICAgICAgPFRhYlN0cmlwSXRlbSBjbGFzcz1cXFwic3BlY2lhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkJsb2dcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjAwZTtcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcbiAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XFxuICAgICAgICA8VGFiU3RyaXBJdGVtIGNsYXNzPVxcXCJzcGVjaWFsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGVzc29uc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8IS0tIDxJbWFnZSBzcmM9XFxcImZvbnQ6Ly8mI3hmMDBlO1xcXCIgY2xhc3M9XFxcImZhc1xcXCI+PC9JbWFnZT4gLS0+XFxuICAgICAgICA8L1RhYlN0cmlwSXRlbT5cXG4gICAgICAgIDxUYWJTdHJpcEl0ZW0gY2xhc3M9XFxcInNwZWNpYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKb2JzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGYwMGU7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXG4gICAgICAgIDwvVGFiU3RyaXBJdGVtPlxcbiAgICA8L1RhYlN0cmlwPlxcblxcbiAgICA8IS0tIFRoZSBudW1iZXIgb2YgVGFiQ29udGVudEl0ZW0gY29tcG9uZW50cyBzaG91bGQgY29yZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgVGFiU3RyaXBJdGVtIGNvbXBvbmVudHMgLS0+XFxuICAgIDxUYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwidW5pdmVyc2l0aWVzXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJldmVudHNcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImZlYXR1cmVkXFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgPFRhYkNvbnRlbnRJdGVtPlxcbiAgICAgICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJicm93c2VcXFwiPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbiAgICA8L1RhYkNvbnRlbnRJdGVtPlxcbiAgICA8VGFiQ29udGVudEl0ZW0+XFxuICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInNlYXJjaFxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuPC9Cb3R0b21OYXZpZ2F0aW9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBpbmRleCBoYXMgY2hhbmdlZCAoIE9sZCBpbmRleDogJHthcmdzLm9sZEluZGV4fSBOZXcgaW5kZXg6ICR7YXJncy5uZXdJbmRleH0gKWApO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgZmEtcmVndWxhci00MDBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGZvbnQtd2VpZ2h0OiA0MDA7ICBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFiXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgQnJhbmRzXFxcIiwgZmEtYnJhbmRzLTQwMFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgZm9udC13ZWlnaHQ6IDQwMDsgIFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgZmEtc29saWQtOTAwXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBmb250LXdlaWdodDogOTAwOyAgXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRpdmlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwibGlnaHRncmF5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLml0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjY2NjY2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXN0eWxlXCIsXCJ2YWx1ZVwiOlwic29saWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3BhY2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJpZ190ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI0OS41cHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiQGltcG9ydCAnfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzJztcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJyb3dzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jyb3dzZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vY2F0ZWdvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVuaXZlcnNpdGllc0NvbXBvbmVudCB9IGZyb20gXCIuL3VuaXZlcnNpdGllcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV2ZW50c0NvbXBvbmVudCB9IGZyb20gXCIuL2V2ZW50cy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgRmVhdHVyZWRDb21wb25lbnQsXG4gICAgICAgIEl0ZW1Db21wb25lbnQsXG4gICAgICAgIEJyb3dzZUNvbXBvbmVudCxcbiAgICAgICAgQ2F0ZWdvcnlDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICAgICAgXG4gICAgICAgIFVuaXZlcnNpdGllc0NvbXBvbmVudCxcbiAgICAgICAgRXZlbnRzQ29tcG9uZW50LFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJyb3dzZVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgdGV4dD1cXFwiY2F0ZWdvcnlcXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2NhdGVnb3J5J11cXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkJyb3dzZVwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2Jyb3dzZS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9icm93c2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjA7XFxuXFx0bWFyZ2luOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiQ2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIml0ZW1cXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2l0ZW0nXVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkNhdGVnb3J5XCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vY2F0ZWdvcnkuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vY2F0ZWdvcnkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHR9XG5cblx0Z29CYWNrKCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDIwO1xcclxcblxcdG1hcmdpbjogMTU7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50c1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8TGlzdFZpZXcgaGVpZ2h0PVxcXCIyMDAwXFxcIiBbaXRlbXNdPVxcXCJpdGVtc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIiBsZXQtb2RkPVxcXCJvZGRcXFwiIGxldC1ldmVuPVxcXCJldmVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBUaGUgaXRlbSB0ZW1wbGF0ZSBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHJvb3QgdmlldyBjb250YWluZXIgKGUuZy4gR3JpZExheW91dCwgU3RhY2tMYXlvdXQsIGV0Yy4pLS0+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHRhcD1cXFwic2hvd0l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiNVxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBpdGVtLnBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBjbGFzcz1cXFwiY2VudGVyZWRcXFwiPjwvSW1hZ2U+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS50aXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGl0ZW0uZGF0ZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGl0ZW0ucGxhY2UgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIGNsYXNzPVxcXCJyaWdodFxcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic3BhY2VyXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvTGlzdFZpZXc+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkV2ZW50c1wiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudHMuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ldmVudHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGl0ZW1zOiBBcnJheTxFdmVudD47XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvZXZlbnRzL2NvbXBhY3RcIikudGhlbigocjogc3RyaW5nKSA9PiB7XHJcblx0XHRcdHRoaXMuaXRlbXMgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEluZGV4OiAke2FyZ3MuaW5kZXh9OyBWaWV3OiAke2FyZ3Mudmlld30gOyBJdGVtOiAke3RoaXMuaXRlbXNbYXJncy5pbmRleF19YCk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVxcbi5jZW50ZXJlZCB7XFxuXFx0aG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucmlnaHQge1xcblxcdGhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJFdmVudHNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkl0ZW1cXFwiIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2l0ZW0nXVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiRmVhdHVyZWRcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9mZWF0dXJlZC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9mZWF0dXJlZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkl0ZW1cIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9pdGVtLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cblxuXHRnb0JhY2soKTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcblx0fVxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwO1xcblxcdG1hcmdpbjogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlYXJjaFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgIFxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMjA7XFxyXFxuXFx0bWFyZ2luOiAxNTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiVW5pdmVyc2l0aWVzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiAodGFwKT1cXFwiZ29CYWNrKClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJJdGVtXFxcIiBbbnNSb3V0ZXJMaW5rXT1cXFwiWycuLi9pdGVtJ11cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcIml0ZW1zXFxcIiAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCIgbGV0LWV2ZW49XFxcImV2ZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tIFRoZSBpdGVtIHRlbXBsYXRlIGNhbiBvbmx5IGhhdmUgYSBzaW5nbGUgcm9vdCB2aWV3IGNvbnRhaW5lciAoZS5nLiBHcmlkTGF5b3V0LCBTdGFja0xheW91dCwgZXRjLiktLT5cXHJcXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgPC9MaXN0Vmlldz5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBCaW5kaW5nT3B0aW9ucyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2l0eSB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJVbml2ZXJzaXRpZXNcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2l0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBBcnJheTxVbml2ZXJzaXR5PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvdW5pdmVyc2l0eS9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbmRleDogJHthcmdzLmluZGV4fTsgVmlldzogJHthcmdzLnZpZXd9IDsgSXRlbTogJHt0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdfWApO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==