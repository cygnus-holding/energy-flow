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

/***/ "./components/Flow/ProcessNode.tsx":
/*!*****************************************!*\
  !*** ./components/Flow/ProcessNode.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst options = [\n    {\n        value: \"option1\",\n        label: \"Option 1\"\n    },\n    {\n        value: \"option2\",\n        label: \"Option 2\"\n    },\n    {\n        value: \"option3\",\n        label: \"Option 3\"\n    },\n    {\n        value: \"option4\",\n        label: \"Option 4\"\n    }\n];\nfunction FlowItem(param) {\n    let { id, title } = param;\n    _s();\n    const [handles, setHandles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1\n    ]);\n    const addHandle = ()=>{\n        setHandles([\n            ...handles,\n            handles.length + 1\n        ]);\n    };\n    const removeHandle = (index)=>{\n        setHandles(handles.filter((handle)=>handle !== index + 1));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-sm text-xs\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: addHandle,\n                                className: \"rounded bg-green-200 p-1 mr-2\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            handles.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>removeHandle(handles.length - 1),\n                                className: \"rounded bg-red-200 p-1\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 34\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            handles.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full p-1 rounded border border-gray-300\",\n                            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: option.value,\n                                    children: option.label\n                                }, option.value, false, {\n                                    fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                            type: \"source\",\n                            position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Right,\n                            id: \"\".concat(id, \"-\").concat(index),\n                            style: {\n                                background: \"#000\",\n                                borderRadius: \"2px\",\n                                width: \"6px\",\n                                height: \"10px\",\n                                top: \"\".concat(105 + index * 40, \"px\"),\n                                right: \"-5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(FlowItem, \"oiw/ftGxcHBOBhPJ2c8aPBEeG0E=\");\n_c = FlowItem;\nfunction ProcessNode(param) {\n    let { id } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 w-72 shadow-lg rounded-lg bg-white border-2 border-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-s mb-3 text-left\",\n                children: \"Process Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlowItem, {\n                        id: id,\n                        title: \"INFLOWS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlowItem, {\n                        id: id,\n                        title: \"OUTFLOWS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ProcessNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ProcessNode));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FlowItem\");\n$RefreshReg$(_c1, \"ProcessNode\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvUHJvY2Vzc05vZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ0Q7QUFFN0MsTUFBTUssVUFBVTtJQUNkO1FBQ0VDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxTQUFTQyxTQUFTLEtBQWE7UUFBYixFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRSxHQUFiOztJQUNoQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7UUFBQztLQUFFO0lBRTFDLE1BQU1XLFlBQVk7UUFDaEJELFdBQVc7ZUFBSUQ7WUFBU0EsUUFBUUcsU0FBUztTQUFFO0lBQzdDO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkosV0FBV0QsUUFBUU0sT0FBTyxDQUFDQyxTQUFXQSxXQUFXRixRQUFRO0lBQzNEO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFtQlY7Ozs7OztrQ0FDbEMsOERBQUNTOzswQ0FDQyw4REFBQ0U7Z0NBQU9DLFNBQVNUO2dDQUFXTyxXQUFVOzBDQUFnQzs7Ozs7OzRCQUNyRVQsUUFBUUcsU0FBUyxtQkFBSyw4REFBQ087Z0NBQU9DLFNBQVMsSUFBTVAsYUFBYUosUUFBUUcsU0FBUztnQ0FBSU0sV0FBVTswQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUd0SFQsUUFBUVksSUFBSSxDQUFDQyxHQUFHUixzQkFDZiw4REFBQ0c7b0JBQWdCQyxXQUFVOztzQ0FDekIsOERBQUNLOzRCQUFPTCxXQUFVO3NDQUNmZixRQUFRa0IsSUFBSSxDQUFDRyx1QkFDWiw4REFBQ0E7b0NBQTBCcEIsT0FBT29CLE9BQU9wQjs4Q0FDdENvQixPQUFPbkI7bUNBREdtQixPQUFPcEI7Ozs7Ozs7Ozs7c0NBS3hCLDhEQUFDSCw2Q0FBTUE7NEJBQ0x3QixNQUFLOzRCQUNMQyxVQUFVeEIsK0NBQVFBLENBQUN5Qjs0QkFDbkJwQixJQUFJLEdBQVNPLE9BQU5QLElBQUcsS0FBUyxPQUFOTzs0QkFDYmMsT0FBTztnQ0FBRUMsWUFBWTtnQ0FBUUMsY0FBYztnQ0FBT0MsT0FBTztnQ0FBT0MsUUFBUTtnQ0FBUUMsS0FBSyxHQUFvQixPQUFqQixNQUFNbkIsUUFBUSxJQUFHO2dDQUFLb0IsT0FBTzs0QkFBTzs7Ozs7OzttQkFadEhwQjs7Ozs7Ozs7Ozs7QUFrQmxCO0dBdkNTUjtLQUFBQTtBQXlDVCxTQUFTNkIsWUFBWSxLQUFNO1FBQU4sRUFBRTVCLEVBQUUsRUFBRSxHQUFOO0lBQ25CLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWtDOzs7Ozs7MEJBQ2pELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNaO3dCQUFTQyxJQUFJQTt3QkFBSUMsT0FBTTs7Ozs7O2tDQUN4Qiw4REFBQ0Y7d0JBQVNDLElBQUlBO3dCQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7TUFWUzJCO0FBWVQsa0ZBQWVwQywyQ0FBSUEsQ0FBQ29DLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbG93L1Byb2Nlc3NOb2RlLnRzeD83ODRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGFuZGxlLCBQb3NpdGlvbiB9IGZyb20gJ3JlYWN0Zmxvdyc7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMScsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMicsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMycsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uNCcsXHJcbiAgICBsYWJlbDogJ09wdGlvbiA0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRmxvd0l0ZW0oeyBpZCwgdGl0bGUgfSkge1xyXG4gIGNvbnN0IFtoYW5kbGVzLCBzZXRIYW5kbGVzXSA9IHVzZVN0YXRlKFsxXSk7XHJcblxyXG4gIGNvbnN0IGFkZEhhbmRsZSA9ICgpID0+IHtcclxuICAgIHNldEhhbmRsZXMoWy4uLmhhbmRsZXMsIGhhbmRsZXMubGVuZ3RoICsgMV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUhhbmRsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0SGFuZGxlcyhoYW5kbGVzLmZpbHRlcigoaGFuZGxlKSA9PiBoYW5kbGUgIT09IGluZGV4ICsgMSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zbSB0ZXh0LXhzXCI+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEhhbmRsZX0gY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmVlbi0yMDAgcC0xIG1yLTJcIj4rPC9idXR0b24+XHJcbiAgICAgICAgICB7aGFuZGxlcy5sZW5ndGggPiAxICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlSGFuZGxlKGhhbmRsZXMubGVuZ3RoIC0gMSl9IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctcmVkLTIwMCBwLTFcIj4tPC9idXR0b24+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hhbmRsZXMubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxIYW5kbGVcclxuICAgICAgICAgICAgdHlwZT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtQb3NpdGlvbi5SaWdodH1cclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMDAwJywgYm9yZGVyUmFkaXVzOiAnMnB4Jywgd2lkdGg6ICc2cHgnLCBoZWlnaHQ6ICcxMHB4JywgdG9wOiBgJHsxMDUgKyBpbmRleCAqIDQwfXB4YCwgcmlnaHQ6ICctNXB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9jZXNzTm9kZSh7IGlkIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgdy03MiBzaGFkb3ctbGcgcm91bmRlZC1sZyBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItZ3JheS00MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zIG1iLTMgdGV4dC1sZWZ0XCI+UHJvY2VzcyBOb2RlPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIDxGbG93SXRlbSBpZD17aWR9IHRpdGxlPVwiSU5GTE9XU1wiIC8+XHJcbiAgICAgICAgPEZsb3dJdGVtIGlkPXtpZH0gdGl0bGU9XCJPVVRGTE9XU1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQcm9jZXNzTm9kZSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJ1c2VTdGF0ZSIsIkhhbmRsZSIsIlBvc2l0aW9uIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJGbG93SXRlbSIsImlkIiwidGl0bGUiLCJoYW5kbGVzIiwic2V0SGFuZGxlcyIsImFkZEhhbmRsZSIsImxlbmd0aCIsInJlbW92ZUhhbmRsZSIsImluZGV4IiwiZmlsdGVyIiwiaGFuZGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIl8iLCJzZWxlY3QiLCJvcHRpb24iLCJ0eXBlIiwicG9zaXRpb24iLCJSaWdodCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwicmlnaHQiLCJQcm9jZXNzTm9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/ProcessNode.tsx\n"));

/***/ })

});