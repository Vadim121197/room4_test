import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { executeReducers } from '../reducers/executeReducers'
import { trackReducers } from '../reducers/tracksReducers'

export const rootReducer = combineReducers({
    tracks: trackReducers,
    execute: executeReducers,
    form: formReducer,
})
