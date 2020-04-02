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

/***/ "tns-core-modules/ui/frame/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/frame");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC50cyIsIndlYnBhY2s6Ly8vLi9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvQmxvZy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9nL0Jsb2cueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnRzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FdmVudHMvRXZlbnRzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL0V2ZW50cy9FdmVudHMueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL0V2ZW50cy9ldmVudC9ldmVudC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL0xlc3NvbnMvTGVzc29ucy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9MZXNzb25zL0xlc3NvbnMueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3Nvbi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb24vVmlkZW9MZXNzb24ueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29ucy54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3BhZ2VzL3BhZ2UxL3BhZ2UxLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL3BhZ2UxL3BhZ2UxLnhtbCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlNC9wYWdlNC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlNC9wYWdlNC54bWwiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UueG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFFZjtBQUVOO0FBRXBEO0lBQXNDLG9DQUFVO0lBSTVDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUo7OztPQUdHO0lBQ08sbUNBQVEsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQUksVUFBVSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFlLHdFQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLGFBQWEsR0FBZSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZELGtEQUFrRDtRQUNsRCxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7WUFDN0MsT0FBTztTQUNWO2FBQU07WUFDSCxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1NB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U0FBUyxhQUFhLENBQUMsSUFBZTtJQUV6QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsbUZBQVUsQ0FBQyxFQUVoQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBRU0sU0FBUyxZQUFZLENBQUMsSUFBSTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFTSxTQUFTLE9BQU8sQ0FBQyxJQUFJO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFDLElBQUk7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxvL0M7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixrREFBa0Q7QUFDN0UsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBRWxFLFNBQVMsYUFBYSxDQUFDLElBQWU7SUFDekMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLG1GQUFVLENBQUMsRUFFaEMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRCw0YjtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG9FQUFvRTtBQUMvRixLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNSQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGtEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC1yb290LXZpZXctbW9kZWwudHNcIixcblx0XCIuL2FwcC1yb290LnRzXCI6IFwiLi9hcHAtcm9vdC50c1wiLFxuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC50c1wiLFxuXHRcIi4vbW9kZWxzL0V2ZW50LnRzXCI6IFwiLi9tb2RlbHMvRXZlbnQudHNcIixcblx0XCIuL21vZGVscy9Qb3N0LnRzXCI6IFwiLi9tb2RlbHMvUG9zdC50c1wiLFxuXHRcIi4vbW9kZWxzL1ZpZGVvTGVzc29uLnRzXCI6IFwiLi9tb2RlbHMvVmlkZW9MZXNzb24udHNcIixcblx0XCIuL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyLnRzXCI6IFwiLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlci50c1wiLFxuXHRcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IuanNcIjogXCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLmpzXCIsXG5cdFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50c1wiOiBcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IudHNcIixcblx0XCIuL3BhZ2VzL0Jsb2cvQmxvZy50c1wiOiBcIi4vcGFnZXMvQmxvZy9CbG9nLnRzXCIsXG5cdFwiLi9wYWdlcy9CbG9nL0Jsb2cueG1sXCI6IFwiLi9wYWdlcy9CbG9nL0Jsb2cueG1sXCIsXG5cdFwiLi9wYWdlcy9CbG9nL3Bvc3QvcG9zdC50c1wiOiBcIi4vcGFnZXMvQmxvZy9wb3N0L3Bvc3QudHNcIixcblx0XCIuL3BhZ2VzL0Jsb2cvcG9zdC9wb3N0LnhtbFwiOiBcIi4vcGFnZXMvQmxvZy9wb3N0L3Bvc3QueG1sXCIsXG5cdFwiLi9wYWdlcy9FdmVudHMvRXZlbnRzLnRzXCI6IFwiLi9wYWdlcy9FdmVudHMvRXZlbnRzLnRzXCIsXG5cdFwiLi9wYWdlcy9FdmVudHMvRXZlbnRzLnhtbFwiOiBcIi4vcGFnZXMvRXZlbnRzL0V2ZW50cy54bWxcIixcblx0XCIuL3BhZ2VzL0V2ZW50cy9ldmVudC9ldmVudC50c1wiOiBcIi4vcGFnZXMvRXZlbnRzL2V2ZW50L2V2ZW50LnRzXCIsXG5cdFwiLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQueG1sXCI6IFwiLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQueG1sXCIsXG5cdFwiLi9wYWdlcy9MZXNzb25zL0xlc3NvbnMudHNcIjogXCIuL3BhZ2VzL0xlc3NvbnMvTGVzc29ucy50c1wiLFxuXHRcIi4vcGFnZXMvTGVzc29ucy9MZXNzb25zLnhtbFwiOiBcIi4vcGFnZXMvTGVzc29ucy9MZXNzb25zLnhtbFwiLFxuXHRcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29uL1ZpZGVvTGVzc29uLnRzXCI6IFwiLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb24vVmlkZW9MZXNzb24udHNcIixcblx0XCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3Nvbi54bWxcIjogXCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3Nvbi54bWxcIixcblx0XCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMudHNcIjogXCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMudHNcIixcblx0XCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3NvbnMueG1sXCI6IFwiLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb25zLnhtbFwiLFxuXHRcIi4vcGFnZXMvY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2UudHNcIjogXCIuL3BhZ2VzL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnRzXCIsXG5cdFwiLi9wYWdlcy9jdXN0b20tcGFnZS9jdXN0b20tcGFnZS54bWxcIjogXCIuL3BhZ2VzL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnhtbFwiLFxuXHRcIi4vcGFnZXMvcGFnZTEvcGFnZTEudHNcIjogXCIuL3BhZ2VzL3BhZ2UxL3BhZ2UxLnRzXCIsXG5cdFwiLi9wYWdlcy9wYWdlMS9wYWdlMS54bWxcIjogXCIuL3BhZ2VzL3BhZ2UxL3BhZ2UxLnhtbFwiLFxuXHRcIi4vcGFnZXMvcGFnZTQvcGFnZTQudHNcIjogXCIuL3BhZ2VzL3BhZ2U0L3BhZ2U0LnRzXCIsXG5cdFwiLi9wYWdlcy9wYWdlNC9wYWdlNC54bWxcIjogXCIuL3BhZ2VzL3BhZ2U0L3BhZ2U0LnhtbFwiLFxuXHRcIi4vcGFnZXMvc2Vjb25kYXJ5LXBhZ2Uvc2Vjb25kYXJ5LXBhZ2UudHNcIjogXCIuL3BhZ2VzL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnRzXCIsXG5cdFwiLi9wYWdlcy9zZWNvbmRhcnktcGFnZS9zZWNvbmRhcnktcGFnZS54bWxcIjogXCIuL3BhZ2VzL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiXHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFJvb3RWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwcmV2aW91c01lbnU6IFN0YWNrTGF5b3V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnRyb2xzIHRoZSBwcmltYXJ5IG5hdmlnYXRpb24gb2YgdGhlIGFwcGxpY2F0aW9uXHJcblx0ICogQHBhcmFtIGFyZ3MgVGFwcGVkIG1lbnUgY29udGV4dFxyXG5cdCAqL1xyXG4gICAgcHVibGljIG5hdmlnYXRlKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCB0YXBwZWRNZW51ID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGxldCByb290VmlldyA9IDxHcmlkTGF5b3V0PmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIGxldCBwYWdlQ29udGFpbmVyID0gPEdyaWRMYXlvdXQ+cm9vdFZpZXcuZ2V0Q2hpbGRBdCgxKTtcclxuXHJcbiAgICAgICAgLy8gcHJldmVudCBjb25zZWN1dGl2ZSBuYXZpZ2F0aW9uIHRvIHRoZSBzYW1lIHBhZ2VcclxuICAgICAgICBpZiAodGFwcGVkTWVudSA9PSBBcHBSb290Vmlld01vZGVsLnByZXZpb3VzTWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQXBwUm9vdFZpZXdNb2RlbC5wcmV2aW91c01lbnUgPSB0YXBwZWRNZW51O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZm9ybWF0dGluZ1xyXG4gICAgICAgIHBhZ2VDb250YWluZXIuZWFjaENoaWxkVmlldygodmlldykgPT4ge1xyXG4gICAgICAgICAgICB2aWV3LnNldChcImNsYXNzXCIsIFwiYm90dG9tLW5hdi1idG5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xyXG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBgcGFnZXMvJHt0YXBwZWRNZW51LmlkfS8ke3RhcHBlZE1lbnUuaWR9YCxcclxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhcHBlZE1lbnUuc2V0KFwiY2xhc3NcIiwgXCJib3R0b20tbmF2LWJ0biBib3R0b20tbmF2LWJ0bi1hY3RpdmVcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQXBwUm9vdFZpZXdNb2RlbCB9IGZyb20gXCIuL2FwcC1yb290LXZpZXctbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBhcHBSb290ID0gPEdyaWRMYXlvdXQ+YXJncy5vYmplY3Q7XHJcbiAgICBhcHBSb290LmJpbmRpbmdDb250ZXh0ID0gbmV3IEFwcFJvb3RWaWV3TW9kZWwoKTtcclxufVxyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIFxcclxcblxcdEkgYW0gdXNpbmcgcGxhaW4gc3RhY2tsYXlvdXQgaGVyZSwgeW91IGNhbiB1c2UgYW55IGxheW91dCB5b3Ugd2FudC5cXHJcXG5cXHRZb3UgYWxzbyBjYW4gdXNlIG5hdGl2ZXNjcmlwdC1yaXBwbGUgdG8gZ2V0IHNvbWUgcmlwcGxlIGVmZmVjdC5cXHJcXG5cXHRCdXQgcmVtZW1iZXIgdG8gbW9kaWZ5IGNvbXBvbmVudHMgb24gQXBwUm9vdFZpZXdNb2RlbCBhbmQgXFxyXFxuXFx0bW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXIgZmlsZS5cXHJcXG4gLS0+XFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0b1xcXCIgY29sdW1ucz1cXFwiKlxcXCIgbG9hZGVkPVxcXCJvbkxvYWRlZFxcXCI+XFxyXFxuXFx0PEZyYW1lIHJvdz1cXFwiMFxcXCIgZGVmYXVsdFBhZ2U9XFxcInBhZ2VzL3BhZ2UxL3BhZ2UxXFxcIi8+XFxyXFxuXFx0PCEtLS0tPlxcclxcblxcclxcblxcclxcblxcdDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiI2ZmZlxcXCIgdmlzaWJpbGl0eT1cXFwidmlzaWJsZVxcXCIgcm93PVxcXCIxXFxcIiBjb2x1bW5zPVxcXCIqLCosKiwqLCpcXFwiIGlkPVxcXCJib3R0b21OYXZCYXJcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2XFxcIj5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQgaWQ9XFxcInBhZ2UxXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi1idG4tYWN0aXZlXFxcIiBjb2w9XFxcIjBcXFwiIHRhcD1cXFwie3sgbmF2aWdhdGUgfX1cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxJbWFnZSBzcmM9XFxcInJlczovL2hvbWVcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiVW5pZXJzaXRpZXNcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYm90dG9tLW5hdi10ZXh0XFxcIiAvPlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGlkPVxcXCJFdmVudHNcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LWJ0blxcXCIgdGFwPVxcXCJ7eyBuYXZpZ2F0ZSB9fVxcXCIgY29sPVxcXCIxXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJiN4ZTU0YztcXFwiIGNsYXNzPVxcXCJtZGkgYm90dG9tLW5hdi1pY29uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiRXZlbnRzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwiQmxvZ1xcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlMGNhO1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJCbG9nXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwiTGVzc29uc1xcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtYnRuXFxcIiB0YXA9XFxcInt7IG5hdmlnYXRlIH19XFxcIiBjb2w9XFxcIjNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCImI3hlN2Y3O1xcXCIgY2xhc3M9XFxcIm1kaSBib3R0b20tbmF2LWljb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJMZXNzb25zXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJvdHRvbS1uYXYtdGV4dFxcXCIgLz5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdDxTdGFja0xheW91dCBpZD1cXFwicGFnZTRcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LWJ0blxcXCIgdGFwPVxcXCJ7eyBuYXZpZ2F0ZSB9fVxcXCIgY29sPVxcXCI0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiJiN4ZTdmNztcXFwiIGNsYXNzPVxcXCJtZGkgYm90dG9tLW5hdi1pY29uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwiSm9ic1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJib3R0b20tbmF2LXRleHRcXFwiIC8+XFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXFx0PCEtLS0tPlxcclxcbjwvR3JpZExheW91dD5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXHJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxyXFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcclxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcclxcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcclxcblxcclxcbi8qXFxyXFxuRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBVSVxcclxcbmNvbXBvbmVudHMgdGhhdCBoYXZlIHRoZSBidG4gY2xhc3MgbmFtZS5cXHJcXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxyXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxyXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXHJcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcclxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcclxcbkkgYW0gdXNpbmcgbWF0ZXJpYWwgZm9udCBpY29ucyBoZXJlLCB5b3UgY2FuIHVzZSBhbnkgaWNvbiB5b3Ugd2FudC5cXHJcXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1kaVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiTWF0ZXJpYWxJY29ucywgXFxcIk1hdGVyaWFsIEljb25zXFxcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3R0b20tbmF2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci10b3AtY29sb3JcIixcInZhbHVlXCI6XCIjZWNlY2VjXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXRvcC13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiYWJzb2x1dGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdi1idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM4ODg4ODhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm90dG9tLW5hdi1idG4tYWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy10b3BcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMjIzZTkyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvdHRvbS1uYXYtaWNvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvdHRvbS1uYXYtdGV4dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJjYXBpdGFsaXplXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRpdmlkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwibGlnaHRncmF5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLml0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjNjY2NjY2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXN0eWxlXCIsXCJ2YWx1ZVwiOlwic29saWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3BhY2VyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJpZ190ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI0OS41cHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xyXG5hcHAucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcclxuLypcclxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XHJcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cclxuKi9cclxuIiwiLypcclxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXHJcbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XHJcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cclxuKi9cclxuXHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlclwiXHJcblxyXG4vKipcclxuICogSWYgYSB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvbiBpcyBwZXJmb3JtZWQgb24gdGhlIGFwcGxpY2F0aW9uIHNvbWV3aGVyZSxcclxuICogdW5oaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciBvbiBiYWNrIGtleSBwcmVzcy5cclxuICovXHJcbmlmIChhcHAuYW5kcm9pZCkge1xyXG4gICAgYXBwLmFuZHJvaWQub24oYXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzKSA9PiB7XHJcbiAgICAgICAgbmV3IE5hdmlnYXRpb25IYW5kbGVyKCkuc2hvd05hdkJhcigpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmFwcC5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xyXG5cclxuLypcclxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XHJcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cclxuKi9cclxuIiwiaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQXBwUm9vdFZpZXdNb2RlbCB9IGZyb20gXCIuLi9hcHAtcm9vdC12aWV3LW1vZGVsXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgdGhlIGhlbHBlciBmdW5jdGlvbnMgbmVlZGVkIGZvclxyXG4gKiB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvbi4gSWYgeW91IG5vdGljZSB5b3UnbGwgc2VlIHRoYXQgdGhlcmVcclxuICogYXJlIHR3byB0eXBlcyBvZiBuYXZpZ2F0aW9uIGluIEJvdHRvbSBOYXZpZ2F0aW9uLiBPbmUgaXMsIHVzaW5nIHRoZVxyXG4gKiBtZW51cyBwcmVzZW50ZWQgaXQgbmF2aWdhdGlvbiBiYXIgaXRzZWxmLCBhbmQgdGhlIG90aGVyIG9uZSBpcyBhIHNlY29uZGFyeVxyXG4gKiBuYXZpZ2F0aW9uIHdpdGhpbiBvbmUgb2YgdGhlIHByaW1hcnkgbWVudXMsIGUuZy4gY29udGFjdCBsaXN0IHRvIHNlbmQgbWVzc2FnZS4gVGhlXHJcbiAqIG5hdmlnYXRpb24gYmFyIHNob3VsZCBiZSBoaWRkZW4gZHVyaW5nIHRoaXMgdHlwZSBvZiBuYXZpZ2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25IYW5kbGVyIHtcclxuXHJcblx0LyoqXHJcblx0ICogSGlkZSB0aGUgbmF2aWdhdGlvbiBiYXIgZHVyaW5nIGEgdmlldy10by12aWV3IG5hdmlnYXRpb25cclxuXHQgKi9cclxuICAgIHB1YmxpYyBoaWRlTmF2QmFyKCkge1xyXG4gICAgICAgIC8vIGlmIHRoZSBuYXZpZ2F0aW9uIHN0YWNrIGlzIG5vdCBlbXB0eSB0aGVuIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBoaWRkZW4gYWxyZWFkeVxyXG4gICAgICAgIGlmICh0b3Btb3N0KCkuYmFja1N0YWNrLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvb3RWaWV3ID0gPEdyaWRMYXlvdXQ+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgbGV0IG5hdkJhciA9IDxHcmlkTGF5b3V0PnJvb3RWaWV3LmdldENoaWxkQXQoMSk7XHJcbiAgICAgICAgbmF2QmFyLnNldChcInZpc2liaWxpdHlcIiwgXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNob3cgdGhlIG5hdmlnYXRpb24gYmFyIG9uIGJhY2sga2V5IHByZXNzIGZyb20gdmlldy10by12aWV3IG5hdmlnYXRpb25cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzaG93TmF2QmFyKCkge1xyXG4gICAgICAgIC8vIGRvIG5vdCB1bmhpZGUgdGhlIG5hdmlnYXRpb24gYmFyIHVudGlsIG9ubHkgb25lIGFjdGl2aXR5IGxlZnQgaW4gdGhlIHN0YWNrXHJcbiAgICAgICAgaWYgKHRvcG1vc3QoKS5iYWNrU3RhY2subGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb290VmlldyA9IDxHcmlkTGF5b3V0PmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIGxldCBuYXZCYXIgPSA8R3JpZExheW91dD5yb290Vmlldy5nZXRDaGlsZEF0KDEpO1xyXG4gICAgICAgIG5hdkJhci5zZXQoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2Qgc2ltdWxhdGVzIGEgbmF2aWdhdGlvbiB0byB0aGUgc3BlY2lmaWVkIG1lbnUgdXNpbmcgdGhlIGNvcmVcclxuXHQgKiBuYXZpZ2F0aW9uIG1ldGhvZC4gVXNlIHRoaXMgbWV0aG9kIGZvciB2aWV3LXRvLXZpZXcgbmF2aWdhdGlvbi5cclxuXHQgKiBAcGFyYW0gc3RyaW5nIFRoZSBtZW51IHRvIGJlIG5hdmlnYXRlZCwgZXhwZWN0cyBhbiBJRFxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNpbXVsYXRlTmF2aWdhdGlvbihtZW51OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcm9vdFZpZXcgPSA8R3JpZExheW91dD5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBsZXQgbmF2QmFyID0gPEdyaWRMYXlvdXQ+cm9vdFZpZXcuZ2V0Q2hpbGRBdCgxKTtcclxuICAgICAgICBsZXQgdGFwcGVkVmlldyA9IDxTdGFja0xheW91dD5uYXZCYXIuZ2V0Vmlld0J5SWQobWVudSk7XHJcbiAgICAgICAgLy8gaW5pdGlhdGUgYSB0YXAgZXZlbnQgXHJcbiAgICAgICAgbmV3IEFwcFJvb3RWaWV3TW9kZWwoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZTogXCJ0YXBcIixcclxuICAgICAgICAgICAgb2JqZWN0OiB0YXBwZWRWaWV3XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBPYnNlcnZhYmxlUHJvcGVydHkoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5PYnNlcnZhYmxlUHJvcGVydHkgPSBPYnNlcnZhYmxlUHJvcGVydHk7XHJcbiIsIi8qKlxyXG5UaGlzIGZpbGUgZGVmaW5lcyBhIGRlY29yYXRvciB5b3UgY2FuIHVzZSB0byBlbmFibGUgdHdvLXdheVxyXG5iaW5kaW5nIG9uIHZpZXctbW9kZWwgcHJvcGVydGllcy5cclxuXHJcbkZvciBleGFtcGxlOlxyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcblxyXG5AT2JzZXJ2YWJsZVByb3BlcnR5KCkgbXlQcm9wZXJ0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5SZWFkIG1vcmUgYXQgaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9ibG9nL25hdGl2ZXNjcmlwdC1vYnNlcnZhYmxlLW1hZ2ljLXN0cmluZy1wcm9wZXJ0eS1uYW1lLWJlLWdvbmVcclxuKiovXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2YWJsZVByb3BlcnR5KCkge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IE9ic2VydmFibGUsIHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9Qb3N0XCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIFxyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKSAlIDI7XHJcbiAgICB2YXIgc3RyID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgIGlmIChpbmRleCA9PSAwKSBzdHIgPSBcIlwiO1xyXG4gICAgdmFyIGJpbmRpbmdPYmplY3QgPSB7J2l0ZW1zJzogW119O1xyXG4gICAgZ2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvY29tcGFjdFwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBiaW5kaW5nT2JqZWN0IFsnaXRlbXMnXSA9IEpTT04ucGFyc2Uocik7XHJcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3QoYmluZGluZ09iamVjdCk7XHJcbiAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0N1c3RvbVBhZ2UoKSB7XHJcbiAgICAvLyBwZXJmb3JtaW5nIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb25cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogXCJjdXN0b20tcGFnZS9jdXN0b20tcGFnZVwiLFxyXG4gICAgfSk7XHJcbiAgICAvLyBvbmNlIHlvdSBjYWxsZWQgdGhpcyBtZXRob2Qgb25jZSwgeW91IGRvbid0IG5lZWQgdG8gY2FsbCBpdCBmdXJ0aGVyIGluIHRoZSBzYW1lIHN0YWNrXHJcbiAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5oaWRlTmF2QmFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SXRlbShhcmdzOkV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgU0wgPSA8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCBpdGVtID0gPFBvc3Q+U0wuYmluZGluZ0NvbnRleHQ7XHJcblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL0Jsb2cvcG9zdC9wb3N0XCIsXHJcbiAgICAgICAgY29udGV4dDogaXRlbSxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIlxcclxcbiAgICB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIiB4bWxuczppbWc9XFxcIm5hdGl2ZXNjcmlwdC1pbWFnZVxcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDxBY3Rpb25CYXIgdGl0bGU9XFxcIkJsb2dcXFwiIGljb249XFxcIlxcXCIgLz5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFx0XFx0XFxyXFxuXFx0XFx0PExpc3RWaWV3IGhlaWdodD1cXFwiMTAwMFxcXCIgaXRlbXM9XFxcInt7IGl0ZW1zIH19XFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCB0YXA9XFxcInNob3dJdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJpdGVtXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwie3sgcGhvdG8gfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aD1cXFwiMjAwXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IHRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgZGF0ZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IHBsYWNlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGhlaWdodD1cXFwiMTAwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCI0NVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCIyMFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0XFx0XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvQmxvZy9CbG9nLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL0Jsb2cvQmxvZy54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgRXZlbnREYXRhLCBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Bvc3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcclxuICAgIGNvbnN0IGl0ZW0gPSBhcmdzLmNvbnRleHQgYXMgUG9zdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBpdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25CYWNrQnV0dG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXc7XHJcbiAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlIGFzIFBhZ2U7XHJcblxyXG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcclxufVxyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZVxcclxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiAgXFxyXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcclxcblxcclxcbiAgICA8QWN0aW9uQmFyPlxcclxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGFwPVxcXCJvbkJhY2tCdXR0b25UYXBcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IHBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiXFxyXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIyMDBcXFwiIC8+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImRpdmlkZXJcXFwiIGhlaWdodD1cXFwiMTBcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwie3tkYXRlfX1cXFwiIGNvbG9yPVxcXCIjMDA2NjAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInBsYWNlLW1hcmtlci5wbmdcXFwiIC8+PFNwYW4gdGV4dD1cXFwie3twbGFjZX19XFxcIiBjb2xvcj1cXFwiIzk5MDAwMFxcXCIgZm9udFdlaWdodD1cXFwiQm9sZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiBzdHlsZT1cXFwiaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOiByaWdodDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ZGVzY3JpcHRpb259fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9CbG9nL3Bvc3QvcG9zdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9CbG9nL3Bvc3QvcG9zdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRXZlbnRcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgXHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApICUgMjtcclxuICAgIHZhciBzdHIgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgaWYgKGluZGV4ID09IDApIHN0ciA9IFwiXCI7XHJcbiAgICB2YXIgYmluZGluZ09iamVjdCA9IHsnaXRlbXMnOiBbXX07XHJcbiAgICBnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGJpbmRpbmdPYmplY3QgWydpdGVtcyddID0gSlNPTi5wYXJzZShyKTtcclxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvQ3VzdG9tUGFnZSgpIHtcclxuICAgIC8vIHBlcmZvcm1pbmcgYSBzZWNvbmRhcnkgbmF2aWdhdGlvblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcImN1c3RvbS1wYWdlL2N1c3RvbS1wYWdlXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIG9uY2UgeW91IGNhbGxlZCB0aGlzIG1ldGhvZCBvbmNlLCB5b3UgZG9uJ3QgbmVlZCB0byBjYWxsIGl0IGZ1cnRoZXIgaW4gdGhlIHNhbWUgc3RhY2tcclxuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJdGVtKGFyZ3M6RXZlbnREYXRhKSB7XHJcbiAgICBjb25zdCBTTCA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGl0ZW0gPSA8RXZlbnQ+U0wuYmluZGluZ0NvbnRleHQ7XHJcblxyXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL0V2ZW50cy9ldmVudC9ldmVudFwiLFxyXG4gICAgICAgIGNvbnRleHQ6IGl0ZW0sXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCJcXHJcXG4gICAgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgeG1sbnM6aW1nPVxcXCJuYXRpdmVzY3JpcHQtaW1hZ2VcXFwiPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJFdmVudHNcXFwiIGljb249XFxcIlxcXCIgLz5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFx0XFx0XFxyXFxuXFx0XFx0PExpc3RWaWV3IGhlaWdodD1cXFwiMTAwMFxcXCIgaXRlbXM9XFxcInt7IGl0ZW1zIH19XFxcIj5cXHJcXG5cXHRcXHRcXHQ8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCB0YXA9XFxcInNob3dJdGVtXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic3BhY2VyXFxcIiBoZWlnaHQ9XFxcIjVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwie3sgcGhvdG8gfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpdFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOmNlbnRlcjtcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBkYXRlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgcGxhY2UgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOnJpZ2h0O1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiMjBcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXHJcXG5cXHRcXHQ8L0xpc3RWaWV3PlxcclxcblxcdFxcdFxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL0V2ZW50cy9FdmVudHMueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZXMvRXZlbnRzL0V2ZW50cy54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgRXZlbnREYXRhLCBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9FdmVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xyXG4gICAgY29uc3QgaXRlbSA9IGFyZ3MuY29udGV4dCBhcyBFdmVudDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBpdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25CYWNrQnV0dG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXc7XHJcbiAgICBjb25zdCBwYWdlID0gdmlldy5wYWdlIGFzIFBhZ2U7XHJcblxyXG4gICAgcGFnZS5mcmFtZS5nb0JhY2soKTtcclxufVxyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZVxcclxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiAgXFxyXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcclxcblxcclxcbiAgICA8QWN0aW9uQmFyPlxcclxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGFwPVxcXCJvbkJhY2tCdXR0b25UYXBcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IHBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiXFxyXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIyMDBcXFwiIC8+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImRpdmlkZXJcXFwiIGhlaWdodD1cXFwiMTBcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwie3tkYXRlfX1cXFwiIGNvbG9yPVxcXCIjMDA2NjAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInBsYWNlLW1hcmtlci5wbmdcXFwiIC8+PFNwYW4gdGV4dD1cXFwie3twbGFjZX19XFxcIiBjb2xvcj1cXFwiIzk5MDAwMFxcXCIgZm9udFdlaWdodD1cXFwiQm9sZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiBzdHlsZT1cXFwiaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICA8L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQm9va21hcmtcXFwiIHN0eWxlPVxcXCJob3Jpem9udGFsLWFsaWduOiByaWdodDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ZGVzY3JpcHRpb259fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9FdmVudHMvZXZlbnQvZXZlbnQueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZXMvRXZlbnRzL2V2ZW50L2V2ZW50LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuXHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG5cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93X3ZpZGVvIChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb25zXCIsXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuXFx0PFBhZ2UuYWN0aW9uQmFyPlxcclxcblxcdFxcdDwhLS08QWN0aW9uQmFyIHRpdGxlPVxcXCJKb2JzXFxcIj5cXHJcXG5cXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0IGlvczpob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0IGFuZHJvaWQ6aG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwicmVzOi8vaG9tZVxcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImFjdGlvbi1pbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG5cXHRcXHRcXHRcXHQ8U2VhcmNoQmFyPjwvU2VhcmNoQmFyPlxcclxcblxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0PC9BY3Rpb25CYXI+LS0+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiIExlc3NvbnNcXFwiIGFuZHJvaWQuaWNvbj1cXFwicmVzOi8vaG9tZVxcXCIgYW5kcm9pZC5pY29uVmlzaWJpbGl0eT1cXFwiYWx3YXlzXFxcIlxcclxcblxcdFxcdCBpb3MuaWNvbj1cXFwicmVzOi8vaG9tZVxcXCIgaW9zLmljb25WaXNpYmlsaXR5PVxcXCJhbHdheXNcXFwiPlxcclxcblxcdFxcdDwvQWN0aW9uQmFyPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuXFxyXFxuXFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcblxcdDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuXFx0XFx0PEJ1dHRvbiBjbGFzcz1cXFwiaXRlbSBiaWdfdGV4dFxcXCIgdGV4dD1cXFwiVmlkZW9cXFwiIHRhcD1cXFwic2hvd192aWRlb1xcXCI+PC9CdXR0b24+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiAvPlxcclxcblxcdFxcdDxCdXR0b24gY2xhc3M9XFxcIml0ZW0gYmlnX3RleHRcXFwiIHRleHQ9XFxcIlByaXZhdGVcXFwiPjwvQnV0dG9uPlxcclxcblxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwic3BhY2VyXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgLz5cXHJcXG5cXHRcXHQ8QnV0dG9uIGNsYXNzPVxcXCJpdGVtIGJpZ190ZXh0XFxcIiB0ZXh0PVxcXCJPbmxpbmVcXFwiPjwvQnV0dG9uPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFxyXFxuXFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL0xlc3NvbnMvTGVzc29ucy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9MZXNzb25zL0xlc3NvbnMueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IEV2ZW50RGF0YSwgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZXZlbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcclxuICAgIGNvbnN0IGl0ZW0gPSBhcmdzLmNvbnRleHQgYXMgRXZlbnQ7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gaXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQmFja0J1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3O1xyXG4gICAgY29uc3QgcGFnZSA9IHZpZXcucGFnZSBhcyBQYWdlO1xyXG5cclxuICAgIHBhZ2UuZnJhbWUuZ29CYWNrKCk7XHJcbn1cclxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2VcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgIFxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXHJcXG5cXHJcXG4gICAgPEFjdGlvbkJhcj5cXHJcXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRhcD1cXFwib25CYWNrQnV0dG9uVGFwXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcbiAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBwaG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIlxcclxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiMjAwXFxcIiAvPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJkaXZpZGVyXFxcIiBoZWlnaHQ9XFxcIjEwXFxcIj48L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxMYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcInt7ZGF0ZX19XFxcIiBjb2xvcj1cXFwiIzAwNjYwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJwbGFjZS1tYXJrZXIucG5nXFxcIiAvPjxTcGFuIHRleHQ9XFxcInt7cGxhY2V9fVxcXCIgY29sb3I9XFxcIiM5OTAwMDBcXFwiIGZvbnRXZWlnaHQ9XFxcIkJvbGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9TcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJCb29rbWFya1xcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246IHJpZ2h0O1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkJvb2ttYXJrXFxcIiBzdHlsZT1cXFwiaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7e2Rlc2NyaXB0aW9ufX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29uL1ZpZGVvTGVzc29uLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL1ZpZGVvTGVzc29ucy9WaWRlb0xlc3Nvbi9WaWRlb0xlc3Nvbi54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBWaWRlb0xlc3NvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvVmlkZW9MZXNzb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgXHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApICUgMjtcclxuICAgIHZhciBzdHIgPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgaWYgKGluZGV4ID09IDApIHN0ciA9IFwiXCI7XHJcbiAgICB2YXIgYmluZGluZ09iamVjdCA9IHsnaXRlbXMnOiBbXX07XHJcbiAgICBnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2xlc3NvbnMvdmlkZW8vY29tcGFjdFwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBiaW5kaW5nT2JqZWN0IFsnaXRlbXMnXSA9IEpTT04ucGFyc2Uocik7XHJcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3QoYmluZGluZ09iamVjdCk7XHJcbiAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0N1c3RvbVBhZ2UoKSB7XHJcbiAgICAvLyBwZXJmb3JtaW5nIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb25cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogXCJjdXN0b20tcGFnZS9jdXN0b20tcGFnZVwiLFxyXG4gICAgfSk7XHJcbiAgICAvLyBvbmNlIHlvdSBjYWxsZWQgdGhpcyBtZXRob2Qgb25jZSwgeW91IGRvbid0IG5lZWQgdG8gY2FsbCBpdCBmdXJ0aGVyIGluIHRoZSBzYW1lIHN0YWNrXHJcbiAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5oaWRlTmF2QmFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93SXRlbShhcmdzOkV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgU0wgPSA8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCBpdGVtID0gPFZpZGVvTGVzc29uPlNMLmJpbmRpbmdDb250ZXh0O1xyXG5cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb24vVmlkZW9MZXNzb25cIixcclxuICAgICAgICBjb250ZXh0OiBpdGVtLFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiXFxyXFxuICAgIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIHhtbG5zOmltZz1cXFwibmF0aXZlc2NyaXB0LWltYWdlXFxcIj5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiVmlkZW8gbGVzc29uc1xcXCIgaWNvbj1cXFwiXFxcIiAvPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHRcXHRcXHJcXG5cXHRcXHQ8TGlzdFZpZXcgaGVpZ2h0PVxcXCIxMDAwXFxcIiBpdGVtcz1cXFwie3sgaXRlbXMgfX1cXFwiPlxcclxcblxcdFxcdFxcdDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IHRhcD1cXFwic2hvd0l0ZW1cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzcGFjZXJcXFwiIGhlaWdodD1cXFwiNVxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBwaG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246Y2VudGVyO1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXRsZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IHN1YmplY3QgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBncmFkZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJCb29rbWFya1xcXCIgc3R5bGU9XFxcImhvcml6b250YWwtYWxpZ246cmlnaHQ7XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNwYWNlclxcXCIgaGVpZ2h0PVxcXCIyMFxcXCI+PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcclxcblxcdFxcdDwvTGlzdFZpZXc+XFxyXFxuXFx0XFx0XFxyXFxuXFx0PC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvVmlkZW9MZXNzb25zL1ZpZGVvTGVzc29ucy54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9WaWRlb0xlc3NvbnMvVmlkZW9MZXNzb25zLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VlZCgpIHtcclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogJ3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlJyxcclxuICAgICAgICAvLyBiYWNrU3RhY2tWaXNpYmxlIG11c3QgYmUgZW5hYmxlZCwgeW91IGRvbid0IG5lZWQgdG8gZXhwbGljaXRseSBtZW50aGlvbiBpdCBhbnl3YXksIGl0IGlzIGVuYWJsZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgIGJhY2tzdGFja1Zpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8gdGhvdWdoIEkgYW0gY2FsbGluZyBoaWRlTmF2QmFyIGhlcmUsIGl0IHdvbid0IGFmZmVjdCBhdCBhbGwuXHJcbiAgICAvLyBzbyB5b3UgbmVlZCBub3QgdG8gY2FsbCBpdCBmdXJ0aGVyLCBpZiB5b3Ugc3RheSBvbiB0aGUgc2FtZSBzdGFjay5cclxuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyIHRpdGxlPVxcXCJDdXN0b20gUGFnZVxcXCIgaWNvbj1cXFwiXFxcIi8+XFxyXFxuXFx0PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHQ8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcblxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJUaGlzIHBhZ2UgaXMgbm90IGEgcGFydCBvZiBtYWluIG5hdmlnYXRpb24uIFByZXNzIGJhY2sgYnV0dG9uIHRvIHJldHVybiB0byB0aGUgbWFpbiB2aWV3LlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJPciBwcmVzcyB0aGUgYnV0dG9uIGJlbG93IHRvIHByb2NlZWQgZnVydGhlci5cXFwiIFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuXFx0XFx0PEJ1dHRvbiB0ZXh0PVxcXCJLZWVwIE5hdmlnYXRpbmdcXFwiIHRhcD1cXFwicHJvY2VlZFxcXCIgLz5cXHJcXG5cXHQ8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9jdXN0b20tcGFnZS9jdXN0b20tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9jdXN0b20tcGFnZS9jdXN0b20tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlclwiXHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgIGlmIChhcHAuaW9zKSB7XHJcbiAgICAgICAgYWxlcnQoXCJTb3JyeSwgaXQgb25seSB3b3JrcyB3aXRoIEFuZHJvaWQgY3VycmVudGx5IVwiKTtcclxuICAgIH1cclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KHtcclxuICAgICAgICAndGV4dCc6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxMDApLnRvU3RyaW5nKClcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29Ub1BhZ2UyKCkge1xyXG4gICAgLy8gc2ltdWxhdGUgYSBuYXZpZ2F0aW9uIHRvIGV2ZW50c1xyXG4gICAgbmV3IE5hdmlnYXRpb25IYW5kbGVyKCkuc2ltdWxhdGVOYXZpZ2F0aW9uKFwiZXZlbnRzXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xyXG59IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0ZWRUbz1cXFwib25OYXZpZ2F0ZWRUb1xcXCI+XFxyXFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXHJcXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBhZ2UgMVxcXCIgaWNvbj1cXFwiXFxcIiAvPlxcclxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgdGV4dD1cXFwiVXNlIHNpbXVsYXRlTmF2aWdhdGlvbiBtZXRob2QgZm9yIHZpZXctdG8tdmlldyBuYXZpZ2F0aW9uLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBwcmltYXJ5IG5hdmlnYXRpb24uXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdvIHRvIFBhZ2UyXFxcIiB0YXA9XFxcImdvVG9QYWdlMlxcXCIgLz5cXHJcXG4gICAgICAgIDxMYWJlbFxcclxcbiAgICAgICAgICAgIHRleHQ9XFxcIlNwZWNpZnkgdGhlIGRlc2lyZWQgbWVudSBuYW1lIHRvIG5hdmlnYXRlLiBDbGljayBvbiB0aGUgYnV0dG9uIG92ZXJoZWFkIHRvIHNlZSBhbiBleGFtcGxlLlxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICAgICAgPExhYmVsXFxyXFxuICAgICAgICAgICAgdGV4dD1cXFwie3t0ZXh0fX1cXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgPC9TdGFja0xheW91dD4gXFxyXFxuIFxcclxcbiA8L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGFnZXMvcGFnZTEvcGFnZTEueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vcGFnZXMvcGFnZTEvcGFnZTEueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XHJcblxyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KHtcclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkNsZWFyKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdFwiKTtcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiPlxcclxcblxcdDxQYWdlLmFjdGlvbkJhcj5cXHJcXG5cXHRcXHQ8QWN0aW9uQmFyPlxcclxcblxcdFxcdFxcdDxTZWFyY2hCYXIgaGludD1cXFwiSElOVFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICBjbGVhcj1cXFwib25DbGVhclxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICBzdWJtaXQ9XFxcIm9uU3VibWl0XFxcIj48L1NlYXJjaEJhcj5cXHJcXG5cXHRcXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHQ8L1BhZ2UuYWN0aW9uQmFyPlxcclxcblxcdDxTY3JvbGxWaWV3IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxyXFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIjIwMCAyMDAgMjAwIDIwMCAyMDAgMjAwIDIwMCAyMDAgMjAwIDIwMFxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiMFxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjFcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiM1xcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjRcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCI1XFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiNlxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwXFxcIiByb3c9XFxcIjdcXFwiIHRleHQ9XFxcIlNvbWUgdGV4dCBjb250ZW50IGZvbGxvd3MgaGVyZS4uLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibS0xMFxcXCIgcm93PVxcXCI4XFxcIiB0ZXh0PVxcXCJTb21lIHRleHQgY29udGVudCBmb2xsb3dzIGhlcmUuLi5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIi8+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTBcXFwiIHJvdz1cXFwiOVxcXCIgdGV4dD1cXFwiU29tZSB0ZXh0IGNvbnRlbnQgZm9sbG93cyBoZXJlLi4uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlxcclxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9wYWdlcy9wYWdlNC9wYWdlNC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9wYWdlcy9wYWdlNC9wYWdlNC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdCh7XHJcblxyXG4gICAgfSk7XHJcbn0iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRlZFRvPVxcXCJvbk5hdmlnYXRlZFRvXFxcIj5cXHJcXG5cXHQ8UGFnZS5hY3Rpb25CYXI+XFxyXFxuXFx0XFx0PEFjdGlvbkJhciB0aXRsZT1cXFwiU2Vjb25kIFBhZ2VcXFwiIGljb249XFxcIlxcXCIvPlxcclxcblxcdDwvUGFnZS5hY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFx0PFN0YWNrTGF5b3V0IHBhZGRpbmc9XFxcIjEwXFxcIj5cXHJcXG5cXHRcXHQ8TGFiZWwgdGV4dD1cXFwiV2hlbiB5b3Ugd2lsbCBwcmVzcyBiYWNrLCB5b3Ugd29uJ3Qgc2VlIHRoZSBuYXZpZ2F0aW9uIGJhci4gWW91J3ZlIHRvIGdvIGJhY2sgb25lIG1vcmUgbGV2ZWwuXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcblxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3BhZ2VzL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3BhZ2VzL3NlY29uZGFyeS1wYWdlL3NlY29uZGFyeS1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=