webpackHotUpdate_N_E("pages/home/editor",{

/***/ "./components/Button/index.js":
false,

/***/ "./components/Button/index.module.scss":
false,

/***/ "./components/DataTable/DataTable.component.js":
false,

/***/ "./components/DataTable/DataTable.module.scss":
false,

/***/ "./components/DataTable/index.js":
false,

/***/ "./components/Debounce/index.js":
false,

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
      elm.innerText = start;
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
          lineNumber: 98,
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
          lineNumber: 100,
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

/***/ }),

/***/ "./components/Editor/Editor.module.scss":
/*!**********************************************!*\
  !*** ./components/Editor/Editor.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Editor.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Editor/Editor.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Editor.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Editor/Editor.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Editor.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Editor/Editor.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
      children: "\n  import DataTable from \"./DataTable.component\";\n\n  function DataTableComponent() {\n    const [tableData, setTableData] = useState(movies);\n    useEffect(() => {\n      fetch(\"/api/movies\", {\n        \"method\": \"GET\",\n        \"headers\": {\n          \"x-rapidapi-host\": \"movie-database-imdb-alternative.p.rapidapi.com\",\n          \"x-rapidapi-key\": \"d9c87f999amshb4af30838481e71p1ea5f2jsnce1fbcd684a2\"\n        }\n      })\n      .then(response => {\n        return response.json();\n      })\n      .then(data => {\n        setTableData(data);\n      })\n      .catch(err => {\n        console.error(err);\n      });\n    }, []);\n    \n    return (\n      <DataTable\n          title=\"Data Table Example\"\n          tableHeaders={tableHeaders2}\n          tableData={tableData}\n          searchEnabled={true}\n          searchBy={\"title\"} // table header key name which needs to be searched\n          paginationEnabled={true}\n          settingsEnabled={true}\n        />\n    )\n  }\n  "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Data Table component"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
      language: "javascript",
      style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__["materialOceanic"],
      children: "        \nimport React, { useEffect, useRef, useState, useMemo, useCallback } from \"react\";\nimport styles from \"./DataTable.module.scss\";\nimport {\n  AiFillCaretDown,\n  AiFillCaretUp,\n  AiFillSetting,\n  AiOutlineRight,\n  AiOutlineLeft,\n  AiOutlineVerticalLeft,\n  AiOutlineVerticalRight,\n} from \"react-icons/ai\";\nimport ToggleInput from \"../ToggleInput\";\nimport Button from \"../Button\";\nimport { Debounce } from \"../Debounce\";\n\nconst Prev = \"prev\";\nconst Next = \"next\";\nconst EndLeft = \"endLeft\";\nconst EndRight = \"endRight\";\n\nfunction TableHeaderClone(tableHeaders) {\n  const data = {};\n  Object.keys(tableHeaders).map((key) => {\n    data[key] = { ...tableHeaders[key] };\n  });\n  return data;\n}\n\nfunction TableRowsClone(tableData = [], from, to) {\n  const data = [];\n  for (let i = from; i < to; i++) {\n    data.push({ ...tableData[i] });\n  }\n  return data;\n}\n\nfunction searchInfield(tableRowsData, searchBy, searchValue) {\n  return tableRowsData.filter((row) => {\n    return row[searchBy].toLowerCase().includes(searchValue.toLowerCase());\n  });\n}\n\nexport default function DataTable({\n  tableData,\n  tableHeaders,\n  overrideStyles,\n  title,\n  searchEnabled,\n  searchBy = \"\",\n  paginationEnabled,\n  settingsEnabled,\n}) {\n  const [currentPage, setCurrentPage] = useState(0);\n  const [pageSize, setPageSize] = useState(10);\n  const [showSettings, setShowSettings] = useState(false);\n  const [tableHeaderData, setTableHeaderData] = useState(\n    TableHeaderClone(tableHeaders)\n  );\n  const [tableRowsData, setTableRowsData] = useState(\n    TableRowsClone(tableData, 0, pageSize)\n  );\n\n  useEffect(() => {\n    setTableRowsData(\n      TableRowsClone(tableData, currentPage * pageSize, pageSize)\n    );\n  }, [tableData]);\n\n  useEffect(() => {\n    const from = currentPage * pageSize;\n    const to = from + pageSize;\n    setTableRowsData(TableRowsClone(tableData, from, to));\n  }, [pageSize, currentPage]);\n\n  const handleSettingsClick = () => {\n    setShowSettings(!showSettings);\n  };\n\n  if (searchEnabled && searchBy.length == 0) {\n    searchEnabled = false;\n    alert(\"Please provide a search field\");\n  }\n\n  const resetSettings = () => {\n    setTableHeaderData(TableHeaderClone(tableHeaders));\n  };\n\n  const handleSearch = Debounce((e) => {\n    const searchValue = e.target.value;\n    let newRows;\n    if (searchValue.length > 0) {\n      newRows = searchInfield(tableData, searchBy, searchValue);\n    } else {\n      newRows = TableRowsClone(tableData, 0, pageSize);\n    }\n    setTableRowsData(newRows);\n  }, 500);\n\n  const handleSorting = (key, sortOrder) => {\n    console.log(\"sorting by\", key, sortOrder);\n    // sort table Rows Data\n    const newRows = [].concat(tableRowsData).sort((a, b) => {\n      if (sortOrder === \"asc\") {\n        return b[key] > a[key] ? 1 : -1;\n      } else {\n        return a[key] > b[key] ? 1 : -1;\n      }\n    });\n    setTableRowsData(newRows);\n  };\n\n  const handlePageChange = (direction) => {\n    if (direction === Prev) {\n      if (currentPage === 0) return;\n      setCurrentPage(currentPage - 1);\n    } else if (direction === Next) {\n      const maxPages = Math.floor(tableData.length / pageSize);\n      if (currentPage === maxPages) return;\n      setCurrentPage(currentPage + 1);\n    } else if (direction === EndLeft) {\n      setCurrentPage(0);\n    } else if (direction === EndRight) {\n      setCurrentPage(Math.floor(tableData.length / pageSize));\n    }\n  };\n\n  return (\n    <div className={styles.tableComponent}>\n      <div className={styles.tableTitle}>{title}</div>\n      <RenderTableControls\n        searchEnabled={searchEnabled}\n        settingsEnabled={settingsEnabled}\n        searchBy={tableHeaderData[searchBy].label}\n        handleSearch={handleSearch}\n        handleSettingsClick={handleSettingsClick}\n      />\n      <div className={styles.tableContainer}>\n        {/* Settings flexpane for table columns show and hide options */}\n        <RenderSettings\n          showSettings={showSettings}\n          tableHeader={tableHeaderData}\n          setTableHeaderData={setTableHeaderData}\n          setShowSettings={setShowSettings}\n          resetSettings={resetSettings}\n        />\n        <div className={styles.tableOverflow}>\n          <div className={styles.tableContent}>\n            <RenderTableHeader\n              tableHeaders={tableHeaderData}\n              handleSorting={handleSorting}\n            />\n            <RenderTableRows\n              pageSize={pageSize}\n              currentPage={currentPage}\n              tableData={tableRowsData}\n              tableHeaders={tableHeaderData}\n            />\n          </div>\n        </div>\n        {paginationEnabled && (\n              <RenderPagination\n                pageSize={pageSize}\n                setPageSize={setPageSize}\n                handlePageChange={handlePageChange}\n                currentPage={currentPage}\n                totalContentLen={tableData.length}\n              />\n            )}\n      </div>\n    </div>\n  );\n}\n\nfunction RenderPagination({\n  pageSize,\n  setPageSize,\n  handlePageChange,\n  currentPage,\n  totalContentLen,\n}) {\n  const pageLenArr = [10, 15, 20, 25, 30];\n  const maxPages = Math.floor(totalContentLen / pageSize);\n  const startFrom = currentPage * pageSize;\n  let endTo = startFrom + pageSize;\n  if (endTo > totalContentLen) endTo = totalContentLen;\n\n  return (\n    <div className={styles.paginationContainer}>\n      <div className={styles.paginationSizeContinaer}>\n        <span>Rows per page: </span>\n        <span>\n          <select\n            value={pageSize}\n            onChange={(e) => {\n              setPageSize(parseInt(e.target.value));\n              handlePageChange(EndLeft);\n            }}\n          >\n            {pageLenArr.map((len) => (\n              <option key={len} value={len}>\n                {len}\n              </option>\n            ))}\n          </select>\n        </span>\n      </div>\n      <div className={styles.currentContent}>\n        <p>\n          {startFrom} - {endTo} of {totalContentLen}\n        </p>\n      </div>\n      <div className={styles.pagination}>\n        <span className={\"$\"{currentPage === 0 && styles.deactive}}>\n          <span onClick={() => handlePageChange(EndLeft)}>\n            <AiOutlineVerticalRight />\n          </span>\n          <span onClick={() => handlePageChange(Prev)}>\n            <AiOutlineLeft />\n          </span>\n        </span>\n        <span className={\"$\"{endTo === totalContentLen && styles.deactive}}>\n          <span onClick={() => handlePageChange(Next)}>\n            <AiOutlineRight />\n          </span>\n          <span onClick={() => handlePageChange(EndRight)}>\n            <AiOutlineVerticalLeft />\n          </span>\n        </span>\n      </div>\n    </div>\n  );\n}\n\nfunction RenderTableControls({\n  searchEnabled,\n  settingsEnabled,\n  searchBy,\n  handleSettingsClick,\n  handleSearch,\n}) {\n  return (\n    <div className={styles.tableControlsContainer}>\n      <div className={styles.searchContainer}>\n        {searchEnabled && (\n          <input\n            onChange={handleSearch}\n            className={styles.searchInput}\n            type=\"text\"\n            placeholder={Searchby \"$\"{searchBy}}\n          />\n        )}\n      </div>\n      <div className={styles.tableSettings}>\n        {settingsEnabled && <AiFillSetting onClick={handleSettingsClick} />}\n      </div>\n    </div>\n  );\n}\n\nfunction RenderSettings({\n  showSettings,\n  tableHeader,\n  setTableHeaderData,\n  setShowSettings,\n  resetSettings,\n}) {\n  const handleClick = (key, value) => {\n    setTableHeaderData((prevState) => {\n      prevState[key].visible = value;\n      return { ...prevState };\n    });\n  };\n\n  const handleApply = () => {\n    console.log(\"apply clicked\");\n    setShowSettings(false);\n  };\n\n  const handleCancel = () => {\n    resetSettings();\n    setShowSettings(false);\n  };\n\n  return (\n    <div\n      className={\"$\"{showSettings ? styles.showSettings : \"hide\"} \"$\"{\n        styles.settingsContainer\n      }}\n    >\n      <div className={styles.settingsTitle}>Settings</div>\n      <div className={styles.settingsContent}>\n        {Object.keys(tableHeader).map((key) => (\n          <div key={key} className={styles.settingsRow}>\n            <div className={styles.settingsLabel}>{tableHeader[key].label}</div>\n            <ToggleInput\n              value={key}\n              onClick={handleClick}\n              initialState={tableHeader[key].visible}\n            />\n          </div>\n        ))}\n      </div>\n      <div className={styles.settingsActions}>\n        <Button text=\"Apply\" onClick={handleApply} />\n        <Button text=\"Cancel\" onClick={handleCancel} />\n      </div>\n    </div>\n  );\n}\n\nfunction RenderTableHeader({ tableHeaders, handleSorting }) {\n  const [sortKey, setSortKey] = useState(\"\");\n  const [sortOrder, setSortOrder] = useState(\"\");\n  const handleSort = (key) => {\n    if (sortKey === key) {\n      setSortOrder(sortOrder === \"asc\" ? \"desc\" : \"asc\");\n    } else {\n      setSortOrder(\"asc\");\n    }\n    setSortKey(key);\n    handleSorting(key, sortOrder);\n  };\n  const refs = [];\n  return (\n    <div className={\"$\"{styles.tableHeader}}>\n      {Object.keys(tableHeaders).map((key, index) => {\n        const { label, minWidth, visible, sortable } = tableHeaders[key];\n        return (\n          visible && (\n            <RenderTableHeaderCell\n              index={index}\n              refs={refs}\n              key={key}\n              handleSort={() => handleSort(key)}\n              sorted={sortKey === key}\n              sortOrder={sortOrder}\n              label={label}\n              minWidth={minWidth}\n              sortable={sortable}\n            />\n          )\n        );\n      })}\n    </div>\n  );\n}\n\nconst RenderTableHeaderCell = ({\n  index,\n  refs,\n  label,\n  minWidth,\n  sortable,\n  handleSort,\n  sorted,\n  sortOrder,\n}) => {\n  const resizeRef = useRef(null);\n  const resizeContainerRef = useRef(null);\n\n  useEffect(() => {\n    const resize = (e) => {\n      if (resizeContainerRef && resizeContainerRef.current) {\n        const dx = e.pageX - resizeContainerRef.current.getBoundingClientRect().left;\n        const newWidth = parseInt(getComputedStyle(resizeContainerRef.current, \"\").width) + dx +\"px\";\n        resizeContainerRef.current.style.width = newWidth;\n      }\n    }\n    if (resizeRef && resizeRef.current) {\n      resizeRef.current.addEventListener(\"mousedown\",function (e) {\n        document.addEventListener(\"mousemove\", resize, false);\n        document.addEventListener('mouseup', mouseUpHandler);\n      }, false);\n\n      const mouseUpHandler = function () {\n        document.removeEventListener('mousemove', resize);\n        document.removeEventListener('mouseup', mouseUpHandler);\n      };\n\n      return function cleanup() {\n        if (resizeRef && resizeRef.current) {\n          resizeRef.current.removeEventListener(\"mousedown\", resize, false);\n        }\n      };\n    }\n  }, []);\n\n  return (\n    <div\n      id={label}\n      key={label}\n      style={{ minWidth: minWidth }}\n      className={styles.tableHeaderItem}\n      ref={resizeContainerRef}\n    >\n      <div className={styles.tableHeaderContent} onClick={handleSort}>\n        <span className={styles.tablerHeaderItemLabel}>{label}</span>\n        {sortable && (\n          <span\n            className={\"$\"{styles.sortableIcons} \"$\"{\n              sorted && styles.sortableIconActive\n            }}\n          >\n            {sorted && sortOrder === \"asc\" && <AiFillCaretUp />}\n            {sorted && sortOrder === \"desc\" && <AiFillCaretDown />}\n            {!sorted && <AiFillCaretUp />}\n          </span>\n        )}\n      </div>\n      <div className={styles.dragBorder} ref={resizeRef}></div>\n    </div>\n  );\n};\n\nfunction RenderTableRows({ tableHeaders, tableData }) {\n  return (\n    <div className={styles.tableRows}>\n      {tableData.map((data, index) => (\n        <div key={data.id} className={\"$\"{styles.tableRow} \"$\"{styles.rowStyle}}>\n          {Object.keys(data).map(\n            (key) =>\n              (tableHeaders[key] && tableHeaders[key].visible && (\n                <div\n                  key={key}\n                  style={{ minWidth: tableHeaders[key].minWidth }}\n                  className={styles.tableRowItem}\n                >\n                  {data[key]}\n                </div>\n              )) ||\n              null\n          )}\n        </div>\n      ))}\n    </div>\n  );\n}\n\n        "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      children: "Note: Please replace \"$\" with `$ icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Style with scss"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
      language: "scss",
      style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_2__["materialOceanic"],
      children: "      \n.tableComponent {\n  padding: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n\n  .tableTitle {\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin-bottom: 1rem;\n  }\n\n  .tableControlsContainer {\n    display: flex;\n    // border: 1px solid #aaa;\n    padding: 0.5rem;\n    border-bottom: 0px;\n    justify-content: end;\n    -moz-box-align: end;\n    align-items: center;\n    border-radius: 4px 4px 0px 0px;\n\n    .searchContainer {\n      display: flex;\n      flex-direction: column;\n      margin-right: 1rem;\n\n      .searchInput {\n        width: 100%;\n        border: 1px solid #ccc;\n        padding: 0.5rem;\n        border-radius: 0.25rem;\n      }\n    }\n    .tableSettings {\n      padding: 0 0 0 1rem;\n      font-size: 16px;\n    }\n  }\n\n  .paginationContainer {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0.5rem;\n\n    > div {\n      padding: 0 10px;\n    }\n\n    .pagination {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0.5rem;\n      color: #000;\n      font-size: 16px;\n\n      .deactive {\n        color: #ddd;\n      }\n    }\n  }\n\n  .tableContainer {\n    position: relative;\n    width: 100%;\n    min-height: 0px;\n    // border: 1px solid #aaa;\n    border-radius: 0px 0px 4px 4px;\n\n    .showSettings {\n      display: block !important;\n    }\n\n    .settingsContainer {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      z-index: 1;\n      background-color: rgba(255, 255, 255, .9);\n      border-left: 1px solid #aaa;\n      border-radius: 4px 0px 0px 4px;\n      display: none;\n      width: 50%;\n      height: 100%;\n      overflow: auto;\n\n      .settingsTitle {\n        font-weight: 500;\n        padding: 0.5rem;\n      }\n      \n      .settingsRow {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0.5rem;\n      }\n\n      .settingsActions {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        padding: 0.5rem;\n      }\n    }\n\n    .tableOverflow {\n      position: relative;\n      width: 100%;\n      border-radius: inherit;\n      overflow: auto hidden;\n\n      .tableContent {\n        display: table;\n        position: relative;\n        box-sizing: border-box;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        max-width: 100%;\n        color: rgba(0, 0, 0, 0.87);\n        background-color: rgb(255, 255, 255);\n  \n        .rowStyle {\n          border-bottom: 1px solid #ddd;\n          min-height: 48px;\n          align-items: center;\n        }\n    \n        .tableHeader {\n          display: flex;\n          border-bottom: 1px solid #ddd;\n      \n          .tableHeaderItem {\n            flex: 1;\n            margin: 0.5rem;\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            position: relative;\n\n            .tableHeaderContent {\n              display: flex;\n              cursor: pointer;\n              font-weight: 500;\n              overflow: hidden;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n\n              .tablerHeaderItemLabel {\n                overflow: hidden;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n              }\n  \n              .sortableIcons {\n                color: #ddd;\n                display: flex;\n                padding: 0 5px;\n              }\n  \n              &:hover .sortableIcons, .sortableIcons.sortableIconActive {\n                color: #000;\n              }\n            }\n\n            .dragBorder {\n              border: 1px solid #ddd;\n              height: 100%;\n              position: absolute;\n              right: 0px;\n\n              &:hover {\n                border-color: #000;\n                cursor: ew-resize;\n              }\n            }\n          }\n        }\n        .tableRows {\n          .tableRow {\n            display: flex;\n            \n            \n            .tableRowItem {\n              flex: 1;\n              margin: 0.5rem;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 7
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

/***/ }),

/***/ "./components/ToggleInput/index.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Button/index.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/DataTable/DataTable.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Editor/Editor.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Editor/Editor.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Editor_editorContainer__3d29_ {\n  width: 500px;\n  display: block;\n  border: 1px solid #000;\n  -moz-border-radius: 4px;\n       border-radius: 4px;\n}\n.Editor_editorContainer__3d29_ .Editor_editorActions__38e17 {\n  display: -moz-box;\n  display: flex;\n  padding: 10px 10px 0px;\n  background: #ddd;\n  -moz-border-radius: 4px 4px 0 0;\n       border-radius: 4px 4px 0 0;\n}\n.Editor_editorContainer__3d29_ .Editor_editorActions__38e17 button {\n  display: -moz-box;\n  display: flex;\n  flex-wrap: wrap;\n  -moz-box-pack: center;\n       justify-content: center;\n  -moz-box-align: center;\n       align-items: center;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.Editor_editorContainer__3d29_ .Editor_editorActions__38e17 button .Editor_icon__2NtwV {\n  width: 16px;\n}\n.Editor_editorContainer__3d29_ .Editor_editorText__21ahM {\n  display: block;\n  width: 100%;\n  min-height: 300px;\n  padding: 10px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.Editor_editorContainer__3d29_ .Editor_editorText__21ahM blockquote {\n  border-left: 5px solid #ccc;\n  font-style: italic;\n  margin-left: 0;\n  margin-right: 0;\n  overflow: hidden;\n  padding-left: 1.5em;\n  padding-right: 1.5em;\n}", "",{"version":3,"sources":["webpack://Editor.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,cAAA;EACA,sBAAA;EACA,uBAAA;OAAA,kBAAA;AACJ;AACI;EACI,iBAAA;EAAA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,+BAAA;OAAA,0BAAA;AACR;AACQ;EACI,iBAAA;EAAA,aAAA;EACA,eAAA;EACA,qBAAA;OAAA,uBAAA;EACA,sBAAA;OAAA,mBAAA;EACA,kBAAA;EACA,mBAAA;AACZ;AACY;EACI,WAAA;AAChB;AAII;EACI,cAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AAFR;AAIQ;EACI,2BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;AAFZ","sourcesContent":[".editorContainer {\r\n    width: 500px;\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n\r\n    .editorActions {\r\n        display: flex;\r\n        padding: 10px 10px 0px;\r\n        background: #ddd;\r\n        border-radius: 4px 4px 0 0;\r\n    \r\n        button {\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin-right: 10px;\r\n            margin-bottom: 10px;\r\n    \r\n            .icon{\r\n                width: 16px;\r\n            }\r\n        }\r\n    }\r\n    \r\n    .editorText {\r\n        display: block;\r\n        width: 100%;\r\n        min-height: 300px;\r\n        padding: 10px;\r\n        box-sizing: border-box;\r\n    \r\n        blockquote {\r\n            border-left: 5px solid #ccc;\r\n            font-style: italic;\r\n            margin-left: 0;\r\n            margin-right: 0;\r\n            overflow: hidden;\r\n            padding-left: 1.5em;\r\n            padding-right: 1.5em;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"editorContainer": "Editor_editorContainer__3d29_",
	"editorActions": "Editor_editorActions__38e17",
	"icon": "Editor_icon__2NtwV",
	"editorText": "Editor_editorText__21ahM"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/react-icons/ai/index.esm.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
false,

/***/ "./node_modules/react-icons/lib/esm/index.js":
false,

/***/ "./pages/home/editor.js":
/*!******************************!*\
  !*** ./pages/home/editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_Editor_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Editor/index.js */ "./components/Editor/index.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\GIT\\React-Widgets\\pages\\home\\editor.js";



function Editor() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Editor_index_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 18
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
_c = Editor;
/* harmony default export */ __webpack_exports__["default"] = (Editor);
var _c;
$RefreshReg$(_c, "Editor");

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

/***/ }),

/***/ "./src/data.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLm1vZHVsZS5zY3NzP2VlZTIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VkaXRvci9FZGl0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUvZWRpdG9yLmpzIl0sIm5hbWVzIjpbImFjdGlvbkJ1dHRvbnMiLCJFZGl0b3IiLCJwcm9wcyIsImNvbnRhaW5lckNsYXNzIiwiaGFuZGxlQWN0aW9ucyIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJwYXJlbnROb2RlIiwiaWQiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiY29uc29sZSIsImxvZyIsImZpbGVFbG0iLCJnZXRFbGVtZW50QnlJZCIsIkZpbGVSZWFkZXJFdmVudCIsInNlbGVjdGVkRmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNvbmNhdCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJvbmNoYW5nZSIsImNsaWNrIiwiX2pzeERFViIsImNsYXNzTmFtZSIsInN0eWxlcyIsImNoaWxkcmVuIiwiRWRpdG9yQWN0aW9uIiwiYWN0aW9uIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZWRpdG9yVGV4dCIsImNvbnRlbnRlZGl0YWJsZSIsIl9jIiwiX3RoaXMiLCJlZGl0b3JBY3Rpb25zIiwib25DbGljayIsIm1hcCIsImRhdGEiLCJzdGFydCIsImluY2x1ZGVzIiwiZWxtIiwiaW5uZXJUZXh0IiwibmV3RmlsZUVsbSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ3aWR0aCIsIl9GcmFnbWVudCIsIl9jMiIsIiRSZWZyZXNoUmVnJCIsIkVkaXRvckNvbXBvbmVudCIsIlN5bnRheEhpZ2hsaWdodGVyIiwibGFuZ3VhZ2UiLCJtYXRlcmlhbE9jZWFuaWMiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFBQTtBQUFBO0FBRTFDLElBQU1BLGFBQWEsR0FBRyxDQUNwQixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxhQUFhLEVBQ2IsWUFBWSxDQUNiO0FBQ2MsU0FBU0MsTUFBTUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2xDLElBQVFDLGNBQWMsR0FBS0QsS0FBSyxDQUF4QkMsY0FBYztFQUN0QixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztJQUM3QixJQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTTtJQUN6QixJQUFJQSxNQUFNLENBQUNDLFFBQVEsS0FBSyxRQUFRLEVBQUU7TUFDOUJELE1BQU0sR0FBR0EsTUFBTSxDQUFDRSxVQUFVO0lBQzlCO0lBQ0EsSUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQUU7SUFDcEIsUUFBT0EsRUFBRTtNQUNMLEtBQUssTUFBTTtRQUNQQyxRQUFRLENBQUNDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUMzQjtNQUNKLEtBQUssUUFBUTtRQUNUSCxRQUFRLENBQUNDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzdCO01BQ0osS0FBSyxRQUFRO1FBQ1RILFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUNyQ0MsT0FBTyxDQUFDQyxHQUFH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QVcsV0FBVywyQ0FBMkMscUJBQXFCLHVCQUF1QiwrQkFBK0IsMkJBQTJCLDRCQUE0QiwwQkFBMEIsbUNBQW1DLDZCQUE2Qix1Q0FBdUMsNEJBQTRCLDhCQUE4QixnQ0FBZ0Msd0NBQXdDLG9DQUFvQyxtQ0FBbUMsb0NBQW9DLDhCQUE4QixnQ0FBZ0MsaUJBQWlCLGFBQWEsU0FBUyw2QkFBNkIsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLG1DQUFtQyxnQ0FBZ0MsNENBQTRDLG1DQUFtQywrQkFBK0IsZ0NBQWdDLGlDQUFpQyxvQ0FBb0MscUNBQXFDLGFBQWEsU0FBUyxLQUFLLHVCQUF1QjtBQUNuNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1orRDtBQUNmO0FBQUE7QUFFaEQsU0FBU3RDLE1BQU1BLENBQUEsRUFBRztFQUNoQixvQkFBTzBCLG9FQUFBLENBQUNxQyw2REFBTTtJQUFBbEMsUUFBQSxlQUFDSCxvRUFBQSxDQUFDaUMsbUVBQWU7TUFBQTNCLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQVEsQ0FBQztBQUM3QztBQUFDRyxFQUFBLEdBRlF0QyxNQUFNO0FBSUFBLHFFQUFNLEVBQUM7QUFBQSxJQUFBc0MsRUFBQTtBQUFBb0IsWUFBQSxDQUFBcEIsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lL2VkaXRvci4wYzkzZGViOWY4NTNmNWNlOTVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0VkaXRvci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgYWN0aW9uQnV0dG9ucyA9IFtcclxuICBcIkJvbGRcIixcclxuICBcIkl0YWxpY1wiLFxyXG4gIFwiU3RyaWtlXCIsXHJcbiAgXCJTdWJcIixcclxuICBcIlN1cFwiLFxyXG4gIFwiVW5kZXJMaW5lXCIsXHJcbiAgXCJJbnNlcnRJbWFnZVwiLFxyXG4gIFwiQmxvY2tRdW90ZVwiLFxyXG5dO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyQ2xhc3MgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaGFuZGxlQWN0aW9ucyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSAhPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmlkXHJcbiAgICAgICAgc3dpdGNoKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvbGQnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJib2xkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib2xkIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaXRhbGljJzpcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaXRhbGljXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWMgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdHJpa2UnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdHJpa2V0aHJvdWdoXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdHJpa2UgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdWInOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJzdWJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1YiBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1cCc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN1cGVyc2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdXAgY2xpY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVybGluZSBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2luc2VydGltYWdlJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zZXJ0aW1hZ2VfZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gRmlsZVJlYWRlckV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydEhUTUxcIiwgZmFsc2UsIGA8aW1nIHNyYz1cIiR7ZXZlbnQudGFyZ2V0LnJlc3VsdH1cIiBzdHlsZT1cIm1heC13aWR0aDoxMDAlXCI+YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZpbGVFbG0ub25jaGFuZ2UgPSBGaWxlUmVhZGVyRXZlbnQ7XHJcbiAgICAgICAgICAgICAgICBmaWxlRWxtLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluc2V0IGltYWdlIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxvY2txdW90ZSc6XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImZvcm1hdEJsb2NrXCIsIGZhbHNlLCAnPGJsb2NrcXVvdGU+Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvcm1hdEJsb2NrIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbY29udGFpbmVyQ2xhc3NdfT5cclxuICAgICAgICAgICAgPEVkaXRvckFjdGlvbiBhY3Rpb249e2hhbmRsZUFjdGlvbnN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yVGV4dH0gY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRWRpdG9yQWN0aW9uKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yQWN0aW9uc30gb25DbGljaz17cHJvcHMuYWN0aW9ufT5cclxuICAgICAge2FjdGlvbkJ1dHRvbnMubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gW1wiU3ViXCIsIFwiU3VwXCJdLmluY2x1ZGVzKGRhdGEpID8gZGF0YSA6IGRhdGFbMF07XHJcbiAgICAgICAgc3RhcnQgPSBkYXRhID09PSBcIkluc2VydEltYWdlXCIgPyBcIkltZ1wiIDogc3RhcnQ7XHJcbiAgICAgICAgc3RhcnQgPSBkYXRhID09PSBcIkJsb2NrUXVvdGVcIiA/ICdcIicgOiBzdGFydDtcclxuICAgICAgICBlbG0uaW5uZXJUZXh0ID0gc3RhcnQ7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09IFwiSW5zZXJ0SW1hZ2VcIikge1xyXG4gICAgICAgICAgY29uc3QgbmV3RmlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgIG5ld0ZpbGVFbG0udHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgICAgICAgbmV3RmlsZUVsbS5pZCA9IGAke2RhdGEudG9Mb3dlckNhc2UoKX1fZmlsZWA7XHJcbiAgICAgICAgICBlZGl0b3JBY3Rpb25zLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBuZXdGaWxlRWxtKTtcclxuICAgICAgICAgIG5ld0ZpbGVFbG0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICBuZXdGaWxlRWxtLnN0eWxlLndpZHRoID0gXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtkYXRhLnRvTG93ZXJDYXNlKCl9PntzdGFydH08L2J1dHRvbj5cclxuICAgICAgICAgICAge2RhdGEgPT09IFwiSW5zZXJ0SW1hZ2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD17YCR7ZGF0YS50b0xvd2VyQ2FzZSgpfV9maWxlYH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRWRpdG9yLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0VkaXRvci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9FZGl0b3IubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInO1xyXG5pbXBvcnQgeyBtYXRlcmlhbE9jZWFuaWMgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtJztcclxuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yQ29tcG9uZW50KCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RWRpdG9yIGNvbnRhaW5lckNsYXNzPXtcImVkaXRvckNvbnRhaW5lclwifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxoMj5Ib3cgdG8gY2FsbCBFZGl0b3IgY29tcG9uZW50PC9oMj5cclxuICAgICAgPHA+aW1wb3J0IGVkaXRvciBjb21wb25lbnQgYW5kIGNhbGwgaXQ8L3A+XHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cImphdmFzY3JpcHRcIiBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfT5cclxuICB7YFxyXG4gIGltcG9ydCBEYXRhVGFibGUgZnJvbSBcIi4vRGF0YVRhYmxlLmNvbXBvbmVudFwiO1xyXG5cclxuICBmdW5jdGlvbiBEYXRhVGFibGVDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBbdGFibGVEYXRhLCBzZXRUYWJsZURhdGFdID0gdXNlU3RhdGUobW92aWVzKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoKFwiL2FwaS9tb3ZpZXNcIiwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwibW92aWUtZGF0YWJhc2UtaW1kYi1hbHRlcm5hdGl2ZS5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcImQ5Yzg3Zjk5OWFtc2hiNGFmMzA4Mzg0ODFlNzFwMWVhNWYyanNuY2UxZmJjZDY4NGEyXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRUYWJsZURhdGEoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIHRpdGxlPVwiRGF0YSBUYWJsZSBFeGFtcGxlXCJcclxuICAgICAgICAgIHRhYmxlSGVhZGVycz17dGFibGVIZWFkZXJzMn1cclxuICAgICAgICAgIHRhYmxlRGF0YT17dGFibGVEYXRhfVxyXG4gICAgICAgICAgc2VhcmNoRW5hYmxlZD17dHJ1ZX1cclxuICAgICAgICAgIHNlYXJjaEJ5PXtcInRpdGxlXCJ9IC8vIHRhYmxlIGhlYWRlciBrZXkgbmFtZSB3aGljaCBuZWVkcyB0byBiZSBzZWFyY2hlZFxyXG4gICAgICAgICAgcGFnaW5hdGlvbkVuYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICBzZXR0aW5nc0VuYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxuICB9XHJcbiAgYFxyXG4gIH1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuXHJcbiAgICAgIDxoMj5EYXRhIFRhYmxlIGNvbXBvbmVudDwvaDI+XHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cImphdmFzY3JpcHRcIiBzdHlsZT17bWF0ZXJpYWxPY2VhbmljfT5cclxuICAgICAgICB7YCAgICAgICAgXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRGF0YVRhYmxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgQWlGaWxsQ2FyZXREb3duLFxyXG4gIEFpRmlsbENhcmV0VXAsXHJcbiAgQWlGaWxsU2V0dGluZyxcclxuICBBaU91dGxpbmVSaWdodCxcclxuICBBaU91dGxpbmVMZWZ0LFxyXG4gIEFpT3V0bGluZVZlcnRpY2FsTGVmdCxcclxuICBBaU91dGxpbmVWZXJ0aWNhbFJpZ2h0LFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgVG9nZ2xlSW5wdXQgZnJvbSBcIi4uL1RvZ2dsZUlucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBEZWJvdW5jZSB9IGZyb20gXCIuLi9EZWJvdW5jZVwiO1xyXG5cclxuY29uc3QgUHJldiA9IFwicHJldlwiO1xyXG5jb25zdCBOZXh0ID0gXCJuZXh0XCI7XHJcbmNvbnN0IEVuZExlZnQgPSBcImVuZExlZnRcIjtcclxuY29uc3QgRW5kUmlnaHQgPSBcImVuZFJpZ2h0XCI7XHJcblxyXG5mdW5jdGlvbiBUYWJsZUhlYWRlckNsb25lKHRhYmxlSGVhZGVycykge1xyXG4gIGNvbnN0IGRhdGEgPSB7fTtcclxuICBPYmplY3Qua2V5cyh0YWJsZUhlYWRlcnMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICBkYXRhW2tleV0gPSB7IC4uLnRhYmxlSGVhZGVyc1trZXldIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhYmxlUm93c0Nsb25lKHRhYmxlRGF0YSA9IFtdLCBmcm9tLCB0bykge1xyXG4gIGNvbnN0IGRhdGEgPSBbXTtcclxuICBmb3IgKGxldCBpID0gZnJvbTsgaSA8IHRvOyBpKyspIHtcclxuICAgIGRhdGEucHVzaCh7IC4uLnRhYmxlRGF0YVtpXSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEluZmllbGQodGFibGVSb3dzRGF0YSwgc2VhcmNoQnksIHNlYXJjaFZhbHVlKSB7XHJcbiAgcmV0dXJuIHRhYmxlUm93c0RhdGEuZmlsdGVyKChyb3cpID0+IHtcclxuICAgIHJldHVybiByb3dbc2VhcmNoQnldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFUYWJsZSh7XHJcbiAgdGFibGVEYXRhLFxyXG4gIHRhYmxlSGVhZGVycyxcclxuICBvdmVycmlkZVN0eWxlcyxcclxuICB0aXRsZSxcclxuICBzZWFyY2hFbmFibGVkLFxyXG4gIHNlYXJjaEJ5ID0gXCJcIixcclxuICBwYWdpbmF0aW9uRW5hYmxlZCxcclxuICBzZXR0aW5nc0VuYWJsZWQsXHJcbn0pIHtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoMTApO1xyXG4gIGNvbnN0IFtzaG93U2V0dGluZ3MsIHNldFNob3dTZXR0aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhYmxlSGVhZGVyRGF0YSwgc2V0VGFibGVIZWFkZXJEYXRhXSA9IHVzZVN0YXRlKFxyXG4gICAgVGFibGVIZWFkZXJDbG9uZSh0YWJsZUhlYWRlcnMpXHJcbiAgKTtcclxuICBjb25zdCBbdGFibGVSb3dzRGF0YSwgc2V0VGFibGVSb3dzRGF0YV0gPSB1c2VTdGF0ZShcclxuICAgIFRhYmxlUm93c0Nsb25lKHRhYmxlRGF0YSwgMCwgcGFnZVNpemUpXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRhYmxlUm93c0RhdGEoXHJcbiAgICAgIFRhYmxlUm93c0Nsb25lKHRhYmxlRGF0YSwgY3VycmVudFBhZ2UgKiBwYWdlU2l6ZSwgcGFnZVNpemUpXHJcbiAgICApO1xyXG4gIH0sIFt0YWJsZURhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZyb20gPSBjdXJyZW50UGFnZSAqIHBhZ2VTaXplO1xyXG4gICAgY29uc3QgdG8gPSBmcm9tICsgcGFnZVNpemU7XHJcbiAgICBzZXRUYWJsZVJvd3NEYXRhKFRhYmxlUm93c0Nsb25lKHRhYmxlRGF0YSwgZnJvbSwgdG8pKTtcclxuICB9LCBbcGFnZVNpemUsIGN1cnJlbnRQYWdlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNldHRpbmdzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93U2V0dGluZ3MoIXNob3dTZXR0aW5ncyk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlYXJjaEVuYWJsZWQgJiYgc2VhcmNoQnkubGVuZ3RoID09IDApIHtcclxuICAgIHNlYXJjaEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIGFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYSBzZWFyY2ggZmllbGRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldFNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgc2V0VGFibGVIZWFkZXJEYXRhKFRhYmxlSGVhZGVyQ2xvbmUodGFibGVIZWFkZXJzKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gRGVib3VuY2UoKGUpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgbmV3Um93cztcclxuICAgIGlmIChzZWFyY2hWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG5ld1Jvd3MgPSBzZWFyY2hJbmZpZWxkKHRhYmxlRGF0YSwgc2VhcmNoQnksIHNlYXJjaFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1Jvd3MgPSBUYWJsZVJvd3NDbG9uZSh0YWJsZURhdGEsIDAsIHBhZ2VTaXplKTtcclxuICAgIH1cclxuICAgIHNldFRhYmxlUm93c0RhdGEobmV3Um93cyk7XHJcbiAgfSwgNTAwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU29ydGluZyA9IChrZXksIHNvcnRPcmRlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzb3J0aW5nIGJ5XCIsIGtleSwgc29ydE9yZGVyKTtcclxuICAgIC8vIHNvcnQgdGFibGUgUm93cyBEYXRhXHJcbiAgICBjb25zdCBuZXdSb3dzID0gW10uY29uY2F0KHRhYmxlUm93c0RhdGEpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gXCJhc2NcIikge1xyXG4gICAgICAgIHJldHVybiBiW2tleV0gPiBhW2tleV0gPyAxIDogLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGFba2V5XSA+IGJba2V5XSA/IDEgOiAtMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRUYWJsZVJvd3NEYXRhKG5ld1Jvd3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBQcmV2KSB7XHJcbiAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBzZXRDdXJyZW50UGFnZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IE5leHQpIHtcclxuICAgICAgY29uc3QgbWF4UGFnZXMgPSBNYXRoLmZsb29yKHRhYmxlRGF0YS5sZW5ndGggLyBwYWdlU2l6ZSk7XHJcbiAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gbWF4UGFnZXMpIHJldHVybjtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBFbmRMZWZ0KSB7XHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKDApO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IEVuZFJpZ2h0KSB7XHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKE1hdGguZmxvb3IodGFibGVEYXRhLmxlbmd0aCAvIHBhZ2VTaXplKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb21wb25lbnR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlVGl0bGV9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgPFJlbmRlclRhYmxlQ29udHJvbHNcclxuICAgICAgICBzZWFyY2hFbmFibGVkPXtzZWFyY2hFbmFibGVkfVxyXG4gICAgICAgIHNldHRpbmdzRW5hYmxlZD17c2V0dGluZ3NFbmFibGVkfVxyXG4gICAgICAgIHNlYXJjaEJ5PXt0YWJsZUhlYWRlckRhdGFbc2VhcmNoQnldLmxhYmVsfVxyXG4gICAgICAgIGhhbmRsZVNlYXJjaD17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgIGhhbmRsZVNldHRpbmdzQ2xpY2s9e2hhbmRsZVNldHRpbmdzQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb250YWluZXJ9PlxyXG4gICAgICAgIHsvKiBTZXR0aW5ncyBmbGV4cGFuZSBmb3IgdGFibGUgY29sdW1ucyBzaG93IGFuZCBoaWRlIG9wdGlvbnMgKi99XHJcbiAgICAgICAgPFJlbmRlclNldHRpbmdzXHJcbiAgICAgICAgICBzaG93U2V0dGluZ3M9e3Nob3dTZXR0aW5nc31cclxuICAgICAgICAgIHRhYmxlSGVhZGVyPXt0YWJsZUhlYWRlckRhdGF9XHJcbiAgICAgICAgICBzZXRUYWJsZUhlYWRlckRhdGE9e3NldFRhYmxlSGVhZGVyRGF0YX1cclxuICAgICAgICAgIHNldFNob3dTZXR0aW5ncz17c2V0U2hvd1NldHRpbmdzfVxyXG4gICAgICAgICAgcmVzZXRTZXR0aW5ncz17cmVzZXRTZXR0aW5nc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVPdmVyZmxvd30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29udGVudH0+XHJcbiAgICAgICAgICAgIDxSZW5kZXJUYWJsZUhlYWRlclxyXG4gICAgICAgICAgICAgIHRhYmxlSGVhZGVycz17dGFibGVIZWFkZXJEYXRhfVxyXG4gICAgICAgICAgICAgIGhhbmRsZVNvcnRpbmc9e2hhbmRsZVNvcnRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSZW5kZXJUYWJsZVJvd3NcclxuICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgIHRhYmxlRGF0YT17dGFibGVSb3dzRGF0YX1cclxuICAgICAgICAgICAgICB0YWJsZUhlYWRlcnM9e3RhYmxlSGVhZGVyRGF0YX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwYWdpbmF0aW9uRW5hYmxlZCAmJiAoXHJcbiAgICAgICAgICAgICAgPFJlbmRlclBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgIHNldFBhZ2VTaXplPXtzZXRQYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICB0b3RhbENvbnRlbnRMZW49e3RhYmxlRGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJQYWdpbmF0aW9uKHtcclxuICBwYWdlU2l6ZSxcclxuICBzZXRQYWdlU2l6ZSxcclxuICBoYW5kbGVQYWdlQ2hhbmdlLFxyXG4gIGN1cnJlbnRQYWdlLFxyXG4gIHRvdGFsQ29udGVudExlbixcclxufSkge1xyXG4gIGNvbnN0IHBhZ2VMZW5BcnIgPSBbMTAsIDE1LCAyMCwgMjUsIDMwXTtcclxuICBjb25zdCBtYXhQYWdlcyA9IE1hdGguZmxvb3IodG90YWxDb250ZW50TGVuIC8gcGFnZVNpemUpO1xyXG4gIGNvbnN0IHN0YXJ0RnJvbSA9IGN1cnJlbnRQYWdlICogcGFnZVNpemU7XHJcbiAgbGV0IGVuZFRvID0gc3RhcnRGcm9tICsgcGFnZVNpemU7XHJcbiAgaWYgKGVuZFRvID4gdG90YWxDb250ZW50TGVuKSBlbmRUbyA9IHRvdGFsQ29udGVudExlbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvblNpemVDb250aW5hZXJ9PlxyXG4gICAgICAgIDxzcGFuPlJvd3MgcGVyIHBhZ2U6IDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRQYWdlU2l6ZShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UoRW5kTGVmdCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwYWdlTGVuQXJyLm1hcCgobGVuKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2xlbn0gdmFsdWU9e2xlbn0+XHJcbiAgICAgICAgICAgICAgICB7bGVufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudENvbnRlbnR9PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge3N0YXJ0RnJvbX0gLSB7ZW5kVG99IG9mIHt0b3RhbENvbnRlbnRMZW59XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9ufT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiJFwie2N1cnJlbnRQYWdlID09PSAwICYmIHN0eWxlcy5kZWFjdGl2ZX19PlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShFbmRMZWZ0KX0+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVWZXJ0aWNhbFJpZ2h0IC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKFByZXYpfT5cclxuICAgICAgICAgICAgPEFpT3V0bGluZUxlZnQgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcIiRcIntlbmRUbyA9PT0gdG90YWxDb250ZW50TGVuICYmIHN0eWxlcy5kZWFjdGl2ZX19PlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShOZXh0KX0+XHJcbiAgICAgICAgICAgIDxBaU91dGxpbmVSaWdodCAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShFbmRSaWdodCl9PlxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lVmVydGljYWxMZWZ0IC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlclRhYmxlQ29udHJvbHMoe1xyXG4gIHNlYXJjaEVuYWJsZWQsXHJcbiAgc2V0dGluZ3NFbmFibGVkLFxyXG4gIHNlYXJjaEJ5LFxyXG4gIGhhbmRsZVNldHRpbmdzQ2xpY2ssXHJcbiAgaGFuZGxlU2VhcmNoLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb250cm9sc0NvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICB7c2VhcmNoRW5hYmxlZCAmJiAoXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1NlYXJjaGJ5IFwiJFwie3NlYXJjaEJ5fX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVTZXR0aW5nc30+XHJcbiAgICAgICAge3NldHRpbmdzRW5hYmxlZCAmJiA8QWlGaWxsU2V0dGluZyBvbkNsaWNrPXtoYW5kbGVTZXR0aW5nc0NsaWNrfSAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW5kZXJTZXR0aW5ncyh7XHJcbiAgc2hvd1NldHRpbmdzLFxyXG4gIHRhYmxlSGVhZGVyLFxyXG4gIHNldFRhYmxlSGVhZGVyRGF0YSxcclxuICBzZXRTaG93U2V0dGluZ3MsXHJcbiAgcmVzZXRTZXR0aW5ncyxcclxufSkge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHNldFRhYmxlSGVhZGVyRGF0YSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgIHByZXZTdGF0ZVtrZXldLnZpc2libGUgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYXBwbHkgY2xpY2tlZFwiKTtcclxuICAgIHNldFNob3dTZXR0aW5ncyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgcmVzZXRTZXR0aW5ncygpO1xyXG4gICAgc2V0U2hvd1NldHRpbmdzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1wiJFwie3Nob3dTZXR0aW5ncyA/IHN0eWxlcy5zaG93U2V0dGluZ3MgOiBcImhpZGVcIn0gXCIkXCJ7XHJcbiAgICAgICAgc3R5bGVzLnNldHRpbmdzQ29udGFpbmVyXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2V0dGluZ3NUaXRsZX0+U2V0dGluZ3M8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc0NvbnRlbnR9PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh0YWJsZUhlYWRlcikubWFwKChrZXkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzUm93fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc0xhYmVsfT57dGFibGVIZWFkZXJba2V5XS5sYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgPFRvZ2dsZUlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2tleX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICBpbml0aWFsU3RhdGU9e3RhYmxlSGVhZGVyW2tleV0udmlzaWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZXR0aW5nc0FjdGlvbnN9PlxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkFwcGx5XCIgb25DbGljaz17aGFuZGxlQXBwbHl9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2FuY2VsXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbmRlclRhYmxlSGVhZGVyKHsgdGFibGVIZWFkZXJzLCBoYW5kbGVTb3J0aW5nIH0pIHtcclxuICBjb25zdCBbc29ydEtleSwgc2V0U29ydEtleV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc29ydE9yZGVyLCBzZXRTb3J0T3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlU29ydCA9IChrZXkpID0+IHtcclxuICAgIGlmIChzb3J0S2V5ID09PSBrZXkpIHtcclxuICAgICAgc2V0U29ydE9yZGVyKHNvcnRPcmRlciA9PT0gXCJhc2NcIiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTb3J0T3JkZXIoXCJhc2NcIik7XHJcbiAgICB9XHJcbiAgICBzZXRTb3J0S2V5KGtleSk7XHJcbiAgICBoYW5kbGVTb3J0aW5nKGtleSwgc29ydE9yZGVyKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZnMgPSBbXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiJFwie3N0eWxlcy50YWJsZUhlYWRlcn19PlxyXG4gICAgICB7T2JqZWN0LmtleXModGFibGVIZWFkZXJzKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGxhYmVsLCBtaW5XaWR0aCwgdmlzaWJsZSwgc29ydGFibGUgfSA9IHRhYmxlSGVhZGVyc1trZXldO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB2aXNpYmxlICYmIChcclxuICAgICAgICAgICAgPFJlbmRlclRhYmxlSGVhZGVyQ2VsbFxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICByZWZzPXtyZWZzfVxyXG4gICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgIGhhbmRsZVNvcnQ9eygpID0+IGhhbmRsZVNvcnQoa2V5KX1cclxuICAgICAgICAgICAgICBzb3J0ZWQ9e3NvcnRLZXkgPT09IGtleX1cclxuICAgICAgICAgICAgICBzb3J0T3JkZXI9e3NvcnRPcmRlcn1cclxuICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgbWluV2lkdGg9e21pbldpZHRofVxyXG4gICAgICAgICAgICAgIHNvcnRhYmxlPXtzb3J0YWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJlbmRlclRhYmxlSGVhZGVyQ2VsbCA9ICh7XHJcbiAgaW5kZXgsXHJcbiAgcmVmcyxcclxuICBsYWJlbCxcclxuICBtaW5XaWR0aCxcclxuICBzb3J0YWJsZSxcclxuICBoYW5kbGVTb3J0LFxyXG4gIHNvcnRlZCxcclxuICBzb3J0T3JkZXIsXHJcbn0pID0+IHtcclxuICBjb25zdCByZXNpemVSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcmVzaXplQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzaXplID0gKGUpID0+IHtcclxuICAgICAgaWYgKHJlc2l6ZUNvbnRhaW5lclJlZiAmJiByZXNpemVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gZS5wYWdlWCAtIHJlc2l6ZUNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgY29uc3QgbmV3V2lkdGggPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHJlc2l6ZUNvbnRhaW5lclJlZi5jdXJyZW50LCBcIlwiKS53aWR0aCkgKyBkeCArXCJweFwiO1xyXG4gICAgICAgIHJlc2l6ZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChyZXNpemVSZWYgJiYgcmVzaXplUmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVzaXplUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCByZXNpemUsIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG4gICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICBjb25zdCBtb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByZXNpemUpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcclxuICAgICAgICBpZiAocmVzaXplUmVmICYmIHJlc2l6ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICByZXNpemVSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHJlc2l6ZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPXtsYWJlbH1cclxuICAgICAga2V5PXtsYWJlbH1cclxuICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IG1pbldpZHRoIH19XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlSGVhZGVySXRlbX1cclxuICAgICAgcmVmPXtyZXNpemVDb250YWluZXJSZWZ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVIZWFkZXJDb250ZW50fSBvbkNsaWNrPXtoYW5kbGVTb3J0fT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZXJIZWFkZXJJdGVtTGFiZWx9PntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAge3NvcnRhYmxlICYmIChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCIkXCJ7c3R5bGVzLnNvcnRhYmxlSWNvbnN9IFwiJFwie1xyXG4gICAgICAgICAgICAgIHNvcnRlZCAmJiBzdHlsZXMuc29ydGFibGVJY29uQWN0aXZlXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzb3J0ZWQgJiYgc29ydE9yZGVyID09PSBcImFzY1wiICYmIDxBaUZpbGxDYXJldFVwIC8+fVxyXG4gICAgICAgICAgICB7c29ydGVkICYmIHNvcnRPcmRlciA9PT0gXCJkZXNjXCIgJiYgPEFpRmlsbENhcmV0RG93biAvPn1cclxuICAgICAgICAgICAgeyFzb3J0ZWQgJiYgPEFpRmlsbENhcmV0VXAgLz59XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJhZ0JvcmRlcn0gcmVmPXtyZXNpemVSZWZ9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFJlbmRlclRhYmxlUm93cyh7IHRhYmxlSGVhZGVycywgdGFibGVEYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd3N9PlxyXG4gICAgICB7dGFibGVEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0gY2xhc3NOYW1lPXtcIiRcIntzdHlsZXMudGFibGVSb3d9IFwiJFwie3N0eWxlcy5yb3dTdHlsZX19PlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKGRhdGEpLm1hcChcclxuICAgICAgICAgICAgKGtleSkgPT5cclxuICAgICAgICAgICAgICAodGFibGVIZWFkZXJzW2tleV0gJiYgdGFibGVIZWFkZXJzW2tleV0udmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogdGFibGVIZWFkZXJzW2tleV0ubWluV2lkdGggfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVSb3dJdGVtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YVtrZXldfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSkgfHxcclxuICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbiAgICAgICAgYH1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuXHJcbiAgICAgIDxwPk5vdGU6IFBsZWFzZSByZXBsYWNlIFwiJFwiIHdpdGggYCQgaWNvbjwvcD5cclxuXHJcbiAgICAgIDxoMj5TdHlsZSB3aXRoIHNjc3M8L2gyPlxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9XCJzY3NzXCIgc3R5bGU9e21hdGVyaWFsT2NlYW5pY30+XHJcbntgICAgICAgXHJcbi50YWJsZUNvbXBvbmVudCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgLnRhYmxlVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAudGFibGVDb250cm9sc0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgLW1vei1ib3gtYWxpZ246IGVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XHJcblxyXG4gICAgLnNlYXJjaENvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuXHJcbiAgICAgIC5zZWFyY2hJbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYmxlU2V0dGluZ3Mge1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgIC5kZWFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNkZGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZUNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XHJcblxyXG4gICAgLnNob3dTZXR0aW5ncyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNldHRpbmdzQ29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FhYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgLnNldHRpbmdzVGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2V0dGluZ3NSb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2V0dGluZ3NBY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlT3ZlcmZsb3cge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICBvdmVyZmxvdzogYXV0byBoaWRkZW47XHJcblxyXG4gICAgICAudGFibGVDb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIFxyXG4gICAgICAgIC5yb3dTdHlsZSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC50YWJsZUhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnRhYmxlSGVhZGVySXRlbSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAudGFibGVIZWFkZXJDb250ZW50IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgICAgICAgLnRhYmxlckhlYWRlckl0ZW1MYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAuc29ydGFibGVJY29ucyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgJjpob3ZlciAuc29ydGFibGVJY29ucywgLnNvcnRhYmxlSWNvbnMuc29ydGFibGVJY29uQWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRyYWdCb3JkZXIge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGVSb3dzIHtcclxuICAgICAgICAgIC50YWJsZVJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnRhYmxlUm93SXRlbSB7XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gfVxyXG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRWRpdG9yX2VkaXRvckNvbnRhaW5lcl9fM2QyOV8ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkVkaXRvcl9lZGl0b3JDb250YWluZXJfXzNkMjlfIC5FZGl0b3JfZWRpdG9yQWN0aW9uc19fMzhlMTcge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbiAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLkVkaXRvcl9lZGl0b3JDb250YWluZXJfXzNkMjlfIC5FZGl0b3JfZWRpdG9yQWN0aW9uc19fMzhlMTcgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLkVkaXRvcl9lZGl0b3JDb250YWluZXJfXzNkMjlfIC5FZGl0b3JfZWRpdG9yQWN0aW9uc19fMzhlMTcgYnV0dG9uIC5FZGl0b3JfaWNvbl9fMk50d1Yge1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcbi5FZGl0b3JfZWRpdG9yQ29udGFpbmVyX18zZDI5XyAuRWRpdG9yX2VkaXRvclRleHRfXzIxYWhNIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5FZGl0b3JfZWRpdG9yQ29udGFpbmVyX18zZDI5XyAuRWRpdG9yX2VkaXRvclRleHRfXzIxYWhNIGJsb2NrcXVvdGUge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2NjO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRWRpdG9yLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO09BQUEsa0JBQUE7QUFDSjtBQUNJO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO09BQUEsMEJBQUE7QUFDUjtBQUNRO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO09BQUEsdUJBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQ1k7RUFDSSxXQUFBO0FBQ2hCO0FBSUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0tBQUEsMkJBQUE7VUFBQSxzQkFBQTtBQUZSO0FBSVE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZWRpdG9yQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgICAuZWRpdG9yQWN0aW9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXHJcXG4gICAgXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIC5pY29ue1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5lZGl0b3JUZXh0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBcXHJcXG4gICAgICAgIGJsb2NrcXVvdGUge1xcclxcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NjYztcXHJcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJlZGl0b3JDb250YWluZXJcIjogXCJFZGl0b3JfZWRpdG9yQ29udGFpbmVyX18zZDI5X1wiLFxuXHRcImVkaXRvckFjdGlvbnNcIjogXCJFZGl0b3JfZWRpdG9yQWN0aW9uc19fMzhlMTdcIixcblx0XCJpY29uXCI6IFwiRWRpdG9yX2ljb25fXzJOdHdWXCIsXG5cdFwiZWRpdG9yVGV4dFwiOiBcIkVkaXRvcl9lZGl0b3JUZXh0X18yMWFoTVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBFZGl0b3JDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FZGl0b3IvaW5kZXguanMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuXHJcbmZ1bmN0aW9uIEVkaXRvcigpIHtcclxuICByZXR1cm4gPExheW91dD48RWRpdG9yQ29tcG9uZW50IC8+PC9MYXlvdXQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjsiXSwic291cmNlUm9vdCI6IiJ9