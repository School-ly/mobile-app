webpackHotUpdate("bundle",{

/***/ "./db.ts":
false,

/***/ "./event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./models.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var EventComponent = /** @class */ (function () {
    function EventComponent(routerExtensions, _eventId) {
        this.routerExtensions = routerExtensions;
        this._eventId = _eventId;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("detail ngOnInit was called.");
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + this._eventId._id).then(function (r) {
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
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] },
        { type: _models__WEBPACK_IMPORTED_MODULE_2__["EventProvider"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Event",
            template: __importDefault(__webpack_require__("./event.component.html")).default,
            providers: [_models__WEBPACK_IMPORTED_MODULE_2__["EventProvider"]],
            styles: [__importDefault(__webpack_require__("./event.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"], _models__WEBPACK_IMPORTED_MODULE_2__["EventProvider"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "University", function() { return University; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventProvider", function() { return EventProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http/http");
/* harmony import */ var tns_core_modules_http_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http_http__WEBPACK_IMPORTED_MODULE_1__);


var University = /** @class */ (function () {
    function University() {
    }
    return University;
}());

var EventProvider = /** @class */ (function () {
    function EventProvider(id) {
        var _this = this;
        Object(tns_core_modules_http_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + id).then(function (r) {
            console.log(r);
            var event = JSON.parse(r);
            _this._id = event._id;
            _this.title = event.title;
            _this.place = event.place;
            _this.date = event.date;
            _this.photo = event.photo;
            _this.description = event.description;
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    }
    EventProvider.ctorParameters = function () { return [
        { type: String }
    ]; };
    EventProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [String])
    ], EventProvider);
    return EventProvider;
}());



/***/ }),

/***/ "tns-core-modules/http/http":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/http/http");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvaHR0cC9odHRwXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFDRDtBQUtlO0FBUy9EO0lBR0ksd0JBQXFCLGdCQUFrQyxFQUFVLFFBQXVCO1FBQW5FLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFlO0lBQUssQ0FBQztJQUc5RixpQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSSCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsdUVBQVMsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVM7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7O2dCQWhCeUMsNEVBQWdCO2dCQUFvQixxREFBYTs7SUFIL0UsY0FBYztRQVAxQiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFFakIsZ0ZBQXFDO1lBRXJDLFNBQVMsRUFBRSxDQUFDLHFEQUFhLENBQUM7O1NBQzFCLENBQUM7eUNBSXlDLDRFQUFnQixFQUFvQixxREFBYTtPQUgvRSxjQUFjLENBb0IxQjtJQUFELHFCQUFDO0NBQUE7QUFwQjBCOzs7Ozs7Ozs7QUNoQjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1k7QUFFdkQ7SUFBQTtJQUdBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUM7O0FBV0Q7SUFPSSx1QkFBWSxFQUFVO1FBQXRCLGlCQWVDO1FBYkgsNEVBQVMsQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFTO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQy9DLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDRCxDQUFDOztnQkFmZSxNQUFNOztJQVBiLGFBQWE7UUFEekIsZ0VBQVUsRUFBRTt5Q0FRTyxNQUFNO09BUGIsYUFBYSxDQXVCekI7SUFBRCxvQkFBQztDQUFBO0FBdkJ5Qjs7Ozs7Ozs7QUNqQjFCLHVEIiwiZmlsZSI6ImJ1bmRsZS5mNzdhNTBiMWFhOGRlNDE1Zjc2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuaW1wb3J0IHsgRXZlbnQsIEV2ZW50UHJvdmlkZXIgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXSxcclxuXHRwcm92aWRlcnM6IFtFdmVudFByb3ZpZGVyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZXZlbnQ6IEV2ZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgX2V2ZW50SWQ6IEV2ZW50UHJvdmlkZXIgKSB7IH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcImRldGFpbCBuZ09uSW5pdCB3YXMgY2FsbGVkLlwiKTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvZXZlbnRzL1wiICsgdGhpcy5fZXZlbnRJZC5faWQpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdHRoaXMuZXZlbnQgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwL2h0dHBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbml2ZXJzaXR5XHJcbntcclxuICAgIFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnQge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgcGxhY2U6IHN0cmluZztcclxuICAgIGRhdGU6IHN0cmluZztcclxuICAgIHBob3RvOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFdmVudFByb3ZpZGVyIHtcclxuICAgIF9pZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHBsYWNlOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICBwaG90bzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBTdHJpbmcpXHJcbiAgICB7XHJcblx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9cIiArIGlkKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cgKHIpO1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQ6IEV2ZW50ID0gSlNPTi5wYXJzZShyKTtcclxuICAgICAgICAgICAgdGhpcy5faWQgPSBldmVudC5faWQ7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBldmVudC50aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZSA9IGV2ZW50LnBsYWNlO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBldmVudC5kYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnBob3RvID0gZXZlbnQucGhvdG87XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBldmVudC5kZXNjcmlwdGlvbjtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cC9odHRwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=