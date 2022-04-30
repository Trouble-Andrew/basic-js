const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.message = '';
    this.key = '';
  }

  encrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error('Incorrect arguments!');
    }
    this.message = message;
    this.key = key;

    let messageArray = this.message.split('');
    let result = [];

    let index = 0;
    messageArray.forEach((char) => {
      index >= this.key.length ? index = 0 : '';
      console.log(this.convertNumberToLetter(this.convertLetterToNumber(char) + this.convertLetterToNumber(this.key[index]) - 1));

      if (char === ' ') {
        result.push(' ');
      } else if (/[A-Za-z]/.test(char)) {
        result.push(this.convertNumberToLetter(this.convertLetterToNumber(char) + this.convertLetterToNumber(this.key[index]) - 1));
        index++;
      } else {
        result.push(char)
      }
    });
    return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error('Incorrect arguments!');
    }

    this.message = message;
    this.key = key;

    let messageArray = this.message.split('');
    let result = [];

    let index = 0;
    messageArray.forEach((char) => {
      index >= this.key.length ? index = 0 : '';

      if (char === ' ') {
        result.push(' ');
      } else if (/[A-Za-z]/.test(char)) {
        result.push(this.convertNumberToLetter(26 - this.convertLetterToNumber(this.key[index]) + this.convertLetterToNumber(char) + 1));
        index++;
      } else {
        result.push(char)
      }
    });

    return this.direct ? result.join('') : result.reverse().join('');    
  }

  convertLetterToNumber(letter) {
    letter = letter.toUpperCase();
    let out = 0, len = letter.length;
    for (let pos = 0; pos < len; pos++) {
      out += (letter.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }
  
  convertNumberToLetter(number) {
    number = number % 26 === 0 ? 26 : number % 26;
    return (number + 9).toString(36).toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
