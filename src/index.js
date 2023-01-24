const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
// write your solution here
let arraySliced = [];
let symbolsSliced = '';

for (let i = 0; i < expr.length; i += 10) {
    let symbolsSliced = expr.slice(i, (i + 10)).replace('**********', ' ');
    arraySliced.push(symbolsSliced);
}

let arrayDecoded = [];

for (let i = 0; i < arraySliced.length; i++) {
    let morseString = '';
    if (arraySliced[i] == ' ') {
        arrayDecoded.push(arraySliced[i]);
    } else {
        for (let j = 0; j < arraySliced[i].length; j += 2) {
            symbolsSliced = arraySliced[i].substr(j, 2);
            (symbolsSliced == '11') ? symbolsSliced = '-' 
            : (symbolsSliced == '10') ? symbolsSliced = '.'
            : symbolsSliced = '';
            morseString += symbolsSliced;
            console.log(morseString)
        }
        arrayDecoded.push(MORSE_TABLE[morseString]);
        console.log(arrayDecoded)
    }
}
return arrayDecoded.join('');
}

module.exports = {
    decode
}