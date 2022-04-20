import TYPES from './types';

export function updateLimit(payload) {
  return {
    type: TYPES.INCREMENT_LIMIT,
    payload: payload,
  };
}

export function getUser(payload) {
  return {
    type: TYPES.USER_FETCH_REQUESTED,
    payload: payload,
  };
}
