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
	"./page3/page3.css": "./page3/page3.css",
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
module.exports = "<!-- \r\n\tI am using plain stacklayout here, you can use any layout you want.\r\n\tYou also can use nativescript-ripple to get some ripple effect.\r\n\tBut remember to modify components on AppRootViewModel and \r\n\tmodules/navigation-handler file.\r\n -->\r\n\r\n<GridLayout rows=\"*, auto\" columns=\"*\" loaded=\"onLoaded\">\r\n\t<Frame row=\"0\" defaultPage=\"page1/page1\"/>\r\n\t<!---->\r\n\r\n\r\n\t<GridLayout backgroundColor=\"#fff\" visibility=\"visible\" row=\"1\" columns=\"*,*,*,*\" id=\"bottomNavBar\" class=\"bottom-nav\">\r\n\t\t<StackLayout id=\"page1\" class=\"bottom-nav-btn-active\" col=\"0\" tap=\"{{ navigate }}\">\r\n\t\t\t\t<Label text=\"&#xe851;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Page 1\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"page2\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"1\">\r\n\t\t\t\t<Label text=\"&#xe54c;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Page 2\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"page3\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"2\">\r\n\t\t\t\t<Label text=\"&#xe0ca;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Page 3\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"page4\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"3\">\r\n\t\t\t\t<Label text=\"&#xe7f7;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Page 4\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t</GridLayout>\r\n\r\n\t<!---->\r\n</GridLayout>"; 
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
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nFor example, the following CSS rule changes the font size of all UI\r\ncomponents that have the btn class name.\r\n"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"comment","comment":"\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"comment","comment":"\r\nI am using material font icons here, you can use any icon you want.\r\n"},{"type":"rule","selectors":[".mdi"],"declarations":[{"type":"declaration","property":"font-family","value":"MaterialIcons, \"Material Icons\""}]},{"type":"rule","selectors":[".bottom-nav"],"declarations":[{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"border-top-color","value":"#ececec"},{"type":"declaration","property":"border-top-width","value":"1"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"bottom","value":"0"},{"type":"declaration","property":"position","value":"absolute"}]},{"type":"rule","selectors":[".bottom-nav-btn"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"color","value":"#888888"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".bottom-nav-btn-active"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"color","value":"#223e92"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".bottom-nav-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".bottom-nav-text"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"text-transform","value":"capitalize"}]}],"parsingErrors":[]}};; 
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
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Custom Page\" icon=\"\"/>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Label text=\"This page is not a part of main navigation. Press back button to return to the main view.\" \r\n            class=\"text-center\" textWrap=\"true\" />\r\n        <Label text=\"Or press the button below to proceed further.\" \r\n            class=\"text-center\" textWrap=\"true\" />\r\n\t\t<Button text=\"Keep Navigating\" tap=\"proceed\" />\r\n\t</StackLayout>\r\n</Page>"; 
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
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n    <Page.actionBar>\r\n        <ActionBar title=\"Page 1\" icon=\"\" />\r\n    </Page.actionBar>\r\n\r\n    <StackLayout padding=\"10\">\r\n        <Label\r\n            text=\"Use simulateNavigation method for view-to-view navigation. This can be used for primary navigation.\"\r\n            class=\"text-center\" textWrap=\"true\" />\r\n        <Button text=\"Go to Page2\" tap=\"goToPage2\" />\r\n        <Label\r\n            text=\"Specify the desired menu name to navigate. Click on the button overhead to see an example.\"\r\n            class=\"text-center\" textWrap=\"true\" />\r\n        <Label\r\n            text=\"{{text}}\"\r\n            class=\"text-center\" textWrap=\"true\" />\r\n    </StackLayout> \r\n \r\n </Page>"; 
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
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Page 2\" icon=\"\" />\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Label text=\"The following button will navigate to a custom page and will hide the navigation bar. That page is not a part of main navigation.\"\r\n\t\t    class=\"text-center\" textWrap=\"true\" />\r\n\t\t<Button text=\"Go to Custom Page\" tap=\"goToCustomPage\" />\r\n\t\t\r\n\t\t<ListView items=\"{{ items }}\" itemTap=\"onItemTap\">\r\n\t\t\t<ListView.itemTemplate>\r\n\t\t\t\t<StackLayout orientation=\"horizontal\">\r\n\t\t\t\t\t<Label text=\"{{ name }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</ListView.itemTemplate>\r\n\t\t</ListView>\r\n\t\t\r\n\t</StackLayout>\r\n</Page>"; 
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

/***/ "./page3/page3.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".action-image"],"declarations":[{"type":"declaration","property":"width","value":"40"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"vertical-align","value":"center"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./page3/page3.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./page3/page3.css" });
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
    page.addCssFile("page3.css");
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
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<!--<ActionBar title=\"Jobs\">\r\n\t\t\t<StackLayout orientation=\"horizontal\"\r\n\t\t\t\t\t\t ios:horizontalAlignment=\"center\"\r\n\t\t\t\t\t\t android:horizontalAlignment=\"left\">\r\n\t\t\t\t<Image src=\"res://home\" stretch=\"none\" class=\"action-image\"></Image>\r\n\t\t\t\t<SearchBar></SearchBar>\r\n\t\t\t</StackLayout>\r\n\t\t</ActionBar>-->\r\n\t\t<ActionBar title=\"App Icon Demo\" android.icon=\"res://home\" android.iconVisibility=\"always\"\r\n\t\t ios.icon=\"res://home\" ios.iconVisibility=\"always\">\r\n\t\t</ActionBar>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Label text=\"Jobs and internships are coming soon!\" class=\"h2 text-center\" textWrap=\"true\" />\r\n\t\t<StackLayout style=\"border-radius: 10; border-color: red; border-width: 4;\">\r\n\t\t\t<Label text=\"title\" class=\"h1\" />\r\n\t\t\t<Label text=\"LONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHITLONG  SHIT\"\r\n\t\t\t\t\tclass=\"text-left\" textWrap=\"true\"/>\r\n\t\t\t<Button text=\"Read more\" style=\"horizontal-align: right;\" />\r\n\t\t</StackLayout>\r\n\t</StackLayout>\r\n\t\r\n\r\n</Page>"; 
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTextChange", function() { return onTextChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClear", function() { return onClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmit", function() { return onSubmit; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);

function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({});
}
function onTextChange(args) {
    console.log("change");
}
function onClear(args) {
    console.log("clear");
}
function onSubmit(args) {
    console.log("submit");
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
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar>\r\n\t\t\t<SearchBar hint=\"HINT\"\r\n\t\t\t\t\t   clear=\"onClear\"\r\n\t\t\t\t\t   submit=\"onSubmit\"></SearchBar>\r\n\t\t</ActionBar>\r\n\t</Page.actionBar>\r\n\t<ScrollView orientation=\"vertical\">\r\n    <GridLayout rows=\"200 200 200 200 200 200 200 200 200 200\">\r\n        <Label class=\"m-10\" row=\"0\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"1\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"2\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"3\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"4\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"5\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"6\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"7\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"8\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"9\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n    </GridLayout>\r\n</ScrollView>\r\n</Page>"; 
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
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Second Page\" icon=\"\"/>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Label text=\"When you will press back, you won't see the navigation bar. You've to go back one more level.\" \r\n            class=\"text-center\" textWrap=\"true\" />\r\n\t</StackLayout>\r\n</Page>"; 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnRzIiwid2VicGFjazovLy8uL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlMS9wYWdlMS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlMS9wYWdlMS54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3BhZ2UyL3BhZ2UyLnRzIiwid2VicGFjazovLy8uL3BhZ2UyL3BhZ2UyLnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlMy9wYWdlMy5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZTMvcGFnZTMudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZTMvcGFnZTMueG1sIiwid2VicGFjazovLy8uL3BhZ2U0L3BhZ2U0LnRzIiwid2VicGFjazovLy8uL3BhZ2U0L3BhZ2U0LnhtbCIsIndlYnBhY2s6Ly8vLi9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS54bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBQSwrRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwLXJvb3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vYXBwLXJvb3QudHNcIjogXCIuL2FwcC1yb290LnRzXCIsXG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9jdXN0b20tcGFnZS9jdXN0b20tcGFnZS50c1wiOiBcIi4vY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UudHNcIixcblx0XCIuL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiOiBcIi4vY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UueG1sXCIsXG5cdFwiLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlci50c1wiOiBcIi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXIudHNcIixcblx0XCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLmpzXCI6IFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci5qc1wiLFxuXHRcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IudHNcIjogXCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzXCIsXG5cdFwiLi9wYWdlMS9wYWdlMS50c1wiOiBcIi4vcGFnZTEvcGFnZTEudHNcIixcblx0XCIuL3BhZ2UxL3BhZ2UxLnhtbFwiOiBcIi4vcGFnZTEvcGFnZTEueG1sXCIsXG5cdFwiLi9wYWdlMi9mZWVkLWl0ZW0tZGV0YWlsL2ZlZWQtaXRlbS1kZXRhaWwtcGFnZS50c1wiOiBcIi4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UudHNcIixcblx0XCIuL3BhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlLnhtbFwiOiBcIi4vcGFnZTIvZmVlZC1pdGVtLWRldGFpbC9mZWVkLWl0ZW0tZGV0YWlsLXBhZ2UueG1sXCIsXG5cdFwiLi9wYWdlMi9wYWdlMi50c1wiOiBcIi4vcGFnZTIvcGFnZTIudHNcIixcblx0XCIuL3BhZ2UyL3BhZ2UyLnhtbFwiOiBcIi4vcGFnZTIvcGFnZTIueG1sXCIsXG5cdFwiLi9wYWdlMi9zaGFyZWQvaXRlbS50c1wiOiBcIi4vcGFnZTIvc2hhcmVkL2l0ZW0udHNcIixcblx0XCIuL3BhZ2UzL3BhZ2UzLmNzc1wiOiBcIi4vcGFnZTMvcGFnZTMuY3NzXCIsXG5cdFwiLi9wYWdlMy9wYWdlMy50c1wiOiBcIi4vcGFnZTMvcGFnZTMudHNcIixcblx0XCIuL3BhZ2UzL3BhZ2UzLnhtbFwiOiBcIi4vcGFnZTMvcGFnZTMueG1sXCIsXG5cdFwiLi9wYWdlNC9wYWdlNC50c1wiOiBcIi4vcGFnZTQvcGFnZTQudHNcIixcblx0XCIuL3BhZ2U0L3BhZ2U0LnhtbFwiOiBcIi4vcGFnZTQvcGFnZTQueG1sXCIsXG5cdFwiLi9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS50c1wiOiBcIi4vc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UudHNcIixcblx0XCIuL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiOiBcIi4vc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCJcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwUm9vdFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHByZXZpb3VzTWVudTogU3RhY2tMYXlvdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogQ29udHJvbHMgdGhlIHByaW1hcnkgbmF2aWdhdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cclxuXHQgKiBAcGFyYW0gYXJncyBUYXBwZWQgbWVudSBjb250ZXh0XHJcblx0ICovXHJcbiAgICBwdWJsaWMgbmF2aWdhdGUoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgbGV0IHRhcHBlZE1lbnUgPSA8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgbGV0IHBhZ2VDb250YWluZXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xyXG5cclxuICAgICAgICAvLyBwcmV2ZW50IGNvbnNlY3V0aXZlIG5hdmlnYXRpb24gdG8gdGhlIHNhbWUgcGFnZVxyXG4gICAgICAgIGlmICh0YXBwZWRNZW51ID09IEFwcFJvb3RWaWV3TW9kZWwucHJldmlvdXNNZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBcHBSb290Vmlld01vZGVsLnByZXZpb3VzTWVudSA9IHRhcHBlZE1lbnU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCBmb3JtYXR0aW5nXHJcbiAgICAgICAgcGFnZUNvbnRhaW5lci5lYWNoQ2hpbGRWaWV3KCh2aWV3KSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXcuc2V0KFwiY2xhc3NcIiwgXCJib3R0b20tbmF2LWJ0blwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IGAke3RhcHBlZE1lbnUuaWR9LyR7dGFwcGVkTWVudS5pZH1gLFxyXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFwcGVkTWVudS5zZXQoXCJjbGFzc1wiLCBcImJvdHRvbS1uYXYtYnRuIGJvdHRvbS1uYXYtYnRuLWFjdGl2ZVwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xyXG5pbXBvcnQgeyBBcHBSb290Vmlld01vZGVsIH0gZnJvbSBcIi4vYXBwLXJvb3Qtdmlldy1tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgbGV0IGFwcFJvb3QgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGFwcFJvb3QuYmluZGluZ0NvbnRleHQgPSBuZXcgQXBwUm9vdFZpZXdNb2RlbCgpO1xyXG59XHJcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gXFxyXFxuXFx0SSBhbSB1c2luZyBwbGFpbiBzdGFja2xheW91dCBoZXJlLCB5b3UgY2FuIHVzZSBhbnkgbGF5b3V0IHlvdSB3YW50LlxcclxcblxcdFlvdSBhbHNvIGNhbiB1c2UgbmF0aXZlc2NyaXB0LXJpcHBsZSB0byBnZXQgc29tZSByaXBwbGUgZWZmZWN0LlxcclxcblxcdEJ1dCByZW1lbWJlciB0byBtb2RpZnkgY29tcG9uZW50cyBvbiBBcHBSb290Vmlld01vZGVsIGFuZCBcXHJcXG5cXHRtb2R1bGVzL25hdmlnYXRpb24taGFuZGxlciBmaWxlLlxcclxcbiAtLT5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiBsb2FkZWQ9XFxcIm9uTG9hZGVkXFxcIj5cXHJcXG5cXHQ8RnJhbWUgcm93PVxcXCIwXFxcIiBkZWZhdWx0UGFnZT1cXFwicGFnZTEvcGFnZTFcXFwiLz5cXHJcXG5cXHQ8IS0tLS0+XFxyXFxuXFxyXFxuXFxyXFxuXFx0PEdyaWRMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCIjZmZmXFxcIiB2aXNpYmlsaXR5PVxcXCJ2aXNpYmxlXFxcIiByb3c9XFxcIjFcXFwiIGNvbHVtbnM9XFxcIiosKiwqLCpcXFwiIGlkPVxcXCJib3R0b21OYXZCYXJcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2XFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgaWQ9XFxcInBhZ2UxXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi1idG4tYWN0aXZlXFxcIiBjb2w9XFxcIjBcXFwiIHRhcD1cXFwie3sgbmF2aWdhdGUgfX1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlODUxO1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJQYWdlIDFcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJwYWdlMlxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjFcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlNTRjO1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJQYWdlIDJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJwYWdlM1xcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlMGNhO1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJQYWdlIDNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJwYWdlNFxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlN2Y3O1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJQYWdlIDRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcdDwhLS0tLT5cXHJcXG48L0dyaWRMYXlvdXQ+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLXJvb3QueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vYXBwLXJvb3QueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxyXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcclxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXHJcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXHJcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXHJcXG5cXHJcXG4vKlxcclxcbkZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgVUlcXHJcXG5jb21wb25lbnRzIHRoYXQgaGF2ZSB0aGUgYnRuIGNsYXNzIG5hbWUuXFxyXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcclxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcclxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxyXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXHJcXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXHJcXG5JIGFtIHVzaW5nIG1hdGVyaWFsIGZvbnQgaWNvbnMgaGVyZSwgeW91IGNhbiB1c2UgYW55IGljb24geW91IHdhbnQuXFxyXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tZGlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIk1hdGVyaWFsSWNvbnMsIFxcXCJNYXRlcmlhbCBJY29uc1xcXCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItdG9wLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2VjZWNlY1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci10b3Atd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvdHRvbVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwb3NpdGlvblwiLFwidmFsdWVcIjpcImFic29sdXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvdHRvbS1uYXYtYnRuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjODg4ODg4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvdHRvbS1uYXYtYnRuLWFjdGl2ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzIyM2U5MlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2LWljb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2LXRleHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwiY2FwaXRhbGl6ZVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcclxuYXBwLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XHJcbi8qXHJcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxyXG5iZSBleGVjdXRlZCBvbiBpT1MuXHJcbiovXHJcbiIsIi8qXHJcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxyXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxyXG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXHJcbiovXHJcblxyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIlxyXG5cclxuLyoqXHJcbiAqIElmIGEgdmlldy10by12aWV3IG5hdmlnYXRpb24gaXMgcGVyZm9ybWVkIG9uIHRoZSBhcHBsaWNhdGlvbiBzb21ld2hlcmUsXHJcbiAqIHVuaGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIgb24gYmFjayBrZXkgcHJlc3MuXHJcbiAqL1xyXG5pZiAoYXBwLmFuZHJvaWQpIHtcclxuICAgIGFwcC5hbmRyb2lkLm9uKGFwcC5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoYXJncykgPT4ge1xyXG4gICAgICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLnNob3dOYXZCYXIoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hcHAucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcclxuXHJcbi8qXHJcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxyXG5iZSBleGVjdXRlZCBvbiBpT1MuXHJcbiovXHJcbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWVkKCkge1xyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiAnc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UnLFxyXG4gICAgICAgIC8vIGJhY2tTdGFja1Zpc2libGUgbXVzdCBiZSBlbmFibGVkLCB5b3UgZG9uJ3QgbmVlZCB0byBleHBsaWNpdGx5IG1lbnRoaW9uIGl0IGFueXdheSwgaXQgaXMgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyB0aG91Z2ggSSBhbSBjYWxsaW5nIGhpZGVOYXZCYXIgaGVyZSwgaXQgd29uJ3QgYWZmZWN0IGF0IGFsbC5cclxuICAgIC8vIHNvIHlvdSBuZWVkIG5vdCB0byBjYWxsIGl0IGZ1cnRoZXIsIGlmIHlvdSBzdGF5IG9uIHRoZSBzYW1lIHN0YWNrLlxyXG4gICAgbmV3IE5hdmlnYXRpb25IYW5kbGVyKCkuaGlkZU5hdkJhcigpO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIkN1c3RvbSBQYWdlXFxcIiBpY29uPVxcXCJcXFwiLz5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIlRoaXMgcGFnZSBpcyBub3QgYSBwYXJ0IG9mIG1haW4gbmF2aWdhdGlvbi4gUHJlc3MgYmFjayBidXR0b24gdG8gcmV0dXJuIHRvIHRoZSBtYWluIHZpZXcuXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIk9yIHByZXNzIHRoZSBidXR0b24gYmVsb3cgdG8gcHJvY2VlZCBmdXJ0aGVyLlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG5cXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIktlZXAgTmF2aWdhdGluZ1xcXCIgdGFwPVxcXCJwcm9jZWVkXFxcIiAvPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBBcHBSb290Vmlld01vZGVsIH0gZnJvbSBcIi4uL2FwcC1yb290LXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBjb250YWlucyB0aGUgaGVscGVyIGZ1bmN0aW9ucyBuZWVkZWQgZm9yXHJcbiAqIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLiBJZiB5b3Ugbm90aWNlIHlvdSdsbCBzZWUgdGhhdCB0aGVyZVxyXG4gKiBhcmUgdHdvIHR5cGVzIG9mIG5hdmlnYXRpb24gaW4gQm90dG9tIE5hdmlnYXRpb24uIE9uZSBpcywgdXNpbmcgdGhlXHJcbiAqIG1lbnVzIHByZXNlbnRlZCBpdCBuYXZpZ2F0aW9uIGJhciBpdHNlbGYsIGFuZCB0aGUgb3RoZXIgb25lIGlzIGEgc2Vjb25kYXJ5XHJcbiAqIG5hdmlnYXRpb24gd2l0aGluIG9uZSBvZiB0aGUgcHJpbWFyeSBtZW51cywgZS5nLiBjb250YWN0IGxpc3QgdG8gc2VuZCBtZXNzYWdlLiBUaGVcclxuICogbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIGhpZGRlbiBkdXJpbmcgdGhpcyB0eXBlIG9mIG5hdmlnYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkhhbmRsZXIge1xyXG5cclxuXHQvKipcclxuXHQgKiBIaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciBkdXJpbmcgYSB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvblxyXG5cdCAqL1xyXG4gICAgcHVibGljIGhpZGVOYXZCYXIoKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIG5hdmlnYXRpb24gc3RhY2sgaXMgbm90IGVtcHR5IHRoZW4gdGhlIG5hdmlnYXRpb24gYmFyIGlzIGhpZGRlbiBhbHJlYWR5XHJcbiAgICAgICAgaWYgKHRvcG1vc3QoKS5iYWNrU3RhY2subGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm9vdFZpZXcgPSA8R3JpZExheW91dD5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBsZXQgbmF2QmFyID0gPEdyaWRMYXlvdXQ+cm9vdFZpZXcuZ2V0Q2hpbGRBdCgxKTtcclxuICAgICAgICBuYXZCYXIuc2V0KFwidmlzaWJpbGl0eVwiLCBcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogU2hvdyB0aGUgbmF2aWdhdGlvbiBiYXIgb24gYmFjayBrZXkgcHJlc3MgZnJvbSB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvblxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNob3dOYXZCYXIoKSB7XHJcbiAgICAgICAgLy8gZG8gbm90IHVuaGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIgdW50aWwgb25seSBvbmUgYWN0aXZpdHkgbGVmdCBpbiB0aGUgc3RhY2tcclxuICAgICAgICBpZiAodG9wbW9zdCgpLmJhY2tTdGFjay5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgbGV0IG5hdkJhciA9IDxHcmlkTGF5b3V0PnJvb3RWaWV3LmdldENoaWxkQXQoMSk7XHJcbiAgICAgICAgbmF2QmFyLnNldChcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBzaW11bGF0ZXMgYSBuYXZpZ2F0aW9uIHRvIHRoZSBzcGVjaWZpZWQgbWVudSB1c2luZyB0aGUgY29yZVxyXG5cdCAqIG5hdmlnYXRpb24gbWV0aG9kLiBVc2UgdGhpcyBtZXRob2QgZm9yIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLlxyXG5cdCAqIEBwYXJhbSBzdHJpbmcgVGhlIG1lbnUgdG8gYmUgbmF2aWdhdGVkLCBleHBlY3RzIGFuIElEXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2ltdWxhdGVOYXZpZ2F0aW9uKG1lbnU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByb290VmlldyA9IDxHcmlkTGF5b3V0PmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIGxldCBuYXZCYXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xyXG4gICAgICAgIGxldCB0YXBwZWRWaWV3ID0gPFN0YWNrTGF5b3V0Pm5hdkJhci5nZXRWaWV3QnlJZChtZW51KTtcclxuICAgICAgICAvLyBpbml0aWF0ZSBhIHRhcCBldmVudCBcclxuICAgICAgICBuZXcgQXBwUm9vdFZpZXdNb2RlbCgpLm5hdmlnYXRlKHtcclxuICAgICAgICAgICAgZXZlbnROYW1lOiBcInRhcFwiLFxyXG4gICAgICAgICAgICBvYmplY3Q6IHRhcHBlZFZpZXdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIE9ic2VydmFibGVQcm9wZXJ0eSgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLk9ic2VydmFibGVQcm9wZXJ0eSA9IE9ic2VydmFibGVQcm9wZXJ0eTtcclxuIiwiLyoqXHJcblRoaXMgZmlsZSBkZWZpbmVzIGEgZGVjb3JhdG9yIHlvdSBjYW4gdXNlIHRvIGVuYWJsZSB0d28td2F5XHJcbmJpbmRpbmcgb24gdmlldy1tb2RlbCBwcm9wZXJ0aWVzLlxyXG5cclxuRm9yIGV4YW1wbGU6XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcclxuXHJcbkBPYnNlcnZhYmxlUHJvcGVydHkoKSBteVByb3BlcnR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblJlYWQgbW9yZSBhdCBodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL2Jsb2cvbmF0aXZlc2NyaXB0LW9ic2VydmFibGUtbWFnaWMtc3RyaW5nLXByb3BlcnR5LW5hbWUtYmUtZ29uZVxyXG4qKi9cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZhYmxlUHJvcGVydHkoKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogT2JzZXJ2YWJsZSwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCJcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgaWYgKGFwcC5pb3MpIHtcclxuICAgICAgICBhbGVydChcIlNvcnJ5LCBpdCBvbmx5IHdvcmtzIHdpdGggQW5kcm9pZCBjdXJyZW50bHkhXCIpO1xyXG4gICAgfVxyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG4gICAgICAgICd0ZXh0JzogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMCkudG9TdHJpbmcoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvUGFnZTIoKSB7XHJcbiAgICAvLyBzaW11bGF0ZSBhIG5hdmlnYXRpb24gdG8gcGFnZTJcclxuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLnNpbXVsYXRlTmF2aWdhdGlvbihcInBhZ2UyXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBhZ2UgMVxcXCIgaWNvbj1cXFwiXFxcIiAvPlxcclxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgdGV4dD1cXFwiVXNlIHNpbXVsYXRlTmF2aWdhdGlvbiBtZXRob2QgZm9yIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBwcmltYXJ5IG5hdmlnYXRpb24uXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdvIHRvIFBhZ2UyXFxcIiB0YXA9XFxcImdvVG9QYWdlMlxcXCIgLz5cXHJcXG4gICAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgICAgIHRleHQ9XFxcIlNwZWNpZnkgdGhlIGRlc2lyZWQgbWVudSBuYW1lIHRvIG5hdmlnYXRlLiBDbGljayBvbiB0aGUgYnV0dG9uIG92ZXJoZWFkIHRvIHNlZSBhbiBleGFtcGxlLlxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgdGV4dD1cXFwie3t0ZXh0fX1cXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgPC9TdGFja0xheW91dD4gXFxyXFxuIFxcclxcbiA8L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZTEvcGFnZTEueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZTEvcGFnZTEueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IEV2ZW50RGF0YSwgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3NoYXJlZC9pdGVtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XHJcbiAgICBjb25zdCBpdGVtID0gYXJncy5jb250ZXh0IGFzIEl0ZW07XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gaXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQmFja0J1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3O1xyXG4gICAgY29uc3QgcGFnZSA9IHZpZXcucGFnZSBhcyBQYWdlO1xyXG5cclxuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XHJcbn1cclxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2VcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgIFxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXHJcXG5cXHJcXG4gICAgPEFjdGlvbkJhcj5cXHJcXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRhcD1cXFwib25CYWNrQnV0dG9uVGFwXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8R3JpZExheW91dD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMCBoM1xcXCIgdGV4dD1cXFwie3sgZGVzY3JpcHRpb24gfX1cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiID48L0xhYmVsPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9zaGFyZWQvaXRlbVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIFxyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKSAlIDI7XHJcbiAgICB2YXIgc3RyID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgIGlmIChpbmRleCA9PSAwKSBzdHIgPSBcIlwiO1xyXG4gICAgdmFyIGJpbmRpbmdPYmplY3QgPSB7J2l0ZW1zJzogW119O1xyXG4gICAgZ2V0U3RyaW5nKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NjaG9vbC1seS9zZXJ2ZXIvbWFzdGVyL2RhdGFcIiArIHN0ciArIFwiLmpzb25cIikudGhlbigocjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgYmluZGluZ09iamVjdCBbJ2l0ZW1zJ10gPSBKU09OLnBhcnNlKHIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocik7XHJcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3QoYmluZGluZ09iamVjdCk7XHJcbiAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIC8vID4+IChoaWRlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyA8PCAoaGlkZSlcclxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0N1c3RvbVBhZ2UoKSB7XHJcbiAgICAvLyBwZXJmb3JtaW5nIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb25cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogXCJjdXN0b20tcGFnZS9jdXN0b20tcGFnZVwiLFxyXG4gICAgfSk7XHJcbiAgICAvLyBvbmNlIHlvdSBjYWxsZWQgdGhpcyBtZXRob2Qgb25jZSwgeW91IGRvbid0IG5lZWQgdG8gY2FsbCBpdCBmdXJ0aGVyIGluIHRoZSBzYW1lIHN0YWNrXHJcbiAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5oaWRlTmF2QmFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IDxWaWV3PmFyZ3MudmlldztcclxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT52aWV3LnBhZ2U7XHJcbiAgICBjb25zdCB0YXBwZWRJdGVtID0gPEl0ZW0+dmlldy5iaW5kaW5nQ29udGV4dDtcclxuXHJcbiAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlXCIsXHJcbiAgICAgICAgY29udGV4dDogdGFwcGVkSXRlbSxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiUGFnZSAyXFxcIiBpY29uPVxcXCJcXFwiIC8+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJUaGUgZm9sbG93aW5nIGJ1dHRvbiB3aWxsIG5hdmlnYXRlIHRvIGEgY3VzdG9tIHBhZ2UgYW5kIHdpbGwgaGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIuIFRoYXQgcGFnZSBpcyBub3QgYSBwYXJ0IG9mIG1haW4gbmF2aWdhdGlvbi5cXFwiXFxyXFxuXFx0XFx0ICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuXFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJHbyB0byBDdXN0b20gUGFnZVxcXCIgdGFwPVxcXCJnb1RvQ3VzdG9tUGFnZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQ8TGlzdFZpZXcgaXRlbXM9XFxcInt7IGl0ZW1zIH19XFxcIiBpdGVtVGFwPVxcXCJvbkl0ZW1UYXBcXFwiPlxcclxcblxcdFxcdFxcdDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXHJcXG5cXHRcXHQ8L0xpc3RWaWV3PlxcclxcblxcdFxcdFxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2UyL3BhZ2UyLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2UyL3BhZ2UyLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWN0aW9uLWltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjQwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZTMvcGFnZTMuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9wYWdlMy9wYWdlMy5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuXHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHBhZ2UuYWRkQ3NzRmlsZSAoXCJwYWdlMy5jc3NcIik7XHJcblxyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDwhLS08QWN0aW9uQmFyIHRpdGxlPVxcXCJKb2JzXFxcIj5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0IGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0IGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwicmVzOi8vaG9tZVxcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImFjdGlvbi1pbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHRcXHRcXHQ8U2VhcmNoQmFyPjwvU2VhcmNoQmFyPlxcclxcblxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+LS0+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiQXBwIEljb24gRGVtb1xcXCIgYW5kcm9pZC5pY29uPVxcXCJyZXM6Ly9ob21lXFxcIiBhbmRyb2lkLmljb25WaXNpYmlsaXR5PVxcXCJhbHdheXNcXFwiXFxyXFxuXFx0XFx0IGlvcy5pY29uPVxcXCJyZXM6Ly9ob21lXFxcIiBpb3MuaWNvblZpc2liaWxpdHk9XFxcImFsd2F5c1xcXCI+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJKb2JzIGFuZCBpbnRlcm5zaGlwcyBhcmUgY29taW5nIHNvb24hXFxcIiBjbGFzcz1cXFwiaDIgdGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czogMTA7IGJvcmRlci1jb2xvcjogcmVkOyBib3JkZXItd2lkdGg6IDQ7XFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJoMVxcXCIgLz5cXHJcXG5cXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRMT05HICBTSElUTE9ORyAgU0hJVExPTkcgIFNISVRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0Y2xhc3M9XFxcInRleHQtbGVmdFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIlJlYWQgbW9yZVxcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcXCIgLz5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFxyXFxuXFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2UzL3BhZ2UzLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2UzL3BhZ2UzLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG5cclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XHJcblxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25UZXh0Q2hhbmdlKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25DbGVhcihhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25TdWJtaXQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJzdWJtaXRcIik7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhcj5cXHJcXG5cXHRcXHRcXHQ8U2VhcmNoQmFyIGhpbnQ9XFxcIkhJTlRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgY2xlYXI9XFxcIm9uQ2xlYXJcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgc3VibWl0PVxcXCJvblN1Ym1pdFxcXCI+PC9TZWFyY2hCYXI+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHQ8U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcclxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIyMDAgMjAwIDIwMCAyMDAgMjAwIDIwMCAyMDAgMjAwIDIwMCAyMDBcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjBcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCIxXFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjNcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCI0XFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiNVxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjZcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCI3XFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiOFxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjlcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZTQvcGFnZTQueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZTQvcGFnZTQueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG5cclxuICAgIH0pO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlY29uZCBQYWdlXFxcIiBpY29uPVxcXCJcXFwiLz5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIldoZW4geW91IHdpbGwgcHJlc3MgYmFjaywgeW91IHdvbid0IHNlZSB0aGUgbmF2aWdhdGlvbiBiYXIuIFlvdSd2ZSB0byBnbyBiYWNrIG9uZSBtb3JlIGxldmVsLlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=