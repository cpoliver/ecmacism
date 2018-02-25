import R from 'ramda';

export default function (year) {
  const isDivisibleBy = devisor => x => R.equals(R.modulo(x, devisor), 0);

  const isNotExceptionYear = R.either(isDivisibleBy(400), R.complement(isDivisibleBy(100)));

  const isLeapYear = R.both(isDivisibleBy(4), isNotExceptionYear);

	return {
    isLeap: R.always(isLeapYear(year))
	};
}
