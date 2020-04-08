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
                    case 0: return [2 /*return*/, new Promise(function (resolve, reject) {
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
                    case 1:
                        _a.sent();
                        //this.event = {"_id":"5e8515b52ece1f122c38e317", "description": "asdf","photo":"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png","title":"sample title","date":"19-22 May 2020","place":"Sofia/Bulgaria"};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFL0YsaUNBQVEsR0FBZDs7Ozs7OzRCQUNGLHNCQUFPLElBQUksT0FBTyxDQUFRLFVBQUMsT0FBTyxFQUFFLE1BQU07NEJBQ3pDLHVFQUFTLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztnQ0FDakUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQ0FDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDM0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0NBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOzRCQUNsQixDQUFDLEVBQUUsVUFBQyxDQUFDO2dDQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0NBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLENBQUMsQ0FBQzs0QkFDRixPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixDQUFDLENBQUMsRUFBQzs7d0JBTUgsU0FRRSxDQUFDO3dCQUNILDhPQUE4Tzt3QkFDOU8sc0JBQU8sSUFBSSxDQUFDLEtBQUssRUFBQzs7OztLQUNmO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkFuQ3lDLDRFQUFnQjtnQkFBMkIsOERBQWM7O0lBSHZGLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBRWpCLGdGQUFxQzs7U0FFckMsQ0FBQzt5Q0FJeUMsNEVBQWdCLEVBQTJCLDhEQUFjO09BSHZGLGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQTtBQXZDMEIiLCJmaWxlIjoiYnVuZGxlLmMzZGRjZTdjODAwZDRjY2U5Mjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8RXZlbnQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxFdmVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9cIiArIGV2ZW50SWQpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nIChyKTtcclxuXHRcdFx0XHRsZXQgb2JqID0gSlNPTi5wYXJzZShyKVswXTtcclxuXHRcdFx0XHRvYmouZGVzY3JpcHRpb24gPSBcImFzZGZcIjtcclxuXHRcdFx0XHR0aGlzLmV2ZW50ID0gb2JqO1xyXG5cdFx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0cmVzb2x2ZSh0aGlzLmV2ZW50KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2coXCJkZXRhaWwgbmdPbkluaXQgd2FzIGNhbGxlZC5cIik7XHJcblx0XHRsZXQgZXZlbnRJZDogc3RyaW5nO1xyXG5cdFx0dGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gZXZlbnRJZCA9IHBhcmFtc1snaWQnXSk7XHJcblx0XHRjb25zb2xlLmxvZyAoXCJFVkVOVCBJRCBJUyBcIiArIGV2ZW50SWQpO1xyXG5cdFx0Y29uc29sZS5sb2cgKHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcyk7XHJcblx0XHRhd2FpdCBnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9cIiArIGV2ZW50SWQpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdGxldCBvYmogPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0XHRvYmouZGVzY3JpcHRpb24gPSBcImFzZGZcIjtcclxuXHRcdFx0dGhpcy5ldmVudCA9IG9iajtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuXHRcdC8vdGhpcy5ldmVudCA9IHtcIl9pZFwiOlwiNWU4NTE1YjUyZWNlMWYxMjJjMzhlMzE3XCIsIFwiZGVzY3JpcHRpb25cIjogXCJhc2RmXCIsXCJwaG90b1wiOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWFnZXMvYnJhbmRpbmcvZ29vZ2xlbG9nby8xeC9nb29nbGVsb2dvX2NvbG9yXzI3Mng5MmRwLnBuZ1wiLFwidGl0bGVcIjpcInNhbXBsZSB0aXRsZVwiLFwiZGF0ZVwiOlwiMTktMjIgTWF5IDIwMjBcIixcInBsYWNlXCI6XCJTb2ZpYS9CdWxnYXJpYVwifTtcclxuXHRcdHJldHVybiB0aGlzLmV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=