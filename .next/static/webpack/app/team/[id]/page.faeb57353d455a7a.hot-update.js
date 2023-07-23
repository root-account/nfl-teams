/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/team/[id]/page",{

/***/ "(app-pages-browser)/./src/app/team/[id]/page.tsx":
/*!************************************!*\
  !*** ./src/app/team/[id]/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; },\n/* harmony export */   getTeamData: function() { return /* binding */ getTeamData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./src/components/Navbar.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ getTeamData,default auto */ \nvar _s = $RefreshSig$();\n\n\nconst getTeamData = async ()=>{\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const apiRes = await fetch(\"https://delivery.chalk247.com/team_list/NFL/\".concat(params.id, \"?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0\"), {\n        cache: \"no-store\"\n    });\n    const data = await apiRes.json();\n    const teamData = await data;\n    console.log(teamData);\n    return teamData;\n};\n_s(getTeamData, \"+jVsTcECDRo3yq2d7EQxlN9Ixog=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\nasync function Team() {\n    // const teamData = await getTeamData();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 w-full px-10 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left relative z-[1]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 border-neutral-700 hover:dark:bg-neutral-800/30\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                        children: \"Find in-depth information about Next.js features and API.\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Team;\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVhbS9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFHckMsTUFBTUUsY0FBYzs7SUFDekIsTUFBTUMsU0FBU0YsMERBQVNBO0lBQ3hCLE1BQU1HLFNBQVMsTUFBTUMsTUFBTSwrQ0FBeUQsT0FBVkYsT0FBT0csRUFBRSxFQUFDLHNEQUFvRDtRQUFDQyxPQUFNO0lBQVU7SUFDekosTUFBTUMsT0FBTyxNQUFNSixPQUFPSyxJQUFJO0lBQzlCLE1BQU1DLFdBQVcsTUFBTUY7SUFFdkJHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFHWixPQUFPQTtBQUNULEVBQUM7R0FWWVI7O1FBQ0lELHNEQUFTQTs7O0FBV1gsZUFBZVk7SUFFNUIsd0NBQXdDO0lBRXhDLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFFZCw4REFBQ2YsMERBQU1BOzs7OzswQkFFUCw4REFBQ2dCO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFDQ0QsV0FBVTs4QkFHViw0RUFBQ0U7d0JBQUVGLFdBQVk7a0NBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUy9EO0tBdkI4QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90ZWFtL1tpZF0vcGFnZS50c3g/MDIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cblxuZXhwb3J0IGNvbnN0IGdldFRlYW1EYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgYXBpUmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGVsaXZlcnkuY2hhbGsyNDcuY29tL3RlYW1fbGlzdC9ORkwvJHtwYXJhbXMuaWR9P2FwaV9rZXk9NzRkYjhlZmEyYTZkYjI3OTM5M2I0MzNkOTdjMmJjODQzZjhlMzJiMGAsIHtjYWNoZTpcIm5vLXN0b3JlXCJ9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaVJlcy5qc29uKCk7XG4gIGNvbnN0IHRlYW1EYXRhID0gYXdhaXQgZGF0YTtcblxuICBjb25zb2xlLmxvZyh0ZWFtRGF0YSk7XG4gIFxuICBcbiAgcmV0dXJuIHRlYW1EYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBUZWFtKCkge1xuXG4gIC8vIGNvbnN0IHRlYW1EYXRhID0gYXdhaXQgZ2V0VGVhbURhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTI0IGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6aC1bMzAwcHhdIGJlZm9yZTp3LVs0ODBweF0gYmVmb3JlOi10cmFuc2xhdGUteC0xLzIgYmVmb3JlOnJvdW5kZWQtZnVsbCBiZWZvcmU6YmctZ3JhZGllbnQtcmFkaWFsIGJlZm9yZTpmcm9tLXdoaXRlIGJlZm9yZTp0by10cmFuc3BhcmVudCBiZWZvcmU6Ymx1ci0yeGwgYmVmb3JlOmNvbnRlbnQtWycnXSBhZnRlcjphYnNvbHV0ZSBhZnRlcjotei0yMCBhZnRlcjpoLVsxODBweF0gYWZ0ZXI6dy1bMjQwcHhdIGFmdGVyOnRyYW5zbGF0ZS14LTEvMyBhZnRlcjpiZy1ncmFkaWVudC1jb25pYyBhZnRlcjpmcm9tLXNreS0yMDAgYWZ0ZXI6dmlhLWJsdWUtMjAwIGFmdGVyOmJsdXItMnhsIGFmdGVyOmNvbnRlbnQtWycnXSBiZWZvcmU6ZGFyazpiZy1ncmFkaWVudC10by1iciBiZWZvcmU6ZGFyazpmcm9tLXRyYW5zcGFyZW50IGJlZm9yZTpkYXJrOnRvLWJsdWUtNzAwIGJlZm9yZTpkYXJrOm9wYWNpdHktMTAgYWZ0ZXI6ZGFyazpmcm9tLXNreS05MDAgYWZ0ZXI6ZGFyazp2aWEtWyMwMTQxZmZdIGFmdGVyOmRhcms6b3BhY2l0eS00MCBiZWZvcmU6bGc6aC1bMzYwcHhdIHotWy0xXVwiPlxuICAgICAgXG4gICAgICA8TmF2YmFyLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiB3LWZ1bGwgcHgtMTAgZ3JpZCB0ZXh0LWNlbnRlciBsZzptYi0wIGxnOmdyaWQtY29scy0xIGxnOnRleHQtbGVmdCByZWxhdGl2ZSB6LVsxXVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMTAwIGJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIEZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlUGFyYW1zIiwiZ2V0VGVhbURhdGEiLCJwYXJhbXMiLCJhcGlSZXMiLCJmZXRjaCIsImlkIiwiY2FjaGUiLCJkYXRhIiwianNvbiIsInRlYW1EYXRhIiwiY29uc29sZSIsImxvZyIsIlRlYW0iLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/team/[id]/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQUEsK0pBQStEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanM/MGI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/navigation.js\n"));

/***/ })

});