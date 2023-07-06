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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   edges: function() { return /* binding */ edges; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutputNode */ \"./components/Flow/OutputNode.tsx\");\n/* harmony import */ var _DefaultNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultNode */ \"./components/Flow/DefaultNode.tsx\");\n/* harmony import */ var _ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComponentLibrary */ \"./components/Flow/ComponentLibrary.tsx\");\n/* harmony import */ var _ProcessNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProcessNode */ \"./components/Flow/ProcessNode.tsx\");\n/* harmony import */ var _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InflowAddNode */ \"./components/Flow/InflowAddNode.tsx\");\n/* harmony import */ var _OutflowAddNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OutflowAddNode */ \"./components/Flow/OutflowAddNode.tsx\");\n/* harmony import */ var _ReceiverNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ReceiverNode */ \"./components/Flow/ReceiverNode.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_13__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // <- new import\n\n\n\n\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"process\",\n        data: {\n            label: \"Input Node\"\n        },\n        position: {\n            x: 250,\n            y: 0\n        }\n    },\n    {\n        id: \"2\",\n        data: {\n            label: \"Default Node\"\n        },\n        position: {\n            x: 100,\n            y: 100\n        }\n    },\n    {\n        id: \"3\",\n        type: \"output\",\n        data: {\n            label: \"Output Node\"\n        },\n        position: {\n            x: 400,\n            y: 100\n        }\n    },\n    {\n        id: \"4\",\n        type: \"custom\",\n        position: {\n            x: 100,\n            y: 200\n        },\n        data: {\n            selects: {\n                \"handle-0\": \"bezier\",\n                \"handle-1\": \"bezier\"\n            }\n        }\n    },\n    {\n        id: \"5\",\n        type: \"default\",\n        className: \"annotation\",\n        data: {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"On the bottom left you see the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Controls\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 42\n                    }, undefined),\n                    \" and the bottom right the\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"MiniMap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined),\n                    \". This is also just a node \\uD83E\\uDD73\"\n                ]\n            }, void 0, true)\n        },\n        selectable: false,\n        position: {\n            x: 150,\n            y: 400\n        }\n    }\n];\nconst edges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\",\n        label: \"this is an edge label\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\",\n        animated: true\n    },\n    {\n        id: \"e4-5\",\n        source: \"4\",\n        target: \"5\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-0\",\n        data: {\n            selectIndex: 0\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_14__.MarkerType.ArrowClosed\n        }\n    },\n    {\n        id: \"e4-6\",\n        source: \"4\",\n        target: \"6\",\n        type: \"bezier\",\n        sourceHandle: \"handle-1\",\n        data: {\n            selectIndex: 1\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_14__.MarkerType.ArrowClosed\n        }\n    }\n];\nconst initialEdges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\"\n    }\n];\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    output: _OutputNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    default: _DefaultNode__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    process: _ProcessNode__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    inflowAdd: _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    outflowAdd: _OutflowAddNode__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    receiver: _ReceiverNode__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"bezier\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_14__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_14__.useEdgesState)(initialEdges);\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dots\");\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_14__.addEdge)(params, eds)), [\n        setEdges\n    ]);\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth * 0.5,\n                y: Math.random() * window.innerHeight * 0.5\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                addNode: addNode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                nodes: nodes,\n                onNodesChange: onNodesChange,\n                edges: edges,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_14__.ConnectionLineType.Bezier,\n                fitView: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_14__.Background, {\n                        color: \"#ccc\",\n                        variant: variant\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_14__.Controls, {\n                        position: \"top-right\",\n                        \"backgrouns-color\": \"white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 166,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"rjgETLlwiXdUhUJoGukTktPj+p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_14__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_14__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS8uL2NvbXBvbmVudHMvRmxvdy9pbmRleC50c3g/NDAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdEZsb3csIHtcclxuICBOb2RlLFxyXG4gIHVzZU5vZGVzU3RhdGUsXHJcbiAgdXNlRWRnZXNTdGF0ZSxcclxuICBhZGRFZGdlLFxyXG4gIENvbm5lY3Rpb24sXHJcbiAgRWRnZSxcclxuICBDb25uZWN0aW9uTGluZVR5cGUsXHJcbiAgQ29udHJvbHMsXHJcbiAgQmFja2dyb3VuZCxcclxuICBNaW5pTWFwLFxyXG4gIE1hcmtlclR5cGUsXHJcbiAgUG9zaXRpb24sXHJcbiAgSGFuZGxlLFxyXG4gIHVzZVN0b3JlQXBpLFxyXG4gIHVzZVJlYWN0RmxvdyxcclxufSBmcm9tICdyZWFjdGZsb3cnO1xyXG5pbXBvcnQgQ3VzdG9tTm9kZSBmcm9tICcuL0N1c3RvbU5vZGUnO1xyXG5pbXBvcnQgSW5wdXROb2RlIGZyb20gJy4vSW5wdXROb2RlJztcclxuaW1wb3J0IFRleHRVcGRhdGVyTm9kZSBmcm9tICcuL1RleHRVcGRhdGVyTm9kZSc7XHJcbmltcG9ydCBBbm5vdGF0aW9uTm9kZSBmcm9tICcuL0Fubm90YXRpb25Ob2RlJztcclxuaW1wb3J0IE91dHB1dE5vZGUgZnJvbSAnLi9PdXRwdXROb2RlJztcclxuaW1wb3J0IERlZmF1bHROb2RlIGZyb20gJy4vRGVmYXVsdE5vZGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50TGlicmFyeSBmcm9tICcuL0NvbXBvbmVudExpYnJhcnknOyAvLyA8LSBuZXcgaW1wb3J0XHJcbmltcG9ydCBQcm9jZXNzTm9kZSBmcm9tICcuL1Byb2Nlc3NOb2RlJztcclxuaW1wb3J0IEluZmxvd0FkZE5vZGUgZnJvbSAnLi9JbmZsb3dBZGROb2RlJztcclxuaW1wb3J0IE91dGZsb3dBZGROb2RlIGZyb20gJy4vT3V0Zmxvd0FkZE5vZGUnO1xyXG5pbXBvcnQgUmVjZWl2ZXJOb2RlIGZyb20gJy4vUmVjZWl2ZXJOb2RlJztcclxuXHJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcclxuXHJcbmNvbnN0IGluaXRpYWxOb2RlczogTm9kZVtdID0gW1xyXG4ge1xyXG4gICAgaWQ6ICcxJyxcclxuICAgIHR5cGU6ICdwcm9jZXNzJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6ICdJbnB1dCBOb2RlJyxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyB4OiAyNTAsIHk6IDAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAnRGVmYXVsdCBOb2RlJyxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczJyxcclxuICAgIHR5cGU6ICdvdXRwdXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogJ091dHB1dCBOb2RlJyxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyB4OiA0MDAsIHk6IDEwMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc0JyxcclxuICAgIHR5cGU6ICdjdXN0b20nLFxyXG4gICAgcG9zaXRpb246IHsgeDogMTAwLCB5OiAyMDAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0czoge1xyXG4gICAgICAgICdoYW5kbGUtMCc6ICdiZXppZXInLFxyXG4gICAgICAgICdoYW5kbGUtMSc6ICdiZXppZXInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNScsXHJcbiAgICB0eXBlOiAnZGVmYXVsdCcsXHJcbiAgICBjbGFzc05hbWU6ICdhbm5vdGF0aW9uJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgT24gdGhlIGJvdHRvbSBsZWZ0IHlvdSBzZWUgdGhlIDxzdHJvbmc+Q29udHJvbHM8L3N0cm9uZz4gYW5kIHRoZSBib3R0b20gcmlnaHQgdGhleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+TWluaU1hcDwvc3Ryb25nPi4gVGhpcyBpcyBhbHNvIGp1c3QgYSBub2RlIPCfpbNcclxuICAgICAgICA8Lz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDE1MCwgeTogNDAwIH0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGdlcyA9IFtcclxuICB7IGlkOiAnZTEtMicsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICcyJywgbGFiZWw6ICd0aGlzIGlzIGFuIGVkZ2UgbGFiZWwnIH0sXHJcbiAgeyBpZDogJ2UxLTMnLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMycsIGFuaW1hdGVkOiB0cnVlIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdlNC01JyxcclxuICAgIHNvdXJjZTogJzQnLFxyXG4gICAgdGFyZ2V0OiAnNScsXHJcbiAgICB0eXBlOiAnc21vb3Roc3RlcCcsXHJcbiAgICBzb3VyY2VIYW5kbGU6ICdoYW5kbGUtMCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlbGVjdEluZGV4OiAwLFxyXG4gICAgfSxcclxuICAgIG1hcmtlckVuZDoge1xyXG4gICAgICB0eXBlOiBNYXJrZXJUeXBlLkFycm93Q2xvc2VkLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZTQtNicsXHJcbiAgICBzb3VyY2U6ICc0JyxcclxuICAgIHRhcmdldDogJzYnLFxyXG4gICAgdHlwZTogJ2JlemllcicsXHJcbiAgICBzb3VyY2VIYW5kbGU6ICdoYW5kbGUtMScsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlbGVjdEluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgIG1hcmtlckVuZDoge1xyXG4gICAgICB0eXBlOiBNYXJrZXJUeXBlLkFycm93Q2xvc2VkLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuXTtcclxuXHJcbmNvbnN0IGluaXRpYWxFZGdlczogRWRnZVtdID0gW1xyXG4gIHsgaWQ6ICdlMS0yJywgc291cmNlOiAnMScsIHRhcmdldDogJzInIH0sXHJcbiAgeyBpZDogJ2UxLTMnLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMycgfSxcclxuXTtcclxuXHJcbmNvbnN0IG5vZGVUeXBlcyA9IHtcclxuICBjdXN0b206IEN1c3RvbU5vZGUsXHJcbiAgaW5wdXQ6IElucHV0Tm9kZSxcclxuICB0ZXh0VXBkYXRlcjogVGV4dFVwZGF0ZXJOb2RlLFxyXG4gIGFubm90YXRpb246IEFubm90YXRpb25Ob2RlLFxyXG4gIG91dHB1dDogT3V0cHV0Tm9kZSxcclxuICBkZWZhdWx0OiBEZWZhdWx0Tm9kZSxcclxuICBwcm9jZXNzOiBQcm9jZXNzTm9kZSxcclxuICBpbmZsb3dBZGQ6IEluZmxvd0FkZE5vZGUsXHJcbiAgb3V0Zmxvd0FkZDogT3V0Zmxvd0FkZE5vZGUsIFxyXG4gIHJlY2VpdmVyOiBSZWNlaXZlck5vZGUsXHJcbn07XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdEVkZ2VPcHRpb25zID0ge1xyXG4gIGFuaW1hdGVkOiB0cnVlLFxyXG4gIHR5cGU6ICdiZXppZXInLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gRmxvdygpIHtcclxuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzLCBvbk5vZGVzQ2hhbmdlXSA9IHVzZU5vZGVzU3RhdGUoaW5pdGlhbE5vZGVzKTtcclxuICBjb25zdCBbZWRnZXMsIHNldEVkZ2VzLCBvbkVkZ2VzQ2hhbmdlXSA9IHVzZUVkZ2VzU3RhdGUoaW5pdGlhbEVkZ2VzKTtcclxuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZSgnZG90cycpO1xyXG4gIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHBhcmFtczogQ29ubmVjdGlvbiB8IEVkZ2UpID0+IHNldEVkZ2VzKChlZHMpID0+IGFkZEVkZ2UocGFyYW1zLCBlZHMpKSxcclxuICAgIFtzZXRFZGdlc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGROb2RlID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaWQgPSAobm9kZXMubGVuZ3RoICsgMSkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IG5ld05vZGUgPSB7XHJcbiAgICAgIGlkOiBpZCxcclxuICAgICAgZGF0YTogeyBcclxuICAgICAgICBsYWJlbDogYE5vZGUgJHtpZH1gLCBcclxuICAgICAgICBzZWxlY3RzOiB0eXBlID09PSAnY3VzdG9tJyA/IHsgJ2hhbmRsZS0wJzogJ3Ntb290aHN0ZXAnLCAnaGFuZGxlLTEnOiAnc21vb3Roc3RlcCcgfSA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc2l0aW9uOiB7IHg6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSwgeTogTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNSB9LFxyXG4gICAgICB0eXBlOiB0eXBlLFxyXG4gICAgfTtcclxuICAgIHNldE5vZGVzKChucykgPT4gbnMuY29uY2F0KG5ld05vZGUpKTtcclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1ncmF5LTIwMCByZWxhdGl2ZVwiPlxyXG4gICAgICA8Q29tcG9uZW50TGlicmFyeSBhZGROb2RlPXthZGROb2RlfSAvPlxyXG4gICAgICA8UmVhY3RGbG93XHJcbiAgICAgICAgbm9kZXM9e25vZGVzfVxyXG4gICAgICAgIG9uTm9kZXNDaGFuZ2U9e29uTm9kZXNDaGFuZ2V9XHJcbiAgICAgICAgZWRnZXM9e2VkZ2VzfVxyXG4gICAgICAgIG9uRWRnZXNDaGFuZ2U9e29uRWRnZXNDaGFuZ2V9XHJcbiAgICAgICAgb25Db25uZWN0PXtvbkNvbm5lY3R9XHJcbiAgICAgICAgbm9kZVR5cGVzPXtub2RlVHlwZXN9XHJcbiAgICAgICAgZGVmYXVsdEVkZ2VPcHRpb25zPXtkZWZhdWx0RWRnZU9wdGlvbnN9XHJcbiAgICAgICAgY29ubmVjdGlvbkxpbmVUeXBlPXtDb25uZWN0aW9uTGluZVR5cGUuQmV6aWVyfVxyXG4gICAgICAgIGZpdFZpZXdcclxuICAgICAgPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kIGNvbG9yPVwiI2NjY1wiIHZhcmlhbnQ9e3ZhcmlhbnR9IC8+XHJcbiAgICAgICAgPENvbnRyb2xzIHBvc2l0aW9uPSd0b3AtcmlnaHQnIGJhY2tncm91bnMtY29sb3I9J3doaXRlJyAvPlxyXG4gICAgICA8L1JlYWN0Rmxvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3c7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJSZWFjdEZsb3ciLCJ1c2VOb2Rlc1N0YXRlIiwidXNlRWRnZXNTdGF0ZSIsImFkZEVkZ2UiLCJDb25uZWN0aW9uTGluZVR5cGUiLCJDb250cm9scyIsIkJhY2tncm91bmQiLCJNYXJrZXJUeXBlIiwiQ3VzdG9tTm9kZSIsIklucHV0Tm9kZSIsIlRleHRVcGRhdGVyTm9kZSIsIkFubm90YXRpb25Ob2RlIiwiT3V0cHV0Tm9kZSIsIkRlZmF1bHROb2RlIiwiQ29tcG9uZW50TGlicmFyeSIsIlByb2Nlc3NOb2RlIiwiSW5mbG93QWRkTm9kZSIsIk91dGZsb3dBZGROb2RlIiwiUmVjZWl2ZXJOb2RlIiwiaW5pdGlhbE5vZGVzIiwiaWQiLCJ0eXBlIiwiZGF0YSIsImxhYmVsIiwicG9zaXRpb24iLCJ4IiwieSIsInNlbGVjdHMiLCJjbGFzc05hbWUiLCJzdHJvbmciLCJzZWxlY3RhYmxlIiwiZWRnZXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJhbmltYXRlZCIsInNvdXJjZUhhbmRsZSIsInNlbGVjdEluZGV4IiwibWFya2VyRW5kIiwiQXJyb3dDbG9zZWQiLCJpbml0aWFsRWRnZXMiLCJub2RlVHlwZXMiLCJjdXN0b20iLCJpbnB1dCIsInRleHRVcGRhdGVyIiwiYW5ub3RhdGlvbiIsIm91dHB1dCIsImRlZmF1bHQiLCJwcm9jZXNzIiwiaW5mbG93QWRkIiwib3V0Zmxvd0FkZCIsInJlY2VpdmVyIiwiZGVmYXVsdEVkZ2VPcHRpb25zIiwiRmxvdyIsIm5vZGVzIiwic2V0Tm9kZXMiLCJvbk5vZGVzQ2hhbmdlIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJvbkNvbm5lY3QiLCJwYXJhbXMiLCJlZHMiLCJhZGROb2RlIiwibGVuZ3RoIiwidG9TdHJpbmciLCJuZXdOb2RlIiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm5zIiwiY29uY2F0IiwiZGl2IiwiY29ubmVjdGlvbkxpbmVUeXBlIiwiQmV6aWVyIiwiZml0VmlldyIsImNvbG9yIiwiYmFja2dyb3Vucy1jb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});