webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBUy9EO0lBR0MseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3RELENBQUM7SUFFRSxrQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN0Qix1RUFBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztZQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUFzQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFuQmtDLDRFQUFnQjs7SUFIMUMsZUFBZTtRQU4zQiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFFbEIsaUZBQXNDOztTQUV0QyxDQUFDO3lDQUlxQyw0RUFBZ0I7T0FIMUMsZUFBZSxDQXVCM0I7SUFBRCxzQkFBQztDQUFBO0FBdkIyQiIsImZpbGUiOiJidW5kbGUuMjdlNjJlYzhhMTJkZjQ1NmI0YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkV2ZW50c1wiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudHMuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ldmVudHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGl0ZW1zOiBBcnJheTxFdmVudD47XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblx0fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvZXZlbnRzL2NvbXBhY3RcIikudGhlbigocjogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nIChyKTtcclxuXHRcdFx0dGhpcy5pdGVtcyA9IEpTT04ucGFyc2Uocik7XHJcblx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFwIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQ6IFwiICsgYXJncy5vYmplY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmlldyB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnQ6IFwiICsgYXJncy52aWV3KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50IG5hbWU6IFwiICsgYXJncy5ldmVudE5hbWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==