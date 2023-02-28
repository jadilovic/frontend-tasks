"use strict";

var _person = require("./person");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addGlobalEventListener = function addGlobalEventListener(type, selector, callBack) {
  document.addEventListener(type, function (e) {
    if (e.target.matches(selector)) {
      callBack(e);
    }
  });
};

addGlobalEventListener('click', 'div', function (e) {
  console.log(e.target);
}); // divs.forEach((div) => {
// 	div.addEventListener('click', (e) => {
// 		console.log(e.target);
// 	});
// });

var div = document.createElement('div');
div.style.backgroundColor = 'purple';
div.style.width = '300px';
div.style.height = '300px';
document.body.appendChild(div);
var promise = new Promise(function (resolve, reject) {
  var num = Math.ceil(Math.random() * 3);
  console.log(num);
  setTimeout(function () {
    if (num <= 1) {
      resolve('resolved');
    } else {
      reject('rejected');
    }
  }, 1000 * num);
});
promise.then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});
var person = {
  name: 'Aki',
  walk: function walk() {
    console.log(this);
  }
};
person.walk();
var walking = person.walk.bind(person);
walking(); // console.log(person.walk());

var sum = function sum(number) {
  return number + number;
};

console.log(sum(5));
var jobs = [{
  id: 1,
  active: true
}, {
  id: 2,
  active: true
}, {
  id: 3,
  active: false
}];
var activeJobs = jobs.filter(function (item) {
  return item.active;
});
console.log(activeJobs);
var boy = {
  run: function run() {
    var _this = this;

    setTimeout(function () {
      console.log('this', _this);
    }, 1000); // const self = this;
    // setTimeout(function () {
    // 	console.log('this', self);
    // });
    // console.log('this', this);
  }
};
boy.run();
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var total = [].concat(arr1, ['a'], arr2, ['b']);
console.log(total);
var me = {
  name: 'Aki'
};
var be = {
  job: 'Developer'
};

var newMeBe = _objectSpread({}, me, {}, be);

console.log(newMeBe);

var clone = _objectSpread({}, me);

me.name = 'Cuni';
console.log(clone);
console.log(me); // class Person {
// 	constructor(name, callBack, arr) {
// 		this.name = name;
// 		this.callBack = callBack;
// 		this.arr = arr;
// 	}
// 	showAll() {
// 		console.log(this.name);
// 		this.callBack();
// 		console.log(this.arr);
// 	}
// }

var laterRun = function laterRun() {
  setTimeout(function () {
    console.log('I am Hulk');
  }, 2000);
};

var bigPerson = new _person.Person('Hulk', laterRun, [5, 6, 7]);
bigPerson.showAll();

var Teacher =
/*#__PURE__*/
function (_Person) {
  _inherits(Teacher, _Person);

  function Teacher(name, degree, callBack, arr) {
    var _this2;

    _classCallCheck(this, Teacher);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Teacher).call(this, name, callBack, arr));
    _this2.degree = degree;
    return _this2;
  }

  _createClass(Teacher, [{
    key: "teach",
    value: function teach() {
      console.log(this.name + ' is teaching ' + this.degree);
    }
  }]);

  return Teacher;
}(_person.Person);

var teacher = new Teacher('Mario', 'BBS', function () {
  return console.log('my teacher');
}, ['t', 'c', 'e']);
teacher.teach();
teacher.showAll();