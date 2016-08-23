import test from 'ava';
import deepFreeze from 'deep-freeze';

import buildNavigation from '../buildNavigation';

test('It takes the categories array and maps into an array of navigaiton objects', t => {
  const beforeValue = ["foo", "bar"];
  const expected = [
    {
      text: 'foo',
      collapsed: true,
      width: 0
    },
    {
      text: 'bar',
      collapsed: true,
      width: 0
    }
  ];
  deepFreeze(beforeValue);
  const actual = buildNavigation(beforeValue);
  t.deepEqual(expected, actual);
});
