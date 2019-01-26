import { ActionNames } from '@constants';
import { IDataState } from 'reduxTypes';
import { Reducer } from 'redux';

const defaultState: IDataState = {
    data: [],
    loading: false,
    error: undefined,
};

const reducer: Reducer<IDataState> = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ActionNames.DATA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ActionNames.DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case ActionNames.DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
            };
        default:
            return state;
    }
}


export default reducer;