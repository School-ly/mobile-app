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
	"./models/Event.ts": "./models/Event.ts",
	"./models/Post.ts": "./models/Post.ts",
	"./models/VideoLesson.ts": "./models/VideoLesson.ts",
	"./modules/navigation-handler.ts": "./modules/navigation-handler.ts",
	"./observable-property-decorator.js": "./observable-property-decorator.js",
	"./observable-property-decorator.ts": "./observable-property-decorator.ts",
	"./pages/Blog/Blog.ts": "./pages/Blog/Blog.ts",
	"./pages/Blog/Blog.xml": "./pages/Blog/Blog.xml",
	"./pages/Blog/post/post.ts": "./pages/Blog/post/post.ts",
	"./pages/Blog/post/post.xml": "./pages/Blog/post/post.xml",
	"./pages/Events/Events.ts": "./pages/Events/Events.ts",
	"./pages/Events/Events.xml": "./pages/Events/Events.xml",
	"./pages/Events/event/event.ts": "./pages/Events/event/event.ts",
	"./pages/Events/event/event.xml": "./pages/Events/event/event.xml",
	"./pages/Lessons/Lessons.ts": "./pages/Lessons/Lessons.ts",
	"./pages/Lessons/Lessons.xml": "./pages/Lessons/Lessons.xml",
	"./pages/VideoLessons/VideoLesson/VideoLesson.ts": "./pages/VideoLessons/VideoLesson/VideoLesson.ts",
	"./pages/VideoLessons/VideoLesson/VideoLesson.xml": "./pages/VideoLessons/VideoLesson/VideoLesson.xml",
	"./pages/VideoLessons/VideoLessons.ts": "./pages/VideoLessons/VideoLessons.ts",
	"./pages/VideoLessons/VideoLessons.xml": "./pages/VideoLessons/VideoLessons.xml",
	"./pages/custom-page/custom-page.ts": "./pages/custom-page/custom-page.ts",
	"./pages/custom-page/custom-page.xml": "./pages/custom-page/custom-page.xml",
	"./pages/page1/page1.ts": "./pages/page1/page1.ts",
	"./pages/page1/page1.xml": "./pages/page1/page1.xml",
	"./pages/page4/page4.ts": "./pages/page4/page4.ts",
	"./pages/page4/page4.xml": "./pages/page4/page4.xml",
	"./pages/secondary-page/secondary-page.ts": "./pages/secondary-page/secondary-page.ts",
	"./pages/secondary-page/secondary-page.xml": "./pages/secondary-page/secondary-page.xml"
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
            moduleName: "pages/" + tappedMenu.id + "/" + tappedMenu.id,
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
module.exports = "<!-- \r\n\tI am using plain stacklayout here, you can use any layout you want.\r\n\tYou also can use nativescript-ripple to get some ripple effect.\r\n\tBut remember to modify components on AppRootViewModel and \r\n\tmodules/navigation-handler file.\r\n -->\r\n\r\n<GridLayout rows=\"*, auto\" columns=\"*\" loaded=\"onLoaded\">\r\n\t<Frame row=\"0\" defaultPage=\"pages/page1/page1\"/>\r\n\t<!---->\r\n\r\n\r\n\t<GridLayout backgroundColor=\"#fff\" visibility=\"visible\" row=\"1\" columns=\"*,*,*,*,*\" id=\"bottomNavBar\" class=\"bottom-nav\">\r\n\t\t<StackLayout id=\"page1\" class=\"bottom-nav-btn-active\" col=\"0\" tap=\"{{ navigate }}\">\r\n\t\t\t\t<Image src=\"res://home\" stretch=\"none\" horizontalAlignment=\"center\" />\r\n\t\t\t\t<Label text=\"Uniersities\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"Events\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"1\">\r\n\t\t\t\t<Label text=\"&#xe54c;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Events\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"Blog\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"2\">\r\n\t\t\t\t<Label text=\"&#xe0ca;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Blog\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"Lessons\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"3\">\r\n\t\t\t\t<Label text=\"&#xe7f7;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Lessons\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t\t<StackLayout id=\"page4\" class=\"bottom-nav-btn\" tap=\"{{ navigate }}\" col=\"4\">\r\n\t\t\t\t<Label text=\"&#xe7f7;\" class=\"mdi bottom-nav-icon\" textWrap=\"true\" />\r\n\t\t\t\t<Label text=\"Jobs\" textWrap=\"true\" class=\"bottom-nav-text\" />\r\n\t\t</StackLayout>\r\n\t</GridLayout>\r\n\r\n\t<!---->\r\n</GridLayout>"; 
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
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nFor example, the following CSS rule changes the font size of all UI\r\ncomponents that have the btn class name.\r\n"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"comment","comment":"\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"comment","comment":"\r\nI am using material font icons here, you can use any icon you want.\r\n"},{"type":"rule","selectors":[".mdi"],"declarations":[{"type":"declaration","property":"font-family","value":"MaterialIcons, \"Material Icons\""}]},{"type":"rule","selectors":[".bottom-nav"],"declarations":[{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"border-top-color","value":"#ececec"},{"type":"declaration","property":"border-top-width","value":"1"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"bottom","value":"0"},{"type":"declaration","property":"position","value":"absolute"}]},{"type":"rule","selectors":[".bottom-nav-btn"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"color","value":"#888888"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".bottom-nav-btn-active"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"},{"type":"declaration","property":"color","value":"#223e92"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".bottom-nav-icon"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".bottom-nav-text"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":[".divider"],"declarations":[{"type":"declaration","property":"background-color","value":"lightgray"}]},{"type":"rule","selectors":[".item"],"declarations":[{"type":"declaration","property":"border-radius","value":"30"},{"type":"declaration","property":"border-color","value":"#666666"},{"type":"declaration","property":"border-width","value":"1px"},{"type":"declaration","property":"border-style","value":"solid"}]},{"type":"rule","selectors":[".spacer"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".big_text"],"declarations":[{"type":"declaration","property":"height","value":"400px"},{"type":"declaration","property":"font-size","value":"49.5pt"},{"type":"declaration","property":"border-radius","value":"400"}]}],"parsingErrors":[]}};; 
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

/***/ "./models/Event.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./models/Event.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./models/Event.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./models/Post.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./models/Post.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./models/Post.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./models/VideoLesson.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./models/VideoLesson.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./models/VideoLesson.ts" });
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

/***/ "./pages/Blog/Blog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToCustomPage", function() { return goToCustomPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showItem", function() { return showItem; });
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
    Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getString"])("https://schoolly.tk/events/compact").then(function (r) {
        bindingObject['items'] = JSON.parse(r);
        page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(bindingObject);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
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
function showItem(args) {
    var SL = args.object;
    var item = SL.bindingContext;
    Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2__["topmost"])().navigate({
        moduleName: "pages/Blog/post/post",
        context: item,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Blog/Blog.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/Blog/Blog.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Blog/Blog.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\"\r\n    xmlns:lv=\"nativescript-ui-listview\" xmlns:img=\"nativescript-image\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Blog\" icon=\"\" />\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\t\t\r\n\t\t<ListView height=\"1000\" items=\"{{ items }}\">\r\n\t\t\t<ListView.itemTemplate>\r\n\t\t\t\t<StackLayout tap=\"showItem\">\r\n\t\t\t\t\t<StackLayout orientation=\"horizontal\" class=\"item\" height=\"100\">\r\n\t\t\t\t\t\t<Image src=\"{{ photo }}\" stretch=\"aspectFit\"\r\n\t\t\t\t\t\t\twidth=\"200\" />\r\n\t\t\t\t\t\t<StackLayout padding=\"10\">\r\n\t\t\t\t\t\t\t<Label text=\"{{ title }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ date }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ place }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t\t<StackLayout orientation=\"vertical\" height=\"100\">\r\n\t\t\t\t\t\t\t<StackLayout height=\"45\" />\r\n\t\t\t\t\t\t\t<Button text=\"Bookmark\" />\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout class=\"spacer\" height=\"20\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</ListView.itemTemplate>\r\n\t\t</ListView>\r\n\t\t\r\n\t</StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Blog/Blog.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/Blog/Blog.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Blog/post/post.ts":
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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Blog/post/post.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/Blog/post/post.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Blog/post/post.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page\r\n    navigatingTo=\"onNavigatingTo\"  \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\r\n\r\n    <ActionBar>\r\n        <NavigationButton tap=\"onBackButtonTap\" android.systemIcon=\"ic_menu_back\"/>\r\n        <Label text=\"{{ name }}\"></Label>\r\n    </ActionBar>\r\n    <StackLayout>\r\n        <Image src=\"{{ photo }}\" stretch=\"aspectFit\"\r\n            height=\"200\" />\r\n        <StackLayout class=\"divider\" height=\"10\"></StackLayout>\r\n        <StackLayout padding=\"10\">\r\n            <Label text=\"{{ title }}\" textWrap=\"true\"></Label>\r\n            <Label>\r\n                <FormattedString>\r\n                    <Span text=\"{{date}}\" color=\"#006600\">\r\n                    </Span>\r\n                    <Image src=\"place-marker.png\" /><Span text=\"{{place}}\" color=\"#990000\" fontWeight=\"Bold\">\r\n                    </Span>\r\n                    <Button text=\"Bookmark\" style=\"horizontal-align: right;\" />\r\n                </FormattedString>\r\n            </Label>\r\n            <Button text=\"Bookmark\" style=\"horizontal-align: right;\" />\r\n            <Label text=\"{{description}}\" textWrap=\"true\" />\r\n        </StackLayout>\r\n    </StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Blog/post/post.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/Blog/post/post.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Events/Events.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToCustomPage", function() { return goToCustomPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showItem", function() { return showItem; });
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
    Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getString"])("https://schoolly.tk/events/compact").then(function (r) {
        bindingObject['items'] = JSON.parse(r);
        page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(bindingObject);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
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
function showItem(args) {
    var SL = args.object;
    var item = SL.bindingContext;
    Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2__["topmost"])().navigate({
        moduleName: "pages/Events/event/event",
        context: item,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Events/Events.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/Events/Events.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Events/Events.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\"\r\n    xmlns:lv=\"nativescript-ui-listview\" xmlns:img=\"nativescript-image\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Events\" icon=\"\" />\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\t\t\r\n\t\t<ListView height=\"1000\" items=\"{{ items }}\">\r\n\t\t\t<ListView.itemTemplate>\r\n\t\t\t\t<StackLayout tap=\"showItem\">\r\n\t\t\t\t\t<StackLayout class=\"item\">\r\n\t\t\t\t\t\t<StackLayout class=\"spacer\" height=\"5\"></StackLayout>\r\n\t\t\t\t\t\t<Image src=\"{{ photo }}\" stretch=\"aspectFit\" height=\"100\" style=\"horizontal-align:center;\" />\r\n\t\t\t\t\t\t<StackLayout padding=\"10\">\r\n\t\t\t\t\t\t\t<Label text=\"{{ title }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ date }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ place }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Button text=\"Bookmark\" style=\"horizontal-align:right;\" />\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout class=\"spacer\" height=\"20\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</ListView.itemTemplate>\r\n\t\t</ListView>\r\n\t\t\r\n\t</StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Events/Events.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/Events/Events.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Events/event/event.ts":
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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Events/event/event.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/Events/event/event.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Events/event/event.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page\r\n    navigatingTo=\"onNavigatingTo\"  \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\r\n\r\n    <ActionBar>\r\n        <NavigationButton tap=\"onBackButtonTap\" android.systemIcon=\"ic_menu_back\"/>\r\n        <Label text=\"{{ name }}\"></Label>\r\n    </ActionBar>\r\n    <StackLayout>\r\n        <Image src=\"{{ photo }}\" stretch=\"aspectFit\"\r\n            height=\"200\" />\r\n        <StackLayout class=\"divider\" height=\"10\"></StackLayout>\r\n        <StackLayout padding=\"10\">\r\n            <Label text=\"{{ title }}\" textWrap=\"true\"></Label>\r\n            <Label>\r\n                <FormattedString>\r\n                    <Span text=\"{{date}}\" color=\"#006600\">\r\n                    </Span>\r\n                    <Image src=\"place-marker.png\" /><Span text=\"{{place}}\" color=\"#990000\" fontWeight=\"Bold\">\r\n                    </Span>\r\n                    <Button text=\"Bookmark\" style=\"horizontal-align: right;\" />\r\n                </FormattedString>\r\n            </Label>\r\n            <Button text=\"Bookmark\" style=\"horizontal-align: right;\" />\r\n            <Label text=\"{{description}}\" textWrap=\"true\" />\r\n        </StackLayout>\r\n    </StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Events/event/event.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/Events/event/event.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Lessons/Lessons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_video", function() { return show_video; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/frame/frame");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__);


function onNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({});
}
function show_video(args) {
    Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_1__["topmost"])().navigate({
        moduleName: "pages/VideoLessons/VideoLessons",
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Lessons/Lessons.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/Lessons/Lessons.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/Lessons/Lessons.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<!--<ActionBar title=\"Jobs\">\r\n\t\t\t<StackLayout orientation=\"horizontal\"\r\n\t\t\t\t\t\t ios:horizontalAlignment=\"center\"\r\n\t\t\t\t\t\t android:horizontalAlignment=\"left\">\r\n\t\t\t\t<Image src=\"res://home\" stretch=\"none\" class=\"action-image\"></Image>\r\n\t\t\t\t<SearchBar></SearchBar>\r\n\t\t\t</StackLayout>\r\n\t\t</ActionBar>-->\r\n\t\t<ActionBar title=\" Lessons\" android.icon=\"res://home\" android.iconVisibility=\"always\"\r\n\t\t ios.icon=\"res://home\" ios.iconVisibility=\"always\">\r\n\t\t</ActionBar>\r\n\t\t<StackLayout orientation=\"horizontal\">\r\n\r\n\t\t</StackLayout>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Button class=\"item big_text\" text=\"Video\" tap=\"show_video\"></Button>\r\n\t\t<StackLayout class=\"spacer\" height=\"100\" />\r\n\t\t<Button class=\"item big_text\" text=\"Private\"></Button>\r\n\t\t<StackLayout class=\"spacer\" height=\"100\" />\r\n\t\t<Button class=\"item big_text\" text=\"Online\"></Button>\r\n\t</StackLayout>\r\n\t\r\n\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/Lessons/Lessons.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/Lessons/Lessons.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/VideoLessons/VideoLesson/VideoLesson.ts":
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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/VideoLessons/VideoLesson/VideoLesson.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/VideoLessons/VideoLesson/VideoLesson.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/VideoLessons/VideoLesson/VideoLesson.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page\r\n    navigatingTo=\"onNavigatingTo\"  \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\r\n\r\n    <ActionBar>\r\n        <NavigationButton tap=\"onBackButtonTap\" android.systemIcon=\"ic_menu_back\"/>\r\n        <Label text=\"{{ name }}\"></Label>\r\n    </ActionBar>\r\n    <StackLayout>\r\n        <Image src=\"{{ photo }}\" stretch=\"aspectFit\"\r\n            height=\"200\" />\r\n        <StackLayout class=\"divider\" height=\"10\"></StackLayout>\r\n        <StackLayout padding=\"10\">\r\n            <Label text=\"{{ title }}\" textWrap=\"true\"></Label>\r\n            <Label>\r\n                <FormattedString>\r\n                    <Span text=\"{{date}}\" color=\"#006600\">\r\n                    </Span>\r\n                    <Image src=\"place-marker.png\" /><Span text=\"{{place}}\" color=\"#990000\" fontWeight=\"Bold\">\r\n                    </Span>\r\n                    <Button text=\"Bookmark\" style=\"horizontal-align: right;\" />\r\n                </FormattedString>\r\n            </Label>\r\n            <Button text=\"Bookmark\" style=\"horizontal-align: right;\" />\r\n            <Label text=\"{{description}}\" textWrap=\"true\" />\r\n        </StackLayout>\r\n    </StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/VideoLessons/VideoLesson/VideoLesson.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/VideoLessons/VideoLesson/VideoLesson.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/VideoLessons/VideoLessons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatedTo", function() { return onNavigatedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToCustomPage", function() { return goToCustomPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showItem", function() { return showItem; });
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
    Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getString"])("https://schoolly.tk/lessons/video/compact").then(function (r) {
        bindingObject['items'] = JSON.parse(r);
        page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(bindingObject);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
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
function showItem(args) {
    var SL = args.object;
    var item = SL.bindingContext;
    Object(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_2__["topmost"])().navigate({
        moduleName: "pages/VideoLessons/VideoLesson/VideoLesson",
        context: item,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/VideoLessons/VideoLessons.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/VideoLessons/VideoLessons.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/VideoLessons/VideoLessons.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\"\r\n    xmlns:lv=\"nativescript-ui-listview\" xmlns:img=\"nativescript-image\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Video lessons\" icon=\"\" />\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\t\t\r\n\t\t<ListView height=\"1000\" items=\"{{ items }}\">\r\n\t\t\t<ListView.itemTemplate>\r\n\t\t\t\t<StackLayout tap=\"showItem\">\r\n\t\t\t\t\t<StackLayout class=\"item\">\r\n\t\t\t\t\t\t<StackLayout class=\"spacer\" height=\"5\"></StackLayout>\r\n\t\t\t\t\t\t<Image src=\"{{ photo }}\" stretch=\"aspectFit\" height=\"100\" style=\"horizontal-align:center;\" />\r\n\t\t\t\t\t\t<StackLayout padding=\"10\">\r\n\t\t\t\t\t\t\t<Label text=\"{{ title }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ subject }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Label text=\"{{ grade }}\" textWrap=\"true\"></Label>\r\n\t\t\t\t\t\t\t<Button text=\"Bookmark\" style=\"horizontal-align:right;\" />\r\n\t\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t\t<StackLayout class=\"spacer\" height=\"20\"></StackLayout>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</ListView.itemTemplate>\r\n\t\t</ListView>\r\n\t\t\r\n\t</StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/VideoLessons/VideoLessons.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/VideoLessons/VideoLessons.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/custom-page/custom-page.ts":
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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/custom-page/custom-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/custom-page/custom-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/custom-page/custom-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Custom Page\" icon=\"\"/>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Label text=\"This page is not a part of main navigation. Press back button to return to the main view.\" \r\n            class=\"text-center\" textWrap=\"true\" />\r\n        <Label text=\"Or press the button below to proceed further.\" \r\n            class=\"text-center\" textWrap=\"true\" />\r\n\t\t<Button text=\"Keep Navigating\" tap=\"proceed\" />\r\n\t</StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/custom-page/custom-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/custom-page/custom-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/page1/page1.ts":
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
    // simulate a navigation to events
    new _modules_navigation_handler__WEBPACK_IMPORTED_MODULE_1__["NavigationHandler"]().simulateNavigation("events");
    console.log("done");
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/page1/page1.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/page1/page1.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/page1/page1.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n    <Page.actionBar>\r\n        <ActionBar title=\"Page 1\" icon=\"\" />\r\n    </Page.actionBar>\r\n\r\n    <StackLayout padding=\"10\">\r\n        <Label\r\n            text=\"Use simulateNavigation method for view-to-view navigation. This can be used for primary navigation.\"\r\n            class=\"text-center\" textWrap=\"true\" />\r\n        <Button text=\"Go to Page2\" tap=\"goToPage2\" />\r\n        <Label\r\n            text=\"Specify the desired menu name to navigate. Click on the button overhead to see an example.\"\r\n            class=\"text-center\" textWrap=\"true\" />\r\n        <Label\r\n            text=\"{{text}}\"\r\n            class=\"text-center\" textWrap=\"true\" />\r\n    </StackLayout> \r\n \r\n </Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/page1/page1.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/page1/page1.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/page4/page4.ts":
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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/page4/page4.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/page4/page4.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/page4/page4.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar>\r\n\t\t\t<SearchBar hint=\"HINT\"\r\n\t\t\t\t\t   clear=\"onClear\"\r\n\t\t\t\t\t   submit=\"onSubmit\"></SearchBar>\r\n\t\t</ActionBar>\r\n\t</Page.actionBar>\r\n\t<ScrollView orientation=\"vertical\">\r\n    <GridLayout rows=\"200 200 200 200 200 200 200 200 200 200\">\r\n        <Label class=\"m-10\" row=\"0\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"1\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"2\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"3\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"4\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"5\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"6\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"7\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"8\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n        <Label class=\"m-10\" row=\"9\" text=\"Some text content follows here...\" textWrap=\"true\"/>\r\n    </GridLayout>\r\n</ScrollView>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/page4/page4.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/page4/page4.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/secondary-page/secondary-page.ts":
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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/secondary-page/secondary-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./pages/secondary-page/secondary-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/secondary-page/secondary-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" navigatedTo=\"onNavigatedTo\">\r\n\t<Page.actionBar>\r\n\t\t<ActionBar title=\"Second Page\" icon=\"\"/>\r\n\t</Page.actionBar>\r\n\r\n\t<StackLayout padding=\"10\">\r\n\t\t<Label text=\"When you will press back, you won't see the navigation bar. You've to go back one more level.\" \r\n            class=\"text-center\" textWrap=\"true\" />\r\n\t</StackLayout>\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./pages/secondary-page/secondary-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./pages/secondary-page/secondary-page.xml" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvQmxvZy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9nL0Jsb2cueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnRzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FdmVudHMvRXZlbnRzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL0V2ZW50cy9FdmVudHMueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL0V2ZW50cy9ldmVudC9ldmVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL0xlc3NvbnMvTGVzc29ucy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9MZXNzb25zL0xlc3NvbnMueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3Nvbi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb24vVmlkZW9MZXNzb24ueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29ucy54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL3BhZ2UxL3BhZ2UxLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL3BhZ2UxL3BhZ2UxLnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlNC9wYWdlNC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlNC9wYWdlNC54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKOzs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBRWY7QUFFTjtBQUVwRDtJQUFzQyxvQ0FBVTtJQUk1QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVKOzs7T0FHRztJQUNPLG1DQUFRLEdBQWYsVUFBZ0IsSUFBZTtRQUMzQixJQUFJLFVBQVUsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBZSx3RUFBZSxFQUFFLENBQUM7UUFDN0MsSUFBSSxhQUFhLEdBQWUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxrREFBa0Q7UUFDbEQsSUFBSSxVQUFVLElBQUksZ0JBQWdCLENBQUMsWUFBWSxFQUFF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Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwLXJvb3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vYXBwLXJvb3QudHNcIjogXCIuL2FwcC1yb290LnRzXCIsXG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9tb2RlbHMvRXZlbnQudHNcIjogXCIuL21vZGVscy9FdmVudC50c1wiLFxuXHRcIi4vbW9kZWxzL1Bvc3QudHNcIjogXCIuL21vZGVscy9Qb3N0LnRzXCIsXG5cdFwiLi9tb2RlbHMvVmlkZW9MZXNzb24udHNcIjogXCIuL21vZGVscy9WaWRlb0xlc3Nvbi50c1wiLFxuXHRcIi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXIudHNcIjogXCIuL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyLnRzXCIsXG5cdFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci5qc1wiOiBcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IuanNcIixcblx0XCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzXCI6IFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50c1wiLFxuXHRcIi4vcGFnZXMvQmxvZy9CbG9nLnRzXCI6IFwiLi9wYWdlcy9CbG9nL0Jsb2cudHNcIixcblx0XCIuL3BhZ2VzL0Jsb2cvQmxvZy54bWxcIjogXCIuL3BhZ2VzL0Jsb2cvQmxvZy54bWxcIixcblx0XCIuL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnRzXCI6IFwiLi9wYWdlcy9CbG9nL3Bvc3QvcG9zdC50c1wiLFxuXHRcIi4vcGFnZXMvQmxvZy9wb3N0L3Bvc3QueG1sXCI6IFwiLi9wYWdlcy9CbG9nL3Bvc3QvcG9zdC54bWxcIixcblx0XCIuL3BhZ2VzL0V2ZW50cy9FdmVudHMudHNcIjogXCIuL3BhZ2VzL0V2ZW50cy9FdmVudHMudHNcIixcblx0XCIuL3BhZ2VzL0V2ZW50cy9FdmVudHMueG1sXCI6IFwiLi9wYWdlcy9FdmVudHMvRXZlbnRzLnhtbFwiLFxuXHRcIi4vcGFnZXMvRXZlbnRzL2V2ZW50L2V2ZW50LnRzXCI6IFwiLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQudHNcIixcblx0XCIuL3BhZ2VzL0V2ZW50cy9ldmVudC9ldmVudC54bWxcIjogXCIuL3BhZ2VzL0V2ZW50cy9ldmVudC9ldmVudC54bWxcIixcblx0XCIuL3BhZ2VzL0xlc3NvbnMvTGVzc29ucy50c1wiOiBcIi4vcGFnZXMvTGVzc29ucy9MZXNzb25zLnRzXCIsXG5cdFwiLi9wYWdlcy9MZXNzb25zL0xlc3NvbnMueG1sXCI6IFwiLi9wYWdlcy9MZXNzb25zL0xlc3NvbnMueG1sXCIsXG5cdFwiLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb24vVmlkZW9MZXNzb24udHNcIjogXCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3Nvbi50c1wiLFxuXHRcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29uL1ZpZGVvTGVzc29uLnhtbFwiOiBcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29uL1ZpZGVvTGVzc29uLnhtbFwiLFxuXHRcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29ucy50c1wiOiBcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29ucy50c1wiLFxuXHRcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29ucy54bWxcIjogXCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMueG1sXCIsXG5cdFwiLi9wYWdlcy9jdXN0b20tcGFnZS9jdXN0b20tcGFnZS50c1wiOiBcIi4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UudHNcIixcblx0XCIuL3BhZ2VzL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiOiBcIi4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UueG1sXCIsXG5cdFwiLi9wYWdlcy9wYWdlMS9wYWdlMS50c1wiOiBcIi4vcGFnZXMvcGFnZTEvcGFnZTEudHNcIixcblx0XCIuL3BhZ2VzL3BhZ2UxL3BhZ2UxLnhtbFwiOiBcIi4vcGFnZXMvcGFnZTEvcGFnZTEueG1sXCIsXG5cdFwiLi9wYWdlcy9wYWdlNC9wYWdlNC50c1wiOiBcIi4vcGFnZXMvcGFnZTQvcGFnZTQudHNcIixcblx0XCIuL3BhZ2VzL3BhZ2U0L3BhZ2U0LnhtbFwiOiBcIi4vcGFnZXMvcGFnZTQvcGFnZTQueG1sXCIsXG5cdFwiLi9wYWdlcy9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS50c1wiOiBcIi4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UudHNcIixcblx0XCIuL3BhZ2VzL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiOiBcIi4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCJcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwUm9vdFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHByZXZpb3VzTWVudTogU3RhY2tMYXlvdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogQ29udHJvbHMgdGhlIHByaW1hcnkgbmF2aWdhdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cclxuXHQgKiBAcGFyYW0gYXJncyBUYXBwZWQgbWVudSBjb250ZXh0XHJcblx0ICovXHJcbiAgICBwdWJsaWMgbmF2aWdhdGUoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgbGV0IHRhcHBlZE1lbnUgPSA8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgbGV0IHBhZ2VDb250YWluZXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xyXG5cclxuICAgICAgICAvLyBwcmV2ZW50IGNvbnNlY3V0aXZlIG5hdmlnYXRpb24gdG8gdGhlIHNhbWUgcGFnZVxyXG4gICAgICAgIGlmICh0YXBwZWRNZW51ID09IEFwcFJvb3RWaWV3TW9kZWwucHJldmlvdXNNZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBcHBSb290Vmlld01vZGVsLnByZXZpb3VzTWVudSA9IHRhcHBlZE1lbnU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCBmb3JtYXR0aW5nXHJcbiAgICAgICAgcGFnZUNvbnRhaW5lci5lYWNoQ2hpbGRWaWV3KCh2aWV3KSA9PiB7XHJcbiAgICAgICAgICAgIHZpZXcuc2V0KFwiY2xhc3NcIiwgXCJib3R0b20tbmF2LWJ0blwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IGBwYWdlcy8ke3RhcHBlZE1lbnUuaWR9LyR7dGFwcGVkTWVudS5pZH1gLFxyXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFwcGVkTWVudS5zZXQoXCJjbGFzc1wiLCBcImJvdHRvbS1uYXYtYnRuIGJvdHRvbS1uYXYtYnRuLWFjdGl2ZVwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xyXG5pbXBvcnQgeyBBcHBSb290Vmlld01vZGVsIH0gZnJvbSBcIi4vYXBwLXJvb3Qtdmlldy1tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgbGV0IGFwcFJvb3QgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGFwcFJvb3QuYmluZGluZ0NvbnRleHQgPSBuZXcgQXBwUm9vdFZpZXdNb2RlbCgpO1xyXG59XHJcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gXFxyXFxuXFx0SSBhbSB1c2luZyBwbGFpbiBzdGFja2xheW91dCBoZXJlLCB5b3UgY2FuIHVzZSBhbnkgbGF5b3V0IHlvdSB3YW50LlxcclxcblxcdFlvdSBhbHNvIGNhbiB1c2UgbmF0aXZlc2NyaXB0LXJpcHBsZSB0byBnZXQgc29tZSByaXBwbGUgZWZmZWN0LlxcclxcblxcdEJ1dCByZW1lbWJlciB0byBtb2RpZnkgY29tcG9uZW50cyBvbiBBcHBSb290Vmlld01vZGVsIGFuZCBcXHJcXG5cXHRtb2R1bGVzL25hdmlnYXRpb24taGFuZGxlciBmaWxlLlxcclxcbiAtLT5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCIqXFxcIiBsb2FkZWQ9XFxcIm9uTG9hZGVkXFxcIj5cXHJcXG5cXHQ8RnJhbWUgcm93PVxcXCIwXFxcIiBkZWZhdWx0UGFnZT1cXFwicGFnZXMvcGFnZTEvcGFnZTFcXFwiLz5cXHJcXG5cXHQ8IS0tLS0+XFxyXFxuXFxyXFxuXFxyXFxuXFx0PEdyaWRMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCIjZmZmXFxcIiB2aXNpYmlsaXR5PVxcXCJ2aXNpYmxlXFxcIiByb3c9XFxcIjFcXFwiIGNvbHVtbnM9XFxcIiosKiwqLCosKlxcXCIgaWQ9XFxcImJvdHRvbU5hdkJhclxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXZcXFwiPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwicGFnZTFcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LWJ0bi1hY3RpdmVcXFwiIGNvbD1cXFwiMFxcXCIgdGFwPVxcXCJ7eyBuYXZpZ2F0ZSB9fVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwicmVzOi8vaG9tZVxcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJVbmllcnNpdGllc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LXRleHRcXFwiIC8+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgaWQ9XFxcIkV2ZW50c1xcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjFcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlNTRjO1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJFdmVudHNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJCbG9nXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi1idG5cXFwiIHRhcD1cXFwie3sgbmF2aWdhdGUgfX1cXFwiIGNvbD1cXFwiMlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIiYjeGUwY2E7XFxcIiBjbGFzcz1cXFwibWRpIGJvdHRvbS1uYXYtaWNvblxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkJsb2dcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJMZXNzb25zXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi1idG5cXFwiIHRhcD1cXFwie3sgbmF2aWdhdGUgfX1cXFwiIGNvbD1cXFwiM1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIiYjeGU3Zjc7XFxcIiBjbGFzcz1cXFwibWRpIGJvdHRvbS1uYXYtaWNvblxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcIkxlc3NvbnNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJwYWdlNFxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlN2Y3O1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJKb2JzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG5cXHQ8IS0tLS0+XFxyXFxuPC9HcmlkTGF5b3V0PlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcclxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXHJcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxyXFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxyXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxyXFxuXFxyXFxuLypcXHJcXG5Gb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBDU1MgcnVsZSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgYWxsIFVJXFxyXFxuY29tcG9uZW50cyB0aGF0IGhhdmUgdGhlIGJ0biBjbGFzcyBuYW1lLlxcclxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXHJcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXHJcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcclxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxyXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxyXFxuSSBhbSB1c2luZyBtYXRlcmlhbCBmb250IGljb25zIGhlcmUsIHlvdSBjYW4gdXNlIGFueSBpY29uIHlvdSB3YW50LlxcclxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWRpXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJNYXRlcmlhbEljb25zLCBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvdHRvbS1uYXZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXRvcC1jb2xvclwiLFwidmFsdWVcIjpcIiNlY2VjZWNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItdG9wLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3R0b21cIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicG9zaXRpb25cIixcInZhbHVlXCI6XCJhYnNvbHV0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2LWJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzg4ODg4OFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2LWJ0bi1hY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyMjNlOTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdi1pY29uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdi10ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcImNhcGl0YWxpemVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGl2aWRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJsaWdodGdyYXlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaXRlbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiM2NjY2NjZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItc3R5bGVcIixcInZhbHVlXCI6XCJzb2xpZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zcGFjZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmlnX3RleHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0MDBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjQ5LjVwdFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0MDBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYXBwID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XHJcbmFwcC5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xyXG4vKlxyXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcclxuYmUgZXhlY3V0ZWQgb24gaU9TLlxyXG4qL1xyXG4iLCIvKlxyXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cclxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcclxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxyXG4qL1xyXG5cclxuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gXCIuL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCJcclxuXHJcbi8qKlxyXG4gKiBJZiBhIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uIGlzIHBlcmZvcm1lZCBvbiB0aGUgYXBwbGljYXRpb24gc29tZXdoZXJlLFxyXG4gKiB1bmhpZGUgdGhlIG5hdmlnYXRpb24gYmFyIG9uIGJhY2sga2V5IHByZXNzLlxyXG4gKi9cclxuaWYgKGFwcC5hbmRyb2lkKSB7XHJcbiAgICBhcHAuYW5kcm9pZC5vbihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGFyZ3MpID0+IHtcclxuICAgICAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5zaG93TmF2QmFyKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXBwLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XHJcblxyXG4vKlxyXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcclxuYmUgZXhlY3V0ZWQgb24gaU9TLlxyXG4qL1xyXG4iLCJpbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBBcHBSb290Vmlld01vZGVsIH0gZnJvbSBcIi4uL2FwcC1yb290LXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBjb250YWlucyB0aGUgaGVscGVyIGZ1bmN0aW9ucyBuZWVkZWQgZm9yXHJcbiAqIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLiBJZiB5b3Ugbm90aWNlIHlvdSdsbCBzZWUgdGhhdCB0aGVyZVxyXG4gKiBhcmUgdHdvIHR5cGVzIG9mIG5hdmlnYXRpb24gaW4gQm90dG9tIE5hdmlnYXRpb24uIE9uZSBpcywgdXNpbmcgdGhlXHJcbiAqIG1lbnVzIHByZXNlbnRlZCBpdCBuYXZpZ2F0aW9uIGJhciBpdHNlbGYsIGFuZCB0aGUgb3RoZXIgb25lIGlzIGEgc2Vjb25kYXJ5XHJcbiAqIG5hdmlnYXRpb24gd2l0aGluIG9uZSBvZiB0aGUgcHJpbWFyeSBtZW51cywgZS5nLiBjb250YWN0IGxpc3QgdG8gc2VuZCBtZXNzYWdlLiBUaGVcclxuICogbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIGhpZGRlbiBkdXJpbmcgdGhpcyB0eXBlIG9mIG5hdmlnYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkhhbmRsZXIge1xyXG5cclxuXHQvKipcclxuXHQgKiBIaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciBkdXJpbmcgYSB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvblxyXG5cdCAqL1xyXG4gICAgcHVibGljIGhpZGVOYXZCYXIoKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIG5hdmlnYXRpb24gc3RhY2sgaXMgbm90IGVtcHR5IHRoZW4gdGhlIG5hdmlnYXRpb24gYmFyIGlzIGhpZGRlbiBhbHJlYWR5XHJcbiAgICAgICAgaWYgKHRvcG1vc3QoKS5iYWNrU3RhY2subGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm9vdFZpZXcgPSA8R3JpZExheW91dD5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBsZXQgbmF2QmFyID0gPEdyaWRMYXlvdXQ+cm9vdFZpZXcuZ2V0Q2hpbGRBdCgxKTtcclxuICAgICAgICBuYXZCYXIuc2V0KFwidmlzaWJpbGl0eVwiLCBcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogU2hvdyB0aGUgbmF2aWdhdGlvbiBiYXIgb24gYmFjayBrZXkgcHJlc3MgZnJvbSB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvblxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNob3dOYXZCYXIoKSB7XHJcbiAgICAgICAgLy8gZG8gbm90IHVuaGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIgdW50aWwgb25seSBvbmUgYWN0aXZpdHkgbGVmdCBpbiB0aGUgc3RhY2tcclxuICAgICAgICBpZiAodG9wbW9zdCgpLmJhY2tTdGFjay5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgbGV0IG5hdkJhciA9IDxHcmlkTGF5b3V0PnJvb3RWaWV3LmdldENoaWxkQXQoMSk7XHJcbiAgICAgICAgbmF2QmFyLnNldChcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCBzaW11bGF0ZXMgYSBuYXZpZ2F0aW9uIHRvIHRoZSBzcGVjaWZpZWQgbWVudSB1c2luZyB0aGUgY29yZVxyXG5cdCAqIG5hdmlnYXRpb24gbWV0aG9kLiBVc2UgdGhpcyBtZXRob2QgZm9yIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLlxyXG5cdCAqIEBwYXJhbSBzdHJpbmcgVGhlIG1lbnUgdG8gYmUgbmF2aWdhdGVkLCBleHBlY3RzIGFuIElEXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2ltdWxhdGVOYXZpZ2F0aW9uKG1lbnU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByb290VmlldyA9IDxHcmlkTGF5b3V0PmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIGxldCBuYXZCYXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xyXG4gICAgICAgIGxldCB0YXBwZWRWaWV3ID0gPFN0YWNrTGF5b3V0Pm5hdkJhci5nZXRWaWV3QnlJZChtZW51KTtcclxuICAgICAgICAvLyBpbml0aWF0ZSBhIHRhcCBldmVudCBcclxuICAgICAgICBuZXcgQXBwUm9vdFZpZXdNb2RlbCgpLm5hdmlnYXRlKHtcclxuICAgICAgICAgICAgZXZlbnROYW1lOiBcInRhcFwiLFxyXG4gICAgICAgICAgICBvYmplY3Q6IHRhcHBlZFZpZXdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIE9ic2VydmFibGVQcm9wZXJ0eSgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLk9ic2VydmFibGVQcm9wZXJ0eSA9IE9ic2VydmFibGVQcm9wZXJ0eTtcclxuIiwiLyoqXHJcblRoaXMgZmlsZSBkZWZpbmVzIGEgZGVjb3JhdG9yIHlvdSBjYW4gdXNlIHRvIGVuYWJsZSB0d28td2F5XHJcbmJpbmRpbmcgb24gdmlldy1tb2RlbCBwcm9wZXJ0aWVzLlxyXG5cclxuRm9yIGV4YW1wbGU6XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcclxuXHJcbkBPYnNlcnZhYmxlUHJvcGVydHkoKSBteVByb3BlcnR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblJlYWQgbW9yZSBhdCBodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL2Jsb2cvbmF0aXZlc2NyaXB0LW9ic2VydmFibGUtbWFnaWMtc3RyaW5nLXByb3BlcnR5LW5hbWUtYmUtZ29uZVxyXG4qKi9cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZhYmxlUHJvcGVydHkoKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogT2JzZXJ2YWJsZSwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Bvc3RcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgXHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApICUgMjtcclxuICAgIHZhciBzdHIgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgaWYgKGluZGV4ID09IDApIHN0ciA9IFwiXCI7XHJcbiAgICB2YXIgYmluZGluZ09iamVjdCA9IHsnaXRlbXMnOiBbXX07XHJcbiAgICBnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGJpbmRpbmdPYmplY3QgWydpdGVtcyddID0gSlNPTi5wYXJzZShyKTtcclxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvQ3VzdG9tUGFnZSgpIHtcclxuICAgIC8vIHBlcmZvcm1pbmcgYSBzZWNvbmRhcnkgbmF2aWdhdGlvblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcImN1c3RvbS1wYWdlL2N1c3RvbS1wYWdlXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIG9uY2UgeW91IGNhbGxlZCB0aGlzIG1ldGhvZCBvbmNlLCB5b3UgZG9uJ3QgbmVlZCB0byBjYWxsIGl0IGZ1cnRoZXIgaW4gdGhlIHNhbWUgc3RhY2tcclxuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJdGVtKGFyZ3M6RXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCBTTCA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGl0ZW0gPSA8UG9zdD5TTC5iaW5kaW5nQ29udGV4dDtcclxuXHJcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvQmxvZy9wb3N0L3Bvc3RcIixcclxuICAgICAgICBjb250ZXh0OiBpdGVtLFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiXFxyXFxuICAgIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIHhtbG5zOmltZz1cXFwibmF0aXZlc2NyaXB0LWltYWdlXFxcIj5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiQmxvZ1xcXCIgaWNvbj1cXFwiXFxcIiAvPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHRcXHRcXHJcXG5cXHRcXHQ8TGlzdFZpZXcgaGVpZ2h0PVxcXCIxMDAwXFxcIiBpdGVtcz1cXFwie3sgaXRlbXMgfX1cXFwiPlxcclxcblxcdFxcdFxcdDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHRhcD1cXFwic2hvd0l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcIml0ZW1cXFwiIGhlaWdodD1cXFwiMTAwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBwaG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoPVxcXCIyMDBcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBkYXRlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgcGxhY2UgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjQ1XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic3BhY2VyXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHRcXHRcXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9CbG9nL0Jsb2cueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZXMvQmxvZy9CbG9nLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBFdmVudERhdGEsIFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvUG9zdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xyXG4gICAgY29uc3QgaXRlbSA9IGFyZ3MuY29udGV4dCBhcyBQb3N0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkJhY2tCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gYXJncy5vYmplY3QgYXMgVmlldztcclxuICAgIGNvbnN0IHBhZ2UgPSB2aWV3LnBhZ2UgYXMgUGFnZTtcclxuXHJcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xyXG59XHJcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlXFxyXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiICBcXHJcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxyXFxuXFxyXFxuICAgIDxBY3Rpb25CYXI+XFxyXFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0YXA9XFxcIm9uQmFja0J1dHRvblRhcFxcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgcGhvdG8gfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCJcXHJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjIwMFxcXCIgLz5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZGl2aWRlclxcXCIgaGVpZ2h0PVxcXCIxMFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8TGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJ7e2RhdGV9fVxcXCIgY29sb3I9XFxcIiMwMDY2MDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicGxhY2UtbWFya2VyLnBuZ1xcXCIgLz48U3BhbiB0ZXh0PVxcXCJ7e3BsYWNlfX1cXFwiIGNvbG9yPVxcXCIjOTkwMDAwXFxcIiBmb250V2VpZ2h0PVxcXCJCb2xkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOiByaWdodDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCb29rbWFya1xcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcXCIgLz5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3tkZXNjcmlwdGlvbn19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FdmVudFwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBcclxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMCkgJSAyO1xyXG4gICAgdmFyIHN0ciA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoaW5kZXggPT0gMCkgc3RyID0gXCJcIjtcclxuICAgIHZhciBiaW5kaW5nT2JqZWN0ID0geydpdGVtcyc6IFtdfTtcclxuICAgIGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvZXZlbnRzL2NvbXBhY3RcIikudGhlbigocjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgYmluZGluZ09iamVjdCBbJ2l0ZW1zJ10gPSBKU09OLnBhcnNlKHIpO1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xyXG4gICAgfSwgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3QoYmluZGluZ09iamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9DdXN0b21QYWdlKCkge1xyXG4gICAgLy8gcGVyZm9ybWluZyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uXHJcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6IFwiY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2VcIixcclxuICAgIH0pO1xyXG4gICAgLy8gb25jZSB5b3UgY2FsbGVkIHRoaXMgbWV0aG9kIG9uY2UsIHlvdSBkb24ndCBuZWVkIHRvIGNhbGwgaXQgZnVydGhlciBpbiB0aGUgc2FtZSBzdGFja1xyXG4gICAgbmV3IE5hdmlnYXRpb25IYW5kbGVyKCkuaGlkZU5hdkJhcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0l0ZW0oYXJnczpFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IFNMID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xyXG4gICAgY29uc3QgaXRlbSA9IDxFdmVudD5TTC5iaW5kaW5nQ29udGV4dDtcclxuXHJcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvRXZlbnRzL2V2ZW50L2V2ZW50XCIsXHJcbiAgICAgICAgY29udGV4dDogaXRlbSxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIlxcclxcbiAgICB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIiB4bWxuczppbWc9XFxcIm5hdGl2ZXNjcmlwdC1pbWFnZVxcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50c1xcXCIgaWNvbj1cXFwiXFxcIiAvPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHRcXHRcXHJcXG5cXHRcXHQ8TGlzdFZpZXcgaGVpZ2h0PVxcXCIxMDAwXFxcIiBpdGVtcz1cXFwie3sgaXRlbXMgfX1cXFwiPlxcclxcblxcdFxcdFxcdDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHRhcD1cXFwic2hvd0l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiNVxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBwaG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246Y2VudGVyO1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGRhdGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBwbGFjZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJCb29rbWFya1xcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246cmlnaHQ7XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCIyMFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0XFx0XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvRXZlbnRzL0V2ZW50cy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9FdmVudHMvRXZlbnRzLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBFdmVudERhdGEsIFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL0V2ZW50XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0IGFzIFBhZ2U7XHJcbiAgICBjb25zdCBpdGVtID0gYXJncy5jb250ZXh0IGFzIEV2ZW50O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGl0ZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkJhY2tCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gYXJncy5vYmplY3QgYXMgVmlldztcclxuICAgIGNvbnN0IHBhZ2UgPSB2aWV3LnBhZ2UgYXMgUGFnZTtcclxuXHJcbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xyXG59XHJcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlXFxyXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiICBcXHJcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxyXFxuXFxyXFxuICAgIDxBY3Rpb25CYXI+XFxyXFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0YXA9XFxcIm9uQmFja0J1dHRvblRhcFxcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgcGhvdG8gfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCJcXHJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjIwMFxcXCIgLz5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZGl2aWRlclxcXCIgaGVpZ2h0PVxcXCIxMFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8TGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJ7e2RhdGV9fVxcXCIgY29sb3I9XFxcIiMwMDY2MDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicGxhY2UtbWFya2VyLnBuZ1xcXCIgLz48U3BhbiB0ZXh0PVxcXCJ7e3BsYWNlfX1cXFwiIGNvbG9yPVxcXCIjOTkwMDAwXFxcIiBmb250V2VpZ2h0PVxcXCJCb2xkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOiByaWdodDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCb29rbWFya1xcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcXCIgLz5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3tkZXNjcmlwdGlvbn19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL0V2ZW50cy9ldmVudC9ldmVudC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG5cclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dfdmlkZW8gKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnNcIixcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PCEtLTxBY3Rpb25CYXIgdGl0bGU9XFxcIkpvYnNcXFwiPlxcclxcblxcdFxcdFxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgaW9zOmhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgYW5kcm9pZDpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9ob21lXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWltYWdlXFxcIj48L0ltYWdlPlxcclxcblxcdFxcdFxcdFxcdDxTZWFyY2hCYXI+PC9TZWFyY2hCYXI+XFxyXFxuXFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj4tLT5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCIgTGVzc29uc1xcXCIgYW5kcm9pZC5pY29uPVxcXCJyZXM6Ly9ob21lXFxcIiBhbmRyb2lkLmljb25WaXNpYmlsaXR5PVxcXCJhbHdheXNcXFwiXFxyXFxuXFx0XFx0IGlvcy5pY29uPVxcXCJyZXM6Ly9ob21lXFxcIiBpb3MuaWNvblZpc2liaWxpdHk9XFxcImFsd2F5c1xcXCI+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHJcXG5cXHRcXHQ8QnV0dG9uIGNsYXNzPVxcXCJpdGVtIGJpZ190ZXh0XFxcIiB0ZXh0PVxcXCJWaWRlb1xcXCIgdGFwPVxcXCJzaG93X3ZpZGVvXFxcIj48L0J1dHRvbj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIC8+XFxyXFxuXFx0XFx0PEJ1dHRvbiBjbGFzcz1cXFwiaXRlbSBiaWdfdGV4dFxcXCIgdGV4dD1cXFwiUHJpdmF0ZVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiAvPlxcclxcblxcdFxcdDxCdXR0b24gY2xhc3M9XFxcIml0ZW0gYmlnX3RleHRcXFwiIHRleHQ9XFxcIk9ubGluZVxcXCI+PC9CdXR0b24+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHJcXG5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvTGVzc29ucy9MZXNzb25zLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL0xlc3NvbnMvTGVzc29ucy54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgRXZlbnREYXRhLCBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ldmVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xyXG4gICAgY29uc3QgaXRlbSA9IGFyZ3MuY29udGV4dCBhcyBFdmVudDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBpdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25CYWNrQnV0dG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXc7XHJcbiAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlIGFzIFBhZ2U7XHJcblxyXG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcclxufVxyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZVxcclxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiAgXFxyXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcclxcblxcclxcbiAgICA8QWN0aW9uQmFyPlxcclxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGFwPVxcXCJvbkJhY2tCdXR0b25UYXBcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IHBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiXFxyXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIyMDBcXFwiIC8+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImRpdmlkZXJcXFwiIGhlaWdodD1cXFwiMTBcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwie3tkYXRlfX1cXFwiIGNvbG9yPVxcXCIjMDA2NjAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInBsYWNlLW1hcmtlci5wbmdcXFwiIC8+PFNwYW4gdGV4dD1cXFwie3twbGFjZX19XFxcIiBjb2xvcj1cXFwiIzk5MDAwMFxcXCIgZm9udFdlaWdodD1cXFwiQm9sZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiBzdHlsZT1cXFwiaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOiByaWdodDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ZGVzY3JpcHRpb259fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb24vVmlkZW9MZXNzb24ueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29uL1ZpZGVvTGVzc29uLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFZpZGVvTGVzc29uIH0gZnJvbSBcIi4uLy4uL21vZGVscy9WaWRlb0xlc3NvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBcclxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMCkgJSAyO1xyXG4gICAgdmFyIHN0ciA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoaW5kZXggPT0gMCkgc3RyID0gXCJcIjtcclxuICAgIHZhciBiaW5kaW5nT2JqZWN0ID0geydpdGVtcyc6IFtdfTtcclxuICAgIGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvbGVzc29ucy92aWRlby9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGJpbmRpbmdPYmplY3QgWydpdGVtcyddID0gSlNPTi5wYXJzZShyKTtcclxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvQ3VzdG9tUGFnZSgpIHtcclxuICAgIC8vIHBlcmZvcm1pbmcgYSBzZWNvbmRhcnkgbmF2aWdhdGlvblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcImN1c3RvbS1wYWdlL2N1c3RvbS1wYWdlXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIG9uY2UgeW91IGNhbGxlZCB0aGlzIG1ldGhvZCBvbmNlLCB5b3UgZG9uJ3QgbmVlZCB0byBjYWxsIGl0IGZ1cnRoZXIgaW4gdGhlIHNhbWUgc3RhY2tcclxuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJdGVtKGFyZ3M6RXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCBTTCA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGl0ZW0gPSA8VmlkZW9MZXNzb24+U0wuYmluZGluZ0NvbnRleHQ7XHJcblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3NvblwiLFxyXG4gICAgICAgIGNvbnRleHQ6IGl0ZW0sXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCJcXHJcXG4gICAgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgeG1sbnM6aW1nPVxcXCJuYXRpdmVzY3JpcHQtaW1hZ2VcXFwiPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJWaWRlbyBsZXNzb25zXFxcIiBpY29uPVxcXCJcXFwiIC8+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcdFxcdFxcclxcblxcdFxcdDxMaXN0VmlldyBoZWlnaHQ9XFxcIjEwMDBcXFwiIGl0ZW1zPVxcXCJ7eyBpdGVtcyB9fVxcXCI+XFxyXFxuXFx0XFx0XFx0PExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgdGFwPVxcXCJzaG93SXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCI1XFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxJbWFnZSBzcmM9XFxcInt7IHBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBzdHlsZT1cXFwiaG9yaXpvbnRhbC1hbGlnbjpjZW50ZXI7XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IHRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgc3ViamVjdCB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGdyYWRlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiBzdHlsZT1cXFwiaG9yaXpvbnRhbC1hbGlnbjpyaWdodDtcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic3BhY2VyXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9MaXN0Vmlldz5cXHJcXG5cXHRcXHRcXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb25zLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWVkKCkge1xyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiAnc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UnLFxyXG4gICAgICAgIC8vIGJhY2tTdGFja1Zpc2libGUgbXVzdCBiZSBlbmFibGVkLCB5b3UgZG9uJ3QgbmVlZCB0byBleHBsaWNpdGx5IG1lbnRoaW9uIGl0IGFueXdheSwgaXQgaXMgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyB0aG91Z2ggSSBhbSBjYWxsaW5nIGhpZGVOYXZCYXIgaGVyZSwgaXQgd29uJ3QgYWZmZWN0IGF0IGFsbC5cclxuICAgIC8vIHNvIHlvdSBuZWVkIG5vdCB0byBjYWxsIGl0IGZ1cnRoZXIsIGlmIHlvdSBzdGF5IG9uIHRoZSBzYW1lIHN0YWNrLlxyXG4gICAgbmV3IE5hdmlnYXRpb25IYW5kbGVyKCkuaGlkZU5hdkJhcigpO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIkN1c3RvbSBQYWdlXFxcIiBpY29uPVxcXCJcXFwiLz5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0PExhYmVsIHRleHQ9XFxcIlRoaXMgcGFnZSBpcyBub3QgYSBwYXJ0IG9mIG1haW4gbmF2aWdhdGlvbi4gUHJlc3MgYmFjayBidXR0b24gdG8gcmV0dXJuIHRvIHRoZSBtYWluIHZpZXcuXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIk9yIHByZXNzIHRoZSBidXR0b24gYmVsb3cgdG8gcHJvY2VlZCBmdXJ0aGVyLlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG5cXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIktlZXAgTmF2aWdhdGluZ1xcXCIgdGFwPVxcXCJwcm9jZWVkXFxcIiAvPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCJcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgaWYgKGFwcC5pb3MpIHtcclxuICAgICAgICBhbGVydChcIlNvcnJ5LCBpdCBvbmx5IHdvcmtzIHdpdGggQW5kcm9pZCBjdXJyZW50bHkhXCIpO1xyXG4gICAgfVxyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG4gICAgICAgICd0ZXh0JzogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMCkudG9TdHJpbmcoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvUGFnZTIoKSB7XHJcbiAgICAvLyBzaW11bGF0ZSBhIG5hdmlnYXRpb24gdG8gZXZlbnRzXHJcbiAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5zaW11bGF0ZU5hdmlnYXRpb24oXCJldmVudHNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXHJcXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcclxcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUGFnZSAxXFxcIiBpY29uPVxcXCJcXFwiIC8+XFxyXFxuICAgIDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuICAgIDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWxcXHJcXG4gICAgICAgICAgICB0ZXh0PVxcXCJVc2Ugc2ltdWxhdGVOYXZpZ2F0aW9uIG1ldGhvZCBmb3Igdmlldy10by12aWV3IG5hdmlnYXRpb24uIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHByaW1hcnkgbmF2aWdhdGlvbi5cXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiR28gdG8gUGFnZTJcXFwiIHRhcD1cXFwiZ29Ub1BhZ2UyXFxcIiAvPlxcclxcbiAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgdGV4dD1cXFwiU3BlY2lmeSB0aGUgZGVzaXJlZCBtZW51IG5hbWUgdG8gbmF2aWdhdGUuIENsaWNrIG9uIHRoZSBidXR0b24gb3ZlcmhlYWQgdG8gc2VlIGFuIGV4YW1wbGUuXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuICAgICAgICA8TGFiZWxcXHJcXG4gICAgICAgICAgICB0ZXh0PVxcXCJ7e3RleHR9fVxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PiBcXHJcXG4gXFxyXFxuIDwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9wYWdlMS9wYWdlMS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9wYWdlMS9wYWdlMS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuXHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uVGV4dENoYW5nZShhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xlYXIoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhclwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic3VibWl0XCIpO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXI+XFxyXFxuXFx0XFx0XFx0PFNlYXJjaEJhciBoaW50PVxcXCJISU5UXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgIGNsZWFyPVxcXCJvbkNsZWFyXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgIHN1Ym1pdD1cXFwib25TdWJtaXRcXFwiPjwvU2VhcmNoQmFyPlxcclxcblxcdFxcdDwvQWN0aW9uQmFyPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0PFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiMjAwIDIwMCAyMDAgMjAwIDIwMCAyMDAgMjAwIDIwMCAyMDAgMjAwXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMVxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCIzXFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiNFxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjVcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCI2XFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiN1xcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjhcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCI5XFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG48L1Njcm9sbFZpZXc+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL3BhZ2U0L3BhZ2U0LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL3BhZ2U0L3BhZ2U0LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KHtcclxuXHJcbiAgICB9KTtcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJTZWNvbmQgUGFnZVxcXCIgaWNvbj1cXFwiXFxcIi8+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJXaGVuIHlvdSB3aWxsIHByZXNzIGJhY2ssIHlvdSB3b24ndCBzZWUgdGhlIG5hdmlnYXRpb24gYmFyLiBZb3UndmUgdG8gZ28gYmFjayBvbmUgbW9yZSBsZXZlbC5cXFwiIFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9