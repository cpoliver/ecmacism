import R from 'ramda';

const containsChars = R.test(/[a-zA-Z]/);
const isSameInUpper = str => R.pipe(R.equals(R.toUpper(str)))(str);
const isWhitespaceOnly = R.test(/^\s+$/);

const isShouting = R.both(containsChars, isSameInUpper);
const isSilence = R.either(isWhitespaceOnly, R.equals(''));
const isQuestion = R.pipe(R.split(''), R.takeLast(1), R.equals(['?']));

export default () => ({
  hey: R.cond([
    [isShouting, R.always('Whoa, chill out!')],
    [isSilence,  R.always('Fine. Be that way!')],
    [isQuestion, R.always('Sure.')],
    [R.T,        R.always('Whatever.')]
  ])
});
