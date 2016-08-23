import test from 'ava';
import deepFreeze from 'deep-freeze';

import navigation from '../navigation';


test('It calls combineReducers passing in the navigation', t => {
  const stateBefore = [
    {
      text: 'foo',
      width: 0
    },
    {
      text: 'bar',
      width: 0
    }
  ];
  deepFreeze(stateBefore);
  const action = {
    type: 'ADD_WIDTHS',
    payload: [100,200]
  };
  const expected = [
    {
      text: 'foo',
      width: 100
    },
    {
      text: 'bar',
      width: 200
    }
  ];
  const actual = navigation(stateBefore, action);
  t.deepEqual(expected, actual);
});
