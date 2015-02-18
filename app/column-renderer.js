class ColumnRenderer {

  constructor(input, letterPosition, holes) {
    this.input = input;
    this.letterPosition = letterPosition;
    this.holes = holes;

    this.calculator = new BinaryCalculator();
  }

  letterChanged(letter) {
    let result = this.calculator.calculateFromLetter(letter);
    this.updateHoles(result.binary);
    this.updatePosition(result.position);
  }

  positionChanged(letter) {
    let result = this.calculator.calculateFromLetter(letter);
    this.updateHoles(result.binary);
    this.updateLetter(result.letter);
  }

  holesChanged(holes) {
    let binary = this.getBinaryFromHoles(holes);
    let result = this.calculator.calculateFromBinary(binary);
    this.updateLetter(result.letter);
    this.updatePosition(result.position);
  }

  updateLetter(letter) {
    this.input.value = letter;
  }

  updatePosition(position) {
    this.letterPosition.innerHTML = position;
  }

  updateHoles(binary) {
    binary.forEach((on, i) => {
      let $hole = $(this.holes[i]);
      $hole.removeClass('on');
      if (on) $hole.addClass('on');
    });
  }

  getBinaryFromHoles(holes) {
    let binary = [];

    holes.forEach((holeEl) => {
      binary.push($(holeEl).hasClass('on') ? 1 : 0);
    });

    return binary;
  }

}
