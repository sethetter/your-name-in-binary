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

    this.renderers = [];

    for (var i = 0; i < 8; i++) {
      this.renderers.push(new ColumnRenderer(
        this.inputs[i], this.letterPositions[i], this.holes[i]
      ));
    }

    this.assignListeners();
  }

  collectHoles() {
    this.holes = [];

    for (let i = 0; i < 8; i++) {
      this.holes.push([]);

      for (let j = 0; j < 5; j++) {
        let selector = `td[data-letter="${i}"][data-hole="${j}"]`;
        let element = document.querySelector(selector);

        this.holes[i].push(element);
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

  assignListeners() {
    this.assignInputListeners();
    this.assignPositionListeners();
    this.assignHoleListeners();
  }

  assignInputListeners() {
    this.inputs.forEach((input, i) => {
      $(input).keyup((e) => {
        this.renderers[i].letterChanged(e.target.value);
      });
    });
  }

  assignPositionListeners() {
    this.letterPositions.forEach((position, i) => {
      $(position).keyup((e) => {
        this.renderers[i].positionChanged(e.target.value);
      });
    });
  }

  assignHoleListeners() {
    this.holes.forEach((holes, i) => {

      holes.forEach((hole, j) => {

        $(hole).click((e) => {
          this.holeClicked(this.holes[i][j]);
          this.renderers[i].holesChanged(this.holes[i]);
        });

      });

    });
  }

  holeClicked(hole) {
    $(hole).toggleClass('on');
  }

}
