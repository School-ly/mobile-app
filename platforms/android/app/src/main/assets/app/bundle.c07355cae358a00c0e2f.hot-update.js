webpackHotUpdate("bundle",{

/***/ "./event.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<ActionBar title=\"Item\" class=\"action-bar\"></ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn btn-primary\" text=\"Back\" (tap)=\"goBack()\"></Button>\r\n    </StackLayout>\r\n</ScrollView>\r\n<ActionBar title=\"Event\" class=\"action-bar\">\r\n    <NavigationButton text=\"Go Back\" android.systemIcon=\"home\" tap=\"onNavBtnTap\"></NavigationButton>\r\n</ActionBar>\r\n<ActionBar title=\" Event\" class=\"action-bar\">\r\n    <Button text=\"Back\" (tap)=\"onNavBtnTap()\">\r\n    </Button>\r\n</ActionBar>\r\n-->\r\n<ActionBar title=\"Event\">\r\n    <NavigationButton icon=\"res://home\" (tap)=\"goBack()\"></NavigationButton>\r\n    <ActionItem icon=\"font://&#xf013;\" class=\"fas\" ios.position=\"right\" (tap)=\"openSettings()\"></ActionItem>\r\n</ActionBar> \r\n\r\n<StackLayout class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <StackLayout>\r\n            <StackLayout class=\"item\">\r\n                <Image src=\"{{ event.photo }}\" stretch=\"aspectFit\" height=\"100\" class=\"centered\"></Image>\r\n                <StackLayout padding=\"10\">\r\n                    <Label text=\"{{ event.title }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.date }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.place }}\" textWrap=\"true\"></Label>\r\n                    <Label text=\"{{ event.description }}\" textWrap=\"true\"></Label>\r\n                    \r\n    <Button text=\"Back\" onTap=\"onNavBtnTap()\">\r\n    </Button>\r\n                </StackLayout>\r\n            </StackLayout>\r\n        </StackLayout>\r\n    </StackLayout>\r\n</StackLayout> "

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ldmVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG13QkFBbXdCLHFSQUFxUixlQUFlLDJKQUEySixlQUFlLHFFQUFxRSxjQUFjLHFFQUFxRSxlQUFlLHFFQUFxRSxxQkFBcUIsZ1EiLCJmaWxlIjoiYnVuZGxlLmMwNzM1NWNhZTM1OGEwMGMwZTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPCEtLTxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48U2Nyb2xsVmlldyBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJnb0JhY2soKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TY3JvbGxWaWV3PlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkV2ZW50XFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkdvIEJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaG9tZVxcXCIgdGFwPVxcXCJvbk5hdkJ0blRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIiBFdmVudFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcclxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiICh0YXApPVxcXCJvbk5hdkJ0blRhcCgpXFxcIj5cXHJcXG4gICAgPC9CdXR0b24+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuLS0+XFxyXFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiRXZlbnRcXFwiPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVxcXCJyZXM6Ly9ob21lXFxcIiAodGFwKT1cXFwiZ29CYWNrKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwiZm9udDovLyYjeGYwMTM7XFxcIiBjbGFzcz1cXFwiZmFzXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiAodGFwKT1cXFwib3BlblNldHRpbmdzKClcXFwiPjwvQWN0aW9uSXRlbT5cXHJcXG48L0FjdGlvbkJhcj4gXFxyXFxuXFxyXFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBldmVudC5waG90byB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgY2xhc3M9XFxcImNlbnRlcmVkXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGV2ZW50LnRpdGxlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBldmVudC5kYXRlIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBldmVudC5wbGFjZSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZXZlbnQuZGVzY3JpcHRpb24gfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgIDxCdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgb25UYXA9XFxcIm9uTmF2QnRuVGFwKClcXFwiPlxcclxcbiAgICA8L0J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PiBcIiJdLCJzb3VyY2VSb290IjoiIn0=