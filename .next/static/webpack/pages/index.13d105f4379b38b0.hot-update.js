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

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"./components/ProjectCard.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Projects(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var data = function() {\n        fetch(\"../public/data.json\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Accept\": \"application/json\"\n            }\n        }).then(function(response) {\n            console.log(response.json());\n        });\n    };\n    useEffect(function() {\n        data();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col px-10 justify-evenly mr-[10px] items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"top-24 text-2xl text-gray-500 uppercase tracking-[20px] m-[60px]\",\n                children: \" Projets\"\n            }, void 0, false, {\n                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/Projects.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/Projects.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alaetabet/Desktop/My_portfolio/portfolio/portfolio/components/Projects.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUEyQztBQUNKO0FBTXZDLFNBQVNFLFFBQVEsQ0FBQyxLQUFVLEVBQWdCO1FBQTFCLEtBQVUsR0FBVixLQUFVLFlBQVYsS0FBVTs7SUFDeEIsSUFBTUMsSUFBSSxHQUFHLFdBQU07UUFDZkMsS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQ3pCQyxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsUUFBUSxFQUFFLGtCQUFrQjthQUMvQjtTQUNKLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVNDLFFBQVEsRUFBRTtZQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQ0csSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNEQyxTQUFTLENBQUMsV0FBSTtRQUNWUixJQUFJLEVBQUU7SUFDUixDQUFDLEVBQUMsRUFBRSxDQUFDO0lBQ1AscUJBQ0ksOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7MEJBQy9FLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsa0VBQWtFOzBCQUFDLFVBQVE7Ozs7O29CQUFLOzBCQUM5Riw4REFBQ1osb0RBQVc7Ozs7b0JBQUc7Ozs7OztZQUViLENBQ1Q7QUFDTCxDQUFDO0dBckJRQyxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF5QmpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4vUHJvamVjdENhcmQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG5cbn1cblxuZnVuY3Rpb24gUHJvamVjdHMoeyB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gICAgY29uc3QgZGF0YSA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goJy4uL3B1YmxpYy9kYXRhLmpzb24nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGRhdGEoKVxuICAgICAgfSxbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgcHgtMTAganVzdGlmeS1ldmVubHkgbXItWzEwcHhdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRvcC0yNCB0ZXh0LTJ4bCB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy1bMjBweF0gbS1bNjBweF1cIj4gUHJvamV0czwvaDE+XG4gICAgICAgICAgICA8UHJvamVjdENhcmQgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvamVjdENhcmQiLCJQcm9qZWN0cyIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsInVzZUVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});