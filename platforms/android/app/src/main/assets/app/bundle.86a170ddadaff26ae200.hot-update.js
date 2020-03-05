webpackHotUpdate("bundle",{

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
    var bindingObject = {};
    Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getString"])("https://raw.githubusercontent.com/School-ly/server/master/data" + str + ".json").then(function (r) {
        bindingObject['items'] = JSON.parse(r);
        console.log(r);
    }, function (e) {
        // >> (hide)
        console.log("Error: ");
        console.log(e);
        // << (hide)
    });
    console.log(bindingObject.toString());
    page.bindingContext = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])(bindingObject);
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
        moduleName: "feed/feed-item-detail/feed-item-detail-page",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlMi9wYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQ1A7QUFDUjtBQU1UO0FBRTFDLFNBQVMsYUFBYSxDQUFDLElBQWU7SUFDekMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUc3QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLElBQUksS0FBSyxJQUFJLENBQUM7UUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN2Qix1RUFBUyxDQUFDLGdFQUFnRSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTO1FBQ3ZHLGFBQWEsQ0FBRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxFQUFFLFVBQUMsQ0FBQztRQUNELFlBQVk7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixZQUFZO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBRSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUV2QyxJQUFJLENBQUMsY0FBYyxHQUFHLG1GQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVNLFNBQVMsY0FBYztJQUMxQixvQ0FBb0M7SUFDcEMsK0VBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSx5QkFBeUI7S0FDeEMsQ0FBQyxDQUFDO0lBQ0gsd0ZBQXdGO0lBQ3hGLElBQUksNkVBQWlCLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsSUFBbUI7SUFDekMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQU0sVUFBVSxHQUFTLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDaEIsVUFBVSxFQUFFLDZDQUE2QztRQUN6RCxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsSUFBSTtRQUNkLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsTUFBTTtTQUNoQjtLQUNKLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoiYnVuZGxlLjg2YTE3MGRkYWRhZmYyNmFlMjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gXCIuLi9tb2R1bGVzL25hdmlnYXRpb24taGFuZGxlclwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vc2hhcmVkL2l0ZW1cIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcblxuXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBcbiAgICBcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApICUgMjtcbiAgICB2YXIgc3RyID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICBpZiAoaW5kZXggPT0gMCkgc3RyID0gXCJcIjtcbiAgICB2YXIgYmluZGluZ09iamVjdCA9IHt9O1xuICAgIGdldFN0cmluZyhcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TY2hvb2wtbHkvc2VydmVyL21hc3Rlci9kYXRhXCIgKyBzdHIgKyBcIi5qc29uXCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xuICAgICAgICBiaW5kaW5nT2JqZWN0IFsnaXRlbXMnXSA9IEpTT04ucGFyc2Uocik7XG4gICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nIChiaW5kaW5nT2JqZWN0LnRvU3RyaW5nKCkpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3QoYmluZGluZ09iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb1RvQ3VzdG9tUGFnZSgpIHtcbiAgICAvLyBwZXJmb3JtaW5nIGEgc2Vjb25kYXJ5IG5hdmlnYXRpb25cbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcImN1c3RvbS1wYWdlL2N1c3RvbS1wYWdlXCIsXG4gICAgfSk7XG4gICAgLy8gb25jZSB5b3UgY2FsbGVkIHRoaXMgbWV0aG9kIG9uY2UsIHlvdSBkb24ndCBuZWVkIHRvIGNhbGwgaXQgZnVydGhlciBpbiB0aGUgc2FtZSBzdGFja1xuICAgIG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpLmhpZGVOYXZCYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XG4gICAgY29uc3QgdmlldyA9IDxWaWV3PmFyZ3MudmlldztcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+dmlldy5wYWdlO1xuICAgIGNvbnN0IHRhcHBlZEl0ZW0gPSA8SXRlbT52aWV3LmJpbmRpbmdDb250ZXh0O1xuXG4gICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwiZmVlZC9mZWVkLWl0ZW0tZGV0YWlsL2ZlZWQtaXRlbS1kZXRhaWwtcGFnZVwiLFxuICAgICAgICBjb250ZXh0OiB0YXBwZWRJdGVtLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICB9XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==