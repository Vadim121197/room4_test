import { combineReducers } from 'redux'
import { trackReducers } from '../reducers/tracksReducers'

export const rootReducer = combineReducers({
    tracks: trackReducers,
})
