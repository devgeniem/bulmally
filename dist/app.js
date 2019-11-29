/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_boilerplate_boilerplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/boilerplate/boilerplate */ "./components/boilerplate/boilerplate.js");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar */ "./components/navbar/navbar.js");
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/accordion/accordion */ "./components/accordion/accordion.js");
/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabs/tabs */ "./components/tabs/tabs.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal/modal */ "./components/modal/modal.js");
/* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/message/message */ "./components/message/message.js");
/* harmony import */ var _documentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documentation */ "./assets/js/documentation.js");
// Import main style file here.
 // Import individual component classes here.






 // Run components and add them to the map
// the component slug being the key.

var components = {
  boilerplate: new _components_boilerplate_boilerplate__WEBPACK_IMPORTED_MODULE_1__["default"](),
  navbar: new _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"](),
  accordion: new _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"](),
  tabs: new _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_4__["default"](),
  modal: new _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"](),
  message: new _components_message_message__WEBPACK_IMPORTED_MODULE_6__["default"]()
}; // Initialize documentation functionalities.


new _documentation__WEBPACK_IMPORTED_MODULE_7__["default"](components);

/***/ }),

/***/ "./assets/js/documentation.js":
/*!************************************!*\
  !*** ./assets/js/documentation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// This adds functionalities to add higlighted markdown supported documentation
// for Bulmally compontents.



highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('scss', highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Documentation =
/*#__PURE__*/
function () {
  /**
   * Constructor for documentation handling.
   *
   * @param {Object} components The component objects map.
   */
  function Documentation(components) {
    var _this = this;

    _classCallCheck(this, Documentation);

    this.components = components;
    document.addEventListener('DOMContentLoaded', function () {
      _this.initDocumentation();
    });
  }
  /**
   * Initializes the markdown documentation if on a
   */


  _createClass(Documentation, [{
    key: "initDocumentation",
    value: function initDocumentation() {
      var pathname = window.location.pathname;

      for (var slug in this.components) {
        var component = this.components[slug];

        if (!pathname.includes(slug) || !component.documentation) {
          // Return, if this component is not currently viewed
          // or the component does not contain documentation.
          continue;
        } // Get the container for the markdown document.


        var docContainer = document.getElementById('js-markdown');

        if (!docContainer) {
          continue;
        } // Add documentation to the container.


        docContainer.innerHTML = component.documentation; // Highlight code blocks.

        docContainer.querySelectorAll('code').forEach(function (block) {
          // Wrap all code blocks with a pre tag.
          var wrapper = document.createElement('pre');
          block.parentNode.insertBefore(wrapper, block);
          wrapper.appendChild(block);
          highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.highlightBlock(block);
        });
      }
    }
  }]);

  return Documentation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Documentation);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/accordion/accordion.js":
/*!*******************************************!*\
  !*** ./components/accordion/accordion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Accordion JS controller.
 */

/**
 * Class Accordion
 */
var Accordion =
/*#__PURE__*/
function () {
  /**
   * This method is run when a new instance of the class is created.
   */
  function Accordion() {
    var _this = this;

    _classCallCheck(this, Accordion);

    // This must be set for each component.
    this.documentation = __webpack_require__(/*! ./readme.md */ "./components/accordion/readme.md");
    document.addEventListener('DOMContentLoaded', function () {
      _this.docReady();
    });
  }
  /**
   * Cache dom elements for use in the class's methods
   */


  _createClass(Accordion, [{
    key: "cache",
    value: function cache() {
      this.mainContainer = document.getElementById('js-bulmally-accordion');

      if (this.mainContainer) {
        this.dropdownTogglers = this.mainContainer.querySelectorAll('.accordion-title-button');
        this.dropdowns = this.mainContainer.querySelectorAll('.accordion-content'); // Hide all toggleable elements with JS.

        for (var i = 0; i < this.dropdowns.length; i++) {
          this.dropdowns[i].classList.add('is-hidden');
        }
      }
    }
    /**
     * Add event listeners.
     */

  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      if (this.dropdownTogglers) {
        var _loop = function _loop(i) {
          _this2.dropdownTogglers[i].addEventListener('click', function () {
            return _this2.toggleDropdown(_this2.dropdownTogglers[i]);
          });
        };

        for (var i = 0; i < this.dropdownTogglers.length; i++) {
          _loop(i);
        }
      }
    }
    /**
     * Toggles a dropdown content visibility.
     *
     * @param {HTMLButtonElement} clickedToggler The toggler button that was clicked.
     */

  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(clickedToggler) {
      var containerId = clickedToggler.getAttribute('aria-controls');
      var dropDownContent = this.mainContainer.querySelector("#".concat(containerId));
      this.toggleAriaExpanded(clickedToggler);
      dropDownContent.classList.toggle('is-hidden');
    }
    /**
     * Get the toggler's aria-expanded current state and set a new opposite state to it.
     * Also set the opened container's aria-hidden state to the new value's opposite.
     *
     * @param {HTMLElement} toggler The toggler element.
     */

  }, {
    key: "toggleAriaExpanded",
    value: function toggleAriaExpanded(toggler) {
      var ariaExpandedState = toggler.getAttribute('aria-expanded') === 'false' ? true : false;
      toggler.setAttribute('aria-expanded', ariaExpandedState);
    }
    /**
     * Run when the document is ready.
     */

  }, {
    key: "docReady",
    value: function docReady() {
      this.cache();
      this.events();
    }
  }]);

  return Accordion;
}();



/***/ }),

/***/ "./components/accordion/readme.md":
/*!****************************************!*\
  !*** ./components/accordion/readme.md ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"accordion-component\">Accordion component</h2>\n<p>This component provides an accordion functionality with added accessible JS implementation.</p>\n<h3 id=\"tests-and-accessibility-status\">Tests and accessibility status</h3>\n<p>The accessibility-ready status of this component is: untested.</p>\n<ul>\n<li><input disabled=\"\" type=\"checkbox\"> Keyboard-only</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (macOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iPadOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Talkback &amp; Chrome (Android)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Narrator &amp; Edge (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> NVDA &amp; Firefox (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Windows High Contrast mode</li>\n</ul>\n<h3 id=\"html\">HTML</h3>\n<p>The Bulmally accordion&#39;s titles are inside a button so that they are focusable and clickable.</p>\n<pre><code>&lt;div id=&quot;js-bulmally-accordion&quot; class=&quot;bulmally-accordion&quot;&gt;\n    &lt;div class=&quot;columns is-multiline&quot;&gt;\n\n        &lt;div class=&quot;column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop&quot;&gt;\n            &lt;div class=&quot;accordion-row box&quot;&gt;\n                &lt;h3 class=&quot;h4 accordion-title&quot;&gt;\n                    &lt;!-- This controls the section. Toggling the state is done with JS --&gt;\n                    &lt;button\n                        id=&quot;accordion-title-button-1&quot;\n                        class=&quot;accordion-title-button&quot;\n                        aria-expanded=&quot;false&quot;\n                        aria-controls=&quot;accordion-content-1&quot;&gt;\n\n                        &lt;div class=&quot;level is-mobile&quot;&gt;\n                            &lt;div class=&quot;level-left can-shrink&quot;&gt;\n                                &lt;span class=&quot;level-item can-shrink accordion-title-text&quot;&gt;\n                                    This heading is clickable\n                                &lt;/span&gt;\n                            &lt;/div&gt;\n                            &lt;div class=&quot;level-right&quot;&gt;\n                                &lt;span class=&quot;level-item icon accordion-title-icon&quot;&gt;\n                                    &lt;i class=&quot;fas fa-angle-down&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;\n                                &lt;/span&gt;\n                            &lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/button&gt;\n                &lt;/h3&gt;\n\n                &lt;!-- The ID of this element has to be dynamically added. --&gt;\n                &lt;div id=&quot;accordion-content-1&quot; class=&quot;accordion-content&quot;&gt;\n                    &lt;div class=&quot;content is-small&quot;&gt;\n                        &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.&lt;/p&gt;\n\n                        &lt;h3&gt;Lorem ipsum dolor sit amet consectetur&lt;/h3&gt;\n\n                        &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.&lt;/p&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;!-- Next accordion row --&gt;\n\n        &lt;div class=&quot;column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop&quot;&gt;\n            &lt;div class=&quot;accordion-row box&quot;&gt;\n                &lt;h3 class=&quot;h4 accordion-title&quot;&gt;\n                    &lt;!-- This controls the section. Toggling the state is done with JS --&gt;\n                    &lt;button\n                        id=&quot;accordion-title-button-1&quot;\n                        class=&quot;accordion-title-button&quot;\n                        aria-expanded=&quot;false&quot;\n                        aria-controls=&quot;accordion-content-1&quot;&gt;\n\n                        &lt;div class=&quot;level is-mobile&quot;&gt;\n                            &lt;div class=&quot;level-left can-shrink&quot;&gt;\n                                &lt;span class=&quot;level-item can-shrink accordion-title-text&quot;&gt;\n                                    This heading is clickable\n                                &lt;/span&gt;\n                            &lt;/div&gt;\n                            &lt;div class=&quot;level-right&quot;&gt;\n                                &lt;span class=&quot;level-item icon accordion-title-icon&quot;&gt;\n                                    &lt;i class=&quot;fas fa-angle-down&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;\n                                &lt;/span&gt;\n                            &lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/button&gt;\n                &lt;/h3&gt;\n\n                &lt;!-- The ID of this element has to be dynamically added. --&gt;\n                &lt;div id=&quot;accordion-content-1&quot; class=&quot;accordion-content&quot;&gt;\n                    &lt;div class=&quot;content is-small&quot;&gt;\n                        &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.&lt;/p&gt;\n\n                        &lt;h3&gt;Lorem ipsum dolor sit amet consectetur&lt;/h3&gt;\n\n                        &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil odio nisi iusto ipsa laborum neque fugit.&lt;/p&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n    &lt;/div&gt;\n&lt;/div&gt;</code></pre><h3 id=\"javascript\">JavaScript</h3>\n<p>This JS implementation is written in ES6 and uses VanillaJS to control the states in the DOM. You may use it as it is and use <a href=\"https://babeljs.io/\">Babel</a> to make it backwards compatible with older browsers. If you do not have Babel in your environment, it should be pretty straightforward to copy the required parts of this code.</p>\n<pre><code>/**\n * Accordion JS controller.\n */\n\n/**\n * Class Accordion\n */\nexport default class Accordion {\n    /**\n     * This method is run when a new instance of the class is created.\n     */\n    constructor() {\n        // This must be set for each component.\n        this.documentation = require( &#39;./accordion.md&#39; );\n\n        document.addEventListener(\n            &#39;DOMContentLoaded&#39;,\n            () =&gt; {\n                this.docReady();\n            }\n        );\n    }\n\n    /**\n     * Cache dom elements for use in the class&#39;s methods\n     */\n    cache() {\n        this.mainContainer = document.getElementById( &#39;js-bulmally-accordion&#39; );\n\n        if ( this.mainContainer ) {\n            this.dropdownTogglers = this.mainContainer.querySelectorAll( &#39;.accordion-title-button&#39; );\n            this.dropdowns = this.mainContainer.querySelectorAll( &#39;.accordion-content&#39; );\n        }\n\n        // Hide all toggleable elements with JS.\n        for ( let i = 0; i &lt; this.dropdowns.length; i++ ) {\n            this.dropdowns[ i ].classList.add( &#39;is-hidden&#39; );\n        }\n    }\n\n    /**\n     * Add event listeners.\n     */\n    events() {\n        if ( this.dropdownTogglers ) {\n            for ( let i = 0; i &lt; this.dropdownTogglers.length; i++ ) {\n                this.dropdownTogglers[ i ].addEventListener( &#39;click&#39;, () =&gt; this.toggleDropdown( this.dropdownTogglers[ i ] ) );\n            }\n        }\n    }\n\n    /**\n     * Toggles a dropdown content visibility.\n     *\n     * @param {HTMLButtonElement} clickedToggler The toggler button that was clicked.\n     */\n    toggleDropdown( clickedToggler ) {\n        const containerId = clickedToggler.getAttribute( &#39;aria-controls&#39; );\n        const dropDownContent = this.mainContainer.querySelector( `#${ containerId }` );\n\n        this.toggleAriaExpanded( clickedToggler );\n        dropDownContent.classList.toggle( &#39;is-hidden&#39; );\n    }\n\n    /**\n     * Get the toggler&#39;s aria-expanded current state and set a new opposite state to it.\n     * Also set the opened container&#39;s aria-hidden state to the new value&#39;s opposite.\n     *\n     * @param {HTMLElement} toggler The toggler element.\n     */\n    toggleAriaExpanded( toggler ) {\n        const ariaExpandedState = toggler.getAttribute( &#39;aria-expanded&#39; ) === &#39;false&#39; ? true : false;\n        toggler.setAttribute( &#39;aria-expanded&#39;, ariaExpandedState );\n    }\n\n    /**\n     * Run when the document is ready.\n     */\n    docReady() {\n        this.cache();\n        this.events();\n    }\n}</code></pre><h3 id=\"scss\">SCSS</h3>\n<p>We use the component class name as the CSS scope for our modifications to the basic Bulma CSS code.</p>\n<pre><code>// This file contains all styles for the accordion element.\n.bulmally-accordion {\n\n    .accordion-title-button {\n        appearance: none;\n\n        background-color: $white;\n        border: 0;\n        box-shadow: none;\n        width: 100%;\n\n        &amp;[aria-expanded=&quot;true&quot;] {\n            .icon {\n                transform: rotate(-180deg);\n            }\n        }\n    }\n\n    .accordion-title-icon {\n        transition: transform .2s ease;\n    }\n\n    .accordion-content {\n        margin-top: 1.25rem;\n        padding-top: 1.25rem;\n        border-top: .0625rem solid $grey-lighter;\n    }\n\n    .can-shrink {\n        flex-shrink: 1;\n    }\n}</code></pre>";

/***/ }),

/***/ "./components/boilerplate/boilerplate.js":
/*!***********************************************!*\
  !*** ./components/boilerplate/boilerplate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoilerPlate; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * BoilerPlate JS controller.
 */

/**
 * Class BoilerPlate
 */
var BoilerPlate =
/*#__PURE__*/
function () {
  /**
   * Construct the component functionalities.
   */
  function BoilerPlate() {
    var _this = this;

    _classCallCheck(this, BoilerPlate);

    this.cache(); // This must be set for each component.

    this.documentation = __webpack_require__(/*! ./readme.md */ "./components/boilerplate/readme.md");
    document.addEventListener('DOMContentLoaded', function () {
      _this.docReady();
    });
  }
  /**
   * Cache dom elements for use in the class's methods
   */


  _createClass(BoilerPlate, [{
    key: "cache",
    value: function cache() {}
    /**
     * Add event listeners.
     */

  }, {
    key: "events",
    value: function events() {}
    /**
     * Run when the document is ready.
     */

  }, {
    key: "docReady",
    value: function docReady() {
      this.cache();
      this.events();
    }
  }]);

  return BoilerPlate;
}();



/***/ }),

/***/ "./components/boilerplate/readme.md":
/*!******************************************!*\
  !*** ./components/boilerplate/readme.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"component-documentation\">Component documentation</h2>\n<p><em>Add component specific documentation here.</em></p>\n<h3 id=\"tests-and-accessibility-status\">Tests and accessibility status</h3>\n<p>The accessibility-ready status of this component is: untested.</p>\n<ul>\n<li><input disabled=\"\" type=\"checkbox\"> Keyboard-only</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (macOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iPadOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Talkback &amp; Chrome (Android)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Narrator &amp; Edge (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> NVDA &amp; Firefox (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Windows High Contrast mode</li>\n</ul>\n<h3 id=\"html\">HTML</h3>\n<p><em>Document HTML  markup here and add the code block for easy copy-pasting.</em></p>\n<pre><code>&lt;button class=&quot;button button--boilerplate&quot;&gt;Boilerplate&lt;/button&gt;</code></pre><h3 id=\"javascript\">JavaScript</h3>\n<p><em>Document JavaScript markup here and add the code block for easy copy-pasting.</em></p>\n<pre><code>const something = 123;</code></pre><h3 id=\"scss\">SCSS</h3>\n<p><em>Document SCSS markup here and add the code block for easy copy-pasting.</em></p>\n<pre><code>.button--boilerplate {\n    background-color: #000;\n}</code></pre>";

/***/ }),

/***/ "./components/message/message.js":
/*!***************************************!*\
  !*** ./components/message/message.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Message JS controller.
 */

/**
 * Class Message
 */
var Message =
/*#__PURE__*/
function () {
  /**
   * Construct the component handler.
   */
  function Message() {
    var _this = this;

    _classCallCheck(this, Message);

    // This must be set for each component.
    this.documentation = __webpack_require__(/*! ./readme.md */ "./components/message/readme.md");
    document.addEventListener('DOMContentLoaded', function () {
      _this.initMessages();
    });
  }
  /**
   * Find all message elements and initalize their closing functionality.
   */


  _createClass(Message, [{
    key: "initMessages",
    value: function initMessages() {
      var messages = document.querySelectorAll('.bulmally-message');

      for (var i = 0; i < messages.length; i++) {
        Message.initMessage(messages[i]);
      }
    }
    /**
     * Initializes closing functionalities for a message element.
     *
     * @param {HTMLElement} messageElement A message element.
     */

  }], [{
    key: "initMessage",
    value: function initMessage(messageElement) {
      var deleteButton = messageElement.querySelector('.delete');
      deleteButton.message = messageElement;
      deleteButton.addEventListener('click', Message["delete"]);
    }
    /**
     * Handles the click event of a delete button and deletes the message.
     * Focus is set on the next element before deleting the element.
     *
     * @param {Event} event An event object.
     */

  }, {
    key: "delete",
    value: function _delete(event) {
      var message = event.target.message;
      var focusTo = message.nextElementSibling;

      if (!focusTo) {
        // If there's no sibling for the message,
        // move focus to the parent node.
        focusTo = message.parentNode;
      } // Force ability to give focus on the sibling.


      if (focusTo.tabIndex !== 0) {
        focusTo.setAttribute('tabindex', -1);
      }

      focusTo.focus();
      message.remove();
    }
  }]);

  return Message;
}();



/***/ }),

/***/ "./components/message/readme.md":
/*!**************************************!*\
  !*** ./components/message/readme.md ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"message-component\">Message component</h2>\n<p>Bulma describes the <a href=\"https://bulma.io/documentation/components/message/\">message component</a> as a colored message block, to emphasize part of your page. Bulmally implements the closing functionality for it. We also modify the message HTML markup a little to make it semantically better.</p>\n<h3 id=\"tests-and-accessibility-status\">Tests and accessibility status</h3>\n<p>The accessibility-ready status of this component is: untested.</p>\n<ul>\n<li><input disabled=\"\" type=\"checkbox\"> Keyboard-only</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (macOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iPadOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Talkback &amp; Chrome (Android)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Narrator &amp; Edge (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> NVDA &amp; Firefox (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Windows High Contrast mode</li>\n</ul>\n<h3 id=\"html\">HTML</h3>\n<p>Instead of an article, we encourage to use a section tag for the message container. Heading should be inside a header element and the heading should have a heading tag with a level following the structure of your page. As an example, we use <em>h2</em> since the element probably does not contain the main heading of a page. Inside the delete button, you should add a descriptive text inside the span element targeted for screen readers. Using a span element instead of <em>aria-label</em> we support language translators that do not translate HTML attributes <em>(e.g. Google Translate)</em>.</p>\n<pre><code>&lt;section class=&quot;bulmally-message message&quot;&gt;\n    &lt;header class=&quot;message-header&quot;&gt;\n        &lt;h2&gt;Hello World&lt;/h2&gt;\n        &lt;button class=&quot;delete&quot;&gt;\n            &lt;span class=&quot;is-sr-only&quot;&gt;Close message&lt;/span&gt;\n        &lt;/button&gt;\n    &lt;/header&gt;\n    &lt;div class=&quot;message-body&quot;&gt;\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. &lt;strong&gt;Pellentesque risus mi&lt;/strong&gt;, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum &lt;a&gt;felis venenatis&lt;/a&gt; efficitur. Aenean ac &lt;em&gt;eleifend lacus&lt;/em&gt;, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.\n    &lt;/div&gt;\n&lt;/section&gt;</code></pre><h3 id=\"javascript\">JavaScript</h3>\n<p>JavaScript handles removing the element and moving focus to the next sibling of the message element. If the message element has no siblings, focus is moved to the parent element. We encourage placing the message element so that is has a text element next to it. This makes the focus change logical for a screen reader to announce it after the previously focused delete button and the whole message element is removed from the DOM.</p>\n<p>If you create messages dynamically, the <em>Message</em> class has static methods for initalizing new message components. The <em>initMessages()</em> method has an example of how to initalize a single message component.</p>\n<pre><code>/**\n * Class Message\n */\nexport default class Message {\n    /**\n     * Construct the component handler.\n     */\n    constructor() {\n        document.addEventListener(\n            &#39;DOMContentLoaded&#39;,\n            () =&gt; {\n                this.initMessages();\n            }\n        );\n    }\n\n    /**\n     * Find all message elements and initalize their closing functionality.\n     */\n    initMessages() {\n        const messages = document.querySelectorAll( &#39;.bulmally-message&#39; );\n\n        for ( let i = 0; i &lt; messages.length; i++ ) {\n            Message.initMessage( messages[ i ] );\n        }\n    }\n\n    /**\n     * Initializes closing functionalities for a message element.\n     *\n     * @param {HTMLElement} messageElement A message element.\n     */\n    static initMessage( messageElement ) {\n        const deleteButton = messageElement.querySelector( &#39;.delete&#39; );\n        deleteButton.message = messageElement;\n\n        deleteButton.addEventListener( &#39;click&#39;, Message.delete );\n    }\n\n    /**\n     * Handles the click event of a delete button and deletes the message.\n     * Focus is set on the next element before deleting the element.\n     *\n     * @param {Event} event An event object.\n     */\n    static delete( event ) {\n        const message = event.target.message;\n        let focusTo = message.nextElementSibling;\n\n        if ( ! focusTo ) {\n            // If there&#39;s no sibling for the message,\n            // move focus to the parent node.\n            focusTo = message.parentNode;\n        }\n\n        // Force ability to give focus on the sibling.\n        if ( focusTo.tabIndex !== 0 ) {\n            focusTo.setAttribute( &#39;tabindex&#39;, -1 );\n        }\n        focusTo.focus();\n\n        message.remove();\n    }\n}</code></pre><h3 id=\"scss\">SCSS</h3>\n<p>The heading of the message element should be inside a heading tag. Bulma styles headings without any weight by default. We set the correct weight with this simple override.</p>\n<pre><code>.bulmally-message {\n\n    .message-header {\n        h1, h2, h3, h4, h5, h6 {\n            // Override heading weight.\n            font-weight: $message-header-weight;\n        }\n    }\n\n}</code></pre>";

/***/ }),

/***/ "./components/modal/modal.js":
/*!***********************************!*\
  !*** ./components/modal/modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Modal JS controller.
 */

/**
 * Class Modal
 */
var Modal =
/*#__PURE__*/
function () {
  /**
   * This method is run when a new instance of the class is created.
   */
  function Modal() {
    var _this = this;

    _classCallCheck(this, Modal);

    // This must be set for each component.
    this.documentation = __webpack_require__(/*! ./readme.md */ "./components/modal/readme.md");
    document.addEventListener('DOMContentLoaded', function () {
      _this.docReady();
    });
  }
  /**
   * Cache dom elements for use in the class's methods
   */


  _createClass(Modal, [{
    key: "cache",
    value: function cache() {
      this.rootEl = document.documentElement;
      this.$modals = [];
      this.$modalButtons = document.querySelectorAll('.modal-button');
      this.$modalCloses = document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .modal-close-button');
    }
    /**
     * Add event listeners.
     */

  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      // Bind handlers to each modal open button.
      if (this.$modalButtons.length > 0) {
        this.$modalButtons.forEach(function (button) {
          var modal = document.getElementById(button.getAttribute('aria-controls'));
          modal.openingButton = button;
          modal.isOpened = 0;

          _this2.$modals.push(modal);

          button.addEventListener('click', function () {
            _this2.openModal(modal);

            _this2.toggleAriaExpanded(button);
          });
        });
      } // Bind handlers to each modal close button.


      if (this.$modalCloses.length > 0) {
        this.$modalCloses.forEach(function (button) {
          button.addEventListener('click', function () {
            _this2.closeModals();
          });
        });
      } // Bind modal closing handler to ESC key.


      document.addEventListener('keydown', function (event) {
        var e = event || window.event;

        if (e.keyCode === 27) {
          _this2.closeModals();
        }
      });
    }
    /**
     * This handles opening the modal that was associated with
     * the clicked modal opening button.
     *
     * @param {Element} modal The modal that is opened.
     */

  }, {
    key: "openModal",
    value: function openModal(modal) {
      var _this3 = this;

      this.rootEl.classList.add('is-clipped');
      modal.classList.add('is-active');
      modal.isOpened = 1; // Collect each focusable element inside the modal.

      var focusableElements = modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'); // Set first and last focusable element as class parameters.
      // Set focus to the first focusable element.

      if (focusableElements.length) {
        modal.focusableElements = focusableElements;
        modal.focusableElements.first = focusableElements[0];
        modal.focusableElements.last = focusableElements[focusableElements.length - 1];
        modal.focusableElements.first.focus(); // Bind modal focus loop handler to document when modal is opened.
        // If pressed key was 'Tab', call tab handling method.

        document.addEventListener('keydown', function (event) {
          var e = event || window.event;

          if (e.keyCode === 9) {
            _this3.handleModalTabbing(e, modal);
          }
        });
      }
    }
    /**
     * This closes all modals and sets focus back to the element that was used
     * to open the current visible modal.
     */

  }, {
    key: "closeModals",
    value: function closeModals() {
      var _this4 = this;

      this.rootEl.classList.remove('is-clipped');
      this.$modals.forEach(function (modal) {
        modal.classList.remove('is-active');

        if (modal.isOpened) {
          modal.openingButton.focus();

          _this4.toggleAriaExpanded(modal.openingButton);

          modal.isOpened = 0;
        }
      });
    }
    /**
     * This handles Tab key presses and loops focus back to the first
     * focusable element inside the modal. If a user navigates backwards
     * using shift + tab, the loop is handled properly to the opposite direction.
     *
     * @param {event} e Key press event.
     * @param {Element} modal The modal that is currently visible.
     */

  }, {
    key: "handleModalTabbing",
    value: function handleModalTabbing(e, modal) {
      // If shift + tab pushed.
      if (e.shiftKey) {
        // Focus the last element if focus was on the first element.
        if (modal.focusableElements.first === document.activeElement) {
          e.preventDefault();
          modal.focusableElements.last.focus();
        }
      } else if (modal.focusableElements.last === document.activeElement) {
        e.preventDefault();
        modal.focusableElements.first.focus();
      }
    }
    /**
     * Get the toggler's aria-expanded current state and set a new opposite state to it.
     *
     * @param {HTMLElement} toggler The toggler element.
     */

  }, {
    key: "toggleAriaExpanded",
    value: function toggleAriaExpanded(toggler) {
      var ariaExpandedState = toggler.getAttribute('aria-expanded') === 'false' ? true : false;
      toggler.setAttribute('aria-expanded', ariaExpandedState);
    }
    /**
     * Run when the document is ready.
     */

  }, {
    key: "docReady",
    value: function docReady() {
      this.cache();
      this.events();
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./components/modal/readme.md":
/*!************************************!*\
  !*** ./components/modal/readme.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"modal-component\">Modal component</h2>\n<p>This component provides the needed JavaScript functionalities for the <a href=\"https://bulma.io/documentation/components/modal/\">Bulma modal</a>. Accessibility is implemented with JavaScript making the DOM as simple as possible. There are two modal elements on this page to demonstrate that you can have multiple modals on the same page. All Bulma modal styles are supported.</p>\n<h3 id=\"tests-and-accessibility-status\">Tests and accessibility status</h3>\n<p>The accessibility-ready status of this component is: untested.</p>\n<ul>\n<li><input checked=\"\" disabled=\"\" type=\"checkbox\"> Keyboard-only</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (macOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iPadOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Talkback &amp; Chrome (Android)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Narrator &amp; Edge (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> NVDA &amp; Firefox (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Windows High Contrast mode</li>\n</ul>\n<h3 id=\"html\">HTML</h3>\n<p>The HTML markup is fairly simple. You need to have a button that controls a corresponding modal. In the modal overlay you may want to have a closing button although it is not necessary. Modals can also be closed with ESC and buttons inside them with <strong>modal-close-button</strong> classes.</p>\n<h3 id=\"requirements\">Requirements</h3>\n<p>The modal containers should be placed at the bottom of your page markup so that their <strong>aria-role=&quot;modal&quot;</strong> attribute works properly.</p>\n<pre><code>&lt;!-- A button that controls opening the first modal --&gt;\n\n&lt;button\n    class=&quot;modal-button button is-large is-info&quot;\n    aria-expanded=&quot;false&quot;\n    aria-controls=&quot;js-bulmally-modal-1&quot;&gt;\n        Open modal\n&lt;/button&gt;\n\n&lt;!-- Markup of the first modal --&gt;\n\n&lt;div role=&quot;dialog&quot;\n    id=&quot;js-bulmally-modal-1&quot;\n    class=&quot;modal&quot;\n    aria-modal=&quot;true&quot;\n    aria-labelledby=&quot;js-bulmally-modal-1-title&quot;&gt;\n\n    &lt;div class=&quot;modal-background&quot;&gt;&lt;/div&gt;\n\n    &lt;div class=&quot;modal-content has-background-white&quot;&gt;\n\n        &lt;section class=&quot;section&quot;&gt;\n\n            &lt;h3 id=&quot;js-bulmally-modal-1-title&quot; class=&quot;h4 title&quot; tabindex=&quot;0&quot;&gt;Modal heading&lt;/h3&gt;\n\n            &lt;div class=&quot;content&quot;&gt;\n\n                &lt;p&gt;Lorem ipsum dolor sit amet consectetur &lt;a href=&quot;&quot;&gt;adipisicing elit&lt;/a&gt;. Aspernatur, quisquam molestias. Quaerat molestiae nam, explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil &lt;a href=&quot;&quot;&gt;odio nisi iusto&lt;/a&gt; ipsa laborum neque fugit.&lt;/p&gt;\n\n                &lt;h3&gt;Lorem ipsum dolor sit amet consectetur&lt;/h3&gt;\n\n                &lt;figure class=&quot;image is-marginless-horizontally&quot;&gt;\n                    &lt;img src=&quot;https://via.placeholder.com/1600x900.png?text=A+sample+image&quot; alt=&quot;&quot;&gt;\n                &lt;/figure&gt;\n\n                &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam molestias. Quaerat molestiae nam, &lt;a href=&quot;&quot;&gt;explicabo quo nisi corporis! Blanditiis quam quibusdam, facilis nihil&lt;/a&gt; odio nisi iusto ipsa laborum neque fugit.&lt;/p&gt;\n\n                &lt;button class=&quot;button modal-close-button is-danger is-large&quot;\n                    aria-controls=&quot;js-bulmally-modal-1&quot;&gt;\n                    Close modal\n                &lt;/button&gt;\n            &lt;/div&gt;\n\n        &lt;/section&gt;\n\n    &lt;/div&gt;\n\n    &lt;button class=&quot;modal-close is-large&quot;\n        aria-label=&quot;close modal&quot;\n        aria-controls=&quot;js-bulmally-modal-1&quot;&gt;&lt;/button&gt;\n\n&lt;/div&gt;</code></pre><h3 id=\"scss\">SCSS</h3>\n<p>The only styling changes are made to the focus style of the outer modal closing button.</p>\n<pre><code>.modal-close {\n    &amp;:focus {\n        outline: $white dotted .125rem;\n    }\n}\n</code></pre><h3 id=\"javascript\">JavaScript</h3>\n<p>Bulmally tabs implements the WAI-ARIA <a href=\"https://www.w3.org/TR/wai-aria-practices/#dialog_modal\">modal design pattern</a>. JavaScript code is based on the WAI-ARIA example for <a href=\"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html\">a modal dialog</a>. The implementation provides the following features:</p>\n<ul>\n<li>Modal navigation by pressing the tab key.</li>\n<li>Focusing the first element inside each opened modal.</li>\n<li>Focus looping, so that focusable elements inside the modal can be easily navigated.</li>\n<li>Returning focus back to the original element that opened the modal.</li>\n</ul>\n<p>We extended the WAI-ARIA example with the ability to have multiple modal elements on the same page. If you want to have many modals on one page, you need to make sure that each modal gets a unique id and its opening and closing buttons match the modal id in their <strong>aria-controls</strong> attributes.</p>\n<pre><code>/**\n * Modal JS controller.\n */\n\n/**\n * Class Modal\n */\nexport default class Modal {\n    /**\n     * This method is run when a new instance of the class is created.\n     */\n    constructor() {\n        // This must be set for each component.\n        this.documentation = require( &#39;./modal.md&#39; );\n\n        document.addEventListener(\n            &#39;DOMContentLoaded&#39;,\n            () =&gt; {\n                this.docReady();\n            }\n        );\n    }\n\n    /**\n     * Cache dom elements for use in the class&#39;s methods\n     */\n    cache() {\n        this.rootEl = document.documentElement;\n        this.$modals = [];\n        this.$modalButtons = document.querySelectorAll( &#39;.modal-button&#39; );\n        this.$modalCloses = document.querySelectorAll( &#39;.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .modal-close-button&#39; );\n    }\n\n    /**\n     * Add event listeners.\n     */\n    events() {\n        // Bind handlers to each modal open button.\n        if ( this.$modalButtons.length &gt; 0 ) {\n            this.$modalButtons.forEach( ( button ) =&gt; {\n                const modal = document.getElementById( button.getAttribute( &#39;aria-controls&#39; ) );\n                modal.openingButton = button;\n                modal.isOpened = 0;\n                this.$modals.push( modal );\n                button.addEventListener( &#39;click&#39;, () =&gt; {\n                    this.openModal( modal );\n                    this.toggleAriaExpanded( button );\n                } );\n            } );\n        }\n\n        // Bind handlers to each modal close button.\n        if ( this.$modalCloses.length &gt; 0 ) {\n            this.$modalCloses.forEach( ( button ) =&gt; {\n                button.addEventListener( &#39;click&#39;, () =&gt; {\n                    this.closeModals();\n                } );\n            } );\n        }\n\n        // Bind modal closing handler to ESC key.\n        document.addEventListener( &#39;keydown&#39;, ( event ) =&gt; {\n            const e = event || window.event;\n            if ( e.keyCode === 27 ) {\n                this.closeModals();\n            }\n        } );\n    }\n\n    /**\n     * This handles opening the modal that was associated with\n     * the clicked modal opening button.\n     *\n     * @param {Element} modal The modal that is opened.\n     */\n    openModal( modal ) {\n        this.rootEl.classList.add( &#39;is-clipped&#39; );\n        modal.classList.add( &#39;is-active&#39; );\n        modal.isOpened = 1;\n\n        // Collect each focusable element inside the modal.\n        const focusableElements = modal.querySelectorAll( &#39;a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex=&quot;0&quot;]&#39; );\n\n        // Set first and last focusable element as class parameters.\n        // Set focus to the first focusable element.\n        if ( focusableElements.length ) {\n            modal.focusableElements = focusableElements;\n            modal.focusableElements.first = focusableElements[ 0 ];\n            modal.focusableElements.last = focusableElements[ focusableElements.length - 1 ];\n            modal.focusableElements.first.focus();\n\n            // Bind modal focus loop handler to document when modal is opened.\n            // If pressed key was &#39;Tab&#39;, call tab handling method.\n            document.addEventListener( &#39;keydown&#39;, ( event ) =&gt; {\n                const e = event || window.event;\n                if ( e.keyCode === 9 ) {\n                    this.handleModalTabbing( e, modal );\n                }\n            } );\n        }\n    }\n\n    /**\n     * This closes all modals and sets focus back to the element that was used\n     * to open the current visible modal.\n     */\n    closeModals() {\n        this.rootEl.classList.remove( &#39;is-clipped&#39; );\n        this.$modals.forEach( ( modal ) =&gt; {\n            modal.classList.remove( &#39;is-active&#39; );\n            if ( modal.isOpened ) {\n                modal.openingButton.focus();\n                this.toggleAriaExpanded( modal.openingButton );\n                modal.isOpened = 0;\n            }\n        } );\n    }\n\n    /**\n     * This handles Tab key presses and loops focus back to the first\n     * focusable element inside the modal. If a user navigates backwards\n     * using shift + tab, the loop is handled properly to the opposite direction.\n     *\n     * @param {event} e Key press event.\n     * @param {Element} modal The modal that is currently visible.\n     */\n    handleModalTabbing( e, modal ) {\n        // If shift + tab pushed.\n        if ( e.shiftKey ) {\n            // Focus the last element if focus was on the first element.\n            if ( modal.focusableElements.first === document.activeElement ) {\n                e.preventDefault();\n                modal.focusableElements.last.focus();\n            }\n        } else if ( modal.focusableElements.last === document.activeElement ) {\n            e.preventDefault();\n            modal.focusableElements.first.focus();\n        }\n    }\n\n    /**\n     * Get the toggler&#39;s aria-expanded current state and set a new opposite state to it.\n     *\n     * @param {HTMLElement} toggler The toggler element.\n     */\n    toggleAriaExpanded( toggler ) {\n        const ariaExpandedState = toggler.getAttribute( &#39;aria-expanded&#39; ) === &#39;false&#39; ? true : false;\n        toggler.setAttribute( &#39;aria-expanded&#39;, ariaExpandedState );\n    }\n\n    /**\n     * Run when the document is ready.\n     */\n    docReady() {\n        this.cache();\n        this.events();\n    }\n}</code></pre>";

/***/ }),

/***/ "./components/navbar/navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Navbar JS controller.
 */

/**
 * Class Navbar
 */
var Navbar =
/*#__PURE__*/
function () {
  /**
   * This method is run when a new instance of the class is created.
   */
  function Navbar() {
    var _this = this;

    _classCallCheck(this, Navbar);

    // This must be set for each component.
    this.documentation = __webpack_require__(/*! ./readme.md */ "./components/navbar/readme.md");
    document.addEventListener('DOMContentLoaded', function () {
      _this.docReady();
    });
  }
  /**
   * Cache dom elements for use in the class's methods
   */


  _createClass(Navbar, [{
    key: "cache",
    value: function cache() {
      this.navbarBurger = document.getElementById('js-navbar-burger');
      this.navbarMenu = document.getElementById('js-navbar-menu');

      if (this.navbarMenu) {
        this.dropdownTogglers = this.navbarMenu.querySelectorAll('.dropdown-toggler');
      }
    }
    /**
     * Add event listeners.
     */

  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      if (this.navbarBurger) {
        this.navbarBurger.addEventListener('click', function () {
          return _this2.toggleMenu();
        });
      }

      if (this.dropdownTogglers) {
        for (var i = 0; i < this.dropdownTogglers.length; i++) {
          this.dropdownTogglers[i].addEventListener('click', function (event) {
            return _this2.toggleDropdown(event);
          });
        }
      }
    }
    /**
     * Handle menu toggling when the navbar burger is clicked.
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.navbarBurger.classList.toggle('is-active');
      this.navbarMenu.classList.toggle('is-active');
      this.toggleAriaExpanded(this.navbarBurger);
    }
    /**
     * Toggles a dropdown menu visibility.
     *
     * @param {Event} event A click event.
     */

  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(event) {
      var target = event.target;
      var containerId = target.getAttribute('aria-controls');
      var dropdownMenu = this.navbarMenu.querySelector("#".concat(containerId));
      this.toggleAriaExpanded(target);
      dropdownMenu.classList.toggle('is-hidden-touch');
      this.toggleAncestorActiveState(target, 'has-dropdown');
    }
    /**
     * Set the 'is-active' state for an ancestor of an element
     * with the matching class name.
     *
     * @param {HTMLElement} child A child element to start the search from.
     * @param {HTMLElement} className A target class name for the ancestor.
     */

  }, {
    key: "toggleAncestorActiveState",
    value: function toggleAncestorActiveState(child, className) {
      var ancestor = child.parentNode;

      while (ancestor) {
        if (ancestor.classList.contains(className)) {
          ancestor.classList.toggle('is-active');
          return;
        }

        ancestor = ancestor.parentNode ? ancestor.parentNode : false;
      }
    }
    /**
     * Get the toggler's aria-expanded current state and set a new opposite state to it.
     * Also set the opened container's aria-hidden state to the new value's opposite.
     *
     * @param {HTMLElement} toggler The toggler element.
     */

  }, {
    key: "toggleAriaExpanded",
    value: function toggleAriaExpanded(toggler) {
      var ariaExpandedState = toggler.getAttribute('aria-expanded') === 'false' ? true : false;
      toggler.setAttribute('aria-expanded', ariaExpandedState);
    }
    /**
     * Run when the document is ready.
     */

  }, {
    key: "docReady",
    value: function docReady() {
      this.cache();
      this.events();
    }
  }]);

  return Navbar;
}();



/***/ }),

/***/ "./components/navbar/readme.md":
/*!*************************************!*\
  !*** ./components/navbar/readme.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"navbar-component\">Navbar component</h2>\n<p>This component provides a fully functional navbar implementation for the Bulma navbar component.</p>\n<h3 id=\"tests-and-accessibility-status\">Tests and accessibility status</h3>\n<p>The accessibility-ready status of this component is: untested.</p>\n<ul>\n<li><input checked=\"\" disabled=\"\" type=\"checkbox\"> Keyboard-only</li>\n<li><input checked=\"\" disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (macOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iPadOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Talkback &amp; Chrome (Android)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Narrator &amp; Edge (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> NVDA &amp; Firefox (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Windows High Contrast mode</li>\n</ul>\n<h3 id=\"html\">HTML</h3>\n<p>The Bulmally navbar follows the Bulma navbar markup with some exceptions. Hoverable dropdowns are not accessible, that is why we do not support them. Instead, we provide an accessible markup for controlling a dropdown menu within the navbar.</p>\n<p>The Bulma documentation uses a link as the dropdown toggler. This is bad practice, it should be a button. Bulmally dropdown toggler can be an actual link itself. This is done by adding a container that holds the link and a button for toggling the dropdown menu. This makes the link accessible and uses semantic HTML element for the toggler: a button. The button has a screen reader only text and a down arrow for sighted usage.</p>\n<pre><code>&lt;nav class=&quot;navbar bulmally-navbar&quot; role=&quot;navigation&quot; aria-label=&quot;main navigation&quot;&gt;\n    &lt;div class=&quot;navbar-brand&quot;&gt;\n        &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n            &lt;span class=&quot;is-sr-only&quot;&gt;Home&lt;/span&gt;\n            &lt;img src=&quot;https://bulma.io/images/bulma-logo.png&quot; width=&quot;112&quot; height=&quot;28&quot; aria-hidden=true&gt;\n        &lt;/a&gt;\n\n        &lt;button\n            id=&quot;js-navbar-burger&quot;\n            class=&quot;navbar-burger burger&quot;\n            aria-expanded=&quot;false&quot;\n            aria-label=&quot;Open menu&quot;\n            aria-expanded=&quot;false&quot;\n            aria-controls=&quot;js-menu&quot;&gt;\n            &lt;span aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;\n            &lt;span aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;\n            &lt;span aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;\n        &lt;/button&gt;\n    &lt;/div&gt;\n\n    &lt;div id=&quot;js-navbar-menu&quot; class=&quot;navbar-menu&quot;&gt;\n        &lt;div class=&quot;navbar-start&quot;&gt;\n            &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n                Home\n            &lt;/a&gt;\n\n            &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n                Documentation\n            &lt;/a&gt;\n\n            &lt;div class=&quot;navbar-item has-dropdown level&quot;&gt;\n                &lt;div class=&quot;navbar-dropdown-control&quot;&gt;\n                    &lt;!-- The link is clickable. --&gt;\n                    &lt;a class=&quot;navbar-link is-arrowless&quot; href=&quot;#&quot;&gt;\n                        More\n                    &lt;/a&gt;\n                    &lt;!-- This button implements the dropdown toggler. --&gt;\n                    &lt;button class=&quot;dropdown-toggler icon&quot; aria-expanded=false aria-controls=&quot;js-navbar-dropdown-1&quot;&gt;\n                        &lt;span class=&quot;is-sr-only&quot;&gt;Open menu&lt;/span&gt;\n                        &lt;i class=&quot;arrow&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;\n                    &lt;/button&gt;\n                &lt;/div&gt;\n\n                &lt;!--\n                    Bulma does not hide dropdown menu on touch.\n                    We hide it here with the modifier class.\n                    Toggling is handled with JS.\n                --&gt;\n                &lt;div class=&quot;navbar-dropdown is-hidden-touch&quot; id=&quot;js-navbar-dropdown-1&quot;&gt;\n                    &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n                        About\n                    &lt;/a&gt;\n                    &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n                        Jobs\n                    &lt;/a&gt;\n                    &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n                        Contact\n                    &lt;/a&gt;\n                    &lt;hr class=&quot;navbar-divider&quot;&gt;\n                    &lt;a class=&quot;navbar-item&quot; href=&quot;#&quot;&gt;\n                        Report an issue\n                    &lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;div class=&quot;navbar-end&quot;&gt;\n            &lt;div class=&quot;navbar-item&quot;&gt;\n                &lt;div class=&quot;buttons&quot;&gt;\n                    &lt;a class=&quot;button is-primary&quot; href=&quot;#&quot;&gt;\n                        &lt;strong&gt;Sign up&lt;/strong&gt;\n                    &lt;/a&gt;\n                    &lt;a class=&quot;button is-light&quot; href=&quot;#&quot;&gt;\n                        Log in\n                    &lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/nav&gt;</code></pre><h3 id=\"javascript\">JavaScript</h3>\n<p>This JS implementation is written in ES6 and uses VanillaJS to control the states in the DOM. You may use it as it is and use <a href=\"https://babeljs.io/\">Babel</a> to make it backwards compatible with older browsers. If you do not have Babel in your environment, it should be pretty straightforward to copy the required parts of this code.</p>\n<pre><code>/**\n * Class Navbar\n */\nexport default class Navbar {\n    /**\n     * This method is run automatically when the module is imported,\n     * because it exports a new instance of itself.\n     */\n    constructor() {\n        document.addEventListener(\n            &#39;DOMContentLoaded&#39;,\n            () =&gt; {\n                this.docReady();\n            }\n        );\n    }\n\n    /**\n     * Cache dom elements for use in the class&#39;s methods\n     */\n    cache() {\n        this.navbarBurger = document.getElementById( &#39;js-navbar-burger&#39; );\n        this.navbarMenu = document.getElementById( &#39;js-navbar-menu&#39; );\n        if ( this.navbarMenu ) {\n            this.dropdownTogglers = this.navbarMenu.querySelectorAll( &#39;.dropdown-toggler&#39; );\n        }\n    }\n\n    /**\n     * Add event listeners.\n     */\n    events() {\n        if ( this.navbarBurger ) {\n            this.navbarBurger.addEventListener( &#39;click&#39;, () =&gt; this.toggleMenu() );\n        }\n\n        if ( this.dropdownTogglers ) {\n            for ( let i = 0; i &lt; this.dropdownTogglers.length; i++ ) {\n                this.dropdownTogglers[ i ].addEventListener( &#39;click&#39;, ( event ) =&gt; this.toggleDropdown( event ) );\n            }\n        }\n    }\n\n    /**\n     * Handle menu toggling when the navbar burger is clicked.\n     */\n    toggleMenu() {\n        this.navbarBurger.classList.toggle( &#39;is-active&#39; );\n        this.navbarMenu.classList.toggle( &#39;is-active&#39; );\n        this.toggleAriaExpanded( this.navbarBurger );\n    }\n\n    /**\n     * Toggles a dropdown menu visibility.\n     *\n     * @param {Event} event A click event.\n     */\n    toggleDropdown( event ) {\n        const target = event.target;\n        const containerId = target.getAttribute( &#39;aria-controls&#39; );\n        const dropdownMenu = this.navbarMenu.querySelector( `#${ containerId }` \u001d);\n\n        this.toggleAriaExpanded( target );\n        dropdownMenu.classList.toggle( &#39;is-hidden-touch&#39; );\n        this.toggleAncestorActiveState( target, &#39;has-dropdown&#39; );\n    }\n\n    /**\n     * Set the &#39;is-active&#39; state for an ancestor of an element\n     * with the matching class name.\n     *\n     * @param {HTMLElement} child A child element to start the search from.\n     * @param {HTMLElement} className A target class name for the ancestor.\n     */\n    toggleAncestorActiveState( child, className ) {\n        let ancestor = child.parentNode;\n        while ( ancestor ) {\n            if ( ancestor.classList.contains( className ) ) {\n                ancestor.classList.toggle( &#39;is-active&#39; );\n                return;\n            }\n            ancestor = ancestor.parentNode ? ancestor.parentNode : false;\n        }\n    }\n\n    /**\n     * Get the toggler&#39;s aria-expanded current state and set a new opposite state to it.\n     * Also set the opened container&#39;s aria-hidden state to the new value&#39;s opposite.\n     *\n     * @param {HTMLElement} toggler The toggler element.\n     */\n    toggleAriaExpanded( toggler ) {\n        const ariaExpandedState = toggler.getAttribute( &#39;aria-expanded&#39; ) === &#39;false&#39; ? true : false;\n        toggler.setAttribute( &#39;aria-expanded&#39;, ariaExpandedState );\n    }\n\n    /**\n     * Run when the document is ready.\n     */\n    docReady() {\n        this.cache();\n        this.events();\n    }\n}</code></pre><h3 id=\"scss\">SCSS</h3>\n<p>We use the component class name as the CSS scope for our modifications for the basic Bulma CSS code. We keep the changes to a minimum and most of this code is applied to separate the dropdown toggler from the menu link containing a dropdown menu.</p>\n<pre><code>// This file contains styles for the navbar component.\n.bulmally-navbar {\n\n    // Reset all buttons inside a navbar.\n    button {\n        background: none;\n        border: 0;\n    }\n\n    .navbar-burger {\n        &amp;:hover {\n            background: $navbar-dropdown-item-hover-background-color;\n        }\n    }\n\n    .navbar-dropdown-control {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        .navbar-link {\n            flex: 1 1 auto;\n            padding-right: 1rem;\n\n            &amp;:hover {\n                // The link background is controlled on the &#39;.has-dropdown&#39; level.\n                background: none;\n            }\n        }\n    }\n\n    .navbar-item {\n        &amp;.has-dropdown {\n            &amp;:hover,\n            &amp;.is-active {\n                background-color: $navbar-item-hover-background-color;\n            }\n        }\n    }\n\n    .dropdown-toggler {\n        position: relative; // Make the arrow stick to the button.\n        flex: 0 0 auto;\n        margin-right: .75rem;\n        transition: transform $speed $easing;\n\n        &amp;[aria-expanded=&quot;true&quot;] {\n            transform: rotate(180deg);\n        }\n\n        .arrow {\n            @extend %arrow;\n            width: .75rem;\n            height: .75rem;\n            margin-top: -.5rem;\n            border-color: $navbar-dropdown-arrow;\n        }\n    }\n}</code></pre>";

/***/ }),

/***/ "./components/tabs/readme.md":
/*!***********************************!*\
  !*** ./components/tabs/readme.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"tabs-component\">Tabs component</h2>\n<p>This component provides the needed JavaScript functionalities for the <a href=\"https://bulma.io/documentation/components/tabs/\">Bulma tabs</a>. Accessibility is implemented with JavaScript making the DOM as simple as possible. There are two tab elements on this page to demonstrate that you can have multiple tabs on the same page. All Bulma tab styles are supported.</p>\n<h3 id=\"tests-and-accessibility-status\">Tests and accessibility status</h3>\n<p>The accessibility-ready status of this component is: untested.</p>\n<ul>\n<li><input checked=\"\" disabled=\"\" type=\"checkbox\"> Keyboard-only</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (macOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> VoiceOver &amp; Safari (iPadOS)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Talkback &amp; Chrome (Android)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Narrator &amp; Edge (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> NVDA &amp; Firefox (Windows)</li>\n<li><input disabled=\"\" type=\"checkbox\"> Windows High Contrast mode</li>\n</ul>\n<h3 id=\"known-issues\">Known issues</h3>\n<ul>\n<li>In VO &amp; Safari (macOS), all tabs are navigable with tab key, even though they should be navigable only with arrow keys</li>\n</ul>\n<h3 id=\"html\">HTML</h3>\n<p>Bulma uses buttons as tabs. We use anchor links instead. This makes tabs accessible even if JavaScript is not available. Each tab is an anchor link taking the user to the corresponding tab panel. If JavaScript is successfully loaded, all tab containers are queried from the DOM and their functionalities are initialized on the document ready event.</p>\n<h3 id=\"requirements\">Requirements</h3>\n<ul>\n<li>Add a container for the tabs and the panels with a class named <em>&quot;bulmally-tabs&quot;</em>.</li>\n<li>The <em>href</em> attribute of the link must be the id of the tab panel. This enables linking the tab to the panel.</li>\n<li>The tab panels should be placed directly after the tabs to create a logical tab order.</li>\n</ul>\n<pre><code>&lt;div class=&quot;bulmally-tabs&quot;&gt;\n    &lt;div class=&quot;tabs&quot;&gt;\n        &lt;ul aria-label=&quot;Add a description for the tabs here&quot;&gt;\n            &lt;li class=&quot;is-active&quot;&gt;&lt;a href=&quot;#first&quot;&gt;First&lt;/a&gt;&lt;/li&gt;\n            &lt;li&gt;&lt;a href=&quot;#second&quot;&gt;Second&lt;/a&gt;&lt;/li&gt;\n            &lt;li&gt;&lt;a href=&quot;#third&quot;&gt;Third&lt;/a&gt;&lt;/li&gt;\n            &lt;li&gt;&lt;a href=&quot;#fourth&quot;&gt;Fourth&lt;/a&gt;&lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/div&gt;\n\n    &lt;div&gt;\n        &lt;div id=&quot;first&quot;&gt;\n            &lt;h2&gt;First&lt;/h2&gt;\n        &lt;/div&gt;\n        &lt;div id=&quot;second&quot;&gt;\n            &lt;h2&gt;Second&lt;/h2&gt;\n        &lt;/div&gt;\n        &lt;div id=&quot;third&quot;&gt;\n            &lt;h2&gt;Third&lt;/h2&gt;\n        &lt;/div&gt;\n        &lt;div id=&quot;fourth&quot;&gt;\n            &lt;h2&gt;Fourth&lt;/h2&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n&lt;/div&gt;</code></pre><h3 id=\"scss\">SCSS</h3>\n<p>The only styling required is the hidden state of the panels. This is done by using the <em>&quot;hidden&quot;</em> attribute as the CSS selector.</p>\n<pre><code>.bulmally-tabs {\n\n    &amp;-panel[hidden] {\n        display: none;\n    }\n\n}</code></pre><h3 id=\"javascript\">JavaScript</h3>\n<p>Bulmally tabs implements the WAI-ARIA <a href=\"https://www.w3.org/TR/wai-aria-practices/#tabpanel\">tabs design pattern</a>. JavaScript code is based on the WAI-ARIA example for <a href=\"(https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html)\">manually activated tabs</a>. The implementation provides the following features:</p>\n<ul>\n<li>Tab navigation with arrow keys.</li>\n<li>Tab panel activation by pressing enter or space on the focused tab.</li>\n<li>Tab panel activation on mouse click event.</li>\n<li>Focus handling for all interactions.</li>\n</ul>\n<p>We extended the WAI-ARIA example with the ability to have multiple tab elements on the same page. If you create tabs dynamically <em>(after the document ready event)</em>, you can initialize their accessibility features by passing the Bulmally tabs element container for the <em>init()</em> method. You can find an example of this in the <em>initAllTabs()</em> method that finds and initializes all Bulmally tab elements on the document ready event.</p>\n<pre><code>// For easy reference\nconst keys = {\n    end: 35,\n    home: 36,\n    left: 37,\n    up: 38,\n    right: 39,\n    down: 40,\n    enter: 13,\n    space: 32,\n};\n\n// Add or subtract depending on key pressed\nconst direction = {\n    37: -1,\n    38: -1,\n    39: 1,\n    40: 1,\n};\n\n/**\n * Class Tabs\n */\nexport default class Tabs {\n    /**\n     * This method is run automatically when the module is imported,\n     * because it exports a new instance of itself.\n     */\n    constructor() {\n        document.addEventListener(\n            &#39;DOMContentLoaded&#39;,\n            () =&gt; {\n                this.initAllTabs();\n            }\n        );\n    }\n\n    /**\n     * Find all tab elements and initialize their functionalities.\n     * This method should be run on document ready to initialize all\n     * tabs in the DOM after the page is loaded.\n     */\n    initAllTabs() {\n        this.allTabs = document.querySelectorAll( &#39;.bulmally-tabs&#39; );\n\n        if ( ! this.allTabs ) {\n            // No tabs found.\n            return;\n        }\n\n        for ( let i = 0; i &lt; this.allTabs.length; i++ ) {\n            this.init( this.allTabs[ i ] );\n        }\n    }\n\n    /**\n     * Initalize a single tabs element.\n     *\n     * @param {HTMLElement} tabsElement Bulmally tabs container.\n     */\n    init( tabsElement ) {\n        const tablist = tabsElement.querySelector( &#39;.bulmally-tabs-tablist&#39; );\n        const tabs = tablist.querySelectorAll( &#39;a&#39; );\n        const tabPanels = tabsElement.querySelectorAll( &#39;.bulmally-tabs-panel&#39; );\n        const tabListItems = tablist.querySelectorAll( &#39;li&#39; );\n\n        // Store references to the first and the last tab for focus manipulations.\n        // Initialize an array for storing references to all tabs.\n        tablist.firstTab = tabs[ 0 ];\n        tablist.lastTab = tabs[ tabs.length - 1 ];\n        tablist.tabs = [];\n        tablist.panels = [];\n\n        // Tabs must be initialized first.\n        for ( let i = 0; i &lt; tabs.length; i++ ) {\n            this.initTab( tabs[ i ], tablist, i );\n        }\n\n        // After tabs, initalize the corresponding tabs.\n        for ( let i = 0; i &lt; tabPanels.length; i++ ) {\n            this.initPanel( tabPanels[ i ], tabs[ i ], tablist, i );\n        }\n\n        for ( let i = 0; i &lt; tabListItems.length; i++ ) {\n            // All &lt;li&gt; elements must have a role of presentation.\n            tabListItems[ i ].setAttribute( &#39;role&#39;, &#39;presentation&#39; );\n        }\n    }\n\n    /**\n     * Initialize functionalities for a tab element.\n     *\n     * @param {HTMLElement} tab A tab link.\n     * @param {HTMLElement} tablist The tablist element for the tab.\n     * @param {number} index The current element index in the tab list.\n     */\n    initTab( tab, tablist, index ) {\n        const panelId = tab.hash.slice( 1 );\n\n        // Create a unique id using the tab link&#39;s hash\n        tab.id = `tab-${ panelId }`;\n\n        // Make a two-way reference of the tab and its tablist.\n        tab.tablist = tablist;\n        tablist.tabs[ index ] = tab;\n\n        // Store the index.\n        tab.index = index;\n\n        tab.panel = document.getElementById( panelId );\n\n        tab.role = &#39;tab&#39;;\n        tab.setAttribute( &#39;aria-selected&#39;, &#39;false&#39; );\n        tab.setAttribute( &#39;aria-controls&#39;, panelId );\n        tab.tabindex = -1;\n\n        tab.addEventListener( &#39;click&#39;, ( event ) =&gt; this.clickEventListener( event ) );\n        tab.addEventListener( &#39;keydown&#39;, ( event ) =&gt; this.keydownEventListener( event ) );\n        tab.addEventListener( &#39;keyup&#39;, ( event ) =&gt; this.keyupEventListener( event ) );\n    }\n\n    /**\n     * Initalize panel functionalities.\n     *\n     * @param {HTMLElement} panel The panel element.\n     * @param {HTMLElement} tab The corresponding tab element.\n     * @param {HTMLElement} tablist The tablist element for the tab.\n     * @param {number} index The index in panels.\n     */\n    initPanel( panel, tab, tablist, index ) {\n        if ( index !== 0 ) {\n            // Hide all but the first tab.\n            panel.hidden = true;\n        }\n\n        panel.setAttribute( &#39;tabindex&#39;, &#39;0&#39; );\n        panel.setAttribute( &#39;role&#39;, &#39;tabpanel&#39; );\n        panel.setAttribute( &#39;aria-labelledby&#39;, tab.id );\n\n        // Store a reference for the tablist.\n        tablist.panels.push( panel );\n    }\n\n    /**\n     * When a tab is clicked, activateTab is fired to activate it\n     *\n     * @param {Event} event Event object.\n     */\n    clickEventListener( event ) {\n        // Prevent the default click event.\n        event.preventDefault();\n\n        const tab = event.target;\n        this.activateTab( tab, false );\n    }\n\n    /**\n     * Handle keydown on tabs\n     *\n     * @param {Event} event Event object.\n     */\n    keydownEventListener( event ) {\n        const key = event.keyCode;\n        const tablist = event.target.tablist;\n\n        switch ( key ) {\n        case keys.end:\n            event.preventDefault();\n            // Activate last tab\n            this.focusLastTab( tablist );\n            break;\n        case keys.home:\n            event.preventDefault();\n            // Activate first tab\n            this.focusFirstTab( tablist );\n            break;\n\n        // Up and down are in keydown to prevent page scroll.\n        case keys.up:\n        case keys.down:\n            this.determineOrientation( event );\n            break;\n        case keys.enter:\n        case keys.space:\n            event.preventDefault();\n            this.activateTab( event.target, true );\n            break;\n        }\n    }\n\n    /**\n     * Handle keyup on tabs\n     *\n     * @param {Event} event Event object.\n     */\n    keyupEventListener( event ) {\n        const key = event.keyCode;\n\n        switch ( key ) {\n        case keys.left:\n        case keys.right:\n            this.determineOrientation( event );\n            break;\n        }\n    }\n\n    /**\n     * When a tablist&#39;s aria-orientation is set to vertical,\n     * only up and down arrow should function.\n     * only up and down arrow should function.\n     *\n     * @param {Event} event The event object.\n     */\n    determineOrientation( event ) {\n        const key = event.keyCode;\n        const vertical = event.target.tablist.getAttribute( &#39;aria-orientation&#39; ) === &#39;vertical&#39;;\n        let proceed = false;\n\n        if ( vertical ) {\n            if ( key === keys.up || key === keys.down ) {\n                event.preventDefault();\n                proceed = true;\n            }\n        } else if ( key === keys.left || key === keys.right ) {\n            proceed = true;\n        }\n\n        if ( proceed ) {\n            this.switchTabOnArrowPress( event );\n        }\n    }\n\n    /**\n     * Either focus the next, previous, first, or last tab\n     * depending on the key pressed.\n     *\n     * @param {Event} event Event object.\n     */\n    switchTabOnArrowPress( event ) {\n        const pressed = event.keyCode;\n\n        if ( direction[ pressed ] ) {\n            const target = event.target;\n            const tablist = target.tablist;\n            const tabs = tablist.tabs;\n            if ( target.index !== undefined ) {\n                if ( tabs[ target.index + direction[ pressed ] ] ) {\n                    tabs[ target.index + direction[ pressed ] ].focus();\n                } else if ( pressed === keys.left || pressed === keys.up ) {\n                    this.focusLastTab( tablist );\n                } else if ( pressed === keys.right || pressed === keys.down ) {\n                    this.focusFirstTab( tablist );\n                }\n            }\n        }\n    }\n\n    /**\n     * Activates any given tab panel\n     *\n     * @param {HTMLElement} tab A tab element.\n     * @param {boolean} setFocus Whether to set focus.\n     */\n    activateTab( tab, setFocus ) {\n        // Deactivate all other tabs\n        this.deactivateTabs( tab.tablist );\n\n        // Remove tabindex attribute.\n        tab.removeAttribute( &#39;tabindex&#39; );\n\n        // Set the tab as selected.\n        tab.setAttribute( &#39;aria-selected&#39;, &#39;true&#39; );\n\n        // Set Bulma class.\n        tab.parentNode.classList.add( &#39;is-active&#39; );\n\n        // Remove hidden attribute from tab panel to make it visible.\n        tab.panel.removeAttribute( &#39;hidden&#39; );\n\n        // Set focus when required.\n        if ( setFocus ) {\n            tab.panel.focus();\n        }\n    }\n\n    /**\n     * Deactivate all tabs and tab panels\n     *\n     * @param {HTMLElement} tablist The tablist element.\n     */\n    deactivateTabs( tablist ) {\n        for ( let t = 0; t &lt; tablist.tabs.length; t++ ) {\n            tablist.tabs[ t ].parentNode.classList.remove( &#39;is-active&#39; );\n            tablist.tabs[ t ].setAttribute( &#39;tabindex&#39;, &#39;-1&#39; );\n            tablist.tabs[ t ].setAttribute( &#39;aria-selected&#39;, &#39;false&#39; );\n        }\n\n        for ( let p = 0; p &lt; tablist.panels.length; p++ ) {\n            tablist.panels[ p ].setAttribute( &#39;hidden&#39;, &#39;hidden&#39; );\n        }\n    }\n\n    /**\n     * Focus on the first tab in the tablist of the given tab.\n     *\n     * @param {HTMLElement} tablist A tablist element.\n     */\n    focusFirstTab( tablist ) {\n        tablist.firstTab.focus();\n    }\n\n    /**\n     * Focus on the last tab in the tablist of the given tab.\n     *\n     * @param {HTMLElement} tablist A tablist element.\n     */\n    focusLastTab( tablist ) {\n        tablist.lastTab.focus();\n    }\n}</code></pre>";

/***/ }),

/***/ "./components/tabs/tabs.js":
/*!*********************************!*\
  !*** ./components/tabs/tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Tabs JS controller.
 */
// For easy reference
var keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  enter: 13,
  space: 32
}; // Add or subtract depending on key pressed

var direction = {
  37: -1,
  38: -1,
  39: 1,
  40: 1
};
/**
 * Class Tabs
 */

var Tabs =
/*#__PURE__*/
function () {
  /**
   * This method is run automatically when the module is imported,
   * because it exports a new instance of itself.
   */
  function Tabs() {
    var _this = this;

    _classCallCheck(this, Tabs);

    // This must be set for each component.
    this.documentation = __webpack_require__(/*! ./readme.md */ "./components/tabs/readme.md");
    document.addEventListener('DOMContentLoaded', function () {
      _this.initAllTabs();
    });
  }
  /**
   * Find all tab elements and initialize their functionalities.
   * This method should be run on document ready to initialize all
   * tabs in the DOM after the page is loaded.
   */


  _createClass(Tabs, [{
    key: "initAllTabs",
    value: function initAllTabs() {
      this.allTabs = document.querySelectorAll('.bulmally-tabs');

      if (!this.allTabs) {
        // No tabs found.
        return;
      }

      for (var i = 0; i < this.allTabs.length; i++) {
        this.init(this.allTabs[i]);
      }
    }
    /**
     * Initalize a single tabs element.
     *
     * @param {HTMLElement} tabsElement Bulmally tabs container.
     */

  }, {
    key: "init",
    value: function init(tabsElement) {
      var tabsContainer = tabsElement.querySelector('.tabs');
      var tablist = tabsContainer.querySelector('ul');
      var tabs = tablist.querySelectorAll('a');
      var tabListItems = tablist.querySelectorAll('li'); // Store references to the first and the last tab for focus manipulations.
      // Initialize an array for storing references to all tabs.

      tablist.firstTab = tabs[0];
      tablist.lastTab = tabs[tabs.length - 1];
      tablist.tabs = [];
      tablist.panels = []; // Initialize tabs.

      for (var i = 0; i < tabs.length; i++) {
        this.initTab(tabs[i], tablist, i);
      }

      for (var _i = 0; _i < tabListItems.length; _i++) {
        // All <li> elements must have a role of presentation.
        tabListItems[_i].setAttribute('role', 'presentation');
      }
    }
    /**
     * Initialize functionalities for a tab element.
     *
     * @param {HTMLElement} tab A tab link.
     * @param {HTMLElement} tablist The tablist element for the tab.
     * @param {number} index The current element index in the tab list.
     */

  }, {
    key: "initTab",
    value: function initTab(tab, tablist, index) {
      var _this2 = this;

      var panelId = tab.hash.slice(1); // Create a unique id using the tab link's hash

      tab.id = "tab-".concat(panelId); // Make a two-way reference of the tab and its tablist.

      tab.tablist = tablist;
      tablist.tabs[index] = tab; // Store the index.

      tab.index = index; // Initialize the corresponding panel.

      tab.panel = document.getElementById(panelId);
      this.initPanel(tab.panel, tab, tablist, index);
      tab.role = 'tab';
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('aria-controls', panelId);
      tab.tabindex = -1;
      tab.addEventListener('click', function (event) {
        return _this2.clickEventListener(event);
      });
      tab.addEventListener('keydown', function (event) {
        return _this2.keydownEventListener(event);
      });
      tab.addEventListener('keyup', function (event) {
        return _this2.keyupEventListener(event);
      });
    }
    /**
     * Initalize panel functionalities.
     *
     * @param {HTMLElement} panel The panel element.
     * @param {HTMLElement} tab The corresponding tab element.
     * @param {HTMLElement} tablist The tablist element for the tab.
     * @param {number} index The index in panels.
     */

  }, {
    key: "initPanel",
    value: function initPanel(panel, tab, tablist, index) {
      if (index !== 0) {
        // Hide all but the first tab.
        panel.hidden = true;
      }

      panel.setAttribute('tabindex', '0');
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id); // Store a reference for the tablist.

      tablist.panels.push(panel);
    }
    /**
     * When a tab is clicked, activateTab is fired to activate it
     *
     * @param {Event} event Event object.
     */

  }, {
    key: "clickEventListener",
    value: function clickEventListener(event) {
      // Prevent the default click event.
      event.preventDefault();
      var tab = event.target;
      this.activateTab(tab, false);
    }
    /**
     * Handle keydown on tabs
     *
     * @param {Event} event Event object.
     */

  }, {
    key: "keydownEventListener",
    value: function keydownEventListener(event) {
      var key = event.keyCode;
      var tablist = event.target.tablist;

      switch (key) {
        case keys.end:
          event.preventDefault(); // Activate last tab

          this.focusLastTab(tablist);
          break;

        case keys.home:
          event.preventDefault(); // Activate first tab

          this.focusFirstTab(tablist);
          break;
        // Up and down are in keydown to prevent page scroll.

        case keys.up:
        case keys.down:
          this.determineOrientation(event);
          break;

        case keys.enter:
        case keys.space:
          event.preventDefault();
          this.activateTab(event.target, true);
          break;
      }
    }
    /**
     * Handle keyup on tabs
     *
     * @param {Event} event Event object.
     */

  }, {
    key: "keyupEventListener",
    value: function keyupEventListener(event) {
      var key = event.keyCode;

      switch (key) {
        case keys.left:
        case keys.right:
          this.determineOrientation(event);
          break;
      }
    }
    /**
     * When a tablist's aria-orientation is set to vertical,
     * only up and down arrow should function.
     * only up and down arrow should function.
     *
     * @param {Event} event The event object.
     */

  }, {
    key: "determineOrientation",
    value: function determineOrientation(event) {
      var key = event.keyCode;
      var vertical = event.target.tablist.getAttribute('aria-orientation') === 'vertical';
      var proceed = false;

      if (vertical) {
        if (key === keys.up || key === keys.down) {
          event.preventDefault();
          proceed = true;
        }
      } else if (key === keys.left || key === keys.right) {
        proceed = true;
      }

      if (proceed) {
        this.switchTabOnArrowPress(event);
      }
    }
    /**
     * Either focus the next, previous, first, or last tab
     * depending on the key pressed.
     *
     * @param {Event} event Event object.
     */

  }, {
    key: "switchTabOnArrowPress",
    value: function switchTabOnArrowPress(event) {
      var pressed = event.keyCode;

      if (direction[pressed]) {
        var target = event.target;
        var tablist = target.tablist;
        var tabs = tablist.tabs;

        if (target.index !== undefined) {
          if (tabs[target.index + direction[pressed]]) {
            tabs[target.index + direction[pressed]].focus();
          } else if (pressed === keys.left || pressed === keys.up) {
            this.focusLastTab(tablist);
          } else if (pressed === keys.right || pressed === keys.down) {
            this.focusFirstTab(tablist);
          }
        }
      }
    }
    /**
     * Activates any given tab panel
     *
     * @param {HTMLElement} tab A tab element.
     * @param {boolean} setFocus Whether to set focus.
     */

  }, {
    key: "activateTab",
    value: function activateTab(tab, setFocus) {
      // Deactivate all other tabs
      this.deactivateTabs(tab.tablist); // Remove tabindex attribute.

      tab.removeAttribute('tabindex'); // Set the tab as selected.

      tab.setAttribute('aria-selected', 'true'); // Set Bulma class.

      tab.parentNode.classList.add('is-active'); // Remove hidden attribute from tab panel to make it visible.

      tab.panel.removeAttribute('hidden'); // Set focus when required.

      if (setFocus) {
        tab.panel.focus();
      }
    }
    /**
     * Deactivate all tabs and tab panels
     *
     * @param {HTMLElement} tablist The tablist element.
     */

  }, {
    key: "deactivateTabs",
    value: function deactivateTabs(tablist) {
      for (var t = 0; t < tablist.tabs.length; t++) {
        tablist.tabs[t].parentNode.classList.remove('is-active');
        tablist.tabs[t].setAttribute('tabindex', '-1');
        tablist.tabs[t].setAttribute('aria-selected', 'false');
      }

      for (var p = 0; p < tablist.panels.length; p++) {
        tablist.panels[p].setAttribute('hidden', 'hidden');
      }
    }
    /**
     * Focus on the first tab in the tablist of the given tab.
     *
     * @param {HTMLElement} tablist A tablist element.
     */

  }, {
    key: "focusFirstTab",
    value: function focusFirstTab(tablist) {
      tablist.firstTab.focus();
    }
    /**
     * Focus on the last tab in the tablist of the given tab.
     *
     * @param {HTMLElement} tablist A tablist element.
     */

  }, {
    key: "focusLastTab",
    value: function focusLastTab(tablist) {
      tablist.lastTab.focus();
    }
  }]);

  return Tabs;
}();



/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./assets/js/app.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marikakononen/Dev/bulmally/assets/js/app.js */"./assets/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jdW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hY2NvcmRpb24vcmVhZG1lLm1kIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYm9pbGVycGxhdGUvYm9pbGVycGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2lsZXJwbGF0ZS9yZWFkbWUubWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXNzYWdlL3JlYWRtZS5tZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvcmVhZG1lLm1kIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9yZWFkbWUubWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzL3JlYWRtZS5tZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYnMvdGFicy5qcyJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiYm9pbGVycGxhdGUiLCJCb2lsZXJQbGF0ZSIsIm5hdmJhciIsIk5hdmJhciIsImFjY29yZGlvbiIsIkFjY29yZGlvbiIsInRhYnMiLCJUYWJzIiwibW9kYWwiLCJNb2RhbCIsIm1lc3NhZ2UiLCJNZXNzYWdlIiwiRG9jdW1lbnRhdGlvbiIsImhsanMiLCJyZWdpc3Rlckxhbmd1YWdlIiwiamF2YXNjcmlwdCIsInNjc3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0RG9jdW1lbnRhdGlvbiIsInBhdGhuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJzbHVnIiwiY29tcG9uZW50IiwiaW5jbHVkZXMiLCJkb2N1bWVudGF0aW9uIiwiZG9jQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJoaWdobGlnaHRCbG9jayIsInJlcXVpcmUiLCJkb2NSZWFkeSIsIm1haW5Db250YWluZXIiLCJkcm9wZG93blRvZ2dsZXJzIiwiZHJvcGRvd25zIiwiaSIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZURyb3Bkb3duIiwiY2xpY2tlZFRvZ2dsZXIiLCJjb250YWluZXJJZCIsImdldEF0dHJpYnV0ZSIsImRyb3BEb3duQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVBcmlhRXhwYW5kZWQiLCJ0b2dnbGUiLCJ0b2dnbGVyIiwiYXJpYUV4cGFuZGVkU3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJjYWNoZSIsImV2ZW50cyIsImluaXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiaW5pdE1lc3NhZ2UiLCJtZXNzYWdlRWxlbWVudCIsImRlbGV0ZUJ1dHRvbiIsImV2ZW50IiwidGFyZ2V0IiwiZm9jdXNUbyIsIm5leHRFbGVtZW50U2libGluZyIsInRhYkluZGV4IiwiZm9jdXMiLCJyZW1vdmUiLCJyb290RWwiLCJkb2N1bWVudEVsZW1lbnQiLCIkbW9kYWxzIiwiJG1vZGFsQnV0dG9ucyIsIiRtb2RhbENsb3NlcyIsImJ1dHRvbiIsIm9wZW5pbmdCdXR0b24iLCJpc09wZW5lZCIsInB1c2giLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFscyIsImUiLCJrZXlDb2RlIiwiZm9jdXNhYmxlRWxlbWVudHMiLCJmaXJzdCIsImxhc3QiLCJoYW5kbGVNb2RhbFRhYmJpbmciLCJzaGlmdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmJhckJ1cmdlciIsIm5hdmJhck1lbnUiLCJ0b2dnbGVNZW51IiwiZHJvcGRvd25NZW51IiwidG9nZ2xlQW5jZXN0b3JBY3RpdmVTdGF0ZSIsImNoaWxkIiwiY2xhc3NOYW1lIiwiYW5jZXN0b3IiLCJjb250YWlucyIsImtleXMiLCJlbmQiLCJob21lIiwibGVmdCIsInVwIiwicmlnaHQiLCJkb3duIiwiZW50ZXIiLCJzcGFjZSIsImRpcmVjdGlvbiIsImluaXRBbGxUYWJzIiwiYWxsVGFicyIsImluaXQiLCJ0YWJzRWxlbWVudCIsInRhYnNDb250YWluZXIiLCJ0YWJsaXN0IiwidGFiTGlzdEl0ZW1zIiwiZmlyc3RUYWIiLCJsYXN0VGFiIiwicGFuZWxzIiwiaW5pdFRhYiIsInRhYiIsImluZGV4IiwicGFuZWxJZCIsImhhc2giLCJzbGljZSIsImlkIiwicGFuZWwiLCJpbml0UGFuZWwiLCJyb2xlIiwidGFiaW5kZXgiLCJjbGlja0V2ZW50TGlzdGVuZXIiLCJrZXlkb3duRXZlbnRMaXN0ZW5lciIsImtleXVwRXZlbnRMaXN0ZW5lciIsImhpZGRlbiIsImFjdGl2YXRlVGFiIiwia2V5IiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNGaXJzdFRhYiIsImRldGVybWluZU9yaWVudGF0aW9uIiwidmVydGljYWwiLCJwcm9jZWVkIiwic3dpdGNoVGFiT25BcnJvd1ByZXNzIiwicHJlc3NlZCIsInVuZGVmaW5lZCIsInNldEZvY3VzIiwiZGVhY3RpdmF0ZVRhYnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0IiwicCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QUFVMUQsS0FBVjtBQUNIO0FBQ0o7QUFFRDs7Ozs7Ozs7bUNBS2dCOEMsTyxFQUFVO0FBQ3RCLFdBQU0sSUFBSWlDLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUdqQyxPQUFPLENBQUMvRyxJQUFSLENBQWF1QyxNQUFsQyxFQUEwQ3lHLENBQUMsRUFBM0MsRUFBZ0Q7QUFDNUNqQyxlQUFPLENBQUMvRyxJQUFSLENBQWNnSixDQUFkLEVBQWtCbkgsVUFBbEIsQ0FBNkJXLFNBQTdCLENBQXVDMEIsTUFBdkMsQ0FBK0MsV0FBL0M7QUFDQTZDLGVBQU8sQ0FBQy9HLElBQVIsQ0FBY2dKLENBQWQsRUFBa0I1RixZQUFsQixDQUFnQyxVQUFoQyxFQUE0QyxJQUE1QztBQUNBMkQsZUFBTyxDQUFDL0csSUFBUixDQUFjZ0osQ0FBZCxFQUFrQjVGLFlBQWxCLENBQWdDLGVBQWhDLEVBQWlELE9BQWpEO0FBQ0g7O0FBRUQsV0FBTSxJQUFJNkYsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR2xDLE9BQU8sQ0FBQ0ksTUFBUixDQUFlNUUsTUFBcEMsRUFBNEMwRyxDQUFDLEVBQTdDLEVBQWtEO0FBQzlDbEMsZUFBTyxDQUFDSSxNQUFSLENBQWdCOEIsQ0FBaEIsRUFBb0I3RixZQUFwQixDQUFrQyxRQUFsQyxFQUE0QyxRQUE1QztBQUNIO0FBQ0o7QUFFRDs7Ozs7Ozs7a0NBS2UyRCxPLEVBQVU7QUFDckJBLGFBQU8sQ0FBQ0UsUUFBUixDQUFpQmhELEtBQWpCO0FBQ0g7QUFFRDs7Ozs7Ozs7aUNBS2M4QyxPLEVBQVU7QUFDcEJBLGFBQU8sQ0FBQ0csT0FBUixDQUFnQmpELEtBQWhCO0FBQ0giLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0IG1haW4gc3R5bGUgZmlsZSBoZXJlLlxuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuLy8gSW1wb3J0IGluZGl2aWR1YWwgY29tcG9uZW50IGNsYXNzZXMgaGVyZS5cbmltcG9ydCBCb2lsZXJQbGF0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JvaWxlcnBsYXRlL2JvaWxlcnBsYXRlJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmltcG9ydCBUYWJzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFicy90YWJzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlJztcblxuLy8gUnVuIGNvbXBvbmVudHMgYW5kIGFkZCB0aGVtIHRvIHRoZSBtYXBcbi8vIHRoZSBjb21wb25lbnQgc2x1ZyBiZWluZyB0aGUga2V5LlxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICBib2lsZXJwbGF0ZTogbmV3IEJvaWxlclBsYXRlKCksXG4gICAgbmF2YmFyOiBuZXcgTmF2YmFyKCksXG4gICAgYWNjb3JkaW9uOiBuZXcgQWNjb3JkaW9uKCksXG4gICAgdGFiczogbmV3IFRhYnMoKSxcbiAgICBtb2RhbDogbmV3IE1vZGFsKCksXG4gICAgbWVzc2FnZTogbmV3IE1lc3NhZ2UoKSxcbn07XG5cbi8vIEluaXRpYWxpemUgZG9jdW1lbnRhdGlvbiBmdW5jdGlvbmFsaXRpZXMuXG5pbXBvcnQgRG9jdW1lbnRhdGlvbiBmcm9tICcuL2RvY3VtZW50YXRpb24nO1xubmV3IERvY3VtZW50YXRpb24oIGNvbXBvbmVudHMgKTtcbiIsIi8vIFRoaXMgYWRkcyBmdW5jdGlvbmFsaXRpZXMgdG8gYWRkIGhpZ2xpZ2h0ZWQgbWFya2Rvd24gc3VwcG9ydGVkIGRvY3VtZW50YXRpb25cbi8vIGZvciBCdWxtYWxseSBjb21wb250ZW50cy5cblxuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHQnO1xuaW1wb3J0IGphdmFzY3JpcHQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdCc7XG5pbXBvcnQgc2NzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zY3NzJztcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCAnamF2YXNjcmlwdCcsIGphdmFzY3JpcHQgKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSggJ3Njc3MnLCBzY3NzICk7XG5cbmNsYXNzIERvY3VtZW50YXRpb24ge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBkb2N1bWVudGF0aW9uIGhhbmRsaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudHMgVGhlIGNvbXBvbmVudCBvYmplY3RzIG1hcC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggY29tcG9uZW50cyApIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gY29tcG9uZW50cztcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdERvY3VtZW50YXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbWFya2Rvd24gZG9jdW1lbnRhdGlvbiBpZiBvbiBhXG4gICAgICovXG4gICAgaW5pdERvY3VtZW50YXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICAgIGZvciAoIGNvbnN0IHNsdWcgaW4gdGhpcy5jb21wb25lbnRzICkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzWyBzbHVnIF07XG5cbiAgICAgICAgICAgIGlmICggISBwYXRobmFtZS5pbmNsdWRlcyggc2x1ZyApIHx8ICEgY29tcG9uZW50LmRvY3VtZW50YXRpb24gKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuLCBpZiB0aGlzIGNvbXBvbmVudCBpcyBub3QgY3VycmVudGx5IHZpZXdlZFxuICAgICAgICAgICAgICAgIC8vIG9yIHRoZSBjb21wb25lbnQgZG9lcyBub3QgY29udGFpbiBkb2N1bWVudGF0aW9uLlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRhaW5lciBmb3IgdGhlIG1hcmtkb3duIGRvY3VtZW50LlxuICAgICAgICAgICAgY29uc3QgZG9jQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdqcy1tYXJrZG93bicgKTtcblxuICAgICAgICAgICAgaWYgKCAhIGRvY0NvbnRhaW5lciApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGRvY3VtZW50YXRpb24gdG8gdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICAgIGRvY0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb21wb25lbnQuZG9jdW1lbnRhdGlvbjtcblxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGNvZGUgYmxvY2tzLlxuICAgICAgICAgICAgZG9jQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoICdjb2RlJyApLmZvckVhY2goICggYmxvY2sgKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgY29kZSBibG9ja3Mgd2l0aCBhIHByZSB0YWcuXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwcmUnICk7XG4gICAgICAgICAgICAgICAgYmxvY2sucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIHdyYXBwZXIsIGJsb2NrICk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCggYmxvY2sgKTtcblxuICAgICAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soIGJsb2NrICk7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb247XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEFjY29yZGlvbiBKUyBjb250cm9sbGVyLlxuICovXG5cbi8qKlxuICogQ2xhc3MgQWNjb3JkaW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgcnVuIHdoZW4gYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzZXQgZm9yIGVhY2ggY29tcG9uZW50LlxuICAgICAgICB0aGlzLmRvY3VtZW50YXRpb24gPSByZXF1aXJlKCAnLi9yZWFkbWUubWQnICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY1JlYWR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgZG9tIGVsZW1lbnRzIGZvciB1c2UgaW4gdGhlIGNsYXNzJ3MgbWV0aG9kc1xuICAgICAqL1xuICAgIGNhY2hlKCkge1xuICAgICAgICB0aGlzLm1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2pzLWJ1bG1hbGx5LWFjY29yZGlvbicgKTtcblxuICAgICAgICBpZiAoIHRoaXMubWFpbkNvbnRhaW5lciApIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Ub2dnbGVycyA9IHRoaXMubWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnLmFjY29yZGlvbi10aXRsZS1idXR0b24nICk7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3ducyA9IHRoaXMubWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnLmFjY29yZGlvbi1jb250ZW50JyApO1xuXG4gICAgICAgICAgICAvLyBIaWRlIGFsbCB0b2dnbGVhYmxlIGVsZW1lbnRzIHdpdGggSlMuXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmRyb3Bkb3ducy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duc1sgaSBdLmNsYXNzTGlzdC5hZGQoICdpcy1oaWRkZW4nICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqL1xuICAgIGV2ZW50cygpIHtcbiAgICAgICAgaWYgKCB0aGlzLmRyb3Bkb3duVG9nZ2xlcnMgKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmRyb3Bkb3duVG9nZ2xlcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blRvZ2dsZXJzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVEcm9wZG93biggdGhpcy5kcm9wZG93blRvZ2dsZXJzWyBpIF0gKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBhIGRyb3Bkb3duIGNvbnRlbnQgdmlzaWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnR9IGNsaWNrZWRUb2dnbGVyIFRoZSB0b2dnbGVyIGJ1dHRvbiB0aGF0IHdhcyBjbGlja2VkLlxuICAgICAqL1xuICAgIHRvZ2dsZURyb3Bkb3duKCBjbGlja2VkVG9nZ2xlciApIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVySWQgPSBjbGlja2VkVG9nZ2xlci5nZXRBdHRyaWJ1dGUoICdhcmlhLWNvbnRyb2xzJyApO1xuICAgICAgICBjb25zdCBkcm9wRG93bkNvbnRlbnQgPSB0aGlzLm1haW5Db250YWluZXIucXVlcnlTZWxlY3RvciggYCMkeyBjb250YWluZXJJZCB9YCApO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlQXJpYUV4cGFuZGVkKCBjbGlja2VkVG9nZ2xlciApO1xuICAgICAgICBkcm9wRG93bkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWhpZGRlbicgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRvZ2dsZXIncyBhcmlhLWV4cGFuZGVkIGN1cnJlbnQgc3RhdGUgYW5kIHNldCBhIG5ldyBvcHBvc2l0ZSBzdGF0ZSB0byBpdC5cbiAgICAgKiBBbHNvIHNldCB0aGUgb3BlbmVkIGNvbnRhaW5lcidzIGFyaWEtaGlkZGVuIHN0YXRlIHRvIHRoZSBuZXcgdmFsdWUncyBvcHBvc2l0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvZ2dsZXIgVGhlIHRvZ2dsZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0b2dnbGVBcmlhRXhwYW5kZWQoIHRvZ2dsZXIgKSB7XG4gICAgICAgIGNvbnN0IGFyaWFFeHBhbmRlZFN0YXRlID0gdG9nZ2xlci5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJyApID09PSAnZmFsc2UnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0b2dnbGVyLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBhcmlhRXhwYW5kZWRTdGF0ZSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cbiAgICAgKi9cbiAgICBkb2NSZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jYWNoZSgpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcImFjY29yZGlvbi1jb21wb25lbnRcXFwiPkFjY29yZGlvbiBjb21wb25lbnQ8L2gyPlxcbjxwPlRoaXMgY29tcG9uZW50IHByb3ZpZGVzIGFuIGFjY29yZGlvbiBmdW5jdGlvbmFsaXR5IHdpdGggYWRkZWQgYWNjZXNzaWJsZSBKUyBpbXBsZW1lbnRhdGlvbi48L3A+XFxuPGgzIGlkPVxcXCJ0ZXN0cy1hbmQtYWNjZXNzaWJpbGl0eS1zdGF0dXNcXFwiPlRlc3RzIGFuZCBhY2Nlc3NpYmlsaXR5IHN0YXR1czwvaDM+XFxuPHA+VGhlIGFjY2Vzc2liaWxpdHktcmVhZHkgc3RhdHVzIG9mIHRoaXMgY29tcG9uZW50IGlzOiB1bnRlc3RlZC48L3A+XFxuPHVsPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBLZXlib2FyZC1vbmx5PC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVm9pY2VPdmVyICZhbXA7IFNhZmFyaSAobWFjT1MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVm9pY2VPdmVyICZhbXA7IFNhZmFyaSAoaU9TKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFZvaWNlT3ZlciAmYW1wOyBTYWZhcmkgKGlQYWRPUyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBUYWxrYmFjayAmYW1wOyBDaHJvbWUgKEFuZHJvaWQpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gTmFycmF0b3IgJmFtcDsgRWRnZSAoV2luZG93cyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBOVkRBICZhbXA7IEZpcmVmb3ggKFdpbmRvd3MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGU8L2xpPlxcbjwvdWw+XFxuPGgzIGlkPVxcXCJodG1sXFxcIj5IVE1MPC9oMz5cXG48cD5UaGUgQnVsbWFsbHkgYWNjb3JkaW9uJiMzOTtzIHRpdGxlcyBhcmUgaW5zaWRlIGEgYnV0dG9uIHNvIHRoYXQgdGhleSBhcmUgZm9jdXNhYmxlIGFuZCBjbGlja2FibGUuPC9wPlxcbjxwcmU+PGNvZGU+Jmx0O2RpdiBpZD0mcXVvdDtqcy1idWxtYWxseS1hY2NvcmRpb24mcXVvdDsgY2xhc3M9JnF1b3Q7YnVsbWFsbHktYWNjb3JkaW9uJnF1b3Q7Jmd0O1xcbiAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2NvbHVtbnMgaXMtbXVsdGlsaW5lJnF1b3Q7Jmd0O1xcblxcbiAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb2x1bW4gaXMtMTAtdGFibGV0IGlzLW9mZnNldC0xLXRhYmxldCBpcy04LWRlc2t0b3AgaXMtb2Zmc2V0LTItZGVza3RvcCZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2FjY29yZGlvbi1yb3cgYm94JnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAmbHQ7aDMgY2xhc3M9JnF1b3Q7aDQgYWNjb3JkaW9uLXRpdGxlJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0OyEtLSBUaGlzIGNvbnRyb2xzIHRoZSBzZWN0aW9uLiBUb2dnbGluZyB0aGUgc3RhdGUgaXMgZG9uZSB3aXRoIEpTIC0tJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0O2J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSZxdW90O2FjY29yZGlvbi10aXRsZS1idXR0b24tMSZxdW90O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSZxdW90O2FjY29yZGlvbi10aXRsZS1idXR0b24mcXVvdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSZxdW90O2ZhbHNlJnF1b3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0mcXVvdDthY2NvcmRpb24tY29udGVudC0xJnF1b3Q7Jmd0O1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7bGV2ZWwgaXMtbW9iaWxlJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2xldmVsLWxlZnQgY2FuLXNocmluayZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDtzcGFuIGNsYXNzPSZxdW90O2xldmVsLWl0ZW0gY2FuLXNocmluayBhY2NvcmRpb24tdGl0bGUtdGV4dCZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGhlYWRpbmcgaXMgY2xpY2thYmxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7L3NwYW4mZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2xldmVsLXJpZ2h0JnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3NwYW4gY2xhc3M9JnF1b3Q7bGV2ZWwtaXRlbSBpY29uIGFjY29yZGlvbi10aXRsZS1pY29uJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDtpIGNsYXNzPSZxdW90O2ZhcyBmYS1hbmdsZS1kb3duJnF1b3Q7IGFyaWEtaGlkZGVuPSZxdW90O3RydWUmcXVvdDsmZ3Q7Jmx0Oy9pJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0Oy9zcGFuJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDsvYnV0dG9uJmd0O1xcbiAgICAgICAgICAgICAgICAmbHQ7L2gzJmd0O1xcblxcbiAgICAgICAgICAgICAgICAmbHQ7IS0tIFRoZSBJRCBvZiB0aGlzIGVsZW1lbnQgaGFzIHRvIGJlIGR5bmFtaWNhbGx5IGFkZGVkLiAtLSZndDtcXG4gICAgICAgICAgICAgICAgJmx0O2RpdiBpZD0mcXVvdDthY2NvcmRpb24tY29udGVudC0xJnF1b3Q7IGNsYXNzPSZxdW90O2FjY29yZGlvbi1jb250ZW50JnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250ZW50IGlzLXNtYWxsJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICZsdDtwJmd0O0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVybmF0dXIsIHF1aXNxdWFtIG1vbGVzdGlhcy4gUXVhZXJhdCBtb2xlc3RpYWUgbmFtLCBleHBsaWNhYm8gcXVvIG5pc2kgY29ycG9yaXMhIEJsYW5kaXRpaXMgcXVhbSBxdWlidXNkYW0sIGZhY2lsaXMgbmloaWwgb2RpbyBuaXNpIGl1c3RvIGlwc2EgbGFib3J1bSBuZXF1ZSBmdWdpdC4mbHQ7L3AmZ3Q7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O2gzJmd0O0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyJmx0Oy9oMyZndDtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmbHQ7cCZndDtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyLCBxdWlzcXVhbSBtb2xlc3RpYXMuIFF1YWVyYXQgbW9sZXN0aWFlIG5hbSwgZXhwbGljYWJvIHF1byBuaXNpIGNvcnBvcmlzISBCbGFuZGl0aWlzIHF1YW0gcXVpYnVzZGFtLCBmYWNpbGlzIG5paGlsIG9kaW8gbmlzaSBpdXN0byBpcHNhIGxhYm9ydW0gbmVxdWUgZnVnaXQuJmx0Oy9wJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAgICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuXFxuICAgICAgICAmbHQ7IS0tIE5leHQgYWNjb3JkaW9uIHJvdyAtLSZndDtcXG5cXG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29sdW1uIGlzLTEwLXRhYmxldCBpcy1vZmZzZXQtMS10YWJsZXQgaXMtOC1kZXNrdG9wIGlzLW9mZnNldC0yLWRlc2t0b3AmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDthY2NvcmRpb24tcm93IGJveCZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgJmx0O2gzIGNsYXNzPSZxdW90O2g0IGFjY29yZGlvbi10aXRsZSZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDshLS0gVGhpcyBjb250cm9scyB0aGUgc2VjdGlvbi4gVG9nZ2xpbmcgdGhlIHN0YXRlIGlzIGRvbmUgd2l0aCBKUyAtLSZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDtidXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0mcXVvdDthY2NvcmRpb24tdGl0bGUtYnV0dG9uLTEmcXVvdDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz0mcXVvdDthY2NvcmRpb24tdGl0bGUtYnV0dG9uJnF1b3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0mcXVvdDtmYWxzZSZxdW90O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9JnF1b3Q7YWNjb3JkaW9uLWNvbnRlbnQtMSZxdW90OyZndDtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2xldmVsIGlzLW1vYmlsZSZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtsZXZlbC1sZWZ0IGNhbi1zaHJpbmsmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7c3BhbiBjbGFzcz0mcXVvdDtsZXZlbC1pdGVtIGNhbi1zaHJpbmsgYWNjb3JkaW9uLXRpdGxlLXRleHQmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBoZWFkaW5nIGlzIGNsaWNrYWJsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0Oy9zcGFuJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtsZXZlbC1yaWdodCZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDtzcGFuIGNsYXNzPSZxdW90O2xldmVsLWl0ZW0gaWNvbiBhY2NvcmRpb24tdGl0bGUtaWNvbiZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbHQ7aSBjbGFzcz0mcXVvdDtmYXMgZmEtYW5nbGUtZG93biZxdW90OyBhcmlhLWhpZGRlbj0mcXVvdDt0cnVlJnF1b3Q7Jmd0OyZsdDsvaSZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZsdDsvc3BhbiZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICAgICAgICAgJmx0Oy9oMyZndDtcXG5cXG4gICAgICAgICAgICAgICAgJmx0OyEtLSBUaGUgSUQgb2YgdGhpcyBlbGVtZW50IGhhcyB0byBiZSBkeW5hbWljYWxseSBhZGRlZC4gLS0mZ3Q7XFxuICAgICAgICAgICAgICAgICZsdDtkaXYgaWQ9JnF1b3Q7YWNjb3JkaW9uLWNvbnRlbnQtMSZxdW90OyBjbGFzcz0mcXVvdDthY2NvcmRpb24tY29udGVudCZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7Y29udGVudCBpcy1zbWFsbCZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAmbHQ7cCZndDtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyLCBxdWlzcXVhbSBtb2xlc3RpYXMuIFF1YWVyYXQgbW9sZXN0aWFlIG5hbSwgZXhwbGljYWJvIHF1byBuaXNpIGNvcnBvcmlzISBCbGFuZGl0aWlzIHF1YW0gcXVpYnVzZGFtLCBmYWNpbGlzIG5paGlsIG9kaW8gbmlzaSBpdXN0byBpcHNhIGxhYm9ydW0gbmVxdWUgZnVnaXQuJmx0Oy9wJmd0O1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICZsdDtoMyZndDtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciZsdDsvaDMmZ3Q7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3AmZ3Q7TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJuYXR1ciwgcXVpc3F1YW0gbW9sZXN0aWFzLiBRdWFlcmF0IG1vbGVzdGlhZSBuYW0sIGV4cGxpY2FibyBxdW8gbmlzaSBjb3Jwb3JpcyEgQmxhbmRpdGlpcyBxdWFtIHF1aWJ1c2RhbSwgZmFjaWxpcyBuaWhpbCBvZGlvIG5pc2kgaXVzdG8gaXBzYSBsYWJvcnVtIG5lcXVlIGZ1Z2l0LiZsdDsvcCZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcblxcbiAgICAmbHQ7L2RpdiZndDtcXG4mbHQ7L2RpdiZndDs8L2NvZGU+PC9wcmU+PGgzIGlkPVxcXCJqYXZhc2NyaXB0XFxcIj5KYXZhU2NyaXB0PC9oMz5cXG48cD5UaGlzIEpTIGltcGxlbWVudGF0aW9uIGlzIHdyaXR0ZW4gaW4gRVM2IGFuZCB1c2VzIFZhbmlsbGFKUyB0byBjb250cm9sIHRoZSBzdGF0ZXMgaW4gdGhlIERPTS4gWW91IG1heSB1c2UgaXQgYXMgaXQgaXMgYW5kIHVzZSA8YSBocmVmPVxcXCJodHRwczovL2JhYmVsanMuaW8vXFxcIj5CYWJlbDwvYT4gdG8gbWFrZSBpdCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoIG9sZGVyIGJyb3dzZXJzLiBJZiB5b3UgZG8gbm90IGhhdmUgQmFiZWwgaW4geW91ciBlbnZpcm9ubWVudCwgaXQgc2hvdWxkIGJlIHByZXR0eSBzdHJhaWdodGZvcndhcmQgdG8gY29weSB0aGUgcmVxdWlyZWQgcGFydHMgb2YgdGhpcyBjb2RlLjwvcD5cXG48cHJlPjxjb2RlPi8qKlxcbiAqIEFjY29yZGlvbiBKUyBjb250cm9sbGVyLlxcbiAqL1xcblxcbi8qKlxcbiAqIENsYXNzIEFjY29yZGlvblxcbiAqL1xcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvbiB7XFxuICAgIC8qKlxcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBydW4gd2hlbiBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY2xhc3MgaXMgY3JlYXRlZC5cXG4gICAgICovXFxuICAgIGNvbnN0cnVjdG9yKCkge1xcbiAgICAgICAgLy8gVGhpcyBtdXN0IGJlIHNldCBmb3IgZWFjaCBjb21wb25lbnQuXFxuICAgICAgICB0aGlzLmRvY3VtZW50YXRpb24gPSByZXF1aXJlKCAmIzM5Oy4vYWNjb3JkaW9uLm1kJiMzOTsgKTtcXG5cXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXFxuICAgICAgICAgICAgJiMzOTtET01Db250ZW50TG9hZGVkJiMzOTssXFxuICAgICAgICAgICAgKCkgPSZndDsge1xcbiAgICAgICAgICAgICAgICB0aGlzLmRvY1JlYWR5KCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogQ2FjaGUgZG9tIGVsZW1lbnRzIGZvciB1c2UgaW4gdGhlIGNsYXNzJiMzOTtzIG1ldGhvZHNcXG4gICAgICovXFxuICAgIGNhY2hlKCkge1xcbiAgICAgICAgdGhpcy5tYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICYjMzk7anMtYnVsbWFsbHktYWNjb3JkaW9uJiMzOTsgKTtcXG5cXG4gICAgICAgIGlmICggdGhpcy5tYWluQ29udGFpbmVyICkge1xcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Ub2dnbGVycyA9IHRoaXMubWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAmIzM5Oy5hY2NvcmRpb24tdGl0bGUtYnV0dG9uJiMzOTsgKTtcXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3ducyA9IHRoaXMubWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAmIzM5Oy5hY2NvcmRpb24tY29udGVudCYjMzk7ICk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvLyBIaWRlIGFsbCB0b2dnbGVhYmxlIGVsZW1lbnRzIHdpdGggSlMuXFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgJmx0OyB0aGlzLmRyb3Bkb3ducy5sZW5ndGg7IGkrKyApIHtcXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duc1sgaSBdLmNsYXNzTGlzdC5hZGQoICYjMzk7aXMtaGlkZGVuJiMzOTsgKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycy5cXG4gICAgICovXFxuICAgIGV2ZW50cygpIHtcXG4gICAgICAgIGlmICggdGhpcy5kcm9wZG93blRvZ2dsZXJzICkge1xcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSAmbHQ7IHRoaXMuZHJvcGRvd25Ub2dnbGVycy5sZW5ndGg7IGkrKyApIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blRvZ2dsZXJzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJiMzOTtjbGljayYjMzk7LCAoKSA9Jmd0OyB0aGlzLnRvZ2dsZURyb3Bkb3duKCB0aGlzLmRyb3Bkb3duVG9nZ2xlcnNbIGkgXSApICk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8qKlxcbiAgICAgKiBUb2dnbGVzIGEgZHJvcGRvd24gY29udGVudCB2aXNpYmlsaXR5LlxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBjbGlja2VkVG9nZ2xlciBUaGUgdG9nZ2xlciBidXR0b24gdGhhdCB3YXMgY2xpY2tlZC5cXG4gICAgICovXFxuICAgIHRvZ2dsZURyb3Bkb3duKCBjbGlja2VkVG9nZ2xlciApIHtcXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcklkID0gY2xpY2tlZFRvZ2dsZXIuZ2V0QXR0cmlidXRlKCAmIzM5O2FyaWEtY29udHJvbHMmIzM5OyApO1xcbiAgICAgICAgY29uc3QgZHJvcERvd25Db250ZW50ID0gdGhpcy5tYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoIGAjJHsgY29udGFpbmVySWQgfWAgKTtcXG5cXG4gICAgICAgIHRoaXMudG9nZ2xlQXJpYUV4cGFuZGVkKCBjbGlja2VkVG9nZ2xlciApO1xcbiAgICAgICAgZHJvcERvd25Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoICYjMzk7aXMtaGlkZGVuJiMzOTsgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogR2V0IHRoZSB0b2dnbGVyJiMzOTtzIGFyaWEtZXhwYW5kZWQgY3VycmVudCBzdGF0ZSBhbmQgc2V0IGEgbmV3IG9wcG9zaXRlIHN0YXRlIHRvIGl0LlxcbiAgICAgKiBBbHNvIHNldCB0aGUgb3BlbmVkIGNvbnRhaW5lciYjMzk7cyBhcmlhLWhpZGRlbiBzdGF0ZSB0byB0aGUgbmV3IHZhbHVlJiMzOTtzIG9wcG9zaXRlLlxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b2dnbGVyIFRoZSB0b2dnbGVyIGVsZW1lbnQuXFxuICAgICAqL1xcbiAgICB0b2dnbGVBcmlhRXhwYW5kZWQoIHRvZ2dsZXIgKSB7XFxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRTdGF0ZSA9IHRvZ2dsZXIuZ2V0QXR0cmlidXRlKCAmIzM5O2FyaWEtZXhwYW5kZWQmIzM5OyApID09PSAmIzM5O2ZhbHNlJiMzOTsgPyB0cnVlIDogZmFsc2U7XFxuICAgICAgICB0b2dnbGVyLnNldEF0dHJpYnV0ZSggJiMzOTthcmlhLWV4cGFuZGVkJiMzOTssIGFyaWFFeHBhbmRlZFN0YXRlICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIFJ1biB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cXG4gICAgICovXFxuICAgIGRvY1JlYWR5KCkge1xcbiAgICAgICAgdGhpcy5jYWNoZSgpO1xcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+PGgzIGlkPVxcXCJzY3NzXFxcIj5TQ1NTPC9oMz5cXG48cD5XZSB1c2UgdGhlIGNvbXBvbmVudCBjbGFzcyBuYW1lIGFzIHRoZSBDU1Mgc2NvcGUgZm9yIG91ciBtb2RpZmljYXRpb25zIHRvIHRoZSBiYXNpYyBCdWxtYSBDU1MgY29kZS48L3A+XFxuPHByZT48Y29kZT4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIHN0eWxlcyBmb3IgdGhlIGFjY29yZGlvbiBlbGVtZW50Llxcbi5idWxtYWxseS1hY2NvcmRpb24ge1xcblxcbiAgICAuYWNjb3JkaW9uLXRpdGxlLWJ1dHRvbiB7XFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgJmFtcDtbYXJpYS1leHBhbmRlZD0mcXVvdDt0cnVlJnF1b3Q7XSB7XFxuICAgICAgICAgICAgLmljb24ge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFjY29yZGlvbi10aXRsZS1pY29uIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAuYWNjb3JkaW9uLWNvbnRlbnQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xcbiAgICAgICAgYm9yZGVyLXRvcDogLjA2MjVyZW0gc29saWQgJGdyZXktbGlnaHRlcjtcXG4gICAgfVxcblxcbiAgICAuY2FuLXNocmluayB7XFxuICAgICAgICBmbGV4LXNocmluazogMTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+XCI7IiwiLyoqXG4gKiBCb2lsZXJQbGF0ZSBKUyBjb250cm9sbGVyLlxuICovXG5cbi8qKlxuICogQ2xhc3MgQm9pbGVyUGxhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9pbGVyUGxhdGUge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgY29tcG9uZW50IGZ1bmN0aW9uYWxpdGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSgpO1xuXG4gICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzZXQgZm9yIGVhY2ggY29tcG9uZW50LlxuICAgICAgICB0aGlzLmRvY3VtZW50YXRpb24gPSByZXF1aXJlKCAnLi9yZWFkbWUubWQnICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY1JlYWR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgZG9tIGVsZW1lbnRzIGZvciB1c2UgaW4gdGhlIGNsYXNzJ3MgbWV0aG9kc1xuICAgICAqL1xuICAgIGNhY2hlKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgZXZlbnRzKCkge31cblxuICAgIC8qKlxuICAgICAqIFJ1biB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cbiAgICAgKi9cbiAgICBkb2NSZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jYWNoZSgpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcImNvbXBvbmVudC1kb2N1bWVudGF0aW9uXFxcIj5Db21wb25lbnQgZG9jdW1lbnRhdGlvbjwvaDI+XFxuPHA+PGVtPkFkZCBjb21wb25lbnQgc3BlY2lmaWMgZG9jdW1lbnRhdGlvbiBoZXJlLjwvZW0+PC9wPlxcbjxoMyBpZD1cXFwidGVzdHMtYW5kLWFjY2Vzc2liaWxpdHktc3RhdHVzXFxcIj5UZXN0cyBhbmQgYWNjZXNzaWJpbGl0eSBzdGF0dXM8L2gzPlxcbjxwPlRoZSBhY2Nlc3NpYmlsaXR5LXJlYWR5IHN0YXR1cyBvZiB0aGlzIGNvbXBvbmVudCBpczogdW50ZXN0ZWQuPC9wPlxcbjx1bD5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gS2V5Ym9hcmQtb25seTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFZvaWNlT3ZlciAmYW1wOyBTYWZhcmkgKG1hY09TKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFZvaWNlT3ZlciAmYW1wOyBTYWZhcmkgKGlPUyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBWb2ljZU92ZXIgJmFtcDsgU2FmYXJpIChpUGFkT1MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVGFsa2JhY2sgJmFtcDsgQ2hyb21lIChBbmRyb2lkKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IE5hcnJhdG9yICZhbXA7IEVkZ2UgKFdpbmRvd3MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gTlZEQSAmYW1wOyBGaXJlZm94IChXaW5kb3dzKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFdpbmRvd3MgSGlnaCBDb250cmFzdCBtb2RlPC9saT5cXG48L3VsPlxcbjxoMyBpZD1cXFwiaHRtbFxcXCI+SFRNTDwvaDM+XFxuPHA+PGVtPkRvY3VtZW50IEhUTUwgIG1hcmt1cCBoZXJlIGFuZCBhZGQgdGhlIGNvZGUgYmxvY2sgZm9yIGVhc3kgY29weS1wYXN0aW5nLjwvZW0+PC9wPlxcbjxwcmU+PGNvZGU+Jmx0O2J1dHRvbiBjbGFzcz0mcXVvdDtidXR0b24gYnV0dG9uLS1ib2lsZXJwbGF0ZSZxdW90OyZndDtCb2lsZXJwbGF0ZSZsdDsvYnV0dG9uJmd0OzwvY29kZT48L3ByZT48aDMgaWQ9XFxcImphdmFzY3JpcHRcXFwiPkphdmFTY3JpcHQ8L2gzPlxcbjxwPjxlbT5Eb2N1bWVudCBKYXZhU2NyaXB0IG1hcmt1cCBoZXJlIGFuZCBhZGQgdGhlIGNvZGUgYmxvY2sgZm9yIGVhc3kgY29weS1wYXN0aW5nLjwvZW0+PC9wPlxcbjxwcmU+PGNvZGU+Y29uc3Qgc29tZXRoaW5nID0gMTIzOzwvY29kZT48L3ByZT48aDMgaWQ9XFxcInNjc3NcXFwiPlNDU1M8L2gzPlxcbjxwPjxlbT5Eb2N1bWVudCBTQ1NTIG1hcmt1cCBoZXJlIGFuZCBhZGQgdGhlIGNvZGUgYmxvY2sgZm9yIGVhc3kgY29weS1wYXN0aW5nLjwvZW0+PC9wPlxcbjxwcmU+PGNvZGU+LmJ1dHRvbi0tYm9pbGVycGxhdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn08L2NvZGU+PC9wcmU+XCI7IiwiLyoqXG4gKiBNZXNzYWdlIEpTIGNvbnRyb2xsZXIuXG4gKi9cblxuLyoqXG4gKiBDbGFzcyBNZXNzYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgY29tcG9uZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzZXQgZm9yIGVhY2ggY29tcG9uZW50LlxuICAgICAgICB0aGlzLmRvY3VtZW50YXRpb24gPSByZXF1aXJlKCAnLi9yZWFkbWUubWQnICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNZXNzYWdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgYWxsIG1lc3NhZ2UgZWxlbWVudHMgYW5kIGluaXRhbGl6ZSB0aGVpciBjbG9zaW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgaW5pdE1lc3NhZ2VzKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuYnVsbWFsbHktbWVzc2FnZScgKTtcblxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIE1lc3NhZ2UuaW5pdE1lc3NhZ2UoIG1lc3NhZ2VzWyBpIF0gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNsb3NpbmcgZnVuY3Rpb25hbGl0aWVzIGZvciBhIG1lc3NhZ2UgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG1lc3NhZ2VFbGVtZW50IEEgbWVzc2FnZSBlbGVtZW50LlxuICAgICAqL1xuICAgIHN0YXRpYyBpbml0TWVzc2FnZSggbWVzc2FnZUVsZW1lbnQgKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG1lc3NhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZGVsZXRlJyApO1xuICAgICAgICBkZWxldGVCdXR0b24ubWVzc2FnZSA9IG1lc3NhZ2VFbGVtZW50O1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBNZXNzYWdlLmRlbGV0ZSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9mIGEgZGVsZXRlIGJ1dHRvbiBhbmQgZGVsZXRlcyB0aGUgbWVzc2FnZS5cbiAgICAgKiBGb2N1cyBpcyBzZXQgb24gdGhlIG5leHQgZWxlbWVudCBiZWZvcmUgZGVsZXRpbmcgdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBBbiBldmVudCBvYmplY3QuXG4gICAgICovXG4gICAgc3RhdGljIGRlbGV0ZSggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC50YXJnZXQubWVzc2FnZTtcbiAgICAgICAgbGV0IGZvY3VzVG8gPSBtZXNzYWdlLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAoICEgZm9jdXNUbyApIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gc2libGluZyBmb3IgdGhlIG1lc3NhZ2UsXG4gICAgICAgICAgICAvLyBtb3ZlIGZvY3VzIHRvIHRoZSBwYXJlbnQgbm9kZS5cbiAgICAgICAgICAgIGZvY3VzVG8gPSBtZXNzYWdlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3JjZSBhYmlsaXR5IHRvIGdpdmUgZm9jdXMgb24gdGhlIHNpYmxpbmcuXG4gICAgICAgIGlmICggZm9jdXNUby50YWJJbmRleCAhPT0gMCApIHtcbiAgICAgICAgICAgIGZvY3VzVG8uc2V0QXR0cmlidXRlKCAndGFiaW5kZXgnLCAtMSApO1xuICAgICAgICB9XG4gICAgICAgIGZvY3VzVG8uZm9jdXMoKTtcblxuICAgICAgICBtZXNzYWdlLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcIm1lc3NhZ2UtY29tcG9uZW50XFxcIj5NZXNzYWdlIGNvbXBvbmVudDwvaDI+XFxuPHA+QnVsbWEgZGVzY3JpYmVzIHRoZSA8YSBocmVmPVxcXCJodHRwczovL2J1bG1hLmlvL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy9tZXNzYWdlL1xcXCI+bWVzc2FnZSBjb21wb25lbnQ8L2E+IGFzIGEgY29sb3JlZCBtZXNzYWdlIGJsb2NrLCB0byBlbXBoYXNpemUgcGFydCBvZiB5b3VyIHBhZ2UuIEJ1bG1hbGx5IGltcGxlbWVudHMgdGhlIGNsb3NpbmcgZnVuY3Rpb25hbGl0eSBmb3IgaXQuIFdlIGFsc28gbW9kaWZ5IHRoZSBtZXNzYWdlIEhUTUwgbWFya3VwIGEgbGl0dGxlIHRvIG1ha2UgaXQgc2VtYW50aWNhbGx5IGJldHRlci48L3A+XFxuPGgzIGlkPVxcXCJ0ZXN0cy1hbmQtYWNjZXNzaWJpbGl0eS1zdGF0dXNcXFwiPlRlc3RzIGFuZCBhY2Nlc3NpYmlsaXR5IHN0YXR1czwvaDM+XFxuPHA+VGhlIGFjY2Vzc2liaWxpdHktcmVhZHkgc3RhdHVzIG9mIHRoaXMgY29tcG9uZW50IGlzOiB1bnRlc3RlZC48L3A+XFxuPHVsPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBLZXlib2FyZC1vbmx5PC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVm9pY2VPdmVyICZhbXA7IFNhZmFyaSAobWFjT1MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVm9pY2VPdmVyICZhbXA7IFNhZmFyaSAoaU9TKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFZvaWNlT3ZlciAmYW1wOyBTYWZhcmkgKGlQYWRPUyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBUYWxrYmFjayAmYW1wOyBDaHJvbWUgKEFuZHJvaWQpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gTmFycmF0b3IgJmFtcDsgRWRnZSAoV2luZG93cyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBOVkRBICZhbXA7IEZpcmVmb3ggKFdpbmRvd3MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gV2luZG93cyBIaWdoIENvbnRyYXN0IG1vZGU8L2xpPlxcbjwvdWw+XFxuPGgzIGlkPVxcXCJodG1sXFxcIj5IVE1MPC9oMz5cXG48cD5JbnN0ZWFkIG9mIGFuIGFydGljbGUsIHdlIGVuY291cmFnZSB0byB1c2UgYSBzZWN0aW9uIHRhZyBmb3IgdGhlIG1lc3NhZ2UgY29udGFpbmVyLiBIZWFkaW5nIHNob3VsZCBiZSBpbnNpZGUgYSBoZWFkZXIgZWxlbWVudCBhbmQgdGhlIGhlYWRpbmcgc2hvdWxkIGhhdmUgYSBoZWFkaW5nIHRhZyB3aXRoIGEgbGV2ZWwgZm9sbG93aW5nIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBwYWdlLiBBcyBhbiBleGFtcGxlLCB3ZSB1c2UgPGVtPmgyPC9lbT4gc2luY2UgdGhlIGVsZW1lbnQgcHJvYmFibHkgZG9lcyBub3QgY29udGFpbiB0aGUgbWFpbiBoZWFkaW5nIG9mIGEgcGFnZS4gSW5zaWRlIHRoZSBkZWxldGUgYnV0dG9uLCB5b3Ugc2hvdWxkIGFkZCBhIGRlc2NyaXB0aXZlIHRleHQgaW5zaWRlIHRoZSBzcGFuIGVsZW1lbnQgdGFyZ2V0ZWQgZm9yIHNjcmVlbiByZWFkZXJzLiBVc2luZyBhIHNwYW4gZWxlbWVudCBpbnN0ZWFkIG9mIDxlbT5hcmlhLWxhYmVsPC9lbT4gd2Ugc3VwcG9ydCBsYW5ndWFnZSB0cmFuc2xhdG9ycyB0aGF0IGRvIG5vdCB0cmFuc2xhdGUgSFRNTCBhdHRyaWJ1dGVzIDxlbT4oZS5nLiBHb29nbGUgVHJhbnNsYXRlKTwvZW0+LjwvcD5cXG48cHJlPjxjb2RlPiZsdDtzZWN0aW9uIGNsYXNzPSZxdW90O2J1bG1hbGx5LW1lc3NhZ2UgbWVzc2FnZSZxdW90OyZndDtcXG4gICAgJmx0O2hlYWRlciBjbGFzcz0mcXVvdDttZXNzYWdlLWhlYWRlciZxdW90OyZndDtcXG4gICAgICAgICZsdDtoMiZndDtIZWxsbyBXb3JsZCZsdDsvaDImZ3Q7XFxuICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPSZxdW90O2RlbGV0ZSZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7c3BhbiBjbGFzcz0mcXVvdDtpcy1zci1vbmx5JnF1b3Q7Jmd0O0Nsb3NlIG1lc3NhZ2UmbHQ7L3NwYW4mZ3Q7XFxuICAgICAgICAmbHQ7L2J1dHRvbiZndDtcXG4gICAgJmx0Oy9oZWFkZXImZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7bWVzc2FnZS1ib2R5JnF1b3Q7Jmd0O1xcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gJmx0O3N0cm9uZyZndDtQZWxsZW50ZXNxdWUgcmlzdXMgbWkmbHQ7L3N0cm9uZyZndDssIHRlbXB1cyBxdWlzIHBsYWNlcmF0IHV0LCBwb3J0YSBuZWMgbnVsbGEuIFZlc3RpYnVsdW0gcmhvbmN1cyBhYyBleCBzaXQgYW1ldCBmcmluZ2lsbGEuIE51bGxhbSBncmF2aWRhIHB1cnVzIGRpYW0sIGV0IGRpY3R1bSAmbHQ7YSZndDtmZWxpcyB2ZW5lbmF0aXMmbHQ7L2EmZ3Q7IGVmZmljaXR1ci4gQWVuZWFuIGFjICZsdDtlbSZndDtlbGVpZmVuZCBsYWN1cyZsdDsvZW0mZ3Q7LCBpbiBtb2xsaXMgbGVjdHVzLiBEb25lYyBzb2RhbGVzLCBhcmN1IGV0IHNvbGxpY2l0dWRpbiBwb3J0dGl0b3IsIHRvcnRvciB1cm5hIHRlbXBvciBsaWd1bGEsIGlkIHBvcnR0aXRvciBtaSBtYWduYSBhIG5lcXVlLiBEb25lYyBkdWkgdXJuYSwgdmVoaWN1bGEgZXQgc2VtIGVnZXQsIGZhY2lsaXNpcyBzb2RhbGVzIHNlbS5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9zZWN0aW9uJmd0OzwvY29kZT48L3ByZT48aDMgaWQ9XFxcImphdmFzY3JpcHRcXFwiPkphdmFTY3JpcHQ8L2gzPlxcbjxwPkphdmFTY3JpcHQgaGFuZGxlcyByZW1vdmluZyB0aGUgZWxlbWVudCBhbmQgbW92aW5nIGZvY3VzIHRvIHRoZSBuZXh0IHNpYmxpbmcgb2YgdGhlIG1lc3NhZ2UgZWxlbWVudC4gSWYgdGhlIG1lc3NhZ2UgZWxlbWVudCBoYXMgbm8gc2libGluZ3MsIGZvY3VzIGlzIG1vdmVkIHRvIHRoZSBwYXJlbnQgZWxlbWVudC4gV2UgZW5jb3VyYWdlIHBsYWNpbmcgdGhlIG1lc3NhZ2UgZWxlbWVudCBzbyB0aGF0IGlzIGhhcyBhIHRleHQgZWxlbWVudCBuZXh0IHRvIGl0LiBUaGlzIG1ha2VzIHRoZSBmb2N1cyBjaGFuZ2UgbG9naWNhbCBmb3IgYSBzY3JlZW4gcmVhZGVyIHRvIGFubm91bmNlIGl0IGFmdGVyIHRoZSBwcmV2aW91c2x5IGZvY3VzZWQgZGVsZXRlIGJ1dHRvbiBhbmQgdGhlIHdob2xlIG1lc3NhZ2UgZWxlbWVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTS48L3A+XFxuPHA+SWYgeW91IGNyZWF0ZSBtZXNzYWdlcyBkeW5hbWljYWxseSwgdGhlIDxlbT5NZXNzYWdlPC9lbT4gY2xhc3MgaGFzIHN0YXRpYyBtZXRob2RzIGZvciBpbml0YWxpemluZyBuZXcgbWVzc2FnZSBjb21wb25lbnRzLiBUaGUgPGVtPmluaXRNZXNzYWdlcygpPC9lbT4gbWV0aG9kIGhhcyBhbiBleGFtcGxlIG9mIGhvdyB0byBpbml0YWxpemUgYSBzaW5nbGUgbWVzc2FnZSBjb21wb25lbnQuPC9wPlxcbjxwcmU+PGNvZGU+LyoqXFxuICogQ2xhc3MgTWVzc2FnZVxcbiAqL1xcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xcbiAgICAvKipcXG4gICAgICogQ29uc3RydWN0IHRoZSBjb21wb25lbnQgaGFuZGxlci5cXG4gICAgICovXFxuICAgIGNvbnN0cnVjdG9yKCkge1xcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcXG4gICAgICAgICAgICAmIzM5O0RPTUNvbnRlbnRMb2FkZWQmIzM5OyxcXG4gICAgICAgICAgICAoKSA9Jmd0OyB7XFxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1lc3NhZ2VzKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogRmluZCBhbGwgbWVzc2FnZSBlbGVtZW50cyBhbmQgaW5pdGFsaXplIHRoZWlyIGNsb3NpbmcgZnVuY3Rpb25hbGl0eS5cXG4gICAgICovXFxuICAgIGluaXRNZXNzYWdlcygpIHtcXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJiMzOTsuYnVsbWFsbHktbWVzc2FnZSYjMzk7ICk7XFxuXFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgJmx0OyBtZXNzYWdlcy5sZW5ndGg7IGkrKyApIHtcXG4gICAgICAgICAgICBNZXNzYWdlLmluaXRNZXNzYWdlKCBtZXNzYWdlc1sgaSBdICk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIEluaXRpYWxpemVzIGNsb3NpbmcgZnVuY3Rpb25hbGl0aWVzIGZvciBhIG1lc3NhZ2UgZWxlbWVudC5cXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbWVzc2FnZUVsZW1lbnQgQSBtZXNzYWdlIGVsZW1lbnQuXFxuICAgICAqL1xcbiAgICBzdGF0aWMgaW5pdE1lc3NhZ2UoIG1lc3NhZ2VFbGVtZW50ICkge1xcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gbWVzc2FnZUVsZW1lbnQucXVlcnlTZWxlY3RvciggJiMzOTsuZGVsZXRlJiMzOTsgKTtcXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5tZXNzYWdlID0gbWVzc2FnZUVsZW1lbnQ7XFxuXFxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJiMzOTtjbGljayYjMzk7LCBNZXNzYWdlLmRlbGV0ZSApO1xcbiAgICB9XFxuXFxuICAgIC8qKlxcbiAgICAgKiBIYW5kbGVzIHRoZSBjbGljayBldmVudCBvZiBhIGRlbGV0ZSBidXR0b24gYW5kIGRlbGV0ZXMgdGhlIG1lc3NhZ2UuXFxuICAgICAqIEZvY3VzIGlzIHNldCBvbiB0aGUgbmV4dCBlbGVtZW50IGJlZm9yZSBkZWxldGluZyB0aGUgZWxlbWVudC5cXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0LlxcbiAgICAgKi9cXG4gICAgc3RhdGljIGRlbGV0ZSggZXZlbnQgKSB7XFxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQudGFyZ2V0Lm1lc3NhZ2U7XFxuICAgICAgICBsZXQgZm9jdXNUbyA9IG1lc3NhZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xcblxcbiAgICAgICAgaWYgKCAhIGZvY3VzVG8gKSB7XFxuICAgICAgICAgICAgLy8gSWYgdGhlcmUmIzM5O3Mgbm8gc2libGluZyBmb3IgdGhlIG1lc3NhZ2UsXFxuICAgICAgICAgICAgLy8gbW92ZSBmb2N1cyB0byB0aGUgcGFyZW50IG5vZGUuXFxuICAgICAgICAgICAgZm9jdXNUbyA9IG1lc3NhZ2UucGFyZW50Tm9kZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIEZvcmNlIGFiaWxpdHkgdG8gZ2l2ZSBmb2N1cyBvbiB0aGUgc2libGluZy5cXG4gICAgICAgIGlmICggZm9jdXNUby50YWJJbmRleCAhPT0gMCApIHtcXG4gICAgICAgICAgICBmb2N1c1RvLnNldEF0dHJpYnV0ZSggJiMzOTt0YWJpbmRleCYjMzk7LCAtMSApO1xcbiAgICAgICAgfVxcbiAgICAgICAgZm9jdXNUby5mb2N1cygpO1xcblxcbiAgICAgICAgbWVzc2FnZS5yZW1vdmUoKTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+PGgzIGlkPVxcXCJzY3NzXFxcIj5TQ1NTPC9oMz5cXG48cD5UaGUgaGVhZGluZyBvZiB0aGUgbWVzc2FnZSBlbGVtZW50IHNob3VsZCBiZSBpbnNpZGUgYSBoZWFkaW5nIHRhZy4gQnVsbWEgc3R5bGVzIGhlYWRpbmdzIHdpdGhvdXQgYW55IHdlaWdodCBieSBkZWZhdWx0LiBXZSBzZXQgdGhlIGNvcnJlY3Qgd2VpZ2h0IHdpdGggdGhpcyBzaW1wbGUgb3ZlcnJpZGUuPC9wPlxcbjxwcmU+PGNvZGU+LmJ1bG1hbGx5LW1lc3NhZ2Uge1xcblxcbiAgICAubWVzc2FnZS1oZWFkZXIge1xcbiAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgaGVhZGluZyB3ZWlnaHQuXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRtZXNzYWdlLWhlYWRlci13ZWlnaHQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG59PC9jb2RlPjwvcHJlPlwiOyIsIi8qKlxuICogTW9kYWwgSlMgY29udHJvbGxlci5cbiAqL1xuXG4vKipcbiAqIENsYXNzIE1vZGFsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBydW4gd2hlbiBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY2xhc3MgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVGhpcyBtdXN0IGJlIHNldCBmb3IgZWFjaCBjb21wb25lbnQuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRhdGlvbiA9IHJlcXVpcmUoICcuL3JlYWRtZS5tZCcgKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9jUmVhZHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSBkb20gZWxlbWVudHMgZm9yIHVzZSBpbiB0aGUgY2xhc3MncyBtZXRob2RzXG4gICAgICovXG4gICAgY2FjaGUoKSB7XG4gICAgICAgIHRoaXMucm9vdEVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB0aGlzLiRtb2RhbHMgPSBbXTtcbiAgICAgICAgdGhpcy4kbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5tb2RhbC1idXR0b24nICk7XG4gICAgICAgIHRoaXMuJG1vZGFsQ2xvc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5tb2RhbC1iYWNrZ3JvdW5kLCAubW9kYWwtY2xvc2UsIC5tb2RhbC1jYXJkLWhlYWQgLmRlbGV0ZSwgLm1vZGFsLWNhcmQtZm9vdCAuYnV0dG9uLCAubW9kYWwtY2xvc2UtYnV0dG9uJyApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgZXZlbnRzKCkge1xuICAgICAgICAvLyBCaW5kIGhhbmRsZXJzIHRvIGVhY2ggbW9kYWwgb3BlbiBidXR0b24uXG4gICAgICAgIGlmICggdGhpcy4kbW9kYWxCdXR0b25zLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbEJ1dHRvbnMuZm9yRWFjaCggKCBidXR0b24gKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggYnV0dG9uLmdldEF0dHJpYnV0ZSggJ2FyaWEtY29udHJvbHMnICkgKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuaW5nQnV0dG9uID0gYnV0dG9uO1xuICAgICAgICAgICAgICAgIG1vZGFsLmlzT3BlbmVkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbHMucHVzaCggbW9kYWwgKTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCggbW9kYWwgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBcmlhRXhwYW5kZWQoIGJ1dHRvbiApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgaGFuZGxlcnMgdG8gZWFjaCBtb2RhbCBjbG9zZSBidXR0b24uXG4gICAgICAgIGlmICggdGhpcy4kbW9kYWxDbG9zZXMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsQ2xvc2VzLmZvckVhY2goICggYnV0dG9uICkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbHMoKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIG1vZGFsIGNsb3NpbmcgaGFuZGxlciB0byBFU0Mga2V5LlxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsICggZXZlbnQgKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgaWYgKCBlLmtleUNvZGUgPT09IDI3ICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFuZGxlcyBvcGVuaW5nIHRoZSBtb2RhbCB0aGF0IHdhcyBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKiB0aGUgY2xpY2tlZCBtb2RhbCBvcGVuaW5nIGJ1dHRvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbW9kYWwgVGhlIG1vZGFsIHRoYXQgaXMgb3BlbmVkLlxuICAgICAqL1xuICAgIG9wZW5Nb2RhbCggbW9kYWwgKSB7XG4gICAgICAgIHRoaXMucm9vdEVsLmNsYXNzTGlzdC5hZGQoICdpcy1jbGlwcGVkJyApO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCAnaXMtYWN0aXZlJyApO1xuICAgICAgICBtb2RhbC5pc09wZW5lZCA9IDE7XG5cbiAgICAgICAgLy8gQ29sbGVjdCBlYWNoIGZvY3VzYWJsZSBlbGVtZW50IGluc2lkZSB0aGUgbW9kYWwuXG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCggJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBbdGFiaW5kZXg9XCIwXCJdJyApO1xuXG4gICAgICAgIC8vIFNldCBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgZWxlbWVudCBhcyBjbGFzcyBwYXJhbWV0ZXJzLlxuICAgICAgICAvLyBTZXQgZm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgICAgICBpZiAoIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCApIHtcbiAgICAgICAgICAgIG1vZGFsLmZvY3VzYWJsZUVsZW1lbnRzID0gZm9jdXNhYmxlRWxlbWVudHM7XG4gICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5maXJzdCA9IGZvY3VzYWJsZUVsZW1lbnRzWyAwIF07XG4gICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5sYXN0ID0gZm9jdXNhYmxlRWxlbWVudHNbIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDEgXTtcbiAgICAgICAgICAgIG1vZGFsLmZvY3VzYWJsZUVsZW1lbnRzLmZpcnN0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIC8vIEJpbmQgbW9kYWwgZm9jdXMgbG9vcCBoYW5kbGVyIHRvIGRvY3VtZW50IHdoZW4gbW9kYWwgaXMgb3BlbmVkLlxuICAgICAgICAgICAgLy8gSWYgcHJlc3NlZCBrZXkgd2FzICdUYWInLCBjYWxsIHRhYiBoYW5kbGluZyBtZXRob2QuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsICggZXZlbnQgKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgICAgICBpZiAoIGUua2V5Q29kZSA9PT0gOSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RhbFRhYmJpbmcoIGUsIG1vZGFsICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbG9zZXMgYWxsIG1vZGFscyBhbmQgc2V0cyBmb2N1cyBiYWNrIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIHVzZWRcbiAgICAgKiB0byBvcGVuIHRoZSBjdXJyZW50IHZpc2libGUgbW9kYWwuXG4gICAgICovXG4gICAgY2xvc2VNb2RhbHMoKSB7XG4gICAgICAgIHRoaXMucm9vdEVsLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1jbGlwcGVkJyApO1xuICAgICAgICB0aGlzLiRtb2RhbHMuZm9yRWFjaCggKCBtb2RhbCApID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1hY3RpdmUnICk7XG4gICAgICAgICAgICBpZiAoIG1vZGFsLmlzT3BlbmVkICkge1xuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW5pbmdCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFyaWFFeHBhbmRlZCggbW9kYWwub3BlbmluZ0J1dHRvbiApO1xuICAgICAgICAgICAgICAgIG1vZGFsLmlzT3BlbmVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFuZGxlcyBUYWIga2V5IHByZXNzZXMgYW5kIGxvb3BzIGZvY3VzIGJhY2sgdG8gdGhlIGZpcnN0XG4gICAgICogZm9jdXNhYmxlIGVsZW1lbnQgaW5zaWRlIHRoZSBtb2RhbC4gSWYgYSB1c2VyIG5hdmlnYXRlcyBiYWNrd2FyZHNcbiAgICAgKiB1c2luZyBzaGlmdCArIHRhYiwgdGhlIGxvb3AgaXMgaGFuZGxlZCBwcm9wZXJseSB0byB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtldmVudH0gZSBLZXkgcHJlc3MgZXZlbnQuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBtb2RhbCBUaGUgbW9kYWwgdGhhdCBpcyBjdXJyZW50bHkgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBoYW5kbGVNb2RhbFRhYmJpbmcoIGUsIG1vZGFsICkge1xuICAgICAgICAvLyBJZiBzaGlmdCArIHRhYiBwdXNoZWQuXG4gICAgICAgIGlmICggZS5zaGlmdEtleSApIHtcbiAgICAgICAgICAgIC8vIEZvY3VzIHRoZSBsYXN0IGVsZW1lbnQgaWYgZm9jdXMgd2FzIG9uIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5maXJzdCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbW9kYWwuZm9jdXNhYmxlRWxlbWVudHMubGFzdC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5sYXN0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbW9kYWwuZm9jdXNhYmxlRWxlbWVudHMuZmlyc3QuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdG9nZ2xlcidzIGFyaWEtZXhwYW5kZWQgY3VycmVudCBzdGF0ZSBhbmQgc2V0IGEgbmV3IG9wcG9zaXRlIHN0YXRlIHRvIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdG9nZ2xlciBUaGUgdG9nZ2xlciBlbGVtZW50LlxuICAgICAqL1xuICAgIHRvZ2dsZUFyaWFFeHBhbmRlZCggdG9nZ2xlciApIHtcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkU3RhdGUgPSB0b2dnbGVyLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgPT09ICdmYWxzZScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGFyaWFFeHBhbmRlZFN0YXRlICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxuICAgICAqL1xuICAgIGRvY1JlYWR5KCkge1xuICAgICAgICB0aGlzLmNhY2hlKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMiBpZD1cXFwibW9kYWwtY29tcG9uZW50XFxcIj5Nb2RhbCBjb21wb25lbnQ8L2gyPlxcbjxwPlRoaXMgY29tcG9uZW50IHByb3ZpZGVzIHRoZSBuZWVkZWQgSmF2YVNjcmlwdCBmdW5jdGlvbmFsaXRpZXMgZm9yIHRoZSA8YSBocmVmPVxcXCJodHRwczovL2J1bG1hLmlvL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy9tb2RhbC9cXFwiPkJ1bG1hIG1vZGFsPC9hPi4gQWNjZXNzaWJpbGl0eSBpcyBpbXBsZW1lbnRlZCB3aXRoIEphdmFTY3JpcHQgbWFraW5nIHRoZSBET00gYXMgc2ltcGxlIGFzIHBvc3NpYmxlLiBUaGVyZSBhcmUgdHdvIG1vZGFsIGVsZW1lbnRzIG9uIHRoaXMgcGFnZSB0byBkZW1vbnN0cmF0ZSB0aGF0IHlvdSBjYW4gaGF2ZSBtdWx0aXBsZSBtb2RhbHMgb24gdGhlIHNhbWUgcGFnZS4gQWxsIEJ1bG1hIG1vZGFsIHN0eWxlcyBhcmUgc3VwcG9ydGVkLjwvcD5cXG48aDMgaWQ9XFxcInRlc3RzLWFuZC1hY2Nlc3NpYmlsaXR5LXN0YXR1c1xcXCI+VGVzdHMgYW5kIGFjY2Vzc2liaWxpdHkgc3RhdHVzPC9oMz5cXG48cD5UaGUgYWNjZXNzaWJpbGl0eS1yZWFkeSBzdGF0dXMgb2YgdGhpcyBjb21wb25lbnQgaXM6IHVudGVzdGVkLjwvcD5cXG48dWw+XFxuPGxpPjxpbnB1dCBjaGVja2VkPVxcXCJcXFwiIGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gS2V5Ym9hcmQtb25seTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFZvaWNlT3ZlciAmYW1wOyBTYWZhcmkgKG1hY09TKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFZvaWNlT3ZlciAmYW1wOyBTYWZhcmkgKGlPUyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBWb2ljZU92ZXIgJmFtcDsgU2FmYXJpIChpUGFkT1MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVGFsa2JhY2sgJmFtcDsgQ2hyb21lIChBbmRyb2lkKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IE5hcnJhdG9yICZhbXA7IEVkZ2UgKFdpbmRvd3MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gTlZEQSAmYW1wOyBGaXJlZm94IChXaW5kb3dzKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFdpbmRvd3MgSGlnaCBDb250cmFzdCBtb2RlPC9saT5cXG48L3VsPlxcbjxoMyBpZD1cXFwiaHRtbFxcXCI+SFRNTDwvaDM+XFxuPHA+VGhlIEhUTUwgbWFya3VwIGlzIGZhaXJseSBzaW1wbGUuIFlvdSBuZWVkIHRvIGhhdmUgYSBidXR0b24gdGhhdCBjb250cm9scyBhIGNvcnJlc3BvbmRpbmcgbW9kYWwuIEluIHRoZSBtb2RhbCBvdmVybGF5IHlvdSBtYXkgd2FudCB0byBoYXZlIGEgY2xvc2luZyBidXR0b24gYWx0aG91Z2ggaXQgaXMgbm90IG5lY2Vzc2FyeS4gTW9kYWxzIGNhbiBhbHNvIGJlIGNsb3NlZCB3aXRoIEVTQyBhbmQgYnV0dG9ucyBpbnNpZGUgdGhlbSB3aXRoIDxzdHJvbmc+bW9kYWwtY2xvc2UtYnV0dG9uPC9zdHJvbmc+IGNsYXNzZXMuPC9wPlxcbjxoMyBpZD1cXFwicmVxdWlyZW1lbnRzXFxcIj5SZXF1aXJlbWVudHM8L2gzPlxcbjxwPlRoZSBtb2RhbCBjb250YWluZXJzIHNob3VsZCBiZSBwbGFjZWQgYXQgdGhlIGJvdHRvbSBvZiB5b3VyIHBhZ2UgbWFya3VwIHNvIHRoYXQgdGhlaXIgPHN0cm9uZz5hcmlhLXJvbGU9JnF1b3Q7bW9kYWwmcXVvdDs8L3N0cm9uZz4gYXR0cmlidXRlIHdvcmtzIHByb3Blcmx5LjwvcD5cXG48cHJlPjxjb2RlPiZsdDshLS0gQSBidXR0b24gdGhhdCBjb250cm9scyBvcGVuaW5nIHRoZSBmaXJzdCBtb2RhbCAtLSZndDtcXG5cXG4mbHQ7YnV0dG9uXFxuICAgIGNsYXNzPSZxdW90O21vZGFsLWJ1dHRvbiBidXR0b24gaXMtbGFyZ2UgaXMtaW5mbyZxdW90O1xcbiAgICBhcmlhLWV4cGFuZGVkPSZxdW90O2ZhbHNlJnF1b3Q7XFxuICAgIGFyaWEtY29udHJvbHM9JnF1b3Q7anMtYnVsbWFsbHktbW9kYWwtMSZxdW90OyZndDtcXG4gICAgICAgIE9wZW4gbW9kYWxcXG4mbHQ7L2J1dHRvbiZndDtcXG5cXG4mbHQ7IS0tIE1hcmt1cCBvZiB0aGUgZmlyc3QgbW9kYWwgLS0mZ3Q7XFxuXFxuJmx0O2RpdiByb2xlPSZxdW90O2RpYWxvZyZxdW90O1xcbiAgICBpZD0mcXVvdDtqcy1idWxtYWxseS1tb2RhbC0xJnF1b3Q7XFxuICAgIGNsYXNzPSZxdW90O21vZGFsJnF1b3Q7XFxuICAgIGFyaWEtbW9kYWw9JnF1b3Q7dHJ1ZSZxdW90O1xcbiAgICBhcmlhLWxhYmVsbGVkYnk9JnF1b3Q7anMtYnVsbWFsbHktbW9kYWwtMS10aXRsZSZxdW90OyZndDtcXG5cXG4gICAgJmx0O2RpdiBjbGFzcz0mcXVvdDttb2RhbC1iYWNrZ3JvdW5kJnF1b3Q7Jmd0OyZsdDsvZGl2Jmd0O1xcblxcbiAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O21vZGFsLWNvbnRlbnQgaGFzLWJhY2tncm91bmQtd2hpdGUmcXVvdDsmZ3Q7XFxuXFxuICAgICAgICAmbHQ7c2VjdGlvbiBjbGFzcz0mcXVvdDtzZWN0aW9uJnF1b3Q7Jmd0O1xcblxcbiAgICAgICAgICAgICZsdDtoMyBpZD0mcXVvdDtqcy1idWxtYWxseS1tb2RhbC0xLXRpdGxlJnF1b3Q7IGNsYXNzPSZxdW90O2g0IHRpdGxlJnF1b3Q7IHRhYmluZGV4PSZxdW90OzAmcXVvdDsmZ3Q7TW9kYWwgaGVhZGluZyZsdDsvaDMmZ3Q7XFxuXFxuICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtjb250ZW50JnF1b3Q7Jmd0O1xcblxcbiAgICAgICAgICAgICAgICAmbHQ7cCZndDtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciAmbHQ7YSBocmVmPSZxdW90OyZxdW90OyZndDthZGlwaXNpY2luZyBlbGl0Jmx0Oy9hJmd0Oy4gQXNwZXJuYXR1ciwgcXVpc3F1YW0gbW9sZXN0aWFzLiBRdWFlcmF0IG1vbGVzdGlhZSBuYW0sIGV4cGxpY2FibyBxdW8gbmlzaSBjb3Jwb3JpcyEgQmxhbmRpdGlpcyBxdWFtIHF1aWJ1c2RhbSwgZmFjaWxpcyBuaWhpbCAmbHQ7YSBocmVmPSZxdW90OyZxdW90OyZndDtvZGlvIG5pc2kgaXVzdG8mbHQ7L2EmZ3Q7IGlwc2EgbGFib3J1bSBuZXF1ZSBmdWdpdC4mbHQ7L3AmZ3Q7XFxuXFxuICAgICAgICAgICAgICAgICZsdDtoMyZndDtMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciZsdDsvaDMmZ3Q7XFxuXFxuICAgICAgICAgICAgICAgICZsdDtmaWd1cmUgY2xhc3M9JnF1b3Q7aW1hZ2UgaXMtbWFyZ2lubGVzcy1ob3Jpem9udGFsbHkmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7aW1nIHNyYz0mcXVvdDtodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTYwMHg5MDAucG5nP3RleHQ9QStzYW1wbGUraW1hZ2UmcXVvdDsgYWx0PSZxdW90OyZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgJmx0Oy9maWd1cmUmZ3Q7XFxuXFxuICAgICAgICAgICAgICAgICZsdDtwJmd0O0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVybmF0dXIsIHF1aXNxdWFtIG1vbGVzdGlhcy4gUXVhZXJhdCBtb2xlc3RpYWUgbmFtLCAmbHQ7YSBocmVmPSZxdW90OyZxdW90OyZndDtleHBsaWNhYm8gcXVvIG5pc2kgY29ycG9yaXMhIEJsYW5kaXRpaXMgcXVhbSBxdWlidXNkYW0sIGZhY2lsaXMgbmloaWwmbHQ7L2EmZ3Q7IG9kaW8gbmlzaSBpdXN0byBpcHNhIGxhYm9ydW0gbmVxdWUgZnVnaXQuJmx0Oy9wJmd0O1xcblxcbiAgICAgICAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPSZxdW90O2J1dHRvbiBtb2RhbC1jbG9zZS1idXR0b24gaXMtZGFuZ2VyIGlzLWxhcmdlJnF1b3Q7XFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSZxdW90O2pzLWJ1bG1hbGx5LW1vZGFsLTEmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICBDbG9zZSBtb2RhbFxcbiAgICAgICAgICAgICAgICAmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICAgICAmbHQ7L2RpdiZndDtcXG5cXG4gICAgICAgICZsdDsvc2VjdGlvbiZndDtcXG5cXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuXFxuICAgICZsdDtidXR0b24gY2xhc3M9JnF1b3Q7bW9kYWwtY2xvc2UgaXMtbGFyZ2UmcXVvdDtcXG4gICAgICAgIGFyaWEtbGFiZWw9JnF1b3Q7Y2xvc2UgbW9kYWwmcXVvdDtcXG4gICAgICAgIGFyaWEtY29udHJvbHM9JnF1b3Q7anMtYnVsbWFsbHktbW9kYWwtMSZxdW90OyZndDsmbHQ7L2J1dHRvbiZndDtcXG5cXG4mbHQ7L2RpdiZndDs8L2NvZGU+PC9wcmU+PGgzIGlkPVxcXCJzY3NzXFxcIj5TQ1NTPC9oMz5cXG48cD5UaGUgb25seSBzdHlsaW5nIGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIGZvY3VzIHN0eWxlIG9mIHRoZSBvdXRlciBtb2RhbCBjbG9zaW5nIGJ1dHRvbi48L3A+XFxuPHByZT48Y29kZT4ubW9kYWwtY2xvc2Uge1xcbiAgICAmYW1wOzpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiAkd2hpdGUgZG90dGVkIC4xMjVyZW07XFxuICAgIH1cXG59XFxuPC9jb2RlPjwvcHJlPjxoMyBpZD1cXFwiamF2YXNjcmlwdFxcXCI+SmF2YVNjcmlwdDwvaDM+XFxuPHA+QnVsbWFsbHkgdGFicyBpbXBsZW1lbnRzIHRoZSBXQUktQVJJQSA8YSBocmVmPVxcXCJodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyNkaWFsb2dfbW9kYWxcXFwiPm1vZGFsIGRlc2lnbiBwYXR0ZXJuPC9hPi4gSmF2YVNjcmlwdCBjb2RlIGlzIGJhc2VkIG9uIHRoZSBXQUktQVJJQSBleGFtcGxlIGZvciA8YSBocmVmPVxcXCJodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzL2V4YW1wbGVzL2RpYWxvZy1tb2RhbC9kaWFsb2cuaHRtbFxcXCI+YSBtb2RhbCBkaWFsb2c8L2E+LiBUaGUgaW1wbGVtZW50YXRpb24gcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBmZWF0dXJlczo8L3A+XFxuPHVsPlxcbjxsaT5Nb2RhbCBuYXZpZ2F0aW9uIGJ5IHByZXNzaW5nIHRoZSB0YWIga2V5LjwvbGk+XFxuPGxpPkZvY3VzaW5nIHRoZSBmaXJzdCBlbGVtZW50IGluc2lkZSBlYWNoIG9wZW5lZCBtb2RhbC48L2xpPlxcbjxsaT5Gb2N1cyBsb29waW5nLCBzbyB0aGF0IGZvY3VzYWJsZSBlbGVtZW50cyBpbnNpZGUgdGhlIG1vZGFsIGNhbiBiZSBlYXNpbHkgbmF2aWdhdGVkLjwvbGk+XFxuPGxpPlJldHVybmluZyBmb2N1cyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBlbGVtZW50IHRoYXQgb3BlbmVkIHRoZSBtb2RhbC48L2xpPlxcbjwvdWw+XFxuPHA+V2UgZXh0ZW5kZWQgdGhlIFdBSS1BUklBIGV4YW1wbGUgd2l0aCB0aGUgYWJpbGl0eSB0byBoYXZlIG11bHRpcGxlIG1vZGFsIGVsZW1lbnRzIG9uIHRoZSBzYW1lIHBhZ2UuIElmIHlvdSB3YW50IHRvIGhhdmUgbWFueSBtb2RhbHMgb24gb25lIHBhZ2UsIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGVhY2ggbW9kYWwgZ2V0cyBhIHVuaXF1ZSBpZCBhbmQgaXRzIG9wZW5pbmcgYW5kIGNsb3NpbmcgYnV0dG9ucyBtYXRjaCB0aGUgbW9kYWwgaWQgaW4gdGhlaXIgPHN0cm9uZz5hcmlhLWNvbnRyb2xzPC9zdHJvbmc+IGF0dHJpYnV0ZXMuPC9wPlxcbjxwcmU+PGNvZGU+LyoqXFxuICogTW9kYWwgSlMgY29udHJvbGxlci5cXG4gKi9cXG5cXG4vKipcXG4gKiBDbGFzcyBNb2RhbFxcbiAqL1xcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcXG4gICAgLyoqXFxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHJ1biB3aGVuIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjbGFzcyBpcyBjcmVhdGVkLlxcbiAgICAgKi9cXG4gICAgY29uc3RydWN0b3IoKSB7XFxuICAgICAgICAvLyBUaGlzIG11c3QgYmUgc2V0IGZvciBlYWNoIGNvbXBvbmVudC5cXG4gICAgICAgIHRoaXMuZG9jdW1lbnRhdGlvbiA9IHJlcXVpcmUoICYjMzk7Li9tb2RhbC5tZCYjMzk7ICk7XFxuXFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxcbiAgICAgICAgICAgICYjMzk7RE9NQ29udGVudExvYWRlZCYjMzk7LFxcbiAgICAgICAgICAgICgpID0mZ3Q7IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kb2NSZWFkeSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIENhY2hlIGRvbSBlbGVtZW50cyBmb3IgdXNlIGluIHRoZSBjbGFzcyYjMzk7cyBtZXRob2RzXFxuICAgICAqL1xcbiAgICBjYWNoZSgpIHtcXG4gICAgICAgIHRoaXMucm9vdEVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xcbiAgICAgICAgdGhpcy4kbW9kYWxzID0gW107XFxuICAgICAgICB0aGlzLiRtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAmIzM5Oy5tb2RhbC1idXR0b24mIzM5OyApO1xcbiAgICAgICAgdGhpcy4kbW9kYWxDbG9zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAmIzM5Oy5tb2RhbC1iYWNrZ3JvdW5kLCAubW9kYWwtY2xvc2UsIC5tb2RhbC1jYXJkLWhlYWQgLmRlbGV0ZSwgLm1vZGFsLWNhcmQtZm9vdCAuYnV0dG9uLCAubW9kYWwtY2xvc2UtYnV0dG9uJiMzOTsgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycy5cXG4gICAgICovXFxuICAgIGV2ZW50cygpIHtcXG4gICAgICAgIC8vIEJpbmQgaGFuZGxlcnMgdG8gZWFjaCBtb2RhbCBvcGVuIGJ1dHRvbi5cXG4gICAgICAgIGlmICggdGhpcy4kbW9kYWxCdXR0b25zLmxlbmd0aCAmZ3Q7IDAgKSB7XFxuICAgICAgICAgICAgdGhpcy4kbW9kYWxCdXR0b25zLmZvckVhY2goICggYnV0dG9uICkgPSZndDsge1xcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBidXR0b24uZ2V0QXR0cmlidXRlKCAmIzM5O2FyaWEtY29udHJvbHMmIzM5OyApICk7XFxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW5pbmdCdXR0b24gPSBidXR0b247XFxuICAgICAgICAgICAgICAgIG1vZGFsLmlzT3BlbmVkID0gMDtcXG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWxzLnB1c2goIG1vZGFsICk7XFxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAmIzM5O2NsaWNrJiMzOTssICgpID0mZ3Q7IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKCBtb2RhbCApO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBcmlhRXhwYW5kZWQoIGJ1dHRvbiApO1xcbiAgICAgICAgICAgICAgICB9ICk7XFxuICAgICAgICAgICAgfSApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLy8gQmluZCBoYW5kbGVycyB0byBlYWNoIG1vZGFsIGNsb3NlIGJ1dHRvbi5cXG4gICAgICAgIGlmICggdGhpcy4kbW9kYWxDbG9zZXMubGVuZ3RoICZndDsgMCApIHtcXG4gICAgICAgICAgICB0aGlzLiRtb2RhbENsb3Nlcy5mb3JFYWNoKCAoIGJ1dHRvbiApID0mZ3Q7IHtcXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICYjMzk7Y2xpY2smIzM5OywgKCkgPSZndDsge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFscygpO1xcbiAgICAgICAgICAgICAgICB9ICk7XFxuICAgICAgICAgICAgfSApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLy8gQmluZCBtb2RhbCBjbG9zaW5nIGhhbmRsZXIgdG8gRVNDIGtleS5cXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICYjMzk7a2V5ZG93biYjMzk7LCAoIGV2ZW50ICkgPSZndDsge1xcbiAgICAgICAgICAgIGNvbnN0IGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XFxuICAgICAgICAgICAgaWYgKCBlLmtleUNvZGUgPT09IDI3ICkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWxzKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSApO1xcbiAgICB9XFxuXFxuICAgIC8qKlxcbiAgICAgKiBUaGlzIGhhbmRsZXMgb3BlbmluZyB0aGUgbW9kYWwgdGhhdCB3YXMgYXNzb2NpYXRlZCB3aXRoXFxuICAgICAqIHRoZSBjbGlja2VkIG1vZGFsIG9wZW5pbmcgYnV0dG9uLlxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG1vZGFsIFRoZSBtb2RhbCB0aGF0IGlzIG9wZW5lZC5cXG4gICAgICovXFxuICAgIG9wZW5Nb2RhbCggbW9kYWwgKSB7XFxuICAgICAgICB0aGlzLnJvb3RFbC5jbGFzc0xpc3QuYWRkKCAmIzM5O2lzLWNsaXBwZWQmIzM5OyApO1xcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCggJiMzOTtpcy1hY3RpdmUmIzM5OyApO1xcbiAgICAgICAgbW9kYWwuaXNPcGVuZWQgPSAxO1xcblxcbiAgICAgICAgLy8gQ29sbGVjdCBlYWNoIGZvY3VzYWJsZSBlbGVtZW50IGluc2lkZSB0aGUgbW9kYWwuXFxuICAgICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoICYjMzk7YVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIFt0YWJpbmRleD0mcXVvdDswJnF1b3Q7XSYjMzk7ICk7XFxuXFxuICAgICAgICAvLyBTZXQgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQgYXMgY2xhc3MgcGFyYW1ldGVycy5cXG4gICAgICAgIC8vIFNldCBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXFxuICAgICAgICBpZiAoIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCApIHtcXG4gICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVFbGVtZW50cyA9IGZvY3VzYWJsZUVsZW1lbnRzO1xcbiAgICAgICAgICAgIG1vZGFsLmZvY3VzYWJsZUVsZW1lbnRzLmZpcnN0ID0gZm9jdXNhYmxlRWxlbWVudHNbIDAgXTtcXG4gICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5sYXN0ID0gZm9jdXNhYmxlRWxlbWVudHNbIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDEgXTtcXG4gICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5maXJzdC5mb2N1cygpO1xcblxcbiAgICAgICAgICAgIC8vIEJpbmQgbW9kYWwgZm9jdXMgbG9vcCBoYW5kbGVyIHRvIGRvY3VtZW50IHdoZW4gbW9kYWwgaXMgb3BlbmVkLlxcbiAgICAgICAgICAgIC8vIElmIHByZXNzZWQga2V5IHdhcyAmIzM5O1RhYiYjMzk7LCBjYWxsIHRhYiBoYW5kbGluZyBtZXRob2QuXFxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJiMzOTtrZXlkb3duJiMzOTssICggZXZlbnQgKSA9Jmd0OyB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XFxuICAgICAgICAgICAgICAgIGlmICggZS5rZXlDb2RlID09PSA5ICkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RhbFRhYmJpbmcoIGUsIG1vZGFsICk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9ICk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIFRoaXMgY2xvc2VzIGFsbCBtb2RhbHMgYW5kIHNldHMgZm9jdXMgYmFjayB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyB1c2VkXFxuICAgICAqIHRvIG9wZW4gdGhlIGN1cnJlbnQgdmlzaWJsZSBtb2RhbC5cXG4gICAgICovXFxuICAgIGNsb3NlTW9kYWxzKCkge1xcbiAgICAgICAgdGhpcy5yb290RWwuY2xhc3NMaXN0LnJlbW92ZSggJiMzOTtpcy1jbGlwcGVkJiMzOTsgKTtcXG4gICAgICAgIHRoaXMuJG1vZGFscy5mb3JFYWNoKCAoIG1vZGFsICkgPSZndDsge1xcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoICYjMzk7aXMtYWN0aXZlJiMzOTsgKTtcXG4gICAgICAgICAgICBpZiAoIG1vZGFsLmlzT3BlbmVkICkge1xcbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuaW5nQnV0dG9uLmZvY3VzKCk7XFxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQXJpYUV4cGFuZGVkKCBtb2RhbC5vcGVuaW5nQnV0dG9uICk7XFxuICAgICAgICAgICAgICAgIG1vZGFsLmlzT3BlbmVkID0gMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9ICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIFRoaXMgaGFuZGxlcyBUYWIga2V5IHByZXNzZXMgYW5kIGxvb3BzIGZvY3VzIGJhY2sgdG8gdGhlIGZpcnN0XFxuICAgICAqIGZvY3VzYWJsZSBlbGVtZW50IGluc2lkZSB0aGUgbW9kYWwuIElmIGEgdXNlciBuYXZpZ2F0ZXMgYmFja3dhcmRzXFxuICAgICAqIHVzaW5nIHNoaWZ0ICsgdGFiLCB0aGUgbG9vcCBpcyBoYW5kbGVkIHByb3Blcmx5IHRvIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7ZXZlbnR9IGUgS2V5IHByZXNzIGV2ZW50LlxcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG1vZGFsIFRoZSBtb2RhbCB0aGF0IGlzIGN1cnJlbnRseSB2aXNpYmxlLlxcbiAgICAgKi9cXG4gICAgaGFuZGxlTW9kYWxUYWJiaW5nKCBlLCBtb2RhbCApIHtcXG4gICAgICAgIC8vIElmIHNoaWZ0ICsgdGFiIHB1c2hlZC5cXG4gICAgICAgIGlmICggZS5zaGlmdEtleSApIHtcXG4gICAgICAgICAgICAvLyBGb2N1cyB0aGUgbGFzdCBlbGVtZW50IGlmIGZvY3VzIHdhcyBvbiB0aGUgZmlyc3QgZWxlbWVudC5cXG4gICAgICAgICAgICBpZiAoIG1vZGFsLmZvY3VzYWJsZUVsZW1lbnRzLmZpcnN0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICkge1xcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgICAgICAgICAgIG1vZGFsLmZvY3VzYWJsZUVsZW1lbnRzLmxhc3QuZm9jdXMoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2UgaWYgKCBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5sYXN0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICkge1xcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcXG4gICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVFbGVtZW50cy5maXJzdC5mb2N1cygpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8qKlxcbiAgICAgKiBHZXQgdGhlIHRvZ2dsZXImIzM5O3MgYXJpYS1leHBhbmRlZCBjdXJyZW50IHN0YXRlIGFuZCBzZXQgYSBuZXcgb3Bwb3NpdGUgc3RhdGUgdG8gaXQuXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvZ2dsZXIgVGhlIHRvZ2dsZXIgZWxlbWVudC5cXG4gICAgICovXFxuICAgIHRvZ2dsZUFyaWFFeHBhbmRlZCggdG9nZ2xlciApIHtcXG4gICAgICAgIGNvbnN0IGFyaWFFeHBhbmRlZFN0YXRlID0gdG9nZ2xlci5nZXRBdHRyaWJ1dGUoICYjMzk7YXJpYS1leHBhbmRlZCYjMzk7ICkgPT09ICYjMzk7ZmFsc2UmIzM5OyA/IHRydWUgOiBmYWxzZTtcXG4gICAgICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKCAmIzM5O2FyaWEtZXhwYW5kZWQmIzM5OywgYXJpYUV4cGFuZGVkU3RhdGUgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogUnVuIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxcbiAgICAgKi9cXG4gICAgZG9jUmVhZHkoKSB7XFxuICAgICAgICB0aGlzLmNhY2hlKCk7XFxuICAgICAgICB0aGlzLmV2ZW50cygpO1xcbiAgICB9XFxufTwvY29kZT48L3ByZT5cIjsiLCIvKipcbiAqIE5hdmJhciBKUyBjb250cm9sbGVyLlxuICovXG5cbi8qKlxuICogQ2xhc3MgTmF2YmFyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciB7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgcnVuIHdoZW4gYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzZXQgZm9yIGVhY2ggY29tcG9uZW50LlxuICAgICAgICB0aGlzLmRvY3VtZW50YXRpb24gPSByZXF1aXJlKCAnLi9yZWFkbWUubWQnICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY1JlYWR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgZG9tIGVsZW1lbnRzIGZvciB1c2UgaW4gdGhlIGNsYXNzJ3MgbWV0aG9kc1xuICAgICAqL1xuICAgIGNhY2hlKCkge1xuICAgICAgICB0aGlzLm5hdmJhckJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnanMtbmF2YmFyLWJ1cmdlcicgKTtcbiAgICAgICAgdGhpcy5uYXZiYXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdqcy1uYXZiYXItbWVudScgKTtcbiAgICAgICAgaWYgKCB0aGlzLm5hdmJhck1lbnUgKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlcnMgPSB0aGlzLm5hdmJhck1lbnUucXVlcnlTZWxlY3RvckFsbCggJy5kcm9wZG93bi10b2dnbGVyJyApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKi9cbiAgICBldmVudHMoKSB7XG4gICAgICAgIGlmICggdGhpcy5uYXZiYXJCdXJnZXIgKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmJhckJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLmRyb3Bkb3duVG9nZ2xlcnMgKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmRyb3Bkb3duVG9nZ2xlcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blRvZ2dsZXJzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBldmVudCApID0+IHRoaXMudG9nZ2xlRHJvcGRvd24oIGV2ZW50ICkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBtZW51IHRvZ2dsaW5nIHdoZW4gdGhlIG5hdmJhciBidXJnZXIgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICB0aGlzLm5hdmJhckJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtYWN0aXZlJyApO1xuICAgICAgICB0aGlzLm5hdmJhck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWFjdGl2ZScgKTtcbiAgICAgICAgdGhpcy50b2dnbGVBcmlhRXhwYW5kZWQoIHRoaXMubmF2YmFyQnVyZ2VyICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBhIGRyb3Bkb3duIG1lbnUgdmlzaWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEEgY2xpY2sgZXZlbnQuXG4gICAgICovXG4gICAgdG9nZ2xlRHJvcGRvd24oIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcklkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSggJ2FyaWEtY29udHJvbHMnICk7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IHRoaXMubmF2YmFyTWVudS5xdWVyeVNlbGVjdG9yKCBgIyR7IGNvbnRhaW5lcklkIH1gICk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVBcmlhRXhwYW5kZWQoIHRhcmdldCApO1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWhpZGRlbi10b3VjaCcgKTtcbiAgICAgICAgdGhpcy50b2dnbGVBbmNlc3RvckFjdGl2ZVN0YXRlKCB0YXJnZXQsICdoYXMtZHJvcGRvd24nICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSAnaXMtYWN0aXZlJyBzdGF0ZSBmb3IgYW4gYW5jZXN0b3Igb2YgYW4gZWxlbWVudFxuICAgICAqIHdpdGggdGhlIG1hdGNoaW5nIGNsYXNzIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjaGlsZCBBIGNoaWxkIGVsZW1lbnQgdG8gc3RhcnQgdGhlIHNlYXJjaCBmcm9tLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNsYXNzTmFtZSBBIHRhcmdldCBjbGFzcyBuYW1lIGZvciB0aGUgYW5jZXN0b3IuXG4gICAgICovXG4gICAgdG9nZ2xlQW5jZXN0b3JBY3RpdmVTdGF0ZSggY2hpbGQsIGNsYXNzTmFtZSApIHtcbiAgICAgICAgbGV0IGFuY2VzdG9yID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKCBhbmNlc3RvciApIHtcbiAgICAgICAgICAgIGlmICggYW5jZXN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGFzc05hbWUgKSApIHtcbiAgICAgICAgICAgICAgICBhbmNlc3Rvci5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtYWN0aXZlJyApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZSA/IGFuY2VzdG9yLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdG9nZ2xlcidzIGFyaWEtZXhwYW5kZWQgY3VycmVudCBzdGF0ZSBhbmQgc2V0IGEgbmV3IG9wcG9zaXRlIHN0YXRlIHRvIGl0LlxuICAgICAqIEFsc28gc2V0IHRoZSBvcGVuZWQgY29udGFpbmVyJ3MgYXJpYS1oaWRkZW4gc3RhdGUgdG8gdGhlIG5ldyB2YWx1ZSdzIG9wcG9zaXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdG9nZ2xlciBUaGUgdG9nZ2xlciBlbGVtZW50LlxuICAgICAqL1xuICAgIHRvZ2dsZUFyaWFFeHBhbmRlZCggdG9nZ2xlciApIHtcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkU3RhdGUgPSB0b2dnbGVyLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnICkgPT09ICdmYWxzZScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGFyaWFFeHBhbmRlZFN0YXRlICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxuICAgICAqL1xuICAgIGRvY1JlYWR5KCkge1xuICAgICAgICB0aGlzLmNhY2hlKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMiBpZD1cXFwibmF2YmFyLWNvbXBvbmVudFxcXCI+TmF2YmFyIGNvbXBvbmVudDwvaDI+XFxuPHA+VGhpcyBjb21wb25lbnQgcHJvdmlkZXMgYSBmdWxseSBmdW5jdGlvbmFsIG5hdmJhciBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIEJ1bG1hIG5hdmJhciBjb21wb25lbnQuPC9wPlxcbjxoMyBpZD1cXFwidGVzdHMtYW5kLWFjY2Vzc2liaWxpdHktc3RhdHVzXFxcIj5UZXN0cyBhbmQgYWNjZXNzaWJpbGl0eSBzdGF0dXM8L2gzPlxcbjxwPlRoZSBhY2Nlc3NpYmlsaXR5LXJlYWR5IHN0YXR1cyBvZiB0aGlzIGNvbXBvbmVudCBpczogdW50ZXN0ZWQuPC9wPlxcbjx1bD5cXG48bGk+PGlucHV0IGNoZWNrZWQ9XFxcIlxcXCIgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBLZXlib2FyZC1vbmx5PC9saT5cXG48bGk+PGlucHV0IGNoZWNrZWQ9XFxcIlxcXCIgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBWb2ljZU92ZXIgJmFtcDsgU2FmYXJpIChtYWNPUyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBWb2ljZU92ZXIgJmFtcDsgU2FmYXJpIChpT1MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVm9pY2VPdmVyICZhbXA7IFNhZmFyaSAoaVBhZE9TKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFRhbGtiYWNrICZhbXA7IENocm9tZSAoQW5kcm9pZCk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBOYXJyYXRvciAmYW1wOyBFZGdlIChXaW5kb3dzKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IE5WREEgJmFtcDsgRmlyZWZveCAoV2luZG93cyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZTwvbGk+XFxuPC91bD5cXG48aDMgaWQ9XFxcImh0bWxcXFwiPkhUTUw8L2gzPlxcbjxwPlRoZSBCdWxtYWxseSBuYXZiYXIgZm9sbG93cyB0aGUgQnVsbWEgbmF2YmFyIG1hcmt1cCB3aXRoIHNvbWUgZXhjZXB0aW9ucy4gSG92ZXJhYmxlIGRyb3Bkb3ducyBhcmUgbm90IGFjY2Vzc2libGUsIHRoYXQgaXMgd2h5IHdlIGRvIG5vdCBzdXBwb3J0IHRoZW0uIEluc3RlYWQsIHdlIHByb3ZpZGUgYW4gYWNjZXNzaWJsZSBtYXJrdXAgZm9yIGNvbnRyb2xsaW5nIGEgZHJvcGRvd24gbWVudSB3aXRoaW4gdGhlIG5hdmJhci48L3A+XFxuPHA+VGhlIEJ1bG1hIGRvY3VtZW50YXRpb24gdXNlcyBhIGxpbmsgYXMgdGhlIGRyb3Bkb3duIHRvZ2dsZXIuIFRoaXMgaXMgYmFkIHByYWN0aWNlLCBpdCBzaG91bGQgYmUgYSBidXR0b24uIEJ1bG1hbGx5IGRyb3Bkb3duIHRvZ2dsZXIgY2FuIGJlIGFuIGFjdHVhbCBsaW5rIGl0c2VsZi4gVGhpcyBpcyBkb25lIGJ5IGFkZGluZyBhIGNvbnRhaW5lciB0aGF0IGhvbGRzIHRoZSBsaW5rIGFuZCBhIGJ1dHRvbiBmb3IgdG9nZ2xpbmcgdGhlIGRyb3Bkb3duIG1lbnUuIFRoaXMgbWFrZXMgdGhlIGxpbmsgYWNjZXNzaWJsZSBhbmQgdXNlcyBzZW1hbnRpYyBIVE1MIGVsZW1lbnQgZm9yIHRoZSB0b2dnbGVyOiBhIGJ1dHRvbi4gVGhlIGJ1dHRvbiBoYXMgYSBzY3JlZW4gcmVhZGVyIG9ubHkgdGV4dCBhbmQgYSBkb3duIGFycm93IGZvciBzaWdodGVkIHVzYWdlLjwvcD5cXG48cHJlPjxjb2RlPiZsdDtuYXYgY2xhc3M9JnF1b3Q7bmF2YmFyIGJ1bG1hbGx5LW5hdmJhciZxdW90OyByb2xlPSZxdW90O25hdmlnYXRpb24mcXVvdDsgYXJpYS1sYWJlbD0mcXVvdDttYWluIG5hdmlnYXRpb24mcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7bmF2YmFyLWJyYW5kJnF1b3Q7Jmd0O1xcbiAgICAgICAgJmx0O2EgY2xhc3M9JnF1b3Q7bmF2YmFyLWl0ZW0mcXVvdDsgaHJlZj0mcXVvdDsjJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDtzcGFuIGNsYXNzPSZxdW90O2lzLXNyLW9ubHkmcXVvdDsmZ3Q7SG9tZSZsdDsvc3BhbiZndDtcXG4gICAgICAgICAgICAmbHQ7aW1nIHNyYz0mcXVvdDtodHRwczovL2J1bG1hLmlvL2ltYWdlcy9idWxtYS1sb2dvLnBuZyZxdW90OyB3aWR0aD0mcXVvdDsxMTImcXVvdDsgaGVpZ2h0PSZxdW90OzI4JnF1b3Q7IGFyaWEtaGlkZGVuPXRydWUmZ3Q7XFxuICAgICAgICAmbHQ7L2EmZ3Q7XFxuXFxuICAgICAgICAmbHQ7YnV0dG9uXFxuICAgICAgICAgICAgaWQ9JnF1b3Q7anMtbmF2YmFyLWJ1cmdlciZxdW90O1xcbiAgICAgICAgICAgIGNsYXNzPSZxdW90O25hdmJhci1idXJnZXIgYnVyZ2VyJnF1b3Q7XFxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0mcXVvdDtmYWxzZSZxdW90O1xcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9JnF1b3Q7T3BlbiBtZW51JnF1b3Q7XFxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0mcXVvdDtmYWxzZSZxdW90O1xcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9JnF1b3Q7anMtbWVudSZxdW90OyZndDtcXG4gICAgICAgICAgICAmbHQ7c3BhbiBhcmlhLWhpZGRlbj0mcXVvdDt0cnVlJnF1b3Q7Jmd0OyZsdDsvc3BhbiZndDtcXG4gICAgICAgICAgICAmbHQ7c3BhbiBhcmlhLWhpZGRlbj0mcXVvdDt0cnVlJnF1b3Q7Jmd0OyZsdDsvc3BhbiZndDtcXG4gICAgICAgICAgICAmbHQ7c3BhbiBhcmlhLWhpZGRlbj0mcXVvdDt0cnVlJnF1b3Q7Jmd0OyZsdDsvc3BhbiZndDtcXG4gICAgICAgICZsdDsvYnV0dG9uJmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG5cXG4gICAgJmx0O2RpdiBpZD0mcXVvdDtqcy1uYXZiYXItbWVudSZxdW90OyBjbGFzcz0mcXVvdDtuYXZiYXItbWVudSZxdW90OyZndDtcXG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7bmF2YmFyLXN0YXJ0JnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDthIGNsYXNzPSZxdW90O25hdmJhci1pdGVtJnF1b3Q7IGhyZWY9JnF1b3Q7IyZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgSG9tZVxcbiAgICAgICAgICAgICZsdDsvYSZndDtcXG5cXG4gICAgICAgICAgICAmbHQ7YSBjbGFzcz0mcXVvdDtuYXZiYXItaXRlbSZxdW90OyBocmVmPSZxdW90OyMmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cXG4gICAgICAgICAgICAmbHQ7L2EmZ3Q7XFxuXFxuICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gbGV2ZWwmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7bmF2YmFyLWRyb3Bkb3duLWNvbnRyb2wmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7IS0tIFRoZSBsaW5rIGlzIGNsaWNrYWJsZS4gLS0mZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7YSBjbGFzcz0mcXVvdDtuYXZiYXItbGluayBpcy1hcnJvd2xlc3MmcXVvdDsgaHJlZj0mcXVvdDsjJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vcmVcXG4gICAgICAgICAgICAgICAgICAgICZsdDsvYSZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDshLS0gVGhpcyBidXR0b24gaW1wbGVtZW50cyB0aGUgZHJvcGRvd24gdG9nZ2xlci4gLS0mZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7YnV0dG9uIGNsYXNzPSZxdW90O2Ryb3Bkb3duLXRvZ2dsZXIgaWNvbiZxdW90OyBhcmlhLWV4cGFuZGVkPWZhbHNlIGFyaWEtY29udHJvbHM9JnF1b3Q7anMtbmF2YmFyLWRyb3Bkb3duLTEmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O3NwYW4gY2xhc3M9JnF1b3Q7aXMtc3Itb25seSZxdW90OyZndDtPcGVuIG1lbnUmbHQ7L3NwYW4mZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O2kgY2xhc3M9JnF1b3Q7YXJyb3cmcXVvdDsgYXJpYS1oaWRkZW49JnF1b3Q7dHJ1ZSZxdW90OyZndDsmbHQ7L2kmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7L2J1dHRvbiZndDtcXG4gICAgICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuXFxuICAgICAgICAgICAgICAgICZsdDshLS1cXG4gICAgICAgICAgICAgICAgICAgIEJ1bG1hIGRvZXMgbm90IGhpZGUgZHJvcGRvd24gbWVudSBvbiB0b3VjaC5cXG4gICAgICAgICAgICAgICAgICAgIFdlIGhpZGUgaXQgaGVyZSB3aXRoIHRoZSBtb2RpZmllciBjbGFzcy5cXG4gICAgICAgICAgICAgICAgICAgIFRvZ2dsaW5nIGlzIGhhbmRsZWQgd2l0aCBKUy5cXG4gICAgICAgICAgICAgICAgLS0mZ3Q7XFxuICAgICAgICAgICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7bmF2YmFyLWRyb3Bkb3duIGlzLWhpZGRlbi10b3VjaCZxdW90OyBpZD0mcXVvdDtqcy1uYXZiYXItZHJvcGRvd24tMSZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDthIGNsYXNzPSZxdW90O25hdmJhci1pdGVtJnF1b3Q7IGhyZWY9JnF1b3Q7IyZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxcbiAgICAgICAgICAgICAgICAgICAgJmx0Oy9hJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0O2EgY2xhc3M9JnF1b3Q7bmF2YmFyLWl0ZW0mcXVvdDsgaHJlZj0mcXVvdDsjJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIEpvYnNcXG4gICAgICAgICAgICAgICAgICAgICZsdDsvYSZndDtcXG4gICAgICAgICAgICAgICAgICAgICZsdDthIGNsYXNzPSZxdW90O25hdmJhci1pdGVtJnF1b3Q7IGhyZWY9JnF1b3Q7IyZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7L2EmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7aHIgY2xhc3M9JnF1b3Q7bmF2YmFyLWRpdmlkZXImcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAmbHQ7YSBjbGFzcz0mcXVvdDtuYXZiYXItaXRlbSZxdW90OyBocmVmPSZxdW90OyMmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0IGFuIGlzc3VlXFxuICAgICAgICAgICAgICAgICAgICAmbHQ7L2EmZ3Q7XFxuICAgICAgICAgICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuXFxuICAgICAgICAmbHQ7ZGl2IGNsYXNzPSZxdW90O25hdmJhci1lbmQmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtuYXZiYXItaXRlbSZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgJmx0O2RpdiBjbGFzcz0mcXVvdDtidXR0b25zJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0O2EgY2xhc3M9JnF1b3Q7YnV0dG9uIGlzLXByaW1hcnkmcXVvdDsgaHJlZj0mcXVvdDsjJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICZsdDtzdHJvbmcmZ3Q7U2lnbiB1cCZsdDsvc3Ryb25nJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0Oy9hJmd0O1xcbiAgICAgICAgICAgICAgICAgICAgJmx0O2EgY2xhc3M9JnF1b3Q7YnV0dG9uIGlzLWxpZ2h0JnF1b3Q7IGhyZWY9JnF1b3Q7IyZxdW90OyZndDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW5cXG4gICAgICAgICAgICAgICAgICAgICZsdDsvYSZndDtcXG4gICAgICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuJmx0Oy9uYXYmZ3Q7PC9jb2RlPjwvcHJlPjxoMyBpZD1cXFwiamF2YXNjcmlwdFxcXCI+SmF2YVNjcmlwdDwvaDM+XFxuPHA+VGhpcyBKUyBpbXBsZW1lbnRhdGlvbiBpcyB3cml0dGVuIGluIEVTNiBhbmQgdXNlcyBWYW5pbGxhSlMgdG8gY29udHJvbCB0aGUgc3RhdGVzIGluIHRoZSBET00uIFlvdSBtYXkgdXNlIGl0IGFzIGl0IGlzIGFuZCB1c2UgPGEgaHJlZj1cXFwiaHR0cHM6Ly9iYWJlbGpzLmlvL1xcXCI+QmFiZWw8L2E+IHRvIG1ha2UgaXQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aCBvbGRlciBicm93c2Vycy4gSWYgeW91IGRvIG5vdCBoYXZlIEJhYmVsIGluIHlvdXIgZW52aXJvbm1lbnQsIGl0IHNob3VsZCBiZSBwcmV0dHkgc3RyYWlnaHRmb3J3YXJkIHRvIGNvcHkgdGhlIHJlcXVpcmVkIHBhcnRzIG9mIHRoaXMgY29kZS48L3A+XFxuPHByZT48Y29kZT4vKipcXG4gKiBDbGFzcyBOYXZiYXJcXG4gKi9cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIge1xcbiAgICAvKipcXG4gICAgICogVGhpcyBtZXRob2QgaXMgcnVuIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgbW9kdWxlIGlzIGltcG9ydGVkLFxcbiAgICAgKiBiZWNhdXNlIGl0IGV4cG9ydHMgYSBuZXcgaW5zdGFuY2Ugb2YgaXRzZWxmLlxcbiAgICAgKi9cXG4gICAgY29uc3RydWN0b3IoKSB7XFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxcbiAgICAgICAgICAgICYjMzk7RE9NQ29udGVudExvYWRlZCYjMzk7LFxcbiAgICAgICAgICAgICgpID0mZ3Q7IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kb2NSZWFkeSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIENhY2hlIGRvbSBlbGVtZW50cyBmb3IgdXNlIGluIHRoZSBjbGFzcyYjMzk7cyBtZXRob2RzXFxuICAgICAqL1xcbiAgICBjYWNoZSgpIHtcXG4gICAgICAgIHRoaXMubmF2YmFyQnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICYjMzk7anMtbmF2YmFyLWJ1cmdlciYjMzk7ICk7XFxuICAgICAgICB0aGlzLm5hdmJhck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJiMzOTtqcy1uYXZiYXItbWVudSYjMzk7ICk7XFxuICAgICAgICBpZiAoIHRoaXMubmF2YmFyTWVudSApIHtcXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlcnMgPSB0aGlzLm5hdmJhck1lbnUucXVlcnlTZWxlY3RvckFsbCggJiMzOTsuZHJvcGRvd24tdG9nZ2xlciYjMzk7ICk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMuXFxuICAgICAqL1xcbiAgICBldmVudHMoKSB7XFxuICAgICAgICBpZiAoIHRoaXMubmF2YmFyQnVyZ2VyICkge1xcbiAgICAgICAgICAgIHRoaXMubmF2YmFyQnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoICYjMzk7Y2xpY2smIzM5OywgKCkgPSZndDsgdGhpcy50b2dnbGVNZW51KCkgKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICggdGhpcy5kcm9wZG93blRvZ2dsZXJzICkge1xcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSAmbHQ7IHRoaXMuZHJvcGRvd25Ub2dnbGVycy5sZW5ndGg7IGkrKyApIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blRvZ2dsZXJzWyBpIF0uYWRkRXZlbnRMaXN0ZW5lciggJiMzOTtjbGljayYjMzk7LCAoIGV2ZW50ICkgPSZndDsgdGhpcy50b2dnbGVEcm9wZG93biggZXZlbnQgKSApO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogSGFuZGxlIG1lbnUgdG9nZ2xpbmcgd2hlbiB0aGUgbmF2YmFyIGJ1cmdlciBpcyBjbGlja2VkLlxcbiAgICAgKi9cXG4gICAgdG9nZ2xlTWVudSgpIHtcXG4gICAgICAgIHRoaXMubmF2YmFyQnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoICYjMzk7aXMtYWN0aXZlJiMzOTsgKTtcXG4gICAgICAgIHRoaXMubmF2YmFyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCAmIzM5O2lzLWFjdGl2ZSYjMzk7ICk7XFxuICAgICAgICB0aGlzLnRvZ2dsZUFyaWFFeHBhbmRlZCggdGhpcy5uYXZiYXJCdXJnZXIgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogVG9nZ2xlcyBhIGRyb3Bkb3duIG1lbnUgdmlzaWJpbGl0eS5cXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgQSBjbGljayBldmVudC5cXG4gICAgICovXFxuICAgIHRvZ2dsZURyb3Bkb3duKCBldmVudCApIHtcXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcklkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSggJiMzOTthcmlhLWNvbnRyb2xzJiMzOTsgKTtcXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IHRoaXMubmF2YmFyTWVudS5xdWVyeVNlbGVjdG9yKCBgIyR7IGNvbnRhaW5lcklkIH1gIFxcdTAwMWQpO1xcblxcbiAgICAgICAgdGhpcy50b2dnbGVBcmlhRXhwYW5kZWQoIHRhcmdldCApO1xcbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC50b2dnbGUoICYjMzk7aXMtaGlkZGVuLXRvdWNoJiMzOTsgKTtcXG4gICAgICAgIHRoaXMudG9nZ2xlQW5jZXN0b3JBY3RpdmVTdGF0ZSggdGFyZ2V0LCAmIzM5O2hhcy1kcm9wZG93biYjMzk7ICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIFNldCB0aGUgJiMzOTtpcy1hY3RpdmUmIzM5OyBzdGF0ZSBmb3IgYW4gYW5jZXN0b3Igb2YgYW4gZWxlbWVudFxcbiAgICAgKiB3aXRoIHRoZSBtYXRjaGluZyBjbGFzcyBuYW1lLlxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjaGlsZCBBIGNoaWxkIGVsZW1lbnQgdG8gc3RhcnQgdGhlIHNlYXJjaCBmcm9tLlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjbGFzc05hbWUgQSB0YXJnZXQgY2xhc3MgbmFtZSBmb3IgdGhlIGFuY2VzdG9yLlxcbiAgICAgKi9cXG4gICAgdG9nZ2xlQW5jZXN0b3JBY3RpdmVTdGF0ZSggY2hpbGQsIGNsYXNzTmFtZSApIHtcXG4gICAgICAgIGxldCBhbmNlc3RvciA9IGNoaWxkLnBhcmVudE5vZGU7XFxuICAgICAgICB3aGlsZSAoIGFuY2VzdG9yICkge1xcbiAgICAgICAgICAgIGlmICggYW5jZXN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGFzc05hbWUgKSApIHtcXG4gICAgICAgICAgICAgICAgYW5jZXN0b3IuY2xhc3NMaXN0LnRvZ2dsZSggJiMzOTtpcy1hY3RpdmUmIzM5OyApO1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZSA/IGFuY2VzdG9yLnBhcmVudE5vZGUgOiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogR2V0IHRoZSB0b2dnbGVyJiMzOTtzIGFyaWEtZXhwYW5kZWQgY3VycmVudCBzdGF0ZSBhbmQgc2V0IGEgbmV3IG9wcG9zaXRlIHN0YXRlIHRvIGl0LlxcbiAgICAgKiBBbHNvIHNldCB0aGUgb3BlbmVkIGNvbnRhaW5lciYjMzk7cyBhcmlhLWhpZGRlbiBzdGF0ZSB0byB0aGUgbmV3IHZhbHVlJiMzOTtzIG9wcG9zaXRlLlxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b2dnbGVyIFRoZSB0b2dnbGVyIGVsZW1lbnQuXFxuICAgICAqL1xcbiAgICB0b2dnbGVBcmlhRXhwYW5kZWQoIHRvZ2dsZXIgKSB7XFxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRTdGF0ZSA9IHRvZ2dsZXIuZ2V0QXR0cmlidXRlKCAmIzM5O2FyaWEtZXhwYW5kZWQmIzM5OyApID09PSAmIzM5O2ZhbHNlJiMzOTsgPyB0cnVlIDogZmFsc2U7XFxuICAgICAgICB0b2dnbGVyLnNldEF0dHJpYnV0ZSggJiMzOTthcmlhLWV4cGFuZGVkJiMzOTssIGFyaWFFeHBhbmRlZFN0YXRlICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIFJ1biB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeS5cXG4gICAgICovXFxuICAgIGRvY1JlYWR5KCkge1xcbiAgICAgICAgdGhpcy5jYWNoZSgpO1xcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+PGgzIGlkPVxcXCJzY3NzXFxcIj5TQ1NTPC9oMz5cXG48cD5XZSB1c2UgdGhlIGNvbXBvbmVudCBjbGFzcyBuYW1lIGFzIHRoZSBDU1Mgc2NvcGUgZm9yIG91ciBtb2RpZmljYXRpb25zIGZvciB0aGUgYmFzaWMgQnVsbWEgQ1NTIGNvZGUuIFdlIGtlZXAgdGhlIGNoYW5nZXMgdG8gYSBtaW5pbXVtIGFuZCBtb3N0IG9mIHRoaXMgY29kZSBpcyBhcHBsaWVkIHRvIHNlcGFyYXRlIHRoZSBkcm9wZG93biB0b2dnbGVyIGZyb20gdGhlIG1lbnUgbGluayBjb250YWluaW5nIGEgZHJvcGRvd24gbWVudS48L3A+XFxuPHByZT48Y29kZT4vLyBUaGlzIGZpbGUgY29udGFpbnMgc3R5bGVzIGZvciB0aGUgbmF2YmFyIGNvbXBvbmVudC5cXG4uYnVsbWFsbHktbmF2YmFyIHtcXG5cXG4gICAgLy8gUmVzZXQgYWxsIGJ1dHRvbnMgaW5zaWRlIGEgbmF2YmFyLlxcbiAgICBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgfVxcblxcbiAgICAubmF2YmFyLWJ1cmdlciB7XFxuICAgICAgICAmYW1wOzpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG5hdmJhci1kcm9wZG93bi1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhci1kcm9wZG93bi1jb250cm9sIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIC5uYXZiYXItbGluayB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG5cXG4gICAgICAgICAgICAmYW1wOzpob3ZlciB7XFxuICAgICAgICAgICAgICAgIC8vIFRoZSBsaW5rIGJhY2tncm91bmQgaXMgY29udHJvbGxlZCBvbiB0aGUgJiMzOTsuaGFzLWRyb3Bkb3duJiMzOTsgbGV2ZWwuXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5uYXZiYXItaXRlbSB7XFxuICAgICAgICAmYW1wOy5oYXMtZHJvcGRvd24ge1xcbiAgICAgICAgICAgICZhbXA7OmhvdmVyLFxcbiAgICAgICAgICAgICZhbXA7LmlzLWFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24tdG9nZ2xlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIE1ha2UgdGhlIGFycm93IHN0aWNrIHRvIHRoZSBidXR0b24uXFxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjc1cmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRzcGVlZCAkZWFzaW5nO1xcblxcbiAgICAgICAgJmFtcDtbYXJpYS1leHBhbmRlZD0mcXVvdDt0cnVlJnF1b3Q7XSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hcnJvdyB7XFxuICAgICAgICAgICAgQGV4dGVuZCAlYXJyb3c7XFxuICAgICAgICAgICAgd2lkdGg6IC43NXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IC43NXJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtLjVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRyb3Bkb3duLWFycm93O1xcbiAgICAgICAgfVxcbiAgICB9XFxufTwvY29kZT48L3ByZT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyIGlkPVxcXCJ0YWJzLWNvbXBvbmVudFxcXCI+VGFicyBjb21wb25lbnQ8L2gyPlxcbjxwPlRoaXMgY29tcG9uZW50IHByb3ZpZGVzIHRoZSBuZWVkZWQgSmF2YVNjcmlwdCBmdW5jdGlvbmFsaXRpZXMgZm9yIHRoZSA8YSBocmVmPVxcXCJodHRwczovL2J1bG1hLmlvL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy90YWJzL1xcXCI+QnVsbWEgdGFiczwvYT4uIEFjY2Vzc2liaWxpdHkgaXMgaW1wbGVtZW50ZWQgd2l0aCBKYXZhU2NyaXB0IG1ha2luZyB0aGUgRE9NIGFzIHNpbXBsZSBhcyBwb3NzaWJsZS4gVGhlcmUgYXJlIHR3byB0YWIgZWxlbWVudHMgb24gdGhpcyBwYWdlIHRvIGRlbW9uc3RyYXRlIHRoYXQgeW91IGNhbiBoYXZlIG11bHRpcGxlIHRhYnMgb24gdGhlIHNhbWUgcGFnZS4gQWxsIEJ1bG1hIHRhYiBzdHlsZXMgYXJlIHN1cHBvcnRlZC48L3A+XFxuPGgzIGlkPVxcXCJ0ZXN0cy1hbmQtYWNjZXNzaWJpbGl0eS1zdGF0dXNcXFwiPlRlc3RzIGFuZCBhY2Nlc3NpYmlsaXR5IHN0YXR1czwvaDM+XFxuPHA+VGhlIGFjY2Vzc2liaWxpdHktcmVhZHkgc3RhdHVzIG9mIHRoaXMgY29tcG9uZW50IGlzOiB1bnRlc3RlZC48L3A+XFxuPHVsPlxcbjxsaT48aW5wdXQgY2hlY2tlZD1cXFwiXFxcIiBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IEtleWJvYXJkLW9ubHk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBWb2ljZU92ZXIgJmFtcDsgU2FmYXJpIChtYWNPUyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBWb2ljZU92ZXIgJmFtcDsgU2FmYXJpIChpT1MpPC9saT5cXG48bGk+PGlucHV0IGRpc2FibGVkPVxcXCJcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIj4gVm9pY2VPdmVyICZhbXA7IFNhZmFyaSAoaVBhZE9TKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IFRhbGtiYWNrICZhbXA7IENocm9tZSAoQW5kcm9pZCk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBOYXJyYXRvciAmYW1wOyBFZGdlIChXaW5kb3dzKTwvbGk+XFxuPGxpPjxpbnB1dCBkaXNhYmxlZD1cXFwiXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+IE5WREEgJmFtcDsgRmlyZWZveCAoV2luZG93cyk8L2xpPlxcbjxsaT48aW5wdXQgZGlzYWJsZWQ9XFxcIlxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiPiBXaW5kb3dzIEhpZ2ggQ29udHJhc3QgbW9kZTwvbGk+XFxuPC91bD5cXG48aDMgaWQ9XFxcImtub3duLWlzc3Vlc1xcXCI+S25vd24gaXNzdWVzPC9oMz5cXG48dWw+XFxuPGxpPkluIFZPICZhbXA7IFNhZmFyaSAobWFjT1MpLCBhbGwgdGFicyBhcmUgbmF2aWdhYmxlIHdpdGggdGFiIGtleSwgZXZlbiB0aG91Z2ggdGhleSBzaG91bGQgYmUgbmF2aWdhYmxlIG9ubHkgd2l0aCBhcnJvdyBrZXlzPC9saT5cXG48L3VsPlxcbjxoMyBpZD1cXFwiaHRtbFxcXCI+SFRNTDwvaDM+XFxuPHA+QnVsbWEgdXNlcyBidXR0b25zIGFzIHRhYnMuIFdlIHVzZSBhbmNob3IgbGlua3MgaW5zdGVhZC4gVGhpcyBtYWtlcyB0YWJzIGFjY2Vzc2libGUgZXZlbiBpZiBKYXZhU2NyaXB0IGlzIG5vdCBhdmFpbGFibGUuIEVhY2ggdGFiIGlzIGFuIGFuY2hvciBsaW5rIHRha2luZyB0aGUgdXNlciB0byB0aGUgY29ycmVzcG9uZGluZyB0YWIgcGFuZWwuIElmIEphdmFTY3JpcHQgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgYWxsIHRhYiBjb250YWluZXJzIGFyZSBxdWVyaWVkIGZyb20gdGhlIERPTSBhbmQgdGhlaXIgZnVuY3Rpb25hbGl0aWVzIGFyZSBpbml0aWFsaXplZCBvbiB0aGUgZG9jdW1lbnQgcmVhZHkgZXZlbnQuPC9wPlxcbjxoMyBpZD1cXFwicmVxdWlyZW1lbnRzXFxcIj5SZXF1aXJlbWVudHM8L2gzPlxcbjx1bD5cXG48bGk+QWRkIGEgY29udGFpbmVyIGZvciB0aGUgdGFicyBhbmQgdGhlIHBhbmVscyB3aXRoIGEgY2xhc3MgbmFtZWQgPGVtPiZxdW90O2J1bG1hbGx5LXRhYnMmcXVvdDs8L2VtPi48L2xpPlxcbjxsaT5UaGUgPGVtPmhyZWY8L2VtPiBhdHRyaWJ1dGUgb2YgdGhlIGxpbmsgbXVzdCBiZSB0aGUgaWQgb2YgdGhlIHRhYiBwYW5lbC4gVGhpcyBlbmFibGVzIGxpbmtpbmcgdGhlIHRhYiB0byB0aGUgcGFuZWwuPC9saT5cXG48bGk+VGhlIHRhYiBwYW5lbHMgc2hvdWxkIGJlIHBsYWNlZCBkaXJlY3RseSBhZnRlciB0aGUgdGFicyB0byBjcmVhdGUgYSBsb2dpY2FsIHRhYiBvcmRlci48L2xpPlxcbjwvdWw+XFxuPHByZT48Y29kZT4mbHQ7ZGl2IGNsYXNzPSZxdW90O2J1bG1hbGx5LXRhYnMmcXVvdDsmZ3Q7XFxuICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGFicyZxdW90OyZndDtcXG4gICAgICAgICZsdDt1bCBhcmlhLWxhYmVsPSZxdW90O0FkZCBhIGRlc2NyaXB0aW9uIGZvciB0aGUgdGFicyBoZXJlJnF1b3Q7Jmd0O1xcbiAgICAgICAgICAgICZsdDtsaSBjbGFzcz0mcXVvdDtpcy1hY3RpdmUmcXVvdDsmZ3Q7Jmx0O2EgaHJlZj0mcXVvdDsjZmlyc3QmcXVvdDsmZ3Q7Rmlyc3QmbHQ7L2EmZ3Q7Jmx0Oy9saSZndDtcXG4gICAgICAgICAgICAmbHQ7bGkmZ3Q7Jmx0O2EgaHJlZj0mcXVvdDsjc2Vjb25kJnF1b3Q7Jmd0O1NlY29uZCZsdDsvYSZndDsmbHQ7L2xpJmd0O1xcbiAgICAgICAgICAgICZsdDtsaSZndDsmbHQ7YSBocmVmPSZxdW90OyN0aGlyZCZxdW90OyZndDtUaGlyZCZsdDsvYSZndDsmbHQ7L2xpJmd0O1xcbiAgICAgICAgICAgICZsdDtsaSZndDsmbHQ7YSBocmVmPSZxdW90OyNmb3VydGgmcXVvdDsmZ3Q7Rm91cnRoJmx0Oy9hJmd0OyZsdDsvbGkmZ3Q7XFxuICAgICAgICAmbHQ7L3VsJmd0O1xcbiAgICAmbHQ7L2RpdiZndDtcXG5cXG4gICAgJmx0O2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYgaWQ9JnF1b3Q7Zmlyc3QmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2gyJmd0O0ZpcnN0Jmx0Oy9oMiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBpZD0mcXVvdDtzZWNvbmQmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2gyJmd0O1NlY29uZCZsdDsvaDImZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgICAgICZsdDtkaXYgaWQ9JnF1b3Q7dGhpcmQmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2gyJmd0O1RoaXJkJmx0Oy9oMiZndDtcXG4gICAgICAgICZsdDsvZGl2Jmd0O1xcbiAgICAgICAgJmx0O2RpdiBpZD0mcXVvdDtmb3VydGgmcXVvdDsmZ3Q7XFxuICAgICAgICAgICAgJmx0O2gyJmd0O0ZvdXJ0aCZsdDsvaDImZ3Q7XFxuICAgICAgICAmbHQ7L2RpdiZndDtcXG4gICAgJmx0Oy9kaXYmZ3Q7XFxuXFxuJmx0Oy9kaXYmZ3Q7PC9jb2RlPjwvcHJlPjxoMyBpZD1cXFwic2Nzc1xcXCI+U0NTUzwvaDM+XFxuPHA+VGhlIG9ubHkgc3R5bGluZyByZXF1aXJlZCBpcyB0aGUgaGlkZGVuIHN0YXRlIG9mIHRoZSBwYW5lbHMuIFRoaXMgaXMgZG9uZSBieSB1c2luZyB0aGUgPGVtPiZxdW90O2hpZGRlbiZxdW90OzwvZW0+IGF0dHJpYnV0ZSBhcyB0aGUgQ1NTIHNlbGVjdG9yLjwvcD5cXG48cHJlPjxjb2RlPi5idWxtYWxseS10YWJzIHtcXG5cXG4gICAgJmFtcDstcGFuZWxbaGlkZGVuXSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxufTwvY29kZT48L3ByZT48aDMgaWQ9XFxcImphdmFzY3JpcHRcXFwiPkphdmFTY3JpcHQ8L2gzPlxcbjxwPkJ1bG1hbGx5IHRhYnMgaW1wbGVtZW50cyB0aGUgV0FJLUFSSUEgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy8jdGFicGFuZWxcXFwiPnRhYnMgZGVzaWduIHBhdHRlcm48L2E+LiBKYXZhU2NyaXB0IGNvZGUgaXMgYmFzZWQgb24gdGhlIFdBSS1BUklBIGV4YW1wbGUgZm9yIDxhIGhyZWY9XFxcIihodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzL2V4YW1wbGVzL3RhYnMvdGFicy0yL3RhYnMuaHRtbClcXFwiPm1hbnVhbGx5IGFjdGl2YXRlZCB0YWJzPC9hPi4gVGhlIGltcGxlbWVudGF0aW9uIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXM6PC9wPlxcbjx1bD5cXG48bGk+VGFiIG5hdmlnYXRpb24gd2l0aCBhcnJvdyBrZXlzLjwvbGk+XFxuPGxpPlRhYiBwYW5lbCBhY3RpdmF0aW9uIGJ5IHByZXNzaW5nIGVudGVyIG9yIHNwYWNlIG9uIHRoZSBmb2N1c2VkIHRhYi48L2xpPlxcbjxsaT5UYWIgcGFuZWwgYWN0aXZhdGlvbiBvbiBtb3VzZSBjbGljayBldmVudC48L2xpPlxcbjxsaT5Gb2N1cyBoYW5kbGluZyBmb3IgYWxsIGludGVyYWN0aW9ucy48L2xpPlxcbjwvdWw+XFxuPHA+V2UgZXh0ZW5kZWQgdGhlIFdBSS1BUklBIGV4YW1wbGUgd2l0aCB0aGUgYWJpbGl0eSB0byBoYXZlIG11bHRpcGxlIHRhYiBlbGVtZW50cyBvbiB0aGUgc2FtZSBwYWdlLiBJZiB5b3UgY3JlYXRlIHRhYnMgZHluYW1pY2FsbHkgPGVtPihhZnRlciB0aGUgZG9jdW1lbnQgcmVhZHkgZXZlbnQpPC9lbT4sIHlvdSBjYW4gaW5pdGlhbGl6ZSB0aGVpciBhY2Nlc3NpYmlsaXR5IGZlYXR1cmVzIGJ5IHBhc3NpbmcgdGhlIEJ1bG1hbGx5IHRhYnMgZWxlbWVudCBjb250YWluZXIgZm9yIHRoZSA8ZW0+aW5pdCgpPC9lbT4gbWV0aG9kLiBZb3UgY2FuIGZpbmQgYW4gZXhhbXBsZSBvZiB0aGlzIGluIHRoZSA8ZW0+aW5pdEFsbFRhYnMoKTwvZW0+IG1ldGhvZCB0aGF0IGZpbmRzIGFuZCBpbml0aWFsaXplcyBhbGwgQnVsbWFsbHkgdGFiIGVsZW1lbnRzIG9uIHRoZSBkb2N1bWVudCByZWFkeSBldmVudC48L3A+XFxuPHByZT48Y29kZT4vLyBGb3IgZWFzeSByZWZlcmVuY2VcXG5jb25zdCBrZXlzID0ge1xcbiAgICBlbmQ6IDM1LFxcbiAgICBob21lOiAzNixcXG4gICAgbGVmdDogMzcsXFxuICAgIHVwOiAzOCxcXG4gICAgcmlnaHQ6IDM5LFxcbiAgICBkb3duOiA0MCxcXG4gICAgZW50ZXI6IDEzLFxcbiAgICBzcGFjZTogMzIsXFxufTtcXG5cXG4vLyBBZGQgb3Igc3VidHJhY3QgZGVwZW5kaW5nIG9uIGtleSBwcmVzc2VkXFxuY29uc3QgZGlyZWN0aW9uID0ge1xcbiAgICAzNzogLTEsXFxuICAgIDM4OiAtMSxcXG4gICAgMzk6IDEsXFxuICAgIDQwOiAxLFxcbn07XFxuXFxuLyoqXFxuICogQ2xhc3MgVGFic1xcbiAqL1xcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMge1xcbiAgICAvKipcXG4gICAgICogVGhpcyBtZXRob2QgaXMgcnVuIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgbW9kdWxlIGlzIGltcG9ydGVkLFxcbiAgICAgKiBiZWNhdXNlIGl0IGV4cG9ydHMgYSBuZXcgaW5zdGFuY2Ugb2YgaXRzZWxmLlxcbiAgICAgKi9cXG4gICAgY29uc3RydWN0b3IoKSB7XFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxcbiAgICAgICAgICAgICYjMzk7RE9NQ29udGVudExvYWRlZCYjMzk7LFxcbiAgICAgICAgICAgICgpID0mZ3Q7IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QWxsVGFicygpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIEZpbmQgYWxsIHRhYiBlbGVtZW50cyBhbmQgaW5pdGlhbGl6ZSB0aGVpciBmdW5jdGlvbmFsaXRpZXMuXFxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBydW4gb24gZG9jdW1lbnQgcmVhZHkgdG8gaW5pdGlhbGl6ZSBhbGxcXG4gICAgICogdGFicyBpbiB0aGUgRE9NIGFmdGVyIHRoZSBwYWdlIGlzIGxvYWRlZC5cXG4gICAgICovXFxuICAgIGluaXRBbGxUYWJzKCkge1xcbiAgICAgICAgdGhpcy5hbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJiMzOTsuYnVsbWFsbHktdGFicyYjMzk7ICk7XFxuXFxuICAgICAgICBpZiAoICEgdGhpcy5hbGxUYWJzICkge1xcbiAgICAgICAgICAgIC8vIE5vIHRhYnMgZm91bmQuXFxuICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpICZsdDsgdGhpcy5hbGxUYWJzLmxlbmd0aDsgaSsrICkge1xcbiAgICAgICAgICAgIHRoaXMuaW5pdCggdGhpcy5hbGxUYWJzWyBpIF0gKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogSW5pdGFsaXplIGEgc2luZ2xlIHRhYnMgZWxlbWVudC5cXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFic0VsZW1lbnQgQnVsbWFsbHkgdGFicyBjb250YWluZXIuXFxuICAgICAqL1xcbiAgICBpbml0KCB0YWJzRWxlbWVudCApIHtcXG4gICAgICAgIGNvbnN0IHRhYmxpc3QgPSB0YWJzRWxlbWVudC5xdWVyeVNlbGVjdG9yKCAmIzM5Oy5idWxtYWxseS10YWJzLXRhYmxpc3QmIzM5OyApO1xcbiAgICAgICAgY29uc3QgdGFicyA9IHRhYmxpc3QucXVlcnlTZWxlY3RvckFsbCggJiMzOTthJiMzOTsgKTtcXG4gICAgICAgIGNvbnN0IHRhYlBhbmVscyA9IHRhYnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICYjMzk7LmJ1bG1hbGx5LXRhYnMtcGFuZWwmIzM5OyApO1xcbiAgICAgICAgY29uc3QgdGFiTGlzdEl0ZW1zID0gdGFibGlzdC5xdWVyeVNlbGVjdG9yQWxsKCAmIzM5O2xpJiMzOTsgKTtcXG5cXG4gICAgICAgIC8vIFN0b3JlIHJlZmVyZW5jZXMgdG8gdGhlIGZpcnN0IGFuZCB0aGUgbGFzdCB0YWIgZm9yIGZvY3VzIG1hbmlwdWxhdGlvbnMuXFxuICAgICAgICAvLyBJbml0aWFsaXplIGFuIGFycmF5IGZvciBzdG9yaW5nIHJlZmVyZW5jZXMgdG8gYWxsIHRhYnMuXFxuICAgICAgICB0YWJsaXN0LmZpcnN0VGFiID0gdGFic1sgMCBdO1xcbiAgICAgICAgdGFibGlzdC5sYXN0VGFiID0gdGFic1sgdGFicy5sZW5ndGggLSAxIF07XFxuICAgICAgICB0YWJsaXN0LnRhYnMgPSBbXTtcXG4gICAgICAgIHRhYmxpc3QucGFuZWxzID0gW107XFxuXFxuICAgICAgICAvLyBUYWJzIG11c3QgYmUgaW5pdGlhbGl6ZWQgZmlyc3QuXFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgJmx0OyB0YWJzLmxlbmd0aDsgaSsrICkge1xcbiAgICAgICAgICAgIHRoaXMuaW5pdFRhYiggdGFic1sgaSBdLCB0YWJsaXN0LCBpICk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvLyBBZnRlciB0YWJzLCBpbml0YWxpemUgdGhlIGNvcnJlc3BvbmRpbmcgdGFicy5cXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSAmbHQ7IHRhYlBhbmVscy5sZW5ndGg7IGkrKyApIHtcXG4gICAgICAgICAgICB0aGlzLmluaXRQYW5lbCggdGFiUGFuZWxzWyBpIF0sIHRhYnNbIGkgXSwgdGFibGlzdCwgaSApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpICZsdDsgdGFiTGlzdEl0ZW1zLmxlbmd0aDsgaSsrICkge1xcbiAgICAgICAgICAgIC8vIEFsbCAmbHQ7bGkmZ3Q7IGVsZW1lbnRzIG11c3QgaGF2ZSBhIHJvbGUgb2YgcHJlc2VudGF0aW9uLlxcbiAgICAgICAgICAgIHRhYkxpc3RJdGVtc1sgaSBdLnNldEF0dHJpYnV0ZSggJiMzOTtyb2xlJiMzOTssICYjMzk7cHJlc2VudGF0aW9uJiMzOTsgKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogSW5pdGlhbGl6ZSBmdW5jdGlvbmFsaXRpZXMgZm9yIGEgdGFiIGVsZW1lbnQuXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYiBBIHRhYiBsaW5rLlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWJsaXN0IFRoZSB0YWJsaXN0IGVsZW1lbnQgZm9yIHRoZSB0YWIuXFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgY3VycmVudCBlbGVtZW50IGluZGV4IGluIHRoZSB0YWIgbGlzdC5cXG4gICAgICovXFxuICAgIGluaXRUYWIoIHRhYiwgdGFibGlzdCwgaW5kZXggKSB7XFxuICAgICAgICBjb25zdCBwYW5lbElkID0gdGFiLmhhc2guc2xpY2UoIDEgKTtcXG5cXG4gICAgICAgIC8vIENyZWF0ZSBhIHVuaXF1ZSBpZCB1c2luZyB0aGUgdGFiIGxpbmsmIzM5O3MgaGFzaFxcbiAgICAgICAgdGFiLmlkID0gYHRhYi0keyBwYW5lbElkIH1gO1xcblxcbiAgICAgICAgLy8gTWFrZSBhIHR3by13YXkgcmVmZXJlbmNlIG9mIHRoZSB0YWIgYW5kIGl0cyB0YWJsaXN0LlxcbiAgICAgICAgdGFiLnRhYmxpc3QgPSB0YWJsaXN0O1xcbiAgICAgICAgdGFibGlzdC50YWJzWyBpbmRleCBdID0gdGFiO1xcblxcbiAgICAgICAgLy8gU3RvcmUgdGhlIGluZGV4LlxcbiAgICAgICAgdGFiLmluZGV4ID0gaW5kZXg7XFxuXFxuICAgICAgICB0YWIucGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggcGFuZWxJZCApO1xcblxcbiAgICAgICAgdGFiLnJvbGUgPSAmIzM5O3RhYiYjMzk7O1xcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSggJiMzOTthcmlhLXNlbGVjdGVkJiMzOTssICYjMzk7ZmFsc2UmIzM5OyApO1xcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSggJiMzOTthcmlhLWNvbnRyb2xzJiMzOTssIHBhbmVsSWQgKTtcXG4gICAgICAgIHRhYi50YWJpbmRleCA9IC0xO1xcblxcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoICYjMzk7Y2xpY2smIzM5OywgKCBldmVudCApID0mZ3Q7IHRoaXMuY2xpY2tFdmVudExpc3RlbmVyKCBldmVudCApICk7XFxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lciggJiMzOTtrZXlkb3duJiMzOTssICggZXZlbnQgKSA9Jmd0OyB0aGlzLmtleWRvd25FdmVudExpc3RlbmVyKCBldmVudCApICk7XFxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lciggJiMzOTtrZXl1cCYjMzk7LCAoIGV2ZW50ICkgPSZndDsgdGhpcy5rZXl1cEV2ZW50TGlzdGVuZXIoIGV2ZW50ICkgKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogSW5pdGFsaXplIHBhbmVsIGZ1bmN0aW9uYWxpdGllcy5cXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFuZWwgVGhlIHBhbmVsIGVsZW1lbnQuXFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYiBUaGUgY29ycmVzcG9uZGluZyB0YWIgZWxlbWVudC5cXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFibGlzdCBUaGUgdGFibGlzdCBlbGVtZW50IGZvciB0aGUgdGFiLlxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHBhbmVscy5cXG4gICAgICovXFxuICAgIGluaXRQYW5lbCggcGFuZWwsIHRhYiwgdGFibGlzdCwgaW5kZXggKSB7XFxuICAgICAgICBpZiAoIGluZGV4ICE9PSAwICkge1xcbiAgICAgICAgICAgIC8vIEhpZGUgYWxsIGJ1dCB0aGUgZmlyc3QgdGFiLlxcbiAgICAgICAgICAgIHBhbmVsLmhpZGRlbiA9IHRydWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoICYjMzk7dGFiaW5kZXgmIzM5OywgJiMzOTswJiMzOTsgKTtcXG4gICAgICAgIHBhbmVsLnNldEF0dHJpYnV0ZSggJiMzOTtyb2xlJiMzOTssICYjMzk7dGFicGFuZWwmIzM5OyApO1xcbiAgICAgICAgcGFuZWwuc2V0QXR0cmlidXRlKCAmIzM5O2FyaWEtbGFiZWxsZWRieSYjMzk7LCB0YWIuaWQgKTtcXG5cXG4gICAgICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIGZvciB0aGUgdGFibGlzdC5cXG4gICAgICAgIHRhYmxpc3QucGFuZWxzLnB1c2goIHBhbmVsICk7XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIFdoZW4gYSB0YWIgaXMgY2xpY2tlZCwgYWN0aXZhdGVUYWIgaXMgZmlyZWQgdG8gYWN0aXZhdGUgaXRcXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxcbiAgICAgKi9cXG4gICAgY2xpY2tFdmVudExpc3RlbmVyKCBldmVudCApIHtcXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgY2xpY2sgZXZlbnQuXFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xcblxcbiAgICAgICAgY29uc3QgdGFiID0gZXZlbnQudGFyZ2V0O1xcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYiggdGFiLCBmYWxzZSApO1xcbiAgICB9XFxuXFxuICAgIC8qKlxcbiAgICAgKiBIYW5kbGUga2V5ZG93biBvbiB0YWJzXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdC5cXG4gICAgICovXFxuICAgIGtleWRvd25FdmVudExpc3RlbmVyKCBldmVudCApIHtcXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XFxuICAgICAgICBjb25zdCB0YWJsaXN0ID0gZXZlbnQudGFyZ2V0LnRhYmxpc3Q7XFxuXFxuICAgICAgICBzd2l0Y2ggKCBrZXkgKSB7XFxuICAgICAgICBjYXNlIGtleXMuZW5kOlxcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgICAgICAgLy8gQWN0aXZhdGUgbGFzdCB0YWJcXG4gICAgICAgICAgICB0aGlzLmZvY3VzTGFzdFRhYiggdGFibGlzdCApO1xcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgY2FzZSBrZXlzLmhvbWU6XFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcXG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSBmaXJzdCB0YWJcXG4gICAgICAgICAgICB0aGlzLmZvY3VzRmlyc3RUYWIoIHRhYmxpc3QgKTtcXG4gICAgICAgICAgICBicmVhaztcXG5cXG4gICAgICAgIC8vIFVwIGFuZCBkb3duIGFyZSBpbiBrZXlkb3duIHRvIHByZXZlbnQgcGFnZSBzY3JvbGwuXFxuICAgICAgICBjYXNlIGtleXMudXA6XFxuICAgICAgICBjYXNlIGtleXMuZG93bjpcXG4gICAgICAgICAgICB0aGlzLmRldGVybWluZU9yaWVudGF0aW9uKCBldmVudCApO1xcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgY2FzZSBrZXlzLmVudGVyOlxcbiAgICAgICAgY2FzZSBrZXlzLnNwYWNlOlxcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYiggZXZlbnQudGFyZ2V0LCB0cnVlICk7XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIEhhbmRsZSBrZXl1cCBvbiB0YWJzXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdC5cXG4gICAgICovXFxuICAgIGtleXVwRXZlbnRMaXN0ZW5lciggZXZlbnQgKSB7XFxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xcblxcbiAgICAgICAgc3dpdGNoICgga2V5ICkge1xcbiAgICAgICAgY2FzZSBrZXlzLmxlZnQ6XFxuICAgICAgICBjYXNlIGtleXMucmlnaHQ6XFxuICAgICAgICAgICAgdGhpcy5kZXRlcm1pbmVPcmllbnRhdGlvbiggZXZlbnQgKTtcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogV2hlbiBhIHRhYmxpc3QmIzM5O3MgYXJpYS1vcmllbnRhdGlvbiBpcyBzZXQgdG8gdmVydGljYWwsXFxuICAgICAqIG9ubHkgdXAgYW5kIGRvd24gYXJyb3cgc2hvdWxkIGZ1bmN0aW9uLlxcbiAgICAgKiBvbmx5IHVwIGFuZCBkb3duIGFycm93IHNob3VsZCBmdW5jdGlvbi5cXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdC5cXG4gICAgICovXFxuICAgIGRldGVybWluZU9yaWVudGF0aW9uKCBldmVudCApIHtcXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XFxuICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IGV2ZW50LnRhcmdldC50YWJsaXN0LmdldEF0dHJpYnV0ZSggJiMzOTthcmlhLW9yaWVudGF0aW9uJiMzOTsgKSA9PT0gJiMzOTt2ZXJ0aWNhbCYjMzk7O1xcbiAgICAgICAgbGV0IHByb2NlZWQgPSBmYWxzZTtcXG5cXG4gICAgICAgIGlmICggdmVydGljYWwgKSB7XFxuICAgICAgICAgICAgaWYgKCBrZXkgPT09IGtleXMudXAgfHwga2V5ID09PSBrZXlzLmRvd24gKSB7XFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgICAgICAgICAgIHByb2NlZWQgPSB0cnVlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gZWxzZSBpZiAoIGtleSA9PT0ga2V5cy5sZWZ0IHx8IGtleSA9PT0ga2V5cy5yaWdodCApIHtcXG4gICAgICAgICAgICBwcm9jZWVkID0gdHJ1ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmICggcHJvY2VlZCApIHtcXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYk9uQXJyb3dQcmVzcyggZXZlbnQgKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogRWl0aGVyIGZvY3VzIHRoZSBuZXh0LCBwcmV2aW91cywgZmlyc3QsIG9yIGxhc3QgdGFiXFxuICAgICAqIGRlcGVuZGluZyBvbiB0aGUga2V5IHByZXNzZWQuXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdC5cXG4gICAgICovXFxuICAgIHN3aXRjaFRhYk9uQXJyb3dQcmVzcyggZXZlbnQgKSB7XFxuICAgICAgICBjb25zdCBwcmVzc2VkID0gZXZlbnQua2V5Q29kZTtcXG5cXG4gICAgICAgIGlmICggZGlyZWN0aW9uWyBwcmVzc2VkIF0gKSB7XFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xcbiAgICAgICAgICAgIGNvbnN0IHRhYmxpc3QgPSB0YXJnZXQudGFibGlzdDtcXG4gICAgICAgICAgICBjb25zdCB0YWJzID0gdGFibGlzdC50YWJzO1xcbiAgICAgICAgICAgIGlmICggdGFyZ2V0LmluZGV4ICE9PSB1bmRlZmluZWQgKSB7XFxuICAgICAgICAgICAgICAgIGlmICggdGFic1sgdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uWyBwcmVzc2VkIF0gXSApIHtcXG4gICAgICAgICAgICAgICAgICAgIHRhYnNbIHRhcmdldC5pbmRleCArIGRpcmVjdGlvblsgcHJlc3NlZCBdIF0uZm9jdXMoKTtcXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggcHJlc3NlZCA9PT0ga2V5cy5sZWZ0IHx8IHByZXNzZWQgPT09IGtleXMudXAgKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTGFzdFRhYiggdGFibGlzdCApO1xcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBwcmVzc2VkID09PSBrZXlzLnJpZ2h0IHx8IHByZXNzZWQgPT09IGtleXMuZG93biApIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNGaXJzdFRhYiggdGFibGlzdCApO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8qKlxcbiAgICAgKiBBY3RpdmF0ZXMgYW55IGdpdmVuIHRhYiBwYW5lbFxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWIgQSB0YWIgZWxlbWVudC5cXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZXRGb2N1cyBXaGV0aGVyIHRvIHNldCBmb2N1cy5cXG4gICAgICovXFxuICAgIGFjdGl2YXRlVGFiKCB0YWIsIHNldEZvY3VzICkge1xcbiAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgb3RoZXIgdGFic1xcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlVGFicyggdGFiLnRhYmxpc3QgKTtcXG5cXG4gICAgICAgIC8vIFJlbW92ZSB0YWJpbmRleCBhdHRyaWJ1dGUuXFxuICAgICAgICB0YWIucmVtb3ZlQXR0cmlidXRlKCAmIzM5O3RhYmluZGV4JiMzOTsgKTtcXG5cXG4gICAgICAgIC8vIFNldCB0aGUgdGFiIGFzIHNlbGVjdGVkLlxcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSggJiMzOTthcmlhLXNlbGVjdGVkJiMzOTssICYjMzk7dHJ1ZSYjMzk7ICk7XFxuXFxuICAgICAgICAvLyBTZXQgQnVsbWEgY2xhc3MuXFxuICAgICAgICB0YWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCAmIzM5O2lzLWFjdGl2ZSYjMzk7ICk7XFxuXFxuICAgICAgICAvLyBSZW1vdmUgaGlkZGVuIGF0dHJpYnV0ZSBmcm9tIHRhYiBwYW5lbCB0byBtYWtlIGl0IHZpc2libGUuXFxuICAgICAgICB0YWIucGFuZWwucmVtb3ZlQXR0cmlidXRlKCAmIzM5O2hpZGRlbiYjMzk7ICk7XFxuXFxuICAgICAgICAvLyBTZXQgZm9jdXMgd2hlbiByZXF1aXJlZC5cXG4gICAgICAgIGlmICggc2V0Rm9jdXMgKSB7XFxuICAgICAgICAgICAgdGFiLnBhbmVsLmZvY3VzKCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLyoqXFxuICAgICAqIERlYWN0aXZhdGUgYWxsIHRhYnMgYW5kIHRhYiBwYW5lbHNcXG4gICAgICpcXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFibGlzdCBUaGUgdGFibGlzdCBlbGVtZW50LlxcbiAgICAgKi9cXG4gICAgZGVhY3RpdmF0ZVRhYnMoIHRhYmxpc3QgKSB7XFxuICAgICAgICBmb3IgKCBsZXQgdCA9IDA7IHQgJmx0OyB0YWJsaXN0LnRhYnMubGVuZ3RoOyB0KysgKSB7XFxuICAgICAgICAgICAgdGFibGlzdC50YWJzWyB0IF0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAmIzM5O2lzLWFjdGl2ZSYjMzk7ICk7XFxuICAgICAgICAgICAgdGFibGlzdC50YWJzWyB0IF0uc2V0QXR0cmlidXRlKCAmIzM5O3RhYmluZGV4JiMzOTssICYjMzk7LTEmIzM5OyApO1xcbiAgICAgICAgICAgIHRhYmxpc3QudGFic1sgdCBdLnNldEF0dHJpYnV0ZSggJiMzOTthcmlhLXNlbGVjdGVkJiMzOTssICYjMzk7ZmFsc2UmIzM5OyApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgZm9yICggbGV0IHAgPSAwOyBwICZsdDsgdGFibGlzdC5wYW5lbHMubGVuZ3RoOyBwKysgKSB7XFxuICAgICAgICAgICAgdGFibGlzdC5wYW5lbHNbIHAgXS5zZXRBdHRyaWJ1dGUoICYjMzk7aGlkZGVuJiMzOTssICYjMzk7aGlkZGVuJiMzOTsgKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogRm9jdXMgb24gdGhlIGZpcnN0IHRhYiBpbiB0aGUgdGFibGlzdCBvZiB0aGUgZ2l2ZW4gdGFiLlxcbiAgICAgKlxcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWJsaXN0IEEgdGFibGlzdCBlbGVtZW50LlxcbiAgICAgKi9cXG4gICAgZm9jdXNGaXJzdFRhYiggdGFibGlzdCApIHtcXG4gICAgICAgIHRhYmxpc3QuZmlyc3RUYWIuZm9jdXMoKTtcXG4gICAgfVxcblxcbiAgICAvKipcXG4gICAgICogRm9jdXMgb24gdGhlIGxhc3QgdGFiIGluIHRoZSB0YWJsaXN0IG9mIHRoZSBnaXZlbiB0YWIuXFxuICAgICAqXFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYmxpc3QgQSB0YWJsaXN0IGVsZW1lbnQuXFxuICAgICAqL1xcbiAgICBmb2N1c0xhc3RUYWIoIHRhYmxpc3QgKSB7XFxuICAgICAgICB0YWJsaXN0Lmxhc3RUYWIuZm9jdXMoKTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+XCI7IiwiLyoqXG4gKiBUYWJzIEpTIGNvbnRyb2xsZXIuXG4gKi9cblxuLy8gRm9yIGVhc3kgcmVmZXJlbmNlXG5jb25zdCBrZXlzID0ge1xuICAgIGVuZDogMzUsXG4gICAgaG9tZTogMzYsXG4gICAgbGVmdDogMzcsXG4gICAgdXA6IDM4LFxuICAgIHJpZ2h0OiAzOSxcbiAgICBkb3duOiA0MCxcbiAgICBlbnRlcjogMTMsXG4gICAgc3BhY2U6IDMyLFxufTtcblxuLy8gQWRkIG9yIHN1YnRyYWN0IGRlcGVuZGluZyBvbiBrZXkgcHJlc3NlZFxuY29uc3QgZGlyZWN0aW9uID0ge1xuICAgIDM3OiAtMSxcbiAgICAzODogLTEsXG4gICAgMzk6IDEsXG4gICAgNDA6IDEsXG59O1xuXG4vKipcbiAqIENsYXNzIFRhYnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyB7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgcnVuIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgbW9kdWxlIGlzIGltcG9ydGVkLFxuICAgICAqIGJlY2F1c2UgaXQgZXhwb3J0cyBhIG5ldyBpbnN0YW5jZSBvZiBpdHNlbGYuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzZXQgZm9yIGVhY2ggY29tcG9uZW50LlxuICAgICAgICB0aGlzLmRvY3VtZW50YXRpb24gPSByZXF1aXJlKCAnLi9yZWFkbWUubWQnICk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRBbGxUYWJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgdGFiIGVsZW1lbnRzIGFuZCBpbml0aWFsaXplIHRoZWlyIGZ1bmN0aW9uYWxpdGllcy5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgcnVuIG9uIGRvY3VtZW50IHJlYWR5IHRvIGluaXRpYWxpemUgYWxsXG4gICAgICogdGFicyBpbiB0aGUgRE9NIGFmdGVyIHRoZSBwYWdlIGlzIGxvYWRlZC5cbiAgICAgKi9cbiAgICBpbml0QWxsVGFicygpIHtcbiAgICAgICAgdGhpcy5hbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5idWxtYWxseS10YWJzJyApO1xuXG4gICAgICAgIGlmICggISB0aGlzLmFsbFRhYnMgKSB7XG4gICAgICAgICAgICAvLyBObyB0YWJzIGZvdW5kLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxUYWJzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCB0aGlzLmFsbFRhYnNbIGkgXSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGFsaXplIGEgc2luZ2xlIHRhYnMgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYnNFbGVtZW50IEJ1bG1hbGx5IHRhYnMgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGluaXQoIHRhYnNFbGVtZW50ICkge1xuICAgICAgICBjb25zdCB0YWJzQ29udGFpbmVyID0gdGFic0VsZW1lbnQucXVlcnlTZWxlY3RvciggJy50YWJzJyApO1xuICAgICAgICBjb25zdCB0YWJsaXN0ID0gdGFic0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCAndWwnICk7XG4gICAgICAgIGNvbnN0IHRhYnMgPSB0YWJsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoICdhJyApO1xuICAgICAgICBjb25zdCB0YWJMaXN0SXRlbXMgPSB0YWJsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoICdsaScgKTtcblxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2VzIHRvIHRoZSBmaXJzdCBhbmQgdGhlIGxhc3QgdGFiIGZvciBmb2N1cyBtYW5pcHVsYXRpb25zLlxuICAgICAgICAvLyBJbml0aWFsaXplIGFuIGFycmF5IGZvciBzdG9yaW5nIHJlZmVyZW5jZXMgdG8gYWxsIHRhYnMuXG4gICAgICAgIHRhYmxpc3QuZmlyc3RUYWIgPSB0YWJzWyAwIF07XG4gICAgICAgIHRhYmxpc3QubGFzdFRhYiA9IHRhYnNbIHRhYnMubGVuZ3RoIC0gMSBdO1xuICAgICAgICB0YWJsaXN0LnRhYnMgPSBbXTtcbiAgICAgICAgdGFibGlzdC5wYW5lbHMgPSBbXTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRhYnMuXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRUYWIoIHRhYnNbIGkgXSwgdGFibGlzdCwgaSApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGFiTGlzdEl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgLy8gQWxsIDxsaT4gZWxlbWVudHMgbXVzdCBoYXZlIGEgcm9sZSBvZiBwcmVzZW50YXRpb24uXG4gICAgICAgICAgICB0YWJMaXN0SXRlbXNbIGkgXS5zZXRBdHRyaWJ1dGUoICdyb2xlJywgJ3ByZXNlbnRhdGlvbicgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgZnVuY3Rpb25hbGl0aWVzIGZvciBhIHRhYiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIEEgdGFiIGxpbmsuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFibGlzdCBUaGUgdGFibGlzdCBlbGVtZW50IGZvciB0aGUgdGFiLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgY3VycmVudCBlbGVtZW50IGluZGV4IGluIHRoZSB0YWIgbGlzdC5cbiAgICAgKi9cbiAgICBpbml0VGFiKCB0YWIsIHRhYmxpc3QsIGluZGV4ICkge1xuICAgICAgICBjb25zdCBwYW5lbElkID0gdGFiLmhhc2guc2xpY2UoIDEgKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSB1bmlxdWUgaWQgdXNpbmcgdGhlIHRhYiBsaW5rJ3MgaGFzaFxuICAgICAgICB0YWIuaWQgPSBgdGFiLSR7IHBhbmVsSWQgfWA7XG5cbiAgICAgICAgLy8gTWFrZSBhIHR3by13YXkgcmVmZXJlbmNlIG9mIHRoZSB0YWIgYW5kIGl0cyB0YWJsaXN0LlxuICAgICAgICB0YWIudGFibGlzdCA9IHRhYmxpc3Q7XG4gICAgICAgIHRhYmxpc3QudGFic1sgaW5kZXggXSA9IHRhYjtcblxuICAgICAgICAvLyBTdG9yZSB0aGUgaW5kZXguXG4gICAgICAgIHRhYi5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGNvcnJlc3BvbmRpbmcgcGFuZWwuXG4gICAgICAgIHRhYi5wYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBwYW5lbElkICk7XG4gICAgICAgIHRoaXMuaW5pdFBhbmVsKCB0YWIucGFuZWwsIHRhYiwgdGFibGlzdCwgaW5kZXggKTtcblxuICAgICAgICB0YWIucm9sZSA9ICd0YWInO1xuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCAnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScgKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSggJ2FyaWEtY29udHJvbHMnLCBwYW5lbElkICk7XG4gICAgICAgIHRhYi50YWJpbmRleCA9IC0xO1xuXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoIGV2ZW50ICkgPT4gdGhpcy5jbGlja0V2ZW50TGlzdGVuZXIoIGV2ZW50ICkgKTtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgKCBldmVudCApID0+IHRoaXMua2V5ZG93bkV2ZW50TGlzdGVuZXIoIGV2ZW50ICkgKTtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsICggZXZlbnQgKSA9PiB0aGlzLmtleXVwRXZlbnRMaXN0ZW5lciggZXZlbnQgKSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRhbGl6ZSBwYW5lbCBmdW5jdGlvbmFsaXRpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYW5lbCBUaGUgcGFuZWwgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWIgVGhlIGNvcnJlc3BvbmRpbmcgdGFiIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFibGlzdCBUaGUgdGFibGlzdCBlbGVtZW50IGZvciB0aGUgdGFiLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW4gcGFuZWxzLlxuICAgICAqL1xuICAgIGluaXRQYW5lbCggcGFuZWwsIHRhYiwgdGFibGlzdCwgaW5kZXggKSB7XG4gICAgICAgIGlmICggaW5kZXggIT09IDAgKSB7XG4gICAgICAgICAgICAvLyBIaWRlIGFsbCBidXQgdGhlIGZpcnN0IHRhYi5cbiAgICAgICAgICAgIHBhbmVsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoICd0YWJpbmRleCcsICcwJyApO1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoICdyb2xlJywgJ3RhYnBhbmVsJyApO1xuICAgICAgICBwYW5lbC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsbGVkYnknLCB0YWIuaWQgKTtcblxuICAgICAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSBmb3IgdGhlIHRhYmxpc3QuXG4gICAgICAgIHRhYmxpc3QucGFuZWxzLnB1c2goIHBhbmVsICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhIHRhYiBpcyBjbGlja2VkLCBhY3RpdmF0ZVRhYiBpcyBmaXJlZCB0byBhY3RpdmF0ZSBpdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgICAqL1xuICAgIGNsaWNrRXZlbnRMaXN0ZW5lciggZXZlbnQgKSB7XG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgY2xpY2sgZXZlbnQuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdGFiID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCB0YWIsIGZhbHNlICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleWRvd24gb24gdGFic1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgICAqL1xuICAgIGtleWRvd25FdmVudExpc3RlbmVyKCBldmVudCApIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgdGFibGlzdCA9IGV2ZW50LnRhcmdldC50YWJsaXN0O1xuXG4gICAgICAgIHN3aXRjaCAoIGtleSApIHtcbiAgICAgICAgY2FzZSBrZXlzLmVuZDpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSBsYXN0IHRhYlxuICAgICAgICAgICAgdGhpcy5mb2N1c0xhc3RUYWIoIHRhYmxpc3QgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleXMuaG9tZTpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSBmaXJzdCB0YWJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNGaXJzdFRhYiggdGFibGlzdCApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gVXAgYW5kIGRvd24gYXJlIGluIGtleWRvd24gdG8gcHJldmVudCBwYWdlIHNjcm9sbC5cbiAgICAgICAgY2FzZSBrZXlzLnVwOlxuICAgICAgICBjYXNlIGtleXMuZG93bjpcbiAgICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lT3JpZW50YXRpb24oIGV2ZW50ICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlzLmVudGVyOlxuICAgICAgICBjYXNlIGtleXMuc3BhY2U6XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYiggZXZlbnQudGFyZ2V0LCB0cnVlICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBrZXl1cCBvbiB0YWJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICovXG4gICAga2V5dXBFdmVudExpc3RlbmVyKCBldmVudCApIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICBzd2l0Y2ggKCBrZXkgKSB7XG4gICAgICAgIGNhc2Uga2V5cy5sZWZ0OlxuICAgICAgICBjYXNlIGtleXMucmlnaHQ6XG4gICAgICAgICAgICB0aGlzLmRldGVybWluZU9yaWVudGF0aW9uKCBldmVudCApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgdGFibGlzdCdzIGFyaWEtb3JpZW50YXRpb24gaXMgc2V0IHRvIHZlcnRpY2FsLFxuICAgICAqIG9ubHkgdXAgYW5kIGRvd24gYXJyb3cgc2hvdWxkIGZ1bmN0aW9uLlxuICAgICAqIG9ubHkgdXAgYW5kIGRvd24gYXJyb3cgc2hvdWxkIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdC5cbiAgICAgKi9cbiAgICBkZXRlcm1pbmVPcmllbnRhdGlvbiggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsID0gZXZlbnQudGFyZ2V0LnRhYmxpc3QuZ2V0QXR0cmlidXRlKCAnYXJpYS1vcmllbnRhdGlvbicgKSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgICAgbGV0IHByb2NlZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIHZlcnRpY2FsICkge1xuICAgICAgICAgICAgaWYgKCBrZXkgPT09IGtleXMudXAgfHwga2V5ID09PSBrZXlzLmRvd24gKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwcm9jZWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgga2V5ID09PSBrZXlzLmxlZnQgfHwga2V5ID09PSBrZXlzLnJpZ2h0ICkge1xuICAgICAgICAgICAgcHJvY2VlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHByb2NlZWQgKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYk9uQXJyb3dQcmVzcyggZXZlbnQgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVpdGhlciBmb2N1cyB0aGUgbmV4dCwgcHJldmlvdXMsIGZpcnN0LCBvciBsYXN0IHRhYlxuICAgICAqIGRlcGVuZGluZyBvbiB0aGUga2V5IHByZXNzZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QuXG4gICAgICovXG4gICAgc3dpdGNoVGFiT25BcnJvd1ByZXNzKCBldmVudCApIHtcbiAgICAgICAgY29uc3QgcHJlc3NlZCA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKCBkaXJlY3Rpb25bIHByZXNzZWQgXSApIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxpc3QgPSB0YXJnZXQudGFibGlzdDtcbiAgICAgICAgICAgIGNvbnN0IHRhYnMgPSB0YWJsaXN0LnRhYnM7XG4gICAgICAgICAgICBpZiAoIHRhcmdldC5pbmRleCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIGlmICggdGFic1sgdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uWyBwcmVzc2VkIF0gXSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGFic1sgdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uWyBwcmVzc2VkIF0gXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHByZXNzZWQgPT09IGtleXMubGVmdCB8fCBwcmVzc2VkID09PSBrZXlzLnVwICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTGFzdFRhYiggdGFibGlzdCApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHByZXNzZWQgPT09IGtleXMucmlnaHQgfHwgcHJlc3NlZCA9PT0ga2V5cy5kb3duICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRmlyc3RUYWIoIHRhYmxpc3QgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgYW55IGdpdmVuIHRhYiBwYW5lbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIEEgdGFiIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZXRGb2N1cyBXaGV0aGVyIHRvIHNldCBmb2N1cy5cbiAgICAgKi9cbiAgICBhY3RpdmF0ZVRhYiggdGFiLCBzZXRGb2N1cyApIHtcbiAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgb3RoZXIgdGFic1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVUYWJzKCB0YWIudGFibGlzdCApO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0YWJpbmRleCBhdHRyaWJ1dGUuXG4gICAgICAgIHRhYi5yZW1vdmVBdHRyaWJ1dGUoICd0YWJpbmRleCcgKTtcblxuICAgICAgICAvLyBTZXQgdGhlIHRhYiBhcyBzZWxlY3RlZC5cbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSggJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScgKTtcblxuICAgICAgICAvLyBTZXQgQnVsbWEgY2xhc3MuXG4gICAgICAgIHRhYi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoICdpcy1hY3RpdmUnICk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGhpZGRlbiBhdHRyaWJ1dGUgZnJvbSB0YWIgcGFuZWwgdG8gbWFrZSBpdCB2aXNpYmxlLlxuICAgICAgICB0YWIucGFuZWwucmVtb3ZlQXR0cmlidXRlKCAnaGlkZGVuJyApO1xuXG4gICAgICAgIC8vIFNldCBmb2N1cyB3aGVuIHJlcXVpcmVkLlxuICAgICAgICBpZiAoIHNldEZvY3VzICkge1xuICAgICAgICAgICAgdGFiLnBhbmVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlIGFsbCB0YWJzIGFuZCB0YWIgcGFuZWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWJsaXN0IFRoZSB0YWJsaXN0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZGVhY3RpdmF0ZVRhYnMoIHRhYmxpc3QgKSB7XG4gICAgICAgIGZvciAoIGxldCB0ID0gMDsgdCA8IHRhYmxpc3QudGFicy5sZW5ndGg7IHQrKyApIHtcbiAgICAgICAgICAgIHRhYmxpc3QudGFic1sgdCBdLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWFjdGl2ZScgKTtcbiAgICAgICAgICAgIHRhYmxpc3QudGFic1sgdCBdLnNldEF0dHJpYnV0ZSggJ3RhYmluZGV4JywgJy0xJyApO1xuICAgICAgICAgICAgdGFibGlzdC50YWJzWyB0IF0uc2V0QXR0cmlidXRlKCAnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIGxldCBwID0gMDsgcCA8IHRhYmxpc3QucGFuZWxzLmxlbmd0aDsgcCsrICkge1xuICAgICAgICAgICAgdGFibGlzdC5wYW5lbHNbIHAgXS5zZXRBdHRyaWJ1dGUoICdoaWRkZW4nLCAnaGlkZGVuJyApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgb24gdGhlIGZpcnN0IHRhYiBpbiB0aGUgdGFibGlzdCBvZiB0aGUgZ2l2ZW4gdGFiLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFibGlzdCBBIHRhYmxpc3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBmb2N1c0ZpcnN0VGFiKCB0YWJsaXN0ICkge1xuICAgICAgICB0YWJsaXN0LmZpcnN0VGFiLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9jdXMgb24gdGhlIGxhc3QgdGFiIGluIHRoZSB0YWJsaXN0IG9mIHRoZSBnaXZlbiB0YWIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWJsaXN0IEEgdGFibGlzdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGZvY3VzTGFzdFRhYiggdGFibGlzdCApIHtcbiAgICAgICAgdGFibGlzdC5sYXN0VGFiLmZvY3VzKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==