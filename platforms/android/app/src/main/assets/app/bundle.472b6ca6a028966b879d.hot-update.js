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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQ2Q7QUFRakQ7SUFHSSx3QkFBcUIsZ0JBQWtDLEVBQVUsZUFBK0I7UUFBM0UscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFJLENBQUM7SUFFL0YsaUNBQVEsR0FBZDs7Ozs7Ozt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7d0JBRTNDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxJQUFJLGNBQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQzt3QkFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUMscUJBQU0sdUVBQVMsQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTO2dDQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNoQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLENBQUMsRUFBRSxVQUFDLENBQUM7Z0NBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEIsQ0FBQyxDQUFDOzt3QkFORixTQU1FLENBQUM7d0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLEtBQUssRUFBQywwQkFBMEIsRUFBQyxPQUFPLEVBQUMsb0ZBQW9GLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLENBQUM7d0JBQ3JOLHNCQUFPLElBQUksQ0FBQyxLQUFLLEVBQUM7Ozs7S0FDZjtJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBckJ5Qyw0RUFBZ0I7Z0JBQTJCLDhEQUFjOztJQUh2RixjQUFjO1FBTjFCLCtEQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsT0FBTztZQUVqQixnRkFBcUM7O1NBRXJDLENBQUM7eUNBSXlDLDRFQUFnQixFQUEyQiw4REFBYztPQUh2RixjQUFjLENBeUIxQjtJQUFELHFCQUFDO0NBQUE7QUF6QjBCIiwiZmlsZSI6ImJ1bmRsZS40NzJiNmNhNmEwMjg5NjZiODc5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiRXZlbnRcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZXZlbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ldmVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBldmVudDogRXZlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPEV2ZW50PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcImRldGFpbCBuZ09uSW5pdCB3YXMgY2FsbGVkLlwiKTtcclxuXHRcdGxldCBldmVudElkOiBzdHJpbmc7XHJcblx0XHR0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiBldmVudElkID0gcGFyYW1zWydpZCddKTtcclxuXHRcdGNvbnNvbGUubG9nIChcIkVWRU5UIElEIElTIFwiICsgZXZlbnRJZCk7XHJcblx0XHRjb25zb2xlLmxvZyAodGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zKTtcclxuXHRcdGF3YWl0IGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvZXZlbnRzL1wiICsgZXZlbnRJZCkudGhlbigocjogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nIChyKTtcclxuXHRcdFx0dGhpcy5ldmVudCA9IEpTT04ucGFyc2Uocik7XHJcblx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmV2ZW50ID0ge1wiX2lkXCI6XCI1ZTg1MTViNTJlY2UxZjEyMmMzOGUzMTdcIixcInBob3RvXCI6XCJodHRwczovL3d3dy5nb29nbGUuY29tL2ltYWdlcy9icmFuZGluZy9nb29nbGVsb2dvLzF4L2dvb2dsZWxvZ29fY29sb3JfMjcyeDkyZHAucG5nXCIsXCJ0aXRsZVwiOlwic2FtcGxlIHRpdGxlXCIsXCJkYXRlXCI6XCIxOS0yMiBNYXkgMjAyMFwiLFwicGxhY2VcIjpcIlNvZmlhL0J1bGdhcmlhXCJ9O1xyXG5cdFx0cmV0dXJuIHRoaXMuZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==