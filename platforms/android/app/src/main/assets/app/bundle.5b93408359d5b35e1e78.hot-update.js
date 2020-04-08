webpackHotUpdate("bundle",{

/***/ "./db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);


var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.getEvent = function (id) {
        return new Promise(function (resolve, reject) {
            Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + id).then(function (r) {
                resolve(JSON.parse(r));
            }, function (e) {
                reject(e);
            });
        });
    };
    Database = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Database);
    return Database;
}());



/***/ }),

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
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./db.ts");




var EventComponent = /** @class */ (function () {
    function EventComponent(routerExtensions, _eventId) {
        this.routerExtensions = routerExtensions;
        this._eventId = _eventId;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("detail ngOnInit was called.");
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/events/" + this._eventId).then(function (r) {
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
        { type: String }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Event",
            template: __importDefault(__webpack_require__("./event.component.html")).default,
            providers: [_db__WEBPACK_IMPORTED_MODULE_3__["Database"]],
            styles: [__importDefault(__webpack_require__("./event.component.css")).default]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], String])
    ], EventComponent);
    return EventComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi50cyIsIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ007QUFHakQ7SUFFSTtJQUNBLENBQUM7SUFFTSwyQkFBUSxHQUFmLFVBQWdCLEVBQVU7UUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLHVFQUFTLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztnQkFDekQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLEVBQUUsVUFBQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBYlEsUUFBUTtRQURwQixnRUFBVSxFQUFFOztPQUNBLFFBQVEsQ0FlcEI7SUFBRCxlQUFDO0NBQUE7QUFmb0I7Ozs7Ozs7OztBQ0pyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQU1jO0FBQy9CO0FBU2hDO0lBR0ksd0JBQXFCLGdCQUFrQyxFQUFVLFFBQWdCO1FBQTVELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUssQ0FBQztJQUd2RixpQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSSCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsdUVBQVMsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBaEJ5Qyw0RUFBZ0I7Z0JBQW9CLE1BQU07O0lBSHhFLGNBQWM7UUFQMUIsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBRWpCLGdGQUFxQztZQUVyQyxTQUFTLEVBQUUsQ0FBQyw0Q0FBUSxDQUFDOztTQUNyQixDQUFDO3lDQUl5Qyw0RUFBZ0IsRUFBb0IsTUFBTTtPQUh4RSxjQUFjLENBb0IxQjtJQUFELHFCQUFDO0NBQUE7QUFwQjBCIiwiZmlsZSI6ImJ1bmRsZS41YjkzNDA4MzU5ZDViMzVlMWU3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXZlbnQoaWQ6IFN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2V0U3RyaW5nKFwiaHR0cHM6Ly9zY2hvb2xseS50ay9ldmVudHMvXCIgKyBpZCkudGhlbigocjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocikpO1xyXG4gICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9kYlwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiRXZlbnRcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZXZlbnQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsnLi9ldmVudC5jb21wb25lbnQuY3NzJ10sXHJcblx0cHJvdmlkZXJzOiBbRGF0YWJhc2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBldmVudDogRXZlbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfZXZlbnRJZDogU3RyaW5nICkgeyB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJkZXRhaWwgbmdPbkluaXQgd2FzIGNhbGxlZC5cIik7XHJcblx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2V2ZW50cy9cIiArIHRoaXMuX2V2ZW50SWQpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyAocik7XHJcblx0XHRcdHRoaXMuZXZlbnQgPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=