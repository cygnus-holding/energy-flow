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

/***/ "./components/Flow/OutputNode.tsx":
/*!****************************************!*\
  !*** ./components/Flow/OutputNode.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst options = [\n    {\n        value: \"smoothstep\",\n        label: \"Smoothstep\"\n    },\n    {\n        value: \"step\",\n        label: \"Step\"\n    },\n    {\n        value: \"default\",\n        label: \"Bezier (default)\"\n    },\n    {\n        value: \"straight\",\n        label: \"Straight\"\n    }\n];\nfunction Select(param) {\n    let { value, handleId, nodeId } = param;\n    _s();\n    const { setNodes } = (0,reactflow__WEBPACK_IMPORTED_MODULE_2__.useReactFlow)();\n    const store = (0,reactflow__WEBPACK_IMPORTED_MODULE_2__.useStoreApi)();\n    const onChange = (evt)=>{\n        const { nodeInternals } = store.getState();\n        setNodes(Array.from(nodeInternals.values()).map((node)=>{\n            if (node.id === nodeId) {\n                node.data = {\n                    ...node.data,\n                    selects: {\n                        ...node.data.selects,\n                        [handleId]: evt.target.value\n                    }\n                };\n            }\n            return node;\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"custom-node__select\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Edge Type\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"nodrag\",\n                onChange: onChange,\n                value: value,\n                children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: option.value,\n                        children: option.label\n                    }, option.value, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_2__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_2__.Position.Right,\n                id: handleId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Select, \"F307fNgt+D+w3sd0gkRl6tLJ8PY=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_2__.useReactFlow,\n        reactflow__WEBPACK_IMPORTED_MODULE_2__.useStoreApi\n    ];\n});\n_c = Select;\nfunction CustomNode2(param) {\n    let { id, data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-node__header\",\n                children: [\n                    \"This is a \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"custom node\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"custom-node__body\",\n                children: data.selects && Object.keys(data.selects).map((handleId)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Select, {\n                        nodeId: id,\n                        value: data.selects[handleId],\n                        handleId: handleId\n                    }, handleId, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\OutputNode.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = CustomNode2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CustomNode2));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Select\");\n$RefreshReg$(_c1, \"CustomNode2\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvT3V0cHV0Tm9kZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFDb0M7QUFFeEUsTUFBTU0sVUFBVTtJQUNkO1FBQ0VDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxTQUFTQyxPQUFPLEtBQTJCO1FBQTNCLEVBQUVGLEtBQUssRUFBRUcsUUFBUSxFQUFFQyxNQUFNLEVBQUUsR0FBM0I7O0lBQ2QsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1QsdURBQVlBO0lBQ2pDLE1BQU1VLFFBQVFULHNEQUFXQTtJQUV6QixNQUFNVSxXQUFXLENBQUNDO1FBQ2hCLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdILE1BQU1JO1FBQ2hDTCxTQUNFTSxNQUFNQyxLQUFLSCxjQUFjSSxVQUFVQyxJQUFJLENBQUNDO1lBQ3RDLElBQUlBLEtBQUtDLE9BQU9aLFFBQVE7Z0JBQ3RCVyxLQUFLRSxPQUFPO29CQUNWLEdBQUdGLEtBQUtFLElBQUk7b0JBQ1pDLFNBQVM7d0JBQ1AsR0FBR0gsS0FBS0UsS0FBS0MsT0FBTzt3QkFDcEIsQ0FBQ2YsU0FBUyxFQUFFSyxJQUFJVyxPQUFPbkI7b0JBQ3pCO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPZTtRQUNUO0lBRUo7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUFJOzs7Ozs7MEJBQ0wsOERBQUNFO2dCQUFPRCxXQUFVO2dCQUFTZCxVQUFVQTtnQkFBVVAsT0FBT0E7MEJBQ25ERCxRQUFRZSxJQUFJLENBQUNTLHVCQUNaLDhEQUFDQTt3QkFBMEJ2QixPQUFPdUIsT0FBT3ZCO2tDQUN0Q3VCLE9BQU90Qjt1QkFER3NCLE9BQU92Qjs7Ozs7Ozs7OzswQkFLeEIsOERBQUNMLDZDQUFNQTtnQkFBQzZCLE1BQUs7Z0JBQVNDLFVBQVUzQiwrQ0FBUUEsQ0FBQzRCO2dCQUFPVixJQUFJYjs7Ozs7Ozs7Ozs7O0FBRzFEO0dBcENTRDs7UUFDY04sbURBQVlBO1FBQ25CQyxrREFBV0E7OztLQUZsQks7QUFzQ1QsU0FBU3lCLFlBQVksS0FBWTtRQUFaLEVBQUVYLEVBQUUsRUFBRUMsSUFBSSxFQUFFLEdBQVo7SUFDbkIscUJBQ0U7OzBCQUNFLDhEQUFDRztnQkFBSUMsV0FBVTs7b0JBQXNCO2tDQUN6Qiw4REFBQ087a0NBQU87Ozs7Ozs7Ozs7OzswQkFFcEIsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNsQkosS0FBS0MsV0FBV1csT0FBT0MsS0FBS2IsS0FBS0MsU0FBU0osSUFBSSxDQUFDWCx5QkFDOUMsOERBQUNEO3dCQUFzQkUsUUFBUVk7d0JBQUloQixPQUFPaUIsS0FBS0MsT0FBTyxDQUFDZixTQUFTO3dCQUFFQSxVQUFVQTt1QkFBL0RBOzs7Ozs7Ozs7Ozs7QUFNakI7TUFkU3dCO0FBZ0JULGtGQUFlakMsMkNBQUlBLENBQUNpQyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmxvdy9PdXRwdXROb2RlLnRzeD9hMjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIYW5kbGUsIHVzZVJlYWN0RmxvdywgdXNlU3RvcmVBcGksIFBvc2l0aW9uIH0gZnJvbSAncmVhY3RmbG93JztcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6ICdzbW9vdGhzdGVwJyxcclxuICAgIGxhYmVsOiAnU21vb3Roc3RlcCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogJ3N0ZXAnLFxyXG4gICAgbGFiZWw6ICdTdGVwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiAnZGVmYXVsdCcsXHJcbiAgICBsYWJlbDogJ0JlemllciAoZGVmYXVsdCknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6ICdzdHJhaWdodCcsXHJcbiAgICBsYWJlbDogJ1N0cmFpZ2h0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gU2VsZWN0KHsgdmFsdWUsIGhhbmRsZUlkLCBub2RlSWQgfSkge1xyXG4gIGNvbnN0IHsgc2V0Tm9kZXMgfSA9IHVzZVJlYWN0RmxvdygpO1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmVBcGkoKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCB7IG5vZGVJbnRlcm5hbHMgfSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICBzZXROb2RlcyhcclxuICAgICAgQXJyYXkuZnJvbShub2RlSW50ZXJuYWxzLnZhbHVlcygpKS5tYXAoKG5vZGUpID0+IHtcclxuICAgICAgICBpZiAobm9kZS5pZCA9PT0gbm9kZUlkKSB7XHJcbiAgICAgICAgICBub2RlLmRhdGEgPSB7XHJcbiAgICAgICAgICAgIC4uLm5vZGUuZGF0YSxcclxuICAgICAgICAgICAgc2VsZWN0czoge1xyXG4gICAgICAgICAgICAgIC4uLm5vZGUuZGF0YS5zZWxlY3RzLFxyXG4gICAgICAgICAgICAgIFtoYW5kbGVJZF06IGV2dC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1ub2RlX19zZWxlY3RcIj5cclxuICAgICAgPGRpdj5FZGdlIFR5cGU8L2Rpdj5cclxuICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJub2RyYWdcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8SGFuZGxlIHR5cGU9XCJzb3VyY2VcIiBwb3NpdGlvbj17UG9zaXRpb24uUmlnaHR9IGlkPXtoYW5kbGVJZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEN1c3RvbU5vZGUyKHsgaWQsIGRhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1ub2RlX19oZWFkZXJcIj5cclxuICAgICAgICBUaGlzIGlzIGEgPHN0cm9uZz5jdXN0b20gbm9kZTwvc3Ryb25nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbm9kZV9fYm9keVwiPlxyXG4gIHtkYXRhLnNlbGVjdHMgJiYgT2JqZWN0LmtleXMoZGF0YS5zZWxlY3RzKS5tYXAoKGhhbmRsZUlkKSA9PiAoXHJcbiAgICA8U2VsZWN0IGtleT17aGFuZGxlSWR9IG5vZGVJZD17aWR9IHZhbHVlPXtkYXRhLnNlbGVjdHNbaGFuZGxlSWRdfSBoYW5kbGVJZD17aGFuZGxlSWR9IC8+XHJcbiAgKSl9XHJcbjwvZGl2PlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ3VzdG9tTm9kZTIpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiSGFuZGxlIiwidXNlUmVhY3RGbG93IiwidXNlU3RvcmVBcGkiLCJQb3NpdGlvbiIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiU2VsZWN0IiwiaGFuZGxlSWQiLCJub2RlSWQiLCJzZXROb2RlcyIsInN0b3JlIiwib25DaGFuZ2UiLCJldnQiLCJub2RlSW50ZXJuYWxzIiwiZ2V0U3RhdGUiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJtYXAiLCJub2RlIiwiaWQiLCJkYXRhIiwic2VsZWN0cyIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsIm9wdGlvbiIsInR5cGUiLCJwb3NpdGlvbiIsIlJpZ2h0IiwiQ3VzdG9tTm9kZTIiLCJzdHJvbmciLCJPYmplY3QiLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Flow/OutputNode.tsx\n"));

/***/ })

});