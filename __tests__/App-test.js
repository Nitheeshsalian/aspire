/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import store from '../src/reducers/store'
import { Provider } from 'react-redux'
import Routes from '../src/index';
import { DebitCardScreen } from '../src/components/debitCard/debitCardScreen'

//Mock font awesome
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}))

describe('<App>', () => {
  it('renders app correctly', () => {
    renderer.create(
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });
});

//test debit card screen
describe('<DebitCardScreen>', () => {
  it('renders DebitCardScreen correctly', () => {
    renderer.create(
      <Provider store={store}>
        <DebitCardScreen />
      </Provider>
    );
  });


  //create snapshot and compare
  it('test snapshot', () => {
    const tree = renderer
      .create(<Provider store={store}>
        <DebitCardScreen />
      </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});


describe("Reducer test", () => {

  it("Should set the supplied initial state", () => {
    expect(store.getState()).toEqual({
      debit: {
        limit: 1000
      }
    });
  });

  it("Mock update action set limit", () => {
    const dispatch = jest.fn();
    expect(store.getState()).toEqual({
      debit: {
        limit: 1000
      }
    });
  });
});