import test from 'ava';

import { addWidths } from '../actions';

const payload = [1,2,3];

test('addwidths dispatches an action', t => {
  const expected = {
    type: 'ADD_WIDTHS',
    payload
  };
  const actual = addWidths(payload);
  t.deepEqual(expected, actual);
});
