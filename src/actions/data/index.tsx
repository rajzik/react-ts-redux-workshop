import { ActionNames } from '@constants';
import { action } from 'typesafe-actions';


export const dataRequest = () => action(ActionNames.DATA_REQUEST);
export const dataSuccess = (data: any) => action(ActionNames.DATA_SUCCESS, data);
export const dataError = (error: string) => action(ActionNames.DATA_ERROR, error);

