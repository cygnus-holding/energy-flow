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

/***/ "./components/Flow/AnnotationNode.tsx":
/*!********************************************!*\
  !*** ./components/Flow/AnnotationNode.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AnnotationNode(param) {\n    let { data, id } = param;\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.label);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setText(data.label);\n    }, [\n        data.label\n    ]);\n    const handleTextChange = (event)=>{\n        setText(event.target.value);\n    // Here you can also update the text in the parent component or in your store\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-left m-4 bg-white  border-2 border-grey-600 rounded  w-auto shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n            value: text,\n            onChange: handleTextChange\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\AnnotationNode.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\AnnotationNode.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(AnnotationNode, \"iyr3dK5R+5ieXUcpDCvDJLdwqL4=\");\n_c = AnnotationNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(AnnotationNode));\nvar _c, _c1;\n$RefreshReg$(_c, \"AnnotationNode\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvQW5ub3RhdGlvbk5vZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUQ7QUFFekQsU0FBU0ksZUFBZSxLQUFZO1FBQVosRUFBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQUUsR0FBWjs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDRyxLQUFLSTtJQUV0Q04sZ0RBQVNBLENBQUM7UUFDUkssUUFBUUgsS0FBS0k7SUFDZixHQUFHO1FBQUNKLEtBQUtJO0tBQU07SUFFZixNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJILFFBQVFHLE1BQU1DLE9BQU9DO0lBQ3JCLDZFQUE2RTtJQUMvRTtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFTSCxPQUFPTjtZQUFNVSxVQUFVUDs7Ozs7Ozs7Ozs7QUFHdkM7R0FqQlNOO0tBQUFBO0FBbUJULGtGQUFlSCwyQ0FBSUEsQ0FBQ0csZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zsb3cvQW5ub3RhdGlvbk5vZGUudHN4P2M0NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBBbm5vdGF0aW9uTm9kZSh7IGRhdGEsIGlkIH0pIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShkYXRhLmxhYmVsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRleHQoZGF0YS5sYWJlbCk7XHJcbiAgfSwgW2RhdGEubGFiZWxdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gSGVyZSB5b3UgY2FuIGFsc28gdXBkYXRlIHRoZSB0ZXh0IGluIHRoZSBwYXJlbnQgY29tcG9uZW50IG9yIGluIHlvdXIgc3RvcmVcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbS00IGJnLXdoaXRlICBib3JkZXItMiBib3JkZXItZ3JleS02MDAgcm91bmRlZCAgdy1hdXRvIHNoYWRvdy1tZFwiPlxyXG4gICAgICA8dGV4dGFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhBbm5vdGF0aW9uTm9kZSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFubm90YXRpb25Ob2RlIiwiZGF0YSIsImlkIiwidGV4dCIsInNldFRleHQiLCJsYWJlbCIsImhhbmRsZVRleHRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/AnnotationNode.tsx\n"));

/***/ })

});