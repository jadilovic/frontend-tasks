"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promotion = promotion;
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal =
/*#__PURE__*/
function () {
  function Animal(name, food, noise, eat) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.food = food;
    this.callBackNoise = noise;
  }

  _createClass(Animal, [{
    key: "makingNoise",
    value: function makingNoise() {
      this.callBackNoise();
    }
  }, {
    key: "showEating",
    value: function showEating() {
      console.log(this.name + ' is eating this food ' + this.food);
    }
  }]);

  return Animal;
}();

exports["default"] = Animal;

function promotion() {
  console.log('promotion on tv');
}