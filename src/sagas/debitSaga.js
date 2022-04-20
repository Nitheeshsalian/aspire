import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {getLimit} from '../api/api';
import TYPES from '../actions/types';

// debit Saga: will be fired on USER_FETCH_REQUESTED actions
function* debit(action) {
  try {
    const data = yield call(getLimit, action.payload);
    yield put({type: TYPES.USER_FETCH_SUCCEEDED, payload: data});
  } catch (e) {
    yield put({type: TYPES.USER_FETCH_FAILED, message: e.message});
  }
}

/*
  Starts debitSaga on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* debitSaga() {
  yield takeEvery(TYPES.USER_FETCH_REQUESTED, debit);
}

export default debitSaga;
