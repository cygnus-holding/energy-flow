"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/flowgraph",{

/***/ "./components/Flow/InputNode.tsx":
/*!***************************************!*\
  !*** ./components/Flow/InputNode.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction InputNode() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleValueChange = (event)=>{\n        const val = parseInt(event.target.value, 10);\n        setValue(val);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: value,\n                onChange: handleValueChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InputNode.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Right,\n                id: \"out\",\n                data: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InputNode.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InputNode.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(InputNode, \"qPBOvRc2Co1iWTsdTL0g7j/rpjU=\");\n_c = InputNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputNode);\nvar _c;\n$RefreshReg$(_c, \"InputNode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvSW5wdXROb2RlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNLO0FBRTdDLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTSxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTUMsTUFBTUMsU0FBU0YsTUFBTUcsT0FBT04sT0FBTztRQUN6Q0MsU0FBU0c7SUFDWDtJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFTVCxPQUFPQTtnQkFBT1UsVUFBVVI7Ozs7OzswQkFDN0MsOERBQUNMLDZDQUFNQTtnQkFBQ1ksTUFBSztnQkFBU0UsVUFBVWIsK0NBQVFBLENBQUNjO2dCQUFPQyxJQUFHO2dCQUFNQyxNQUFNZDs7Ozs7Ozs7Ozs7O0FBR3JFO0dBZFNEO0tBQUFBO0FBZ0JULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmxvdy9JbnB1dE5vZGUudHN4PzU2ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIYW5kbGUsIFBvc2l0aW9uIH0gZnJvbSAncmVhY3RmbG93JztcclxuXHJcbmZ1bmN0aW9uIElucHV0Tm9kZSgpIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICBzZXRWYWx1ZSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZVZhbHVlQ2hhbmdlfSAvPlxyXG4gICAgICA8SGFuZGxlIHR5cGU9XCJzb3VyY2VcIiBwb3NpdGlvbj17UG9zaXRpb24uUmlnaHR9IGlkPVwib3V0XCIgZGF0YT17dmFsdWV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dE5vZGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGFuZGxlIiwiUG9zaXRpb24iLCJJbnB1dE5vZGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJldmVudCIsInZhbCIsInBhcnNlSW50IiwidGFyZ2V0IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwb3NpdGlvbiIsIlJpZ2h0IiwiaWQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Flow/InputNode.tsx\n"));

/***/ })

});