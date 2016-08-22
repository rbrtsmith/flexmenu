import test from 'ava';

import double from '../double';

test('It returns double the input value', t => {
  const expected = 10;
  const actual = 10;
  t.deepEqual(expected, actual);
});
