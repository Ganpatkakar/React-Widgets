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
      if (data === "InsertImage") {
        var newFileElm = document.createElement("input");
        newFileElm.type = "file";
        newFileElm.id = "".concat(data.toLowerCase(), "_file");
        editorActions.insertAdjacentElement("beforeend", newFileElm);
        newFileElm.style.visibility = "hidden";
        newFileElm.style.width = "0";
      }
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          id: data.toLowerCase(),
          children: start
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
          lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25CdXR0b25zIiwiRWRpdG9yIiwicHJvcHMiLCJjb250YWluZXJDbGFzcyIsImhhbmRsZUFjdGlvbnMiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImlkIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJmaWxlRWxtIiwiZ2V0RWxlbWVudEJ5SWQiLCJGaWxlUmVhZGVyRXZlbnQiLCJzZWxlY3RlZEZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb25jYXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25jaGFuZ2UiLCJjbGljayIsIl9qc3hERVYiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjaGlsZHJlbiIsIkVkaXRvckFjdGlvbiIsImFjdGlvbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImVkaXRvclRleHQiLCJjb250ZW50ZWRpdGFibGUiLCJfYyIsIl90aGlzIiwiZWRpdG9yQWN0aW9ucyIsIm9uQ2xpY2siLCJtYXAiLCJkYXRhIiwic3RhcnQiLCJpbmNsdWRlcyIsIm5ld0ZpbGVFbG0iLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInRvTG93ZXJDYXNlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwid2lkdGgiLCJfRnJhZ21lbnQiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFBQTtBQUFBO0FBRTFDLElBQU1BLGFBQWEsR0FBRyxDQUNwQixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxhQUFh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NURBLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUTtRQUN0Q04sVUFBVSxDQUFDSyxLQUFLLENBQUNFLEtBQUssR0FBRyxHQUFHO01BQzlCO01BQ0Esb0JBQ0UzQixvRUFBQSxDQUFBNEIsOERBQUE7UUFBQXpCLFFBQUEsZ0JBQ0VILG9FQUFBO1VBQVFsQixFQUFFLEVBQUVtQyxJQUFJLENBQUNNLFdBQVcsQ0FBQyxDQUFFO1VBQUFwQixRQUFBLEVBQUVlO1FBQUs7VUFBQVosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFJLEtBQVMsQ0FBQyxFQUMvQ0ksSUFBSSxLQUFLLGFBQWEsaUJBQ3JCakIsb0VBQUE7VUFDRXNCLElBQUksRUFBQyxNQUFNO1VBQ1h4QyxFQUFFLEtBQUFhLE1BQUEsQ0FBS3NCLElBQUksQ0FBQ00sV0FBVyxDQUFDLENBQUMsVUFBUTtVQUNqQ0UsS0FBSyxFQUFFO1lBQUVDLFVBQVUsRUFBRSxRQUFRO1lBQUVDLEtBQUssRUFBRTtVQUFNO1FBQUU7VUFBQXJCLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBSSxLQUMvQyxDQUNGO01BQUEsZUFDRCxDQUFDO0lBRVAsQ0FBQztFQUFDO0lBQUFQLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNDLENBQUM7QUFFVjtBQUFDb0IsR0FBQSxHQTlCUXpCLFlBQVk7QUFBQSxJQUFBUSxFQUFBLEVBQUFpQixHQUFBO0FBQUFDLFlBQUEsQ0FBQWxCLEVBQUE7QUFBQWtCLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lL2VkaXRvci5mODY5YTQ4OGI4M2IxYmIyZTgyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VkaXRvci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgYWN0aW9uQnV0dG9ucyA9IFtcclxuICBcIkJvbGRcIixcclxuICBcIkl0YWxpY1wiLFxyXG4gIFwiU3RyaWtlXCIsXHJcbiAgXCJTdWJcIixcclxuICBcIlN1cFwiLFxyXG4gIFwiVW5kZXJMaW5lXCIsXHJcbiAgXCJJbnNlcnRJbWFnZVwiLFxyXG4gIFwiQmxvY2tRdW90ZVwiLFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyQ2xhc3MgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaGFuZGxlQWN0aW9ucyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSAhPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkXHJcbiAgICAgICAgc3dpdGNoKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvbGQnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib2xkIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaXRhbGljJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWMgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdHJpa2UnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHJpa2V0aHJvdWdoXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdHJpa2UgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWInOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdWJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YiBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1cCc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1cGVyc2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdXAgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVybGluZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2luc2VydGltYWdlJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zZXJ0aW1hZ2VfZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gRmlsZVJlYWRlckV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydEhUTUxcIiwgZmFsc2UsIGA8aW1nIHNyYz1cIiR7ZXZlbnQudGFyZ2V0LnJlc3VsdH1cIiBzdHlsZT1cIm1heC13aWR0aDoxMDAlXCI+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZpbGVFbG0ub25jaGFuZ2UgPSBGaWxlUmVhZGVyRXZlbnQ7XHJcbiAgICAgICAgICAgICAgICBmaWxlRWxtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluc2V0IGltYWdlIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxvY2txdW90ZSc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvcm1hdEJsb2NrXCIsIGZhbHNlLCAnPGJsb2NrcXVvdGU+Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvcm1hdEJsb2NrIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tjb250YWluZXJDbGFzc119PlxyXG4gICAgICAgICAgICA8RWRpdG9yQWN0aW9uIGFjdGlvbj17aGFuZGxlQWN0aW9uc30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JUZXh0fSBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFZGl0b3JBY3Rpb24ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JBY3Rpb25zfSBvbkNsaWNrPXtwcm9wcy5hY3Rpb259PlxyXG4gICAgICB7YWN0aW9uQnV0dG9ucy5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBbXCJTdWJcIiwgXCJTdXBcIl0uaW5jbHVkZXMoZGF0YSkgPyBkYXRhIDogZGF0YVswXTtcclxuICAgICAgICBzdGFydCA9IGRhdGEgPT09IFwiSW5zZXJ0SW1hZ2VcIiA/IFwiSW1nXCIgOiBzdGFydDtcclxuICAgICAgICBzdGFydCA9IGRhdGEgPT09IFwiQmxvY2tRdW90ZVwiID8gJ1wiJyA6IHN0YXJ0O1xyXG4gICAgICAgIGlmIChkYXRhID09PSBcIkluc2VydEltYWdlXCIpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICBuZXdGaWxlRWxtLnR5cGUgPSBcImZpbGVcIjtcclxuICAgICAgICAgIG5ld0ZpbGVFbG0uaWQgPSBgJHtkYXRhLnRvTG93ZXJDYXNlKCl9X2ZpbGVgO1xyXG4gICAgICAgICAgZWRpdG9yQWN0aW9ucy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgbmV3RmlsZUVsbSk7XHJcbiAgICAgICAgICBuZXdGaWxlRWxtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgbmV3RmlsZUVsbS5zdHlsZS53aWR0aCA9IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17ZGF0YS50b0xvd2VyQ2FzZSgpfT57c3RhcnR9PC9idXR0b24+XHJcbiAgICAgICAgICAgIHtkYXRhID09PSBcIkluc2VydEltYWdlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2RhdGEudG9Mb3dlckNhc2UoKX1fZmlsZWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCB3aWR0aDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==