webpackHotUpdate("bundle",{

/***/ "./universities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversitiesComponent", function() { return UniversitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);


var UniversitiesComponent = /** @class */ (function () {
    function UniversitiesComponent() {
    }
    UniversitiesComponent.prototype.ngOnInit = function () {
        var page = args.object;
        var index = Math.round(Math.random() * 1000) % 2;
        var str = index.toString();
        if (index == 0)
            str = "";
        var bindingObject = { 'items': [] };
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/lessons/video/compact").then(function (r) {
            bindingObject['items'] = JSON.parse(r);
            page.bindingContext = fromObject(bindingObject);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
            page.bindingContext = fromObject(bindingObject);
        });
    };
    UniversitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Universities",
            template: __importDefault(__webpack_require__("./universities.component.html")).default,
            styles: [__importDefault(__webpack_require__("./universities.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UniversitiesComponent);
    return UniversitiesComponent;
}());



/***/ }),

/***/ "tns-core-modules/http":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/http");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91bml2ZXJzaXRpZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBUWpEO0lBRUM7SUFDQSxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFJLEtBQUssSUFBSSxDQUFDO1lBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLGFBQWEsR0FBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUNsQyx1RUFBUyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztZQUNyRSxhQUFhLENBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBcEJXLHFCQUFxQjtRQU5qQywrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFFeEIsdUZBQTRDOztTQUU1QyxDQUFDOztPQUNXLHFCQUFxQixDQXFCakM7SUFBRCw0QkFBQztDQUFBO0FBckJpQzs7Ozs7Ozs7QUNUbEMsa0QiLCJmaWxlIjoiYnVuZGxlLjM1YjEzMzNjZmQ4MWMyZDljN2NlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiVW5pdmVyc2l0aWVzXCIsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3VuaXZlcnNpdGllcy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWycuL3VuaXZlcnNpdGllcy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaXZlcnNpdGllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHRsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgXHJcblx0XHRjb25zdCBpbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApICUgMjtcclxuXHRcdHZhciBzdHIgPSBpbmRleC50b1N0cmluZygpO1xyXG5cdFx0aWYgKGluZGV4ID09IDApIHN0ciA9IFwiXCI7XHJcblx0XHR2YXIgYmluZGluZ09iamVjdCA9IHsnaXRlbXMnOiBbXX07XHJcblx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL2xlc3NvbnMvdmlkZW8vY29tcGFjdFwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0YmluZGluZ09iamVjdCBbJ2l0ZW1zJ10gPSBKU09OLnBhcnNlKHIpO1xyXG5cdFx0XHRwYWdlLmJpbmRpbmdDb250ZXh0ID0gZnJvbU9iamVjdChiaW5kaW5nT2JqZWN0KTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdHBhZ2UuYmluZGluZ0NvbnRleHQgPSBmcm9tT2JqZWN0KGJpbmRpbmdPYmplY3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=