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
        var _this = this;
        this.items = [];
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/lessons/video/compact").then(function (r) {
            _this.items = JSON.parse(r);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    };
    UniversitiesComponent.prototype.onItemTap = function (args) {
        console.log("Index: " + args.index + "; View: " + args.view + " ; Item: " + this.items[args.index]);
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91bml2ZXJzaXRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBV2pEO0lBR0k7SUFBZ0IsQ0FBQztJQUVqQix3Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN0Qix1RUFBUyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUztZQUNyRSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsSUFBbUI7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxLQUFLLGdCQUFXLElBQUksQ0FBQyxJQUFJLGlCQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQWpCUSxxQkFBcUI7UUFOakMsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxjQUFjO1lBRXhCLHVGQUE0Qzs7U0FFNUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FrQmpDO0lBQUQsNEJBQUM7Q0FBQTtBQWxCaUMiLCJmaWxlIjoiYnVuZGxlLjVmNzg2NWQzMjgzNWM2Y2M1Y2JmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBCaW5kaW5nT3B0aW9ucyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2l0eSB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJVbml2ZXJzaXRpZXNcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vdW5pdmVyc2l0aWVzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2l0aWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBBcnJheTxVbml2ZXJzaXR5PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGdldFN0cmluZyhcImh0dHBzOi8vc2Nob29sbHkudGsvbGVzc29ucy92aWRlby9jb21wYWN0XCIpLnRoZW4oKHI6IHN0cmluZykgPT4ge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShyKTtcclxuXHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbmRleDogJHthcmdzLmluZGV4fTsgVmlldzogJHthcmdzLnZpZXd9IDsgSXRlbTogJHt0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdfWApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==