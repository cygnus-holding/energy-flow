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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   edges: function() { return /* binding */ edges; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"input\",\n        data: {\n            label: \"Input Node\"\n        },\n        position: {\n            x: 250,\n            y: 0\n        }\n    },\n    {\n        id: \"2\",\n        data: {\n            label: \"Default Node\"\n        },\n        position: {\n            x: 100,\n            y: 100\n        }\n    },\n    {\n        id: \"3\",\n        type: \"output\",\n        data: {\n            label: \"Output Node\"\n        },\n        position: {\n            x: 400,\n            y: 100\n        }\n    },\n    {\n        id: \"4\",\n        type: \"custom\",\n        position: {\n            x: 100,\n            y: 200\n        },\n        data: {\n            selects: {\n                \"handle-0\": \"smoothstep\",\n                \"handle-1\": \"smoothstep\"\n            }\n        }\n    },\n    {\n        id: \"7\",\n        type: \"default\",\n        className: \"annotation\",\n        data: {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"On the bottom left you see the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Controls\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 42\n                    }, undefined),\n                    \" and the bottom right the\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"MiniMap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined),\n                    \". This is also just a node \\uD83E\\uDD73\"\n                ]\n            }, void 0, true)\n        },\n        selectable: false,\n        position: {\n            x: 150,\n            y: 400\n        }\n    }\n];\nconst edges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\",\n        label: \"this is an edge label\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\",\n        animated: true\n    },\n    {\n        id: \"e4-5\",\n        source: \"4\",\n        target: \"5\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-0\",\n        data: {\n            selectIndex: 0\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_7__.MarkerType.ArrowClosed\n        }\n    },\n    {\n        id: \"e4-6\",\n        source: \"4\",\n        target: \"6\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-1\",\n        data: {\n            selectIndex: 1\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_7__.MarkerType.ArrowClosed\n        }\n    }\n];\nconst initialEdges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\"\n    }\n];\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"smoothstep\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_7__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_7__.useEdgesState)(initialEdges);\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dots\");\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_7__.addEdge)(params, eds)), [\n        setEdges\n    ]);\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth,\n                y: Math.random() * window.innerHeight\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded\",\n                onClick: ()=>addNode(\"custom\"),\n                children: \"Add Custom Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded ml-4\",\n                onClick: ()=>addNode(\"input\"),\n                children: \"Add Input Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded ml-4\",\n                onClick: ()=>addNode(\"textUpdater\"),\n                children: \"Add TextUpdater Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded ml-4\",\n                onClick: ()=>addNode(\"annotation\"),\n                children: \"Add Annotation Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                nodes: nodes,\n                onNodesChange: onNodesChange,\n                edges: edges,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_7__.ConnectionLineType.Bezier,\n                fitView: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_7__.Background, {\n                        color: \"#ccc\",\n                        variant: variant\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_7__.Controls, {\n                        position: \"top-left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"rjgETLlwiXdUhUJoGukTktPj+p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_7__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_7__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL0Zsb3cvaW5kZXgudHN4PzQwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RGbG93LCB7XHJcbiAgTm9kZSxcclxuICB1c2VOb2Rlc1N0YXRlLFxyXG4gIHVzZUVkZ2VzU3RhdGUsXHJcbiAgYWRkRWRnZSxcclxuICBDb25uZWN0aW9uLFxyXG4gIEVkZ2UsXHJcbiAgQ29ubmVjdGlvbkxpbmVUeXBlLFxyXG4gIENvbnRyb2xzLFxyXG4gIEJhY2tncm91bmQsXHJcbiAgTWluaU1hcCxcclxuICBNYXJrZXJUeXBlLFxyXG4gIFBvc2l0aW9uLFxyXG4gIEhhbmRsZSxcclxuICB1c2VTdG9yZUFwaSxcclxuICB1c2VSZWFjdEZsb3csXHJcbiAgRWxlbWVudHMsXHJcbn0gZnJvbSAncmVhY3RmbG93JztcclxuaW1wb3J0IEN1c3RvbU5vZGUgZnJvbSAnLi9DdXN0b21Ob2RlJztcclxuaW1wb3J0IElucHV0Tm9kZSBmcm9tICcuL0lucHV0Tm9kZSc7XHJcbmltcG9ydCBUZXh0VXBkYXRlck5vZGUgZnJvbSAnLi9UZXh0VXBkYXRlck5vZGUnO1xyXG5pbXBvcnQgQW5ub3RhdGlvbk5vZGUgZnJvbSAnLi9Bbm5vdGF0aW9uTm9kZSc7XHJcbmltcG9ydCBPdXRwdXROb2RlIGZyb20gJy4vT3V0cHV0Tm9kZSc7XHJcblxyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XHJcblxyXG5jb25zdCBpbml0aWFsTm9kZXM6IE5vZGVbXSA9IFtcclxuIHtcclxuICAgIGlkOiAnMScsXHJcbiAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogJ0lucHV0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDI1MCwgeTogMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcyJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6ICdEZWZhdWx0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzMnLFxyXG4gICAgdHlwZTogJ291dHB1dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAnT3V0cHV0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDQwMCwgeTogMTAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzQnLFxyXG4gICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDIwMCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RzOiB7XHJcbiAgICAgICAgJ2hhbmRsZS0wJzogJ3Ntb290aHN0ZXAnLFxyXG4gICAgICAgICdoYW5kbGUtMSc6ICdzbW9vdGhzdGVwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzcnLFxyXG4gICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgY2xhc3NOYW1lOiAnYW5ub3RhdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIE9uIHRoZSBib3R0b20gbGVmdCB5b3Ugc2VlIHRoZSA8c3Ryb25nPkNvbnRyb2xzPC9zdHJvbmc+IGFuZCB0aGUgYm90dG9tIHJpZ2h0IHRoZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPk1pbmlNYXA8L3N0cm9uZz4uIFRoaXMgaXMgYWxzbyBqdXN0IGEgbm9kZSDwn6WzXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxNTAsIHk6IDQwMCB9LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZWRnZXMgPSBbXHJcbiAgeyBpZDogJ2UxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicsIGxhYmVsOiAndGhpcyBpcyBhbiBlZGdlIGxhYmVsJyB9LFxyXG4gIHsgaWQ6ICdlMS0zJywgc291cmNlOiAnMScsIHRhcmdldDogJzMnLCBhbmltYXRlZDogdHJ1ZSB9LFxyXG4gIHtcclxuICAgIGlkOiAnZTQtNScsXHJcbiAgICBzb3VyY2U6ICc0JyxcclxuICAgIHRhcmdldDogJzUnLFxyXG4gICAgdHlwZTogJ3Ntb290aHN0ZXAnLFxyXG4gICAgc291cmNlSGFuZGxlOiAnaGFuZGxlLTAnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBtYXJrZXJFbmQ6IHtcclxuICAgICAgdHlwZTogTWFya2VyVHlwZS5BcnJvd0Nsb3NlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2U0LTYnLFxyXG4gICAgc291cmNlOiAnNCcsXHJcbiAgICB0YXJnZXQ6ICc2JyxcclxuICAgIHR5cGU6ICdzbW9vdGhzdGVwJyxcclxuICAgIHNvdXJjZUhhbmRsZTogJ2hhbmRsZS0xJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0SW5kZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgbWFya2VyRW5kOiB7XHJcbiAgICAgIHR5cGU6IE1hcmtlclR5cGUuQXJyb3dDbG9zZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG5dO1xyXG5cclxuY29uc3QgaW5pdGlhbEVkZ2VzOiBFZGdlW10gPSBbXHJcbiAgeyBpZDogJ2UxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicgfSxcclxuICB7IGlkOiAnZTEtMycsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICczJyB9LFxyXG5dO1xyXG5cclxuY29uc3Qgbm9kZVR5cGVzID0ge1xyXG4gIGN1c3RvbTogQ3VzdG9tTm9kZSxcclxuICBpbnB1dDogSW5wdXROb2RlLFxyXG4gIHRleHRVcGRhdGVyOiBUZXh0VXBkYXRlck5vZGUsXHJcbiAgYW5ub3RhdGlvbjogQW5ub3RhdGlvbk5vZGUsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0RWRnZU9wdGlvbnMgPSB7XHJcbiAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgdHlwZTogJ3Ntb290aHN0ZXAnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gRmxvdygpIHtcclxuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzLCBvbk5vZGVzQ2hhbmdlXSA9IHVzZU5vZGVzU3RhdGUoaW5pdGlhbE5vZGVzKTtcclxuICBjb25zdCBbZWRnZXMsIHNldEVkZ2VzLCBvbkVkZ2VzQ2hhbmdlXSA9IHVzZUVkZ2VzU3RhdGUoaW5pdGlhbEVkZ2VzKTtcclxuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZSgnZG90cycpO1xyXG4gIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHBhcmFtczogQ29ubmVjdGlvbiB8IEVkZ2UpID0+IHNldEVkZ2VzKChlZHMpID0+IGFkZEVkZ2UocGFyYW1zLCBlZHMpKSxcclxuICAgIFtzZXRFZGdlc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGROb2RlID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaWQgPSAobm9kZXMubGVuZ3RoICsgMSkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IG5ld05vZGUgPSB7XHJcbiAgICAgIGlkOiBpZCxcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBsYWJlbDogYE5vZGUgJHtpZH1gLCBcclxuICAgICAgICBzZWxlY3RzOiB0eXBlID09PSAnY3VzdG9tJyA/IHsgJ2hhbmRsZS0wJzogJ3Ntb290aHN0ZXAnLCAnaGFuZGxlLTEnOiAnc21vb3Roc3RlcCcgfSA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uOiB7IHg6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCwgeTogTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCB9LFxyXG4gICAgICB0eXBlOiB0eXBlLFxyXG4gICAgfTtcclxuICAgIHNldE5vZGVzKChucykgPT4gbnMuY29uY2F0KG5ld05vZGUpKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1ncmF5LTIwMCBwLTEwXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGFkZE5vZGUoJ2N1c3RvbScpfT5BZGQgQ3VzdG9tIE5vZGU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweS0yIHB4LTQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIG1sLTRcIiBvbkNsaWNrPXsoKSA9PiBhZGROb2RlKCdpbnB1dCcpfT5BZGQgSW5wdXQgTm9kZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgbWwtNFwiIG9uQ2xpY2s9eygpID0+IGFkZE5vZGUoJ3RleHRVcGRhdGVyJyl9PkFkZCBUZXh0VXBkYXRlciBOb2RlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBtbC00XCIgb25DbGljaz17KCkgPT4gYWRkTm9kZSgnYW5ub3RhdGlvbicpfT5BZGQgQW5ub3RhdGlvbiBOb2RlPC9idXR0b24+XHJcbiAgICAgIDxSZWFjdEZsb3dcclxuICAgICAgICBub2Rlcz17bm9kZXN9XHJcbiAgICAgICAgb25Ob2Rlc0NoYW5nZT17b25Ob2Rlc0NoYW5nZX1cclxuICAgICAgICBlZGdlcz17ZWRnZXN9XHJcbiAgICAgICAgb25FZGdlc0NoYW5nZT17b25FZGdlc0NoYW5nZX1cclxuICAgICAgICBvbkNvbm5lY3Q9e29uQ29ubmVjdH1cclxuICAgICAgICBub2RlVHlwZXM9e25vZGVUeXBlc31cclxuICAgICAgICBkZWZhdWx0RWRnZU9wdGlvbnM9e2RlZmF1bHRFZGdlT3B0aW9uc31cclxuICAgICAgICBjb25uZWN0aW9uTGluZVR5cGU9e0Nvbm5lY3Rpb25MaW5lVHlwZS5CZXppZXJ9XHJcbiAgICAgICAgZml0Vmlld1xyXG4gICAgICA+XHJcbiAgICAgICAgPEJhY2tncm91bmQgY29sb3I9XCIjY2NjXCIgdmFyaWFudD17dmFyaWFudH0gLz5cclxuICAgICAgICA8Q29udHJvbHMgcG9zaXRpb249J3RvcC1sZWZ0JyAvPlxyXG4gICAgICA8L1JlYWN0Rmxvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3c7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJSZWFjdEZsb3ciLCJ1c2VOb2Rlc1N0YXRlIiwidXNlRWRnZXNTdGF0ZSIsImFkZEVkZ2UiLCJDb25uZWN0aW9uTGluZVR5cGUiLCJDb250cm9scyIsIkJhY2tncm91bmQiLCJNYXJrZXJUeXBlIiwiQ3VzdG9tTm9kZSIsIklucHV0Tm9kZSIsIlRleHRVcGRhdGVyTm9kZSIsIkFubm90YXRpb25Ob2RlIiwiaW5pdGlhbE5vZGVzIiwiaWQiLCJ0eXBlIiwiZGF0YSIsImxhYmVsIiwicG9zaXRpb24iLCJ4IiwieSIsInNlbGVjdHMiLCJjbGFzc05hbWUiLCJzdHJvbmciLCJzZWxlY3RhYmxlIiwiZWRnZXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJhbmltYXRlZCIsInNvdXJjZUhhbmRsZSIsInNlbGVjdEluZGV4IiwibWFya2VyRW5kIiwiQXJyb3dDbG9zZWQiLCJpbml0aWFsRWRnZXMiLCJub2RlVHlwZXMiLCJjdXN0b20iLCJpbnB1dCIsInRleHRVcGRhdGVyIiwiYW5ub3RhdGlvbiIsImRlZmF1bHRFZGdlT3B0aW9ucyIsIkZsb3ciLCJub2RlcyIsInNldE5vZGVzIiwib25Ob2Rlc0NoYW5nZSIsInNldEVkZ2VzIiwib25FZGdlc0NoYW5nZSIsInZhcmlhbnQiLCJzZXRWYXJpYW50Iiwib25Db25uZWN0IiwicGFyYW1zIiwiZWRzIiwiYWRkTm9kZSIsImxlbmd0aCIsInRvU3RyaW5nIiwibmV3Tm9kZSIsIk1hdGgiLCJyYW5kb20iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJucyIsImNvbmNhdCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25uZWN0aW9uTGluZVR5cGUiLCJCZXppZXIiLCJmaXRWaWV3IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});