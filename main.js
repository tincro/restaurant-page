/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nvar contact = function() {\n    var contactData = document.createElement('div');\n    contactData.id = 'contact-data';\n\n    var headline = document.createElement('h2');\n    headline.id = 'contact-title';\n    headline.className = 'nav-tab';\n    headline.innerText = \"Here is the contact\";\n\n    contactData.appendChild(headline);\n\n    return contactData;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\nvar content = function(){\n    var container = document.getElementById('content');\n    \n    var headline = document.createElement('h1');\n    headline.innerText = \"Wilson's Diner\";\n    headline.id = 'title'\n\n    var image = document.createElement('img');\n    image.src = '../img/Wilsons_diner.jpg'\n    image.id = 'store-img'\n    \n    var descArr = [\n        \"This local family owned restaurant is worth your time visiting.\\\n        Owned and operated by a long time local chef that takes pride in\\\n        the food we serve to our customers.\",\n\n        \"We locally source our produce and meat, and serve it with a friendly smile.\",\n\n        \"Renowned for our annual Meat Fest in April, its a celebration of life's greatest things, \\\n        good food and loved ones around a table.\"\n    ];\n    \n    var textContainer = document.createElement('div')\n    textContainer.id = 'store-history';\n\n    descArr.forEach(p => {\n        var desc = document.createElement('p');\n        desc.innerText = p;\n        textContainer.appendChild(desc);\n    });\n\n    container.appendChild(image);\n    container.appendChild(headline);\n    container.appendChild(textContainer);\n\n    return container;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\ndocument.onload = (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.content)();\n\nfunction onTabChange(tab){\n    var container = document.getElementById('nav-content');\n    var nav = document.getElementById('tab-nav');\n    \n    while(container.lastChild != nav){\n        container.removeChild(container.lastChild);\n    };\n\n    container.appendChild(tab());\n    return container;\n};\n\nvar menuData = document.getElementById('menu');\nvar contactData = document.getElementById('contact');\n\nmenuData.addEventListener(\"click\", function(){ onTabChange(_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu) });\ncontactData.addEventListener(\"click\", function() { onTabChange(_contact_js__WEBPACK_IMPORTED_MODULE_1__.contact) });\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nvar menu = function() {\n    var menuData = document.createElement('div');\n    menuData.id = 'menu-data';\n\n    var headline = document.createElement('h2')\n    headline.id = 'menu-title';\n    headline.className = 'nav-tab';\n    headline.innerText = \"Here is the menu\";\n\n    menuData.appendChild(headline);\n\n    return menuData;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;