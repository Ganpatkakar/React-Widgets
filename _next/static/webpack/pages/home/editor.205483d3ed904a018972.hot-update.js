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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("iframe", {
      src: "https://bigfrontend.dev/tools/excalidraw/embed/7014daa3-eaee-4603-a40c-59ac0f5b6bee?w=3015&h=990"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yQ29tcG9uZW50IiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiRWRpdG9yIiwiY29udGFpbmVyQ2xhc3MiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJTeW50YXhIaWdobGlnaHRlciIsImxhbmd1YWdlIiwic3R5bGUiLCJtYXRlcmlhbE9jZWFuaWMiLCJzcmMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRDO0FBQ1c7QUFDekM7QUFBQTtBQUFBO0FBRXpCLFNBQVNBLGVBQWVBLENBQUEsRUFBRztFQUV4QyxvQkFDRUMsb0VBQUEsQ0FBQUMsOERBQUE7SUFBQUMsUUFBQSxnQkFDRUYsb0VBQUE7TUFBQUUsUUFBQSxlQUNFRixvRUFBQSxDQUFDRyx5REFBTTtRQUFDQyxjQUFjLEVBQUU7TUFBa0I7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQUU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDMUMsQ0FBQyxlQUVOUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQW9DLENBQUMsZUFDckNSLG9FQUFBO01BQUFFLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBeUMsQ0FBQyxlQUMxQ1Isb0VBQUEsQ0FBQ1MsOERBQWlCO01BQUNDLFFBQVEsRUFBQyxZQUFZO01BQUNDLEtBQUssRUFBRUMsOEZBQWdCO01BQUFWLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FlN0MsQ0FBQyxlQUVwQlIsb0VBQUE7TUFBQUUsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUE0QixDQUFDLGVBQzdCUixvRUFBQSxDQUFDUyw4REFBaUI7TUFBQ0MsUUFBUSxFQUFDLFlBQVk7TUFBQ0MsS0FBSyxFQUFFQyw4RkFBZ0I7TUFBQVYsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQTBHN0MsQ0FBQyxlQUVwQlIsb0VBQUE7TUFBQUUsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUEyQyxDQUFDLGVBRTVDUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQXVCLENBQUMsZUFDeEJSLG9FQUFBLENBQUNTLDhEQUFpQjtNQUFDQyxRQUFRLEVBQUMsTUFBTTtNQUFDQyxLQUFLLEVBQUVDLDhGQUFnQjtNQUFBVixRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BK0N2QyxDQUFDLGVBRWxCUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQTZCLENBQUMsZUFFOUJSLG9FQUFBO01BQVFhLEdBQUcsRUFBQztJQUFrRztNQUFBUixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBUyxDQUFDO0VBQUEsZUFDMUgsQ0FBQztBQUVQO0FBQUNNLEVBQUEsR0FqTXVCZixlQUFlO0FBQUEsSUFBQWUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS9lZGl0b3IuMjA1NDgzZDNlZDkwNGEwMTg5NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInO1xyXG5pbXBvcnQgeyBtYXRlcmlhbE9jZWFuaWMgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtJztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yQ29tcG9uZW50KCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RWRpdG9yIGNvbnRhaW5lckNsYXNzPXtcImVkaXRvckNvbnRhaW5lclwifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxoMj5Ib3cgdG8gY2FsbCBFZGl0b3IgY29tcG9uZW50PC9oMj5cclxuICAgICAgPHA+aW1wb3J0IGVkaXRvciBjb21wb25lbnQgYW5kIGNhbGwgaXQ8L3A+XHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cImphdmFzY3JpcHRcIiBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfT5cclxuICB7YFxyXG4gICAgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4gICAgaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvci5jb21wb25lbnQnO1xyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3JDb21wb25lbnQoKSB7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEVkaXRvciBjb250YWluZXJDbGFzcz17XCJlZGl0b3JDb250YWluZXJcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gIGBcclxuICB9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcblxyXG4gICAgICA8aDI+RGF0YSBUYWJsZSBjb21wb25lbnQ8L2gyPlxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCIgc3R5bGU9e21hdGVyaWFsT2NlYW5pY30+XHJcbntgICAgICAgICBcclxuICAgIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuICAgIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRWRpdG9yLm1vZHVsZS5zY3NzXCI7XHJcbiAgICBcclxuICAgIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBbXHJcbiAgICAgIFwiQm9sZFwiLFxyXG4gICAgICBcIkl0YWxpY1wiLFxyXG4gICAgICBcIlN0cmlrZVwiLFxyXG4gICAgICBcIlN1YlwiLFxyXG4gICAgICBcIlN1cFwiLFxyXG4gICAgICBcIlVuZGVyTGluZVwiLFxyXG4gICAgICBcIkluc2VydEltYWdlXCIsXHJcbiAgICAgIFwiQmxvY2tRdW90ZVwiLFxyXG4gICAgXTtcclxuICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcihwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyQ2xhc3MgfSA9IHByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUFjdGlvbnMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSAhPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkXHJcbiAgICAgICAgICAgIHN3aXRjaChpZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm9sZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9sZCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaXRhbGljJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIml0YWxpY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0YWxpYyBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaWtlJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0cmlrZXRocm91Z2hcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdHJpa2UgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Yic6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdWJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWIgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3N1cCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdXBlcnNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1cCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInVuZGVybGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVybGluZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW5zZXJ0aW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zZXJ0aW1hZ2VfZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIEZpbGVSZWFkZXJFdmVudChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydEhUTUxcIiwgZmFsc2UsICc8aW1nIHNyYz17ZXZlbnQudGFyZ2V0LnJlc3VsdH0gc3R5bGU9XCJtYXgtd2lkdGg6MTAwJVwiPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZUVsbS5vbmNoYW5nZSA9IEZpbGVSZWFkZXJFdmVudDtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlRWxtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnNldCBpbWFnZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmxvY2txdW90ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb3JtYXRCbG9ja1wiLCBmYWxzZSwgJzxibG9ja3F1b3RlPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybWF0QmxvY2sgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0IGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2NvbnRhaW5lckNsYXNzXX0+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yQWN0aW9uIGFjdGlvbj17aGFuZGxlQWN0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yVGV4dH0gY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBFZGl0b3JBY3Rpb24ocHJvcHMpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvckFjdGlvbnN9IG9uQ2xpY2s9e3Byb3BzLmFjdGlvbn0+XHJcbiAgICAgICAgICB7YWN0aW9uQnV0dG9ucy5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gW1wiU3ViXCIsIFwiU3VwXCJdLmluY2x1ZGVzKGRhdGEpID8gZGF0YSA6IGRhdGFbMF07XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gZGF0YSA9PT0gXCJJbnNlcnRJbWFnZVwiID8gXCJJbWdcIiA6IHN0YXJ0O1xyXG4gICAgICAgICAgICBzdGFydCA9IGRhdGEgPT09IFwiQmxvY2tRdW90ZVwiID8gJ1wiJyA6IHN0YXJ0O1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtkYXRhLnRvTG93ZXJDYXNlKCl9PntzdGFydH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID09PSBcIkluc2VydEltYWdlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3tkYXRhLnRvTG93ZXJDYXNlKCl9X2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuYH1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuXHJcbiAgICAgIDxwPk5vdGU6IFBsZWFzZSByZXBsYWNlIFwiJFwiIHdpdGggYCQgaWNvbjwvcD5cclxuXHJcbiAgICAgIDxoMj5TdHlsZSB3aXRoIHNjc3M8L2gyPlxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9XCJzY3NzXCIgc3R5bGU9e21hdGVyaWFsT2NlYW5pY30+XHJcbntgICAgICAgXHJcbi5lZGl0b3JDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIC5lZGl0b3JBY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZWRpdG9yVGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcbiAgICAgICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuYH1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuXHJcbiAgICAgICAgPHA+VHJ5IHRvIGFkZCBhcmNoaXRlY3R1cmU8L3A+XHJcblxyXG4gICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9iaWdmcm9udGVuZC5kZXYvdG9vbHMvZXhjYWxpZHJhdy9lbWJlZC83MDE0ZGFhMy1lYWVlLTQ2MDMtYTQwYy01OWFjMGY1YjZiZWU/dz0zMDE1Jmg9OTkwXCI+PC9pZnJhbWU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=