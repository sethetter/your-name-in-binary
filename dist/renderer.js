"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Renderer = (function () {
  function Renderer(inputs, letterPositions, holes) {
    _classCallCheck(this, Renderer);

    this.inputs = inputs;
    this.letterPositions = letterPositions;
    this.holes = holes;

    this.calculator = new BinaryCalculator();
  }

  _prototypeProperties(Renderer, null, {
    calculateFromInput: {
      value: function calculateFromInput() {},
      writable: true,
      configurable: true
    }
  });

  return Renderer;
})();