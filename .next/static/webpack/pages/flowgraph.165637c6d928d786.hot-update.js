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

/***/ "./components/Flow/index.tsx":
/*!***********************************!*\
  !*** ./components/Flow/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   edges: function() { return /* binding */ edges; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutputNode */ \"./components/Flow/OutputNode.tsx\");\n/* harmony import */ var _DefaultNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultNode */ \"./components/Flow/DefaultNode.tsx\");\n/* harmony import */ var _ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComponentLibrary */ \"./components/Flow/ComponentLibrary.tsx\");\n/* harmony import */ var _ProcessNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProcessNode */ \"./components/Flow/ProcessNode.tsx\");\n/* harmony import */ var _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InflowAddNode */ \"./components/Flow/InflowAddNode.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // <- new import\n\n\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"input\",\n        data: {\n            label: \"Input Node\"\n        },\n        position: {\n            x: 250,\n            y: 0\n        }\n    },\n    {\n        id: \"2\",\n        data: {\n            label: \"Default Node\"\n        },\n        position: {\n            x: 100,\n            y: 100\n        }\n    },\n    {\n        id: \"3\",\n        type: \"output\",\n        data: {\n            label: \"Output Node\"\n        },\n        position: {\n            x: 400,\n            y: 100\n        }\n    },\n    {\n        id: \"4\",\n        type: \"custom\",\n        position: {\n            x: 100,\n            y: 200\n        },\n        data: {\n            selects: {\n                \"handle-0\": \"bezier\",\n                \"handle-1\": \"bezier\"\n            }\n        }\n    },\n    {\n        id: \"5\",\n        type: \"default\",\n        className: \"annotation\",\n        data: {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"On the bottom left you see the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Controls\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 42\n                    }, undefined),\n                    \" and the bottom right the\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"MiniMap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined),\n                    \". This is also just a node \\uD83E\\uDD73\"\n                ]\n            }, void 0, true)\n        },\n        selectable: false,\n        position: {\n            x: 150,\n            y: 400\n        }\n    }\n];\nconst edges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\",\n        label: \"this is an edge label\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\",\n        animated: true\n    },\n    {\n        id: \"e4-5\",\n        source: \"4\",\n        target: \"5\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-0\",\n        data: {\n            selectIndex: 0\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_12__.MarkerType.ArrowClosed\n        }\n    },\n    {\n        id: \"e4-6\",\n        source: \"4\",\n        target: \"6\",\n        type: \"bezier\",\n        sourceHandle: \"handle-1\",\n        data: {\n            selectIndex: 1\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_12__.MarkerType.ArrowClosed\n        }\n    }\n];\nconst initialEdges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\"\n    }\n];\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    output: _OutputNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    default: _DefaultNode__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    process: _ProcessNode__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    inflowAdd: _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    outflowAdd: _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"bezier\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_12__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_12__.useEdgesState)(initialEdges);\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dots\");\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_12__.addEdge)(params, eds)), [\n        setEdges\n    ]);\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth * 0.5,\n                y: Math.random() * window.innerHeight * 0.5\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                addNode: addNode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                nodes: nodes,\n                onNodesChange: onNodesChange,\n                edges: edges,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_12__.ConnectionLineType.Bezier,\n                fitView: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_12__.Background, {\n                        color: \"#ccc\",\n                        variant: variant\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 177,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_12__.Controls, {\n                        position: \"top-right\",\n                        \"backgrouns-color\": \"white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"rjgETLlwiXdUhUJoGukTktPj+p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_12__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_12__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0Rmxvdywge1xyXG4gIE5vZGUsXHJcbiAgdXNlTm9kZXNTdGF0ZSxcclxuICB1c2VFZGdlc1N0YXRlLFxyXG4gIGFkZEVkZ2UsXHJcbiAgQ29ubmVjdGlvbixcclxuICBFZGdlLFxyXG4gIENvbm5lY3Rpb25MaW5lVHlwZSxcclxuICBDb250cm9scyxcclxuICBCYWNrZ3JvdW5kLFxyXG4gIE1pbmlNYXAsXHJcbiAgTWFya2VyVHlwZSxcclxuICBQb3NpdGlvbixcclxuICBIYW5kbGUsXHJcbiAgdXNlU3RvcmVBcGksXHJcbiAgdXNlUmVhY3RGbG93LFxyXG59IGZyb20gJ3JlYWN0Zmxvdyc7XHJcbmltcG9ydCBDdXN0b21Ob2RlIGZyb20gJy4vQ3VzdG9tTm9kZSc7XHJcbmltcG9ydCBJbnB1dE5vZGUgZnJvbSAnLi9JbnB1dE5vZGUnO1xyXG5pbXBvcnQgVGV4dFVwZGF0ZXJOb2RlIGZyb20gJy4vVGV4dFVwZGF0ZXJOb2RlJztcclxuaW1wb3J0IEFubm90YXRpb25Ob2RlIGZyb20gJy4vQW5ub3RhdGlvbk5vZGUnO1xyXG5pbXBvcnQgT3V0cHV0Tm9kZSBmcm9tICcuL091dHB1dE5vZGUnO1xyXG5pbXBvcnQgRGVmYXVsdE5vZGUgZnJvbSAnLi9EZWZhdWx0Tm9kZSc7XHJcbmltcG9ydCBDb21wb25lbnRMaWJyYXJ5IGZyb20gJy4vQ29tcG9uZW50TGlicmFyeSc7IC8vIDwtIG5ldyBpbXBvcnRcclxuaW1wb3J0IFByb2Nlc3NOb2RlIGZyb20gJy4vUHJvY2Vzc05vZGUnO1xyXG5pbXBvcnQgSW5mbG93QWRkTm9kZSBmcm9tICcuL0luZmxvd0FkZE5vZGUnO1xyXG5pbXBvcnQgT3V0Zmxvd0FkZE5vZGUgZnJvbSAnLi9PdXRmbG93QWRkTm9kZSc7XHJcblxyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XHJcblxyXG5jb25zdCBpbml0aWFsTm9kZXM6IE5vZGVbXSA9IFtcclxuIHtcclxuICAgIGlkOiAnMScsXHJcbiAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogJ0lucHV0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDI1MCwgeTogMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcyJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6ICdEZWZhdWx0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzMnLFxyXG4gICAgdHlwZTogJ291dHB1dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAnT3V0cHV0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDQwMCwgeTogMTAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzQnLFxyXG4gICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDIwMCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RzOiB7XHJcbiAgICAgICAgJ2hhbmRsZS0wJzogJ2JlemllcicsXHJcbiAgICAgICAgJ2hhbmRsZS0xJzogJ2JlemllcicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1JyxcclxuICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgIGNsYXNzTmFtZTogJ2Fubm90YXRpb24nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICBPbiB0aGUgYm90dG9tIGxlZnQgeW91IHNlZSB0aGUgPHN0cm9uZz5Db250cm9sczwvc3Ryb25nPiBhbmQgdGhlIGJvdHRvbSByaWdodCB0aGV7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5NaW5pTWFwPC9zdHJvbmc+LiBUaGlzIGlzIGFsc28ganVzdCBhIG5vZGUg8J+ls1xyXG4gICAgICAgIDwvPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgcG9zaXRpb246IHsgeDogMTUwLCB5OiA0MDAgfSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkZ2VzID0gW1xyXG4gIHsgaWQ6ICdlMS0yJywgc291cmNlOiAnMScsIHRhcmdldDogJzInLCBsYWJlbDogJ3RoaXMgaXMgYW4gZWRnZSBsYWJlbCcgfSxcclxuICB7IGlkOiAnZTEtMycsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICczJywgYW5pbWF0ZWQ6IHRydWUgfSxcclxuICB7XHJcbiAgICBpZDogJ2U0LTUnLFxyXG4gICAgc291cmNlOiAnNCcsXHJcbiAgICB0YXJnZXQ6ICc1JyxcclxuICAgIHR5cGU6ICdzbW9vdGhzdGVwJyxcclxuICAgIHNvdXJjZUhhbmRsZTogJ2hhbmRsZS0wJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gICAgbWFya2VyRW5kOiB7XHJcbiAgICAgIHR5cGU6IE1hcmtlclR5cGUuQXJyb3dDbG9zZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdlNC02JyxcclxuICAgIHNvdXJjZTogJzQnLFxyXG4gICAgdGFyZ2V0OiAnNicsXHJcbiAgICB0eXBlOiAnYmV6aWVyJyxcclxuICAgIHNvdXJjZUhhbmRsZTogJ2hhbmRsZS0xJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0SW5kZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgbWFya2VyRW5kOiB7XHJcbiAgICAgIHR5cGU6IE1hcmtlclR5cGUuQXJyb3dDbG9zZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG5dO1xyXG5cclxuY29uc3QgaW5pdGlhbEVkZ2VzOiBFZGdlW10gPSBbXHJcbiAgeyBpZDogJ2UxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicgfSxcclxuICB7IGlkOiAnZTEtMycsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICczJyB9LFxyXG5dO1xyXG5cclxuY29uc3Qgbm9kZVR5cGVzID0ge1xyXG4gIGN1c3RvbTogQ3VzdG9tTm9kZSxcclxuICBpbnB1dDogSW5wdXROb2RlLFxyXG4gIHRleHRVcGRhdGVyOiBUZXh0VXBkYXRlck5vZGUsXHJcbiAgYW5ub3RhdGlvbjogQW5ub3RhdGlvbk5vZGUsXHJcbiAgb3V0cHV0OiBPdXRwdXROb2RlLFxyXG4gIGRlZmF1bHQ6IERlZmF1bHROb2RlLFxyXG4gIHByb2Nlc3M6IFByb2Nlc3NOb2RlLFxyXG4gIGluZmxvd0FkZDogSW5mbG93QWRkTm9kZSxcclxuICBvdXRmbG93QWRkOiBJbmZsb3dBZGROb2RlLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRFZGdlT3B0aW9ucyA9IHtcclxuICBhbmltYXRlZDogdHJ1ZSxcclxuICB0eXBlOiAnYmV6aWVyJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEZsb3coKSB7XHJcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlcywgb25Ob2Rlc0NoYW5nZV0gPSB1c2VOb2Rlc1N0YXRlKGluaXRpYWxOb2Rlcyk7XHJcbiAgY29uc3QgW2VkZ2VzLCBzZXRFZGdlcywgb25FZGdlc0NoYW5nZV0gPSB1c2VFZGdlc1N0YXRlKGluaXRpYWxFZGdlcyk7XHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoJ2RvdHMnKTtcclxuICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjayhcclxuICAgIChwYXJhbXM6IENvbm5lY3Rpb24gfCBFZGdlKSA9PiBzZXRFZGdlcygoZWRzKSA9PiBhZGRFZGdlKHBhcmFtcywgZWRzKSksXHJcbiAgICBbc2V0RWRnZXNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkTm9kZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGlkID0gKG5vZGVzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBuZXdOb2RlID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgbGFiZWw6IGBOb2RlICR7aWR9YCwgXHJcbiAgICAgICAgc2VsZWN0czogdHlwZSA9PT0gJ2N1c3RvbScgPyB7ICdoYW5kbGUtMCc6ICdzbW9vdGhzdGVwJywgJ2hhbmRsZS0xJzogJ3Ntb290aHN0ZXAnIH0gOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogeyB4OiBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGggKiAwLjUsIHk6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgfSxcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgIH07XHJcbiAgICBzZXROb2RlcygobnMpID0+IG5zLmNvbmNhdChuZXdOb2RlKSk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctZ3JheS0yMDAgcmVsYXRpdmVcIj5cclxuICAgICAgPENvbXBvbmVudExpYnJhcnkgYWRkTm9kZT17YWRkTm9kZX0gLz5cclxuICAgICAgPFJlYWN0Rmxvd1xyXG4gICAgICAgIG5vZGVzPXtub2Rlc31cclxuICAgICAgICBvbk5vZGVzQ2hhbmdlPXtvbk5vZGVzQ2hhbmdlfVxyXG4gICAgICAgIGVkZ2VzPXtlZGdlc31cclxuICAgICAgICBvbkVkZ2VzQ2hhbmdlPXtvbkVkZ2VzQ2hhbmdlfVxyXG4gICAgICAgIG9uQ29ubmVjdD17b25Db25uZWN0fVxyXG4gICAgICAgIG5vZGVUeXBlcz17bm9kZVR5cGVzfVxyXG4gICAgICAgIGRlZmF1bHRFZGdlT3B0aW9ucz17ZGVmYXVsdEVkZ2VPcHRpb25zfVxyXG4gICAgICAgIGNvbm5lY3Rpb25MaW5lVHlwZT17Q29ubmVjdGlvbkxpbmVUeXBlLkJlemllcn1cclxuICAgICAgICBmaXRWaWV3XHJcbiAgICAgID5cclxuICAgICAgICA8QmFja2dyb3VuZCBjb2xvcj1cIiNjY2NcIiB2YXJpYW50PXt2YXJpYW50fSAvPlxyXG4gICAgICAgIDxDb250cm9scyBwb3NpdGlvbj0ndG9wLXJpZ2h0JyBiYWNrZ3JvdW5zLWNvbG9yPSd3aGl0ZScgLz5cclxuICAgICAgPC9SZWFjdEZsb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG93OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiUmVhY3RGbG93IiwidXNlTm9kZXNTdGF0ZSIsInVzZUVkZ2VzU3RhdGUiLCJhZGRFZGdlIiwiQ29ubmVjdGlvbkxpbmVUeXBlIiwiQ29udHJvbHMiLCJCYWNrZ3JvdW5kIiwiTWFya2VyVHlwZSIsIkN1c3RvbU5vZGUiLCJJbnB1dE5vZGUiLCJUZXh0VXBkYXRlck5vZGUiLCJBbm5vdGF0aW9uTm9kZSIsIk91dHB1dE5vZGUiLCJEZWZhdWx0Tm9kZSIsIkNvbXBvbmVudExpYnJhcnkiLCJQcm9jZXNzTm9kZSIsIkluZmxvd0FkZE5vZGUiLCJpbml0aWFsTm9kZXMiLCJpZCIsInR5cGUiLCJkYXRhIiwibGFiZWwiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic2VsZWN0cyIsImNsYXNzTmFtZSIsInN0cm9uZyIsInNlbGVjdGFibGUiLCJlZGdlcyIsInNvdXJjZSIsInRhcmdldCIsImFuaW1hdGVkIiwic291cmNlSGFuZGxlIiwic2VsZWN0SW5kZXgiLCJtYXJrZXJFbmQiLCJBcnJvd0Nsb3NlZCIsImluaXRpYWxFZGdlcyIsIm5vZGVUeXBlcyIsImN1c3RvbSIsImlucHV0IiwidGV4dFVwZGF0ZXIiLCJhbm5vdGF0aW9uIiwib3V0cHV0IiwiZGVmYXVsdCIsInByb2Nlc3MiLCJpbmZsb3dBZGQiLCJvdXRmbG93QWRkIiwiZGVmYXVsdEVkZ2VPcHRpb25zIiwiRmxvdyIsIm5vZGVzIiwic2V0Tm9kZXMiLCJvbk5vZGVzQ2hhbmdlIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJvbkNvbm5lY3QiLCJwYXJhbXMiLCJlZHMiLCJhZGROb2RlIiwibGVuZ3RoIiwidG9TdHJpbmciLCJuZXdOb2RlIiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm5zIiwiY29uY2F0IiwiZGl2IiwiY29ubmVjdGlvbkxpbmVUeXBlIiwiQmV6aWVyIiwiZml0VmlldyIsImNvbG9yIiwiYmFja2dyb3Vucy1jb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});