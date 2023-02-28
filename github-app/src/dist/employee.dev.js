"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employee = exports.Employee = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employee =
/*#__PURE__*/
function () {
  function Employee(name, base_salary, overtime, rate) {
    _classCallCheck(this, Employee);

    this.name = name;
    this.base_salary = base_salary;
    this.overtime = overtime;
    this.rate = rate;
  }

  _createClass(Employee, [{
    key: "getWage",
    value: function getWage() {
      console.log("Wage is : ".concat(this.base_salary + this.overtime * this.rate));
    }
  }]);

  return Employee;
}();

exports.Employee = Employee;
var employee = {
  name: 'Aki',
  base_salary: 1000,
  overtime: 2,
  rate: 10,
  getWage: function getWage() {
    console.log("".concat(employee.name, "'s wage is : ").concat(employee.base_salary + employee.overtime * employee.rate));
  }
};
exports.employee = employee;