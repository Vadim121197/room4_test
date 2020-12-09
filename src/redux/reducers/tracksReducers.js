import {
    FETCH_TRACKS_STARTED,
    FETCH_TRACKS_SUCCESS,
    FETCH_TRACKS_FAILURE,
} from '../actions/actionsType'

const initialState = {
    isLoading: false,
    tracks: {},
    error: null,
}

export const trackReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tracks: action.payload,
            }
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
