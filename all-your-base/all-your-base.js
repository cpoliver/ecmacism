import R from 'ramda';

const pInt = R.flip(R.curry(parseInt));
const toBase = base => number => Number.prototype.toString.call(number, base);

export default () => ({
  convert: (digits, baseFrom, baseTo) => R.pipe(
    R.join(''),
    pInt(baseFrom),
    toBase(baseTo),
    R.split(''),
    R.map(pInt(baseTo))
  )(digits)
});
