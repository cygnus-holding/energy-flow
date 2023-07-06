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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   edges: function() { return /* binding */ edges; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutputNode */ \"./components/Flow/OutputNode.tsx\");\n/* harmony import */ var _DefaultNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultNode */ \"./components/Flow/DefaultNode.tsx\");\n/* harmony import */ var _ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComponentLibrary */ \"./components/Flow/ComponentLibrary.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // <- new import\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"input\",\n        data: {\n            label: \"Input Node\"\n        },\n        position: {\n            x: 250,\n            y: 0\n        }\n    },\n    {\n        id: \"2\",\n        data: {\n            label: \"Default Node\"\n        },\n        position: {\n            x: 100,\n            y: 100\n        }\n    },\n    {\n        id: \"3\",\n        type: \"output\",\n        data: {\n            label: \"Output Node\"\n        },\n        position: {\n            x: 400,\n            y: 100\n        }\n    },\n    {\n        id: \"4\",\n        type: \"custom\",\n        position: {\n            x: 100,\n            y: 200\n        },\n        data: {\n            selects: {\n                \"handle-0\": \"smoothstep\",\n                \"handle-1\": \"smoothstep\"\n            }\n        }\n    },\n    {\n        id: \"5\",\n        type: \"default\",\n        className: \"annotation\",\n        data: {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"On the bottom left you see the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Controls\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 42\n                    }, undefined),\n                    \" and the bottom right the\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"MiniMap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    \". This is also just a node \\uD83E\\uDD73\"\n                ]\n            }, void 0, true)\n        },\n        selectable: false,\n        position: {\n            x: 150,\n            y: 400\n        }\n    }\n];\nconst edges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\",\n        label: \"this is an edge label\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\",\n        animated: true\n    },\n    {\n        id: \"e4-5\",\n        source: \"4\",\n        target: \"5\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-0\",\n        data: {\n            selectIndex: 0\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_10__.MarkerType.ArrowClosed\n        }\n    },\n    {\n        id: \"e4-6\",\n        source: \"4\",\n        target: \"6\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-1\",\n        data: {\n            selectIndex: 1\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_10__.MarkerType.ArrowClosed\n        }\n    }\n];\nconst initialEdges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\"\n    }\n];\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    output: _OutputNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    default: _DefaultNode__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"smoothstep\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_10__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_10__.useEdgesState)(initialEdges);\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dots\");\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_10__.addEdge)(params, eds)), [\n        setEdges\n    ]);\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth * 0.5,\n                y: Math.random() * window.innerHeight * 0.5\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                addNode: addNode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                nodes: nodes,\n                onNodesChange: onNodesChange,\n                edges: edges,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_10__.ConnectionLineType.Bezier,\n                fitView: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_10__.Background, {\n                        color: \"#ccc\",\n                        variant: variant\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_10__.Controls, {\n                        position: \"top-right\",\n                        \"backgrouns-color\": \"white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 158,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"rjgETLlwiXdUhUJoGukTktPj+p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_10__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_10__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ2YsTUFBTUQsS0FBSyxDQUFDNkIsTUFBTVcsU0FBUyxHQUFHQztRQUM5QixNQUFNQyxVQUFVO1lBQ2QxQyxJQUFJQTtZQUNKRSxNQUFNO2dCQUNKQyxPQUFPLFFBQVcsT0FBSEg7Z0JBQ2ZPLFNBQVNOLFNBQVMsV0FBVztvQkFBRSxZQUFZO29CQUFjLFlBQVk7Z0JBQWEsSUFBSSxDQUFDO1lBQ3pGO1lBQ0FHLFVBQVU7Z0JBQUVDLEdBQUdzQyxLQUFLQyxXQUFXQyxPQUFPQyxhQUFhO2dCQUFLeEMsR0FBR3FDLEtBQUtDLFdBQVdDLE9BQU9FLGNBQWM7WUFBSTtZQUNwRzlDLE1BQU1BO1FBQ1I7UUFDQTZCLFNBQVMsQ0FBQ2tCLEtBQU9BLEdBQUdDLE9BQU9QO0lBQzdCO0lBR0EscUJBQ0UsOERBQUNRO1FBQUkxQyxXQUFVOzswQkFDYiw4REFBQ1YseURBQWdCQTtnQkFBQ3lDLFNBQVNBOzs7Ozs7MEJBQzNCLDhEQUFDdkQsa0RBQVNBO2dCQUNSNkMsT0FBT0E7Z0JBQ1BFLGVBQWVBO2dCQUNmcEIsT0FBT0E7Z0JBQ1BzQixlQUFlQTtnQkFDZkcsV0FBV0E7Z0JBQ1hoQixXQUFXQTtnQkFDWE8sb0JBQW9CQTtnQkFDcEJ3QixvQkFBb0IvRCwwREFBa0JBLENBQUNnRTtnQkFDdkNDLE9BQU87O2tDQUVQLDhEQUFDL0Qsa0RBQVVBO3dCQUFDZ0UsT0FBTTt3QkFBT3BCLFNBQVNBOzs7Ozs7a0NBQ2xDLDhEQUFDN0MsZ0RBQVFBO3dCQUFDZSxVQUFTO3dCQUFZbUQsb0JBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7R0EzQ1MzQjs7UUFDa0MzQyxxREFBYUE7UUFDYkMscURBQWFBOzs7S0FGL0MwQztBQTZDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zsb3cvaW5kZXgudHN4PzQwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RGbG93LCB7XHJcbiAgTm9kZSxcclxuICB1c2VOb2Rlc1N0YXRlLFxyXG4gIHVzZUVkZ2VzU3RhdGUsXHJcbiAgYWRkRWRnZSxcclxuICBDb25uZWN0aW9uLFxyXG4gIEVkZ2UsXHJcbiAgQ29ubmVjdGlvbkxpbmVUeXBlLFxyXG4gIENvbnRyb2xzLFxyXG4gIEJhY2tncm91bmQsXHJcbiAgTWluaU1hcCxcclxuICBNYXJrZXJUeXBlLFxyXG4gIFBvc2l0aW9uLFxyXG4gIEhhbmRsZSxcclxuICB1c2VTdG9yZUFwaSxcclxuICB1c2VSZWFjdEZsb3csXHJcbn0gZnJvbSAncmVhY3RmbG93JztcclxuaW1wb3J0IEN1c3RvbU5vZGUgZnJvbSAnLi9DdXN0b21Ob2RlJztcclxuaW1wb3J0IElucHV0Tm9kZSBmcm9tICcuL0lucHV0Tm9kZSc7XHJcbmltcG9ydCBUZXh0VXBkYXRlck5vZGUgZnJvbSAnLi9UZXh0VXBkYXRlck5vZGUnO1xyXG5pbXBvcnQgQW5ub3RhdGlvbk5vZGUgZnJvbSAnLi9Bbm5vdGF0aW9uTm9kZSc7XHJcbmltcG9ydCBPdXRwdXROb2RlIGZyb20gJy4vT3V0cHV0Tm9kZSc7XHJcbmltcG9ydCBEZWZhdWx0Tm9kZSBmcm9tICcuL0RlZmF1bHROb2RlJztcclxuaW1wb3J0IENvbXBvbmVudExpYnJhcnkgZnJvbSAnLi9Db21wb25lbnRMaWJyYXJ5JzsgLy8gPC0gbmV3IGltcG9ydFxyXG5cclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnO1xyXG5cclxuY29uc3QgaW5pdGlhbE5vZGVzOiBOb2RlW10gPSBbXHJcbiB7XHJcbiAgICBpZDogJzEnLFxyXG4gICAgdHlwZTogJ2lucHV0JyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6ICdJbnB1dCBOb2RlJyxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyB4OiAyNTAsIHk6IDAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAnRGVmYXVsdCBOb2RlJyxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczJyxcclxuICAgIHR5cGU6ICdvdXRwdXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogJ091dHB1dCBOb2RlJyxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyB4OiA0MDAsIHk6IDEwMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc0JyxcclxuICAgIHR5cGU6ICdjdXN0b20nLFxyXG4gICAgcG9zaXRpb246IHsgeDogMTAwLCB5OiAyMDAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0czoge1xyXG4gICAgICAgICdoYW5kbGUtMCc6ICdzbW9vdGhzdGVwJyxcclxuICAgICAgICAnaGFuZGxlLTEnOiAnc21vb3Roc3RlcCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc1JyxcclxuICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgIGNsYXNzTmFtZTogJ2Fubm90YXRpb24nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICBPbiB0aGUgYm90dG9tIGxlZnQgeW91IHNlZSB0aGUgPHN0cm9uZz5Db250cm9sczwvc3Ryb25nPiBhbmQgdGhlIGJvdHRvbSByaWdodCB0aGV7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5NaW5pTWFwPC9zdHJvbmc+LiBUaGlzIGlzIGFsc28ganVzdCBhIG5vZGUg8J+ls1xyXG4gICAgICAgIDwvPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgcG9zaXRpb246IHsgeDogMTUwLCB5OiA0MDAgfSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkZ2VzID0gW1xyXG4gIHsgaWQ6ICdlMS0yJywgc291cmNlOiAnMScsIHRhcmdldDogJzInLCBsYWJlbDogJ3RoaXMgaXMgYW4gZWRnZSBsYWJlbCcgfSxcclxuICB7IGlkOiAnZTEtMycsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICczJywgYW5pbWF0ZWQ6IHRydWUgfSxcclxuICB7XHJcbiAgICBpZDogJ2U0LTUnLFxyXG4gICAgc291cmNlOiAnNCcsXHJcbiAgICB0YXJnZXQ6ICc1JyxcclxuICAgIHR5cGU6ICdzbW9vdGhzdGVwJyxcclxuICAgIHNvdXJjZUhhbmRsZTogJ2hhbmRsZS0wJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0SW5kZXg6IDAsXHJcbiAgICB9LFxyXG4gICAgbWFya2VyRW5kOiB7XHJcbiAgICAgIHR5cGU6IE1hcmtlclR5cGUuQXJyb3dDbG9zZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdlNC02JyxcclxuICAgIHNvdXJjZTogJzQnLFxyXG4gICAgdGFyZ2V0OiAnNicsXHJcbiAgICB0eXBlOiAnc21vb3Roc3RlcCcsXHJcbiAgICBzb3VyY2VIYW5kbGU6ICdoYW5kbGUtMScsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlbGVjdEluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgIG1hcmtlckVuZDoge1xyXG4gICAgICB0eXBlOiBNYXJrZXJUeXBlLkFycm93Q2xvc2VkLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbmNvbnN0IGluaXRpYWxFZGdlczogRWRnZVtdID0gW1xyXG4gIHsgaWQ6ICdlMS0yJywgc291cmNlOiAnMScsIHRhcmdldDogJzInIH0sXHJcbiAgeyBpZDogJ2UxLTMnLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMycgfSxcclxuXTtcclxuXHJcbmNvbnN0IG5vZGVUeXBlcyA9IHtcclxuICBjdXN0b206IEN1c3RvbU5vZGUsXHJcbiAgaW5wdXQ6IElucHV0Tm9kZSxcclxuICB0ZXh0VXBkYXRlcjogVGV4dFVwZGF0ZXJOb2RlLFxyXG4gIGFubm90YXRpb246IEFubm90YXRpb25Ob2RlLFxyXG4gIG91dHB1dDogT3V0cHV0Tm9kZSxcclxuICBkZWZhdWx0OiBEZWZhdWx0Tm9kZSxcclxufTtcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0RWRnZU9wdGlvbnMgPSB7XHJcbiAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgdHlwZTogJ3Ntb290aHN0ZXAnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gRmxvdygpIHtcclxuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzLCBvbk5vZGVzQ2hhbmdlXSA9IHVzZU5vZGVzU3RhdGUoaW5pdGlhbE5vZGVzKTtcclxuICBjb25zdCBbZWRnZXMsIHNldEVkZ2VzLCBvbkVkZ2VzQ2hhbmdlXSA9IHVzZUVkZ2VzU3RhdGUoaW5pdGlhbEVkZ2VzKTtcclxuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZSgnZG90cycpO1xyXG4gIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHBhcmFtczogQ29ubmVjdGlvbiB8IEVkZ2UpID0+IHNldEVkZ2VzKChlZHMpID0+IGFkZEVkZ2UocGFyYW1zLCBlZHMpKSxcclxuICAgIFtzZXRFZGdlc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGROb2RlID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaWQgPSAobm9kZXMubGVuZ3RoICsgMSkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IG5ld05vZGUgPSB7XHJcbiAgICAgIGlkOiBpZCxcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBsYWJlbDogYE5vZGUgJHtpZH1gLCBcclxuICAgICAgICBzZWxlY3RzOiB0eXBlID09PSAnY3VzdG9tJyA/IHsgJ2hhbmRsZS0wJzogJ3Ntb290aHN0ZXAnLCAnaGFuZGxlLTEnOiAnc21vb3Roc3RlcCcgfSA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uOiB7IHg6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSwgeTogTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNSB9LFxyXG4gICAgICB0eXBlOiB0eXBlLFxyXG4gICAgfTtcclxuICAgIHNldE5vZGVzKChucykgPT4gbnMuY29uY2F0KG5ld05vZGUpKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1ncmF5LTIwMCByZWxhdGl2ZVwiPlxyXG4gICAgICA8Q29tcG9uZW50TGlicmFyeSBhZGROb2RlPXthZGROb2RlfSAvPlxyXG4gICAgICA8UmVhY3RGbG93XHJcbiAgICAgICAgbm9kZXM9e25vZGVzfVxyXG4gICAgICAgIG9uTm9kZXNDaGFuZ2U9e29uTm9kZXNDaGFuZ2V9XHJcbiAgICAgICAgZWRnZXM9e2VkZ2VzfVxyXG4gICAgICAgIG9uRWRnZXNDaGFuZ2U9e29uRWRnZXNDaGFuZ2V9XHJcbiAgICAgICAgb25Db25uZWN0PXtvbkNvbm5lY3R9XHJcbiAgICAgICAgbm9kZVR5cGVzPXtub2RlVHlwZXN9XHJcbiAgICAgICAgZGVmYXVsdEVkZ2VPcHRpb25zPXtkZWZhdWx0RWRnZU9wdGlvbnN9XHJcbiAgICAgICAgY29ubmVjdGlvbkxpbmVUeXBlPXtDb25uZWN0aW9uTGluZVR5cGUuQmV6aWVyfVxyXG4gICAgICAgIGZpdFZpZXdcclxuICAgICAgPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kIGNvbG9yPVwiI2NjY1wiIHZhcmlhbnQ9e3ZhcmlhbnR9IC8+XHJcbiAgICAgICAgPENvbnRyb2xzIHBvc2l0aW9uPSd0b3AtcmlnaHQnIGJhY2tncm91bnMtY29sb3I9J3doaXRlJyAvPlxyXG4gICAgICA8L1JlYWN0Rmxvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3c7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJSZWFjdEZsb3ciLCJ1c2VOb2Rlc1N0YXRlIiwidXNlRWRnZXNTdGF0ZSIsImFkZEVkZ2UiLCJDb25uZWN0aW9uTGluZVR5cGUiLCJDb250cm9scyIsIkJhY2tncm91bmQiLCJNYXJrZXJUeXBlIiwiQ3VzdG9tTm9kZSIsIklucHV0Tm9kZSIsIlRleHRVcGRhdGVyTm9kZSIsIkFubm90YXRpb25Ob2RlIiwiT3V0cHV0Tm9kZSIsIkRlZmF1bHROb2RlIiwiQ29tcG9uZW50TGlicmFyeSIsImluaXRpYWxOb2RlcyIsImlkIiwidHlwZSIsImRhdGEiLCJsYWJlbCIsInBvc2l0aW9uIiwieCIsInkiLCJzZWxlY3RzIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwic2VsZWN0YWJsZSIsImVkZ2VzIiwic291cmNlIiwidGFyZ2V0IiwiYW5pbWF0ZWQiLCJzb3VyY2VIYW5kbGUiLCJzZWxlY3RJbmRleCIsIm1hcmtlckVuZCIsIkFycm93Q2xvc2VkIiwiaW5pdGlhbEVkZ2VzIiwibm9kZVR5cGVzIiwiY3VzdG9tIiwiaW5wdXQiLCJ0ZXh0VXBkYXRlciIsImFubm90YXRpb24iLCJvdXRwdXQiLCJkZWZhdWx0IiwiZGVmYXVsdEVkZ2VPcHRpb25zIiwiRmxvdyIsIm5vZGVzIiwic2V0Tm9kZXMiLCJvbk5vZGVzQ2hhbmdlIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJvbkNvbm5lY3QiLCJwYXJhbXMiLCJlZHMiLCJhZGROb2RlIiwibGVuZ3RoIiwidG9TdHJpbmciLCJuZXdOb2RlIiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm5zIiwiY29uY2F0IiwiZGl2IiwiY29ubmVjdGlvbkxpbmVUeXBlIiwiQmV6aWVyIiwiZml0VmlldyIsImNvbG9yIiwiYmFja2dyb3Vucy1jb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});