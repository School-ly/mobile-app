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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFL0YsaUNBQVEsR0FBZDs7Ozs7OzRCQUNGLHNCQUFPLElBQUksT0FBTyxDQUFRLFVBQUMsT0FBTyxFQUFFLE1BQU07NEJBQ3pDLElBQUksT0FBZSxDQUFDOzRCQUNwQixLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQU0sSUFBSSxjQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7NEJBQ3hFLHVFQUFTLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztnQ0FDakUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQ0FDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDM0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0NBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOzRCQUNsQixDQUFDLEVBQUUsVUFBQyxDQUFDO2dDQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0NBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLENBQUMsQ0FBQzs0QkFDRixPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixDQUFDLENBQUMsRUFBQzs7d0JBTUgsU0FRRSxDQUFDO3dCQUNILDhPQUE4Tzt3QkFDOU8sc0JBQU8sSUFBSSxDQUFDLEtBQUssRUFBQzs7OztLQUNmO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOztnQkFyQ3lDLDRFQUFnQjtnQkFBMkIsOERBQWM7O0lBSHZGLGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBRWpCLGdGQUFxQzs7U0FFckMsQ0FBQzt5Q0FJeUMsNEVBQWdCLEVBQTJCLDhEQUFjO09BSHZGLGNBQWMsQ0F5QzFCO0lBQUQscUJBQUM7Q0FBQTtBQXpDMEIiLCJmaWxlIjoiYnVuZGxlLjY5ZGY1YjRjYTgyZTljYTViODExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICAgIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8RXZlbnQ+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxFdmVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgZXZlbnRJZDogc3RyaW5nO1xyXG5cdFx0XHR0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiBldmVudElkID0gcGFyYW1zWydpZCddKTtcclxuXHRcdFx0Z2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvXCIgKyBldmVudElkKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdFx0bGV0IG9iaiA9IEpTT04ucGFyc2UocilbMF07XHJcblx0XHRcdFx0b2JqLmRlc2NyaXB0aW9uID0gXCJhc2RmXCI7XHJcblx0XHRcdFx0dGhpcy5ldmVudCA9IG9iajtcclxuXHRcdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdHJlc29sdmUodGhpcy5ldmVudCk7XHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKFwiZGV0YWlsIG5nT25Jbml0IHdhcyBjYWxsZWQuXCIpO1xyXG5cdFx0bGV0IGV2ZW50SWQ6IHN0cmluZztcclxuXHRcdHRoaXMuX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IGV2ZW50SWQgPSBwYXJhbXNbJ2lkJ10pO1xyXG5cdFx0Y29uc29sZS5sb2cgKFwiRVZFTlQgSUQgSVMgXCIgKyBldmVudElkKTtcclxuXHRcdGNvbnNvbGUubG9nICh0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpO1xyXG5cdFx0YXdhaXQgZ2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvXCIgKyBldmVudElkKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cgKHIpO1xyXG5cdFx0XHRsZXQgb2JqID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdFx0b2JqLmRlc2NyaXB0aW9uID0gXCJhc2RmXCI7XHJcblx0XHRcdHRoaXMuZXZlbnQgPSBvYmo7XHJcblx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0fSk7XHJcblx0XHQvL3RoaXMuZXZlbnQgPSB7XCJfaWRcIjpcIjVlODUxNWI1MmVjZTFmMTIyYzM4ZTMxN1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiYXNkZlwiLFwicGhvdG9cIjpcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2JyYW5kaW5nL2dvb2dsZWxvZ28vMXgvZ29vZ2xlbG9nb19jb2xvcl8yNzJ4OTJkcC5wbmdcIixcInRpdGxlXCI6XCJzYW1wbGUgdGl0bGVcIixcImRhdGVcIjpcIjE5LTIyIE1heSAyMDIwXCIsXCJwbGFjZVwiOlwiU29maWEvQnVsZ2FyaWFcIn07XHJcblx0XHRyZXR1cm4gdGhpcy5ldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9