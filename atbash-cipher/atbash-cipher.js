import R from 'ramda';

const ALPHABET_LENGTH = 26;
const CHAR_CODE_OFFSET = 96;

const toCharCode = R.invoker(0, 'charCodeAt');
const toLowerLetters = R.compose(R.split(''), R.toLower);

const flippedSubtract = R.flip(R.subtract);

const toAlphabetIndex = flippedSubtract(CHAR_CODE_OFFSET);
const fromAlphabetIndex = flippedSubtract(-(CHAR_CODE_OFFSET + 1));

const invertAlphabetIndex = R.pipe(flippedSubtract(ALPHABET_LENGTH), Math.abs);
const invertCharCode = R.pipe(toAlphabetIndex, invertAlphabetIndex, fromAlphabetIndex);

const stripSpaces = R.replace(/[. ]/g, '');

const cypher = R.pipe(R.toLower, stripSpaces, toCharCode, invertCharCode, String.fromCharCode);

export default {
  encode: R.pipe(toLowerLetters, R.map(cypher), R.splitEvery(6), R.map(R.join('')), R.join(' '))
}

