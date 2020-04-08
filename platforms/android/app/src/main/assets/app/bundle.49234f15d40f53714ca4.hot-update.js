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
            var eventId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("detail ngOnInit was called.");
                        this._activatedRoute.params.subscribe(function (params) { return eventId = params['id']; });
                        console.log("EVENT ID IS " + eventId);
                        console.log(this._activatedRoute.params);
                        return [4 /*yield*/, Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + eventId).then(function (r) {
                                console.log(r);
                                _this.event = JSON.parse(r);
                            }, function (e) {
                                console.log("Error: ");
                                console.log(e);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.event];
                }
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFL0YsaUNBQVEsR0FBZDs7Ozs7Ozt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7d0JBRTNDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxJQUFJLGNBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQzt3QkFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUMscUJBQU0sdUVBQVMsQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTO2dDQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNoQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLENBQUMsRUFBRSxVQUFDLENBQUM7Z0NBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEIsQ0FBQyxDQUFDOzt3QkFORixTQU1FLENBQUM7d0JBQ0gsc0JBQU8sSUFBSSxDQUFDLEtBQUssRUFBQzs7OztLQUNmO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkFwQnlDLDRFQUFnQjtnQkFBMkIsOERBQWM7O0lBSHZGLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBRWpCLGdGQUFxQzs7U0FFckMsQ0FBQzt5Q0FJeUMsNEVBQWdCLEVBQTJCLDhEQUFjO09BSHZGLGNBQWMsQ0F3QjFCO0lBQUQscUJBQUM7Q0FBQTtBQXhCMEIiLCJmaWxlIjoiYnVuZGxlLjQ5MjM0ZjE1ZDQwZjUzNzE0Y2E0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8RXZlbnQ+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZGV0YWlsIG5nT25Jbml0IHdhcyBjYWxsZWQuXCIpO1xyXG5cdFx0bGV0IGV2ZW50SWQ6IHN0cmluZztcclxuXHRcdHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IGV2ZW50SWQgPSBwYXJhbXNbJ2lkJ10pO1xyXG5cdFx0Y29uc29sZS5sb2cgKFwiRVZFTlQgSUQgSVMgXCIgKyBldmVudElkKTtcclxuXHRcdGNvbnNvbGUubG9nICh0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpO1xyXG5cdFx0YXdhaXQgZ2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvXCIgKyBldmVudElkKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cgKHIpO1xyXG5cdFx0XHR0aGlzLmV2ZW50ID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiB0aGlzLmV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=