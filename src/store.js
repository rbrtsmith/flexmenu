import { createStore } from 'redux';

import rootReducer from './reducers/index';

import categories from './data/categories';
import buildNavigation from './utilities/buildNavigation';


const navigation = buildNavigation(categories);

const defaultState = {
  navigation,
  navWrapperWidth: 0,
  collapsedNavOpen: false
};


const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export default store;
