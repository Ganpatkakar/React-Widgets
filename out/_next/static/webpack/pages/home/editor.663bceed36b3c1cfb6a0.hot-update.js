webpackHotUpdate_N_E("pages/home/editor",{

/***/ "./components/Editor/index.js":
/*!************************************!*\
  !*** ./components/Editor/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditorComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editor.component */ "./components/Editor/Editor.component.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\GIT\\React-Widgets\\components\\Editor\\index.js";






function EditorComponent() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Editor_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
        containerClass: "editorContainer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "How to call Editor component"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      children: "import editor component and call it"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
      language: "javascript",
      style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__["materialOceanic"],
      children: "\n    import React from \"react\";\n    import Editor from './Editor.component';\n    \n    export default function EditorComponent() {\n    \n        return (\n            <div>\n                <Editor containerClass={\"editorContainer\"} />\n            </div>\n        )\n    }\n  "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Data Table component"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
      language: "javascript",
      style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__["materialOceanic"],
      children: "        \n    import React from \"react\";\n    import styles from \"./Editor.module.scss\";\n    \n    const actionButtons = [\n      \"Bold\",\n      \"Italic\",\n      \"Strike\",\n      \"Sub\",\n      \"Sup\",\n      \"UnderLine\",\n      \"InsertImage\",\n      \"BlockQuote\",\n    ];\n    export default function Editor(props) {\n        const { containerClass } = props;\n        \n        const handleActions = (event) => {\n            let target = event.target;\n            if (target.nodeName !== 'BUTTON') {\n                target = target.parentNode;\n            }\n            const id = target.id\n            switch(id) {\n                case 'bold':\n                    document.execCommand(\"bold\");\n                    console.log(\"bold clicked\");\n                    break;\n                case 'italic':\n                    document.execCommand(\"italic\");\n                    console.log(\"italic clicked\");\n                    break;\n                case 'strike':\n                    document.execCommand(\"strikethrough\");\n                    console.log(\"strike clicked\");\n                    break;\n                case 'sub':\n                    document.execCommand(\"subscript\");\n                    console.log(\"sub clicked\");\n                    break;\n                case 'sup':\n                    document.execCommand(\"superscript\");\n                    console.log(\"sup clicked\");\n                    break;\n                case 'underline':\n                    document.execCommand(\"underline\");\n                    console.log(\"underline clicked\");\n                    break;\n                case 'insertimage':\n                    const fileElm = document.getElementById('insertimage_file');\n                    function FileReaderEvent(event) {\n                        var selectedFile = event.target.files[0];\n                        var reader = new FileReader();\n                    \n                        reader.onload = function(event) {\n                            document.execCommand(\"insertHTML\", false, '<img src={event.target.result} style=\"max-width:100%\">');\n                        };\n                        reader.readAsDataURL(selectedFile);\n                    };\n                    fileElm.onchange = FileReaderEvent;\n                    fileElm.click();\n                    console.log(\"Inset image clicked\");\n                    break;\n                case 'blockquote':\n                    document.execCommand(\"formatBlock\", false, '<blockquote>');\n                    console.log(\"formatBlock clicked\");\n                    break;\n                default:\n                    console.log(\"default clicked\");\n                    break;\n            }\n        }\n    \n        return (\n            <div className={styles[containerClass]}>\n                <EditorAction action={handleActions} />\n                <div className={styles.editorText} contenteditable=\"true\"></div>\n            </div>\n        );\n    }\n    \n    function EditorAction(props) {\n      return (\n        <div className={styles.editorActions} onClick={props.action}>\n          {actionButtons.map((data) => {\n            let start = [\"Sub\", \"Sup\"].includes(data) ? data : data[0];\n            start = data === \"InsertImage\" ? \"Img\" : start;\n            start = data === \"BlockQuote\" ? '\"' : start;\n            return (\n              <>\n                <button id={data.toLowerCase()}>{start}</button>\n                {data === \"InsertImage\" && (\n                  <input\n                    type=\"file\"\n                    id={{data.toLowerCase()}_file}\n                    style={{ visibility: \"hidden\", width: \"0px\" }}\n                  />\n                )}\n              </>\n            );\n          })}\n        </div>\n      );\n    }\n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      children: "Note: Please replace \"$\" with `$ icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Style with scss"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
      language: "scss",
      style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__["materialOceanic"],
      children: "      \n.editorContainer {\n    width: 500px;\n    display: block;\n    border: 1px solid #000;\n    border-radius: 4px;\n\n    .editorActions {\n        display: flex;\n        padding: 10px 10px 0px;\n        background: #ddd;\n        border-radius: 4px 4px 0 0;\n    \n        button {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            align-items: center;\n            margin-right: 10px;\n            margin-bottom: 10px;\n    \n            .icon{\n                width: 16px;\n            }\n        }\n    }\n    \n    .editorText {\n        display: block;\n        width: 100%;\n        min-height: 300px;\n        padding: 10px;\n        box-sizing: border-box;\n    \n        blockquote {\n            border-left: 5px solid #ccc;\n            font-style: italic;\n            margin-left: 0;\n            margin-right: 0;\n            overflow: hidden;\n            padding-left: 1.5em;\n            padding-right: 1.5em;\n        }\n    }\n}\n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      children: "Try to add architecture"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
      children: "https://bigfrontend.dev/tools/excalidraw/embed/7014daa3-eaee-4603-a40c-59ac0f5b6bee?w=3015&h=990"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
_c = EditorComponent;
var _c;
$RefreshReg$(_c, "EditorComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yQ29tcG9uZW50IiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiRWRpdG9yIiwiY29udGFpbmVyQ2xhc3MiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJTeW50YXhIaWdobGlnaHRlciIsImxhbmd1YWdlIiwic3R5bGUiLCJtYXRlcmlhbE9jZWFuaWMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRDO0FBQ1c7QUFDekM7QUFBQTtBQUFBO0FBRXpCLFNBQVNBLGVBQWVBLENBQUEsRUFBRztFQUV4QyxvQkFDRUMsb0VBQUEsQ0FBQUMsOERBQUE7SUFBQUMsUUFBQSxnQkFDRUYsb0VBQUE7TUFBQUUsUUFBQSxlQUNFRixvRUFBQSxDQUFDRyx5REFBTTtRQUFDQyxjQUFjLEVBQUU7TUFBa0I7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQUU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDMUMsQ0FBQyxlQUVOUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQW9DLENBQUMsZUFDckNSLG9FQUFBO01BQUFFLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBeUMsQ0FBQyxlQUMxQ1Isb0VBQUEsQ0FBQ1MsOERBQWlCO01BQUNDLFFBQVEsRUFBQyxZQUFZO01BQUNDLEtBQUssRUFBRUMsOEZBQWdCO01BQUFWLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FlN0MsQ0FBQyxlQUVwQlIsb0VBQUE7TUFBQUUsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUE0QixDQUFDLGVBQzdCUixvRUFBQSxDQUFDUyw4REFBaUI7TUFBQ0MsUUFBUSxFQUFDLFlBQVk7TUFBQ0MsS0FBSyxFQUFFQyw4RkFBZ0I7TUFBQVYsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQTBHN0MsQ0FBQyxlQUVwQlIsb0VBQUE7TUFBQUUsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUEyQyxDQUFDLGVBRTVDUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQXVCLENBQUMsZUFDeEJSLG9FQUFBLENBQUNTLDhEQUFpQjtNQUFDQyxRQUFRLEVBQUMsTUFBTTtNQUFDQyxLQUFLLEVBQUVDLDhGQUFnQjtNQUFBVixRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BK0N2QyxDQUFDLGVBRWxCUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQTZCLENBQUMsZUFFOUJSLG9FQUFBLENBQUNTLDhEQUFpQjtNQUFBUCxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BRUMsQ0FBQztFQUFBLGVBQ3RCLENBQUM7QUFFUDtBQUFDSyxFQUFBLEdBbk11QmQsZUFBZTtBQUFBLElBQUFjLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUvZWRpdG9yLjY2M2JjZWVkMzZiM2MxY2ZiNmEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJztcclxuaW1wb3J0IHsgbWF0ZXJpYWxPY2VhbmljIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbSc7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9FZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvckNvbXBvbmVudCgpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEVkaXRvciBjb250YWluZXJDbGFzcz17XCJlZGl0b3JDb250YWluZXJcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8aDI+SG93IHRvIGNhbGwgRWRpdG9yIGNvbXBvbmVudDwvaDI+XHJcbiAgICAgIDxwPmltcG9ydCBlZGl0b3IgY29tcG9uZW50IGFuZCBjYWxsIGl0PC9wPlxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCIgc3R5bGU9e21hdGVyaWFsT2NlYW5pY30+XHJcbiAge2BcclxuICAgIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuICAgIGltcG9ydCBFZGl0b3IgZnJvbSAnLi9FZGl0b3IuY29tcG9uZW50JztcclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yQ29tcG9uZW50KCkge1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3IgY29udGFpbmVyQ2xhc3M9e1wiZWRpdG9yQ29udGFpbmVyXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICBgXHJcbiAgfVxyXG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG5cclxuICAgICAgPGgyPkRhdGEgVGFibGUgY29tcG9uZW50PC9oMj5cclxuICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwiamF2YXNjcmlwdFwiIHN0eWxlPXttYXRlcmlhbE9jZWFuaWN9PlxyXG57YCAgICAgICAgXHJcbiAgICBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbiAgICBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VkaXRvci5tb2R1bGUuc2Nzc1wiO1xyXG4gICAgXHJcbiAgICBjb25zdCBhY3Rpb25CdXR0b25zID0gW1xyXG4gICAgICBcIkJvbGRcIixcclxuICAgICAgXCJJdGFsaWNcIixcclxuICAgICAgXCJTdHJpa2VcIixcclxuICAgICAgXCJTdWJcIixcclxuICAgICAgXCJTdXBcIixcclxuICAgICAgXCJVbmRlckxpbmVcIixcclxuICAgICAgXCJJbnNlcnRJbWFnZVwiLFxyXG4gICAgICBcIkJsb2NrUXVvdGVcIixcclxuICAgIF07XHJcbiAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGNvbnRhaW5lckNsYXNzIH0gPSBwcm9wcztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVBY3Rpb25zID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgIT09ICdCVVRUT04nKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZFxyXG4gICAgICAgICAgICBzd2l0Y2goaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvbGQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiYm9sZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvbGQgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2l0YWxpYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpdGFsaWNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWMgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmlrZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHJpa2V0aHJvdWdoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RyaWtlIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzdWInOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3Vic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3ViIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzdXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3VwZXJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdXAgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmRlcmxpbmUgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2luc2VydGltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc2VydGltYWdlX2ZpbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBGaWxlUmVhZGVyRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRIVE1MXCIsIGZhbHNlLCAnPGltZyBzcmM9e2V2ZW50LnRhcmdldC5yZXN1bHR9IHN0eWxlPVwibWF4LXdpZHRoOjEwMCVcIj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVFbG0ub25jaGFuZ2UgPSBGaWxlUmVhZGVyRXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUVsbS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5zZXQgaW1hZ2UgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jsb2NrcXVvdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9ybWF0QmxvY2tcIiwgZmFsc2UsICc8YmxvY2txdW90ZT4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvcm1hdEJsb2NrIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tjb250YWluZXJDbGFzc119PlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvckFjdGlvbiBhY3Rpb249e2hhbmRsZUFjdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvclRleHR9IGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRWRpdG9yQWN0aW9uKHByb3BzKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JBY3Rpb25zfSBvbkNsaWNrPXtwcm9wcy5hY3Rpb259PlxyXG4gICAgICAgICAge2FjdGlvbkJ1dHRvbnMubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IFtcIlN1YlwiLCBcIlN1cFwiXS5pbmNsdWRlcyhkYXRhKSA/IGRhdGEgOiBkYXRhWzBdO1xyXG4gICAgICAgICAgICBzdGFydCA9IGRhdGEgPT09IFwiSW5zZXJ0SW1hZ2VcIiA/IFwiSW1nXCIgOiBzdGFydDtcclxuICAgICAgICAgICAgc3RhcnQgPSBkYXRhID09PSBcIkJsb2NrUXVvdGVcIiA/ICdcIicgOiBzdGFydDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD17ZGF0YS50b0xvd2VyQ2FzZSgpfT57c3RhcnR9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA9PT0gXCJJbnNlcnRJbWFnZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXt7ZGF0YS50b0xvd2VyQ2FzZSgpfV9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbmB9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcblxyXG4gICAgICA8cD5Ob3RlOiBQbGVhc2UgcmVwbGFjZSBcIiRcIiB3aXRoIGAkIGljb248L3A+XHJcblxyXG4gICAgICA8aDI+U3R5bGUgd2l0aCBzY3NzPC9oMj5cclxuICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwic2Nzc1wiIHN0eWxlPXttYXRlcmlhbE9jZWFuaWN9PlxyXG57YCAgICAgIFxyXG4uZWRpdG9yQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAuZWRpdG9yQWN0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICBcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVkaXRvclRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIFxyXG4gICAgICAgIGJsb2NrcXVvdGUge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmB9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcblxyXG4gICAgICAgIDxwPlRyeSB0byBhZGQgYXJjaGl0ZWN0dXJlPC9wPlxyXG5cclxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICAgICAgICAgIGh0dHBzOi8vYmlnZnJvbnRlbmQuZGV2L3Rvb2xzL2V4Y2FsaWRyYXcvZW1iZWQvNzAxNGRhYTMtZWFlZS00NjAzLWE0MGMtNTlhYzBmNWI2YmVlP3c9MzAxNSZoPTk5MFxyXG4gICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=