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
      src: "https://bigfrontend.dev/tools/excalidraw/embed/7014daa3-eaee-4603-a40c-59ac0f5b6bee?w=3015&h=990",
      width: "100%",
      height: "500"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yQ29tcG9uZW50IiwiX2pzeERFViIsIl9GcmFnbWVudCIsImNoaWxkcmVuIiwiRWRpdG9yIiwiY29udGFpbmVyQ2xhc3MiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJTeW50YXhIaWdobGlnaHRlciIsImxhbmd1YWdlIiwic3R5bGUiLCJtYXRlcmlhbE9jZWFuaWMiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEM7QUFDVztBQUN6QztBQUFBO0FBQUE7QUFFekIsU0FBU0EsZUFBZUEsQ0FBQSxFQUFHO0VBRXhDLG9CQUNFQyxvRUFBQSxDQUFBQyw4REFBQTtJQUFBQyxRQUFBLGdCQUNFRixvRUFBQTtNQUFBRSxRQUFBLGVBQ0VGLG9FQUFBLENBQUNHLHlEQUFNO1FBQUNDLGNBQWMsRUFBRTtNQUFrQjtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRTtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUMxQyxDQUFDLGVBRU5SLG9FQUFBO01BQUFFLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBb0MsQ0FBQyxlQUNyQ1Isb0VBQUE7TUFBQUUsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUF5QyxDQUFDLGVBQzFDUixvRUFBQSxDQUFDUyw4REFBaUI7TUFBQ0MsUUFBUSxFQUFDLFlBQVk7TUFBQ0MsS0FBSyxFQUFFQyw4RkFBZ0I7TUFBQVYsUUFBQTtJQUFBO01BQUFHLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQWU3QyxDQUFDLGVBRXBCUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQTRCLENBQUMsZUFDN0JSLG9FQUFBLENBQUNTLDhEQUFpQjtNQUFDQyxRQUFRLEVBQUMsWUFBWTtNQUFDQyxLQUFLLEVBQUVDLDhGQUFnQjtNQUFBVixRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BMEc3QyxDQUFDLGVBRXBCUixvRUFBQTtNQUFBRSxRQUFBO0lBQUE7TUFBQUcsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQTJDLENBQUMsZUFFNUNSLG9FQUFBO01BQUFFLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBdUIsQ0FBQyxlQUN4QlIsb0VBQUEsQ0FBQ1MsOERBQWlCO01BQUNDLFFBQVEsRUFBQyxNQUFNO01BQUNDLEtBQUssRUFBRUMsOEZBQWdCO01BQUFWLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0ErQ3ZDLENBQUMsZUFFbEJSLG9FQUFBO01BQUFFLFFBQUE7SUFBQTtNQUFBRyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBNkIsQ0FBQyxlQUU5QlIsb0VBQUE7TUFBUWEsR0FBRyxFQUFDLGtHQUFrRztNQUFDQyxLQUFLLEVBQUMsTUFBTTtNQUFDQyxNQUFNLEVBQUM7SUFBSztNQUFBVixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBUyxDQUFDO0VBQUEsZUFDcEosQ0FBQztBQUVQO0FBQUNRLEVBQUEsR0FqTXVCakIsZUFBZTtBQUFBLElBQUFpQixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lL2VkaXRvci5lODQ2ZGNlMjhlNWE5OWUyZjA3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcic7XHJcbmltcG9ydCB7IG1hdGVyaWFsT2NlYW5pYyB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc20nO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3JDb21wb25lbnQoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxFZGl0b3IgY29udGFpbmVyQ2xhc3M9e1wiZWRpdG9yQ29udGFpbmVyXCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGgyPkhvdyB0byBjYWxsIEVkaXRvciBjb21wb25lbnQ8L2gyPlxyXG4gICAgICA8cD5pbXBvcnQgZWRpdG9yIGNvbXBvbmVudCBhbmQgY2FsbCBpdDwvcD5cclxuICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPVwiamF2YXNjcmlwdFwiIHN0eWxlPXttYXRlcmlhbE9jZWFuaWN9PlxyXG4gIHtgXHJcbiAgICBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbiAgICBpbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yLmNvbXBvbmVudCc7XHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvckNvbXBvbmVudCgpIHtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yIGNvbnRhaW5lckNsYXNzPXtcImVkaXRvckNvbnRhaW5lclwifSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgYFxyXG4gIH1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuXHJcbiAgICAgIDxoMj5EYXRhIFRhYmxlIGNvbXBvbmVudDwvaDI+XHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cImphdmFzY3JpcHRcIiBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfT5cclxue2AgICAgICAgIFxyXG4gICAgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4gICAgaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9FZGl0b3IubW9kdWxlLnNjc3NcIjtcclxuICAgIFxyXG4gICAgY29uc3QgYWN0aW9uQnV0dG9ucyA9IFtcclxuICAgICAgXCJCb2xkXCIsXHJcbiAgICAgIFwiSXRhbGljXCIsXHJcbiAgICAgIFwiU3RyaWtlXCIsXHJcbiAgICAgIFwiU3ViXCIsXHJcbiAgICAgIFwiU3VwXCIsXHJcbiAgICAgIFwiVW5kZXJMaW5lXCIsXHJcbiAgICAgIFwiSW5zZXJ0SW1hZ2VcIixcclxuICAgICAgXCJCbG9ja1F1b3RlXCIsXHJcbiAgICBdO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb250YWluZXJDbGFzcyB9ID0gcHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQWN0aW9ucyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lICE9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuaWRcclxuICAgICAgICAgICAgc3dpdGNoKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdib2xkJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImJvbGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib2xkIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdpdGFsaWMnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRhbGljIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpa2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwic3RyaWtldGhyb3VnaFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0cmlrZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3ViJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1YnNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YiBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3VwJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1cGVyc2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VwIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwidW5kZXJsaW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5kZXJsaW5lIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbnNlcnRpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNlcnRpbWFnZV9maWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gRmlsZVJlYWRlckV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0SFRNTFwiLCBmYWxzZSwgJzxpbWcgc3JjPXtldmVudC50YXJnZXQucmVzdWx0fSBzdHlsZT1cIm1heC13aWR0aDoxMDAlXCI+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlRWxtLm9uY2hhbmdlID0gRmlsZVJlYWRlckV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVFbG0uY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluc2V0IGltYWdlIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdibG9ja3F1b3RlJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvcm1hdEJsb2NrXCIsIGZhbHNlLCAnPGJsb2NrcXVvdGU+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3JtYXRCbG9jayBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbY29udGFpbmVyQ2xhc3NdfT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JBY3Rpb24gYWN0aW9uPXtoYW5kbGVBY3Rpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3JUZXh0fSBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIEVkaXRvckFjdGlvbihwcm9wcykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yQWN0aW9uc30gb25DbGljaz17cHJvcHMuYWN0aW9ufT5cclxuICAgICAgICAgIHthY3Rpb25CdXR0b25zLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBbXCJTdWJcIiwgXCJTdXBcIl0uaW5jbHVkZXMoZGF0YSkgPyBkYXRhIDogZGF0YVswXTtcclxuICAgICAgICAgICAgc3RhcnQgPSBkYXRhID09PSBcIkluc2VydEltYWdlXCIgPyBcIkltZ1wiIDogc3RhcnQ7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gZGF0YSA9PT0gXCJCbG9ja1F1b3RlXCIgPyAnXCInIDogc3RhcnQ7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9e2RhdGEudG9Mb3dlckNhc2UoKX0+e3N0YXJ0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPT09IFwiSW5zZXJ0SW1hZ2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD17e2RhdGEudG9Mb3dlckNhc2UoKX1fZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCB3aWR0aDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5gfVxyXG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG5cclxuICAgICAgPHA+Tm90ZTogUGxlYXNlIHJlcGxhY2UgXCIkXCIgd2l0aCBgJCBpY29uPC9wPlxyXG5cclxuICAgICAgPGgyPlN0eWxlIHdpdGggc2NzczwvaDI+XHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cInNjc3NcIiBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfT5cclxue2AgICAgICBcclxuLmVkaXRvckNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgLmVkaXRvckFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lZGl0b3JUZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxuICAgICAgICBibG9ja3F1b3RlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41ZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5gfVxyXG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG5cclxuICAgICAgICA8cD5UcnkgdG8gYWRkIGFyY2hpdGVjdHVyZTwvcD5cclxuXHJcbiAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL2JpZ2Zyb250ZW5kLmRldi90b29scy9leGNhbGlkcmF3L2VtYmVkLzcwMTRkYWEzLWVhZWUtNDYwMy1hNDBjLTU5YWMwZjViNmJlZT93PTMwMTUmaD05OTBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MDBcIj48L2lmcmFtZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==