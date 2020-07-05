import createReducer from 'utils/createReducer'
import RequestStatus from './RequestStatus'

export const START_LOADING = 'START_LOADING '
export const FINISH_LOADING = 'FINISH_LOADING'
export const FAILURE_LOADING = 'FAILURE_LOADING'

const reducer = createReducer({
    [START_LOADING]: (state) => {
        return {
            ...state,
           status: RequestStatus.PENDING,
        }
    },
    [FINISH_LOADING]: (
        state,
        {
            payload: {
                data,
            },
        },
    ) => {
        return {
            ...state,
            status: RequestStatus.SUCCESS,
            data,
        }
    },
    [FAILURE_LOADING]: (
            state,
        {
            err,
        },
    ) => {
        return {
            ...state,
            status: RequestStatus.FAILURE,
            err,
        }
    },
})

export default reducer
