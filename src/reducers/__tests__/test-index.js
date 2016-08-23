import test from 'ava';

import sinon from 'sinon';
import proxyquire from 'proxyquire';
import navigation from '../navigation';


test('It calls combineReducers passing in the navigation', t => {
  const stubbedCombineReducers = sinon.stub();
  const index = proxyquire('../index', {
    redux: {
      combineReducers: stubbedCombineReducers
    }
  }).default;
  const expected = true;
  const actual = stubbedCombineReducers.calledWith({navigation});
  t.deepEqual(expected, actual);
});
