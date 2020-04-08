webpackHotUpdate("bundle",{

/***/ "./event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var EventComponent = /** @class */ (function () {
    function EventComponent(routerExtensions, _activatedRoute) {
        this.routerExtensions = routerExtensions;
        this._activatedRoute = _activatedRoute;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("detail ngOnInit was called.");
        var eventId;
        this._activatedRoute.params.subscribe(function (params) { return eventId = params['id']; });
        console.log("EVENT ID IS " + eventId);
        console.log(this._activatedRoute.params);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + eventId).then(function (r) {
            console.log(r);
            _this.event = JSON.parse(r);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    };
    EventComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    EventComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Event",
            template: __importDefault(__webpack_require__("./event.component.html")).default,
            styles: [__importDefault(__webpack_require__("./event.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFckcsaUNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksT0FBZSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxJQUFJLGNBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3pDLHVFQUFTLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBbkJ5Qyw0RUFBZ0I7Z0JBQTJCLDhEQUFjOztJQUh2RixjQUFjO1FBTjFCLCtEQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsT0FBTztZQUVqQixnRkFBcUM7O1NBRXJDLENBQUM7eUNBSXlDLDRFQUFnQixFQUEyQiw4REFBYztPQUh2RixjQUFjLENBdUIxQjtJQUFELHFCQUFDO0NBQUE7QUF2QjBCIiwiZmlsZSI6ImJ1bmRsZS4xNmNlN2Y1MGU5NzllNGNmYTJiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiRXZlbnRcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZXZlbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ldmVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBldmVudDogRXZlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZGV0YWlsIG5nT25Jbml0IHdhcyBjYWxsZWQuXCIpO1xyXG4gICAgICAgIGxldCBldmVudElkOiBzdHJpbmc7XHJcblx0XHR0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiBldmVudElkID0gcGFyYW1zWydpZCddKTtcclxuXHRcdGNvbnNvbGUubG9nIChcIkVWRU5UIElEIElTIFwiICsgZXZlbnRJZCk7XHJcblx0XHRjb25zb2xlLmxvZyAodGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG5cdFx0Z2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvXCIgKyBldmVudElkKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cgKHIpO1xyXG5cdFx0XHR0aGlzLmV2ZW50ID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9