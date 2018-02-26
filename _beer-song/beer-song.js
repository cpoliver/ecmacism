/* eslint-disable no-multi-spaces */
import R from 'ramda';

const part2 = R.pipe(
  R.unless(R.is(String), R.dec()),
  R.cond([
    [R.equals(-1),   () => 'Go to the store and buy some more, 99 bottles of beer on the wall.'],
    [R.equals(0),    () => 'Take it down and pass it around, no more bottles of beer on the wall.'],
    [R.equals(1), count => `Take one down and pass it around, ${count} bottle of beer on the wall.`],
    [R.T,         count => `Take one down and pass it around, ${count} bottles of beer on the wall.`],
  ])
);

const part1 = R.cond([
  [R.equals(0),    () => 'No more bottles of beer on the wall, no more bottles of beer.'],
  [R.equals(1), count => `${count} bottle of beer on the wall, ${count} bottle of beer.`],
  [R.T,         count => `${count} bottles of beer on the wall, ${count} bottles of beer.`],
]);

const verse = beerCount => `${part1(beerCount)}\n${part2(beerCount)}\n`;

const sing = (fromVerse = 99, toVerse = 0) => R.join(
  '\n',
  R.map(verse, R.reverse(R.range(toVerse, fromVerse + 1)))
);

export default {
  sing,
  verse
};
