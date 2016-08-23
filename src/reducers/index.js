import { combineReducers } from 'redux';

import navigation from './navigation';
import navWrapperWidth from './navWrapperWidth';
import collapsedNavOpen from './collapsedNavOpen';


export default combineReducers({
  navigation,
  navWrapperWidth,
  collapsedNavOpen
});
