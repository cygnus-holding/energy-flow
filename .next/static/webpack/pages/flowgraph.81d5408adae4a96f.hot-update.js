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

/***/ "./components/Flow/InflowAddNode.tsx":
/*!*******************************************!*\
  !*** ./components/Flow/InflowAddNode.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n\n\n\nconst mediumOptions = [\n    {\n        value: \"option1\",\n        label: \"Option 1\"\n    },\n    {\n        value: \"option2\",\n        label: \"Option 2\"\n    },\n    {\n        value: \"option3\",\n        label: \"Option 3\"\n    }\n];\nconst unitOptions = [\n    {\n        value: \"unit1\",\n        label: \"Unit 1\"\n    },\n    {\n        value: \"unit2\",\n        label: \"Unit 2\"\n    },\n    {\n        value: \"unit3\",\n        label: \"Unit 3\"\n    }\n];\nfunction InflowAddNode() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-2 shadow-md rounded-md bg-white border-2 border-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-lg mb-2 text-center\",\n                children: \"INFLOW ADD\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold\",\n                        children: \"Medium:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-full p-1 rounded border border-gray-300\",\n                        children: mediumOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: option.value,\n                                children: option.label\n                            }, option.value, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-2 mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold\",\n                                children: \"Value:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full p-1 rounded border border-gray-300\",\n                                type: \"number\",\n                                step: \"0.01\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-bold\",\n                                children: \"Unit:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"w-full p-1 rounded border border-gray-300\",\n                                children: unitOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: option.value,\n                                        children: option.label\n                                    }, option.value, false, {\n                                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold\",\n                        children: \"Temperature [*C]:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full p-1 rounded border border-gray-300\",\n                        type: \"number\",\n                        step: \"0.01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold\",\n                        children: \"Pressure [kPa]:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full p-1 rounded border border-gray-300\",\n                        type: \"number\",\n                        step: \"0.01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"inflow\",\n                style: {\n                    background: \"#555\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"medium\",\n                style: {\n                    background: \"#555\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"value\",\n                style: {\n                    background: \"#555\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"unit\",\n                style: {\n                    background: \"#555\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"temperature\",\n                style: {\n                    background: \"#555\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"pressure\",\n                style: {\n                    background: \"#555\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = InflowAddNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(InflowAddNode));\nvar _c, _c1;\n$RefreshReg$(_c, \"InflowAddNode\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtnQkFBTzs7Ozs7Ozs7Ozs7O0FBSXBDO0tBakZTYjtBQW1GVCxrRkFBZVAsMkNBQUlBLENBQUNPLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbG93L0luZmxvd0FkZE5vZGUudHN4PzVlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhhbmRsZSwgUG9zaXRpb24gfSBmcm9tICdyZWFjdGZsb3cnO1xyXG5cclxuY29uc3QgbWVkaXVtT3B0aW9ucyA9IFtcclxuICB7XHJcbiAgICB2YWx1ZTogJ29wdGlvbjEnLFxyXG4gICAgbGFiZWw6ICdPcHRpb24gMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogJ29wdGlvbjInLFxyXG4gICAgbGFiZWw6ICdPcHRpb24gMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogJ29wdGlvbjMnLFxyXG4gICAgbGFiZWw6ICdPcHRpb24gMycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHVuaXRPcHRpb25zID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAndW5pdDEnLFxyXG4gICAgbGFiZWw6ICdVbml0IDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6ICd1bml0MicsXHJcbiAgICBsYWJlbDogJ1VuaXQgMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogJ3VuaXQzJyxcclxuICAgIGxhYmVsOiAnVW5pdCAzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSW5mbG93QWRkTm9kZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgc2hhZG93LW1kIHJvdW5kZWQtbWQgYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgbWItMiB0ZXh0LWNlbnRlclwiPklORkxPVyBBREQ8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TWVkaXVtOjwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIHAtMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgIHttZWRpdW1PcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yIG1iLTJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5WYWx1ZTo8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC4wMVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VW5pdDo8L2Rpdj5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIHAtMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cclxuICAgICAgICAgICAge3VuaXRPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VGVtcGVyYXR1cmUgWypDXTo8L2Rpdj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIHAtMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMDFcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+UHJlc3N1cmUgW2tQYV06PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBwLTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCIwLjAxXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8SGFuZGxlXHJcbiAgICAgICAgdHlwZT1cInNvdXJjZVwiXHJcbiAgICAgICAgcG9zaXRpb249e1Bvc2l0aW9uLkJvdHRvbX1cclxuICAgICAgICBpZD1cImluZmxvd1wiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJyM1NTUnIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIYW5kbGVcclxuICAgICAgICB0eXBlPVwic291cmNlXCJcclxuICAgICAgICBwb3NpdGlvbj17UG9zaXRpb24uQm90dG9tfVxyXG4gICAgICAgIGlkPVwibWVkaXVtXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzU1NScgfX1cclxuICAgICAgLz5cclxuICAgICAgPEhhbmRsZVxyXG4gICAgICAgIHR5cGU9XCJzb3VyY2VcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtQb3NpdGlvbi5Cb3R0b219XHJcbiAgICAgICAgaWQ9XCJ2YWx1ZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJyM1NTUnIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIYW5kbGVcclxuICAgICAgICB0eXBlPVwic291cmNlXCJcclxuICAgICAgICBwb3NpdGlvbj17UG9zaXRpb24uQm90dG9tfVxyXG4gICAgICAgIGlkPVwidW5pdFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJyM1NTUnIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIYW5kbGVcclxuICAgICAgICB0eXBlPVwic291cmNlXCJcclxuICAgICAgICBwb3NpdGlvbj17UG9zaXRpb24uQm90dG9tfVxyXG4gICAgICAgIGlkPVwidGVtcGVyYXR1cmVcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjNTU1JyB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGFuZGxlXHJcbiAgICAgICAgdHlwZT1cInNvdXJjZVwiXHJcbiAgICAgICAgcG9zaXRpb249e1Bvc2l0aW9uLkJvdHRvbX1cclxuICAgICAgICBpZD1cInByZXNzdXJlXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzU1NScgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oSW5mbG93QWRkTm9kZSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJIYW5kbGUiLCJQb3NpdGlvbiIsIm1lZGl1bU9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwidW5pdE9wdGlvbnMiLCJJbmZsb3dBZGROb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0IiwibWFwIiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwic3RlcCIsInBvc2l0aW9uIiwiQm90dG9tIiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Flow/InflowAddNode.tsx\n"));

/***/ })

});