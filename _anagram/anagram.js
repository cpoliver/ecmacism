import { and, complement, compose, concat, equals, filter, flatten, identity, pipe, sortBy, split, toLower } from 'ramda';

const toSortedLetters = pipe(toLower, split(''), sortBy(identity));

const isAnagramOf = word => potential => equals(
  toSortedLetters(word),
  toSortedLetters(potential)
);

const isWordDifferentTo = word => potential => complement(equals)(
  toLower(word), toLower(potential)
);

const matches = word => potential => and(
  isAnagramOf(word)(potential),
  isWordDifferentTo(word)(potential)
);

const arrayify = (...args) => flatten(concat([], args));

export default word => ({
  matches: pipe(arrayify, filter(matches(word)))
});



