import { API_URL } from '../../data/constants'
import {
    FETCH_TRACKS_STARTED,
    FETCH_TRACKS_SUCCESS,
    FETCH_TRACKS_FAILURE,
} from './actionsType'

export const fetchTracks = () => {
    return dispatch => {
        dispatch(fetchTracksStarted())

        fetch(API_URL)
            .then(res => res.json())
            .then(json => dispatch(fetchTracksSuccess(json)))
            .catch(error => dispatch(fetchTracksFailure(error.message)))
    }
}

const fetchTracksStarted = () => ({
    type: FETCH_TRACKS_STARTED,
})

const fetchTracksSuccess = tracks => ({
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
})

const fetchTracksFailure = error => ({
    type: FETCH_TRACKS_FAILURE,
    payload: error,
})
