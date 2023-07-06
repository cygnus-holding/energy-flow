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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   edges: function() { return /* binding */ edges; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutputNode */ \"./components/Flow/OutputNode.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"input\",\n        data: {\n            label: \"Input Node\"\n        },\n        position: {\n            x: 250,\n            y: 0\n        }\n    },\n    {\n        id: \"2\",\n        data: {\n            label: \"Default Node\"\n        },\n        position: {\n            x: 100,\n            y: 100\n        }\n    },\n    {\n        id: \"3\",\n        type: \"output\",\n        data: {\n            label: \"Output Node\"\n        },\n        position: {\n            x: 400,\n            y: 100\n        }\n    },\n    {\n        id: \"4\",\n        type: \"custom\",\n        position: {\n            x: 100,\n            y: 200\n        },\n        data: {\n            selects: {\n                \"handle-0\": \"smoothstep\",\n                \"handle-1\": \"smoothstep\"\n            }\n        }\n    },\n    {\n        id: \"7\",\n        type: \"default\",\n        className: \"annotation\",\n        data: {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"On the bottom left you see the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Controls\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 42\n                    }, undefined),\n                    \" and the bottom right the\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"MiniMap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    \". This is also just a node \\uD83E\\uDD73\"\n                ]\n            }, void 0, true)\n        },\n        selectable: false,\n        position: {\n            x: 150,\n            y: 400\n        }\n    }\n];\nconst edges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\",\n        label: \"this is an edge label\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\",\n        animated: true\n    },\n    {\n        id: \"e4-5\",\n        source: \"4\",\n        target: \"5\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-0\",\n        data: {\n            selectIndex: 0\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_8__.MarkerType.ArrowClosed\n        }\n    },\n    {\n        id: \"e4-6\",\n        source: \"4\",\n        target: \"6\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-1\",\n        data: {\n            selectIndex: 1\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_8__.MarkerType.ArrowClosed\n        }\n    }\n];\nconst initialEdges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\"\n    }\n];\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    output: _OutputNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"smoothstep\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_8__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_8__.useEdgesState)(initialEdges);\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dots\");\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_8__.addEdge)(params, eds)), [\n        setEdges\n    ]);\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth,\n                y: Math.random() * window.innerHeight\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded\",\n                onClick: ()=>addNode(\"custom\"),\n                children: \"Add Custom Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded ml-4\",\n                onClick: ()=>addNode(\"input\"),\n                children: \"Add Input Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded ml-4\",\n                onClick: ()=>addNode(\"textUpdater\"),\n                children: \"Add TextUpdater Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-2 px-4 bg-blue-500 text-white rounded ml-4\",\n                onClick: ()=>addNode(\"annotation\"),\n                children: \"Add Annotation Node\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                nodes: nodes,\n                onNodesChange: onNodesChange,\n                edges: edges,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_8__.ConnectionLineType.Bezier,\n                fitView: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_8__.Background, {\n                        color: \"#ccc\",\n                        variant: variant\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_8__.Controls, {\n                        position: \"top-left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 157,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"rjgETLlwiXdUhUJoGukTktPj+p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_8__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_8__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQWtCM0I7QUFDbUI7QUFDRjtBQUNZO0FBQ0Y7QUFDUjtBQUdKO0FBRWxDLE1BQU1lLGVBQXVCO0lBQzVCO1FBQ0dDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1lBQ0pDLE9BQU87UUFDVDtRQUNBQyxVQUFVO1lBQUVDLEdBQUc7WUFBS0MsR0FBRztRQUFFO0lBQzNCO0lBQ0E7UUFDRU4sSUFBSTtRQUNKRSxNQUFNO1lBQ0pDLE9BQU87UUFDVDtRQUNBQyxVQUFVO1lBQUVDLEdBQUc7WUFBS0MsR0FBRztRQUFJO0lBQzdCO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07WUFDSkMsT0FBTztRQUNUO1FBQ0FDLFVBQVU7WUFBRUMsR0FBRztZQUFLQyxHQUFHO1FBQUk7SUFDN0I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE1BQU07UUFDTkcsVUFBVTtZQUFFQyxHQUFHO1lBQUtDLEdBQUc7UUFBSTtRQUMzQkosTUFBTTtZQUNKSyxTQUFTO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtZQUNkO1FBQ0Y7SUFDRjtJQUNBO1FBQ0VQLElBQUk7UUFDSkMsTUFBTTtRQUNOTyxXQUFXO1FBQ1hOLE1BQU07WUFDSkMscUJBQ0U7O29CQUFFO2tDQUMrQiw4REFBQ007a0NBQU87Ozs7OztvQkFBaUI7b0JBQTBCO2tDQUNsRiw4REFBQ0E7a0NBQU87Ozs7OztvQkFBZ0I7OztRQUc5QjtRQUNBQyxZQUFZO1FBQ1pOLFVBQVU7WUFBRUMsR0FBRztZQUFLQyxHQUFHO1FBQUk7SUFDN0I7Q0FDRDtBQUVNLE1BQU1LLFFBQVE7SUFDbkI7UUFBRVgsSUFBSTtRQUFRWSxRQUFRO1FBQUtDLFFBQVE7UUFBS1YsT0FBTztJQUF3QjtJQUN2RTtRQUFFSCxJQUFJO1FBQVFZLFFBQVE7UUFBS0MsUUFBUTtRQUFLQyxVQUFVO0lBQUs7SUFDdkQ7UUFDRWQsSUFBSTtRQUNKWSxRQUFRO1FBQ1JDLFFBQVE7UUFDUlosTUFBTTtRQUNOYyxjQUFjO1FBQ2RiLE1BQU07WUFDSmMsYUFBYTtRQUNmO1FBQ0FDLFdBQVc7WUFDVGhCLE1BQU1SLGlEQUFVQSxDQUFDeUI7UUFDbkI7SUFDRjtJQUNBO1FBQ0VsQixJQUFJO1FBQ0pZLFFBQVE7UUFDUkMsUUFBUTtRQUNSWixNQUFNO1FBQ05jLGNBQWM7UUFDZGIsTUFBTTtZQUNKYyxhQUFhO1FBQ2Y7UUFDQUMsV0FBVztZQUNUaEIsTUFBTVIsaURBQVVBLENBQUN5QjtRQUNuQjtJQUNGO0NBRUQsQ0FBQztBQUVGLE1BQU1DLGVBQXVCO0lBQzNCO1FBQUVuQixJQUFJO1FBQVFZLFFBQVE7UUFBS0MsUUFBUTtJQUFJO0lBQ3ZDO1FBQUViLElBQUk7UUFBUVksUUFBUTtRQUFLQyxRQUFRO0lBQUk7Q0FDeEM7QUFFRCxNQUFNTyxZQUFZO0lBQ2hCQyxRQUFRM0IsbURBQVVBO0lBQ2xCNEIsT0FBTzNCLGtEQUFTQTtJQUNoQjRCLGFBQWEzQix3REFBZUE7SUFDNUI0QixZQUFZM0IsdURBQWNBO0lBQzFCNEIsUUFBUTNCLG1EQUFVQTtBQUVwQjtBQUVBLE1BQU00QixxQkFBcUI7SUFDekJaLFVBQVU7SUFDVmIsTUFBTTtBQUNSO0FBRUEsU0FBUzBCOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsVUFBVUMsY0FBYyxHQUFHM0Msd0RBQWFBLENBQUNZO0lBQ3ZELE1BQU0sQ0FBQ1ksT0FBT29CLFVBQVVDLGNBQWMsR0FBRzVDLHdEQUFhQSxDQUFDK0I7SUFDdkQsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdsRCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNbUQsWUFBWWxELGtEQUFXQSxDQUMzQixDQUFDbUQsU0FBOEJMLFNBQVMsQ0FBQ00sTUFBUWhELGtEQUFPQSxDQUFDK0MsUUFBUUMsT0FDakU7UUFBQ047S0FBUztJQUdaLE1BQU1PLFVBQVUsQ0FBQ3JDO1FBQ2YsTUFBTUQsS0FBSyxDQUFDNEIsTUFBTVcsU0FBUyxHQUFHQztRQUM5QixNQUFNQyxVQUFVO1lBQ2R6QyxJQUFJQTtZQUNKRSxNQUFNO2dCQUNKQyxPQUFPLFFBQVcsT0FBSEg7Z0JBQ2ZPLFNBQVNOLFNBQVMsV0FBVztvQkFBRSxZQUFZO29CQUFjLFlBQVk7Z0JBQWEsSUFBSSxDQUFDO1lBQ3pGO1lBQ0FHLFVBQVU7Z0JBQUVDLEdBQUdxQyxLQUFLQyxXQUFXQyxPQUFPQztnQkFBWXZDLEdBQUdvQyxLQUFLQyxXQUFXQyxPQUFPRTtZQUFZO1lBQ3hGN0MsTUFBTUE7UUFDUjtRQUNBNEIsU0FBUyxDQUFDa0IsS0FBT0EsR0FBR0MsT0FBT1A7SUFDN0I7SUFHQSxxQkFDRSw4REFBQ1E7UUFBSXpDLFdBQVU7OzBCQUNiLDhEQUFDMEM7Z0JBQU8xQyxXQUFVO2dCQUEyQzJDLFNBQVMsSUFBTWIsUUFBUTswQkFBVzs7Ozs7OzBCQUMvRiw4REFBQ1k7Z0JBQU8xQyxXQUFVO2dCQUFnRDJDLFNBQVMsSUFBTWIsUUFBUTswQkFBVTs7Ozs7OzBCQUNuRyw4REFBQ1k7Z0JBQU8xQyxXQUFVO2dCQUFnRDJDLFNBQVMsSUFBTWIsUUFBUTswQkFBZ0I7Ozs7OzswQkFDekcsOERBQUNZO2dCQUFPMUMsV0FBVTtnQkFBZ0QyQyxTQUFTLElBQU1iLFFBQVE7MEJBQWU7Ozs7OzswQkFDeEcsOERBQUNwRCxpREFBU0E7Z0JBQ1IwQyxPQUFPQTtnQkFDUEUsZUFBZUE7Z0JBQ2ZuQixPQUFPQTtnQkFDUHFCLGVBQWVBO2dCQUNmRyxXQUFXQTtnQkFDWGYsV0FBV0E7Z0JBQ1hNLG9CQUFvQkE7Z0JBQ3BCMEIsb0JBQW9COUQseURBQWtCQSxDQUFDK0Q7Z0JBQ3ZDQyxPQUFPOztrQ0FFUCw4REFBQzlELGlEQUFVQTt3QkFBQytELE9BQU07d0JBQU90QixTQUFTQTs7Ozs7O2tDQUNsQyw4REFBQzFDLCtDQUFRQTt3QkFBQ2EsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNCO0dBOUNTdUI7O1FBQ2tDeEMsb0RBQWFBO1FBQ2JDLG9EQUFhQTs7O0tBRi9DdUM7QUFnRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbG93L2luZGV4LnRzeD80MDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0Rmxvdywge1xyXG4gIE5vZGUsXHJcbiAgdXNlTm9kZXNTdGF0ZSxcclxuICB1c2VFZGdlc1N0YXRlLFxyXG4gIGFkZEVkZ2UsXHJcbiAgQ29ubmVjdGlvbixcclxuICBFZGdlLFxyXG4gIENvbm5lY3Rpb25MaW5lVHlwZSxcclxuICBDb250cm9scyxcclxuICBCYWNrZ3JvdW5kLFxyXG4gIE1pbmlNYXAsXHJcbiAgTWFya2VyVHlwZSxcclxuICBQb3NpdGlvbixcclxuICBIYW5kbGUsXHJcbiAgdXNlU3RvcmVBcGksXHJcbiAgdXNlUmVhY3RGbG93LFxyXG4gIEVsZW1lbnRzLFxyXG59IGZyb20gJ3JlYWN0Zmxvdyc7XHJcbmltcG9ydCBDdXN0b21Ob2RlIGZyb20gJy4vQ3VzdG9tTm9kZSc7XHJcbmltcG9ydCBJbnB1dE5vZGUgZnJvbSAnLi9JbnB1dE5vZGUnO1xyXG5pbXBvcnQgVGV4dFVwZGF0ZXJOb2RlIGZyb20gJy4vVGV4dFVwZGF0ZXJOb2RlJztcclxuaW1wb3J0IEFubm90YXRpb25Ob2RlIGZyb20gJy4vQW5ub3RhdGlvbk5vZGUnO1xyXG5pbXBvcnQgT3V0cHV0Tm9kZSBmcm9tICcuL091dHB1dE5vZGUnO1xyXG5pbXBvcnQgRGVmYXVsdE5vZGUgZnJvbSAnLi9EZWZhdWx0Tm9kZSc7XHJcblxyXG5pbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XHJcblxyXG5jb25zdCBpbml0aWFsTm9kZXM6IE5vZGVbXSA9IFtcclxuIHtcclxuICAgIGlkOiAnMScsXHJcbiAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogJ0lucHV0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDI1MCwgeTogMCB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcyJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6ICdEZWZhdWx0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzMnLFxyXG4gICAgdHlwZTogJ291dHB1dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAnT3V0cHV0IE5vZGUnLFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDQwMCwgeTogMTAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzQnLFxyXG4gICAgdHlwZTogJ2N1c3RvbScsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDIwMCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RzOiB7XHJcbiAgICAgICAgJ2hhbmRsZS0wJzogJ3Ntb290aHN0ZXAnLFxyXG4gICAgICAgICdoYW5kbGUtMSc6ICdzbW9vdGhzdGVwJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzcnLFxyXG4gICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgY2xhc3NOYW1lOiAnYW5ub3RhdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIE9uIHRoZSBib3R0b20gbGVmdCB5b3Ugc2VlIHRoZSA8c3Ryb25nPkNvbnRyb2xzPC9zdHJvbmc+IGFuZCB0aGUgYm90dG9tIHJpZ2h0IHRoZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPk1pbmlNYXA8L3N0cm9uZz4uIFRoaXMgaXMgYWxzbyBqdXN0IGEgbm9kZSDwn6WzXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxNTAsIHk6IDQwMCB9LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZWRnZXMgPSBbXHJcbiAgeyBpZDogJ2UxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicsIGxhYmVsOiAndGhpcyBpcyBhbiBlZGdlIGxhYmVsJyB9LFxyXG4gIHsgaWQ6ICdlMS0zJywgc291cmNlOiAnMScsIHRhcmdldDogJzMnLCBhbmltYXRlZDogdHJ1ZSB9LFxyXG4gIHtcclxuICAgIGlkOiAnZTQtNScsXHJcbiAgICBzb3VyY2U6ICc0JyxcclxuICAgIHRhcmdldDogJzUnLFxyXG4gICAgdHlwZTogJ3Ntb290aHN0ZXAnLFxyXG4gICAgc291cmNlSGFuZGxlOiAnaGFuZGxlLTAnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBtYXJrZXJFbmQ6IHtcclxuICAgICAgdHlwZTogTWFya2VyVHlwZS5BcnJvd0Nsb3NlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2U0LTYnLFxyXG4gICAgc291cmNlOiAnNCcsXHJcbiAgICB0YXJnZXQ6ICc2JyxcclxuICAgIHR5cGU6ICdzbW9vdGhzdGVwJyxcclxuICAgIHNvdXJjZUhhbmRsZTogJ2hhbmRsZS0xJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2VsZWN0SW5kZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgbWFya2VyRW5kOiB7XHJcbiAgICAgIHR5cGU6IE1hcmtlclR5cGUuQXJyb3dDbG9zZWQsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG5dO1xyXG5cclxuY29uc3QgaW5pdGlhbEVkZ2VzOiBFZGdlW10gPSBbXHJcbiAgeyBpZDogJ2UxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicgfSxcclxuICB7IGlkOiAnZTEtMycsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICczJyB9LFxyXG5dO1xyXG5cclxuY29uc3Qgbm9kZVR5cGVzID0ge1xyXG4gIGN1c3RvbTogQ3VzdG9tTm9kZSxcclxuICBpbnB1dDogSW5wdXROb2RlLFxyXG4gIHRleHRVcGRhdGVyOiBUZXh0VXBkYXRlck5vZGUsXHJcbiAgYW5ub3RhdGlvbjogQW5ub3RhdGlvbk5vZGUsXHJcbiAgb3V0cHV0OiBPdXRwdXROb2RlLFxyXG4gIFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEVkZ2VPcHRpb25zID0ge1xyXG4gIGFuaW1hdGVkOiB0cnVlLFxyXG4gIHR5cGU6ICdzbW9vdGhzdGVwJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEZsb3coKSB7XHJcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlcywgb25Ob2Rlc0NoYW5nZV0gPSB1c2VOb2Rlc1N0YXRlKGluaXRpYWxOb2Rlcyk7XHJcbiAgY29uc3QgW2VkZ2VzLCBzZXRFZGdlcywgb25FZGdlc0NoYW5nZV0gPSB1c2VFZGdlc1N0YXRlKGluaXRpYWxFZGdlcyk7XHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoJ2RvdHMnKTtcclxuICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjayhcclxuICAgIChwYXJhbXM6IENvbm5lY3Rpb24gfCBFZGdlKSA9PiBzZXRFZGdlcygoZWRzKSA9PiBhZGRFZGdlKHBhcmFtcywgZWRzKSksXHJcbiAgICBbc2V0RWRnZXNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkTm9kZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGlkID0gKG5vZGVzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBuZXdOb2RlID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgbGFiZWw6IGBOb2RlICR7aWR9YCwgXHJcbiAgICAgICAgc2VsZWN0czogdHlwZSA9PT0gJ2N1c3RvbScgPyB7ICdoYW5kbGUtMCc6ICdzbW9vdGhzdGVwJywgJ2hhbmRsZS0xJzogJ3Ntb290aHN0ZXAnIH0gOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogeyB4OiBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGgsIHk6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgfSxcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgIH07XHJcbiAgICBzZXROb2RlcygobnMpID0+IG5zLmNvbmNhdChuZXdOb2RlKSk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctZ3JheS0yMDAgcC0xMFwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBhZGROb2RlKCdjdXN0b20nKX0+QWRkIEN1c3RvbSBOb2RlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBtbC00XCIgb25DbGljaz17KCkgPT4gYWRkTm9kZSgnaW5wdXQnKX0+QWRkIElucHV0IE5vZGU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweS0yIHB4LTQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIG1sLTRcIiBvbkNsaWNrPXsoKSA9PiBhZGROb2RlKCd0ZXh0VXBkYXRlcicpfT5BZGQgVGV4dFVwZGF0ZXIgTm9kZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgbWwtNFwiIG9uQ2xpY2s9eygpID0+IGFkZE5vZGUoJ2Fubm90YXRpb24nKX0+QWRkIEFubm90YXRpb24gTm9kZTwvYnV0dG9uPlxyXG4gICAgICA8UmVhY3RGbG93XHJcbiAgICAgICAgbm9kZXM9e25vZGVzfVxyXG4gICAgICAgIG9uTm9kZXNDaGFuZ2U9e29uTm9kZXNDaGFuZ2V9XHJcbiAgICAgICAgZWRnZXM9e2VkZ2VzfVxyXG4gICAgICAgIG9uRWRnZXNDaGFuZ2U9e29uRWRnZXNDaGFuZ2V9XHJcbiAgICAgICAgb25Db25uZWN0PXtvbkNvbm5lY3R9XHJcbiAgICAgICAgbm9kZVR5cGVzPXtub2RlVHlwZXN9XHJcbiAgICAgICAgZGVmYXVsdEVkZ2VPcHRpb25zPXtkZWZhdWx0RWRnZU9wdGlvbnN9XHJcbiAgICAgICAgY29ubmVjdGlvbkxpbmVUeXBlPXtDb25uZWN0aW9uTGluZVR5cGUuQmV6aWVyfVxyXG4gICAgICAgIGZpdFZpZXdcclxuICAgICAgPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kIGNvbG9yPVwiI2NjY1wiIHZhcmlhbnQ9e3ZhcmlhbnR9IC8+XHJcbiAgICAgICAgPENvbnRyb2xzIHBvc2l0aW9uPSd0b3AtbGVmdCcgLz5cclxuICAgICAgPC9SZWFjdEZsb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG93OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiUmVhY3RGbG93IiwidXNlTm9kZXNTdGF0ZSIsInVzZUVkZ2VzU3RhdGUiLCJhZGRFZGdlIiwiQ29ubmVjdGlvbkxpbmVUeXBlIiwiQ29udHJvbHMiLCJCYWNrZ3JvdW5kIiwiTWFya2VyVHlwZSIsIkN1c3RvbU5vZGUiLCJJbnB1dE5vZGUiLCJUZXh0VXBkYXRlck5vZGUiLCJBbm5vdGF0aW9uTm9kZSIsIk91dHB1dE5vZGUiLCJpbml0aWFsTm9kZXMiLCJpZCIsInR5cGUiLCJkYXRhIiwibGFiZWwiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic2VsZWN0cyIsImNsYXNzTmFtZSIsInN0cm9uZyIsInNlbGVjdGFibGUiLCJlZGdlcyIsInNvdXJjZSIsInRhcmdldCIsImFuaW1hdGVkIiwic291cmNlSGFuZGxlIiwic2VsZWN0SW5kZXgiLCJtYXJrZXJFbmQiLCJBcnJvd0Nsb3NlZCIsImluaXRpYWxFZGdlcyIsIm5vZGVUeXBlcyIsImN1c3RvbSIsImlucHV0IiwidGV4dFVwZGF0ZXIiLCJhbm5vdGF0aW9uIiwib3V0cHV0IiwiZGVmYXVsdEVkZ2VPcHRpb25zIiwiRmxvdyIsIm5vZGVzIiwic2V0Tm9kZXMiLCJvbk5vZGVzQ2hhbmdlIiwic2V0RWRnZXMiLCJvbkVkZ2VzQ2hhbmdlIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJvbkNvbm5lY3QiLCJwYXJhbXMiLCJlZHMiLCJhZGROb2RlIiwibGVuZ3RoIiwidG9TdHJpbmciLCJuZXdOb2RlIiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm5zIiwiY29uY2F0IiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNvbm5lY3Rpb25MaW5lVHlwZSIsIkJlemllciIsImZpdFZpZXciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});