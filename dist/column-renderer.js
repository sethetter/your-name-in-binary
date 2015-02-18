"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ColumnRenderer = (function () {
  function ColumnRenderer(input, letterPosition, holes) {
    _classCallCheck(this, ColumnRenderer);

    this.input = input;
    this.letterPosition = letterPosition;
    this.holes = holes;

    this.calculator = new BinaryCalculator();
  }

  _prototypeProperties(ColumnRenderer, null, {
    letterChanged: {
      value: function letterChanged(letter) {
        var result = this.calculator.calculateFromLetter(letter.toUpperCase());
        this.updateHoles(result.binary);
        this.updatePosition(result.position);
      },
      writable: true,
      configurable: true
    },
    positionChanged: {
      value: function positionChanged(letter) {
        var result = this.calculator.calculateFromLetter(letter);
        this.updateHoles(result.binary);
        this.updateLetter(result.letter);
      },
      writable: true,
      configurable: true
    },
    holesChanged: {
      value: function holesChanged(holes) {
        var binary = this.getBinaryFromHoles(holes);
        var result = this.calculator.calculateFromBinary(binary);
        this.updateLetter(result.letter);
        this.updatePosition(result.position);
      },
      writable: true,
      configurable: true
    },
    updateLetter: {
      value: function updateLetter(letter) {
        this.input.value = letter;
      },
      writable: true,
      configurable: true
    },
    updatePosition: {
      value: function updatePosition(position) {
        this.letterPosition.innerHTML = position;
      },
      writable: true,
      configurable: true
    },
    updateHoles: {
      value: function updateHoles(binary) {
        var _this = this;
        binary.forEach(function (on, i) {
          var $hole = $(_this.holes[i]);
          $hole.removeClass("on");
          if (on) $hole.addClass("on");
        });
      },
      writable: true,
      configurable: true
    },
    getBinaryFromHoles: {
      value: function getBinaryFromHoles(holes) {
        var binary = [];

        holes.forEach(function (holeEl) {
          binary.push($(holeEl).hasClass("on") ? 1 : 0);
        });

        return binary;
      },
      writable: true,
      configurable: true
    }
  });

  return ColumnRenderer;
})();