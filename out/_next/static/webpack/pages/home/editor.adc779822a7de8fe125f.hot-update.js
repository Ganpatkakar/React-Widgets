webpackHotUpdate_N_E("pages/home/editor",{

/***/ "./components/Editor/Editor.component.js":
/*!***********************************************!*\
  !*** ./components/Editor/Editor.component.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.module.scss */ "./components/Editor/Editor.module.scss");
/* harmony import */ var _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Editor_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\GIT\\React-Widgets\\components\\Editor\\Editor.component.js";




var actionButtons = ["Bold", "Italic", "Strike", "Sub", "Sup", "UnderLine", "InsertImage", "BlockQuote"];
function Editor(props) {
  var containerClass = props.containerClass;
  var handleActions = function handleActions(event) {
    var target = event.target;
    if (target.nodeName !== 'BUTTON') {
      target = target.parentNode;
    }
    var id = target.id;
    switch (id) {
      case 'bold':
        document.execCommand("bold");
        console.log("bold clicked");
        break;
      case 'italic':
        document.execCommand("italic");
        console.log("italic clicked");
        break;
      case 'strike':
        document.execCommand("strikethrough");
        console.log("strike clicked");
        break;
      case 'sub':
        document.execCommand("subscript");
        console.log("sub clicked");
        break;
      case 'sup':
        document.execCommand("superscript");
        console.log("sup clicked");
        break;
      case 'underline':
        document.execCommand("underline");
        console.log("underline clicked");
        break;
      case 'insertimage':
        var fileElm = document.getElementById('insertimage_file');
        var FileReaderEvent = function FileReaderEvent(event) {
          var selectedFile = event.target.files[0];
          var reader = new FileReader();
          reader.onload = function (event) {
            document.execCommand("insertHTML", false, "<img src=\"".concat(event.target.result, "\" style=\"max-width:100%\">"));
          };
          reader.readAsDataURL(selectedFile);
        };
        ;
        fileElm.onchange = FileReaderEvent;
        fileElm.click();
        console.log("Inset image clicked");
        break;
      case 'blockquote':
        document.execCommand("formatBlock", false, '<blockquote>');
        console.log("formatBlock clicked");
        break;
      default:
        console.log("default clicked");
        break;
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[containerClass],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EditorAction, {
      action: handleActions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.editorText,
      contenteditable: "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, this);
}
_c = Editor;
function EditorAction(props) {
  var _this = this;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.editorActions,
    onClick: props.action,
    children: actionButtons.map(function (data) {
      var start = ["Sub", "Sup"].includes(data) ? data : data[0];
      start = data === "InsertImage" ? "Img" : start;
      start = data === "BlockQuote" ? '"' : start;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          id: data.toLowerCase(),
          children: start
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, _this), data === "InsertImage" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "file",
          id: "".concat(data.toLowerCase(), "_file"),
          style: {
            visibility: "hidden",
            width: "0px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, _this)]
      }, void 0, true);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
_c2 = EditorAction;
var _c, _c2;
$RefreshReg$(_c, "Editor");
$RefreshReg$(_c2, "EditorAction");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25CdXR0b25zIiwiRWRpdG9yIiwicHJvcHMiLCJjb250YWluZXJDbGFzcyIsImhhbmRsZUFjdGlvbnMiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImlkIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlRWxtIiwiZ2V0RWxlbWVudEJ5SWQiLCJGaWxlUmVhZGVyRXZlbnQiLCJzZWxlY3RlZEZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb25jYXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25jaGFuZ2UiLCJjbGljayIsIl9qc3hERVYiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjaGlsZHJlbiIsIkVkaXRvckFjdGlvbiIsImFjdGlvbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImVkaXRvclRleHQiLCJjb250ZW50ZWRpdGFibGUiLCJfYyIsIl90aGlzIiwiZWRpdG9yQWN0aW9ucyIsIm9uQ2xpY2siLCJtYXAiLCJkYXRhIiwic3RhcnQiLCJpbmNsdWRlcyIsIl9GcmFnbWVudCIsInRvTG93ZXJDYXNlIiwidHlwZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIndpZHRoIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQUE7QUFBQTtBQUUxQyxJQUFNQSxhQUFhLEdBQUcsQ0FDcEIsTUFBTSxFQUNOLFFBQVEsRUFDUixRQUFRLEVBQ1IsS0FBSyxFQUNMLEtBQUssRUFDTCxXQUFXLEVBQ1gsYUFBYSxFQUNiLFlBQVksQ0FDYjtBQUNjLFNBQVNDLE1BQU1BLENBQUNDLEtBQUssRUFBRTtFQUNs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Q0FBQyxVQUFRO1VBQ2pDRSxLQUFLLEVBQUU7WUFBRUMsVUFBVSxFQUFFLFFBQVE7WUFBRUMsS0FBSyxFQUFFO1VBQU07UUFBRTtVQUFBbkIsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFJLEtBQy9DLENBQ0Y7TUFBQSxlQUNELENBQUM7SUFFUCxDQUFDO0VBQUM7SUFBQVAsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0MsQ0FBQztBQUVWO0FBQUNpQixHQUFBLEdBdEJRdEIsWUFBWTtBQUFBLElBQUFRLEVBQUEsRUFBQWMsR0FBQTtBQUFBQyxZQUFBLENBQUFmLEVBQUE7QUFBQWUsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUvZWRpdG9yLmFkYzc3OTgyMmE3ZGU4ZmUxMjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRWRpdG9yLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBhY3Rpb25CdXR0b25zID0gW1xyXG4gIFwiQm9sZFwiLFxyXG4gIFwiSXRhbGljXCIsXHJcbiAgXCJTdHJpa2VcIixcclxuICBcIlN1YlwiLFxyXG4gIFwiU3VwXCIsXHJcbiAgXCJVbmRlckxpbmVcIixcclxuICBcIkluc2VydEltYWdlXCIsXHJcbiAgXCJCbG9ja1F1b3RlXCIsXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wcykge1xyXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBoYW5kbGVBY3Rpb25zID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lICE9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWRcclxuICAgICAgICBzd2l0Y2goaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnYm9sZCc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJvbGRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvbGQgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpdGFsaWMnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpdGFsaWNcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0YWxpYyBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0cmlrZSc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZXRocm91Z2hcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0cmlrZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Yic6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1YnNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3ViIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3VwJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3VwZXJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1cCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInVuZGVybGluZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5kZXJsaW5lIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaW5zZXJ0aW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNlcnRpbWFnZV9maWxlJyk7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBGaWxlUmVhZGVyRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0SFRNTFwiLCBmYWxzZSwgYDxpbWcgc3JjPVwiJHtldmVudC50YXJnZXQucmVzdWx0fVwiIHN0eWxlPVwibWF4LXdpZHRoOjEwMCVcIj5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZmlsZUVsbS5vbmNoYW5nZSA9IEZpbGVSZWFkZXJFdmVudDtcclxuICAgICAgICAgICAgICAgIGZpbGVFbG0uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5zZXQgaW1hZ2UgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibG9ja3F1b3RlJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9ybWF0QmxvY2tcIiwgZmFsc2UsICc8YmxvY2txdW90ZT4nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybWF0QmxvY2sgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0IGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2NvbnRhaW5lckNsYXNzXX0+XHJcbiAgICAgICAgICAgIDxFZGl0b3JBY3Rpb24gYWN0aW9uPXtoYW5kbGVBY3Rpb25zfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvclRleHR9IGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVkaXRvckFjdGlvbihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvckFjdGlvbnN9IG9uQ2xpY2s9e3Byb3BzLmFjdGlvbn0+XHJcbiAgICAgIHthY3Rpb25CdXR0b25zLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydCA9IFtcIlN1YlwiLCBcIlN1cFwiXS5pbmNsdWRlcyhkYXRhKSA/IGRhdGEgOiBkYXRhWzBdO1xyXG4gICAgICAgIHN0YXJ0ID0gZGF0YSA9PT0gXCJJbnNlcnRJbWFnZVwiID8gXCJJbWdcIiA6IHN0YXJ0O1xyXG4gICAgICAgIHN0YXJ0ID0gZGF0YSA9PT0gXCJCbG9ja1F1b3RlXCIgPyAnXCInIDogc3RhcnQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9e2RhdGEudG9Mb3dlckNhc2UoKX0+e3N0YXJ0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7ZGF0YSA9PT0gXCJJbnNlcnRJbWFnZVwiICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPXtgJHtkYXRhLnRvTG93ZXJDYXNlKCl9X2ZpbGVgfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=