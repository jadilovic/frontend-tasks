"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var circle = {
  radius: 20,
  location: {
    x: 1,
    y: 2
  },
  draw: function draw() {
    console.log('draw circle');
  }
};
circle.draw(); // Factory function

var createCircle = function createCircle(radius) {
  return {
    radius: radius,
    location: {
      x: 3,
      y: 7
    },
    draw: function draw() {
      console.log('draw ' + radius);
    }
  };
};

var newCircle = createCircle(3);
newCircle.draw();
newCircle.radius = 5;
newCircle.location.x = 10;
console.log(newCircle); // Constructor function

function Circle(radius) {
  this.radius = radius;
  var factor = 7;

  var computation = function computation() {
    console.log('computation');
  }; // this.getFactor = () => {
  // 	return factor;
  // };


  this.location = {
    x: 3,
    y: 7
  }, this.draw = function () {
    computation();
    console.log('draw ' + this.radius + ' and by factor: ' + factor);
  };
  Object.defineProperty(this, 'factor', {
    get: function get() {
      return factor;
    },
    set: function set(value) {
      // if (!value.x || value.y) {
      // 	throw Error('Invalid values');
      // }
      factor = value;
    }
  });
}

var constructorCircle = new Circle(6);
constructorCircle.draw();
console.log(constructorCircle.location.y);
var x = {};
console.log(Circle.length);
console.log(Circle.call({}, 1));
console.log(Circle.apply({}, [1, 2, 3]));
var xy = {
  value: 3
};
var zd = xy;
xy.value = 99;
constructorCircle.height = 77;
constructorCircle['width'] = 55;
delete constructorCircle.radius;
console.log(constructorCircle);

for (var key in constructorCircle) {
  if (_typeof(constructorCircle[key]) !== 'object') {
    console.log(key + ' : ' + constructorCircle[key]);
  }
}

var keys = Object.keys(constructorCircle);
console.log(keys);

if ('draw' in constructorCircle) {
  console.log('Draw is is Circle');
}

constructorCircle.draw(); // console.log(constructorCircle.getFactor());

console.log(constructorCircle.factor);
constructorCircle.factor = 1;
console.log(constructorCircle.factor);
console.log(Date.now());

function StopWatch() {
  var start = 0;
  var end = 0;
  var duration = 0;

  function reset() {
    duration = 0;
  }

  this.start = function () {
    if (start > 0) {
      throw Error('Stopwatch is already running');
    }

    start = Date.now();
  };

  this.end = function () {
    if (start === 0) {
      throw Error('You have not started the stopwatch');
    }

    end = Date.now();
    duration = duration + (end - start) / 1000;
    start = 0;
    end = 0;
  };

  this.reset = function () {
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function get() {
      return duration;
    }
  });
}