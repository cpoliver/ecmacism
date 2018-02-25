import R from 'ramda';

export default function (name) {
	const defaultName = 'you';
	const stringOrDefault = R.when(R.isEmpty, R.always(defaultName));
	const nameOrDefault = stringOrDefault(name);
	
  return `One for ${nameOrDefault}, one for me.`;
};
