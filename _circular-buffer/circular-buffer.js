/* eslint-disable no-multi-spaces */
import R from 'ramda';

export const BufferFullError = new Error('BUFFER_FULL');
export const BufferEmptyError = new Error('BUFFER_EMPTY');

const thro = err => { throw err; };

export default function (bufferLength) {
  const buffer = [];
  const isFull = R.pipe(R.length, R.equals(bufferLength));
  const isNull = R.pipe(R.isNil, R.always);

  const circularBuffer = {
    read: () => R.cond([
      [R.isEmpty, () => thro(BufferEmptyError)],
      [R.T,       () => buffer.shift()],
    ])(buffer),

    write: val => R.cond([
      [isFull,      () => thro(BufferFullError)],
      [isNull(val), () => {}],
      [R.T,         () => buffer.push(val)],
    ])(buffer),

    forceWrite: val => R.cond([
      [isFull, () => buffer.shift() && circularBuffer.write(val)],
      [R.T,    () => circularBuffer.write(val)],
    ])(buffer),

    clear: () => { buffer.length = 0; },
  };

  return circularBuffer;
}
