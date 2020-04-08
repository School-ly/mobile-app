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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);



var EventComponent = /** @class */ (function () {
    function EventComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("detail ngOnInit was called.");
        var eventId;
        this._activatedRoute.params.subscribe(function (params) { return eventId = params['id']; });
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Event",
            template: __importDefault(__webpack_require__("./event.component.html")).default,
            styles: [__importDefault(__webpack_require__("./event.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./models.ts":
false,

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "tns-core-modules/http/http":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBT0E7QUFRakQ7SUFHSSx3QkFBcUIsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUksQ0FBQztJQUd6RCxpQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWSCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckMsSUFBSSxPQUFlLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFNLElBQUksY0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQ3hFLHVFQUFTLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBbEJ3Qyw4REFBYzs7SUFIM0MsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFFakIsZ0ZBQXFDOztTQUVyQyxDQUFDO3lDQUl3Qyw4REFBYztPQUgzQyxjQUFjLENBc0IxQjtJQUFELHFCQUFDO0NBQUE7QUF0QjBCOzs7Ozs7Ozs7OztBQ2hCM0IsNEMiLCJmaWxlIjoiYnVuZGxlLjI3OTQ5ZTg2N2IwZTBiNzIwZGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudFwiLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ldmVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL2V2ZW50LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGV2ZW50OiBFdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcImRldGFpbCBuZ09uSW5pdCB3YXMgY2FsbGVkLlwiKTtcclxuICAgICAgICBsZXQgZXZlbnRJZDogc3RyaW5nO1xyXG5cdFx0dGhpcy5fYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4gZXZlbnRJZCA9IHBhcmFtc1snaWQnXSk7XHJcblx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9cIiArIGV2ZW50SWQpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdHRoaXMuZXZlbnQgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9