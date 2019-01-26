import { ActionNames } from '@constants';
import { ITodoState } from 'reduxTypes';
import { Reducer } from 'redux';

const defaultState: ITodoState = {
    todoList: [{
        text: "pre-filled",
        done: false,
    }],
}

const reducer: Reducer<ITodoState> = (state = defaultState, { type, payload }) => {
    console.log(type, payload);
    const { todoList } = state;
    switch (type) {
        case ActionNames.ADD_TODO:
            return {
                ...state,
                todoList: [...todoList, { text: payload, done: false }],
            }
        case ActionNames.REMOVE_TODO:
            return {
                ...state,
                todoList: [...todoList.filter((_, index) => index !== payload)]
            };
        case ActionNames.TOGGLE_TODO:
            return {
                ...state,
                todoList: [...todoList.map((item, index) => {
                    if (index === payload) {
                        return {
                            ...item,
                            done: !item.done
                        }
                    }
                    return item;
                })]
            };
        default:
            return state;
    }
}


export default reducer;