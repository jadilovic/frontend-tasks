"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(name, callBack, arr) {
    _classCallCheck(this, Person);

    this.name = name;
    this.callBack = callBack;
    this.arr = arr;
  }

  _createClass(Person, [{
    key: "showAll",
    value: function showAll() {
      console.log(this.name);
      this.callBack();
      console.log(this.arr);
    }
  }]);

  return Person;
}();

exports.Person = Person;