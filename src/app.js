import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import NavigationContainer from './components/NavigationContainer';
import MainContent from './components/MainContent';

const App = () => (
  <div>
    <Provider store={store}>
      <div>
        <NavigationContainer />
        <MainContent />
      </div>
    </Provider>
  </div>
);

render(<App />, document.querySelector('#app'));
