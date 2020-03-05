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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlMi9wYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQ1A7QUFDUjtBQU1UO0FBRTFDLFNBQVMsYUFBYSxDQUFDLElBQWU7SUFDekMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLElBQUksS0FBSyxJQUFJLENBQUM7UUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLElBQUksYUFBYSxHQUFHLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ2xDLHVFQUFTLENBQUMsZ0VBQWdFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVM7UUFDdkcsYUFBYSxDQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsbUZBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDLEVBQUUsVUFBQyxDQUFDO1FBQ0QsWUFBWTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLFlBQVk7UUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLG1GQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRU0sU0FBUyxjQUFjO0lBQzFCLG9DQUFvQztJQUNwQywrRUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2YsVUFBVSxFQUFFLHlCQUF5QjtLQUN4QyxDQUFDLENBQUM7SUFDSCx3RkFBd0Y7SUFDeEYsSUFBSSw2RUFBaUIsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pDLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxJQUFtQjtJQUN6QyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBTSxVQUFVLEdBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNoQixVQUFVLEVBQUUsOENBQThDO1FBQzFELE9BQU8sRUFBRSxVQUFVO1FBQ25CLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxNQUFNO1NBQ2hCO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJidW5kbGUuNmIzNGRmMDg2ODFhYjg4NDkxZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25IYW5kbGVyIH0gZnJvbSBcIi4uL21vZHVsZXMvbmF2aWdhdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9zaGFyZWQvaXRlbVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuXG5cbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZWRUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIFxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMCkgJSAyO1xuICAgIHZhciBzdHIgPSBpbmRleC50b1N0cmluZygpO1xuICAgIGlmIChpbmRleCA9PSAwKSBzdHIgPSBcIlwiO1xuICAgIHZhciBiaW5kaW5nT2JqZWN0ID0geydpdGVtcyc6IFtdfTtcbiAgICBnZXRTdHJpbmcoXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vU2Nob29sLWx5L3NlcnZlci9tYXN0ZXIvZGF0YVwiICsgc3RyICsgXCIuanNvblwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYmluZGluZ09iamVjdCBbJ2l0ZW1zJ10gPSBKU09OLnBhcnNlKHIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHIpO1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcbiAgICB9LCAoZSkgPT4ge1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0N1c3RvbVBhZ2UoKSB7XG4gICAgLy8gcGVyZm9ybWluZyBhIHNlY29uZGFyeSBuYXZpZ2F0aW9uXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJjdXN0b20tcGFnZS9jdXN0b20tcGFnZVwiLFxuICAgIH0pO1xuICAgIC8vIG9uY2UgeW91IGNhbGxlZCB0aGlzIG1ldGhvZCBvbmNlLCB5b3UgZG9uJ3QgbmVlZCB0byBjYWxsIGl0IGZ1cnRoZXIgaW4gdGhlIHNhbWUgc3RhY2tcbiAgICBuZXcgTmF2aWdhdGlvbkhhbmRsZXIoKS5oaWRlTmF2QmFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHZpZXcgPSA8Vmlldz5hcmdzLnZpZXc7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPnZpZXcucGFnZTtcbiAgICBjb25zdCB0YXBwZWRJdGVtID0gPEl0ZW0+dmlldy5iaW5kaW5nQ29udGV4dDtcblxuICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2UyL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgIH1cbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9