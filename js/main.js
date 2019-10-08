/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementsByClassName("header__secondary-menu-search-input")[0].addEventListener("focus", function () {
  document.getElementsByClassName("header__secondary-menu-search-btn")[0].setAttribute("style", "visibility: visible");
});
document.getElementsByClassName("header__secondary-menu-search-input")[0].addEventListener("blur", function () {
  document.getElementsByClassName("header__secondary-menu-search-btn")[0].removeAttribute("style", "visibility: hidden");
});
document.querySelector(".header__main-menu-item--dropdown").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".header__main-menu-submenu").classList.toggle("header__main-menu-submenu--active");
}); // document.querySelector(".header__main-menu-item--dropdown").addEventListener("mouseout", function(){
// 	document.querySelector(".header__main-menu-submenu").classList.remove("header__main-menu-submenu--active");
// });

/***/ }),

/***/ "./src/blocks/modules/hp-cf-popup/hp-cf-popup.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/hp-cf-popup/hp-cf-popup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var overlay = document.querySelector(".popup-overlay");
var contactPopupCloseBtn = document.querySelector(".contact-popup__close-btn");
var mapPopupCloseBtn = document.querySelector(".map-popup__close-btn");
var contactPopup = document.querySelector(".contact-popup");
var contactForm = document.querySelector(".contact-popup form");
var contactUserName = document.querySelector("[name=contact-user-name]");
var contactUserEmail = document.querySelector("[name=contact-user-email]");
var contactUserText = document.querySelector("[name=contact-user-text]");
var mapPopup = document.querySelector(".map-popup"); // Close Contact PopUp button

contactPopupCloseBtn.addEventListener("click", function () {
  contactPopup.classList.add("hidden");
  overlay.classList.add("hidden");
}); // Close Map PopUp button

mapPopupCloseBtn.addEventListener("click", function () {
  mapPopup.classList.remove("popup-active");
  overlay.classList.add("hidden");
}); // Contact PopUp

contactForm.addEventListener("submit", function (e) {
  if (!contactUserName.value || !contactUserEmail.value || !contactUserText.value) {
    contactPopup.classList.add("contact-popup--fill-error");
    setTimeout(function () {
      contactPopup.classList.remove("contact-popup--fill-error");
    }, 400);
    e.preventDefault();
  }
}); // Map PopUp
// Close PopUp by clicking on overlay

overlay.addEventListener("click", function () {
  if (contactPopup.className.indexOf("hidden") === -1) {
    contactPopup.classList.add("hidden");
  }

  if (mapPopup.className.indexOf("popup-active") !== -1) {
    mapPopup.classList.remove("popup-active");
  }

  overlay.classList.add("hidden");
}); // Close PopUp by clicking on ESC button

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (contactPopup.className.indexOf("hidden") === -1) {
      contactPopup.classList.add("hidden");
    }

    if (mapPopup.className.indexOf("popup-active") === -1) {
      mapPopup.classList.remove("popup-active");
    }

    overlay.classList.add("hidden");
  }
});

/***/ }),

/***/ "./src/blocks/modules/hp-company/hp-company.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/hp-company/hp-company.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var companyBtn = document.querySelector(".company__contacts-btn");
var mapBtn = document.querySelector(".company__contacts-map-btn");
var contactUserFocus = document.querySelector("[name=contact-user-name]");
companyBtn.addEventListener("click", function () {
  document.querySelector(".contact-popup").classList.remove("hidden");
  document.querySelector(".popup-overlay").classList.remove("hidden");
  contactUserFocus.focus();
});
mapBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".map-popup").classList.add("popup-active");
  document.querySelector(".popup-overlay").classList.remove("hidden");
});

/***/ }),

/***/ "./src/blocks/modules/hp-conditions/hp-conditions.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/hp-conditions/hp-conditions.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var conditionTabsSwitch = document.querySelectorAll(".conditions__tabs-switch-item");
var conditionTabsContent = document.querySelectorAll(".conditions__tabs-content-list-item");

function conditionTabClicks(tabClickEvent) {
  for (var i = 0; i < conditionTabsSwitch.length; i++) {
    conditionTabsSwitch[i].classList.remove("conditions__tabs-switch-item--active");
  }

  var clickedSwitch = tabClickEvent.currentTarget;
  clickedSwitch.classList.add("conditions__tabs-switch-item--active");

  for (i = 0; i < conditionTabsContent.length; i++) {
    conditionTabsContent[i].classList.remove("conditions__tabs-content-list-item--active");
  }

  var anchorReference = tabClickEvent.target;
  var activePaneId = anchorReference.getAttribute("data-switch");
  var activePane = document.querySelector("li[data-tab=\"".concat(activePaneId, "\"]"));
  activePane.classList.add("conditions__tabs-content-list-item--active");
}

for (i = 0; i < conditionTabsSwitch.length; i++) {
  conditionTabsSwitch[i].addEventListener("click", conditionTabClicks);
}

/***/ }),

/***/ "./src/blocks/modules/hp-slider/hp-slider.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/hp-slider/hp-slider.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliderItem = document.querySelectorAll(".slider__item");
var sliderBullets = document.querySelectorAll(".slider__bullets-btn");

function sliderTabClicks(tabClickEvent) {
  for (var i = 0; i < sliderBullets.length; i++) {
    sliderBullets[i].classList.remove("slider__bullets-btn--active");
  }

  var clickedSwitch = tabClickEvent.currentTarget; // console.log(clickedSwitch);

  clickedSwitch.classList.add("slider__bullets-btn--active");

  for (i = 0; i < sliderItem.length; i++) {
    sliderItem[i].classList.remove("slider__item--active");
  }

  var anchorReference = tabClickEvent.target;
  var activePaneId = anchorReference.getAttribute("data-slider-button");
  console.log(activePaneId);
  var activePane = document.querySelector("[data-slider=\"".concat(activePaneId, "\"]"));
  activePane.classList.add("slider__item--active");
}

for (i = 0; i < sliderBullets.length; i++) {
  sliderBullets[i].addEventListener("click", sliderTabClicks);
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_hp_slider_hp_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/hp-slider/hp-slider */ "./src/blocks/modules/hp-slider/hp-slider.js");
/* harmony import */ var _modules_hp_slider_hp_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_hp_slider_hp_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_hp_company_hp_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/hp-company/hp-company */ "./src/blocks/modules/hp-company/hp-company.js");
/* harmony import */ var _modules_hp_company_hp_company__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_hp_company_hp_company__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_hp_conditions_hp_conditions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/hp-conditions/hp-conditions */ "./src/blocks/modules/hp-conditions/hp-conditions.js");
/* harmony import */ var _modules_hp_conditions_hp_conditions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_hp_conditions_hp_conditions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_hp_cf_popup_hp_cf_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/hp-cf-popup/hp-cf-popup */ "./src/blocks/modules/hp-cf-popup/hp-cf-popup.js");
/* harmony import */ var _modules_hp_cf_popup_hp_cf_popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_hp_cf_popup_hp_cf_popup__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map