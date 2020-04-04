webpackHotUpdate("bundle",{

/***/ "./events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [];
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["getString"])("https://schoolly.tk/university/compact").then(function (r) {
            _this.items = JSON.parse(r);
        }, function (e) {
            console.log("Error: ");
            console.log(e);
        });
    };
    EventsComponent.prototype.onItemTap = function (args) {
        console.log("Index: " + args.index + "; View: " + args.view + " ; Item: " + this.items[args.index]);
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Events",
            template: __importDefault(__webpack_require__("./events.component.html")).default,
            styles: [__importDefault(__webpack_require__("./events.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBVWpEO0lBR0M7SUFDQSxDQUFDO0lBRUUsa0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdEIsdUVBQVMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVM7WUFDbEUsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDRCxDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxJQUFJLENBQUMsS0FBSyxnQkFBVyxJQUFJLENBQUMsSUFBSSxpQkFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFsQlEsZUFBZTtRQU4zQiwrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFFbEIsaUZBQXNDOztTQUV0QyxDQUFDOztPQUNXLGVBQWUsQ0FtQjNCO0lBQUQsc0JBQUM7Q0FBQTtBQW5CMkIiLCJmaWxlIjoiYnVuZGxlLjQ2YmNiZGJjMmE0OTc4OWRkYzlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZ30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJFdmVudHNcIixcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZXZlbnRzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vZXZlbnRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXZlbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRpdGVtczogQXJyYXk8RXZlbnQ+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcblx0XHRnZXRTdHJpbmcoXCJodHRwczovL3NjaG9vbGx5LnRrL3VuaXZlcnNpdHkvY29tcGFjdFwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0dGhpcy5pdGVtcyA9IEpTT04ucGFyc2Uocik7XHJcblx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgSW5kZXg6ICR7YXJncy5pbmRleH07IFZpZXc6ICR7YXJncy52aWV3fSA7IEl0ZW06ICR7dGhpcy5pdGVtc1thcmdzLmluZGV4XX1gKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=