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
  constructor(direct = true) {
    this.isDirect = direct;
  }
  encrypt(string, key) {
    //throw new NotImplementedError('Not implemented');
    if (!(string && key)) {
      throw new Error('Incorrect arguments!');
    }
    let message = '';
    string = string.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      let newSymbol = string[i];
      if ("A" <= string[i] && string[i] <= "Z") {
        let stringChar = string.charCodeAt(i) - 65;
        let keyChar = key.charCodeAt(j) - 65;
        let newChar = (stringChar + keyChar) % 26;
        newSymbol = String.fromCharCode(newChar + 65);
        j = (j + 1) % key.length;
      }
      message += newSymbol;
    }
    if (this.isDirect === false) {
      message = message.split("").reverse().join("");
    }
    return message;
  }
  decrypt(string, key) {
    //throw new NotImplementedError('Not implemented');
    if (!(string && key)) {
      throw new Error('Incorrect arguments!');
    }
    let message = '';
    string = string.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      let newSymbol = string[i];
      if ("A" <= string[i] && string[i] <= "Z") {
        let stringChar = string.charCodeAt(i) - 65;
        let keyChar = key.charCodeAt(j) - 65;
        let newChar = (stringChar - keyChar + 26) % 26;
        newSymbol = String.fromCharCode(newChar + 65);
        j = (j + 1) % key.length;
      }
      message += newSymbol;
    }
    if (this.isDirect === false) {
      message = message.split("").reverse().join("");
    }
    return message;
  }
}

module.exports = {
  VigenereCipheringMachine
};
