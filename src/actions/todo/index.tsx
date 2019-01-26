import { action } from 'typesafe-actions';
import { ActionNames } from '@constants';

export const todoAdd = (text: string) => action(ActionNames.ADD_TODO, text);
export const todoRemove = (index: number) => action(ActionNames.REMOVE_TODO, index);
export const todoToggle = (index: number) => action(ActionNames.TOGGLE_TODO, index);

