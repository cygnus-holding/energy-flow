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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n\n\n\nconst mediumOptions = [\n    {\n        value: \"option1\",\n        label: \"Option 1\"\n    },\n    {\n        value: \"option2\",\n        label: \"Option 2\"\n    },\n    {\n        value: \"option3\",\n        label: \"Option 3\"\n    }\n];\nconst unitOptions = [\n    {\n        value: \"unit1\",\n        label: \"Unit 1\"\n    },\n    {\n        value: \"unit2\",\n        label: \"Unit 2\"\n    },\n    {\n        value: \"unit3\",\n        label: \"Unit 3\"\n    }\n];\nfunction InflowAddNode() {\n    const outputData = {\n        medium: \"\",\n        value: \"\",\n        unit: \"\",\n        temperature: \"\",\n        pressure: \"\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-2 shadow-md rounded-md bg-white  border-gray-400 text-xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-s mb-2 border-b border-gray-300 pb-2\",\n                children: \"INFLOW ADD\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-medium\",\n                        children: \"Medium:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"w-full p-1 rounded border border-gray-300\",\n                        children: mediumOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: option.value,\n                                children: option.label\n                            }, option.value, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-2 mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-s\",\n                                children: \"Value:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full p-1 rounded border border-gray-300\",\n                                type: \"number\",\n                                step: \"0.01\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-medium\",\n                                children: \"Unit:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"w-full p-1 rounded border border-gray-300\",\n                                children: unitOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: option.value,\n                                        children: option.label\n                                    }, option.value, false, {\n                                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-s\",\n                        children: \"Temperature [*C]:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full p-1 rounded border border-gray-300\",\n                        type: \"number\",\n                        step: \"0.01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 border-b border-gray-300 pb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-s\",\n                        children: \"Pressure [kPa]:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full p-1 rounded border border-gray-300\",\n                        type: \"number\",\n                        step: \"0.01\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" border-gray-300 pb-2 flex justify-end text-sm font-medium\",\n                children: \"Output\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Bottom,\n                id: \"out\",\n                data: outputData,\n                style: {\n                    background: \"#555\",\n                    width: \"10px\",\n                    height: \"10px\",\n                    right: \"65px\",\n                    bottom: \"-4px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"target\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Top,\n                id: \"in\",\n                style: {\n                    background: \"#555\",\n                    width: \"10px\",\n                    height: \"10px\",\n                    top: \"10px\",\n                    left: \"0px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\InflowAddNode.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = InflowAddNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(InflowAddNode));\nvar _c, _c1;\n$RefreshReg$(_c, \"InflowAddNode\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvSW5mbG93QWRkTm9kZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUNTO0FBRTdDLE1BQU1JLGdCQUFnQjtJQUNwQjtRQUNFQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7Q0FDRDtBQUVELE1BQU1DLGNBQWM7SUFDbEI7UUFDRUYsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxTQUFTRTtJQUNQLE1BQU1DLGFBQWE7UUFDakJDLFFBQVE7UUFDUkwsT0FBTztRQUNQTSxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBc0Q7Ozs7OzswQkFFckUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQWM7Ozs7OztrQ0FDN0IsOERBQUNDO3dCQUFPRCxXQUFVO2tDQUNmWCxjQUFjYSxJQUFJLENBQUNDLHVCQUNsQiw4REFBQ0E7Z0NBQTBCYixPQUFPYSxPQUFPYjswQ0FDdENhLE9BQU9aOytCQURHWSxPQUFPYjs7Ozs7Ozs7Ozs7Ozs7OzswQkFPMUIsOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7OzBDQUNDLDhEQUFDQTtnQ0FBSUMsV0FBVTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQ0k7Z0NBQU1KLFdBQVU7Z0NBQTRDSyxNQUFLO2dDQUFTQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBRWxGLDhEQUFDUDs7MENBQ0MsOERBQUNBO2dDQUFJQyxXQUFVOzBDQUFjOzs7Ozs7MENBQzdCLDhEQUFDQztnQ0FBT0QsV0FBVTswQ0FDZlIsWUFBWVUsSUFBSSxDQUFDQyx1QkFDaEIsOERBQUNBO3dDQUEwQmIsT0FBT2EsT0FBT2I7a0RBQ3RDYSxPQUFPWjt1Q0FER1ksT0FBT2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTVCLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFTOzs7Ozs7a0NBQ3hCLDhEQUFDSTt3QkFBTUosV0FBVTt3QkFBNENLLE1BQUs7d0JBQVNDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHbEYsOERBQUNQO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVM7Ozs7OztrQ0FDeEIsOERBQUNJO3dCQUFNSixXQUFVO3dCQUE0Q0ssTUFBSzt3QkFBU0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUdsRiw4REFBQ1A7Z0JBQUlDLFdBQVU7MEJBQTZEOzs7Ozs7MEJBRTVFLDhEQUFDYiw2Q0FBTUE7Z0JBQ0xrQixNQUFLO2dCQUNMRSxVQUFVbkIsK0NBQVFBLENBQUNvQjtnQkFDbkJDLElBQUc7Z0JBQ0hDLE1BQU1oQjtnQkFDTmlCLE9BQU87b0JBQUVDLFlBQVk7b0JBQVFDLE9BQU87b0JBQVFDLFFBQVE7b0JBQVFDLE9BQU87b0JBQVFDLFFBQVE7Z0JBQU87Ozs7OzswQkFFNUYsOERBQUM3Qiw2Q0FBTUE7Z0JBQ0xrQixNQUFLO2dCQUNMRSxVQUFVbkIsK0NBQVFBLENBQUM2QjtnQkFDbkJSLElBQUc7Z0JBQ0hFLE9BQU87b0JBQUVDLFlBQVk7b0JBQVFDLE9BQU87b0JBQVFDLFFBQVE7b0JBQVFJLEtBQUs7b0JBQVFDLE1BQU07Z0JBQU07Ozs7Ozs7Ozs7OztBQUk3RjtLQXBFUzFCO0FBc0VULGtGQUFlUCwyQ0FBSUEsQ0FBQ08sY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zsb3cvSW5mbG93QWRkTm9kZS50c3g/NWVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGFuZGxlLCBQb3NpdGlvbiB9IGZyb20gJ3JlYWN0Zmxvdyc7XHJcblxyXG5jb25zdCBtZWRpdW1PcHRpb25zID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMScsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMicsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMycsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgdW5pdE9wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6ICd1bml0MScsXHJcbiAgICBsYWJlbDogJ1VuaXQgMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogJ3VuaXQyJyxcclxuICAgIGxhYmVsOiAnVW5pdCAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAndW5pdDMnLFxyXG4gICAgbGFiZWw6ICdVbml0IDMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBJbmZsb3dBZGROb2RlKCkge1xyXG4gIGNvbnN0IG91dHB1dERhdGEgPSB7IFxyXG4gICAgbWVkaXVtOiBcIlwiLCBcclxuICAgIHZhbHVlOiBcIlwiLCBcclxuICAgIHVuaXQ6IFwiXCIsIFxyXG4gICAgdGVtcGVyYXR1cmU6IFwiXCIsIFxyXG4gICAgcHJlc3N1cmU6IFwiXCIgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHNoYWRvdy1tZCByb3VuZGVkLW1kIGJnLXdoaXRlICBib3JkZXItZ3JheS00MDAgdGV4dC14c1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXMgbWItMiBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgcGItMlwiPklORkxPVyBBREQ8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5NZWRpdW06PC9kaXY+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAge21lZGl1bU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XHJcbiAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgbWItMlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc1wiPlZhbHVlOjwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBwLTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCIwLjAxXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlVuaXQ6PC9kaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbCBwLTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgIHt1bml0T3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc1wiPlRlbXBlcmF0dXJlIFsqQ106PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBwLTEgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCIgdHlwZT1cIm51bWJlclwiIHN0ZXA9XCIwLjAxXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHBiLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc1wiPlByZXNzdXJlIFtrUGFdOjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC4wMVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9yZGVyLWdyYXktMzAwIHBiLTIgZmxleCBqdXN0aWZ5LWVuZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+T3V0cHV0PC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8SGFuZGxlXHJcbiAgICAgICAgdHlwZT1cInNvdXJjZVwiXHJcbiAgICAgICAgcG9zaXRpb249e1Bvc2l0aW9uLkJvdHRvbX1cclxuICAgICAgICBpZD1cIm91dFwiXHJcbiAgICAgICAgZGF0YT17b3V0cHV0RGF0YX1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzU1NScsIHdpZHRoOiAnMTBweCcsIGhlaWdodDogJzEwcHgnLCByaWdodDogXCI2NXB4XCIsIGJvdHRvbTogXCItNHB4XCIgfX1cclxuICAgICAgLz5cclxuICAgICAgPEhhbmRsZVxyXG4gICAgICAgIHR5cGU9XCJ0YXJnZXRcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtQb3NpdGlvbi5Ub3B9XHJcbiAgICAgICAgaWQ9XCJpblwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJyM1NTUnLCB3aWR0aDogJzEwcHgnLCBoZWlnaHQ6ICcxMHB4JywgdG9wOiBcIjEwcHhcIiwgbGVmdDogXCIwcHhcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhJbmZsb3dBZGROb2RlKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsIkhhbmRsZSIsIlBvc2l0aW9uIiwibWVkaXVtT3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJ1bml0T3B0aW9ucyIsIkluZmxvd0FkZE5vZGUiLCJvdXRwdXREYXRhIiwibWVkaXVtIiwidW5pdCIsInRlbXBlcmF0dXJlIiwicHJlc3N1cmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJtYXAiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJzdGVwIiwicG9zaXRpb24iLCJCb3R0b20iLCJpZCIsImRhdGEiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwiVG9wIiwidG9wIiwibGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/InflowAddNode.tsx\n"));

/***/ })

});