interface Action {
    type: string;
    payload?: any;
    meta?: any;
    err?: any;
}

interface Reducer {
    (state: any, action: Action): any;
}

interface ReducerMap {
    [key: string]: Reducer;
}

const createReducer = (
    handlers: ReducerMap,
    defaultState = undefined,
) => {
    return (state = defaultState, action: Action): any => {
        const {
            type,
        } = action

        const handler = handlers[type]

        if (!handler) {
            return state
        }

        return handler(state, action)
    }
}

export default createReducer
