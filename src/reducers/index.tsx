import { combineReducers } from 'redux';
import todo from './todo';
import data from "./data";
import { IApplicationState } from 'reduxTypes';

const rootReducer = combineReducers<IApplicationState>({
    todo,
    data
});
export default rootReducer;