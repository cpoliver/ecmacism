import R from 'ramda';

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

const modulo = R.flip(R.modulo);
const padNum = R.pipe(R.toString, R.invoker(2, 'padStart')(2)('0'));

const parseTime = (hours, minutes) => {
  const totalHours = modulo(HOURS_IN_DAY, hours);
  const totalMinutes = (totalHours * MINUTES_IN_HOUR) + minutes;

  const actualHours = modulo(HOURS_IN_DAY, Math.floor(totalMinutes / MINUTES_IN_HOUR));
  const actualMinutes = modulo(MINUTES_IN_HOUR, totalMinutes);

  return R.pipe(
    R.map(padNum),
    R.join(':')
  )([actualHours, actualMinutes]);
};

export default (hours = 0, minutes = 0) => ({
  toString: () => parseTime(hours, minutes)
});
