import TYPES from '../actions/types';

const initialState = {
    limit: 1000
}

// Use the initialState as a default value
export function debitCardReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case TYPES.INCREMENT_LIMIT:
            return {
                ...state,
                limit: action.payload
            };
        case TYPES.RESET_LIMIT:
            return {
                ...state,
                limit: 0
            };
        case TYPES.USER_FETCH_SUCCEEDED:
            return {
                ...state,
                limit: 2020202
            }

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}