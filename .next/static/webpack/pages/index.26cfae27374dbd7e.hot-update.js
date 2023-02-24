"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProjectCard.tsx":
/*!************************************!*\
  !*** ./components/ProjectCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-social-icons */ \"./node_modules/react-social-icons/build/react-social-icons.js\");\n\n\n\nfunction ProjectCard(param) {\n    var data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col xl:grid xl:grid-cols-2 xl:gap-4 xl:max-w-7xl\",\n        children: data.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-[50px] md:flex-row md:space-x-5 items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        alt: item.title,\n                        className: \"mt-[100px] object-cover w-full mx-6 lg:h-40 w-52 rounded-xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm uppercase\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: item.link_github,\n                                className: \"inline-block hover:underline lg:mt-8\",\n                                children: [\n                                    \"Voir Projet \",\n                                    \" > \",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_social_icons__WEBPACK_IMPORTED_MODULE_2__.SocialIcon, {\n                                url: item.link_github,\n                                fgColor: \"gray\",\n                                bgColor: \"transparent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-3 border border-blue-100 rounded-2xl h-[120px] w-[350px] p-4 bg-[#F7AB0A] \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-black font-bold\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 33\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center flex-row items-center space-x-4 mt-4 \",\n                                children: [\n                                    item.technologies.map(function(techno) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\",\n                                            children: techno\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 37\n                                        }, _this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: item.link_github,\n                                        className: \"\",\n                                        children: [\n                                            \"Voir Projet \",\n                                            \" > \",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n                lineNumber: 8,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/ProjectCard.tsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUEyQztBQUNJO0FBQy9DLFNBQVNFLFdBQVcsQ0FBQyxLQUFXLEVBQUU7UUFBYixJQUFLLEdBQUwsS0FBVyxDQUFWQyxJQUFJOztJQUN0QixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNERBQTREO2tCQUVuRUYsSUFBSSxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBUztpQ0FDZiw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHFFQUFzRTs7a0NBQ2pGLDhEQUFDRyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBSzt3QkFDaEJDLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxLQUFLO3dCQUNmUCxTQUFTLEVBQUMsNkRBQTZEOzs7Ozs2QkFDekU7a0NBQ0YsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxFQUFFOzswQ0FDYiw4REFBQ1EsR0FBQztnQ0FBQ1IsU0FBUyxFQUFDLG1CQUFtQjswQ0FBRUUsSUFBSSxDQUFDSyxLQUFLOzs7OztxQ0FBSzswQ0FFakQsOERBQUNFLEdBQUM7Z0NBQUNDLElBQUksRUFBRVIsSUFBSSxDQUFDUyxXQUFXO2dDQUFFWCxTQUFTLEVBQUMsc0NBQXNDOztvQ0FBQyxjQUFZO29DQUFDLEtBQUs7b0NBQUMsR0FBQzs7Ozs7O3FDQUFJOzBDQUVwRyw4REFBQ0osMERBQVU7Z0NBQUNnQixHQUFHLEVBQUVWLElBQUksQ0FBQ1MsV0FBVztnQ0FDN0JFLE9BQU8sRUFBQyxNQUFNO2dDQUNkQyxPQUFPLEVBQUMsYUFBYTs7Ozs7cUNBQ3ZCOzBDQUNGLDhEQUFDZixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsK0VBQStFOzBDQUMxRiw0RUFBQ1EsR0FBQztvQ0FBQ1IsU0FBUyxFQUFDLDhCQUE4Qjs4Q0FDMUNFLElBQUksQ0FBQ2EsV0FBVzs7Ozs7eUNBQzdCOzs7OztxQ0FDYzswQ0FFTiw4REFBQ2hCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQywyREFBMkQ7O29DQUNyRUUsSUFBSSxDQUFDYyxZQUFZLENBQUNmLEdBQUcsQ0FBQyxTQUFDZ0IsTUFBYzs2REFDbEMsOERBQUNULEdBQUM7NENBQUNSLFNBQVMsRUFBQyxFQUFFO3NEQUFFaUIsTUFBTTs7Ozs7aURBQUs7cUNBQy9CLENBQUM7a0RBRU4sOERBQUNSLEdBQUM7d0NBQUNDLElBQUksRUFBRVIsSUFBSSxDQUFDUyxXQUFXO3dDQUFFWCxTQUFTLEVBQUMsRUFBRTs7NENBQUMsY0FBWTs0Q0FBQyxLQUFLOzRDQUFDLEdBQUM7Ozs7Ozs2Q0FBSTs7Ozs7O3FDQUMxRDs7Ozs7OzZCQUVKOzs7Ozs7cUJBQ0o7U0FDVCxDQUFDOzs7OztZQUdKLENBQ1Q7QUFDTCxDQUFDO0FBeENRSCxLQUFBQSxXQUFXO0FBMENwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeD9hN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNvY2lhbEljb24gfSBmcm9tICdyZWFjdC1zb2NpYWwtaWNvbnMnXG5mdW5jdGlvbiBQcm9qZWN0Q2FyZCh7ZGF0YX06IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB4bDpncmlkIHhsOmdyaWQtY29scy0yIHhsOmdhcC00IHhsOm1heC13LTd4bFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktWzUwcHhdICBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTUgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LVsxMDBweF0gb2JqZWN0LWNvdmVyIHctZnVsbCBteC02IGxnOmgtNDAgdy01MiByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdXBwZXJjYXNlXCI+e2l0ZW0udGl0bGV9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rX2dpdGh1Yn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGhvdmVyOnVuZGVybGluZSBsZzptdC04XCI+Vm9pciBQcm9qZXQgeycgPiAnfSA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbiB1cmw9e2l0ZW0ubGlua19naXRodWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZnQ29sb3I9XCJncmF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBib3JkZXIgYm9yZGVyLWJsdWUtMTAwIHJvdW5kZWQtMnhsIGgtWzEyMHB4XSB3LVszNTBweF0gcC00IGJnLVsjRjdBQjBBXSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBtdC00IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZWNobm9sb2dpZXMubWFwKCh0ZWNobm86IFN0cmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e3RlY2hub308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua19naXRodWJ9IGNsYXNzTmFtZT1cIlwiPlZvaXIgUHJvamV0IHsnID4gJ30gPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTb2NpYWxJY29uIiwiUHJvamVjdENhcmQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJwIiwiYSIsImhyZWYiLCJsaW5rX2dpdGh1YiIsInVybCIsImZnQ29sb3IiLCJiZ0NvbG9yIiwiZGVzY3JpcHRpb24iLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNobm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectCard.tsx\n"));

/***/ })

});