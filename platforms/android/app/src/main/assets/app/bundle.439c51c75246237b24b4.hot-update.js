webpackHotUpdate("bundle",{

/***/ "./event.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<ActionBar title=\"Item\" class=\"action-bar\"></ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\r\n    </StackLayout>\r\n</ScrollView>\r\n<ActionBar title=\"Event\" class=\"action-bar\">\r\n    <NavigationButton text=\"Go Back\" android.systemIcon=\"home\" tap=\"onNavBtnTap\"></NavigationButton>\r\n</ActionBar>\r\n<ActionBar title=\" Event\" class=\"action-bar\">\r\n    <Button text=\"Back\" (tap)=\"onNavBtnTap()\">\r\n    </Button>\r\n</ActionBar>\r\n-->\r\n<ActionBar title=\"Event\">\r\n    <NavigationButton icon=\"res://ic_arrow_back_black_24dp\" (tap)=\"goBack()\"></NavigationButton>\r\n    <ActionItem icon=\"font://&#xf013;\" class=\"fas\" ios.position=\"right\" (tap)=\"openSettings()\"></ActionItem>\r\n</ActionBar> \r\n\r\n<StackLayout class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <StackLayout>\r\n            <StackLayout class=\"item\">\r\n                <Image src=\"{{ event.photo }}\" stretch=\"aspectFit\" height=\"100\" class=\"centered\"></Image>\r\n                <StackLayout padding=\"10\">\r\n                    <Label text=\"{{ event.title }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.date }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.place }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.description }}\" textWrap=\"true\"></Label>\r\n                    \r\n    <Button text=\"Back\" onTap=\"onNavBtnTap()\">\r\n    </Button>\r\n                </StackLayout>\r\n            </StackLayout>\r\n        </StackLayout>\r\n    </StackLayout>\r\n</StackLayout> "

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHV4QkFBdXhCLHFSQUFxUixlQUFlLDJKQUEySixlQUFlLHFFQUFxRSxjQUFjLHFFQUFxRSxlQUFlLHFFQUFxRSxxQkFBcUIsZ1EiLCJmaWxlIjoiYnVuZGxlLjQzOWM1MWM3NTI0NjIzN2IyNGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPCEtLTxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50XFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaG9tZVxcXCIgdGFwPVxcXCJvbk5hdkJ0blRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIiBFdmVudFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj5cXHJcXG4gICAgPC9CdXR0b24+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuLS0+XFxyXFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiRXZlbnRcXFwiPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVxcXCJyZXM6Ly9pY19hcnJvd19iYWNrX2JsYWNrXzI0ZHBcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJmb250Oi8vJiN4ZjAxMztcXFwiIGNsYXNzPVxcXCJmYXNcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiICh0YXApPVxcXCJvcGVuU2V0dGluZ3MoKVxcXCI+PC9BY3Rpb25JdGVtPlxcclxcbjwvQWN0aW9uQmFyPiBcXHJcXG5cXHJcXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhvbWUtcGFuZWxcXFwiPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IGV2ZW50LnBob3RvIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBjbGFzcz1cXFwiY2VudGVyZWRcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nPVxcXCIxMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZXZlbnQudGl0bGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGV2ZW50LmRhdGUgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGV2ZW50LnBsYWNlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBldmVudC5kZXNjcmlwdGlvbiB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBvblRhcD1cXFwib25OYXZCdG5UYXAoKVxcXCI+XFxyXFxuICAgIDwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+IFwiIl0sInNvdXJjZVJvb3QiOiIifQ==