import {combineReducers} from 'redux';

import {debitCardReducer} from './debitCardReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `debit`, handled by `debitCardReducer`
  debit: debitCardReducer,
});

export default rootReducer;
