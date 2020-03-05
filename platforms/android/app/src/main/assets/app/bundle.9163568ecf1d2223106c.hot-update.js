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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlMi9wYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQ1A7QUFDUjtBQU1UO0FBRTFDLFNBQVMsYUFBYSxDQUFDLElBQWU7SUFDekMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUc3QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLElBQUksS0FBSyxJQUFJLENBQUM7UUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLElBQUksYUFBYSxHQUFHLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ2xDLHVFQUFTLENBQUMsZ0VBQWdFLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVM7UUFDdkcsYUFBYSxDQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsaUJBQWlCO0lBQ3JCLENBQUMsRUFBRSxVQUFDLENBQUM7UUFDRCxZQUFZO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsWUFBWTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxHQUFHLENBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxtRkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDMUIsb0NBQW9DO0lBQ3BDLCtFQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDZixVQUFVLEVBQUUseUJBQXlCO0tBQ3hDLENBQUMsQ0FBQztJQUNILHdGQUF3RjtJQUN4RixJQUFJLDZFQUFpQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekMsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFDLElBQW1CO0lBQ3pDLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFNLFVBQVUsR0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRTdDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2hCLFVBQVUsRUFBRSw2Q0FBNkM7UUFDekQsT0FBTyxFQUFFLFVBQVU7UUFDbkIsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS45MTYzNTY4ZWNmMWQyMjIzMTA2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3NoYXJlZC9pdGVtXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5cblxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwKSAlIDI7XG4gICAgdmFyIHN0ciA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgaWYgKGluZGV4ID09IDApIHN0ciA9IFwiXCI7XG4gICAgdmFyIGJpbmRpbmdPYmplY3QgPSB7J2l0ZW1zJzogW119O1xuICAgIGdldFN0cmluZyhcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TY2hvb2wtbHkvc2VydmVyL21hc3Rlci9kYXRhXCIgKyBzdHIgKyBcIi5qc29uXCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xuICAgICAgICBiaW5kaW5nT2JqZWN0IFsnaXRlbXMnXSA9IEpTT04ucGFyc2Uocik7XG4gICAgICAgIC8vY29uc29sZS5sb2cocik7XG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2cgKGJpbmRpbmdPYmplY3QudG9TdHJpbmcoKSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9DdXN0b21QYWdlKCkge1xuICAgIC8vIHBlcmZvcm1pbmcgYSBzZWNvbmRhcnkgbmF2aWdhdGlvblxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwiY3VzdG9tLXBhZ2UvY3VzdG9tLXBhZ2VcIixcbiAgICB9KTtcbiAgICAvLyBvbmNlIHlvdSBjYWxsZWQgdGhpcyBtZXRob2Qgb25jZSwgeW91IGRvbid0IG5lZWQgdG8gY2FsbCBpdCBmdXJ0aGVyIGluIHRoZSBzYW1lIHN0YWNrXG4gICAgbmV3IE5hdmlnYXRpb25IYW5kbGVyKCkuaGlkZU5hdkJhcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcbiAgICBjb25zdCB2aWV3ID0gPFZpZXc+YXJncy52aWV3O1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT52aWV3LnBhZ2U7XG4gICAgY29uc3QgdGFwcGVkSXRlbSA9IDxJdGVtPnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJmZWVkL2ZlZWQtaXRlbS1kZXRhaWwvZmVlZC1pdGVtLWRldGFpbC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHRhcHBlZEl0ZW0sXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgIH1cbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9