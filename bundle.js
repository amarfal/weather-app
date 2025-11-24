/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-orange: #ff8c42;
  --dark-orange: #e67a34;
  --light-grey: #f5f5f5;
  --medium-grey: #e8e8e8;
  --dark-grey: #666666;
  --text-dark: #333333;
  --text-light: #666666;
  --white: #ffffff;
  --shadow: rgba(0, 0, 0, 0);
}

body.night-mode {
  --primary-orange: #ff9d5c;
  --dark-orange: #ff8c42;
  --light-grey: #2a2a2a;
  --medium-grey: #1a1a2e;
  --dark-grey: #999999;
  --text-dark: #e0e0e0;
  --text-light: #b0b0b0;
  --white: #2d2d3f;
  --shadow: rgba(0, 0, 0, 0.3);
}

body.night-mode #gif-background::after {
  background-color: rgba(26, 26, 46, 0.85);
}

body.night-mode .app-title {
  color: #ffa866;
}

body.night-mode .toggle-button {
  border-color: var(--primary-orange);
  background-color: var(--white);
  color: var(--primary-orange);
}

body.night-mode .toggle-button:hover {
  background-color: var(--primary-orange);
  color: #1a1a2e;
}

body.night-mode .forecast-card.active {
  background-color: var(--light-grey);
  border-color: var(--primary-orange);
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  background-color: var(--medium-grey);
  color: var(--text-dark);
  line-height: 1.6;
  min-height: 100vh;
  position: relative;
}

#gif-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -2;
}

#gif-background::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(232, 232, 232, 0.85);
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

.app-title {
  font-family: "Lacquer", cursive;
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 0.5rem;
}

.app-subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  font-weight: 400;
}

.search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

#search-form {
  display: flex;
  gap: 1rem;
  flex: 1;
  max-width: 600px;
}

#location-input {
  flex: 1;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  background-color: var(--white);
  box-shadow: 0 2px 8px var(--shadow);
  outline: none;
  transition: box-shadow 0.3s ease;
}

#location-input:focus {
  box-shadow: 0 4px 12px var(--shadow);
}

.search-button {
  padding: 0.9rem 2.5rem;
  border: none;
  border-radius: 50px;
  background-color: var(--primary-orange);
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  font-family: "Lacquer", cursive;
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.search-button:hover {
  background-color: var(--dark-orange);
  box-shadow: 0 4px 12px var(--shadow);
  transform: translateY(-1px);
}

.search-button:active {
  transform: translateY(0);
}

.toggle-button {
  padding: 0.9rem 1.5rem;
  border: 2px solid var(--primary-orange);
  border-radius: 50px;
  background-color: var(--white);
  color: var(--primary-orange);
  font-size: 1rem;
  font-weight: 700;
  font-family: "Lacquer", cursive;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 60px;
}

.toggle-button:hover {
  background-color: var(--primary-orange);
  color: var(--white);
}

.error-message {
  display: none;
  background-color: #ff5252;
  color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px var(--shadow);
}

.current-weather-section {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.weather-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px var(--shadow);
  max-width: 500px;
  width: 100%;
}

.location-name {
  font-family: "Lacquer", cursive;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section-title {
  font-family: "Lacquer", cursive;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-dark);
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
}

.weather-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-light);
  font-size: 0.95rem;
}

.info-label {
  font-weight: 400;
}

.info-value {
  font-weight: 500;
  color: var(--text-dark);
}

.weather-description {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--medium-grey);
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.5;
}

.forecast-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.forecast-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.forecast-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px var(--shadow);
  border-color: var(--primary-orange);
}

.forecast-card.active {
  border-color: var(--primary-orange);
  background-color: var(--light-grey);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--shadow);
}

.forecast-date {
  font-family: "Lacquer", cursive;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

.forecast-emoji {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.forecast-condition {
  font-size: 0.75rem;
  color: var(--text-light);
  margin-bottom: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.forecast-temps {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

.temp-high {
  color: var(--primary-orange);
}

.temp-low {
  color: var(--dark-grey);
}

.temp-divider {
  color: var(--text-light);
  margin: 0 0.2rem;
}

.forecast-precip {
  font-size: 0.75rem;
  color: var(--text-light);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .app-title {
    font-size: 2rem;
  }

  .app-subtitle {
    font-size: 1rem;
  }

  .search-section {
    flex-direction: column;
    width: 100%;
  }

  #search-form {
    width: 100%;
    max-width: 100%;
  }

  .toggle-button {
    width: 100%;
  }

  .weather-card {
    padding: 1.5rem;
  }

  .forecast-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .forecast-card {
    padding: 1rem;
  }

  .forecast-emoji {
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-orange: #ff8c42;\n  --dark-orange: #e67a34;\n  --light-grey: #f5f5f5;\n  --medium-grey: #e8e8e8;\n  --dark-grey: #666666;\n  --text-dark: #333333;\n  --text-light: #666666;\n  --white: #ffffff;\n  --shadow: rgba(0, 0, 0, 0);\n}\n\nbody.night-mode {\n  --primary-orange: #ff9d5c;\n  --dark-orange: #ff8c42;\n  --light-grey: #2a2a2a;\n  --medium-grey: #1a1a2e;\n  --dark-grey: #999999;\n  --text-dark: #e0e0e0;\n  --text-light: #b0b0b0;\n  --white: #2d2d3f;\n  --shadow: rgba(0, 0, 0, 0.3);\n}\n\nbody.night-mode #gif-background::after {\n  background-color: rgba(26, 26, 46, 0.85);\n}\n\nbody.night-mode .app-title {\n  color: #ffa866;\n}\n\nbody.night-mode .toggle-button {\n  border-color: var(--primary-orange);\n  background-color: var(--white);\n  color: var(--primary-orange);\n}\n\nbody.night-mode .toggle-button:hover {\n  background-color: var(--primary-orange);\n  color: #1a1a2e;\n}\n\nbody.night-mode .forecast-card.active {\n  background-color: var(--light-grey);\n  border-color: var(--primary-orange);\n}\n\nbody {\n  font-family:\n    -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\",\n    Arial, sans-serif;\n  background-color: var(--medium-grey);\n  color: var(--text-dark);\n  line-height: 1.6;\n  min-height: 100vh;\n  position: relative;\n}\n\n#gif-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  z-index: -2;\n}\n\n#gif-background::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(232, 232, 232, 0.85);\n  z-index: 1;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  position: relative;\n  z-index: 1;\n}\n\nheader {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n.app-title {\n  font-family: \"Lacquer\", cursive;\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--primary-orange);\n  margin-bottom: 0.5rem;\n}\n\n.app-subtitle {\n  font-size: 1.1rem;\n  color: var(--text-light);\n  font-weight: 400;\n}\n\n.search-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n\n#search-form {\n  display: flex;\n  gap: 1rem;\n  flex: 1;\n  max-width: 600px;\n}\n\n#location-input {\n  flex: 1;\n  padding: 0.9rem 1.5rem;\n  border: none;\n  border-radius: 50px;\n  font-size: 1rem;\n  font-family:\n    -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\",\n    Arial, sans-serif;\n  background-color: var(--white);\n  box-shadow: 0 2px 8px var(--shadow);\n  outline: none;\n  transition: box-shadow 0.3s ease;\n}\n\n#location-input:focus {\n  box-shadow: 0 4px 12px var(--shadow);\n}\n\n.search-button {\n  padding: 0.9rem 2.5rem;\n  border: none;\n  border-radius: 50px;\n  background-color: var(--primary-orange);\n  color: var(--white);\n  font-size: 1rem;\n  font-weight: 700;\n  font-family: \"Lacquer\", cursive;\n  cursor: pointer;\n  box-shadow: 0 2px 8px var(--shadow);\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n\n.search-button:hover {\n  background-color: var(--dark-orange);\n  box-shadow: 0 4px 12px var(--shadow);\n  transform: translateY(-1px);\n}\n\n.search-button:active {\n  transform: translateY(0);\n}\n\n.toggle-button {\n  padding: 0.9rem 1.5rem;\n  border: 2px solid var(--primary-orange);\n  border-radius: 50px;\n  background-color: var(--white);\n  color: var(--primary-orange);\n  font-size: 1rem;\n  font-weight: 700;\n  font-family: \"Lacquer\", cursive;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 60px;\n}\n\n.toggle-button:hover {\n  background-color: var(--primary-orange);\n  color: var(--white);\n}\n\n.error-message {\n  display: none;\n  background-color: #ff5252;\n  color: var(--white);\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  text-align: center;\n  box-shadow: 0 2px 8px var(--shadow);\n}\n\n.current-weather-section {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n\n.weather-card {\n  background-color: var(--white);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 16px var(--shadow);\n  max-width: 500px;\n  width: 100%;\n}\n\n.location-name {\n  font-family: \"Lacquer\", cursive;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n}\n\n.section-title {\n  font-family: \"Lacquer\", cursive;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  letter-spacing: 0.5px;\n  margin-bottom: 1.5rem;\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--text-light);\n  font-size: 0.95rem;\n}\n\n.info-label {\n  font-weight: 400;\n}\n\n.info-value {\n  font-weight: 500;\n  color: var(--text-dark);\n}\n\n.weather-description {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--medium-grey);\n  color: var(--text-light);\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n\n.forecast-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n.forecast-card {\n  background-color: var(--white);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px var(--shadow);\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n\n.forecast-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 16px var(--shadow);\n  border-color: var(--primary-orange);\n}\n\n.forecast-card.active {\n  border-color: var(--primary-orange);\n  background-color: var(--light-grey);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px var(--shadow);\n}\n\n.forecast-date {\n  font-family: \"Lacquer\", cursive;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  white-space: nowrap;\n}\n\n.forecast-emoji {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.forecast-condition {\n  font-size: 0.75rem;\n  color: var(--text-light);\n  margin-bottom: 0.8rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forecast-temps {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  white-space: nowrap;\n}\n\n.temp-high {\n  color: var(--primary-orange);\n}\n\n.temp-low {\n  color: var(--dark-grey);\n}\n\n.temp-divider {\n  color: var(--text-light);\n  margin: 0 0.2rem;\n}\n\n.forecast-precip {\n  font-size: 0.75rem;\n  color: var(--text-light);\n  white-space: nowrap;\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 1rem;\n  }\n\n  .app-title {\n    font-size: 2rem;\n  }\n\n  .app-subtitle {\n    font-size: 1rem;\n  }\n\n  .search-section {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  #search-form {\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .toggle-button {\n    width: 100%;\n  }\n\n  .weather-card {\n    padding: 1.5rem;\n  }\n\n  .forecast-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .forecast-card {\n    padding: 1rem;\n  }\n\n  .forecast-emoji {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),
/* harmony export */   fetchWeatherGif: () => (/* binding */ fetchWeatherGif)
/* harmony export */ });
const WEATHER_API_KEY = "TNPC3LVFJ93B9KPRKPXVYNRUA";
const GIPHY_API_KEY = "JJNEbHxsGF9uI9Q3dQRcJn7fhXGeYzEq";

const WEATHER_BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/search";

async function fetchWeatherData(location) {
  try {
    const response = await fetch(
      `${WEATHER_BASE_URL}/${encodeURIComponent(location)}?key=${WEATHER_API_KEY}&unitGroup=metric`,
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
}

async function fetchWeatherGif(weatherCondition) {
  const condition = weatherCondition.toLowerCase();

  if (
    condition.includes("snow") ||
    condition.includes("snowy") ||
    condition.includes("snowing")
  ) {
    return "https://media.giphy.com/media/6YNgoTEPs6vZe/giphy.gif";
  }

  if (
    condition.includes("thunder") ||
    condition.includes("lightning") ||
    condition.includes("storm")
  ) {
    return "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif";
  }

  if (
    condition.includes("rain") ||
    condition.includes("rainy") ||
    condition.includes("drizzle")
  ) {
    return "https://media.giphy.com/media/129BtnUUD6Lrzi/giphy.gif";
  }

  if (condition.includes("sunny") || condition.includes("clear")) {
    return "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif";
  }

  return "https://media.giphy.com/media/HvYdoLbPqSdNu/giphy.gif";
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDisplay: () => (/* binding */ clearDisplay),
/* harmony export */   clearError: () => (/* binding */ clearError),
/* harmony export */   renderCurrentWeather: () => (/* binding */ renderCurrentWeather),
/* harmony export */   renderForecast: () => (/* binding */ renderForecast),
/* harmony export */   renderForecastDayAsCurrent: () => (/* binding */ renderForecastDayAsCurrent),
/* harmony export */   setBackgroundGif: () => (/* binding */ setBackgroundGif),
/* harmony export */   setTheme: () => (/* binding */ setTheme),
/* harmony export */   showError: () => (/* binding */ showError)
/* harmony export */ });
/* harmony import */ var _weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherProcessor.js */ "./src/weatherProcessor.js");


function setTheme(isNight) {
  const body = document.body;
  if (isNight) {
    body.classList.add("night-mode");
  } else {
    body.classList.remove("night-mode");
  }
}

function renderCurrentWeather(data, unit) {
  const currentWeatherSection = document.getElementById("current-weather");

  currentWeatherSection.innerHTML = `
    <div class="weather-card">
      <h2 class="location-name">${data.location}</h2>
      <h3 class="section-title">CURRENT WEATHER</h3>
      
      <div class="weather-info">
        <div class="info-row">
          <span class="info-label">Temperature:</span>
          <span class="info-value">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatTemperature)(data.current.temp, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Feels Like:</span>
          <span class="info-value">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatTemperature)(data.current.feelsLike, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Humidity:</span>
          <span class="info-value">${Math.round(data.current.humidity)} %</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Wind Speed:</span>
          <span class="info-value">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatWindSpeed)(data.current.windSpeed)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherEmoji)(data.current.condition)} ${data.current.condition}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatFullDate)(data.current.datetime)}</span>
        </div>
        
        <div class="weather-description">
          ${data.current.description}
        </div>
      </div>
    </div>
  `;
}

function renderForecastDayAsCurrent(location, day, unit) {
  const currentWeatherSection = document.getElementById("current-weather");

  const avgTemp = (day.high + day.low) / 2;

  currentWeatherSection.innerHTML = `
    <div class="weather-card">
      <h2 class="location-name">${location}</h2>
      <h3 class="section-title">FORECAST FOR ${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatFullDate)(day.date).toUpperCase()}</h3>
      
      <div class="weather-info">
        <div class="info-row">
          <span class="info-label">High Temperature:</span>
          <span class="info-value">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatTemperature)(day.high, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Low Temperature:</span>
          <span class="info-value">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatTemperature)(day.low, unit)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Humidity:</span>
          <span class="info-value">${Math.round(day.humidity)} %</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Wind Speed:</span>
          <span class="info-value">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatWindSpeed)(day.windSpeed)}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherEmoji)(day.condition)} ${day.condition}</span>
        </div>
        
        <div class="info-row">
          <span class="info-label">Precipitation Chance: ${day.precipChance}%</span>
        </div>
        
        <div class="weather-description">
          ${day.description}
        </div>
      </div>
    </div>
  `;
}

function renderForecast(
  forecastData,
  unit,
  onDayClick,
  activeIndex = null,
) {
  const forecastSection = document.getElementById("forecast");

  const forecastCards = forecastData
    .map(
      (day, index) => `
    <div class="forecast-card ${activeIndex === index ? "active" : ""}" data-index="${index}">
      <div class="forecast-date">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatDate)(day.date)}</div>
      <div class="forecast-emoji">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherEmoji)(day.condition)}</div>
      <div class="forecast-condition">${day.condition}</div>
      <div class="forecast-temps">
        <span class="temp-high">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatTemperature)(day.high, unit)}</span>
        <span class="temp-divider">/</span>
        <span class="temp-low">${(0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_0__.formatTemperature)(day.low, unit)}</span>
      </div>
      <div class="forecast-precip">Precip: ${day.precipChance}%</div>
    </div>
  `,
    )
    .join("");

  forecastSection.innerHTML = forecastCards;

  const cards = forecastSection.querySelectorAll(".forecast-card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => onDayClick(index));
  });
}

function setBackgroundGif(gifUrl) {
  const gifBackground = document.getElementById("gif-background");

  if (gifUrl) {
    gifBackground.style.backgroundImage = `url('${gifUrl}')`;
    gifBackground.style.opacity = "1";
  } else {
    gifBackground.style.backgroundImage = "none";
    gifBackground.style.opacity = "0";
  }
}

function showError(message) {
  const errorContainer = document.getElementById("error-message");
  errorContainer.textContent = message;
  errorContainer.style.display = "block";

  setTimeout(() => {
    errorContainer.style.display = "none";
  }, 5000);
}

function clearError() {
  const errorContainer = document.getElementById("error-message");
  errorContainer.style.display = "none";
  errorContainer.textContent = "";
}

function clearDisplay() {
  document.getElementById("current-weather").innerHTML = "";
  document.getElementById("forecast").innerHTML = "";
  setBackgroundGif(null);
}


/***/ }),

/***/ "./src/weatherProcessor.js":
/*!*********************************!*\
  !*** ./src/weatherProcessor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertKmhToMph: () => (/* binding */ convertKmhToMph),
/* harmony export */   convertToCelsius: () => (/* binding */ convertToCelsius),
/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatFullDate: () => (/* binding */ formatFullDate),
/* harmony export */   formatTemperature: () => (/* binding */ formatTemperature),
/* harmony export */   formatWindSpeed: () => (/* binding */ formatWindSpeed),
/* harmony export */   getWeatherEmoji: () => (/* binding */ getWeatherEmoji),
/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)
/* harmony export */ });
function processWeatherData(rawData) {
  const currentConditions = rawData.currentConditions;
  const forecast = rawData.days;
  const currentDay = rawData.days[0];

  const isNightTime = checkIfNightTime(
    currentConditions.datetime,
    currentDay.sunrise,
    currentDay.sunset,
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const filteredForecast = forecast
    .filter((day) => {
      const forecastDate = new Date(day.datetime);
      forecastDate.setHours(0, 0, 0, 0);
      return forecastDate >= tomorrow;
    })
    .slice(0, 6);

  const currentDate = new Date().toISOString().split("T")[0];

  return {
    location: rawData.resolvedAddress,
    isNight: isNightTime,
    current: {
      temp: currentConditions.temp,
      feelsLike: currentConditions.feelslike,
      humidity: currentConditions.humidity,
      windSpeed: currentConditions.windspeed,
      condition: currentConditions.conditions,
      icon: currentConditions.icon,
      datetime: currentDate,
      description: rawData.description,
    },
    forecast: filteredForecast.map((day) => ({
      date: day.datetime,
      high: day.tempmax,
      low: day.tempmin,
      condition: day.conditions,
      precipChance: day.precipprob,
      icon: day.icon,
      description: day.description,
      humidity: day.humidity,
      windSpeed: day.windspeed,
      sunrise: day.sunrise,
      sunset: day.sunset,
    })),
  };
}

function checkIfNightTime(currentTime, sunrise, sunset) {
  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const currentMinutes = parseTime(currentTime);
  const sunriseMinutes = parseTime(sunrise);
  const sunsetMinutes = parseTime(sunset);

  return currentMinutes < sunriseMinutes || currentMinutes > sunsetMinutes;
}

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function formatTemperature(temp, unit) {
  const value = unit === "F" ? convertToFahrenheit(temp) : temp;
  return `${Math.round(value)} °${unit}`;
}

function convertKmhToMph(kmh) {
  return kmh * 0.621371;
}

function formatWindSpeed(kmh) {
  const mph = convertKmhToMph(kmh);
  return `${Math.round(mph)} mph`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function formatFullDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

function getWeatherEmoji(condition) {
  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("snow") || conditionLower.includes("blizzard")) {
    return "❄️";
  }
  if (
    conditionLower.includes("thunder") ||
    conditionLower.includes("lightning") ||
    conditionLower.includes("storm")
  ) {
    return "⚡";
  }
  if (
    conditionLower.includes("rain") ||
    conditionLower.includes("drizzle") ||
    conditionLower.includes("shower")
  ) {
    return "🌧️";
  }
  if (conditionLower.includes("clear") || conditionLower.includes("sunny")) {
    return "☀️";
  }
  if (
    conditionLower.includes("cloud") ||
    conditionLower.includes("overcast") ||
    conditionLower.includes("partly")
  ) {
    return "☁️";
  }
  if (conditionLower.includes("fog") || conditionLower.includes("mist")) {
    return "🌫️";
  }
  if (conditionLower.includes("wind")) {
    return "💨";
  }

  return "☁️";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _weatherProcessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherProcessor.js */ "./src/weatherProcessor.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");





let currentUnit = "F";
let currentWeatherData = null;
let selectedDayIndex = null;

async function loadWeather(location) {
  try {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.clearError)();

    const rawData = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherData)(location);
    currentWeatherData = (0,_weatherProcessor_js__WEBPACK_IMPORTED_MODULE_2__.processWeatherData)(rawData);
    selectedDayIndex = null;

    const gifUrl = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherGif)(currentWeatherData.current.condition);

    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.setTheme)(currentWeatherData.isNight);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderCurrentWeather)(currentWeatherData, currentUnit);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderForecast)(
      currentWeatherData.forecast,
      currentUnit,
      handleDayClick,
      selectedDayIndex,
    );
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.setBackgroundGif)(gifUrl);
  } catch (error) {
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.showError)(`Unable to fetch weather data. Please try again.`);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.clearDisplay)();
  }
}

async function handleDayClick(dayIndex) {
  if (!currentWeatherData) return;

  selectedDayIndex = dayIndex;
  const selectedDay = currentWeatherData.forecast[dayIndex];

  const gifUrl = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherGif)(selectedDay.condition);

  (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderForecastDayAsCurrent)(
    currentWeatherData.location,
    selectedDay,
    currentUnit,
  );
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderForecast)(
    currentWeatherData.forecast,
    currentUnit,
    handleDayClick,
    selectedDayIndex,
  );
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.setBackgroundGif)(gifUrl);
}

function toggleTemperatureUnit() {
  currentUnit = currentUnit === "C" ? "F" : "C";

  const toggleButton = document.getElementById("unit-toggle");
  toggleButton.textContent = `°${currentUnit}`;

  if (currentWeatherData) {
    if (selectedDayIndex !== null) {
      const selectedDay = currentWeatherData.forecast[selectedDayIndex];
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderForecastDayAsCurrent)(
        currentWeatherData.location,
        selectedDay,
        currentUnit,
      );
    } else {
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderCurrentWeather)(currentWeatherData, currentUnit);
    }
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.renderForecast)(
      currentWeatherData.forecast,
      currentUnit,
      handleDayClick,
      selectedDayIndex,
    );
  }
}

function initializeApp() {
  const searchForm = document.getElementById("search-form");
  const locationInput = document.getElementById("location-input");
  const toggleButton = document.getElementById("unit-toggle");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();

    if (location) {
      loadWeather(location);
    }
  });

  toggleButton.addEventListener("click", toggleTemperatureUnit);
}

document.addEventListener("DOMContentLoaded", initializeApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdB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d2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlclByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLXByaW1hcnktb3JhbmdlOiAjZmY4YzQyO1xuICAtLWRhcmstb3JhbmdlOiAjZTY3YTM0O1xuICAtLWxpZ2h0LWdyZXk6ICNmNWY1ZjU7XG4gIC0tbWVkaXVtLWdyZXk6ICNlOGU4ZTg7XG4gIC0tZGFyay1ncmV5OiAjNjY2NjY2O1xuICAtLXRleHQtZGFyazogIzMzMzMzMztcbiAgLS10ZXh0LWxpZ2h0OiAjNjY2NjY2O1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuYm9keS5uaWdodC1tb2RlIHtcbiAgLS1wcmltYXJ5LW9yYW5nZTogI2ZmOWQ1YztcbiAgLS1kYXJrLW9yYW5nZTogI2ZmOGM0MjtcbiAgLS1saWdodC1ncmV5OiAjMmEyYTJhO1xuICAtLW1lZGl1bS1ncmV5OiAjMWExYTJlO1xuICAtLWRhcmstZ3JleTogIzk5OTk5OTtcbiAgLS10ZXh0LWRhcms6ICNlMGUwZTA7XG4gIC0tdGV4dC1saWdodDogI2IwYjBiMDtcbiAgLS13aGl0ZTogIzJkMmQzZjtcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuYm9keS5uaWdodC1tb2RlICNnaWYtYmFja2dyb3VuZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNiwgNDYsIDAuODUpO1xufVxuXG5ib2R5Lm5pZ2h0LW1vZGUgLmFwcC10aXRsZSB7XG4gIGNvbG9yOiAjZmZhODY2O1xufVxuXG5ib2R5Lm5pZ2h0LW1vZGUgLnRvZ2dsZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xufVxuXG5ib2R5Lm5pZ2h0LW1vZGUgLnRvZ2dsZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIGNvbG9yOiAjMWExYTJlO1xufVxuXG5ib2R5Lm5pZ2h0LW1vZGUgLmZvcmVjYXN0LWNhcmQuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6XG4gICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jZ2lmLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgei1pbmRleDogLTI7XG59XG5cbiNnaWYtYmFja2dyb3VuZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjg1KTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5hcHAtdGl0bGUge1xuICBmb250LWZhbWlseTogXCJMYWNxdWVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uYXBwLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4jc2VhcmNoLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbiNsb2NhdGlvbi1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAuOXJlbSAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTpcbiAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdyk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuXG4jbG9jYXRpb24taW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdyk7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgcGFkZGluZzogMC45cmVtIDIuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiTGFjcXVlclwiLCBjdXJzaXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCB2YXIoLS1zaGFkb3cpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5zZWFyY2gtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLnRvZ2dsZS1idXR0b24ge1xuICBwYWRkaW5nOiAwLjlyZW0gMS41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJMYWNxdWVyXCIsIGN1cnNpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuXG4udG9nZ2xlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1zaGFkb3cpO1xufVxuXG4uY3VycmVudC13ZWF0aGVyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLndlYXRoZXItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCB2YXIoLS1zaGFkb3cpO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvY2F0aW9uLW5hbWUge1xuICBmb250LWZhbWlseTogXCJMYWNxdWVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJMYWNxdWVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi53ZWF0aGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuOHJlbTtcbn1cblxuLmluZm8tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cblxuLmluZm8tbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW5mby12YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuXG4ud2VhdGhlci1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZvcmVjYXN0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5mb3JlY2FzdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCB2YXIoLS1zaGFkb3cpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JlY2FzdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHZhcigtLXNoYWRvdyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xufVxuXG4uZm9yZWNhc3QtY2FyZC5hY3RpdmUge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCB2YXIoLS1zaGFkb3cpO1xufVxuXG4uZm9yZWNhc3QtZGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhY3F1ZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZm9yZWNhc3QtZW1vamkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9yZWNhc3QtY29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5mb3JlY2FzdC10ZW1wcyB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRlbXAtaGlnaCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG59XG5cbi50ZW1wLWxvdyB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xufVxuXG4udGVtcC1kaXZpZGVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBtYXJnaW46IDAgMC4ycmVtO1xufVxuXG4uZm9yZWNhc3QtcHJlY2lwIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmFwcC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLmFwcC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLnNlYXJjaC1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3NlYXJjaC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAud2VhdGhlci1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cblxuICAuZm9yZWNhc3Qtc2VjdGlvbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIC5mb3JlY2FzdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLmZvcmVjYXN0LWVtb2ppIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFOztxQkFFbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0Ms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QUMzQixvQ0FBb0M7RUFDcEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LW9yYW5nZTogI2ZmOGM0MjtcXG4gIC0tZGFyay1vcmFuZ2U6ICNlNjdhMzQ7XFxuICAtLWxpZ2h0LWdyZXk6ICNmNWY1ZjU7XFxuICAtLW1lZGl1bS1ncmV5OiAjZThlOGU4O1xcbiAgLS1kYXJrLWdyZXk6ICM2NjY2NjY7XFxuICAtLXRleHQtZGFyazogIzMzMzMzMztcXG4gIC0tdGV4dC1saWdodDogIzY2NjY2NjtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuYm9keS5uaWdodC1tb2RlIHtcXG4gIC0tcHJpbWFyeS1vcmFuZ2U6ICNmZjlkNWM7XFxuICAtLWRhcmstb3JhbmdlOiAjZmY4YzQyO1xcbiAgLS1saWdodC1ncmV5OiAjMmEyYTJhO1xcbiAgLS1tZWRpdW0tZ3JleTogIzFhMWEyZTtcXG4gIC0tZGFyay1ncmV5OiAjOTk5OTk5O1xcbiAgLS10ZXh0LWRhcms6ICNlMGUwZTA7XFxuICAtLXRleHQtbGlnaHQ6ICNiMGIwYjA7XFxuICAtLXdoaXRlOiAjMmQyZDNmO1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuYm9keS5uaWdodC1tb2RlICNnaWYtYmFja2dyb3VuZDo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjYsIDQ2LCAwLjg1KTtcXG59XFxuXFxuYm9keS5uaWdodC1tb2RlIC5hcHAtdGl0bGUge1xcbiAgY29sb3I6ICNmZmE4NjY7XFxufVxcblxcbmJvZHkubmlnaHQtbW9kZSAudG9nZ2xlLWJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxufVxcblxcbmJvZHkubmlnaHQtbW9kZSAudG9nZ2xlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxuICBjb2xvcjogIzFhMWEyZTtcXG59XFxuXFxuYm9keS5uaWdodC1tb2RlIC5mb3JlY2FzdC1jYXJkLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2dpZi1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbiAgei1pbmRleDogLTI7XFxufVxcblxcbiNnaWYtYmFja2dyb3VuZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuODUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uYXBwLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFjcXVlclxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmFwcC1zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zZWFyY2gtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4OiAxO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuI2xvY2F0aW9uLWlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwLjlyZW0gMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZTtcXG59XFxuXFxuI2xvY2F0aW9uLWlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgcGFkZGluZzogMC45cmVtIDIuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFjcXVlclxcXCIsIGN1cnNpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi50b2dnbGUtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuOXJlbSAxLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogXFxcIkxhY3F1ZXJcXFwiLCBjdXJzaXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIG1pbi13aWR0aDogNjBweDtcXG59XFxuXFxuLnRvZ2dsZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCB2YXIoLS1zaGFkb3cpO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubG9jYXRpb24tbmFtZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhY3F1ZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhY3F1ZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLmluZm8tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcbn1cXG5cXG4uaW5mby1sYWJlbCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaW5mby12YWx1ZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxufVxcblxcbi53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBmb250LXNpemU6IDAuOTVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCB2YXIoLS1zaGFkb3cpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkLmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF0ZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhY3F1ZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmZvcmVjYXN0LWVtb2ppIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5mb3JlY2FzdC10ZW1wcyB7XFxuICBmb250LXNpemU6IDAuOTVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udGVtcC1oaWdoIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxufVxcblxcbi50ZW1wLWxvdyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLnRlbXAtZGl2aWRlciB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBtYXJnaW46IDAgMC4ycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtcHJlY2lwIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAuYXBwLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmFwcC1zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgI3NlYXJjaC1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50b2dnbGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAud2VhdGhlci1jYXJkIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNhcmQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWVtb2ppIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgV0VBVEhFUl9BUElfS0VZID0gcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZO1xuY29uc3QgR0lQSFlfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdJUEhZX0FQSV9LRVk7XG5cbmNvbnN0IFdFQVRIRVJfQkFTRV9VUkwgPVxuICBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lXCI7XG5jb25zdCBHSVBIWV9CQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke1dFQVRIRVJfQkFTRV9VUkx9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uKX0/a2V5PSR7V0VBVEhFUl9BUElfS0VZfSZ1bml0R3JvdXA9bWV0cmljYCxcbiAgICApO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBXZWF0aGVyIEFQSSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCB3ZWF0aGVyIGRhdGE6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyR2lmKHdlYXRoZXJDb25kaXRpb24pIHtcbiAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlckNvbmRpdGlvbi50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChcbiAgICBjb25kaXRpb24uaW5jbHVkZXMoXCJzbm93XCIpIHx8XG4gICAgY29uZGl0aW9uLmluY2x1ZGVzKFwic25vd3lcIikgfHxcbiAgICBjb25kaXRpb24uaW5jbHVkZXMoXCJzbm93aW5nXCIpXG4gICkge1xuICAgIHJldHVybiBcImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzZZTmdvVEVQczZ2WmUvZ2lwaHkuZ2lmXCI7XG4gIH1cblxuICBpZiAoXG4gICAgY29uZGl0aW9uLmluY2x1ZGVzKFwidGh1bmRlclwiKSB8fFxuICAgIGNvbmRpdGlvbi5pbmNsdWRlcyhcImxpZ2h0bmluZ1wiKSB8fFxuICAgIGNvbmRpdGlvbi5pbmNsdWRlcyhcInN0b3JtXCIpXG4gICkge1xuICAgIHJldHVybiBcImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL0NoMXpDeDh0dTZEUVkvZ2lwaHkuZ2lmXCI7XG4gIH1cblxuICBpZiAoXG4gICAgY29uZGl0aW9uLmluY2x1ZGVzKFwicmFpblwiKSB8fFxuICAgIGNvbmRpdGlvbi5pbmNsdWRlcyhcInJhaW55XCIpIHx8XG4gICAgY29uZGl0aW9uLmluY2x1ZGVzKFwiZHJpenpsZVwiKVxuICApIHtcbiAgICByZXR1cm4gXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS8xMjlCdG5VVUQ2THJ6aS9naXBoeS5naWZcIjtcbiAgfVxuXG4gIGlmIChjb25kaXRpb24uaW5jbHVkZXMoXCJzdW5ueVwiKSB8fCBjb25kaXRpb24uaW5jbHVkZXMoXCJjbGVhclwiKSkge1xuICAgIHJldHVybiBcImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL0h2WWRvTGJQcVNkTnUvZ2lwaHkuZ2lmXCI7XG4gIH1cblxuICByZXR1cm4gXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9Idllkb0xiUHFTZE51L2dpcGh5LmdpZlwiO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHtcclxuICBmb3JtYXRUZW1wZXJhdHVyZSxcclxuICBmb3JtYXREYXRlLFxyXG4gIGZvcm1hdEZ1bGxEYXRlLFxyXG4gIGZvcm1hdFdpbmRTcGVlZCxcclxuICBnZXRXZWF0aGVyRW1vamksXHJcbn0gZnJvbSBcIi4vd2VhdGhlclByb2Nlc3Nvci5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoZW1lKGlzTmlnaHQpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBpZiAoaXNOaWdodCkge1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibmlnaHQtbW9kZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibmlnaHQtbW9kZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhLCB1bml0KSB7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXdlYXRoZXJcIik7XHJcblxyXG4gIGN1cnJlbnRXZWF0aGVyU2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1jYXJkXCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cImxvY2F0aW9uLW5hbWVcIj4ke2RhdGEubG9jYXRpb259PC9oMj5cclxuICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkNVUlJFTlQgV0VBVEhFUjwvaDM+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGFiZWxcIj5UZW1wZXJhdHVyZTo8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tdmFsdWVcIj4ke2Zvcm1hdFRlbXBlcmF0dXJlKGRhdGEuY3VycmVudC50ZW1wLCB1bml0KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGFiZWxcIj5GZWVscyBMaWtlOjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby12YWx1ZVwiPiR7Zm9ybWF0VGVtcGVyYXR1cmUoZGF0YS5jdXJyZW50LmZlZWxzTGlrZSwgdW5pdCl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxhYmVsXCI+SHVtaWRpdHk6PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLXZhbHVlXCI+JHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5odW1pZGl0eSl9ICU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGFiZWxcIj5XaW5kIFNwZWVkOjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby12YWx1ZVwiPiR7Zm9ybWF0V2luZFNwZWVkKGRhdGEuY3VycmVudC53aW5kU3BlZWQpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1sYWJlbFwiPiR7Z2V0V2VhdGhlckVtb2ppKGRhdGEuY3VycmVudC5jb25kaXRpb24pfSAke2RhdGEuY3VycmVudC5jb25kaXRpb259PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxhYmVsXCI+JHtmb3JtYXRGdWxsRGF0ZShkYXRhLmN1cnJlbnQuZGF0ZXRpbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgJHtkYXRhLmN1cnJlbnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0RGF5QXNDdXJyZW50KGxvY2F0aW9uLCBkYXksIHVuaXQpIHtcclxuICBjb25zdCBjdXJyZW50V2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtd2VhdGhlclwiKTtcclxuXHJcbiAgY29uc3QgYXZnVGVtcCA9IChkYXkuaGlnaCArIGRheS5sb3cpIC8gMjtcclxuXHJcbiAgY3VycmVudFdlYXRoZXJTZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWNhcmRcIj5cclxuICAgICAgPGgyIGNsYXNzPVwibG9jYXRpb24tbmFtZVwiPiR7bG9jYXRpb259PC9oMj5cclxuICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkZPUkVDQVNUIEZPUiAke2Zvcm1hdEZ1bGxEYXRlKGRheS5kYXRlKS50b1VwcGVyQ2FzZSgpfTwvaDM+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGFiZWxcIj5IaWdoIFRlbXBlcmF0dXJlOjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby12YWx1ZVwiPiR7Zm9ybWF0VGVtcGVyYXR1cmUoZGF5LmhpZ2gsIHVuaXQpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1sYWJlbFwiPkxvdyBUZW1wZXJhdHVyZTo8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tdmFsdWVcIj4ke2Zvcm1hdFRlbXBlcmF0dXJlKGRheS5sb3csIHVuaXQpfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1sYWJlbFwiPkh1bWlkaXR5Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby12YWx1ZVwiPiR7TWF0aC5yb3VuZChkYXkuaHVtaWRpdHkpfSAlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxhYmVsXCI+V2luZCBTcGVlZDo8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tdmFsdWVcIj4ke2Zvcm1hdFdpbmRTcGVlZChkYXkud2luZFNwZWVkKX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tbGFiZWxcIj4ke2dldFdlYXRoZXJFbW9qaShkYXkuY29uZGl0aW9uKX0gJHtkYXkuY29uZGl0aW9ufTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1sYWJlbFwiPlByZWNpcGl0YXRpb24gQ2hhbmNlOiAke2RheS5wcmVjaXBDaGFuY2V9JTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgJHtkYXkuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KFxyXG4gIGZvcmVjYXN0RGF0YSxcclxuICB1bml0LFxyXG4gIG9uRGF5Q2xpY2ssXHJcbiAgYWN0aXZlSW5kZXggPSBudWxsLFxyXG4pIHtcclxuICBjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0XCIpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdENhcmRzID0gZm9yZWNhc3REYXRhXHJcbiAgICAubWFwKFxyXG4gICAgICAoZGF5LCBpbmRleCkgPT4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0LWNhcmQgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIn1cIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0LWRhdGVcIj4ke2Zvcm1hdERhdGUoZGF5LmRhdGUpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9yZWNhc3QtZW1vamlcIj4ke2dldFdlYXRoZXJFbW9qaShkYXkuY29uZGl0aW9uKX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0LWNvbmRpdGlvblwiPiR7ZGF5LmNvbmRpdGlvbn08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0LXRlbXBzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wLWhpZ2hcIj4ke2Zvcm1hdFRlbXBlcmF0dXJlKGRheS5oaWdoLCB1bml0KX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wLWRpdmlkZXJcIj4vPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcC1sb3dcIj4ke2Zvcm1hdFRlbXBlcmF0dXJlKGRheS5sb3csIHVuaXQpfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1wcmVjaXBcIj5QcmVjaXA6ICR7ZGF5LnByZWNpcENoYW5jZX0lPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gICAgKVxyXG4gICAgLmpvaW4oXCJcIik7XHJcblxyXG4gIGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBmb3JlY2FzdENhcmRzO1xyXG5cclxuICBjb25zdCBjYXJkcyA9IGZvcmVjYXN0U2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0LWNhcmRcIik7XHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG9uRGF5Q2xpY2soaW5kZXgpKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEJhY2tncm91bmRHaWYoZ2lmVXJsKSB7XHJcbiAgY29uc3QgZ2lmQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2lmLWJhY2tncm91bmRcIik7XHJcblxyXG4gIGlmIChnaWZVcmwpIHtcclxuICAgIGdpZkJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtnaWZVcmx9JylgO1xyXG4gICAgZ2lmQmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdpZkJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJub25lXCI7XHJcbiAgICBnaWZCYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RXJyb3IobWVzc2FnZSkge1xyXG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tZXNzYWdlXCIpO1xyXG4gIGVycm9yQ29udGFpbmVyLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICBlcnJvckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVycm9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9LCA1MDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRXJyb3IoKSB7XHJcbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLW1lc3NhZ2VcIik7XHJcbiAgZXJyb3JDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGVycm9yQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtd2VhdGhlclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICBzZXRCYWNrZ3JvdW5kR2lmKG51bGwpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEocmF3RGF0YSkge1xyXG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb25zID0gcmF3RGF0YS5jdXJyZW50Q29uZGl0aW9ucztcclxuICBjb25zdCBmb3JlY2FzdCA9IHJhd0RhdGEuZGF5cztcclxuICBjb25zdCBjdXJyZW50RGF5ID0gcmF3RGF0YS5kYXlzWzBdO1xyXG5cclxuICBjb25zdCBpc05pZ2h0VGltZSA9IGNoZWNrSWZOaWdodFRpbWUoXHJcbiAgICBjdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZSxcclxuICAgIGN1cnJlbnREYXkuc3VucmlzZSxcclxuICAgIGN1cnJlbnREYXkuc3Vuc2V0LFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHJcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRGb3JlY2FzdCA9IGZvcmVjYXN0XHJcbiAgICAuZmlsdGVyKChkYXkpID0+IHtcclxuICAgICAgY29uc3QgZm9yZWNhc3REYXRlID0gbmV3IERhdGUoZGF5LmRhdGV0aW1lKTtcclxuICAgICAgZm9yZWNhc3REYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICByZXR1cm4gZm9yZWNhc3REYXRlID49IHRvbW9ycm93O1xyXG4gICAgfSlcclxuICAgIC5zbGljZSgwLCA2KTtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9jYXRpb246IHJhd0RhdGEucmVzb2x2ZWRBZGRyZXNzLFxyXG4gICAgaXNOaWdodDogaXNOaWdodFRpbWUsXHJcbiAgICBjdXJyZW50OiB7XHJcbiAgICAgIHRlbXA6IGN1cnJlbnRDb25kaXRpb25zLnRlbXAsXHJcbiAgICAgIGZlZWxzTGlrZTogY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlLFxyXG4gICAgICBodW1pZGl0eTogY3VycmVudENvbmRpdGlvbnMuaHVtaWRpdHksXHJcbiAgICAgIHdpbmRTcGVlZDogY3VycmVudENvbmRpdGlvbnMud2luZHNwZWVkLFxyXG4gICAgICBjb25kaXRpb246IGN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnMsXHJcbiAgICAgIGljb246IGN1cnJlbnRDb25kaXRpb25zLmljb24sXHJcbiAgICAgIGRhdGV0aW1lOiBjdXJyZW50RGF0ZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJhd0RhdGEuZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAgZm9yZWNhc3Q6IGZpbHRlcmVkRm9yZWNhc3QubWFwKChkYXkpID0+ICh7XHJcbiAgICAgIGRhdGU6IGRheS5kYXRldGltZSxcclxuICAgICAgaGlnaDogZGF5LnRlbXBtYXgsXHJcbiAgICAgIGxvdzogZGF5LnRlbXBtaW4sXHJcbiAgICAgIGNvbmRpdGlvbjogZGF5LmNvbmRpdGlvbnMsXHJcbiAgICAgIHByZWNpcENoYW5jZTogZGF5LnByZWNpcHByb2IsXHJcbiAgICAgIGljb246IGRheS5pY29uLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGF5LmRlc2NyaXB0aW9uLFxyXG4gICAgICBodW1pZGl0eTogZGF5Lmh1bWlkaXR5LFxyXG4gICAgICB3aW5kU3BlZWQ6IGRheS53aW5kc3BlZWQsXHJcbiAgICAgIHN1bnJpc2U6IGRheS5zdW5yaXNlLFxyXG4gICAgICBzdW5zZXQ6IGRheS5zdW5zZXQsXHJcbiAgICB9KSksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZk5pZ2h0VGltZShjdXJyZW50VGltZSwgc3VucmlzZSwgc3Vuc2V0KSB7XHJcbiAgY29uc3QgcGFyc2VUaW1lID0gKHRpbWVTdHIpID0+IHtcclxuICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSB0aW1lU3RyLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcclxuICAgIHJldHVybiBob3VycyAqIDYwICsgbWludXRlcztcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXJyZW50TWludXRlcyA9IHBhcnNlVGltZShjdXJyZW50VGltZSk7XHJcbiAgY29uc3Qgc3VucmlzZU1pbnV0ZXMgPSBwYXJzZVRpbWUoc3VucmlzZSk7XHJcbiAgY29uc3Qgc3Vuc2V0TWludXRlcyA9IHBhcnNlVGltZShzdW5zZXQpO1xyXG5cclxuICByZXR1cm4gY3VycmVudE1pbnV0ZXMgPCBzdW5yaXNlTWludXRlcyB8fCBjdXJyZW50TWludXRlcyA+IHN1bnNldE1pbnV0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KGNlbHNpdXMpIHtcclxuICByZXR1cm4gKGNlbHNpdXMgKiA5KSAvIDUgKyAzMjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0NlbHNpdXMoZmFocmVuaGVpdCkge1xyXG4gIHJldHVybiAoKGZhaHJlbmhlaXQgLSAzMikgKiA1KSAvIDk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUZW1wZXJhdHVyZSh0ZW1wLCB1bml0KSB7XHJcbiAgY29uc3QgdmFsdWUgPSB1bml0ID09PSBcIkZcIiA/IGNvbnZlcnRUb0ZhaHJlbmhlaXQodGVtcCkgOiB0ZW1wO1xyXG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKHZhbHVlKX0gwrAke3VuaXR9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRLbWhUb01waChrbWgpIHtcclxuICByZXR1cm4ga21oICogMC42MjEzNzE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaW5kU3BlZWQoa21oKSB7XHJcbiAgY29uc3QgbXBoID0gY29udmVydEttaFRvTXBoKGttaCk7XHJcbiAgcmV0dXJuIGAke01hdGgucm91bmQobXBoKX0gbXBoYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiBcInNob3J0XCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCJudW1lcmljXCIgfTtcclxuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEZ1bGxEYXRlKGRhdGVTdHJpbmcpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHdlZWtkYXk6IFwic2hvcnRcIixcclxuICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgfTtcclxuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXRoZXJFbW9qaShjb25kaXRpb24pIHtcclxuICBjb25zdCBjb25kaXRpb25Mb3dlciA9IGNvbmRpdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICBpZiAoY29uZGl0aW9uTG93ZXIuaW5jbHVkZXMoXCJzbm93XCIpIHx8IGNvbmRpdGlvbkxvd2VyLmluY2x1ZGVzKFwiYmxpenphcmRcIikpIHtcclxuICAgIHJldHVybiBcIuKdhO+4j1wiO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcInRodW5kZXJcIikgfHxcclxuICAgIGNvbmRpdGlvbkxvd2VyLmluY2x1ZGVzKFwibGlnaHRuaW5nXCIpIHx8XHJcbiAgICBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcInN0b3JtXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gXCLimqFcIjtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgY29uZGl0aW9uTG93ZXIuaW5jbHVkZXMoXCJyYWluXCIpIHx8XHJcbiAgICBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcImRyaXp6bGVcIikgfHxcclxuICAgIGNvbmRpdGlvbkxvd2VyLmluY2x1ZGVzKFwic2hvd2VyXCIpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gXCLwn4yn77iPXCI7XHJcbiAgfVxyXG4gIGlmIChjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcImNsZWFyXCIpIHx8IGNvbmRpdGlvbkxvd2VyLmluY2x1ZGVzKFwic3VubnlcIikpIHtcclxuICAgIHJldHVybiBcIuKYgO+4j1wiO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcImNsb3VkXCIpIHx8XHJcbiAgICBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcIm92ZXJjYXN0XCIpIHx8XHJcbiAgICBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcInBhcnRseVwiKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIFwi4piB77iPXCI7XHJcbiAgfVxyXG4gIGlmIChjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcImZvZ1wiKSB8fCBjb25kaXRpb25Mb3dlci5pbmNsdWRlcyhcIm1pc3RcIikpIHtcclxuICAgIHJldHVybiBcIvCfjKvvuI9cIjtcclxuICB9XHJcbiAgaWYgKGNvbmRpdGlvbkxvd2VyLmluY2x1ZGVzKFwid2luZFwiKSkge1xyXG4gICAgcmV0dXJuIFwi8J+SqFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFwi4piB77iPXCI7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIGZldGNoV2VhdGhlckdpZiB9IGZyb20gXCIuL2FwaS5qc1wiO1xuaW1wb3J0IHsgcHJvY2Vzc1dlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlclByb2Nlc3Nvci5qc1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyQ3VycmVudFdlYXRoZXIsXG4gIHJlbmRlckZvcmVjYXN0LFxuICByZW5kZXJGb3JlY2FzdERheUFzQ3VycmVudCxcbiAgc2V0QmFja2dyb3VuZEdpZixcbiAgc2V0VGhlbWUsXG4gIHNob3dFcnJvcixcbiAgY2xlYXJFcnJvcixcbiAgY2xlYXJEaXNwbGF5LFxufSBmcm9tIFwiLi91aS5qc1wiO1xuXG5sZXQgY3VycmVudFVuaXQgPSBcIkZcIjtcbmxldCBjdXJyZW50V2VhdGhlckRhdGEgPSBudWxsO1xubGV0IHNlbGVjdGVkRGF5SW5kZXggPSBudWxsO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkV2VhdGhlcihsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNsZWFyRXJyb3IoKTtcblxuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICBjdXJyZW50V2VhdGhlckRhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEocmF3RGF0YSk7XG4gICAgc2VsZWN0ZWREYXlJbmRleCA9IG51bGw7XG5cbiAgICBjb25zdCBnaWZVcmwgPSBhd2FpdCBmZXRjaFdlYXRoZXJHaWYoY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uKTtcblxuICAgIHNldFRoZW1lKGN1cnJlbnRXZWF0aGVyRGF0YS5pc05pZ2h0KTtcbiAgICByZW5kZXJDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEsIGN1cnJlbnRVbml0KTtcbiAgICByZW5kZXJGb3JlY2FzdChcbiAgICAgIGN1cnJlbnRXZWF0aGVyRGF0YS5mb3JlY2FzdCxcbiAgICAgIGN1cnJlbnRVbml0LFxuICAgICAgaGFuZGxlRGF5Q2xpY2ssXG4gICAgICBzZWxlY3RlZERheUluZGV4LFxuICAgICk7XG4gICAgc2V0QmFja2dyb3VuZEdpZihnaWZVcmwpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHNob3dFcnJvcihgVW5hYmxlIHRvIGZldGNoIHdlYXRoZXIgZGF0YS4gUGxlYXNlIHRyeSBhZ2Fpbi5gKTtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVEYXlDbGljayhkYXlJbmRleCkge1xuICBpZiAoIWN1cnJlbnRXZWF0aGVyRGF0YSkgcmV0dXJuO1xuXG4gIHNlbGVjdGVkRGF5SW5kZXggPSBkYXlJbmRleDtcbiAgY29uc3Qgc2VsZWN0ZWREYXkgPSBjdXJyZW50V2VhdGhlckRhdGEuZm9yZWNhc3RbZGF5SW5kZXhdO1xuXG4gIGNvbnN0IGdpZlVybCA9IGF3YWl0IGZldGNoV2VhdGhlckdpZihzZWxlY3RlZERheS5jb25kaXRpb24pO1xuXG4gIHJlbmRlckZvcmVjYXN0RGF5QXNDdXJyZW50KFxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YS5sb2NhdGlvbixcbiAgICBzZWxlY3RlZERheSxcbiAgICBjdXJyZW50VW5pdCxcbiAgKTtcbiAgcmVuZGVyRm9yZWNhc3QoXG4gICAgY3VycmVudFdlYXRoZXJEYXRhLmZvcmVjYXN0LFxuICAgIGN1cnJlbnRVbml0LFxuICAgIGhhbmRsZURheUNsaWNrLFxuICAgIHNlbGVjdGVkRGF5SW5kZXgsXG4gICk7XG4gIHNldEJhY2tncm91bmRHaWYoZ2lmVXJsKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVGVtcGVyYXR1cmVVbml0KCkge1xuICBjdXJyZW50VW5pdCA9IGN1cnJlbnRVbml0ID09PSBcIkNcIiA/IFwiRlwiIDogXCJDXCI7XG5cbiAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0LXRvZ2dsZVwiKTtcbiAgdG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gYMKwJHtjdXJyZW50VW5pdH1gO1xuXG4gIGlmIChjdXJyZW50V2VhdGhlckRhdGEpIHtcbiAgICBpZiAoc2VsZWN0ZWREYXlJbmRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBjdXJyZW50V2VhdGhlckRhdGEuZm9yZWNhc3Rbc2VsZWN0ZWREYXlJbmRleF07XG4gICAgICByZW5kZXJGb3JlY2FzdERheUFzQ3VycmVudChcbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhLmxvY2F0aW9uLFxuICAgICAgICBzZWxlY3RlZERheSxcbiAgICAgICAgY3VycmVudFVuaXQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJDdXJyZW50V2VhdGhlcihjdXJyZW50V2VhdGhlckRhdGEsIGN1cnJlbnRVbml0KTtcbiAgICB9XG4gICAgcmVuZGVyRm9yZWNhc3QoXG4gICAgICBjdXJyZW50V2VhdGhlckRhdGEuZm9yZWNhc3QsXG4gICAgICBjdXJyZW50VW5pdCxcbiAgICAgIGhhbmRsZURheUNsaWNrLFxuICAgICAgc2VsZWN0ZWREYXlJbmRleCxcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAoKSB7XG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mb3JtXCIpO1xuICBjb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1pbnB1dFwiKTtcbiAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0LXRvZ2dsZVwiKTtcblxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbklucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgbG9hZFdlYXRoZXIobG9jYXRpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUZW1wZXJhdHVyZVVuaXQpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplQXBwKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=