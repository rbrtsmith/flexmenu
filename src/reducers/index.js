import { combineReducers } from 'redux';

import navigation from './navigation';
import navWrapperWidth from './navWrapperWidth';
import collapsedNavOpen from './collapsedNavOpen';
import collapsedNavHeight from './collapsedNavHeight';


export default combineReducers({
  navigation,
  navWrapperWidth,
  collapsedNavOpen,
  collapsedNavHeight
});
