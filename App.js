/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import store from './src/reducers/store';
import {Provider} from 'react-redux';

import Routes from './src/index';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
