import TYPES from './types'

export function updateLimit(payload) {
    return {
        type: TYPES.INCREMENT_LIMIT,
        payload: payload
    }
}