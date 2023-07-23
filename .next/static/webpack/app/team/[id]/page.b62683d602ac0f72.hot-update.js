"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; },\n/* harmony export */   getTeamData: function() { return /* binding */ getTeamData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./src/components/Navbar.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ getTeamData,default auto */ \nvar _s = $RefreshSig$();\n\n\nconst getTeamData = async ()=>{\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const apiRes = await fetch(\"https://delivery.chalk247.com/team_list/NFL/\".concat(params.id, \"?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0\"), {\n        cache: \"no-store\"\n    });\n    const data = await apiRes.json();\n    const teamData = await data;\n    console.log(teamData);\n    return teamData;\n};\n_s(getTeamData, \"+jVsTcECDRo3yq2d7EQxlN9Ixog=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\nasync function Team() {\n    const teamData = await getTeamData();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 w-full px-10 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left relative z-[1]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 border-neutral-700 hover:dark:bg-neutral-800/30\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                        children: \"Find in-depth information about Next.js features and API.\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/nfl-teams/src/app/team/[id]/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Team;\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGVhbS9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFHckMsTUFBTUUsY0FBYzs7SUFDekIsTUFBTUMsU0FBU0YsMERBQVNBO0lBQ3hCLE1BQU1HLFNBQVMsTUFBTUMsTUFBTSwrQ0FBeUQsT0FBVkYsT0FBT0csRUFBRSxFQUFDLHNEQUFvRDtRQUFDQyxPQUFNO0lBQVU7SUFDekosTUFBTUMsT0FBTyxNQUFNSixPQUFPSyxJQUFJO0lBQzlCLE1BQU1DLFdBQVcsTUFBTUY7SUFFdkJHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFHWixPQUFPQTtBQUNULEVBQUM7R0FWWVI7O1FBQ0lELHNEQUFTQTs7O0FBV1gsZUFBZVk7SUFFNUIsTUFBTUgsV0FBVyxNQUFNUjtJQUV2QixxQkFDRSw4REFBQ1k7UUFBS0MsV0FBVTs7MEJBRWQsOERBQUNmLDBEQUFNQTs7Ozs7MEJBRVAsOERBQUNnQjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQ0NELFdBQVU7OEJBR1YsNEVBQUNFO3dCQUFFRixXQUFZO2tDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMvRDtLQXZCOEJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdGVhbS9baWRdL3BhZ2UudHN4PzAyM2IiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IGFwaVJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2RlbGl2ZXJ5LmNoYWxrMjQ3LmNvbS90ZWFtX2xpc3QvTkZMLyR7cGFyYW1zLmlkfT9hcGlfa2V5PTc0ZGI4ZWZhMmE2ZGIyNzkzOTNiNDMzZDk3YzJiYzg0M2Y4ZTMyYjBgLCB7Y2FjaGU6XCJuby1zdG9yZVwifSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlSZXMuanNvbigpO1xuICBjb25zdCB0ZWFtRGF0YSA9IGF3YWl0IGRhdGE7XG5cbiAgY29uc29sZS5sb2codGVhbURhdGEpO1xuICBcbiAgXG4gIHJldHVybiB0ZWFtRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gVGVhbSgpIHtcblxuICBjb25zdCB0ZWFtRGF0YSA9IGF3YWl0IGdldFRlYW1EYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0yNCBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmgtWzMwMHB4XSBiZWZvcmU6dy1bNDgwcHhdIGJlZm9yZTotdHJhbnNsYXRlLXgtMS8yIGJlZm9yZTpyb3VuZGVkLWZ1bGwgYmVmb3JlOmJnLWdyYWRpZW50LXJhZGlhbCBiZWZvcmU6ZnJvbS13aGl0ZSBiZWZvcmU6dG8tdHJhbnNwYXJlbnQgYmVmb3JlOmJsdXItMnhsIGJlZm9yZTpjb250ZW50LVsnJ10gYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LXotMjAgYWZ0ZXI6aC1bMTgwcHhdIGFmdGVyOnctWzI0MHB4XSBhZnRlcjp0cmFuc2xhdGUteC0xLzMgYWZ0ZXI6YmctZ3JhZGllbnQtY29uaWMgYWZ0ZXI6ZnJvbS1za3ktMjAwIGFmdGVyOnZpYS1ibHVlLTIwMCBhZnRlcjpibHVyLTJ4bCBhZnRlcjpjb250ZW50LVsnJ10gYmVmb3JlOmRhcms6YmctZ3JhZGllbnQtdG8tYnIgYmVmb3JlOmRhcms6ZnJvbS10cmFuc3BhcmVudCBiZWZvcmU6ZGFyazp0by1ibHVlLTcwMCBiZWZvcmU6ZGFyazpvcGFjaXR5LTEwIGFmdGVyOmRhcms6ZnJvbS1za3ktOTAwIGFmdGVyOmRhcms6dmlhLVsjMDE0MWZmXSBhZnRlcjpkYXJrOm9wYWNpdHktNDAgYmVmb3JlOmxnOmgtWzM2MHB4XSB6LVstMV1cIj5cbiAgICAgIFxuICAgICAgPE5hdmJhci8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMzIgdy1mdWxsIHB4LTEwIGdyaWQgdGV4dC1jZW50ZXIgbGc6bWItMCBsZzpncmlkLWNvbHMtMSBsZzp0ZXh0LWxlZnQgcmVsYXRpdmUgei1bMV1cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCBib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBGaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVBhcmFtcyIsImdldFRlYW1EYXRhIiwicGFyYW1zIiwiYXBpUmVzIiwiZmV0Y2giLCJpZCIsImNhY2hlIiwiZGF0YSIsImpzb24iLCJ0ZWFtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJUZWFtIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/team/[id]/page.tsx\n"));

/***/ })

});