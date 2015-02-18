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
        console.log(this.holes);
        console.log(this.inputs);
        console.log(this.letterPositions);
      },
      writable: true,
      configurable: true
    },
    collectHoles: {

      /**
       * Collect each hole element into a 8x5 matrix,
       * boolean represents enabled or disabled
       *
       * this.holes[letter][hole]
       * this.holes[row][col]
       * this.holes[0][0] = top left
       */
      value: function collectHoles() {
        this.holes = [];

        for (var i = 0; i < 8; i++) {
          this.holes.push([]);

          for (var j = 0; j < 5; j++) {
            var selector = "td[data-letter=\"" + i + "\"][data-hole=\"" + j + "\"]";
            var element = document.querySelector(selector);

            this.holes[i].push({
              element: element,
              value: parseInt(element.getAttribute("data-value"))
            });
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
    }
  });

  return BinaryReader;
})();

var table = document.querySelector("#binary-reader-table");
var reader = new BinaryReader(table);

reader.init();

