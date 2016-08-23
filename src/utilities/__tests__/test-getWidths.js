import test from 'ava';

import getWidths from '../getWidths';


test('It gets the widths of each nav item and puts them into an array', t => {
  const navItems = {
    item1: {
      offsetWidth: 55
    },
    item2: {
      offsetWidth: 20
    }
  };

  const expected = [55, 20];

  const actual = getWidths(navItems);
  t.deepEqual(expected, actual);
});
