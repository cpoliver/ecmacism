import R from 'ramda';

export default {
  parse: R.pipe(
    R.replace(/([a-z])([A-Z])/, '$1 $2'),
    R.split(/[ -]/),
    R.map(R.head),
    R.join(''),
    R.toUpper
  )
};
