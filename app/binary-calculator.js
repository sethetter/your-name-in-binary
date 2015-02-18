const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const BINARY = {
  // [16, 8, 4, 2, 1]
  '' : [0,0,0,0,0], // 0
  'A': [0,0,0,0,1], // 1
  'B': [0,0,0,1,0], // 2
  'C': [0,0,0,1,1], // 3
  'D': [0,0,1,0,0], // 4
  'E': [0,0,1,0,1], // 5
  'F': [0,0,1,1,0], // 6
  'G': [0,0,1,1,1], // 7
  'H': [0,1,0,0,0], // 8
  'I': [0,1,0,0,1], // 9
  'J': [0,1,0,1,0], // 10
  'K': [0,1,0,1,1], // 11
  'L': [0,1,1,0,0], // 12
  'M': [0,1,1,0,1], // 13
  'N': [0,1,1,1,0], // 14
  'O': [0,1,1,1,1], // 15
  'P': [1,0,0,0,0], // 16
  'Q': [1,0,0,0,1], // 17
  'R': [1,0,0,1,0], // 18
  'S': [1,0,0,1,1], // 19
  'T': [1,0,1,0,0], // 20
  'U': [1,0,1,0,1], // 21
  'V': [1,0,1,1,0], // 22
  'W': [1,0,1,1,1], // 23
  'X': [1,1,0,0,0], // 24
  'Y': [1,1,0,0,1], // 25
  'Z': [1,1,0,1,0]  // 26
};

class BinaryCalculator {

  calculateFromLetter(letter) {
    return {
      position: this.letterToPosition(letter),
      binary: this.letterToBinary(letter)
    };
  }

  calculateFromPosition(position) {
    return {
      letter: this.positionToLetter(position),
      binary: this.positionToBinary(position)
    };
  }

  calculateFromBinary(binary) {
    return {
      letter: this.binaryToLetter(binary),
      position: this.binaryToPosition(binary)
    };
  }

  letterToPosition(letter) {
    let index = ALPHABET.indexOf(letter);

    if (index === -1) return '';
    return index + 1;
  }

  letterToBinary(letter) {
    return BINARY[letter] || '';
  }

  positionToBinary(position) {
    let letter = this.positionToLetter(position);
    return this.letterToBinary(letter);
  }

  positionToLetter(position) {
    return ALPHABET[position-1] || '';
  }

  binaryToPosition(binary) {
    let letter = this.binaryToLetter(binary);
    return this.letterToPosition(letter);
  }

  binaryToLetter(binary) {
    let letter;

    for (let _letter in BINARY) {
      if (BINARY[_letter].join('') === binary.join('')) {
        letter = _letter;
      }
    }

    return letter || '';
  }

}
