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
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.editorText,
      contenteditable: "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
          lineNumber: 90,
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
          lineNumber: 92,
          columnNumber: 15
        }, _this)]
      }, void 0, true);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25CdXR0b25zIiwiRWRpdG9yIiwicHJvcHMiLCJjb250YWluZXJDbGFzcyIsImhhbmRsZUFjdGlvbnMiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImlkIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlRWxtIiwiZ2V0RWxlbWVudEJ5SWQiLCJGaWxlUmVhZGVyRXZlbnQiLCJzZWxlY3RlZEZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb25jYXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25jaGFuZ2UiLCJjbGljayIsIl9qc3hERVYiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjaGlsZHJlbiIsIkVkaXRvckFjdGlvbiIsImFjdGlvbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImVkaXRvclRleHQiLCJjb250ZW50ZWRpdGFibGUiLCJfYyIsIl90aGlzIiwiZWRpdG9yQWN0aW9ucyIsIm9uQ2xpY2siLCJtYXAiLCJkYXRhIiwic3RhcnQiLCJpbmNsdWRlcyIsIl9GcmFnbWVudCIsInRvTG93ZXJDYXNlIiwidHlwZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIndpZHRoIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQUE7QUFBQTtBQUUxQyxJQUFNQSxhQUFhLEdBQUcsQ0FDcEIsTUFBTSxFQUNOLFFBQVEsRUFDUixRQUFRLEVBQ1IsS0FBSyxFQUNMLEtBQUssRUFDTCxXQUFXLEVBQ1gsYUFBYSxFQUNiLFlBQVksQ0FDYjtBQUNjLFNBQVNDLE1BQU1BLENBQUNDLEtBQUssRUFBRTtFQUNsQyxJQUFRQyxjQUFjLEdBQUtELEtBQUssQ0FBeEJDLGNBQWM7RUFFdEIsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUs7SUFDN0IsSUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQU07SUFDekIsSUFBSUEsTUFBTSxDQUFDQyxRQUFRLEtBQUssUUFBUSxFQUFFO01BQzlCRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0UsVUFBVTtJQUM5QjtJQUNBLElBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFFO0lBQ3BCLFFBQU9BLEVBQUU7TUFDTCxLQUFLLE1BQU07UUFDUEMsUUFBUSxDQUFDQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDM0I7TUFDSixLQUFLLFFBQVE7UUFDVEgsUUFBUSxDQUFDQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QjtNQUNKLEtBQUssUUFBUTtRQUNUSCxRQUFRLENBQUNDLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDckNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzdCO01BQ0osS0FBSyxLQUFLO1FBQ05ILFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzFCO01BQ0osS0FBSyxLQUFLO1FBQ05ILFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzFCO01BQ0osS0FBSyxXQUFXO1FBQ1pILFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDaEM7TUFDSixLQUFLLGFBQWE7UUFDZCxJQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLGtCQUFrQixDQUFDO1FBQUMsSUFDbkRDLGVBQWUsR0FBeEIsU0FBU0EsZUFBZUEsQ0FBQ1gsS0FBSyxFQUFFO1VBQzVCLElBQUlZLFlBQVksR0FBR1osS0FBSyxDQUFDQyxNQUFNLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUM7VUFDeEMsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsQ0FBQyxDQUFDO1VBRTdCRCxNQUFNLENBQUNFLE1BQU0sR0FBRyxVQUFTaEIsS0FBSyxFQUFFO1lBQzVCSyxRQUFRLENBQUNDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxnQkFBQVcsTUFBQSxDQUFlakIsS0FBSyxDQUFDQyxNQUFNLENBQUNpQixNQUFNLGlDQUEyQixDQUFDO1VBQzFHLENBQUM7VUFDREosTUFBTSxDQUFDSyxhQUFhLENBQUNQLFlBQVksQ0FBQztRQUN0QyxDQUFDO1FBQUE7UUFDREgsT0FBTyxDQUFDVyxRQUFRLEdBQUdULGVBQWU7UUFDbENGLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLENBQUM7UUFDZmQsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7UUFDbEM7TUFDSixLQUFLLFlBQVk7UUFDYkgsUUFBUSxDQUFDQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUM7UUFDMURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDO01BQ0o7UUFDSUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDOUI7SUFDUjtFQUNKLENBQUM7RUFFRCxvQkFDSWMsb0VBQUE7SUFBS0MsU0FBUyxFQUFFQywwREFBTSxDQUFDMUIsY0FBYyxDQUFFO0lBQUEyQixRQUFBLGdCQUNuQ0gsb0VBQUEsQ0FBQ0ksWUFBWTtNQUFDQyxNQUFNLEVBQUU1QjtJQUFjO01BQUE2QixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLGVBQ3ZDVCxvRUFBQTtNQUFLQyxTQUFTLEVBQUVDLDBEQUFNLENBQUNRLFVBQVc7TUFBQ0MsZUFBZSxFQUFDO0lBQU07TUFBQUwsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQU0sQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUMvRCxDQUFDO0FBRWQ7QUFBQ0csRUFBQSxHQWpFdUJ0QyxNQUFNO0FBbUU5QixTQUFTOEIsWUFBWUEsQ0FBQzdCLEtBQUssRUFBRTtFQUFBLElBQUFzQyxLQUFBO0VBQzNCLG9CQUNFYixvRUFBQTtJQUFLQyxTQUFTLEVBQUVDLDBEQUFNLENBQUNZLGFBQWM7SUFBQ0MsT0FBTyxFQUFFeEMsS0FBSyxDQUFDOEIsTUFBTztJQUFBRixRQUFBLEVBQ3pEOUIsYUFBYSxDQUFDMkMsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBSztNQUMzQixJQUFJQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBR0EsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUMxREMsS0FBSyxHQUFHRCxJQUFJLEtBQUssYUFBYSxHQUFHLEtBQUssR0FBR0MsS0FBSztNQUM5Q0EsS0FBSyxHQUFHRCxJQUFJLEtBQUssWUFBWSxHQUFHLEdBQUcsR0FBR0MsS0FBSztNQUMzQyxvQkFDRWxCLG9FQUFBLENBQUFvQiw4REFBQTtRQUFBakIsUUFBQSxnQkFDRUgsb0VBQUE7VUFBUWxCLEVBQUUsRUFBRW1DLElBQUksQ0FBQ0ksV0FBVyxDQUFDLENBQUU7VUFBQWxCLFFBQUEsRUFBRWU7UUFBSztVQUFBWixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsR0FBQUksS0FBUyxDQUFDLEVBQy9DSSxJQUFJLEtBQUssYUFBYSxpQkFDckJqQixvRUFBQTtVQUNFc0IsSUFBSSxFQUFDLE1BQU07VUFDWHhDLEVBQUUsS0FBQWEsTUFBQSxDQUFLc0IsSUFBSSxDQUFDSSxXQUFXLENBQUMsQ0FBQyxVQUFRO1VBQ2pDRSxLQUFLLEVBQUU7WUFBRUMsVUFBVSxFQUFFLFFBQVE7WUFBRUMsS0FBSyxFQUFFO1VBQU07UUFBRTtVQUFBbkIsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFJLEtBQy9DLENBQ0Y7TUFBQSxlQUNELENBQUM7SUFFUCxDQUFDO0VBQUM7SUFBQVAsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0MsQ0FBQztBQUVWO0FBQUNpQixHQUFBLEdBdEJRdEIsWUFBWTtBQUFBLElBQUFRLEVBQUEsRUFBQWMsR0FBQTtBQUFBQyxZQUFBLENBQUFmLEVBQUE7QUFBQWUsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUvZWRpdG9yLjNiODA0YTFjOTJiMzI2ZmQ1Yzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRWRpdG9yLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBhY3Rpb25CdXR0b25zID0gW1xyXG4gIFwiQm9sZFwiLFxyXG4gIFwiSXRhbGljXCIsXHJcbiAgXCJTdHJpa2VcIixcclxuICBcIlN1YlwiLFxyXG4gIFwiU3VwXCIsXHJcbiAgXCJVbmRlckxpbmVcIixcclxuICBcIkluc2VydEltYWdlXCIsXHJcbiAgXCJCbG9ja1F1b3RlXCIsXHJcbl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wcykge1xyXG4gICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUFjdGlvbnMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgIT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZFxyXG4gICAgICAgIHN3aXRjaChpZCkge1xyXG4gICAgICAgICAgICBjYXNlICdib2xkJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9sZCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2l0YWxpYyc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIml0YWxpY1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRhbGljIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RyaWtlJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3RyaWtldGhyb3VnaFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RyaWtlIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3ViJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWIgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdXAnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VwIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmRlcmxpbmUgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpbnNlcnRpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc2VydGltYWdlX2ZpbGUnKTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIEZpbGVSZWFkZXJFdmVudChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRIVE1MXCIsIGZhbHNlLCBgPGltZyBzcmM9XCIke2V2ZW50LnRhcmdldC5yZXN1bHR9XCIgc3R5bGU9XCJtYXgtd2lkdGg6MTAwJVwiPmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmaWxlRWxtLm9uY2hhbmdlID0gRmlsZVJlYWRlckV2ZW50O1xyXG4gICAgICAgICAgICAgICAgZmlsZUVsbS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnNldCBpbWFnZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jsb2NrcXVvdGUnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb3JtYXRCbG9ja1wiLCBmYWxzZSwgJzxibG9ja3F1b3RlPicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3JtYXRCbG9jayBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbY29udGFpbmVyQ2xhc3NdfT5cclxuICAgICAgICAgICAgPEVkaXRvckFjdGlvbiBhY3Rpb249e2hhbmRsZUFjdGlvbnN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yVGV4dH0gY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRWRpdG9yQWN0aW9uKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yQWN0aW9uc30gb25DbGljaz17cHJvcHMuYWN0aW9ufT5cclxuICAgICAge2FjdGlvbkJ1dHRvbnMubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gW1wiU3ViXCIsIFwiU3VwXCJdLmluY2x1ZGVzKGRhdGEpID8gZGF0YSA6IGRhdGFbMF07XHJcbiAgICAgICAgc3RhcnQgPSBkYXRhID09PSBcIkluc2VydEltYWdlXCIgPyBcIkltZ1wiIDogc3RhcnQ7XHJcbiAgICAgICAgc3RhcnQgPSBkYXRhID09PSBcIkJsb2NrUXVvdGVcIiA/ICdcIicgOiBzdGFydDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17ZGF0YS50b0xvd2VyQ2FzZSgpfT57c3RhcnR9PC9idXR0b24+XHJcbiAgICAgICAgICAgIHtkYXRhID09PSBcIkluc2VydEltYWdlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2RhdGEudG9Mb3dlckNhc2UoKX1fZmlsZWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCB3aWR0aDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==