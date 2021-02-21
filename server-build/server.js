/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PlaceList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaceList */ \"./src/components/PlaceList.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // TODO: add state\n\nfunction App(_ref) {\n  var places = _ref.places;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    itemsPerPage: 10,\n    page: 1\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      context = _useState2[0],\n      setContext = _useState2[1];\n\n  return (\n    /*#__PURE__*/\n    // <AppContext.Provider value={{ context, setContext }}>\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlaceList__WEBPACK_IMPORTED_MODULE_1__.default, {\n      places: places\n    })) // </AppContext.Provider>\n\n  );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://accenture-backend/./src/components/App.js?");

/***/ }),

/***/ "./src/components/PlaceItem.js":
/*!*************************************!*\
  !*** ./src/components/PlaceItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar checkStatus = function checkStatus(openingHours) {\n  // TODO: Check opening status\n  return 'Open';\n};\n\nvar PlaceItem = function PlaceItem(_ref) {\n  var _place$location;\n\n  var place = _ref.place;\n  // TODO: Get status based on current time and place's open time\n  var lang = 'en';\n\n  var _place$location$addre = (_place$location = place.location) === null || _place$location === void 0 ? void 0 : _place$location.address,\n      street_address = _place$location$addre.street_address,\n      postal_code = _place$location$addre.postal_code,\n      locality = _place$location$addre.locality;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Name, null, place.name[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Address, null, \"\".concat(street_address, \", \").concat(postal_code, \" \").concat(locality)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, checkStatus(place.openingHours)));\n};\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n  displayName: \"PlaceItem__Wrapper\",\n  componentId: \"sc-7aurgs-0\"\n})([\"display:flex;flex-direction:row;justify-content:flex-start;\"]);\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n  displayName: \"PlaceItem__Name\",\n  componentId: \"sc-7aurgs-1\"\n})([\"flex:1;\"]);\nvar Address = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n  displayName: \"PlaceItem__Address\",\n  componentId: \"sc-7aurgs-2\"\n})([\"flex:1;\"]);\nPlaceItem.propTypes = {\n  place: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceItem);\n\n//# sourceURL=webpack://accenture-backend/./src/components/PlaceItem.js?");

/***/ }),

/***/ "./src/components/PlaceList.js":
/*!*************************************!*\
  !*** ./src/components/PlaceList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlaceItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceItem */ \"./src/components/PlaceItem.js\");\n\n\n\n\nvar PlaceList = function PlaceList(_ref) {\n  var places = _ref.places;\n  if (!places || places.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"No data\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, places.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlaceItem__WEBPACK_IMPORTED_MODULE_2__.default, {\n      place: item,\n      key: item.id\n    });\n  }));\n};\n\nPlaceList.propTypes = {\n  places: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceList);\n\n//# sourceURL=webpack://accenture-backend/./src/components/PlaceList.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.get('/', function (req, res) {\n  // TODO: check session exist and redirect to proper path\n  // res.send('Hello world!')\n  res.send(\"\\n    <!doctype html>\\n    <div id=\\\"app\\\">Hello world</div>\\n  \");\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://accenture-backend/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/page.js":
/*!****************************!*\
  !*** ./src/routes/page.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/App */ \"./src/components/App.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_2___default().Router();\nvar sheet = new styled_components__WEBPACK_IMPORTED_MODULE_6__.ServerStyleSheet(); // with default page size (10)\n\nrouter.get('/:page', function (req, res) {\n  var page = req.params.page; // TODO: check validity of page & size\n\n  node_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://open-api.myhelsinki.fi/v1/places/').then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.filterData)(json.data, _utils_helpers__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PAGE_SIZE, page);\n  }).then(function (result) {\n    console.log('result', result); // TODO: Render properly here\n\n    var html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__.default, {\n      places: result\n    }));\n    res.send(\"<!doctype html><div id=\\\"app\\\">\".concat(html, \"</div>\")); // res.send(JSON.stringify(result))\n  })[\"catch\"](function (err) {\n    console.log(\"error while fetching data: \".concat(err));\n    res.send(\"<!doctype html><div id=\\\"app\\\">Something went wrong!</div>\");\n  });\n});\nrouter.get('/:page/:size', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$params, page, size, response, data, html, styleTags;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$params = req.params, page = _req$params.page, size = _req$params.size; // TODO: check validity of page & size\n            //\n\n            _context.prev = 1;\n            _context.next = 4;\n            return node_fetch__WEBPACK_IMPORTED_MODULE_3___default()('http://open-api.myhelsinki.fi/v1/places/');\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context.sent;\n            console.log('data', data); // TODO: Render properly here\n\n            html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__.StyleSheetManager, {\n              sheet: sheet.instance\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__.default, {\n              places: data\n            })));\n            styleTags = sheet.getStyleTags();\n            res.send(\"<!doctype html><div id=\\\"app\\\">\".concat(html, \"</div>\"));\n            _context.next = 18;\n            break;\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(\"error while fetching data: \".concat(_context.t0));\n            res.send(\"<!doctype html><div id=\\\"app\\\">Something went wrong!</div>\");\n\n          case 18:\n            _context.prev = 18;\n            sheet.seal();\n            return _context.finish(18);\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 14, 18, 21]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack://accenture-backend/./src/routes/page.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar indexRouter = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\nvar pageRouter = __webpack_require__(/*! ./routes/page */ \"./src/routes/page.js\");\n\nvar app = express();\nvar PORT = 3001;\napp.use('/', indexRouter);\napp.use('/page', pageRouter);\napp.listen(PORT, function () {\n  console.log(\"Server is running on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://accenture-backend/./src/server.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/***/ ((module) => {

eval("var filterData = function filterData(dataArr, pageSize, pageNumber) {\n  // TODO: check if reaching the final items\n  var remainingCount = pageSize;\n  var pos = pageNumber - 1;\n  return dataArr.slice(pageSize * pos, pageSize * pos + remainingCount);\n};\n\nmodule.exports = {\n  DEFAULT_PAGE_SIZE: 10,\n  DEFAULT_PAGE: 1,\n  filterData: filterData\n};\n\n//# sourceURL=webpack://accenture-backend/./src/utils/helpers.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/register");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;