"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * SWE Binary Reader!
 */
var BinaryReader = (function () {
  function BinaryReader(table) {
    _classCallCheck(this, BinaryReader);

    this.table = table;
  }

  _prototypeProperties(BinaryReader, null, {
    init: {
      value: function init() {
        this.collectHoles();
        this.collectInputs();
        this.collectLetterPositions();

        this.renderers = [];

        for (var i = 0; i < 8; i++) {
          this.renderers.push(new ColumnRenderer(this.inputs[i], this.letterPositions[i], this.holes[i]));
        }

        this.assignListeners();
      },
      writable: true,
      configurable: true
    },
    collectHoles: {
      value: function collectHoles() {
        this.holes = [];

        for (var i = 0; i < 8; i++) {
          this.holes.push([]);

          for (var j = 0; j < 5; j++) {
            var selector = "td[data-letter=\"" + i + "\"][data-hole=\"" + j + "\"]";
            var element = document.querySelector(selector);

            this.holes[i].push(element);
          }
        }
      },
      writable: true,
      configurable: true
    },
    collectInputs: {
      value: function collectInputs() {
        this.inputs = [];

        for (var i = 0; i < 8; i++) {
          var selector = "input[name=\"letter-" + i + "\"]";
          this.inputs[i] = document.querySelector(selector);
        }
      },
      writable: true,
      configurable: true
    },
    collectLetterPositions: {
      value: function collectLetterPositions() {
        this.letterPositions = [];

        for (var i = 0; i < 8; i++) {
          var selector = "span#letter-position-" + i;
          this.letterPositions[i] = document.querySelector(selector);
        }
      },
      writable: true,
      configurable: true
    },
    assignListeners: {
      value: function assignListeners() {
        this.assignInputListeners();
        this.assignPositionListeners();
        this.assignHoleListeners();
      },
      writable: true,
      configurable: true
    },
    assignInputListeners: {
      value: function assignInputListeners() {
        var _this = this;
        this.inputs.forEach(function (input, i) {
          $(input).keydown(function (e) {
            _this.renderers[i].letterChanged(e.target.value);
          });
        });
      },
      writable: true,
      configurable: true
    },
    assignPositionListeners: {
      value: function assignPositionListeners() {
        var _this = this;
        this.letterPositions.forEach(function (position, i) {
          $(position).keydown(function (e) {
            _this.renderers[i].positionChanged(e.target.value);
          });
        });
      },
      writable: true,
      configurable: true
    },
    assignHoleListeners: {
      value: function assignHoleListeners() {
        var _this = this;
        this.holes.forEach(function (holes, i) {
          holes.forEach(function (hole, j) {
            $(hole).click(function (e) {
              _this.holeClicked(_this.holes[i][j]);
              _this.renderers[i].holesChanged(_this.holes[i]);
            });
          });
        });
      },
      writable: true,
      configurable: true
    },
    holeClicked: {
      value: function holeClicked(hole) {
        $(hole).toggleClass("on");
      },
      writable: true,
      configurable: true
    }
  });

  return BinaryReader;
})();