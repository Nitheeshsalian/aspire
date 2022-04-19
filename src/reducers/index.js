import { combineReducers } from 'redux'

import { debitCardReducer } from './debitCardReducer'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    debit: debitCardReducer,
})

export default rootReducer