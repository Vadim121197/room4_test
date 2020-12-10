import {
    FETCH_EXECUTOR_SUCCESS,
    FETCH_EXECUTOR_FAILURE,
    FETCH_EXECUTOR_STARTED,
} from '../actions/actionsType'

const initialState = {
    isLoading: false,
    execute: {},
    error: null,
}

export const executeReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXECUTOR_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_EXECUTOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                execute: { ...state.execute, [action.id]: action.payload },
            }
        case FETCH_EXECUTOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
