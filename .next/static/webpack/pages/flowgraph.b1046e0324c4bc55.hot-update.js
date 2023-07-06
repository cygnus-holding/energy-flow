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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nlet processCount = 0;\nconst options = [\n    {\n        value: \"option1\",\n        label: \"Option 1\"\n    },\n    {\n        value: \"option2\",\n        label: \"Option 2\"\n    },\n    {\n        value: \"option3\",\n        label: \"Option 3\"\n    },\n    {\n        value: \"option4\",\n        label: \"Option 4\"\n    }\n];\nfunction FlowItem(param) {\n    let { id, title, initialHandlePosition } = param;\n    _s();\n    const [handles, setHandles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        initialHandlePosition\n    ]);\n    const addHandle = ()=>{\n        setHandles([\n            ...handles,\n            handles[handles.length - 1] + 1\n        ]);\n    };\n    const removeHandle = (index)=>{\n        setHandles(handles.filter((handle)=>handle !== index + initialHandlePosition));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-semibold text-xs\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: addHandle,\n                                className: \"rounded bg-none p-1 mr-2\",\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            handles.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>removeHandle(handles.length - 1),\n                                className: \"rounded bg-none p-1\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 34\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            handles.map((handle, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full p-1 rounded border border-gray-300 text-xs\",\n                            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: option.value,\n                                    children: option.label\n                                }, option.value, false, {\n                                    fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                            type: \"source\",\n                            position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Right,\n                            id: \"\".concat(id, \"-\").concat(handle),\n                            style: {\n                                background: \"#000\",\n                                borderRadius: \"1px\",\n                                width: \"6px\",\n                                height: \"10px\",\n                                top: \"\".concat(100 + handle * 32, \"px\"),\n                                right: \"-5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(FlowItem, \"n32lLlXvsIDhE00O6tGaf4J8wiU=\");\n_c = FlowItem;\nfunction ProcessNode(param) {\n    let { id } = param;\n    _s1();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Process\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        processCount += 1;\n        setTitle(\"Process \".concat(processCount));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 w-72 shadow-lg rounded-lg bg-white border-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-xs mb-3 text-left border-b border-gray-300 pb-2 \",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4  text-s\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlowItem, {\n                        id: id,\n                        title: \"INFLOWS\",\n                        initialHandlePosition: 1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"border-gray-300 my-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlowItem, {\n                        id: id,\n                        title: \"OUTFLOWS\",\n                        initialHandlePosition: 4\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\ProcessNode.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s1(ProcessNode, \"i5lB8NOMG899s6tZWK/BmuJbamo=\");\n_c1 = ProcessNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ProcessNode));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FlowItem\");\n$RefreshReg$(_c1, \"ProcessNode\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2Vzc05vZGUudHN4Pzc4NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhhbmRsZSwgUG9zaXRpb24gfSBmcm9tICdyZWFjdGZsb3cnO1xyXG5cclxubGV0IHByb2Nlc3NDb3VudCA9IDA7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMScsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMicsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uMycsXHJcbiAgICBsYWJlbDogJ09wdGlvbiAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnb3B0aW9uNCcsXHJcbiAgICBsYWJlbDogJ09wdGlvbiA0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRmxvd0l0ZW0oeyBpZCwgdGl0bGUsIGluaXRpYWxIYW5kbGVQb3NpdGlvbiB9KSB7XHJcbiAgY29uc3QgW2hhbmRsZXMsIHNldEhhbmRsZXNdID0gdXNlU3RhdGUoW2luaXRpYWxIYW5kbGVQb3NpdGlvbl0pO1xyXG5cclxuICBjb25zdCBhZGRIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRIYW5kbGVzKFsuLi5oYW5kbGVzLCBoYW5kbGVzW2hhbmRsZXMubGVuZ3RoIC0gMV0gKyAxXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlSGFuZGxlID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRIYW5kbGVzKGhhbmRsZXMuZmlsdGVyKChoYW5kbGUpID0+IGhhbmRsZSAhPT0gaW5kZXggKyBpbml0aWFsSGFuZGxlUG9zaXRpb24pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14c1wiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRIYW5kbGV9IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctbm9uZSBwLTEgbXItMlwiPis8L2J1dHRvbj5cclxuICAgICAgICAgIHtoYW5kbGVzLmxlbmd0aCA+IDEgJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVIYW5kbGUoaGFuZGxlcy5sZW5ndGggLSAxKX0gY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ub25lIHAtMVwiPi08L2J1dHRvbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFuZGxlcy5tYXAoKGhhbmRsZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIHAtMSByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC14c1wiPlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxIYW5kbGVcclxuICAgICAgICAgICAgdHlwZT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtQb3NpdGlvbi5SaWdodH1cclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS0ke2hhbmRsZX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzAwMCcsIGJvcmRlclJhZGl1czogJzFweCcsIHdpZHRoOiAnNnB4JywgaGVpZ2h0OiAnMTBweCcsIHRvcDogYCR7MTAwICsgaGFuZGxlICogMzJ9cHhgLCByaWdodDogJy01cHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2Nlc3NOb2RlKHsgaWQgfSkge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJQcm9jZXNzXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvY2Vzc0NvdW50ICs9IDE7XHJcbiAgICBzZXRUaXRsZShgUHJvY2VzcyAke3Byb2Nlc3NDb3VudH1gKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB3LTcyIHNoYWRvdy1sZyByb3VuZGVkLWxnIGJnLXdoaXRlIGJvcmRlci1ncmF5LTQwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhzIG1iLTMgdGV4dC1sZWZ0IGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBwYi0yIFwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00ICB0ZXh0LXNcIj5cclxuICAgICAgICA8Rmxvd0l0ZW0gaWQ9e2lkfSB0aXRsZT1cIklORkxPV1NcIiBpbml0aWFsSGFuZGxlUG9zaXRpb249ezF9IC8+XHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCBteS0yXCIvPlxyXG4gICAgICAgIDxGbG93SXRlbSBpZD17aWR9IHRpdGxlPVwiT1VURkxPV1NcIiBpbml0aWFsSGFuZGxlUG9zaXRpb249ezR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQcm9jZXNzTm9kZSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhhbmRsZSIsIlBvc2l0aW9uIiwicHJvY2Vzc0NvdW50Iiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJGbG93SXRlbSIsImlkIiwidGl0bGUiLCJpbml0aWFsSGFuZGxlUG9zaXRpb24iLCJoYW5kbGVzIiwic2V0SGFuZGxlcyIsImFkZEhhbmRsZSIsImxlbmd0aCIsInJlbW92ZUhhbmRsZSIsImluZGV4IiwiZmlsdGVyIiwiaGFuZGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsInNlbGVjdCIsIm9wdGlvbiIsInR5cGUiLCJwb3NpdGlvbiIsIlJpZ2h0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJyaWdodCIsIlByb2Nlc3NOb2RlIiwic2V0VGl0bGUiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/ProcessNode.tsx\n"));

/***/ })

});