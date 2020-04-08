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
                        this.event = { "_id": "5e8515b52ece1f122c38e317", "photo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png", "title": "sample title", "date": "19-22 May 2020", "place": "Sofia/Bulgaria" };
                        return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFL0YsaUNBQVEsR0FBZDs7Ozs7Ozt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7d0JBRTNDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxJQUFJLGNBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQzt3QkFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUMscUJBQU0sdUVBQVMsQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTO2dDQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNoQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLENBQUMsRUFBRSxVQUFDLENBQUM7Z0NBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEIsQ0FBQyxDQUFDOzt3QkFORixTQU1FLENBQUM7d0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLEtBQUssRUFBQywwQkFBMEIsRUFBQyxPQUFPLEVBQUMsb0ZBQW9GLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLENBQUM7d0JBQ3JOLHNCQUFROzs7O0tBQ0w7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7O2dCQXJCeUMsNEVBQWdCO2dCQUEyQiw4REFBYzs7SUFIdkYsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFFakIsZ0ZBQXFDOztTQUVyQyxDQUFDO3lDQUl5Qyw0RUFBZ0IsRUFBMkIsOERBQWM7T0FIdkYsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBO0FBekIwQiIsImZpbGUiOiJidW5kbGUuNzVhNGY1NDZhYmViNjBiY2IwNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkV2ZW50XCIsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2V2ZW50LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vZXZlbnQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZXZlbnQ6IEV2ZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgX2FjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gICAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTxFdmVudD4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJkZXRhaWwgbmdPbkluaXQgd2FzIGNhbGxlZC5cIik7XHJcblx0XHRsZXQgZXZlbnRJZDogc3RyaW5nO1xyXG5cdFx0dGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gZXZlbnRJZCA9IHBhcmFtc1snaWQnXSk7XHJcblx0XHRjb25zb2xlLmxvZyAoXCJFVkVOVCBJRCBJUyBcIiArIGV2ZW50SWQpO1xyXG5cdFx0Y29uc29sZS5sb2cgKHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcyk7XHJcblx0XHRhd2FpdCBnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9cIiArIGV2ZW50SWQpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdHRoaXMuZXZlbnQgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ldmVudCA9IHtcIl9pZFwiOlwiNWU4NTE1YjUyZWNlMWYxMjJjMzhlMzE3XCIsXCJwaG90b1wiOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWFnZXMvYnJhbmRpbmcvZ29vZ2xlbG9nby8xeC9nb29nbGVsb2dvX2NvbG9yXzI3Mng5MmRwLnBuZ1wiLFwidGl0bGVcIjpcInNhbXBsZSB0aXRsZVwiLFwiZGF0ZVwiOlwiMTktMjIgTWF5IDIwMjBcIixcInBsYWNlXCI6XCJTb2ZpYS9CdWxnYXJpYVwifTtcclxuXHRcdHJldHVybiA7IHRoaXMuZXZlbnRcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9