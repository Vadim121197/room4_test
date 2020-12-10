import { API_KEY, EXECUTE_URL } from '../../data/constants'
import {
    FETCH_EXECUTOR_SUCCESS,
    FETCH_EXECUTOR_FAILURE,
    FETCH_EXECUTOR_STARTED,
} from './actionsType'

export const fetchExecutor = (id) => {
    return (dispatch) => {
        dispatch(fetchExecutorStarted())

        fetch(`${EXECUTE_URL}${id}&api_key=${API_KEY}&format=json`)
            .then((res) => res.json())
            .then((json) => dispatch(fetchExecutorSuccess(json, id)))
            .catch((error) => dispatch(fetchExecutorFailure(error.message)))
    }
}

const fetchExecutorStarted = () => ({
    type: FETCH_EXECUTOR_STARTED,
})

const fetchExecutorSuccess = (executor, id) => ({
    type: FETCH_EXECUTOR_SUCCESS,
    payload: executor,
    id: id,
})

const fetchExecutorFailure = (error) => ({
    type: FETCH_EXECUTOR_FAILURE,
    payload: error,
})
