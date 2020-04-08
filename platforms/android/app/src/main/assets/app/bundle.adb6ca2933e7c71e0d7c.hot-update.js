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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var eventId;
                        _this._activatedRoute.params.subscribe(function (params) { return eventId = params['id']; });
                        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + eventId).then(function (r) {
                            console.log(r);
                            var obj = JSON.parse(r)[0];
                            obj.description = "asdf";
                            _this.event = obj;
                        }, function (e) {
                            console.log("Error: ");
                            console.log(e);
                        });
                        resolve(_this.event);
                    })];
            });
        });
    };
    EventComponent.prototype.onNavBtnTap = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFL0YsaUNBQVEsR0FBZDs7OztnQkFDRixzQkFBTyxJQUFJLE9BQU8sQ0FBUSxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUN6QyxJQUFJLE9BQWUsQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFNLElBQUksY0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO3dCQUN4RSx1RUFBUyxDQUFDLDZCQUE2QixHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVM7NEJBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDOzRCQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDbEIsQ0FBQyxFQUFFLFVBQUMsQ0FBQzs0QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixDQUFDLENBQUM7d0JBQ0YsT0FBTyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLEVBQUM7OztLQUNBO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkFyQnlDLDRFQUFnQjtnQkFBMkIsOERBQWM7O0lBSHZGLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBRWpCLGdGQUFxQzs7U0FFckMsQ0FBQzt5Q0FJeUMsNEVBQWdCLEVBQTJCLDhEQUFjO09BSHZGLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQTtBQXpCMEIiLCJmaWxlIjoiYnVuZGxlLmFkYjZjYTI5MzNlN2M3MWUwZDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8RXZlbnQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxFdmVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgZXZlbnRJZDogc3RyaW5nO1xyXG5cdFx0XHR0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiBldmVudElkID0gcGFyYW1zWydpZCddKTtcclxuXHRcdFx0Z2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvXCIgKyBldmVudElkKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdFx0bGV0IG9iaiA9IEpTT04ucGFyc2UocilbMF07XHJcblx0XHRcdFx0b2JqLmRlc2NyaXB0aW9uID0gXCJhc2RmXCI7XHJcblx0XHRcdFx0dGhpcy5ldmVudCA9IG9iajtcclxuXHRcdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdHJlc29sdmUodGhpcy5ldmVudCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5hdkJ0blRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=