import {
    useReducer,
    useEffect,
} from 'react'

import reducer,{
    START_LOADING,
    FINISH_LOADING,
    FAILURE_LOADING,
} from './reducer'
import RequestStatus from './RequestStatus'

export interface Response<T> {
    data?: T;
    status: RequestStatus;
    err?: Error;
}

const useRemoteData = (
    load: () => Promise<any>,
): Response<any> => {
    const [state, dispatch,] = useReducer(
        reducer, {
            status: RequestStatus.PRISTIN,
        },
    )

    useEffect(()=>{
        dispatch({
            type: START_LOADING,
        })
        load()
        .then((data)=>{
            dispatch({
                type: FINISH_LOADING,
                payload: {
                    data,
                },
            })
        })
        .catch((err) => {
            dispatch({
                type: FAILURE_LOADING,
                err,
            })
        })
    },
    [
        load,
    ])

    return state
}

export default useRemoteData
