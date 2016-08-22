import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Foo from '../Foo';

test('It prints Hello React!!', t => {
  const $ = shallow(<Foo />);

  const expected = 'Hello React!!';
  const actual = $.props().children;
  t.deepEqual(expected, actual);
});
