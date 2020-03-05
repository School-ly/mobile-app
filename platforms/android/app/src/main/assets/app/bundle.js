require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root-view-model.ts": "./app-root-view-model.ts",
	"./app-root.ts": "./app-root.ts",
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./app.ts": "./app.ts",
	"./custom-page/custom-page.ts": "./custom-page/custom-page.ts",
	"./custom-page/custom-page.xml": "./custom-page/custom-page.xml",
	"./modules/navigation-handler.ts": "./modules/navigation-handler.ts",
	"./observable-property-decorator.js": "./observable-property-decorator.js",
	"./observable-property-decorator.ts": "./observable-property-decorator.ts",
	"./page1/page1.ts": "./page1/page1.ts",
	"./page1/page1.xml": "./page1/page1.xml",
	"./page2/feed-item-detail/feed-item-detail-page.ts": "./page2/feed-item-detail/feed-item-detail-page.ts",
	"./page2/feed-item-detail/feed-item-detail-page.xml": "./page2/feed-item-detail/feed-item-detail-page.xml",
	"./page2/page2.ts": "./page2/page2.ts",
	"./page2/page2.xml": "./page2/page2.xml",
	"./page2/shared/item.ts": "./page2/shared/item.ts",
	"./page3/page3.ts": "./page3/page3.ts",
	"./page3/page3.xml": "./page3/page3.xml",
	"./page4/page4.ts": "./page4/page4.ts",
	"./page4/page4.xml": "./page4/page4.xml",
	"./secondary-page/secondary-page.ts": "./secondary-page/secondary-page.ts",
	"./secondary-page/secondary-page.xml": "./secondary-page/secondary-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRootViewModel", function() { return AppRootViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/frame/frame");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



var AppRootViewModel = /** @class */ (function (_super) {
    __extends(AppRootViewModel, _super);
    function AppRootViewModel() {
        return _super.call(this) || this;
    }
    /**
     * Controls the primary navigation of the application
     * @param args Tapped menu context
     */
    AppRootViewModel.prototype.navigate = function (args) {
        var tappedMenu = args.object;
        var rootView = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        var pageContainer = rootView.getChildAt(1);
        // prevent consecutive navigation to the same page
        if (tappedMenu == AppRootViewModel.previousMenu) {
            return;
        }
        else {
            AppRootViewModel.previousMenu = tappedMenu;
        }
        // reset formatting
        pageContainer.eachChildView(function (view) {
            view.set("class", "bottom-nav-btn");
            return true;
        });
        Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__["topmost"])().navigate({
            moduleName: tappedMenu.id + "/" + tappedMenu.id,
            clearHistory: true,
        });
        tappedMenu.set("class", "bottom-nav-btn bottom-nav-btn-active");
    };
    return AppRootViewModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app-root-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app-root.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoaded", function() { return onLoaded; });
/* harmony import */ var _app_root_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app-root-view-model.ts");

function onLoaded(args) {
    var appRoot = args.object;
    appRoot.bindingContext = new _app_root_view_model__WEBPACK_IMPORTED_MODULE_0__["AppRootViewModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app-root.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<!-- \n\tI am using plain stacklayout here, you can use any layout you want.\n\tYou also can use nativescript-ripple to get some ripple effect.\n\tBut remember to modify components on AppRootViewModel and \n\tmodules/navigation-handler file.\n -->\n\n<GridLayout rows=\"*, auto\" columns=\"*\" loaded=\"onLoaded\">\n\n\t<Frame row=\"0\" defaultPage=\"page1/page1\"/>\n\n\t<GridLayout backgroundColor=\"#fff\" visibility=\"visible\" row=\"1\" columns=\"*,*,*,*\" id=\"bottomNavBar\" class=\"bottom-nav\">\n\t\t<StackLayout id=\"page1\" class=\"bottom-nav-btn-active\" col=\"0\" tap=\"{{ navigate }}\">\n\t\t\t\t<Label text=\"&#xe851;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\n\t\t\t\t<Label text=\"Page 1\" textWrap=\"true\" class=\"bottom-nav-text\" />\n\t\t</StackLayout>\n\t\t<StackLayout id=\"page2\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"1\">\n\t\t\t\t<Label text=\"&#xe54c;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\n\t\t\t\t<Label text=\"Page 2\" textWrap=\"true\" class=\"bottom-nav-text\" />\n\t\t</StackLayout>\n\t\t<StackLayout id=\"page3\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"2\">\n\t\t\t\t<Label text=\"&#xe0ca;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\n\t\t\t\t<Label text=\"Page 3\" textWrap=\"true\" class=\"bottom-nav-text\" />\n\t\t</StackLayout>\n\t\t<StackLayout id=\"page4\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"3\">\n\t\t\t\t<Label text=\"&#xe7f7;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\n\t\t\t\t<Label text=\"Page 4\" textWrap=\"true\" class=\"bottom-nav-text\" />\n\t\t</StackLayout>\n\t</GridLayout>\n</GridLayout>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"comment","comment":"\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"comment","comment":"\nI am using material font icons here, you can use any icon you want.\n"},{"type":"rule","selectors":[".mdi"],"declarations":[{"type":"declaration","property":"font-family","value":"MaterialIcons, \"Material Icons\""}]},{"type":"rule","selectors":[".bottom-nav"],"declarations":[{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"border-top-color","value":"#ececec"},{"type":"declaration","property":"border-top-width","value":"1"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".bottom-nav-btn"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"color","value":"#888888"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".bottom-nav-btn-active"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"color","value":"#223e92"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".bottom-nav-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".bottom-nav-text"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"text-transform","value":"capitalize"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app = __webpack_require__("tns-core-modules/application");
app.run({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/


/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./modules/navigation-handler.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
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
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        /*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


/**
 * If a view-to-view navigation is performed on the application somewhere,
 * unhide the navigation bar on back key press.
 */
if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"]) {
    tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"].on(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["AndroidApplication"].activityBackPressedEvent, function (args) {
        new _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__["NavigationHandler"]().showNavBar();
    });
}
tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["run"]({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.ts" });
    });
} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./custom-page/custom-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proceed", function() { return proceed; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/frame/frame");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./modules/navigation-handler.ts");



function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({});
}
function proceed() {
    Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__["topmost"])().navigate({
        moduleName: 'secondary-page/secondary-page',
        // backStackVisible must be enabled, you don't need to explicitly menthion it anyway, it is enabled by default
        backstackVisible: true
    });
    // though I am calling hideNavBar here, it won't affect at all.
    // so you need not to call it further, if you stay on the same stack.
    new _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_2__["NavigationHandler"]().hideNavBar();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./custom-page/custom-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./custom-page/custom-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./custom-page/custom-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Custom Page\" icon=\"\"/>\n\t</Page.actionBar>\n\n\t<StackLayout padding=\"10\">\n\t\t<Label text=\"This page is not a part of main navigation. Press back button to return to the main view.\" \n            class=\"text-center\" textWrap=\"true\" />\n        <Label text=\"Or press the button below to proceed further.\" \n            class=\"text-center\" textWrap=\"true\" />\n\t\t<Button text=\"Keep Navigating\" tap=\"proceed\" />\n\t</StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./custom-page/custom-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./custom-page/custom-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./modules/navigation-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationHandler", function() { return NavigationHandler; });
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_root_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app-root-view-model.ts");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/frame");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__);



/**
 * This class contains the helper functions needed for
 * view-to-view navigation. If you notice you'll see that there
 * are two types of navigation in Bottom Navigation. One is, using the
 * menus presented it navigation bar itself, and the other one is a secondary
 * navigation within one of the primary menus, e.g. contact list to send message. The
 * navigation bar should be hidden during this type of navigation.
 */
var NavigationHandler = /** @class */ (function () {
    function NavigationHandler() {
    }
    /**
     * Hide the navigation bar during a view-to-view navigation
     */
    NavigationHandler.prototype.hideNavBar = function () {
        // if the navigation stack is not empty then the navigation bar is hidden already
        if (Object(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__["topmost"])().backStack.length >= 1) {
            return;
        }
        var rootView = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"]();
        var navBar = rootView.getChildAt(1);
        navBar.set("visibility", "collapsed");
    };
    /**
     * Show the navigation bar on back key press from view-to-view navigation
     */
    NavigationHandler.prototype.showNavBar = function () {
        // do not unhide the navigation bar until only one activity left in the stack
        if (Object(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__["topmost"])().backStack.length > 1) {
            return;
        }
        var rootView = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"]();
        var navBar = rootView.getChildAt(1);
        navBar.set("visibility", "visible");
    };
    /**
     * This method simulates a navigation to the specified menu using the core
     * navigation method. Use this method for view-to-view navigation.
     * @param string The menu to be navigated, expects an ID
     */
    NavigationHandler.prototype.simulateNavigation = function (menu) {
        var rootView = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"]();
        var navBar = rootView.getChildAt(1);
        var tappedView = navBar.getViewById(menu);
        // initiate a tap event 
        new _app_root_view_model__WEBPACK_IMPORTED_MODULE_1__["AppRootViewModel"]().navigate({
            eventName: "tap",
            object: tappedView
        });
    };
    return NavigationHandler;
}());

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./modules/navigation-handler.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./modules/navigation-handler.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./observable-property-decorator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.ObservableProperty = ObservableProperty;


/***/ }),

/***/ "./observable-property-decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableProperty", function() { return ObservableProperty; });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./observable-property-decorator.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./observable-property-decorator.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page1/page1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToPage2", function() { return goToPage2; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./modules/navigation-handler.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



function onNavigatedTo(args) {
    var page = args.object;
    if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["ios"]) {
        alert("Sorry, it only works with Android currently!");
    }
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({
        'text': Math.round(Math.random() * 100).toString()
    });
    console.log("done");
}
function goToPage2() {
    // simulate a navigation to page2
    new _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__["NavigationHandler"]().simulateNavigation("page2");
    console.log("done");
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page1/page1.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./page1/page1.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page1/page1.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\n    <Page.actionBar>\n        <ActionBar title=\"Page 1\" icon=\"\" />\n    </Page.actionBar>\n\n    <StackLayout padding=\"10\">\n        <Label\n            text=\"Use simulateNavigation method for view-to-view navigation. This can be used for primary navigation.\"\n            class=\"text-center\" textWrap=\"true\" />\n        <Button text=\"Go to Page2\" tap=\"goToPage2\" />\n        <Label\n            text=\"Specify the desired menu name to navigate. Click on the button overhead to see an example.\"\n            class=\"text-center\" textWrap=\"true\" />\n        <Label\n            text=\"{{text}}\"\n            class=\"text-center\" textWrap=\"true\" />\n </StackLayout> </Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page1/page1.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./page1/page1.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page2/feed-item-detail/feed-item-detail-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatingTo", function() { return onNavigatingTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackButtonTap", function() { return onBackButtonTap; });
function onNavigatingTo(args) {
    var page = args.object;
    var item = args.context;
    page.bindingContext = item;
}
function onBackButtonTap(args) {
    var view = args.object;
    var page = view.page;
    page.frame.goBack();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page2/feed-item-detail/feed-item-detail-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./page2/feed-item-detail/feed-item-detail-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page2/feed-item-detail/feed-item-detail-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page\r\n    navigatingTo=\"onNavigatingTo\"  \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\r\n\r\n    <ActionBar>\r\n        <NavigationButton tap=\"onBackButtonTap\" android.systemIcon=\"ic_menu_back\"/>\r\n        <Label text=\"{{ name }}\"></Label>\r\n    </ActionBar>\r\n\r\n    <GridLayout>\r\n        <Label class=\"m-10 h3\" text=\"{{ description }}\" verticalAlignment=\"top\" ></Label>\r\n    </GridLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page2/feed-item-detail/feed-item-detail-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./page2/feed-item-detail/feed-item-detail-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page2/page2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToCustomPage", function() { return goToCustomPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onItemTap", function() { return onItemTap; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./modules/navigation-handler.ts");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/frame/frame");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__);




function onNavigatedTo(args) {
    var page = args.object;
    var index = Math.round(Math.random() * 1000) % 2;
    var str = index.toString();
    if (index == 0)
        str = "";
    var bindingObject = { 'items': [] };
    Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getString"])("https://raw.githubusercontent.com/School-ly/server/master/data" + str + ".json").then(function (r) {
        bindingObject['items'] = JSON.parse(r);
        //console.log(r);
        page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(bindingObject);
    }, function (e) {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
        page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(bindingObject);
    });
}
function goToCustomPage() {
    // performing a secondary navigation
    Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2__["topmost"])().navigate({
        moduleName: "custom-page/custom-page",
    });
    // once you called this method once, you don't need to call it further in the same stack
    new _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__["NavigationHandler"]().hideNavBar();
}
function onItemTap(args) {
    var view = args.view;
    var page = view.page;
    var tappedItem = view.bindingContext;
    page.frame.navigate({
        moduleName: "page2/feed-item-detail/feed-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page2/page2.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./page2/page2.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page2/page2.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Page 2\" icon=\"\" />\n\t</Page.actionBar>\n\n\t<StackLayout padding=\"10\">\n\t\t<Label text=\"The following button will navigate to a custom page and will hide the navigation bar. That page is not a part of main navigation.\"\n\t\t    class=\"text-center\" textWrap=\"true\" />\n\t\t<Button text=\"Go to Custom Page\" tap=\"goToCustomPage\" />\n\t\t\n\t\t<ListView items=\"{{ items }}\" itemTap=\"onItemTap\">\n\t\t\t<ListView.itemTemplate>\n\t\t\t\t<StackLayout orientation=\"horizontal\">\n\t\t\t\t\t<Label text=\"{{ name }}\" textWrap=\"true\"></Label>\n\t\t\t\t</StackLayout>\n\t\t\t</ListView.itemTemplate>\n\t\t</ListView>\n\t\t\n\t</StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page2/page2.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./page2/page2.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page2/shared/item.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page2/shared/item.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./page2/shared/item.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page3/page3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);

function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({});
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page3/page3.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./page3/page3.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page3/page3.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Page 3\" icon=\"\"/>\n\t</Page.actionBar>\n\n\t<StackLayout padding=\"10\">\n\t\t<Label text=\"Page 3\" class=\"h2 text-center\" textWrap=\"true\" />\n\t</StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page3/page3.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./page3/page3.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page4/page4.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);

function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({});
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page4/page4.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./page4/page4.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./page4/page4.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Page 4\" icon=\"\"/>\n\t</Page.actionBar>\n\n\t<StackLayout padding=\"10\">\n\t\t<Label text=\"Page 4\" class=\"h2 text-center\" textWrap=\"true\" />\n\t</StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page4/page4.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./page4/page4.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./secondary-page/secondary-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);

function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({});
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./secondary-page/secondary-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./secondary-page/secondary-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./secondary-page/secondary-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\n\t<Page.actionBar>\n\t\t<ActionBar title=\"Second Page\" icon=\"\"/>\n\t</Page.actionBar>\n\n\t<StackLayout padding=\"10\">\n\t\t<Label text=\"When you will press back, you won't see the navigation bar. You've to go back one more level.\" \n            class=\"text-center\" textWrap=\"true\" />\n\t</StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./secondary-page/secondary-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./secondary-page/secondary-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

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

/***/ "tns-core-modules/ui/frame/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/frame");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnRzIiwid2VicGFjazovLy8uL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlMS9wYWdlMS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlMS9wYWdlMS54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3BhZ2UyL3BhZ2UyLnRzIiwid2VicGFjazovLy8uL3BhZ2UyL3BhZ2UyLnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlMy9wYWdlMy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlMy9wYWdlMy54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZTQvcGFnZTQudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZTQvcGFnZTQueG1sIiwid2VicGFjazovLy8uL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnRzIiwid2VicGFjazovLy8uL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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QSwyQkFBMkIsNENBQTRDO0FBQ3ZFLEtBQUs7QUFDTCxDOzs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUVsRSxTQUFTLGFBQWEsQ0FBQyxJQUFlO0lBQ3pDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxtRkFBVSxDQUFDLEVBRWhDLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQsMGE7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4REFBOEQ7QUFDekYsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDUkEseUQ7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxrRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC1yb290LXZpZXctbW9kZWwudHNcIixcblx0XCIuL2FwcC1yb290LnRzXCI6IFwiLi9hcHAtcm9vdC50c1wiLFxuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC50c1wiLFxuXHRcIi4vY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UudHNcIjogXCIuL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnRzXCIsXG5cdFwiLi9jdXN0b20tcGFnZS9jdXN0b20tcGFnZS54bWxcIjogXCIuL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiLFxuXHRcIi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXIudHNcIjogXCIuL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyLnRzXCIsXG5cdFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci5qc1wiOiBcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IuanNcIixcblx0XCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzXCI6IFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50c1wiLFxuXHRcIi4vcGFnZTEvcGFnZTEudHNcIjogXCIuL3BhZ2UxL3BhZ2UxLnRzXCIsXG5cdFwiLi9wYWdlMS9wYWdlMS54bWxcIjogXCIuL3BhZ2UxL3BhZ2UxLnhtbFwiLFxuXHRcIi4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UudHNcIjogXCIuL3BhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlLnRzXCIsXG5cdFwiLi9wYWdlMi9mZWVkLWl0ZW0tZGV0YWlsL2ZlZWQtaXRlbS1kZXRhaWwtcGFnZS54bWxcIjogXCIuL3BhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlLnhtbFwiLFxuXHRcIi4vcGFnZTIvcGFnZTIudHNcIjogXCIuL3BhZ2UyL3BhZ2UyLnRzXCIsXG5cdFwiLi9wYWdlMi9wYWdlMi54bWxcIjogXCIuL3BhZ2UyL3BhZ2UyLnhtbFwiLFxuXHRcIi4vcGFnZTIvc2hhcmVkL2l0ZW0udHNcIjogXCIuL3BhZ2UyL3NoYXJlZC9pdGVtLnRzXCIsXG5cdFwiLi9wYWdlMy9wYWdlMy50c1wiOiBcIi4vcGFnZTMvcGFnZTMudHNcIixcblx0XCIuL3BhZ2UzL3BhZ2UzLnhtbFwiOiBcIi4vcGFnZTMvcGFnZTMueG1sXCIsXG5cdFwiLi9wYWdlNC9wYWdlNC50c1wiOiBcIi4vcGFnZTQvcGFnZTQudHNcIixcblx0XCIuL3BhZ2U0L3BhZ2U0LnhtbFwiOiBcIi4vcGFnZTQvcGFnZTQueG1sXCIsXG5cdFwiLi9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS50c1wiOiBcIi4vc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UudHNcIixcblx0XCIuL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiOiBcIi4vc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQXBwUm9vdFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJldmlvdXNNZW51OiBTdGFja0xheW91dDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXHQvKipcblx0ICogQ29udHJvbHMgdGhlIHByaW1hcnkgbmF2aWdhdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cblx0ICogQHBhcmFtIGFyZ3MgVGFwcGVkIG1lbnUgY29udGV4dFxuXHQgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCB0YXBwZWRNZW51ID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgcm9vdFZpZXcgPSA8R3JpZExheW91dD5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgbGV0IHBhZ2VDb250YWluZXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xuXG4gICAgICAgIC8vIHByZXZlbnQgY29uc2VjdXRpdmUgbmF2aWdhdGlvbiB0byB0aGUgc2FtZSBwYWdlXG4gICAgICAgIGlmICh0YXBwZWRNZW51ID09IEFwcFJvb3RWaWV3TW9kZWwucHJldmlvdXNNZW51KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBcHBSb290Vmlld01vZGVsLnByZXZpb3VzTWVudSA9IHRhcHBlZE1lbnU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCBmb3JtYXR0aW5nXG4gICAgICAgIHBhZ2VDb250YWluZXIuZWFjaENoaWxkVmlldygodmlldykgPT4ge1xuICAgICAgICAgICAgdmlldy5zZXQoXCJjbGFzc1wiLCBcImJvdHRvbS1uYXYtYnRuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBgJHt0YXBwZWRNZW51LmlkfS8ke3RhcHBlZE1lbnUuaWR9YCxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRhcHBlZE1lbnUuc2V0KFwiY2xhc3NcIiwgXCJib3R0b20tbmF2LWJ0biBib3R0b20tbmF2LWJ0bi1hY3RpdmVcIik7XG4gICAgfVxufSIsImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IEFwcFJvb3RWaWV3TW9kZWwgfSBmcm9tIFwiLi9hcHAtcm9vdC12aWV3LW1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgYXBwUm9vdCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgIGFwcFJvb3QuYmluZGluZ0NvbnRleHQgPSBuZXcgQXBwUm9vdFZpZXdNb2RlbCgpO1xufVxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBcXG5cXHRJIGFtIHVzaW5nIHBsYWluIHN0YWNrbGF5b3V0IGhlcmUsIHlvdSBjYW4gdXNlIGFueSBsYXlvdXQgeW91IHdhbnQuXFxuXFx0WW91IGFsc28gY2FuIHVzZSBuYXRpdmVzY3JpcHQtcmlwcGxlIHRvIGdldCBzb21lIHJpcHBsZSBlZmZlY3QuXFxuXFx0QnV0IHJlbWVtYmVyIHRvIG1vZGlmeSBjb21wb25lbnRzIG9uIEFwcFJvb3RWaWV3TW9kZWwgYW5kIFxcblxcdG1vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyIGZpbGUuXFxuIC0tPlxcblxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiIGxvYWRlZD1cXFwib25Mb2FkZWRcXFwiPlxcblxcblxcdDxGcmFtZSByb3c9XFxcIjBcXFwiIGRlZmF1bHRQYWdlPVxcXCJwYWdlMS9wYWdlMVxcXCIvPlxcblxcblxcdDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiI2ZmZlxcXCIgdmlzaWJpbGl0eT1cXFwidmlzaWJsZVxcXCIgcm93PVxcXCIxXFxcIiBjb2x1bW5zPVxcXCIqLCosKiwqXFxcIiBpZD1cXFwiYm90dG9tTmF2QmFyXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdlxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJwYWdlMVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuLWFjdGl2ZVxcXCIgY29sPVxcXCIwXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIj5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJiN4ZTg1MTtcXFwiIGNsYXNzPVxcXCJtZGkgYm90dG9tLW5hdi1pY29uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiUGFnZSAxXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwicGFnZTJcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LWJ0blxcXCIgdGFwPVxcXCJ7eyBuYXZpZ2F0ZSB9fVxcXCIgY29sPVxcXCIxXFxcIj5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJiN4ZTU0YztcXFwiIGNsYXNzPVxcXCJtZGkgYm90dG9tLW5hdi1pY29uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiUGFnZSAyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwicGFnZTNcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LWJ0blxcXCIgdGFwPVxcXCJ7eyBuYXZpZ2F0ZSB9fVxcXCIgY29sPVxcXCIyXFxcIj5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJiN4ZTBjYTtcXFwiIGNsYXNzPVxcXCJtZGkgYm90dG9tLW5hdi1pY29uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiUGFnZSAzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwicGFnZTRcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LWJ0blxcXCIgdGFwPVxcXCJ7eyBuYXZpZ2F0ZSB9fVxcXCIgY29sPVxcXCIzXFxcIj5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJiN4ZTdmNztcXFwiIGNsYXNzPVxcXCJtZGkgYm90dG9tLW5hdi1pY29uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiUGFnZSA0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdDwvR3JpZExheW91dD5cXG48L0dyaWRMYXlvdXQ+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLXJvb3QueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vYXBwLXJvb3QueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgVUlcXG5jb21wb25lbnRzIHRoYXQgaGF2ZSB0aGUgYnRuIGNsYXNzIG5hbWUuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5JIGFtIHVzaW5nIG1hdGVyaWFsIGZvbnQgaWNvbnMgaGVyZSwgeW91IGNhbiB1c2UgYW55IGljb24geW91IHdhbnQuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tZGlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIk1hdGVyaWFsSWNvbnMsIFxcXCJNYXRlcmlhbCBJY29uc1xcXCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItdG9wLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2VjZWNlY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci10b3Atd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2LWJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzg4ODg4OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2LWJ0bi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyMjNlOTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdi1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdi10ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcImNhcGl0YWxpemVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmFwcC5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbiIsIi8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gXCIuL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCJcblxuLyoqXG4gKiBJZiBhIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uIGlzIHBlcmZvcm1lZCBvbiB0aGUgYXBwbGljYXRpb24gc29tZXdoZXJlLFxuICogdW5oaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciBvbiBiYWNrIGtleSBwcmVzcy5cbiAqL1xuaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgYXBwLmFuZHJvaWQub24oYXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzKSA9PiB7XG4gICAgICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLnNob3dOYXZCYXIoKTtcbiAgICB9KTtcbn1cblxuYXBwLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG4iLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XG5cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZWQoKSB7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlJyxcbiAgICAgICAgLy8gYmFja1N0YWNrVmlzaWJsZSBtdXN0IGJlIGVuYWJsZWQsIHlvdSBkb24ndCBuZWVkIHRvIGV4cGxpY2l0bHkgbWVudGhpb24gaXQgYW55d2F5LCBpdCBpcyBlbmFibGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIHRob3VnaCBJIGFtIGNhbGxpbmcgaGlkZU5hdkJhciBoZXJlLCBpdCB3b24ndCBhZmZlY3QgYXQgYWxsLlxuICAgIC8vIHNvIHlvdSBuZWVkIG5vdCB0byBjYWxsIGl0IGZ1cnRoZXIsIGlmIHlvdSBzdGF5IG9uIHRoZSBzYW1lIHN0YWNrLlxuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiQ3VzdG9tIFBhZ2VcXFwiIGljb249XFxcIlxcXCIvPlxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxuXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiVGhpcyBwYWdlIGlzIG5vdCBhIHBhcnQgb2YgbWFpbiBuYXZpZ2F0aW9uLiBQcmVzcyBiYWNrIGJ1dHRvbiB0byByZXR1cm4gdG8gdGhlIG1haW4gdmlldy5cXFwiIFxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiT3IgcHJlc3MgdGhlIGJ1dHRvbiBiZWxvdyB0byBwcm9jZWVkIGZ1cnRoZXIuXFxcIiBcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcblxcdFxcdDxCdXR0b24gdGV4dD1cXFwiS2VlcCBOYXZpZ2F0aW5nXFxcIiB0YXA9XFxcInByb2NlZWRcXFwiIC8+XFxuXFx0PC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEFwcFJvb3RWaWV3TW9kZWwgfSBmcm9tIFwiLi4vYXBwLXJvb3Qtdmlldy1tb2RlbFwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyB0aGUgaGVscGVyIGZ1bmN0aW9ucyBuZWVkZWQgZm9yXG4gKiB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvbi4gSWYgeW91IG5vdGljZSB5b3UnbGwgc2VlIHRoYXQgdGhlcmVcbiAqIGFyZSB0d28gdHlwZXMgb2YgbmF2aWdhdGlvbiBpbiBCb3R0b20gTmF2aWdhdGlvbi4gT25lIGlzLCB1c2luZyB0aGVcbiAqIG1lbnVzIHByZXNlbnRlZCBpdCBuYXZpZ2F0aW9uIGJhciBpdHNlbGYsIGFuZCB0aGUgb3RoZXIgb25lIGlzIGEgc2Vjb25kYXJ5XG4gKiBuYXZpZ2F0aW9uIHdpdGhpbiBvbmUgb2YgdGhlIHByaW1hcnkgbWVudXMsIGUuZy4gY29udGFjdCBsaXN0IHRvIHNlbmQgbWVzc2FnZS4gVGhlXG4gKiBuYXZpZ2F0aW9uIGJhciBzaG91bGQgYmUgaGlkZGVuIGR1cmluZyB0aGlzIHR5cGUgb2YgbmF2aWdhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25IYW5kbGVyIHtcblxuXHQvKipcblx0ICogSGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIgZHVyaW5nIGEgdmlldy10by12aWV3IG5hdmlnYXRpb25cblx0ICovXG4gICAgcHVibGljIGhpZGVOYXZCYXIoKSB7XG4gICAgICAgIC8vIGlmIHRoZSBuYXZpZ2F0aW9uIHN0YWNrIGlzIG5vdCBlbXB0eSB0aGVuIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBoaWRkZW4gYWxyZWFkeVxuICAgICAgICBpZiAodG9wbW9zdCgpLmJhY2tTdGFjay5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByb290VmlldyA9IDxHcmlkTGF5b3V0PmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBsZXQgbmF2QmFyID0gPEdyaWRMYXlvdXQ+cm9vdFZpZXcuZ2V0Q2hpbGRBdCgxKTtcbiAgICAgICAgbmF2QmFyLnNldChcInZpc2liaWxpdHlcIiwgXCJjb2xsYXBzZWRcIik7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBTaG93IHRoZSBuYXZpZ2F0aW9uIGJhciBvbiBiYWNrIGtleSBwcmVzcyBmcm9tIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uXG5cdCAqL1xuICAgIHB1YmxpYyBzaG93TmF2QmFyKCkge1xuICAgICAgICAvLyBkbyBub3QgdW5oaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciB1bnRpbCBvbmx5IG9uZSBhY3Rpdml0eSBsZWZ0IGluIHRoZSBzdGFja1xuICAgICAgICBpZiAodG9wbW9zdCgpLmJhY2tTdGFjay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIGxldCBuYXZCYXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xuICAgICAgICBuYXZCYXIuc2V0KFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIik7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIG1ldGhvZCBzaW11bGF0ZXMgYSBuYXZpZ2F0aW9uIHRvIHRoZSBzcGVjaWZpZWQgbWVudSB1c2luZyB0aGUgY29yZVxuXHQgKiBuYXZpZ2F0aW9uIG1ldGhvZC4gVXNlIHRoaXMgbWV0aG9kIGZvciB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvbi5cblx0ICogQHBhcmFtIHN0cmluZyBUaGUgbWVudSB0byBiZSBuYXZpZ2F0ZWQsIGV4cGVjdHMgYW4gSURcblx0ICovXG4gICAgcHVibGljIHNpbXVsYXRlTmF2aWdhdGlvbihtZW51OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIGxldCBuYXZCYXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xuICAgICAgICBsZXQgdGFwcGVkVmlldyA9IDxTdGFja0xheW91dD5uYXZCYXIuZ2V0Vmlld0J5SWQobWVudSk7XG4gICAgICAgIC8vIGluaXRpYXRlIGEgdGFwIGV2ZW50IFxuICAgICAgICBuZXcgQXBwUm9vdFZpZXdNb2RlbCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGV2ZW50TmFtZTogXCJ0YXBcIixcbiAgICAgICAgICAgIG9iamVjdDogdGFwcGVkVmlld1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBPYnNlcnZhYmxlUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHByb3BlcnR5S2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy5PYnNlcnZhYmxlUHJvcGVydHkgPSBPYnNlcnZhYmxlUHJvcGVydHk7XG4iLCIvKipcblRoaXMgZmlsZSBkZWZpbmVzIGEgZGVjb3JhdG9yIHlvdSBjYW4gdXNlIHRvIGVuYWJsZSB0d28td2F5XG5iaW5kaW5nIG9uIHZpZXctbW9kZWwgcHJvcGVydGllcy5cblxuRm9yIGV4YW1wbGU6XG5cbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuXG5AT2JzZXJ2YWJsZVByb3BlcnR5KCkgbXlQcm9wZXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cblJlYWQgbW9yZSBhdCBodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL2Jsb2cvbmF0aXZlc2NyaXB0LW9ic2VydmFibGUtbWFnaWMtc3RyaW5nLXByb3BlcnR5LW5hbWUtYmUtZ29uZVxuKiovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2YWJsZVByb3BlcnR5KCkge1xuICAgIHJldHVybiAodGFyZ2V0OiBPYnNlcnZhYmxlLCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIlxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICBpZiAoYXBwLmlvcykge1xuICAgICAgICBhbGVydChcIlNvcnJ5LCBpdCBvbmx5IHdvcmtzIHdpdGggQW5kcm9pZCBjdXJyZW50bHkhXCIpO1xuICAgIH1cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XG4gICAgICAgICd0ZXh0JzogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMCkudG9TdHJpbmcoKVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9QYWdlMigpIHtcbiAgICAvLyBzaW11bGF0ZSBhIG5hdmlnYXRpb24gdG8gcGFnZTJcbiAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5zaW11bGF0ZU5hdmlnYXRpb24oXCJwYWdlMlwiKTtcbiAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBhZ2UgMVxcXCIgaWNvbj1cXFwiXFxcIiAvPlxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcblxcbiAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcbiAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgdGV4dD1cXFwiVXNlIHNpbXVsYXRlTmF2aWdhdGlvbiBtZXRob2QgZm9yIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBwcmltYXJ5IG5hdmlnYXRpb24uXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdvIHRvIFBhZ2UyXFxcIiB0YXA9XFxcImdvVG9QYWdlMlxcXCIgLz5cXG4gICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIHRleHQ9XFxcIlNwZWNpZnkgdGhlIGRlc2lyZWQgbWVudSBuYW1lIHRvIG5hdmlnYXRlLiBDbGljayBvbiB0aGUgYnV0dG9uIG92ZXJoZWFkIHRvIHNlZSBhbiBleGFtcGxlLlxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICAgICAgPExhYmVsXFxuICAgICAgICAgICAgdGV4dD1cXFwie3t0ZXh0fX1cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG4gPC9TdGFja0xheW91dD4gPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2UxL3BhZ2UxLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2UxL3BhZ2UxLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBFdmVudERhdGEsIFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9zaGFyZWQvaXRlbVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xyXG4gICAgY29uc3QgaXRlbSA9IGFyZ3MuY29udGV4dCBhcyBJdGVtO1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkJhY2tCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gYXJncy5vYmplY3QgYXMgVmlldztcclxuICAgIGNvbnN0IHBhZ2UgPSB2aWV3LnBhZ2UgYXMgUGFnZTtcclxuXHJcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xyXG59XHJcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlXFxyXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiICBcXHJcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxyXFxuXFxyXFxuICAgIDxBY3Rpb25CYXI+XFxyXFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0YXA9XFxcIm9uQmFja0J1dHRvblRhcFxcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG4gICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTAgaDNcXFwiIHRleHQ9XFxcInt7IGRlc2NyaXB0aW9uIH19XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiA+PC9MYWJlbD5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlMi9mZWVkLWl0ZW0tZGV0YWlsL2ZlZWQtaXRlbS1kZXRhaWwtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlMi9mZWVkLWl0ZW0tZGV0YWlsL2ZlZWQtaXRlbS1kZXRhaWwtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3NoYXJlZC9pdGVtXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5cblxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKSAlIDI7XG4gICAgdmFyIHN0ciA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgaWYgKGluZGV4ID09IDApIHN0ciA9IFwiXCI7XG4gICAgdmFyIGJpbmRpbmdPYmplY3QgPSB7J2l0ZW1zJzogW119O1xuICAgIGdldFN0cmluZyhcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TY2hvb2wtbHkvc2VydmVyL21hc3Rlci9kYXRhXCIgKyBzdHIgKyBcIi5qc29uXCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xuICAgICAgICBiaW5kaW5nT2JqZWN0IFsnaXRlbXMnXSA9IEpTT04ucGFyc2Uocik7XG4gICAgICAgIC8vY29uc29sZS5sb2cocik7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3QoYmluZGluZ09iamVjdCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb1RvQ3VzdG9tUGFnZSgpIHtcbiAgICAvLyBwZXJmb3JtaW5nIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb25cbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcImN1c3RvbS1wYWdlL2N1c3RvbS1wYWdlXCIsXG4gICAgfSk7XG4gICAgLy8gb25jZSB5b3UgY2FsbGVkIHRoaXMgbWV0aG9kIG9uY2UsIHlvdSBkb24ndCBuZWVkIHRvIGNhbGwgaXQgZnVydGhlciBpbiB0aGUgc2FtZSBzdGFja1xuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XG4gICAgY29uc3QgdmlldyA9IDxWaWV3PmFyZ3MudmlldztcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+dmlldy5wYWdlO1xuICAgIGNvbnN0IHRhcHBlZEl0ZW0gPSA8SXRlbT52aWV3LmJpbmRpbmdDb250ZXh0O1xuXG4gICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2VcIixcbiAgICAgICAgY29udGV4dDogdGFwcGVkSXRlbSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgfVxuICAgIH0pO1xufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiPlxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJQYWdlIDJcXFwiIGljb249XFxcIlxcXCIgLz5cXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcblxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIlRoZSBmb2xsb3dpbmcgYnV0dG9uIHdpbGwgbmF2aWdhdGUgdG8gYSBjdXN0b20gcGFnZSBhbmQgd2lsbCBoaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci4gVGhhdCBwYWdlIGlzIG5vdCBhIHBhcnQgb2YgbWFpbiBuYXZpZ2F0aW9uLlxcXCJcXG5cXHRcXHQgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXG5cXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIkdvIHRvIEN1c3RvbSBQYWdlXFxcIiB0YXA9XFxcImdvVG9DdXN0b21QYWdlXFxcIiAvPlxcblxcdFxcdFxcblxcdFxcdDxMaXN0VmlldyBpdGVtcz1cXFwie3sgaXRlbXMgfX1cXFwiIGl0ZW1UYXA9XFxcIm9uSXRlbVRhcFxcXCI+XFxuXFx0XFx0XFx0PExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcdFxcdFxcdDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcblxcdFxcdDwvTGlzdFZpZXc+XFxuXFx0XFx0XFxuXFx0PC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZTIvcGFnZTIueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZTIvcGFnZTIueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KHtcblxuICAgIH0pO1xuXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBhZ2UgM1xcXCIgaWNvbj1cXFwiXFxcIi8+XFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXG5cXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJQYWdlIDNcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuXFx0PC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZTMvcGFnZTMueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZTMvcGFnZTMueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KHtcblxuICAgIH0pO1xuXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBhZ2UgNFxcXCIgaWNvbj1cXFwiXFxcIi8+XFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXG5cXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJQYWdlIDRcXFwiIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuXFx0PC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZTQvcGFnZTQueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZTQvcGFnZTQueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XG5cbiAgICB9KTtcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiU2Vjb25kIFBhZ2VcXFwiIGljb249XFxcIlxcXCIvPlxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxuXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiV2hlbiB5b3Ugd2lsbCBwcmVzcyBiYWNrLCB5b3Ugd29uJ3Qgc2VlIHRoZSBuYXZpZ2F0aW9uIGJhci4gWW91J3ZlIHRvIGdvIGJhY2sgb25lIG1vcmUgbGV2ZWwuXFxcIiBcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcblxcdDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==