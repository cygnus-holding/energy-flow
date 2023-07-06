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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   edges: function() { return /* binding */ edges; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutputNode */ \"./components/Flow/OutputNode.tsx\");\n/* harmony import */ var _DefaultNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultNode */ \"./components/Flow/DefaultNode.tsx\");\n/* harmony import */ var _ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComponentLibrary */ \"./components/Flow/ComponentLibrary.tsx\");\n/* harmony import */ var _ProcessNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProcessNode */ \"./components/Flow/ProcessNode.tsx\");\n/* harmony import */ var _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InflowAddNode */ \"./components/Flow/InflowAddNode.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // <- new import\n\n\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"input\",\n        data: {\n            label: \"Input Node\"\n        },\n        position: {\n            x: 250,\n            y: 0\n        }\n    },\n    {\n        id: \"2\",\n        data: {\n            label: \"Default Node\"\n        },\n        position: {\n            x: 100,\n            y: 100\n        }\n    },\n    {\n        id: \"3\",\n        type: \"output\",\n        data: {\n            label: \"Output Node\"\n        },\n        position: {\n            x: 400,\n            y: 100\n        }\n    },\n    {\n        id: \"4\",\n        type: \"custom\",\n        position: {\n            x: 100,\n            y: 200\n        },\n        data: {\n            selects: {\n                \"handle-0\": \"bezier\",\n                \"handle-1\": \"bezier\"\n            }\n        }\n    },\n    {\n        id: \"5\",\n        type: \"default\",\n        className: \"annotation\",\n        data: {\n            label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"On the bottom left you see the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Controls\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 42\n                    }, undefined),\n                    \" and the bottom right the\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"MiniMap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    \". This is also just a node \\uD83E\\uDD73\"\n                ]\n            }, void 0, true)\n        },\n        selectable: false,\n        position: {\n            x: 150,\n            y: 400\n        }\n    }\n];\nconst edges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\",\n        label: \"this is an edge label\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\",\n        animated: true\n    },\n    {\n        id: \"e4-5\",\n        source: \"4\",\n        target: \"5\",\n        type: \"smoothstep\",\n        sourceHandle: \"handle-0\",\n        data: {\n            selectIndex: 0\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_12__.MarkerType.ArrowClosed\n        }\n    },\n    {\n        id: \"e4-6\",\n        source: \"4\",\n        target: \"6\",\n        type: \"bezier\",\n        sourceHandle: \"handle-1\",\n        data: {\n            selectIndex: 1\n        },\n        markerEnd: {\n            type: reactflow__WEBPACK_IMPORTED_MODULE_12__.MarkerType.ArrowClosed\n        }\n    }\n];\nconst initialEdges = [\n    {\n        id: \"e1-2\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"e1-3\",\n        source: \"1\",\n        target: \"3\"\n    }\n];\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    output: _OutputNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    default: _DefaultNode__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    process: _ProcessNode__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    inflowAdd: _InflowAddNode__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"bezier\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_12__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_12__.useEdgesState)(initialEdges);\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dots\");\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_12__.addEdge)(params, eds)), [\n        setEdges\n    ]);\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth * 0.5,\n                y: Math.random() * window.innerHeight * 0.5\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ComponentLibrary__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                addNode: addNode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                nodes: nodes,\n                onNodesChange: onNodesChange,\n                edges: edges,\n                onEdgesChange: onEdgesChange,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_12__.ConnectionLineType.Bezier,\n                fitView: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_12__.Background, {\n                        color: \"#ccc\",\n                        variant: variant\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_12__.Controls, {\n                        position: \"top-right\",\n                        \"backgrouns-color\": \"white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 176,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 162,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"rjgETLlwiXdUhUJoGukTktPj+p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_12__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_12__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFpQjNCO0FBQ21CO0FBQ0Y7QUFDWTtBQUNGO0FBQ1I7QUFDRTtBQUNVLENBQUMsZ0JBQWdCO0FBQzNCO0FBQ0k7QUFFVjtBQUVsQyxNQUFNbUIsZUFBdUI7SUFDNUI7UUFDR0MsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07WUFDSkMsT0FBTztRQUNUO1FBQ0FDLFVBQVU7WUFBRUMsR0FBRztZQUFLQyxHQUFHO1FBQUU7SUFDM0I7SUFDQTtRQUNFTixJQUFJO1FBQ0pFLE1BQU07WUFDSkMsT0FBTztRQUNUO1FBQ0FDLFVBQVU7WUFBRUMsR0FBRztZQUFLQyxHQUFHO1FBQUk7SUFDN0I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxPQUFPO1FBQ1Q7UUFDQUMsVUFBVTtZQUFFQyxHQUFHO1lBQUtDLEdBQUc7UUFBSTtJQUM3QjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsTUFBTTtRQUNORyxVQUFVO1lBQUVDLEdBQUc7WUFBS0MsR0FBRztRQUFJO1FBQzNCSixNQUFNO1lBQ0pLLFNBQVM7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZO1lBQ2Q7UUFDRjtJQUNGO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05PLFdBQVc7UUFDWE4sTUFBTTtZQUNKQyxxQkFDRTs7b0JBQUU7a0NBQytCLDhEQUFDTTtrQ0FBTzs7Ozs7O29CQUFpQjtvQkFBMEI7a0NBQ2xGLDhEQUFDQTtrQ0FBTzs7Ozs7O29CQUFnQjs7O1FBRzlCO1FBQ0FDLFlBQVk7UUFDWk4sVUFBVTtZQUFFQyxHQUFHO1lBQUtDLEdBQUc7UUFBSTtJQUM3QjtDQUNEO0FBRU0sTUFBTUssUUFBUTtJQUNuQjtRQUFFWCxJQUFJO1FBQVFZLFFBQVE7UUFBS0MsUUFBUTtRQUFLVixPQUFPO0lBQXdCO0lBQ3ZFO1FBQUVILElBQUk7UUFBUVksUUFBUTtRQUFLQyxRQUFRO1FBQUtDLFVBQVU7SUFBSztJQUN2RDtRQUNFZCxJQUFJO1FBQ0pZLFFBQVE7UUFDUkMsUUFBUTtRQUNSWixNQUFNO1FBQ05jLGNBQWM7UUFDZGIsTUFBTTtZQUNKYyxhQUFhO1FBQ2Y7UUFDQUMsV0FBVztZQUNUaEIsTUFBTVosa0RBQVVBLENBQUM2QjtRQUNuQjtJQUNGO0lBQ0E7UUFDRWxCLElBQUk7UUFDSlksUUFBUTtRQUNSQyxRQUFRO1FBQ1JaLE1BQU07UUFDTmMsY0FBYztRQUNkYixNQUFNO1lBQ0pjLGFBQWE7UUFDZjtRQUNBQyxXQUFXO1lBQ1RoQixNQUFNWixrREFBVUEsQ0FBQzZCO1FBQ25CO0lBQ0Y7Q0FFRCxDQUFDO0FBRUYsTUFBTUMsZUFBdUI7SUFDM0I7UUFBRW5CLElBQUk7UUFBUVksUUFBUTtRQUFLQyxRQUFRO0lBQUk7SUFDdkM7UUFBRWIsSUFBSTtRQUFRWSxRQUFRO1FBQUtDLFFBQVE7SUFBSTtDQUN4QztBQUVELE1BQU1PLFlBQVk7SUFDaEJDLFFBQVEvQixtREFBVUE7SUFDbEJnQyxPQUFPL0Isa0RBQVNBO0lBQ2hCZ0MsYUFBYS9CLHdEQUFlQTtJQUM1QmdDLFlBQVkvQix1REFBY0E7SUFDMUJnQyxRQUFRL0IsbURBQVVBO0lBQ2xCZ0MsU0FBUy9CLG9EQUFXQTtJQUNwQmdDLFNBQVM5QixvREFBV0E7SUFDcEIrQixXQUFXOUIsdURBQWFBO0FBQzFCO0FBR0EsTUFBTStCLHFCQUFxQjtJQUN6QmYsVUFBVTtJQUNWYixNQUFNO0FBQ1I7QUFFQSxTQUFTNkI7O0lBQ1AsTUFBTSxDQUFDQyxPQUFPQyxVQUFVQyxjQUFjLEdBQUdsRCx5REFBYUEsQ0FBQ2dCO0lBQ3ZELE1BQU0sQ0FBQ1ksT0FBT3VCLFVBQVVDLGNBQWMsR0FBR25ELHlEQUFhQSxDQUFDbUM7SUFDdkQsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHekQsK0NBQVFBLENBQUM7SUFDdkMsTUFBTTBELFlBQVl6RCxrREFBV0EsQ0FDM0IsQ0FBQzBELFNBQThCTCxTQUFTLENBQUNNLE1BQVF2RCxtREFBT0EsQ0FBQ3NELFFBQVFDLE9BQ2pFO1FBQUNOO0tBQVM7SUFHWixNQUFNTyxVQUFVLENBQUN4QztRQUNmLE1BQU1ELEtBQUssQ0FBQytCLE1BQU1XLFNBQVMsR0FBR0M7UUFDOUIsTUFBTUMsVUFBVTtZQUNkNUMsSUFBSUE7WUFDSkUsTUFBTTtnQkFDSkMsT0FBTyxRQUFXLE9BQUhIO2dCQUNmTyxTQUFTTixTQUFTLFdBQVc7b0JBQUUsWUFBWTtvQkFBYyxZQUFZO2dCQUFhLElBQUksQ0FBQztZQUN6RjtZQUNBRyxVQUFVO2dCQUFFQyxHQUFHd0MsS0FBS0MsV0FBV0MsT0FBT0MsYUFBYTtnQkFBSzFDLEdBQUd1QyxLQUFLQyxXQUFXQyxPQUFPRSxjQUFjO1lBQUk7WUFDcEdoRCxNQUFNQTtRQUNSO1FBQ0ErQixTQUFTLENBQUNrQixLQUFPQSxHQUFHQyxPQUFPUDtJQUM3QjtJQUdBLHFCQUNFLDhEQUFDUTtRQUFJNUMsV0FBVTs7MEJBQ2IsOERBQUNaLHlEQUFnQkE7Z0JBQUM2QyxTQUFTQTs7Ozs7OzBCQUMzQiw4REFBQzNELGtEQUFTQTtnQkFDUmlELE9BQU9BO2dCQUNQRSxlQUFlQTtnQkFDZnRCLE9BQU9BO2dCQUNQd0IsZUFBZUE7Z0JBQ2ZHLFdBQVdBO2dCQUNYbEIsV0FBV0E7Z0JBQ1hTLG9CQUFvQkE7Z0JBQ3BCd0Isb0JBQW9CbkUsMERBQWtCQSxDQUFDb0U7Z0JBQ3ZDQyxPQUFPOztrQ0FFUCw4REFBQ25FLGtEQUFVQTt3QkFBQ29FLE9BQU07d0JBQU9wQixTQUFTQTs7Ozs7O2tDQUNsQyw4REFBQ2pELGdEQUFRQTt3QkFBQ2lCLFVBQVM7d0JBQVlxRCxvQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4RDtHQTNDUzNCOztRQUNrQy9DLHFEQUFhQTtRQUNiQyxxREFBYUE7OztLQUYvQzhDO0FBNkNULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmxvdy9pbmRleC50c3g/NDAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdEZsb3csIHtcclxuICBOb2RlLFxyXG4gIHVzZU5vZGVzU3RhdGUsXHJcbiAgdXNlRWRnZXNTdGF0ZSxcclxuICBhZGRFZGdlLFxyXG4gIENvbm5lY3Rpb24sXHJcbiAgRWRnZSxcclxuICBDb25uZWN0aW9uTGluZVR5cGUsXHJcbiAgQ29udHJvbHMsXHJcbiAgQmFja2dyb3VuZCxcclxuICBNaW5pTWFwLFxyXG4gIE1hcmtlclR5cGUsXHJcbiAgUG9zaXRpb24sXHJcbiAgSGFuZGxlLFxyXG4gIHVzZVN0b3JlQXBpLFxyXG4gIHVzZVJlYWN0RmxvdyxcclxufSBmcm9tICdyZWFjdGZsb3cnO1xyXG5pbXBvcnQgQ3VzdG9tTm9kZSBmcm9tICcuL0N1c3RvbU5vZGUnO1xyXG5pbXBvcnQgSW5wdXROb2RlIGZyb20gJy4vSW5wdXROb2RlJztcclxuaW1wb3J0IFRleHRVcGRhdGVyTm9kZSBmcm9tICcuL1RleHRVcGRhdGVyTm9kZSc7XHJcbmltcG9ydCBBbm5vdGF0aW9uTm9kZSBmcm9tICcuL0Fubm90YXRpb25Ob2RlJztcclxuaW1wb3J0IE91dHB1dE5vZGUgZnJvbSAnLi9PdXRwdXROb2RlJztcclxuaW1wb3J0IERlZmF1bHROb2RlIGZyb20gJy4vRGVmYXVsdE5vZGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50TGlicmFyeSBmcm9tICcuL0NvbXBvbmVudExpYnJhcnknOyAvLyA8LSBuZXcgaW1wb3J0XHJcbmltcG9ydCBQcm9jZXNzTm9kZSBmcm9tICcuL1Byb2Nlc3NOb2RlJztcclxuaW1wb3J0IEluZmxvd0FkZE5vZGUgZnJvbSAnLi9JbmZsb3dBZGROb2RlJztcclxuXHJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcclxuXHJcbmNvbnN0IGluaXRpYWxOb2RlczogTm9kZVtdID0gW1xyXG4ge1xyXG4gICAgaWQ6ICcxJyxcclxuICAgIHR5cGU6ICdpbnB1dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAnSW5wdXQgTm9kZScsXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb246IHsgeDogMjUwLCB5OiAwIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzInLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsYWJlbDogJ0RlZmF1bHQgTm9kZScsXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb246IHsgeDogMTAwLCB5OiAxMDAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMycsXHJcbiAgICB0eXBlOiAnb3V0cHV0JyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbGFiZWw6ICdPdXRwdXQgTm9kZScsXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb246IHsgeDogNDAwLCB5OiAxMDAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNCcsXHJcbiAgICB0eXBlOiAnY3VzdG9tJyxcclxuICAgIHBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMjAwIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHNlbGVjdHM6IHtcclxuICAgICAgICAnaGFuZGxlLTAnOiAnYmV6aWVyJyxcclxuICAgICAgICAnaGFuZGxlLTEnOiAnYmV6aWVyJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzUnLFxyXG4gICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgY2xhc3NOYW1lOiAnYW5ub3RhdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIE9uIHRoZSBib3R0b20gbGVmdCB5b3Ugc2VlIHRoZSA8c3Ryb25nPkNvbnRyb2xzPC9zdHJvbmc+IGFuZCB0aGUgYm90dG9tIHJpZ2h0IHRoZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPk1pbmlNYXA8L3N0cm9uZz4uIFRoaXMgaXMgYWxzbyBqdXN0IGEgbm9kZSDwn6WzXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICBwb3NpdGlvbjogeyB4OiAxNTAsIHk6IDQwMCB9LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZWRnZXMgPSBbXHJcbiAgeyBpZDogJ2UxLTInLCBzb3VyY2U6ICcxJywgdGFyZ2V0OiAnMicsIGxhYmVsOiAndGhpcyBpcyBhbiBlZGdlIGxhYmVsJyB9LFxyXG4gIHsgaWQ6ICdlMS0zJywgc291cmNlOiAnMScsIHRhcmdldDogJzMnLCBhbmltYXRlZDogdHJ1ZSB9LFxyXG4gIHtcclxuICAgIGlkOiAnZTQtNScsXHJcbiAgICBzb3VyY2U6ICc0JyxcclxuICAgIHRhcmdldDogJzUnLFxyXG4gICAgdHlwZTogJ3Ntb290aHN0ZXAnLFxyXG4gICAgc291cmNlSGFuZGxlOiAnaGFuZGxlLTAnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RJbmRleDogMCxcclxuICAgIH0sXHJcbiAgICBtYXJrZXJFbmQ6IHtcclxuICAgICAgdHlwZTogTWFya2VyVHlwZS5BcnJvd0Nsb3NlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2U0LTYnLFxyXG4gICAgc291cmNlOiAnNCcsXHJcbiAgICB0YXJnZXQ6ICc2JyxcclxuICAgIHR5cGU6ICdiZXppZXInLFxyXG4gICAgc291cmNlSGFuZGxlOiAnaGFuZGxlLTEnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzZWxlY3RJbmRleDogMSxcclxuICAgIH0sXHJcbiAgICBtYXJrZXJFbmQ6IHtcclxuICAgICAgdHlwZTogTWFya2VyVHlwZS5BcnJvd0Nsb3NlZCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbl07XHJcblxyXG5jb25zdCBpbml0aWFsRWRnZXM6IEVkZ2VbXSA9IFtcclxuICB7IGlkOiAnZTEtMicsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICcyJyB9LFxyXG4gIHsgaWQ6ICdlMS0zJywgc291cmNlOiAnMScsIHRhcmdldDogJzMnIH0sXHJcbl07XHJcblxyXG5jb25zdCBub2RlVHlwZXMgPSB7XHJcbiAgY3VzdG9tOiBDdXN0b21Ob2RlLFxyXG4gIGlucHV0OiBJbnB1dE5vZGUsXHJcbiAgdGV4dFVwZGF0ZXI6IFRleHRVcGRhdGVyTm9kZSxcclxuICBhbm5vdGF0aW9uOiBBbm5vdGF0aW9uTm9kZSxcclxuICBvdXRwdXQ6IE91dHB1dE5vZGUsXHJcbiAgZGVmYXVsdDogRGVmYXVsdE5vZGUsXHJcbiAgcHJvY2VzczogUHJvY2Vzc05vZGUsXHJcbiAgaW5mbG93QWRkOiBJbmZsb3dBZGROb2RlLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRFZGdlT3B0aW9ucyA9IHtcclxuICBhbmltYXRlZDogdHJ1ZSxcclxuICB0eXBlOiAnYmV6aWVyJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEZsb3coKSB7XHJcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlcywgb25Ob2Rlc0NoYW5nZV0gPSB1c2VOb2Rlc1N0YXRlKGluaXRpYWxOb2Rlcyk7XHJcbiAgY29uc3QgW2VkZ2VzLCBzZXRFZGdlcywgb25FZGdlc0NoYW5nZV0gPSB1c2VFZGdlc1N0YXRlKGluaXRpYWxFZGdlcyk7XHJcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoJ2RvdHMnKTtcclxuICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjayhcclxuICAgIChwYXJhbXM6IENvbm5lY3Rpb24gfCBFZGdlKSA9PiBzZXRFZGdlcygoZWRzKSA9PiBhZGRFZGdlKHBhcmFtcywgZWRzKSksXHJcbiAgICBbc2V0RWRnZXNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkTm9kZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGlkID0gKG5vZGVzLmxlbmd0aCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBuZXdOb2RlID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGRhdGE6IHsgXHJcbiAgICAgICAgbGFiZWw6IGBOb2RlICR7aWR9YCwgXHJcbiAgICAgICAgc2VsZWN0czogdHlwZSA9PT0gJ2N1c3RvbScgPyB7ICdoYW5kbGUtMCc6ICdzbW9vdGhzdGVwJywgJ2hhbmRsZS0xJzogJ3Ntb290aHN0ZXAnIH0gOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjogeyB4OiBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGggKiAwLjUsIHk6IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgfSxcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgIH07XHJcbiAgICBzZXROb2RlcygobnMpID0+IG5zLmNvbmNhdChuZXdOb2RlKSk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctZ3JheS0yMDAgcmVsYXRpdmVcIj5cclxuICAgICAgPENvbXBvbmVudExpYnJhcnkgYWRkTm9kZT17YWRkTm9kZX0gLz5cclxuICAgICAgPFJlYWN0Rmxvd1xyXG4gICAgICAgIG5vZGVzPXtub2Rlc31cclxuICAgICAgICBvbk5vZGVzQ2hhbmdlPXtvbk5vZGVzQ2hhbmdlfVxyXG4gICAgICAgIGVkZ2VzPXtlZGdlc31cclxuICAgICAgICBvbkVkZ2VzQ2hhbmdlPXtvbkVkZ2VzQ2hhbmdlfVxyXG4gICAgICAgIG9uQ29ubmVjdD17b25Db25uZWN0fVxyXG4gICAgICAgIG5vZGVUeXBlcz17bm9kZVR5cGVzfVxyXG4gICAgICAgIGRlZmF1bHRFZGdlT3B0aW9ucz17ZGVmYXVsdEVkZ2VPcHRpb25zfVxyXG4gICAgICAgIGNvbm5lY3Rpb25MaW5lVHlwZT17Q29ubmVjdGlvbkxpbmVUeXBlLkJlemllcn1cclxuICAgICAgICBmaXRWaWV3XHJcbiAgICAgID5cclxuICAgICAgICA8QmFja2dyb3VuZCBjb2xvcj1cIiNjY2NcIiB2YXJpYW50PXt2YXJpYW50fSAvPlxyXG4gICAgICAgIDxDb250cm9scyBwb3NpdGlvbj0ndG9wLXJpZ2h0JyBiYWNrZ3JvdW5zLWNvbG9yPSd3aGl0ZScgLz5cclxuICAgICAgPC9SZWFjdEZsb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG93OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiUmVhY3RGbG93IiwidXNlTm9kZXNTdGF0ZSIsInVzZUVkZ2VzU3RhdGUiLCJhZGRFZGdlIiwiQ29ubmVjdGlvbkxpbmVUeXBlIiwiQ29udHJvbHMiLCJCYWNrZ3JvdW5kIiwiTWFya2VyVHlwZSIsIkN1c3RvbU5vZGUiLCJJbnB1dE5vZGUiLCJUZXh0VXBkYXRlck5vZGUiLCJBbm5vdGF0aW9uTm9kZSIsIk91dHB1dE5vZGUiLCJEZWZhdWx0Tm9kZSIsIkNvbXBvbmVudExpYnJhcnkiLCJQcm9jZXNzTm9kZSIsIkluZmxvd0FkZE5vZGUiLCJpbml0aWFsTm9kZXMiLCJpZCIsInR5cGUiLCJkYXRhIiwibGFiZWwiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic2VsZWN0cyIsImNsYXNzTmFtZSIsInN0cm9uZyIsInNlbGVjdGFibGUiLCJlZGdlcyIsInNvdXJjZSIsInRhcmdldCIsImFuaW1hdGVkIiwic291cmNlSGFuZGxlIiwic2VsZWN0SW5kZXgiLCJtYXJrZXJFbmQiLCJBcnJvd0Nsb3NlZCIsImluaXRpYWxFZGdlcyIsIm5vZGVUeXBlcyIsImN1c3RvbSIsImlucHV0IiwidGV4dFVwZGF0ZXIiLCJhbm5vdGF0aW9uIiwib3V0cHV0IiwiZGVmYXVsdCIsInByb2Nlc3MiLCJpbmZsb3dBZGQiLCJkZWZhdWx0RWRnZU9wdGlvbnMiLCJGbG93Iiwibm9kZXMiLCJzZXROb2RlcyIsIm9uTm9kZXNDaGFuZ2UiLCJzZXRFZGdlcyIsIm9uRWRnZXNDaGFuZ2UiLCJ2YXJpYW50Iiwic2V0VmFyaWFudCIsIm9uQ29ubmVjdCIsInBhcmFtcyIsImVkcyIsImFkZE5vZGUiLCJsZW5ndGgiLCJ0b1N0cmluZyIsIm5ld05vZGUiLCJNYXRoIiwicmFuZG9tIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibnMiLCJjb25jYXQiLCJkaXYiLCJjb25uZWN0aW9uTGluZVR5cGUiLCJCZXppZXIiLCJmaXRWaWV3IiwiY29sb3IiLCJiYWNrZ3JvdW5zLWNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});