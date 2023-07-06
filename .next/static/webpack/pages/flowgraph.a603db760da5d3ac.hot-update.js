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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _CustomNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomNode */ \"./components/Flow/CustomNode.tsx\");\n/* harmony import */ var _InputNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputNode */ \"./components/Flow/InputNode.tsx\");\n/* harmony import */ var _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextUpdaterNode */ \"./components/Flow/TextUpdaterNode.tsx\");\n/* harmony import */ var _AnnotationNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnnotationNode */ \"./components/Flow/AnnotationNode.tsx\");\n/* harmony import */ var _OutputNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OutputNode */ \"./components/Flow/OutputNode.tsx\");\n/* harmony import */ var _DefaultNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DefaultNode */ \"./components/Flow/DefaultNode.tsx\");\n/* harmony import */ var _ComponentLibrary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ComponentLibrary */ \"./components/Flow/ComponentLibrary.tsx\");\n/* harmony import */ var _ProcessNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProcessNode */ \"./components/Flow/ProcessNode.tsx\");\n/* harmony import */ var _InflowAddNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InflowAddNode */ \"./components/Flow/InflowAddNode.tsx\");\n/* harmony import */ var _OutflowAddNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OutflowAddNode */ \"./components/Flow/OutflowAddNode.tsx\");\n/* harmony import */ var _PrintDataNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrintDataNode */ \"./components/Flow/PrintDataNode.tsx\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // <- new import\n\n\n\n\n\nconst nodeTypes = {\n    custom: _CustomNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    input: _InputNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    textUpdater: _TextUpdaterNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    annotation: _AnnotationNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    output: _OutputNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    default: _DefaultNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    process: _ProcessNode__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    inflowAdd: _InflowAddNode__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    outflowAdd: _OutflowAddNode__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    printData: _PrintDataNode__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n};\nconst defaultEdgeOptions = {\n    animated: true,\n    type: \"bezier\"\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes] = (0,reactflow__WEBPACK_IMPORTED_MODULE_13__.useNodesState)([]);\n    const [edges, setEdges] = (0,reactflow__WEBPACK_IMPORTED_MODULE_13__.useEdgesState)([]);\n    const onConnect = (params)=>{\n        const { source, target, sourceHandle } = params;\n        const outputData = nodes.find((el)=>el.id === source).data;\n        const newNodes = nodes.map((el)=>{\n            if (el.id === target) {\n                el.data = outputData;\n            }\n            return el;\n        });\n        const newEdges = (0,reactflow__WEBPACK_IMPORTED_MODULE_13__.addEdge)(params, edges);\n        setNodes(newNodes);\n        setEdges(newEdges);\n    };\n    const addNode = (type)=>{\n        const id = (nodes.length + 1).toString();\n        const newNode = {\n            id: id,\n            data: {\n                label: \"Node \".concat(id),\n                selects: type === \"custom\" ? {\n                    \"handle-0\": \"smoothstep\",\n                    \"handle-1\": \"smoothstep\"\n                } : {}\n            },\n            position: {\n                x: Math.random() * window.innerWidth * 0.5,\n                y: Math.random() * window.innerHeight * 0.5\n            },\n            type: type\n        };\n        setNodes((ns)=>ns.concat(newNode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen bg-gray-200 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ComponentLibrary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                addNode: addNode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactFlow, {\n                nodes: nodes,\n                edges: edges,\n                onConnect: onConnect,\n                nodeTypes: nodeTypes,\n                defaultEdgeOptions: defaultEdgeOptions,\n                connectionLineType: reactflow__WEBPACK_IMPORTED_MODULE_13__.ConnectionLineType.Bezier,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_13__.Background, {\n                        color: \"#ccc\",\n                        variant: \"dots\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_13__.Controls, {\n                        position: \"top-right\",\n                        \"backgrouns-color\": \"white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Iver\\\\Documents\\\\energy-flow\\\\components\\\\Flow\\\\index.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"ZaxmiRsy2u8pyFgFagxQxABh0p0=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_13__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_13__.useEdgesState\n    ];\n});\n_c = Flow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flow);\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zsb3cvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Qm1CO0FBQ21CO0FBQ0Y7QUFDWTtBQUNGO0FBQ1I7QUFDRTtBQUNVLENBQUMsZ0JBQWdCO0FBQzNCO0FBQ0k7QUFDRTtBQUNGO0FBRVY7QUFHbEMsTUFBTWlCLFlBQVk7SUFDaEJDLFFBQVFaLG1EQUFVQTtJQUNsQmEsT0FBT1osa0RBQVNBO0lBQ2hCYSxhQUFhWix3REFBZUE7SUFDNUJhLFlBQVlaLHVEQUFjQTtJQUMxQmEsUUFBUVosbURBQVVBO0lBQ2xCYSxTQUFTWixvREFBV0E7SUFDcEJhLFNBQVNYLG9EQUFXQTtJQUNwQlksV0FBV1gsc0RBQWFBO0lBQ3hCWSxZQUFZWCx3REFBY0E7SUFDMUJZLFdBQVdYLHVEQUFhQTtBQUMxQjtBQUVBLE1BQU1ZLHFCQUFxQjtJQUN6QkMsVUFBVTtJQUNWQyxNQUFNO0FBQ1I7QUFFQSxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2pDLHlEQUFhQSxDQUFDLEVBQUU7SUFDMUMsTUFBTSxDQUFDa0MsT0FBT0MsU0FBUyxHQUFHbEMseURBQWFBLENBQUMsRUFBRTtJQUMxQyxNQUFNbUMsWUFBWSxDQUFDQztRQUNqQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0g7UUFDekMsTUFBTUksYUFBYVQsTUFBTVUsS0FBS0MsQ0FBQUEsS0FBTUEsR0FBR0MsT0FBT04sUUFBUU87UUFDdEQsTUFBTUMsV0FBV2QsTUFBTWUsSUFBSUosQ0FBQUE7WUFDekIsSUFBSUEsR0FBR0MsT0FBT0wsUUFBUTtnQkFDcEJJLEdBQUdFLE9BQU9KO1lBQ1o7WUFDQSxPQUFPRTtRQUNUO1FBQ0EsTUFBTUssV0FBVzlDLG1EQUFPQSxDQUFDbUMsUUFBUUg7UUFDakNELFNBQVNhO1FBQ1RYLFNBQVNhO0lBQ1g7SUFDQSxNQUFNQyxVQUFVLENBQUNuQjtRQUNmLE1BQU1jLEtBQUssQ0FBQ1osTUFBTWtCLFNBQVMsR0FBR0M7UUFDOUIsTUFBTUMsVUFBVTtZQUNkUixJQUFJQTtZQUNKQyxNQUFNO2dCQUNKUSxPQUFPLFFBQVcsT0FBSFQ7Z0JBQ2ZVLFNBQVN4QixTQUFTLFdBQVc7b0JBQUUsWUFBWTtvQkFBYyxZQUFZO2dCQUFhLElBQUksQ0FBQztZQUN6RjtZQUNBeUIsVUFBVTtnQkFBRUMsR0FBR0MsS0FBS0MsV0FBV0MsT0FBT0MsYUFBYTtnQkFBS0MsR0FBR0osS0FBS0MsV0FBV0MsT0FBT0csY0FBYztZQUFJO1lBQ3BHaEMsTUFBTUE7UUFDUjtRQUNBRyxTQUFTLENBQUM4QixLQUFPQSxHQUFHQyxPQUFPWjtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3RELHlEQUFnQkE7Z0JBQUNxQyxTQUFTQTs7Ozs7OzBCQUMzQiw4REFBQ2tCO2dCQUNDbkMsT0FBT0E7Z0JBQ1BFLE9BQU9BO2dCQUNQRSxXQUFXQTtnQkFDWG5CLFdBQVdBO2dCQUNYVyxvQkFBb0JBO2dCQUNwQndDLG9CQUFvQi9ELDBEQUFrQkEsQ0FBQ2dFOztrQ0FFdkMsOERBQUNqRSxrREFBVUE7d0JBQUNrRSxPQUFNO3dCQUFPQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDcEUsZ0RBQVFBO3dCQUFDb0QsVUFBUzt3QkFBWWlCLG9CQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhEO0dBOUNTekM7O1FBQ21CL0IscURBQWFBO1FBQ2JDLHFEQUFhQTs7O0tBRmhDOEI7QUFnRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbG93L2luZGV4LnRzeD80MDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0Zmxvdywge1xyXG4gIE5vZGUsXHJcbiAgdXNlTm9kZXNTdGF0ZSxcclxuICB1c2VFZGdlc1N0YXRlLFxyXG4gIGFkZEVkZ2UsXHJcbiAgcmVtb3ZlRWxlbWVudHMsXHJcbiAgQ29udHJvbHMsXHJcbiAgQmFja2dyb3VuZCxcclxuICBNaW5pTWFwLFxyXG4gIGlzTm9kZSxcclxuICBpc0VkZ2UsXHJcbiAgaXNOb2RlT3JFZGdlLFxyXG4gIEVsZW1lbnRzLFxyXG4gIEZsb3dFbGVtZW50LFxyXG4gIE9uTG9hZFBhcmFtcyxcclxuICBDb25uZWN0aW9uLFxyXG4gIEVkZ2UsXHJcbiAgRWxlbWVudHNSZW5kZXJlcixcclxuICBOb2RlUmVuZGVyZXIsXHJcbiAgRWRnZVJlbmRlcmVyLFxyXG4gIENvbm5lY3Rpb25MaW5lVHlwZSxcclxuICBDb25uZWN0aW9uTW9kZSxcclxuICBBcnJvd0hlYWRUeXBlLFxyXG5cclxufSBmcm9tICdyZWFjdGZsb3cnO1xyXG5pbXBvcnQgQ3VzdG9tTm9kZSBmcm9tICcuL0N1c3RvbU5vZGUnO1xyXG5pbXBvcnQgSW5wdXROb2RlIGZyb20gJy4vSW5wdXROb2RlJztcclxuaW1wb3J0IFRleHRVcGRhdGVyTm9kZSBmcm9tICcuL1RleHRVcGRhdGVyTm9kZSc7XHJcbmltcG9ydCBBbm5vdGF0aW9uTm9kZSBmcm9tICcuL0Fubm90YXRpb25Ob2RlJztcclxuaW1wb3J0IE91dHB1dE5vZGUgZnJvbSAnLi9PdXRwdXROb2RlJztcclxuaW1wb3J0IERlZmF1bHROb2RlIGZyb20gJy4vRGVmYXVsdE5vZGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50TGlicmFyeSBmcm9tICcuL0NvbXBvbmVudExpYnJhcnknOyAvLyA8LSBuZXcgaW1wb3J0XHJcbmltcG9ydCBQcm9jZXNzTm9kZSBmcm9tICcuL1Byb2Nlc3NOb2RlJztcclxuaW1wb3J0IEluZmxvd0FkZE5vZGUgZnJvbSAnLi9JbmZsb3dBZGROb2RlJztcclxuaW1wb3J0IE91dGZsb3dBZGROb2RlIGZyb20gJy4vT3V0Zmxvd0FkZE5vZGUnO1xyXG5pbXBvcnQgUHJpbnREYXRhTm9kZSBmcm9tICcuL1ByaW50RGF0YU5vZGUnO1xyXG5cclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IG5vZGVUeXBlcyA9IHtcclxuICBjdXN0b206IEN1c3RvbU5vZGUsXHJcbiAgaW5wdXQ6IElucHV0Tm9kZSxcclxuICB0ZXh0VXBkYXRlcjogVGV4dFVwZGF0ZXJOb2RlLFxyXG4gIGFubm90YXRpb246IEFubm90YXRpb25Ob2RlLFxyXG4gIG91dHB1dDogT3V0cHV0Tm9kZSxcclxuICBkZWZhdWx0OiBEZWZhdWx0Tm9kZSxcclxuICBwcm9jZXNzOiBQcm9jZXNzTm9kZSxcclxuICBpbmZsb3dBZGQ6IEluZmxvd0FkZE5vZGUsXHJcbiAgb3V0Zmxvd0FkZDogT3V0Zmxvd0FkZE5vZGUsIFxyXG4gIHByaW50RGF0YTogUHJpbnREYXRhTm9kZSxcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRFZGdlT3B0aW9ucyA9IHtcclxuICBhbmltYXRlZDogdHJ1ZSxcclxuICB0eXBlOiAnYmV6aWVyJyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEZsb3coKSB7XHJcbiAgY29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VOb2Rlc1N0YXRlKFtdKTtcclxuICBjb25zdCBbZWRnZXMsIHNldEVkZ2VzXSA9IHVzZUVkZ2VzU3RhdGUoW10pO1xyXG4gIGNvbnN0IG9uQ29ubmVjdCA9IChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IHsgc291cmNlLCB0YXJnZXQsIHNvdXJjZUhhbmRsZSB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3Qgb3V0cHV0RGF0YSA9IG5vZGVzLmZpbmQoZWwgPT4gZWwuaWQgPT09IHNvdXJjZSkuZGF0YTtcclxuICAgIGNvbnN0IG5ld05vZGVzID0gbm9kZXMubWFwKGVsID0+IHtcclxuICAgICAgaWYgKGVsLmlkID09PSB0YXJnZXQpIHtcclxuICAgICAgICBlbC5kYXRhID0gb3V0cHV0RGF0YTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZWw7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0VkZ2VzID0gYWRkRWRnZShwYXJhbXMsIGVkZ2VzKTtcclxuICAgIHNldE5vZGVzKG5ld05vZGVzKTtcclxuICAgIHNldEVkZ2VzKG5ld0VkZ2VzKTtcclxuICB9O1xyXG4gIGNvbnN0IGFkZE5vZGUgPSAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IChub2Rlcy5sZW5ndGggKyAxKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgbmV3Tm9kZSA9IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICBkYXRhOiB7IFxyXG4gICAgICAgIGxhYmVsOiBgTm9kZSAke2lkfWAsIFxyXG4gICAgICAgIHNlbGVjdHM6IHR5cGUgPT09ICdjdXN0b20nID8geyAnaGFuZGxlLTAnOiAnc21vb3Roc3RlcCcsICdoYW5kbGUtMSc6ICdzbW9vdGhzdGVwJyB9IDoge31cclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IHsgeDogTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoICogMC41LCB5OiBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0ICogMC41IH0sXHJcbiAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICB9O1xyXG4gICAgc2V0Tm9kZXMoKG5zKSA9PiBucy5jb25jYXQobmV3Tm9kZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWdyYXktMjAwIHJlbGF0aXZlXCI+XHJcbiAgICAgIDxDb21wb25lbnRMaWJyYXJ5IGFkZE5vZGU9e2FkZE5vZGV9IC8+XHJcbiAgICAgIDxSZWFjdEZsb3dcclxuICAgICAgICBub2Rlcz17bm9kZXN9XHJcbiAgICAgICAgZWRnZXM9e2VkZ2VzfVxyXG4gICAgICAgIG9uQ29ubmVjdD17b25Db25uZWN0fVxyXG4gICAgICAgIG5vZGVUeXBlcz17bm9kZVR5cGVzfVxyXG4gICAgICAgIGRlZmF1bHRFZGdlT3B0aW9ucz17ZGVmYXVsdEVkZ2VPcHRpb25zfVxyXG4gICAgICAgIGNvbm5lY3Rpb25MaW5lVHlwZT17Q29ubmVjdGlvbkxpbmVUeXBlLkJlemllcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxCYWNrZ3JvdW5kIGNvbG9yPVwiI2NjY1wiIHZhcmlhbnQ9J2RvdHMnIC8+XHJcbiAgICAgICAgPENvbnRyb2xzIHBvc2l0aW9uPSd0b3AtcmlnaHQnIGJhY2tncm91bnMtY29sb3I9J3doaXRlJyAvPlxyXG4gICAgICA8L1JlYWN0Rmxvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3c7Il0sIm5hbWVzIjpbInVzZU5vZGVzU3RhdGUiLCJ1c2VFZGdlc1N0YXRlIiwiYWRkRWRnZSIsIkNvbnRyb2xzIiwiQmFja2dyb3VuZCIsIkNvbm5lY3Rpb25MaW5lVHlwZSIsIkN1c3RvbU5vZGUiLCJJbnB1dE5vZGUiLCJUZXh0VXBkYXRlck5vZGUiLCJBbm5vdGF0aW9uTm9kZSIsIk91dHB1dE5vZGUiLCJEZWZhdWx0Tm9kZSIsIkNvbXBvbmVudExpYnJhcnkiLCJQcm9jZXNzTm9kZSIsIkluZmxvd0FkZE5vZGUiLCJPdXRmbG93QWRkTm9kZSIsIlByaW50RGF0YU5vZGUiLCJub2RlVHlwZXMiLCJjdXN0b20iLCJpbnB1dCIsInRleHRVcGRhdGVyIiwiYW5ub3RhdGlvbiIsIm91dHB1dCIsImRlZmF1bHQiLCJwcm9jZXNzIiwiaW5mbG93QWRkIiwib3V0Zmxvd0FkZCIsInByaW50RGF0YSIsImRlZmF1bHRFZGdlT3B0aW9ucyIsImFuaW1hdGVkIiwidHlwZSIsIkZsb3ciLCJub2RlcyIsInNldE5vZGVzIiwiZWRnZXMiLCJzZXRFZGdlcyIsIm9uQ29ubmVjdCIsInBhcmFtcyIsInNvdXJjZSIsInRhcmdldCIsInNvdXJjZUhhbmRsZSIsIm91dHB1dERhdGEiLCJmaW5kIiwiZWwiLCJpZCIsImRhdGEiLCJuZXdOb2RlcyIsIm1hcCIsIm5ld0VkZ2VzIiwiYWRkTm9kZSIsImxlbmd0aCIsInRvU3RyaW5nIiwibmV3Tm9kZSIsImxhYmVsIiwic2VsZWN0cyIsInBvc2l0aW9uIiwieCIsIk1hdGgiLCJyYW5kb20iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwieSIsImlubmVySGVpZ2h0IiwibnMiLCJjb25jYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJSZWFjdEZsb3ciLCJjb25uZWN0aW9uTGluZVR5cGUiLCJCZXppZXIiLCJjb2xvciIsInZhcmlhbnQiLCJiYWNrZ3JvdW5zLWNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Flow/index.tsx\n"));

/***/ })

});