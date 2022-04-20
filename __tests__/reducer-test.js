/**
 * @format
 */

import 'react-native';
import React from 'react';
import configureStore from 'redux-mock-store';
import {updateLimit} from '../src/actions/debitAction';
const mockStore = configureStore();
const store = mockStore();

//Mock font awesome
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe('Reducer mock', () => {
  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        payload: 5000,
        type: 'INCREMENT_LIMIT',
      },
    ];

    store.dispatch(updateLimit(5000));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Match snapshot', () => {
    store.dispatch(updateLimit(5000));
    expect(store.getActions()).toMatchSnapshot();
  });
});
