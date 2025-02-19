"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/wagmi.js":
/*!**************************!*\
  !*** ./src/lib/wagmi.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! viem */ \"viem\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_connectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/connectors */ \"wagmi/connectors\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_0__, viem__WEBPACK_IMPORTED_MODULE_1__, wagmi_chains__WEBPACK_IMPORTED_MODULE_2__, wagmi_connectors__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_0__, viem__WEBPACK_IMPORTED_MODULE_1__, wagmi_chains__WEBPACK_IMPORTED_MODULE_2__, wagmi_connectors__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.createConfig)({\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.mainnet,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.sepolia\n    ],\n    transports: {\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.mainnet.id]: (0,viem__WEBPACK_IMPORTED_MODULE_1__.http)(`https://mainnet.infura.io/v3/${\"5040d1a9843c40818bb9404a96199a25\"}`),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.sepolia.id]: (0,viem__WEBPACK_IMPORTED_MODULE_1__.http)(`https://sepolia.infura.io/v3/${\"5040d1a9843c40818bb9404a96199a25\"}`)\n    },\n    connectors: [\n        (0,wagmi_connectors__WEBPACK_IMPORTED_MODULE_3__.metaMask)(),\n        (0,wagmi_connectors__WEBPACK_IMPORTED_MODULE_3__.walletConnect)({\n            projectId: \"6ee1f35a236bb1fdb857ed0bfb2d8d2f\"\n        }),\n        (0,wagmi_connectors__WEBPACK_IMPORTED_MODULE_3__.coinbaseWallet)()\n    ]\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3dhZ21pLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1Q7QUFDb0I7QUFDMkI7QUFFcEUsTUFBTU8sU0FBU1AsbURBQVlBLENBQUM7SUFDakNRLFFBQVE7UUFBQ04saURBQU9BO1FBQUVDLGlEQUFPQTtLQUFDO0lBQzFCTSxZQUFZO1FBQ1YsQ0FBQ1AsaURBQU9BLENBQUNRLEVBQUUsQ0FBQyxFQUFFVCwwQ0FBSUEsQ0FBQyxDQUFDLDZCQUE2QixFQUFFVSxrQ0FBaUMsRUFBRTtRQUN0RixDQUFDUixpREFBT0EsQ0FBQ08sRUFBRSxDQUFDLEVBQUVULDBDQUFJQSxDQUFDLENBQUMsNkJBQTZCLEVBQUVVLGtDQUFpQyxFQUFFO0lBQ3hGO0lBQ0FHLFlBQVk7UUFDVlYsMERBQVFBO1FBQ1JDLCtEQUFhQSxDQUFDO1lBQ1pVLFdBQVdKLGtDQUFnRDtRQUM3RDtRQUNBTCxnRUFBY0E7S0FDZjtBQUNILEdBQUciLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2R1Y2t2YXVsdHByZXNhbGUvc3JjL2xpYi93YWdtaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb25maWcgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBodHRwIH0gZnJvbSAndmllbSc7XG5pbXBvcnQgeyBtYWlubmV0LCBzZXBvbGlhIH0gZnJvbSAnd2FnbWkvY2hhaW5zJztcbmltcG9ydCB7IG1ldGFNYXNrLCB3YWxsZXRDb25uZWN0LCBjb2luYmFzZVdhbGxldCB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKHtcbiAgY2hhaW5zOiBbbWFpbm5ldCwgc2Vwb2xpYV0sIC8vIEFkZCB5b3VyIGRlc2lyZWQgY2hhaW5zXG4gIHRyYW5zcG9ydHM6IHtcbiAgICBbbWFpbm5ldC5pZF06IGh0dHAoYGh0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8vdjMvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfSUR9YCksIC8vIFVzZSBJbmZ1cmEgZm9yIG1haW5uZXRcbiAgICBbc2Vwb2xpYS5pZF06IGh0dHAoYGh0dHBzOi8vc2Vwb2xpYS5pbmZ1cmEuaW8vdjMvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfSUR9YCksIC8vIFVzZSBJbmZ1cmEgZm9yIHRlc3RuZXRcbiAgfSxcbiAgY29ubmVjdG9yczogW1xuICAgIG1ldGFNYXNrKCksIC8vIE1ldGFNYXNrXG4gICAgd2FsbGV0Q29ubmVjdCh7XG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dBTExFVENPTk5FQ1RfUFJPSkVDVF9JRCwgLy8gV2FsbGV0Q29ubmVjdCBQcm9qZWN0IElEXG4gICAgfSksXG4gICAgY29pbmJhc2VXYWxsZXQoKSwgLy8gQ29pbmJhc2UgV2FsbGV0XG4gIF0sXG59KTsiXSwibmFtZXMiOlsiY3JlYXRlQ29uZmlnIiwiaHR0cCIsIm1haW5uZXQiLCJzZXBvbGlhIiwibWV0YU1hc2siLCJ3YWxsZXRDb25uZWN0IiwiY29pbmJhc2VXYWxsZXQiLCJjb25maWciLCJjaGFpbnMiLCJ0cmFuc3BvcnRzIiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSU5GVVJBX0lEIiwiY29ubmVjdG9ycyIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1dBTExFVENPTk5FQ1RfUFJPSkVDVF9JRCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/wagmi.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _lib_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/wagmi */ \"./src/lib/wagmi.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _lib_wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _lib_wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // Import the wagmi config\n// Create a client for react-query\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiProvider, {\n        config: _lib_wagmi__WEBPACK_IMPORTED_MODULE_3__.config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/workspaces/duckvaultpresale/src/pages/_app.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspaces/duckvaultpresale/src/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/duckvaultpresale/src/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQ25DO0FBQ0EsQ0FBQywwQkFBMEI7QUFFakUsa0NBQWtDO0FBQ2xDLE1BQU1JLGNBQWMsSUFBSUosOERBQVdBO0FBRW5DLFNBQVNLLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNMLGdEQUFhQTtRQUFDQyxRQUFRQSw4Q0FBTUE7a0JBQzNCLDRFQUFDRixzRUFBbUJBO1lBQUNPLFFBQVFKO3NCQUMzQiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9kdWNrdmF1bHRwcmVzYWxlL3NyYy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFdhZ21pUHJvdmlkZXIgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9saWIvd2FnbWknOyAvLyBJbXBvcnQgdGhlIHdhZ21pIGNvbmZpZ1xuXG4vLyBDcmVhdGUgYSBjbGllbnQgZm9yIHJlYWN0LXF1ZXJ5XG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlQcm92aWRlciBjb25maWc9e2NvbmZpZ30+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvV2FnbWlQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIldhZ21pUHJvdmlkZXIiLCJjb25maWciLCJxdWVyeUNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "viem":
/*!***********************!*\
  !*** external "viem" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("viem");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/connectors":
/*!***********************************!*\
  !*** external "wagmi/connectors" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("wagmi/connectors");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();