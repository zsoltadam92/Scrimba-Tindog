/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Dog.js":
/*!***********************!*\
  !*** ./src/js/Dog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_badge_like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/badge-like.png */ "./src/images/badge-like.png");
/* harmony import */ var _images_badge_nope_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/badge-nope.png */ "./src/images/badge-nope.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Dog = /*#__PURE__*/function () {
  function Dog(data) {
    _classCallCheck(this, Dog);

    Object.assign(this, data);
  }

  _createClass(Dog, [{
    key: "setBadge",
    value: function setBadge() {
      if (this.hasBeenLiked) {
        return "<img src=".concat(_images_badge_like_png__WEBPACK_IMPORTED_MODULE_0__, " alt=\"like\" class=\"badge\" />");
      } else if (this.hasBeenSwiped) {
        return "<img src=".concat(_images_badge_nope_png__WEBPACK_IMPORTED_MODULE_1__, " alt=\"nope\" class=\"badge\" />");
      }
    }
  }, {
    key: "getDog",
    value: function getDog() {
      var name = this.name,
          avatar = this.avatar,
          age = this.age,
          bio = this.bio,
          hasBeenLiked = this.hasBeenLiked,
          hasBeenSwiped = this.hasBeenSwiped;
      var badge = this.setBadge();
      return "\n        <div class=\"main__content\">\n          <div class=\"main__picture\">\n            <img src=\"".concat(avatar, "\" alt=\"dog\" />\n            ").concat(hasBeenLiked || hasBeenSwiped ? badge : "", "\n          </div>\n          <div class=\"main__info\" >\n            <h2> ").concat(name, ", ").concat(age, "</h2>\n            <p> ").concat(bio, "</p>\n          </div>\n        </div>\n    ");
    }
  }]);

  return Dog;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_dog_rex_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/dog-rex.jpg */ "./src/images/dog-rex.jpg");
/* harmony import */ var _images_dog_bella_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dog-bella.jpg */ "./src/images/dog-bella.jpg");
/* harmony import */ var _images_dog_teddy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/dog-teddy.jpg */ "./src/images/dog-teddy.jpg");



var dogs = [{
  name: "Rex",
  avatar: _images_dog_rex_jpg__WEBPACK_IMPORTED_MODULE_0__,
  age: 25,
  bio: "Art. Literature. Natural wine. Yoga.",
  hasBeenSwiped: false,
  hasBeenLiked: false
}, {
  name: "Bella",
  avatar: _images_dog_bella_jpg__WEBPACK_IMPORTED_MODULE_1__,
  age: 43,
  bio: "Yup, that's my owner. U can meet him if you want",
  hasBeenSwiped: false,
  hasBeenLiked: false
}, {
  name: "Teddy",
  avatar: _images_dog_teddy_jpg__WEBPACK_IMPORTED_MODULE_2__,
  age: 30,
  bio: "How you doin?",
  hasBeenSwiped: false,
  hasBeenLiked: false
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dogs);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card {\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  border: 0.1875rem solid black;\n  border-radius: 1.25rem;\n  background-color: white;\n}\n@media (max-width: 37.5rem) {\n  .card {\n    width: 18.75rem;\n  }\n}\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbody {\n  margin-bottom: 5%;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n  background: rgb(52, 43, 56);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nh1 {\n  font-size: 3rem;\n  letter-spacing: 0.3125rem;\n}\n\nimg {\n  width: 100%;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n}\n.header__image {\n  width: 2.125rem;\n  height: 2.125rem;\n}\n.header__logo {\n  width: 5.25rem;\n  height: 2.625rem;\n}\n\n.main__content {\n  margin: 0 0.5rem;\n  position: relative;\n}\n.main__picture img {\n  border-radius: 0.625rem;\n}\n.main__info {\n  position: absolute;\n  bottom: 0;\n  left: 1.25rem;\n}\n.main h2 {\n  margin-bottom: 0.5rem;\n}\n.main p {\n  margin-top: 0;\n  color: #b7b7b7;\n}\n\n.badge {\n  position: absolute;\n  width: 14.625rem;\n  height: 7.25rem;\n  top: 4.375rem;\n  left: 0.625rem;\n  transform: rotate(-45deg);\n}\n\n.footer__actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer__button {\n  width: 4.5rem;\n  height: 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  padding: 1.2rem;\n  margin: 1rem;\n  cursor: pointer;\n  border: none;\n}\n.footer__button--like:hover {\n  background-color: #DBFFF4;\n}\n.footer__button--dislike:hover {\n  background-color: #FFE7EF;\n}\n\n#endMessage {\n  font-size: 5rem;\n  margin: 1.875rem auto;\n  width: 80%;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/scss/global/layout.scss","webpack://./src/scss/style.scss","webpack://./src/scss/global/boilerplate.scss","webpack://./src/scss/util/mixins.scss","webpack://./src/scss/components/header.scss","webpack://./src/scss/components/main.scss","webpack://./src/scss/components/footer.scss","webpack://./src/scss/components/end.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,6BAAA;EACA,sBAAA;EACA,uBAAA;ACDF;ADGE;EARF;IASI,eAAA;ECAF;AACF;;ACVA;EACE,eAAA;EACA,sBAAA;ADaF;;ACVA;EACE,mBAAA;ADaF;;ACVA;EACE,iBAAA;EACA,UAAA;EACA,kCAAA;EACA,2BAAA;EACA,YAAA;ECfA,aAAA;EACA,mBAAA;EACA,uBAAA;EDeA,sBAAA;ADeF;;ACZA;EACE,eAAA;EACA,yBAAA;ADeF;;ACZA;EACE,WAAA;ADeF;;AGxCA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;AH2CF;AGzCE;EDDA,eCE0B;EDD1B,gBCCmC;AH4CrC;AGzCE;EDLA,cCM0B;EDL1B,gBCKmC;AH4CrC;;AItDE;EACE,gBAAA;EACA,kBAAA;AJyDJ;AItDE;EACE,uBAAA;AJwDJ;AIrDE;EACE,kBAAA;EACA,SAAA;EACA,aAAA;AJuDJ;AIpDE;EACE,qBAAA;AJsDJ;AInDE;EACE,aAAA;EACA,cAAA;AJqDJ;;AIjDA;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;AJoDF;;AKnFE;EHFA,aAAA;EACA,mBAAA;EACA,uBAAA;AFyFF;AKrFE;EHAA,aGC0B;EHA1B,cAAA;EAPA,aAAA;EACA,mBAAA;EACA,uBAAA;EGOE,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AL0FJ;AKxFI;EACE,yBAAA;AL0FN;AKvFI;EACE,yBAAA;ALyFN;;AM7GA;EACE,eAAA;EACA,qBAAA;EACA,UAAA;EACA,kBAAA;ANgHF","sourcesContent":["@use '../util' as *;\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: rem(400);\r\n  border: rem(3) solid black;\r\n  border-radius: rem(20);\r\n  background-color: white;\r\n\r\n  @media (max-width:rem(600)) {\r\n    width: rem(300);\r\n  }\r\n}",".card {\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  border: 0.1875rem solid black;\n  border-radius: 1.25rem;\n  background-color: white;\n}\n@media (max-width: 37.5rem) {\n  .card {\n    width: 18.75rem;\n  }\n}\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbody {\n  margin-bottom: 5%;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n  background: rgb(52, 43, 56);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nh1 {\n  font-size: 3rem;\n  letter-spacing: 0.3125rem;\n}\n\nimg {\n  width: 100%;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n}\n.header__image {\n  width: 2.125rem;\n  height: 2.125rem;\n}\n.header__logo {\n  width: 5.25rem;\n  height: 2.625rem;\n}\n\n.main__content {\n  margin: 0 0.5rem;\n  position: relative;\n}\n.main__picture img {\n  border-radius: 0.625rem;\n}\n.main__info {\n  position: absolute;\n  bottom: 0;\n  left: 1.25rem;\n}\n.main h2 {\n  margin-bottom: 0.5rem;\n}\n.main p {\n  margin-top: 0;\n  color: #b7b7b7;\n}\n\n.badge {\n  position: absolute;\n  width: 14.625rem;\n  height: 7.25rem;\n  top: 4.375rem;\n  left: 0.625rem;\n  transform: rotate(-45deg);\n}\n\n.footer__actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer__button {\n  width: 4.5rem;\n  height: 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  padding: 1.2rem;\n  margin: 1rem;\n  cursor: pointer;\n  border: none;\n}\n.footer__button--like:hover {\n  background-color: #DBFFF4;\n}\n.footer__button--dislike:hover {\n  background-color: #FFE7EF;\n}\n\n#endMessage {\n  font-size: 5rem;\n  margin: 1.875rem auto;\n  width: 80%;\n  text-align: center;\n}","@use '../util' as *;\r\n\r\nhtml {\r\n  font-size: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,*::after,*::before {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  margin-bottom: 5%;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n  background: rgb(52, 43, 56);\r\n  color: white;\r\n  @include flexCenter;\r\n  flex-direction: column;\r\n}\r\n\r\nh1 {\r\n  font-size: rem(48);\r\n  letter-spacing: rem(5);\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}","@mixin flexCenter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin widthAndHeight($width,$height) {\r\n  width: $width;\r\n  height: $height;\r\n}","@use '../util' as *;\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: rem(24);\r\n\r\n  &__image {\r\n    @include widthAndHeight(rem(34), rem(34))\r\n  }\r\n\r\n  &__logo {\r\n    @include widthAndHeight(rem(84), rem(42))\r\n  }\r\n}","@use '../util' as *;\r\n\r\n.main {\r\n  &__content {\r\n    margin: 0 rem(8);\r\n    position: relative;\r\n  }\r\n\r\n  &__picture img {\r\n    border-radius: rem(10);\r\n  }\r\n\r\n  &__info {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: rem(20);\r\n  }\r\n\r\n  h2 {\r\n    margin-bottom: rem(8);\r\n  }\r\n\r\n  p {\r\n    margin-top: 0;\r\n    color: #b7b7b7;\r\n  }\r\n}\r\n\r\n.badge {\r\n  position: absolute;\r\n  width: rem(234);\r\n  height: rem(116);\r\n  top: rem(70);\r\n  left: rem(10);\r\n  transform: rotate(-45deg)\r\n}\r\n\r\n","@use '../util' as * ;\r\n\r\n.footer {\r\n  &__actions {\r\n    @include flexCenter;\r\n  }\r\n\r\n  &__button {\r\n    @include widthAndHeight(rem(72), rem(72));\r\n    @include flexCenter;\r\n    background-color: #FFFFFF;\r\n    border-radius: 50%;\r\n    padding: rem(19.2);\r\n    margin: rem(16);\r\n    cursor: pointer;\r\n    border: none;\r\n\r\n    &--like:hover {\r\n      background-color: #DBFFF4;\r\n    }\r\n\r\n    &--dislike:hover {\r\n      background-color: #FFE7EF;\r\n    }\r\n  }\r\n}","@use '../util' as *;\r\n\r\n#endMessage {\r\n  font-size: rem(80);\r\n  margin: rem(30) auto;\r\n  width: 80%;\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/images/badge-like.png":
/*!***********************************!*\
  !*** ./src/images/badge-like.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "badge-like.png";

/***/ }),

/***/ "./src/images/badge-nope.png":
/*!***********************************!*\
  !*** ./src/images/badge-nope.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "badge-nope.png";

/***/ }),

/***/ "./src/images/dog-bella.jpg":
/*!**********************************!*\
  !*** ./src/images/dog-bella.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dog-bella.jpg";

/***/ }),

/***/ "./src/images/dog-rex.jpg":
/*!********************************!*\
  !*** ./src/images/dog-rex.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dog-rex.jpg";

/***/ }),

/***/ "./src/images/dog-teddy.jpg":
/*!**********************************!*\
  !*** ./src/images/dog-teddy.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dog-teddy.jpg";

/***/ }),

/***/ "./src/images/icon-chat.png":
/*!**********************************!*\
  !*** ./src/images/icon-chat.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-chat.png";

/***/ }),

/***/ "./src/images/icon-cross.png":
/*!***********************************!*\
  !*** ./src/images/icon-cross.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-cross.png";

/***/ }),

/***/ "./src/images/icon-heart.png":
/*!***********************************!*\
  !*** ./src/images/icon-heart.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-heart.png";

/***/ }),

/***/ "./src/images/icon-profile.png":
/*!*************************************!*\
  !*** ./src/images/icon-profile.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-profile.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _images_icon_profile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon-profile.png */ "./src/images/icon-profile.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_icon_heart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon-heart.png */ "./src/images/icon-heart.png");
/* harmony import */ var _images_icon_cross_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icon-cross.png */ "./src/images/icon-cross.png");
/* harmony import */ var _images_icon_chat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icon-chat.png */ "./src/images/icon-chat.png");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");
/* harmony import */ var _Dog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dog.js */ "./src/js/Dog.js");








document.getElementById('profile').src = _images_icon_profile_png__WEBPACK_IMPORTED_MODULE_1__;
document.getElementById('logo').src = _images_logo_png__WEBPACK_IMPORTED_MODULE_2__;
document.getElementById('heart').src = _images_icon_heart_png__WEBPACK_IMPORTED_MODULE_3__;
document.getElementById('cross').src = _images_icon_cross_png__WEBPACK_IMPORTED_MODULE_4__;
document.getElementById('chat').src = _images_icon_chat_png__WEBPACK_IMPORTED_MODULE_5__;
var indexArray = [0, 1, 2];

function getNextDog(dogsData) {
  var nextDog = dogsData[indexArray.shift()];
  return nextDog ? nextDog : {};
}

var dog = new _Dog_js__WEBPACK_IMPORTED_MODULE_7__["default"](getNextDog(_data_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
var isWaiting = false;
document.getElementById('like').addEventListener('click', function () {
  if (!isWaiting) {
    isWaiting = true;
    dog.hasBeenLiked = true;
    getBadge();
  }
});
document.getElementById('dislike').addEventListener('click', function () {
  if (!isWaiting) {
    isWaiting = true;
    dog.hasBeenSwiped = true;
    getBadge();
  }
});

function getBadge() {
  render();
  setTimeout(function () {
    choice();
    isWaiting = false;
  }, 1500);
}

function choice() {
  if (indexArray.length > 0) {
    dog = new _Dog_js__WEBPACK_IMPORTED_MODULE_7__["default"](getNextDog(_data_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
    render();
  } else {
    document.body.innerHTML = "<div id=\"endMessage\">Sorry, no more dogs</div>";
  }
}

function render() {
  document.getElementById('main').innerHTML = dog.getDog();
}

render();
})();

/******/ })()
;
//# sourceMappingURL=bundle8bc3c3767441117deb43.js.map