webpackHotUpdate_N_E("pages/home/carousel",{

/***/ "./components/Carousel/Carousel.component.js":
/*!***************************************************!*\
  !*** ./components/Carousel/Carousel.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/Carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/gkakar/CodeBase/Next JS/widgets_collection/components/Carousel/Carousel.component.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar getHeightAndWidth = function getHeightAndWidth(width, height) {\n  var res = {};\n\n  if (width) {\n    res.width = width;\n  }\n\n  if (height) {\n    res.height = height;\n  }\n\n  return res;\n};\n\nfunction Carousel(_ref) {\n  _s();\n\n  var _this = this;\n\n  var carouselList = _ref.carouselList,\n      container = _ref.container,\n      showDotControls = _ref.showDotControls;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var width = container.width,\n      height = container.height;\n  var containerStyle = getHeightAndWidth(width, height);\n\n  var handleClick = function handleClick(position) {\n    var newActive = position + active;\n\n    if (newActive > carouselList.length - 1) {\n      setActive(0);\n      return;\n    } else if (newActive < 0) {\n      setActive(carouselList.length - 1);\n      return;\n    }\n\n    setActive(newActive);\n  };\n\n  var handleDotClick = function handleDotClick(position) {\n    setActive(position);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselContainer,\n      style: containerStyle,\n      children: [carouselList.map(function (carouselListImtem, index) {\n        if (index === active) {\n          var backgroundImage = carouselListImtem.backgroundImage,\n              backgroundColor = carouselListImtem.backgroundColor,\n              textSection = carouselListImtem.textSection,\n              mediaSection = carouselListImtem.mediaSection,\n              textColor = carouselListImtem.textColor;\n          var image = mediaSection.image,\n              video = mediaSection.video;\n          var backgroundStyle = backgroundImage ? {\n            backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n            backgroundSize: \"cover\"\n          } : {\n            background: backgroundColor\n          };\n          var textStyle = textColor ? {\n            color: textColor\n          } : {};\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselSlide,\n            style: backgroundStyle,\n            children: [textSection && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselTextSection,\n              style: textStyle,\n              children: textSection\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 35\n            }, _this), mediaSection ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselMediaSection,\n              children: image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                src: image,\n                alt: \"carousel-image\",\n                className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mediaControls\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 34\n              }, _this) || video && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"video\", {\n                src: video,\n                controls: true,\n                className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mediaControls\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 35\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 21\n            }, _this) : null]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this);\n        }\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselControls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselControlsLeft,\n          onClick: function onClick() {\n            return handleClick(-1);\n          },\n          children: \"\\u276E\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselControlsRight,\n          onClick: function onClick() {\n            return handleClick(1);\n          },\n          children: \"\\u276F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), showDotControls && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselDotControls,\n        children: carouselList.map(function (carouselListImtem, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.carouselDotControlItem, \" \").concat(active === index ? _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : \"\"),\n            onClick: function onClick() {\n              return handleDotClick(index);\n            }\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Carousel, \"LYMHw6xE17pbh6ai9qaw76OM0Ms=\");\n\n_c = Carousel;\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5jb21wb25lbnQuanM/YWZiMSJdLCJuYW1lcyI6WyJnZXRIZWlnaHRBbmRXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzIiwiQ2Fyb3VzZWwiLCJjYXJvdXNlbExpc3QiLCJjb250YWluZXIiLCJzaG93RG90Q29udHJvbHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvbnRhaW5lclN0eWxlIiwiaGFuZGxlQ2xpY2siLCJwb3NpdGlvbiIsIm5ld0FjdGl2ZSIsImxlbmd0aCIsImhhbmRsZURvdENsaWNrIiwic3R5bGVzIiwiY2Fyb3VzZWxDb250YWluZXIiLCJtYXAiLCJjYXJvdXNlbExpc3RJbXRlbSIsImluZGV4IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFNlY3Rpb24iLCJtZWRpYVNlY3Rpb24iLCJ0ZXh0Q29sb3IiLCJpbWFnZSIsInZpZGVvIiwiYmFja2dyb3VuZFN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kIiwidGV4dFN0eWxlIiwiY29sb3IiLCJjYXJvdXNlbFNsaWRlIiwiY2Fyb3VzZWxUZXh0U2VjdGlvbiIsImNhcm91c2VsTWVkaWFTZWN0aW9uIiwibWVkaWFDb250cm9scyIsImNhcm91c2VsQ29udHJvbHMiLCJjYXJvdXNlbENvbnRyb2xzTGVmdCIsImNhcm91c2VsQ29udHJvbHNSaWdodCIsImNhcm91c2VsRG90Q29udHJvbHMiLCJjYXJvdXNlbERvdENvbnRyb2xJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzNDLE1BQU1DLEdBQUcsR0FBRyxFQUFaOztBQUNBLE1BQUlGLEtBQUosRUFBVztBQUNURSxPQUFHLENBQUNGLEtBQUosR0FBWUEsS0FBWjtBQUNEOztBQUNELE1BQUlDLE1BQUosRUFBWTtBQUNWQyxPQUFHLENBQUNELE1BQUosR0FBYUEsTUFBYjtBQUNEOztBQUNELFNBQU9DLEdBQVA7QUFDRCxDQVREOztBQVdlLFNBQVNDLFFBQVQsT0FBZ0U7QUFBQTs7QUFBQTs7QUFBQSxNQUE1Q0MsWUFBNEMsUUFBNUNBLFlBQTRDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQzdFLGtCQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBT1QsS0FBUCxHQUF3QkssU0FBeEIsQ0FBT0wsS0FBUDtBQUFBLE1BQWNDLE1BQWQsR0FBd0JJLFNBQXhCLENBQWNKLE1BQWQ7QUFDQSxNQUFNUyxjQUFjLEdBQUdYLGlCQUFpQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FBeEM7O0FBRUEsTUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2hDLFFBQU1DLFNBQVMsR0FBR0QsUUFBUSxHQUFHSixNQUE3Qjs7QUFDQSxRQUFHSyxTQUFTLEdBQUdULFlBQVksQ0FBQ1UsTUFBYixHQUFzQixDQUFyQyxFQUF3QztBQUN0Q0wsZUFBUyxDQUFDLENBQUQsQ0FBVDtBQUNBO0FBQ0QsS0FIRCxNQUdPLElBQUdJLFNBQVMsR0FBRyxDQUFmLEVBQWtCO0FBQ3ZCSixlQUFTLENBQUNMLFlBQVksQ0FBQ1UsTUFBYixHQUFzQixDQUF2QixDQUFUO0FBQ0E7QUFDRDs7QUFFREwsYUFBUyxDQUFDSSxTQUFELENBQVQ7QUFDRCxHQVhEOztBQWFBLE1BQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsUUFBRCxFQUFjO0FBQ25DSCxhQUFTLENBQUNHLFFBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUksNERBQU0sQ0FBQ0MsaUJBQXZCO0FBQTBDLFdBQUssRUFBRVAsY0FBakQ7QUFBQSxpQkFDR04sWUFBWSxDQUFDYyxHQUFiLENBQWlCLFVBQUNDLGlCQUFELEVBQW9CQyxLQUFwQixFQUE4QjtBQUM5QyxZQUFHQSxLQUFLLEtBQUtaLE1BQWIsRUFBcUI7QUFDbkIsY0FBUWEsZUFBUixHQUFtRkYsaUJBQW5GLENBQVFFLGVBQVI7QUFBQSxjQUF5QkMsZUFBekIsR0FBbUZILGlCQUFuRixDQUF5QkcsZUFBekI7QUFBQSxjQUEwQ0MsV0FBMUMsR0FBbUZKLGlCQUFuRixDQUEwQ0ksV0FBMUM7QUFBQSxjQUF1REMsWUFBdkQsR0FBbUZMLGlCQUFuRixDQUF1REssWUFBdkQ7QUFBQSxjQUFxRUMsU0FBckUsR0FBbUZOLGlCQUFuRixDQUFxRU0sU0FBckU7QUFDQSxjQUFRQyxLQUFSLEdBQXlCRixZQUF6QixDQUFRRSxLQUFSO0FBQUEsY0FBZUMsS0FBZixHQUF5QkgsWUFBekIsQ0FBZUcsS0FBZjtBQUNBLGNBQU1DLGVBQWUsR0FBR1AsZUFBZSxHQUFHO0FBQ3hDQSwyQkFBZSxnQkFBU0EsZUFBVCxNQUR5QjtBQUV4Q1EsMEJBQWMsRUFBRTtBQUZ3QixXQUFILEdBR25DO0FBQUVDLHNCQUFVLEVBQUVSO0FBQWQsV0FISjtBQUlBLGNBQU1TLFNBQVMsR0FBR04sU0FBUyxHQUFHO0FBQUVPLGlCQUFLLEVBQUVQO0FBQVQsV0FBSCxHQUEwQixFQUFyRDtBQUNBLDhCQUNFO0FBQWlCLHFCQUFTLEVBQUVULDREQUFNLENBQUNpQixhQUFuQztBQUFrRCxpQkFBSyxFQUFFTCxlQUF6RDtBQUFBLHVCQUVJTCxXQUFXLGlCQUFLO0FBQUssdUJBQVMsRUFBRVAsNERBQU0sQ0FBQ2tCLG1CQUF2QjtBQUE0QyxtQkFBSyxFQUFFSCxTQUFuRDtBQUFBLHdCQUErRFI7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGcEIsRUFLSUMsWUFBWSxnQkFDVjtBQUFLLHVCQUFTLEVBQUVSLDREQUFNLENBQUNtQixvQkFBdkI7QUFBQSx3QkFDSVQsS0FBSyxpQkFBSTtBQUFLLG1CQUFHLEVBQUVBLEtBQVY7QUFBaUIsbUJBQUcsRUFBQyxnQkFBckI7QUFBc0MseUJBQVMsRUFBRVYsNERBQU0sQ0FBQ29CO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVYsSUFDRVQsS0FBSyxpQkFBSTtBQUFPLG1CQUFHLEVBQUVBLEtBQVo7QUFBbUIsd0JBQVEsTUFBM0I7QUFBNEIseUJBQVMsRUFBRVgsNERBQU0sQ0FBQ29CO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVLEdBS1IsSUFWUjtBQUFBLGFBQVVoQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFlRDtBQUNGLE9BekJBLENBREgsZUEyQkU7QUFBSyxpQkFBUyxFQUFFSiw0REFBTSxDQUFDcUIsZ0JBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFckIsNERBQU0sQ0FBQ3NCLG9CQUF2QjtBQUE2QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU0zQixXQUFXLENBQUMsQ0FBQyxDQUFGLENBQWpCO0FBQUEsV0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVLLDREQUFNLENBQUN1QixxQkFBdkI7QUFBOEMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNNUIsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkYsRUErQkdMLGVBQWUsaUJBQ2Q7QUFBSyxpQkFBUyxFQUFFVSw0REFBTSxDQUFDd0IsbUJBQXZCO0FBQUEsa0JBQ0dwQyxZQUFZLENBQUNjLEdBQWIsQ0FBaUIsVUFBQ0MsaUJBQUQsRUFBb0JDLEtBQXBCLEVBQThCO0FBQzlDLDhCQUNFO0FBQWlCLHFCQUFTLFlBQUtKLDREQUFNLENBQUN5QixzQkFBWixjQUFzQ2pDLE1BQU0sS0FBS1ksS0FBWCxHQUFtQkosNERBQU0sQ0FBQ1IsTUFBMUIsR0FBbUMsRUFBekUsQ0FBMUI7QUFBeUcsbUJBQU8sRUFBRTtBQUFBLHFCQUFNTyxjQUFjLENBQUNLLEtBQUQsQ0FBcEI7QUFBQTtBQUFsSCxhQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFHRCxTQUpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2Q0Q7O0dBbkV1QmpCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLmNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Nhcm91c2VsLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IGdldEhlaWdodEFuZFdpZHRoID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgY29uc3QgcmVzID0ge31cbiAgaWYgKHdpZHRoKSB7XG4gICAgcmVzLndpZHRoID0gd2lkdGg7XG4gIH1cbiAgaWYgKGhlaWdodCkge1xuICAgIHJlcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoeyBjYXJvdXNlbExpc3QsIGNvbnRhaW5lciwgc2hvd0RvdENvbnRyb2xzIH0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSBjb250YWluZXI7XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0gZ2V0SGVpZ2h0QW5kV2lkdGgod2lkdGgsIGhlaWdodCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBuZXdBY3RpdmUgPSBwb3NpdGlvbiArIGFjdGl2ZTtcbiAgICBpZihuZXdBY3RpdmUgPiBjYXJvdXNlbExpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0QWN0aXZlKDApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZihuZXdBY3RpdmUgPCAwKSB7XG4gICAgICBzZXRBY3RpdmUoY2Fyb3VzZWxMaXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZShuZXdBY3RpdmUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRG90Q2xpY2sgPSAocG9zaXRpb24pID0+IHtcbiAgICBzZXRBY3RpdmUocG9zaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbENvbnRhaW5lcn0gc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAge2Nhcm91c2VsTGlzdC5tYXAoKGNhcm91c2VsTGlzdEltdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmKGluZGV4ID09PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIHRleHRTZWN0aW9uLCBtZWRpYVNlY3Rpb24sIHRleHRDb2xvciB9ID0gY2Fyb3VzZWxMaXN0SW10ZW07XG4gICAgICAgICAgICBjb25zdCB7IGltYWdlLCB2aWRlbyB9ID0gbWVkaWFTZWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0gYmFja2dyb3VuZEltYWdlID8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICB9IDogeyBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IgfTtcbiAgICAgICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHRleHRDb2xvciA/IHsgY29sb3I6IHRleHRDb2xvciB9IDoge307XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU2xpZGV9IHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHRTZWN0aW9uICYmICg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsVGV4dFNlY3Rpb259IHN0eWxlPXt0ZXh0U3R5bGV9Pnt0ZXh0U2VjdGlvbn08L2Rpdj4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lZGlhU2VjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbE1lZGlhU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgeyhpbWFnZSAmJiA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cImNhcm91c2VsLWltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFDb250cm9sc30gLz4pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodmlkZW8gJiYgPHZpZGVvIHNyYz17dmlkZW99IGNvbnRyb2xzIGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhQ29udHJvbHN9Lz4pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbENvbnRyb2xzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsQ29udHJvbHNMZWZ0fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygtMSl9PiYjMTAwOTQ7PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbENvbnRyb2xzUmlnaHR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDEpfT4mIzEwMDk1OzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dEb3RDb250cm9scyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbERvdENvbnRyb2xzfT5cbiAgICAgICAgICAgIHtjYXJvdXNlbExpc3QubWFwKChjYXJvdXNlbExpc3RJbXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcm91c2VsRG90Q29udHJvbEl0ZW19ICR7YWN0aXZlID09PSBpbmRleCA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZURvdENsaWNrKGluZGV4KX0+PC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.component.js\n");

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/image.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false

})