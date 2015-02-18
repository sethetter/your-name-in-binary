/**
 * SWE Binary Reader!
 */

class BinaryReader {

  constructor(table) {
    this.table = table;
  }

  init() {
    this.collectHoles();
    this.collectInputs();
    this.collectLetterPositions();
  }

  /**
   * Collect each hole element into a 8x5 matrix,
   * boolean represents enabled or disabled
   *
   * this.holes[letter][hole]
   * this.holes[row][col]
   * this.holes[0][0] = top left
   */
  collectHoles() {
    this.holes = [];

    for (let i = 0; i < 8; i++) {
      this.holes.push([]);

      for (let j = 0; j < 5; j++) {
        let selector = `td[data-letter="${i}"][data-hole="${j}"]`;
        let element = document.querySelector(selector);

        this.holes[i].push({
          element: element,
          value: parseInt(element.getAttribute('data-value'))
        });
      }

    }
  }

  collectInputs() {
    this.inputs = [];

    for (let i = 0; i < 8; i++) {
      var selector = `input[name="letter-${i}"]`;
      this.inputs[i] = document.querySelector(selector);
    }
  }

  collectLetterPositions() {
    this.letterPositions = [];

    for (let i = 0; i < 8; i++) {
      var selector = `span#letter-position-${i}`;
      this.letterPositions[i] = document.querySelector(selector);
    }
  }

}

let table = document.querySelector('#binary-reader-table');
let reader = new BinaryReader(table);

reader.init();
