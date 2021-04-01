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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nvar contact = function() {\n    var contactData = document.createElement('div');\n    contactData.id = 'contact-data';\n\n    var headline = document.createElement('h2');\n    headline.id = 'contact-title';\n    headline.className = 'nav-tab';\n    headline.innerText = \"Contact us for any questions!\";\n\n    contactData.appendChild(headline);\n\n    // Contact store details\n    const contactGroup = document.createElement('div');\n    contactGroup.id = 'contact-group-container'\n\n    var contact = {\n        Phone: \"888.888.8888\",\n        Email: \"info@wilsonsdiner.com\",\n        Address: \"18823 Wilson Drive, Greensboro, N.C\"\n    }\n\n    var details = Object.entries(contact);\n\n    var detailList = document.createElement('ul');\n    var listContainer = document.createElement('div');\n    listContainer.id = 'list-container';\n    listContainer.className = 'contact-container';\n\n    listContainer.appendChild(detailList);\n\n    for (const [key, value] of details) {\n        let detailItem = document.createElement('li');\n\n        let title = document.createElement('h3')\n        title.id = `${key.toLowerCase()}-title`;\n        title.className = 'contact-title';\n        title.innerHTML = `<span>${key}:</span>`;\n        \n        var link = \"\";\n        switch (key) {\n            case \"Phone\":\n                link = `<a href=\"tel:8888888888\">${value}</a>`\n                break;\n\n            case \"Email\":\n                link = `<a href=\"mailto:info@wilsonsdiner.com\">${value}</a>`\n                break;\n        \n            default:\n                link = `${value}`;\n                break;\n        }\n\n        let detail = document.createElement('p');\n        detail.id = `${key}-detail`;\n        detail.className = 'detail-item';\n        detail.innerHTML = `<span>${link}</span>`;\n\n        detailItem.appendChild(title);\n        detailItem.appendChild(detail);\n\n        detailList.appendChild(detailItem);\n    }\n    contactGroup.appendChild(listContainer);\n\n    // Form\n    var form = document.createElement('form');\n    var formContainer = document.createElement('div');\n    formContainer.id = 'form-container';\n    formContainer.className = 'contact-container';\n\n    formContainer.appendChild(form);\n\n    var formElements = {\n        \"First Name\": {\n            tag: \"input\",\n            type: \"text\",\n            id: \"fname\",\n            name: \"fname\"\n        },\n        \"Last Name\": {\n            tag: \"input\",\n            type: \"text\",\n            id: \"lname\",\n            name: \"lname\"\n        },\n        \"Message\": {\n            tag: \"textarea\",\n            id: \"message\",\n            name: \"message\"\n        },\n        \"Submit\": {\n            tag: \"button\",\n            type: \"submit\",\n            id: \"form-submit\",\n            name: \"form-submit\",\n            value: \"Submit\"\n        }\n        \n    }\n\n    var inputs = Object.entries(formElements);\n\n    for (const [input, attrs] of inputs) {\n        let line = document.createElement(attrs[\"tag\"]);\n        line.id = attrs[\"id\"];\n        line.className = `form-${attrs[\"tag\"]}`;\n        line.name = attrs[\"name\"];\n        line.placeholder = input;\n        if(attrs[\"type\"]){\n            line.type = attrs[\"type\"];\n        }\n        if(attrs[\"value\"]) {\n            line.innerText = attrs[\"value\"]\n        }\n\n        form.appendChild(line);\n    }\n\n    contactGroup.appendChild(formContainer);\n    contactData.appendChild(contactGroup);\n\n    return contactData;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n\n\nvar content = function(){\n    var container = document.getElementById('content');\n\n    var info = document.createElement('div');\n    info.id = 'info-container';\n    \n    var headline = document.createElement('h1');\n    headline.innerText = \"Wilson's Diner\";\n    headline.id = 'store-title'\n    \n    var image = document.createElement('img');\n    image.src = '../img/Wilsons_diner.jpg'\n    image.id = 'store-img'\n    \n    var descArr = [\n        \"This local family owned restaurant is worth your time visiting.\\\n        Owned and operated by a long time local chef that takes pride in\\\n        the food we serve to our customers.\",\n        \n        \"We locally source our produce and meat, cook it with love, and serve with a friendly smile.\",\n        \n        \"Renowned for our annual Meat Fest in April, its a celebration of life's greatest things: \\\n        good food and loved ones around a table.\"   \n    ];\n    \n    var textContainer = document.createElement('div')\n    textContainer.id = 'store-history';\n    textContainer.className = 'text-container';\n\n    var aboutUs = document.createElement('h2');\n    aboutUs.id = 'about-title';\n    aboutUs.className = 'about-title';\n    aboutUs.innerText = 'About Us';\n\n    textContainer.appendChild(aboutUs);\n    \n    descArr.forEach(p => {\n        var desc = document.createElement('p');\n        desc.innerText = p;\n        textContainer.appendChild(desc);\n    });\n    \n    info.appendChild(headline);\n    info.appendChild((0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.nav)());\n    info.appendChild(textContainer);\n    container.appendChild(image);\n    container.appendChild(info);\n\n    return container;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\ndocument.onload = (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.content)();\n\nfunction onTabChange(tab){\n    var container = document.getElementById('nav-content');\n    var nav = document.getElementById('tab-nav');\n    \n    while(container.lastChild != nav){\n        container.removeChild(container.lastChild);\n    };\n\n    container.appendChild(tab());\n    return container;\n};\n\nvar menuData = document.getElementById('menu');\nvar contactData = document.getElementById('contact');\n\nmenuData.addEventListener(\"click\", function(){ onTabChange(_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu) });\ncontactData.addEventListener(\"click\", function() { onTabChange(_contact_js__WEBPACK_IMPORTED_MODULE_1__.contact) });\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nvar menu = function() {\n    var menuData = document.createElement('div');\n    menuData.id = 'menu-data';\n\n    var headline = document.createElement('h2')\n    headline.id = 'menu-title';\n    headline.className = 'nav-tab';\n    headline.innerText = \"Enjoy our locally sourced menu\";\n    \n    menuData.appendChild(headline);\n\n    var menuItems = {\n        \"Starters\": {\n            \"Calamari\": 11,\n            \"Flatbread\": 9,\n            \"Nachos\": 8,\n            \"Spinach Dip\": 8\n        },\n        \"Burgers\": {\n            \"American\": 10,\n            \"BBQ Bourbon\": 15,\n            \"Bison\": 13,\n            \"Mushroom Turkey\": 12,\n            \"Ostrich\": 12\n        },\n        \"Entrees\": {\n            \"Baby Back Ribs\": 13,\n            \"BBQ Chicken\": 10,\n            \"Chicken Tenders\": 8,\n            \"Po'boy\": 7\n        },\n        \"Steaks\": {\n            \"NY Strip\": 28,\n            \"Ribeye\": 22,\n            \"Surf N' Turf\": 35\n        },\n        \"Salads\": {\n            \"Blue Cobb\": 12,\n            \"Ceasar\": 11,\n            \"House\": 10\n        },\n        \"Seafood\": {\n            \"Scallops\": 12,\n            \"Shrimp N' Grits\": 8,\n            \"Shrimp Creole\": 9,\n            \"Rainbow Trout\": 12,\n        },\n        \"Sides\": {\n            \"Brussel Sprouts\": 5,\n            \"Cole Slaw\": 3,\n            \"Fries\": 4,\n            \"Mac N' Cheese\": 4,\n            \"Mashed Potato\": 4,\n            \"Red Beans and Rice\": 3\n        },\n        \"Drinks\": {\n            \"Beer\": 6,\n            \"Tea\": 2,\n            \"Lemonade\": 3,\n            \"Soft Drinks\": 2\n        }\n    };\n\n    const items = Object.entries(menuItems);\n    const foodGroup = document.createElement('div');\n    foodGroup.id = 'food-group-container'\n    \n    // Food classifications\n    for (const [foodType, lineItem] of items){\n        let foodSection = document.createElement('div');\n        foodSection.className = 'food-group';\n\n        let foodTitle = document.createElement('h3');\n        foodTitle.id = `${foodType.toLowerCase()}-title`;\n        foodTitle.className = 'food-title';\n        foodTitle.innerText = foodType;\n\n        foodSection.appendChild(foodTitle);\n        \n        let foodList = document.createElement('ul');\n\n        const foods = Object.entries(lineItem);\n        \n        // Food name and price\n        for (const [food, price] of foods){\n            let foodItem = document.createElement('li');\n            foodItem.innerHTML = `<span>${food}</span> <span>$${price}</span>`;\n\n            foodList.appendChild(foodItem);\n        }\n\n        foodSection.appendChild(foodList);\n        foodGroup.appendChild(foodSection);\n    }\n    menuData.appendChild(foodGroup);\n\n    return menuData;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\nvar nav = function() {\n    var navTabs = [\"Menu\", \"Contact\"];\n\n    var container = document.createElement('div');\n    container.id = 'nav-content'\n\n    var nav = document.createElement('nav');\n    nav.id = 'tab-nav';\n\n    var ul = document.createElement('ul');\n\n    navTabs.forEach( tabText => {\n        var li = document.createElement('li');\n        var a = document.createElement('a');\n        a.innerText = tabText;\n        \n        var lower = tabText.toLowerCase();\n        a.id = lower;\n        a.href = '#' + lower;\n\n        li.appendChild(a);\n        ul.appendChild(li);\n    });\n\n    nav.appendChild(ul);\n    container.appendChild(nav);\n\n    return container;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

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